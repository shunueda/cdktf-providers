// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_action NetworkSecurityRule#ad_rule_action}
  */
  readonly adRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_target_group_default_internal_policy NetworkSecurityRule#ad_rule_target_group_default_internal_policy}
  */
  readonly adRuleTargetGroupDefaultInternalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_target_group_filter_kind_list NetworkSecurityRule#ad_rule_target_group_filter_kind_list}
  */
  readonly adRuleTargetGroupFilterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_target_group_filter_type NetworkSecurityRule#ad_rule_target_group_filter_type}
  */
  readonly adRuleTargetGroupFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_target_group_peer_specification_type NetworkSecurityRule#ad_rule_target_group_peer_specification_type}
  */
  readonly adRuleTargetGroupPeerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#allow_ipv6_traffic NetworkSecurityRule#allow_ipv6_traffic}
  */
  readonly allowIpv6Traffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_action NetworkSecurityRule#app_rule_action}
  */
  readonly appRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_target_group_default_internal_policy NetworkSecurityRule#app_rule_target_group_default_internal_policy}
  */
  readonly appRuleTargetGroupDefaultInternalPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_target_group_filter_kind_list NetworkSecurityRule#app_rule_target_group_filter_kind_list}
  */
  readonly appRuleTargetGroupFilterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_target_group_filter_type NetworkSecurityRule#app_rule_target_group_filter_type}
  */
  readonly appRuleTargetGroupFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_target_group_peer_specification_type NetworkSecurityRule#app_rule_target_group_peer_specification_type}
  */
  readonly appRuleTargetGroupPeerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#description NetworkSecurityRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#id NetworkSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#is_policy_hitlog_enabled NetworkSecurityRule#is_policy_hitlog_enabled}
  */
  readonly isPolicyHitlogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_action NetworkSecurityRule#isolation_rule_action}
  */
  readonly isolationRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_first_entity_filter_kind_list NetworkSecurityRule#isolation_rule_first_entity_filter_kind_list}
  */
  readonly isolationRuleFirstEntityFilterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_first_entity_filter_type NetworkSecurityRule#isolation_rule_first_entity_filter_type}
  */
  readonly isolationRuleFirstEntityFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_second_entity_filter_kind_list NetworkSecurityRule#isolation_rule_second_entity_filter_kind_list}
  */
  readonly isolationRuleSecondEntityFilterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_second_entity_filter_type NetworkSecurityRule#isolation_rule_second_entity_filter_type}
  */
  readonly isolationRuleSecondEntityFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#owner_reference NetworkSecurityRule#owner_reference}
  */
  readonly ownerReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#project_reference NetworkSecurityRule#project_reference}
  */
  readonly projectReference?: { [key: string]: string };
  /**
  * ad_rule_inbound_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_inbound_allow_list NetworkSecurityRule#ad_rule_inbound_allow_list}
  */
  readonly adRuleInboundAllowList?: NetworkSecurityRuleAdRuleInboundAllowListStruct[] | cdktf.IResolvable;
  /**
  * ad_rule_outbound_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_outbound_allow_list NetworkSecurityRule#ad_rule_outbound_allow_list}
  */
  readonly adRuleOutboundAllowList?: NetworkSecurityRuleAdRuleOutboundAllowListStruct[] | cdktf.IResolvable;
  /**
  * ad_rule_target_group_filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ad_rule_target_group_filter_params NetworkSecurityRule#ad_rule_target_group_filter_params}
  */
  readonly adRuleTargetGroupFilterParams?: NetworkSecurityRuleAdRuleTargetGroupFilterParams[] | cdktf.IResolvable;
  /**
  * app_rule_inbound_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_inbound_allow_list NetworkSecurityRule#app_rule_inbound_allow_list}
  */
  readonly appRuleInboundAllowList?: NetworkSecurityRuleAppRuleInboundAllowListStruct[] | cdktf.IResolvable;
  /**
  * app_rule_outbound_allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_outbound_allow_list NetworkSecurityRule#app_rule_outbound_allow_list}
  */
  readonly appRuleOutboundAllowList?: NetworkSecurityRuleAppRuleOutboundAllowListStruct[] | cdktf.IResolvable;
  /**
  * app_rule_target_group_filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#app_rule_target_group_filter_params NetworkSecurityRule#app_rule_target_group_filter_params}
  */
  readonly appRuleTargetGroupFilterParams?: NetworkSecurityRuleAppRuleTargetGroupFilterParams[] | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#categories NetworkSecurityRule#categories}
  */
  readonly categories?: NetworkSecurityRuleCategories[] | cdktf.IResolvable;
  /**
  * isolation_rule_first_entity_filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_first_entity_filter_params NetworkSecurityRule#isolation_rule_first_entity_filter_params}
  */
  readonly isolationRuleFirstEntityFilterParams?: NetworkSecurityRuleIsolationRuleFirstEntityFilterParams[] | cdktf.IResolvable;
  /**
  * isolation_rule_second_entity_filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#isolation_rule_second_entity_filter_params NetworkSecurityRule#isolation_rule_second_entity_filter_params}
  */
  readonly isolationRuleSecondEntityFilterParams?: NetworkSecurityRuleIsolationRuleSecondEntityFilterParams[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#timeouts NetworkSecurityRule#timeouts}
  */
  readonly timeouts?: NetworkSecurityRuleTimeouts;
}
export interface NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAdRuleInboundAllowListFilterParamsToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#code NetworkSecurityRule#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#type NetworkSecurityRule#type}
  */
  readonly type?: string;
}

export function networkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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

export class NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: true, optional: true, required: false
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
}

export class NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleInboundAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#expiration_time NetworkSecurityRule#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_kind_list NetworkSecurityRule#filter_kind_list}
  */
  readonly filterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_type NetworkSecurityRule#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet NetworkSecurityRule#ip_subnet}
  */
  readonly ipSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet_prefix_length NetworkSecurityRule#ip_subnet_prefix_length}
  */
  readonly ipSubnetPrefixLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#network_function_chain_reference NetworkSecurityRule#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#peer_specification_type NetworkSecurityRule#peer_specification_type}
  */
  readonly peerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol?: string;
  /**
  * address_group_inclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#address_group_inclusion_list NetworkSecurityRule#address_group_inclusion_list}
  */
  readonly addressGroupInclusionList?: NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable;
  /**
  * filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_params NetworkSecurityRule#filter_params}
  */
  readonly filterParams?: NetworkSecurityRuleAdRuleInboundAllowListFilterParams[] | cdktf.IResolvable;
  /**
  * icmp_type_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#icmp_type_code_list NetworkSecurityRule#icmp_type_code_list}
  */
  readonly icmpTypeCodeList?: NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable;
  /**
  * service_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#service_group_list NetworkSecurityRule#service_group_list}
  */
  readonly serviceGroupList?: NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable;
  /**
  * tcp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#tcp_port_range_list NetworkSecurityRule#tcp_port_range_list}
  */
  readonly tcpPortRangeList?: NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * udp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#udp_port_range_list NetworkSecurityRule#udp_port_range_list}
  */
  readonly udpPortRangeList?: NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable;
}

export function networkSecurityRuleAdRuleInboundAllowListStructToTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterKindList),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    ip_subnet: cdktf.stringToTerraform(struct!.ipSubnet),
    ip_subnet_prefix_length: cdktf.stringToTerraform(struct!.ipSubnetPrefixLength),
    network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.networkFunctionChainReference),
    peer_specification_type: cdktf.stringToTerraform(struct!.peerSpecificationType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    address_group_inclusion_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToTerraform, true)(struct!.addressGroupInclusionList),
    filter_params: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListFilterParamsToTerraform, true)(struct!.filterParams),
    icmp_type_code_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToTerraform, true)(struct!.icmpTypeCodeList),
    service_group_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToTerraform, true)(struct!.serviceGroupList),
    tcp_port_range_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToTerraform, true)(struct!.tcpPortRangeList),
    udp_port_range_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToTerraform, true)(struct!.udpPortRangeList),
  }
}


export function networkSecurityRuleAdRuleInboundAllowListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleInboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_kind_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterKindList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnetPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_function_chain_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    peer_specification_type: {
      value: cdktf.stringToHclTerraform(struct!.peerSpecificationType),
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
    address_group_inclusion_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform, true)(struct!.addressGroupInclusionList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructList",
    },
    filter_params: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListFilterParamsToHclTerraform, true)(struct!.filterParams),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListFilterParamsList",
    },
    icmp_type_code_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform, true)(struct!.icmpTypeCodeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructList",
    },
    service_group_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToHclTerraform, true)(struct!.serviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructList",
    },
    tcp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToHclTerraform, true)(struct!.tcpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructList",
    },
    udp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToHclTerraform, true)(struct!.udpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleInboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleInboundAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._filterKindList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKindList = this._filterKindList;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._ipSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnet = this._ipSubnet;
    }
    if (this._ipSubnetPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetPrefixLength = this._ipSubnetPrefixLength;
    }
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._peerSpecificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSpecificationType = this._peerSpecificationType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._addressGroupInclusionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroupInclusionList = this._addressGroupInclusionList?.internalValue;
    }
    if (this._filterParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParams = this._filterParams?.internalValue;
    }
    if (this._icmpTypeCodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCodeList = this._icmpTypeCodeList?.internalValue;
    }
    if (this._serviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupList = this._serviceGroupList?.internalValue;
    }
    if (this._tcpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortRangeList = this._tcpPortRangeList?.internalValue;
    }
    if (this._udpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortRangeList = this._udpPortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleInboundAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._filterKindList = undefined;
      this._filterType = undefined;
      this._ipSubnet = undefined;
      this._ipSubnetPrefixLength = undefined;
      this._networkFunctionChainReference = undefined;
      this._peerSpecificationType = undefined;
      this._protocol = undefined;
      this._addressGroupInclusionList.internalValue = undefined;
      this._filterParams.internalValue = undefined;
      this._icmpTypeCodeList.internalValue = undefined;
      this._serviceGroupList.internalValue = undefined;
      this._tcpPortRangeList.internalValue = undefined;
      this._udpPortRangeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._filterKindList = value.filterKindList;
      this._filterType = value.filterType;
      this._ipSubnet = value.ipSubnet;
      this._ipSubnetPrefixLength = value.ipSubnetPrefixLength;
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._peerSpecificationType = value.peerSpecificationType;
      this._protocol = value.protocol;
      this._addressGroupInclusionList.internalValue = value.addressGroupInclusionList;
      this._filterParams.internalValue = value.filterParams;
      this._icmpTypeCodeList.internalValue = value.icmpTypeCodeList;
      this._serviceGroupList.internalValue = value.serviceGroupList;
      this._tcpPortRangeList.internalValue = value.tcpPortRangeList;
      this._udpPortRangeList.internalValue = value.udpPortRangeList;
    }
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // filter_kind_list - computed: true, optional: true, required: false
  private _filterKindList?: string[]; 
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }
  public set filterKindList(value: string[]) {
    this._filterKindList = value;
  }
  public resetFilterKindList() {
    this._filterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKindListInput() {
    return this._filterKindList;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // ip_subnet - computed: true, optional: true, required: false
  private _ipSubnet?: string; 
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }
  public set ipSubnet(value: string) {
    this._ipSubnet = value;
  }
  public resetIpSubnet() {
    this._ipSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetInput() {
    return this._ipSubnet;
  }

  // ip_subnet_prefix_length - computed: true, optional: true, required: false
  private _ipSubnetPrefixLength?: string; 
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }
  public set ipSubnetPrefixLength(value: string) {
    this._ipSubnetPrefixLength = value;
  }
  public resetIpSubnetPrefixLength() {
    this._ipSubnetPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetPrefixLengthInput() {
    return this._ipSubnetPrefixLength;
  }

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: true, required: false
  private _peerSpecificationType?: string; 
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }
  public set peerSpecificationType(value: string) {
    this._peerSpecificationType = value;
  }
  public resetPeerSpecificationType() {
    this._peerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSpecificationTypeInput() {
    return this._peerSpecificationType;
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

  // address_group_inclusion_list - computed: false, optional: true, required: false
  private _addressGroupInclusionList = new NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }
  public putAddressGroupInclusionList(value: NetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable) {
    this._addressGroupInclusionList.internalValue = value;
  }
  public resetAddressGroupInclusionList() {
    this._addressGroupInclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInclusionListInput() {
    return this._addressGroupInclusionList.internalValue;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams = new NetworkSecurityRuleAdRuleInboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }
  public putFilterParams(value: NetworkSecurityRuleAdRuleInboundAllowListFilterParams[] | cdktf.IResolvable) {
    this._filterParams.internalValue = value;
  }
  public resetFilterParams() {
    this._filterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams.internalValue;
  }

  // icmp_type_code_list - computed: false, optional: true, required: false
  private _icmpTypeCodeList = new NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }
  public putIcmpTypeCodeList(value: NetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable) {
    this._icmpTypeCodeList.internalValue = value;
  }
  public resetIcmpTypeCodeList() {
    this._icmpTypeCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeListInput() {
    return this._icmpTypeCodeList.internalValue;
  }

  // service_group_list - computed: false, optional: true, required: false
  private _serviceGroupList = new NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }
  public putServiceGroupList(value: NetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable) {
    this._serviceGroupList.internalValue = value;
  }
  public resetServiceGroupList() {
    this._serviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupListInput() {
    return this._serviceGroupList.internalValue;
  }

  // tcp_port_range_list - computed: false, optional: true, required: false
  private _tcpPortRangeList = new NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }
  public putTcpPortRangeList(value: NetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable) {
    this._tcpPortRangeList.internalValue = value;
  }
  public resetTcpPortRangeList() {
    this._tcpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeListInput() {
    return this._tcpPortRangeList.internalValue;
  }

  // udp_port_range_list - computed: false, optional: true, required: false
  private _udpPortRangeList = new NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
  public putUdpPortRangeList(value: NetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable) {
    this._udpPortRangeList.internalValue = value;
  }
  public resetUdpPortRangeList() {
    this._udpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeListInput() {
    return this._udpPortRangeList.internalValue;
  }
}

export class NetworkSecurityRuleAdRuleInboundAllowListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleInboundAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleInboundAllowListStructOutputReference {
    return new NetworkSecurityRuleAdRuleInboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAdRuleOutboundAllowListFilterParamsToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#code NetworkSecurityRule#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#type NetworkSecurityRule#type}
  */
  readonly type?: string;
}

export function networkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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

export class NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: true, optional: true, required: false
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
}

export class NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleOutboundAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#expiration_time NetworkSecurityRule#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_kind_list NetworkSecurityRule#filter_kind_list}
  */
  readonly filterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_type NetworkSecurityRule#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet NetworkSecurityRule#ip_subnet}
  */
  readonly ipSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet_prefix_length NetworkSecurityRule#ip_subnet_prefix_length}
  */
  readonly ipSubnetPrefixLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#network_function_chain_reference NetworkSecurityRule#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#peer_specification_type NetworkSecurityRule#peer_specification_type}
  */
  readonly peerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol?: string;
  /**
  * address_group_inclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#address_group_inclusion_list NetworkSecurityRule#address_group_inclusion_list}
  */
  readonly addressGroupInclusionList?: NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable;
  /**
  * filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_params NetworkSecurityRule#filter_params}
  */
  readonly filterParams?: NetworkSecurityRuleAdRuleOutboundAllowListFilterParams[] | cdktf.IResolvable;
  /**
  * icmp_type_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#icmp_type_code_list NetworkSecurityRule#icmp_type_code_list}
  */
  readonly icmpTypeCodeList?: NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable;
  /**
  * service_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#service_group_list NetworkSecurityRule#service_group_list}
  */
  readonly serviceGroupList?: NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable;
  /**
  * tcp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#tcp_port_range_list NetworkSecurityRule#tcp_port_range_list}
  */
  readonly tcpPortRangeList?: NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * udp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#udp_port_range_list NetworkSecurityRule#udp_port_range_list}
  */
  readonly udpPortRangeList?: NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable;
}

export function networkSecurityRuleAdRuleOutboundAllowListStructToTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterKindList),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    ip_subnet: cdktf.stringToTerraform(struct!.ipSubnet),
    ip_subnet_prefix_length: cdktf.stringToTerraform(struct!.ipSubnetPrefixLength),
    network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.networkFunctionChainReference),
    peer_specification_type: cdktf.stringToTerraform(struct!.peerSpecificationType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    address_group_inclusion_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToTerraform, true)(struct!.addressGroupInclusionList),
    filter_params: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListFilterParamsToTerraform, true)(struct!.filterParams),
    icmp_type_code_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToTerraform, true)(struct!.icmpTypeCodeList),
    service_group_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToTerraform, true)(struct!.serviceGroupList),
    tcp_port_range_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToTerraform, true)(struct!.tcpPortRangeList),
    udp_port_range_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToTerraform, true)(struct!.udpPortRangeList),
  }
}


export function networkSecurityRuleAdRuleOutboundAllowListStructToHclTerraform(struct?: NetworkSecurityRuleAdRuleOutboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_kind_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterKindList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnetPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_function_chain_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    peer_specification_type: {
      value: cdktf.stringToHclTerraform(struct!.peerSpecificationType),
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
    address_group_inclusion_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform, true)(struct!.addressGroupInclusionList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructList",
    },
    filter_params: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListFilterParamsToHclTerraform, true)(struct!.filterParams),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsList",
    },
    icmp_type_code_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform, true)(struct!.icmpTypeCodeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructList",
    },
    service_group_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToHclTerraform, true)(struct!.serviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructList",
    },
    tcp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToHclTerraform, true)(struct!.tcpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructList",
    },
    udp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToHclTerraform, true)(struct!.udpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleOutboundAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._filterKindList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKindList = this._filterKindList;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._ipSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnet = this._ipSubnet;
    }
    if (this._ipSubnetPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetPrefixLength = this._ipSubnetPrefixLength;
    }
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._peerSpecificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSpecificationType = this._peerSpecificationType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._addressGroupInclusionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroupInclusionList = this._addressGroupInclusionList?.internalValue;
    }
    if (this._filterParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParams = this._filterParams?.internalValue;
    }
    if (this._icmpTypeCodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCodeList = this._icmpTypeCodeList?.internalValue;
    }
    if (this._serviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupList = this._serviceGroupList?.internalValue;
    }
    if (this._tcpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortRangeList = this._tcpPortRangeList?.internalValue;
    }
    if (this._udpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortRangeList = this._udpPortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleOutboundAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._filterKindList = undefined;
      this._filterType = undefined;
      this._ipSubnet = undefined;
      this._ipSubnetPrefixLength = undefined;
      this._networkFunctionChainReference = undefined;
      this._peerSpecificationType = undefined;
      this._protocol = undefined;
      this._addressGroupInclusionList.internalValue = undefined;
      this._filterParams.internalValue = undefined;
      this._icmpTypeCodeList.internalValue = undefined;
      this._serviceGroupList.internalValue = undefined;
      this._tcpPortRangeList.internalValue = undefined;
      this._udpPortRangeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._filterKindList = value.filterKindList;
      this._filterType = value.filterType;
      this._ipSubnet = value.ipSubnet;
      this._ipSubnetPrefixLength = value.ipSubnetPrefixLength;
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._peerSpecificationType = value.peerSpecificationType;
      this._protocol = value.protocol;
      this._addressGroupInclusionList.internalValue = value.addressGroupInclusionList;
      this._filterParams.internalValue = value.filterParams;
      this._icmpTypeCodeList.internalValue = value.icmpTypeCodeList;
      this._serviceGroupList.internalValue = value.serviceGroupList;
      this._tcpPortRangeList.internalValue = value.tcpPortRangeList;
      this._udpPortRangeList.internalValue = value.udpPortRangeList;
    }
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // filter_kind_list - computed: true, optional: true, required: false
  private _filterKindList?: string[]; 
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }
  public set filterKindList(value: string[]) {
    this._filterKindList = value;
  }
  public resetFilterKindList() {
    this._filterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKindListInput() {
    return this._filterKindList;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // ip_subnet - computed: true, optional: true, required: false
  private _ipSubnet?: string; 
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }
  public set ipSubnet(value: string) {
    this._ipSubnet = value;
  }
  public resetIpSubnet() {
    this._ipSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetInput() {
    return this._ipSubnet;
  }

  // ip_subnet_prefix_length - computed: true, optional: true, required: false
  private _ipSubnetPrefixLength?: string; 
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }
  public set ipSubnetPrefixLength(value: string) {
    this._ipSubnetPrefixLength = value;
  }
  public resetIpSubnetPrefixLength() {
    this._ipSubnetPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetPrefixLengthInput() {
    return this._ipSubnetPrefixLength;
  }

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: true, required: false
  private _peerSpecificationType?: string; 
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }
  public set peerSpecificationType(value: string) {
    this._peerSpecificationType = value;
  }
  public resetPeerSpecificationType() {
    this._peerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSpecificationTypeInput() {
    return this._peerSpecificationType;
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

  // address_group_inclusion_list - computed: false, optional: true, required: false
  private _addressGroupInclusionList = new NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }
  public putAddressGroupInclusionList(value: NetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable) {
    this._addressGroupInclusionList.internalValue = value;
  }
  public resetAddressGroupInclusionList() {
    this._addressGroupInclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInclusionListInput() {
    return this._addressGroupInclusionList.internalValue;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams = new NetworkSecurityRuleAdRuleOutboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }
  public putFilterParams(value: NetworkSecurityRuleAdRuleOutboundAllowListFilterParams[] | cdktf.IResolvable) {
    this._filterParams.internalValue = value;
  }
  public resetFilterParams() {
    this._filterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams.internalValue;
  }

  // icmp_type_code_list - computed: false, optional: true, required: false
  private _icmpTypeCodeList = new NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }
  public putIcmpTypeCodeList(value: NetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable) {
    this._icmpTypeCodeList.internalValue = value;
  }
  public resetIcmpTypeCodeList() {
    this._icmpTypeCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeListInput() {
    return this._icmpTypeCodeList.internalValue;
  }

  // service_group_list - computed: false, optional: true, required: false
  private _serviceGroupList = new NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }
  public putServiceGroupList(value: NetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable) {
    this._serviceGroupList.internalValue = value;
  }
  public resetServiceGroupList() {
    this._serviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupListInput() {
    return this._serviceGroupList.internalValue;
  }

  // tcp_port_range_list - computed: false, optional: true, required: false
  private _tcpPortRangeList = new NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }
  public putTcpPortRangeList(value: NetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable) {
    this._tcpPortRangeList.internalValue = value;
  }
  public resetTcpPortRangeList() {
    this._tcpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeListInput() {
    return this._tcpPortRangeList.internalValue;
  }

  // udp_port_range_list - computed: false, optional: true, required: false
  private _udpPortRangeList = new NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
  public putUdpPortRangeList(value: NetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable) {
    this._udpPortRangeList.internalValue = value;
  }
  public resetUdpPortRangeList() {
    this._udpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeListInput() {
    return this._udpPortRangeList.internalValue;
  }
}

export class NetworkSecurityRuleAdRuleOutboundAllowListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleOutboundAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference {
    return new NetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAdRuleTargetGroupFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAdRuleTargetGroupFilterParamsToTerraform(struct?: NetworkSecurityRuleAdRuleTargetGroupFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAdRuleTargetGroupFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAdRuleTargetGroupFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAdRuleTargetGroupFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAdRuleTargetGroupFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAdRuleTargetGroupFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAdRuleTargetGroupFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference {
    return new NetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAppRuleInboundAllowListFilterParamsToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#code NetworkSecurityRule#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#type NetworkSecurityRule#type}
  */
  readonly type?: string;
}

export function networkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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

export class NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: true, optional: true, required: false
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
}

export class NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleInboundAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#expiration_time NetworkSecurityRule#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_kind_list NetworkSecurityRule#filter_kind_list}
  */
  readonly filterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_type NetworkSecurityRule#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet NetworkSecurityRule#ip_subnet}
  */
  readonly ipSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet_prefix_length NetworkSecurityRule#ip_subnet_prefix_length}
  */
  readonly ipSubnetPrefixLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#network_function_chain_reference NetworkSecurityRule#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#peer_specification_type NetworkSecurityRule#peer_specification_type}
  */
  readonly peerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol?: string;
  /**
  * address_group_inclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#address_group_inclusion_list NetworkSecurityRule#address_group_inclusion_list}
  */
  readonly addressGroupInclusionList?: NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable;
  /**
  * filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_params NetworkSecurityRule#filter_params}
  */
  readonly filterParams?: NetworkSecurityRuleAppRuleInboundAllowListFilterParams[] | cdktf.IResolvable;
  /**
  * icmp_type_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#icmp_type_code_list NetworkSecurityRule#icmp_type_code_list}
  */
  readonly icmpTypeCodeList?: NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable;
  /**
  * service_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#service_group_list NetworkSecurityRule#service_group_list}
  */
  readonly serviceGroupList?: NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable;
  /**
  * tcp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#tcp_port_range_list NetworkSecurityRule#tcp_port_range_list}
  */
  readonly tcpPortRangeList?: NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * udp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#udp_port_range_list NetworkSecurityRule#udp_port_range_list}
  */
  readonly udpPortRangeList?: NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable;
}

export function networkSecurityRuleAppRuleInboundAllowListStructToTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterKindList),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    ip_subnet: cdktf.stringToTerraform(struct!.ipSubnet),
    ip_subnet_prefix_length: cdktf.stringToTerraform(struct!.ipSubnetPrefixLength),
    network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.networkFunctionChainReference),
    peer_specification_type: cdktf.stringToTerraform(struct!.peerSpecificationType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    address_group_inclusion_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToTerraform, true)(struct!.addressGroupInclusionList),
    filter_params: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListFilterParamsToTerraform, true)(struct!.filterParams),
    icmp_type_code_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToTerraform, true)(struct!.icmpTypeCodeList),
    service_group_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToTerraform, true)(struct!.serviceGroupList),
    tcp_port_range_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToTerraform, true)(struct!.tcpPortRangeList),
    udp_port_range_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToTerraform, true)(struct!.udpPortRangeList),
  }
}


export function networkSecurityRuleAppRuleInboundAllowListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleInboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_kind_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterKindList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnetPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_function_chain_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    peer_specification_type: {
      value: cdktf.stringToHclTerraform(struct!.peerSpecificationType),
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
    address_group_inclusion_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform, true)(struct!.addressGroupInclusionList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructList",
    },
    filter_params: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListFilterParamsToHclTerraform, true)(struct!.filterParams),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListFilterParamsList",
    },
    icmp_type_code_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform, true)(struct!.icmpTypeCodeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructList",
    },
    service_group_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToHclTerraform, true)(struct!.serviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructList",
    },
    tcp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToHclTerraform, true)(struct!.tcpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructList",
    },
    udp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToHclTerraform, true)(struct!.udpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleInboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleInboundAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._filterKindList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKindList = this._filterKindList;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._ipSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnet = this._ipSubnet;
    }
    if (this._ipSubnetPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetPrefixLength = this._ipSubnetPrefixLength;
    }
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._peerSpecificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSpecificationType = this._peerSpecificationType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._addressGroupInclusionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroupInclusionList = this._addressGroupInclusionList?.internalValue;
    }
    if (this._filterParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParams = this._filterParams?.internalValue;
    }
    if (this._icmpTypeCodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCodeList = this._icmpTypeCodeList?.internalValue;
    }
    if (this._serviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupList = this._serviceGroupList?.internalValue;
    }
    if (this._tcpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortRangeList = this._tcpPortRangeList?.internalValue;
    }
    if (this._udpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortRangeList = this._udpPortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleInboundAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._filterKindList = undefined;
      this._filterType = undefined;
      this._ipSubnet = undefined;
      this._ipSubnetPrefixLength = undefined;
      this._networkFunctionChainReference = undefined;
      this._peerSpecificationType = undefined;
      this._protocol = undefined;
      this._addressGroupInclusionList.internalValue = undefined;
      this._filterParams.internalValue = undefined;
      this._icmpTypeCodeList.internalValue = undefined;
      this._serviceGroupList.internalValue = undefined;
      this._tcpPortRangeList.internalValue = undefined;
      this._udpPortRangeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._filterKindList = value.filterKindList;
      this._filterType = value.filterType;
      this._ipSubnet = value.ipSubnet;
      this._ipSubnetPrefixLength = value.ipSubnetPrefixLength;
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._peerSpecificationType = value.peerSpecificationType;
      this._protocol = value.protocol;
      this._addressGroupInclusionList.internalValue = value.addressGroupInclusionList;
      this._filterParams.internalValue = value.filterParams;
      this._icmpTypeCodeList.internalValue = value.icmpTypeCodeList;
      this._serviceGroupList.internalValue = value.serviceGroupList;
      this._tcpPortRangeList.internalValue = value.tcpPortRangeList;
      this._udpPortRangeList.internalValue = value.udpPortRangeList;
    }
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // filter_kind_list - computed: true, optional: true, required: false
  private _filterKindList?: string[]; 
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }
  public set filterKindList(value: string[]) {
    this._filterKindList = value;
  }
  public resetFilterKindList() {
    this._filterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKindListInput() {
    return this._filterKindList;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // ip_subnet - computed: true, optional: true, required: false
  private _ipSubnet?: string; 
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }
  public set ipSubnet(value: string) {
    this._ipSubnet = value;
  }
  public resetIpSubnet() {
    this._ipSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetInput() {
    return this._ipSubnet;
  }

  // ip_subnet_prefix_length - computed: true, optional: true, required: false
  private _ipSubnetPrefixLength?: string; 
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }
  public set ipSubnetPrefixLength(value: string) {
    this._ipSubnetPrefixLength = value;
  }
  public resetIpSubnetPrefixLength() {
    this._ipSubnetPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetPrefixLengthInput() {
    return this._ipSubnetPrefixLength;
  }

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: true, required: false
  private _peerSpecificationType?: string; 
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }
  public set peerSpecificationType(value: string) {
    this._peerSpecificationType = value;
  }
  public resetPeerSpecificationType() {
    this._peerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSpecificationTypeInput() {
    return this._peerSpecificationType;
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

  // address_group_inclusion_list - computed: false, optional: true, required: false
  private _addressGroupInclusionList = new NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }
  public putAddressGroupInclusionList(value: NetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable) {
    this._addressGroupInclusionList.internalValue = value;
  }
  public resetAddressGroupInclusionList() {
    this._addressGroupInclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInclusionListInput() {
    return this._addressGroupInclusionList.internalValue;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams = new NetworkSecurityRuleAppRuleInboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }
  public putFilterParams(value: NetworkSecurityRuleAppRuleInboundAllowListFilterParams[] | cdktf.IResolvable) {
    this._filterParams.internalValue = value;
  }
  public resetFilterParams() {
    this._filterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams.internalValue;
  }

  // icmp_type_code_list - computed: false, optional: true, required: false
  private _icmpTypeCodeList = new NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }
  public putIcmpTypeCodeList(value: NetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable) {
    this._icmpTypeCodeList.internalValue = value;
  }
  public resetIcmpTypeCodeList() {
    this._icmpTypeCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeListInput() {
    return this._icmpTypeCodeList.internalValue;
  }

  // service_group_list - computed: false, optional: true, required: false
  private _serviceGroupList = new NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }
  public putServiceGroupList(value: NetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct[] | cdktf.IResolvable) {
    this._serviceGroupList.internalValue = value;
  }
  public resetServiceGroupList() {
    this._serviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupListInput() {
    return this._serviceGroupList.internalValue;
  }

  // tcp_port_range_list - computed: false, optional: true, required: false
  private _tcpPortRangeList = new NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }
  public putTcpPortRangeList(value: NetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable) {
    this._tcpPortRangeList.internalValue = value;
  }
  public resetTcpPortRangeList() {
    this._tcpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeListInput() {
    return this._tcpPortRangeList.internalValue;
  }

  // udp_port_range_list - computed: false, optional: true, required: false
  private _udpPortRangeList = new NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
  public putUdpPortRangeList(value: NetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable) {
    this._udpPortRangeList.internalValue = value;
  }
  public resetUdpPortRangeList() {
    this._udpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeListInput() {
    return this._udpPortRangeList.internalValue;
  }
}

export class NetworkSecurityRuleAppRuleInboundAllowListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleInboundAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleInboundAllowListStructOutputReference {
    return new NetworkSecurityRuleAppRuleInboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAppRuleOutboundAllowListFilterParamsToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#code NetworkSecurityRule#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#type NetworkSecurityRule#type}
  */
  readonly type?: string;
}

export function networkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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

export class NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: true, optional: true, required: false
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
}

export class NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#kind NetworkSecurityRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#uuid NetworkSecurityRule#uuid}
  */
  readonly uuid?: string;
}

export function networkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#end_port NetworkSecurityRule#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#start_port NetworkSecurityRule#start_port}
  */
  readonly startPort?: number;
}

export function networkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleOutboundAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#expiration_time NetworkSecurityRule#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_kind_list NetworkSecurityRule#filter_kind_list}
  */
  readonly filterKindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_type NetworkSecurityRule#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet NetworkSecurityRule#ip_subnet}
  */
  readonly ipSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#ip_subnet_prefix_length NetworkSecurityRule#ip_subnet_prefix_length}
  */
  readonly ipSubnetPrefixLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#network_function_chain_reference NetworkSecurityRule#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#peer_specification_type NetworkSecurityRule#peer_specification_type}
  */
  readonly peerSpecificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}
  */
  readonly protocol?: string;
  /**
  * address_group_inclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#address_group_inclusion_list NetworkSecurityRule#address_group_inclusion_list}
  */
  readonly addressGroupInclusionList?: NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable;
  /**
  * filter_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#filter_params NetworkSecurityRule#filter_params}
  */
  readonly filterParams?: NetworkSecurityRuleAppRuleOutboundAllowListFilterParams[] | cdktf.IResolvable;
  /**
  * icmp_type_code_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#icmp_type_code_list NetworkSecurityRule#icmp_type_code_list}
  */
  readonly icmpTypeCodeList?: NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable;
  /**
  * service_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#service_group_list NetworkSecurityRule#service_group_list}
  */
  readonly serviceGroupList?: NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable;
  /**
  * tcp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#tcp_port_range_list NetworkSecurityRule#tcp_port_range_list}
  */
  readonly tcpPortRangeList?: NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * udp_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#udp_port_range_list NetworkSecurityRule#udp_port_range_list}
  */
  readonly udpPortRangeList?: NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable;
}

export function networkSecurityRuleAppRuleOutboundAllowListStructToTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterKindList),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    ip_subnet: cdktf.stringToTerraform(struct!.ipSubnet),
    ip_subnet_prefix_length: cdktf.stringToTerraform(struct!.ipSubnetPrefixLength),
    network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.networkFunctionChainReference),
    peer_specification_type: cdktf.stringToTerraform(struct!.peerSpecificationType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    address_group_inclusion_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructToTerraform, true)(struct!.addressGroupInclusionList),
    filter_params: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListFilterParamsToTerraform, true)(struct!.filterParams),
    icmp_type_code_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToTerraform, true)(struct!.icmpTypeCodeList),
    service_group_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructToTerraform, true)(struct!.serviceGroupList),
    tcp_port_range_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToTerraform, true)(struct!.tcpPortRangeList),
    udp_port_range_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToTerraform, true)(struct!.udpPortRangeList),
  }
}


export function networkSecurityRuleAppRuleOutboundAllowListStructToHclTerraform(struct?: NetworkSecurityRuleAppRuleOutboundAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_kind_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterKindList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnetPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_function_chain_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    peer_specification_type: {
      value: cdktf.stringToHclTerraform(struct!.peerSpecificationType),
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
    address_group_inclusion_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform, true)(struct!.addressGroupInclusionList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructList",
    },
    filter_params: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListFilterParamsToHclTerraform, true)(struct!.filterParams),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsList",
    },
    icmp_type_code_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform, true)(struct!.icmpTypeCodeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructList",
    },
    service_group_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructToHclTerraform, true)(struct!.serviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructList",
    },
    tcp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToHclTerraform, true)(struct!.tcpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructList",
    },
    udp_port_range_list: {
      value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToHclTerraform, true)(struct!.udpPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleOutboundAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._filterKindList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKindList = this._filterKindList;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._ipSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnet = this._ipSubnet;
    }
    if (this._ipSubnetPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetPrefixLength = this._ipSubnetPrefixLength;
    }
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._peerSpecificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSpecificationType = this._peerSpecificationType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._addressGroupInclusionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroupInclusionList = this._addressGroupInclusionList?.internalValue;
    }
    if (this._filterParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParams = this._filterParams?.internalValue;
    }
    if (this._icmpTypeCodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeCodeList = this._icmpTypeCodeList?.internalValue;
    }
    if (this._serviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupList = this._serviceGroupList?.internalValue;
    }
    if (this._tcpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortRangeList = this._tcpPortRangeList?.internalValue;
    }
    if (this._udpPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortRangeList = this._udpPortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleOutboundAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._filterKindList = undefined;
      this._filterType = undefined;
      this._ipSubnet = undefined;
      this._ipSubnetPrefixLength = undefined;
      this._networkFunctionChainReference = undefined;
      this._peerSpecificationType = undefined;
      this._protocol = undefined;
      this._addressGroupInclusionList.internalValue = undefined;
      this._filterParams.internalValue = undefined;
      this._icmpTypeCodeList.internalValue = undefined;
      this._serviceGroupList.internalValue = undefined;
      this._tcpPortRangeList.internalValue = undefined;
      this._udpPortRangeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._filterKindList = value.filterKindList;
      this._filterType = value.filterType;
      this._ipSubnet = value.ipSubnet;
      this._ipSubnetPrefixLength = value.ipSubnetPrefixLength;
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._peerSpecificationType = value.peerSpecificationType;
      this._protocol = value.protocol;
      this._addressGroupInclusionList.internalValue = value.addressGroupInclusionList;
      this._filterParams.internalValue = value.filterParams;
      this._icmpTypeCodeList.internalValue = value.icmpTypeCodeList;
      this._serviceGroupList.internalValue = value.serviceGroupList;
      this._tcpPortRangeList.internalValue = value.tcpPortRangeList;
      this._udpPortRangeList.internalValue = value.udpPortRangeList;
    }
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // filter_kind_list - computed: true, optional: true, required: false
  private _filterKindList?: string[]; 
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }
  public set filterKindList(value: string[]) {
    this._filterKindList = value;
  }
  public resetFilterKindList() {
    this._filterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKindListInput() {
    return this._filterKindList;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // ip_subnet - computed: true, optional: true, required: false
  private _ipSubnet?: string; 
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }
  public set ipSubnet(value: string) {
    this._ipSubnet = value;
  }
  public resetIpSubnet() {
    this._ipSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetInput() {
    return this._ipSubnet;
  }

  // ip_subnet_prefix_length - computed: true, optional: true, required: false
  private _ipSubnetPrefixLength?: string; 
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }
  public set ipSubnetPrefixLength(value: string) {
    this._ipSubnetPrefixLength = value;
  }
  public resetIpSubnetPrefixLength() {
    this._ipSubnetPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetPrefixLengthInput() {
    return this._ipSubnetPrefixLength;
  }

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: true, required: false
  private _peerSpecificationType?: string; 
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }
  public set peerSpecificationType(value: string) {
    this._peerSpecificationType = value;
  }
  public resetPeerSpecificationType() {
    this._peerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSpecificationTypeInput() {
    return this._peerSpecificationType;
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

  // address_group_inclusion_list - computed: false, optional: true, required: false
  private _addressGroupInclusionList = new NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }
  public putAddressGroupInclusionList(value: NetworkSecurityRuleAppRuleOutboundAllowListAddressGroupInclusionListStruct[] | cdktf.IResolvable) {
    this._addressGroupInclusionList.internalValue = value;
  }
  public resetAddressGroupInclusionList() {
    this._addressGroupInclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupInclusionListInput() {
    return this._addressGroupInclusionList.internalValue;
  }

  // filter_params - computed: false, optional: true, required: false
  private _filterParams = new NetworkSecurityRuleAppRuleOutboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }
  public putFilterParams(value: NetworkSecurityRuleAppRuleOutboundAllowListFilterParams[] | cdktf.IResolvable) {
    this._filterParams.internalValue = value;
  }
  public resetFilterParams() {
    this._filterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParamsInput() {
    return this._filterParams.internalValue;
  }

  // icmp_type_code_list - computed: false, optional: true, required: false
  private _icmpTypeCodeList = new NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }
  public putIcmpTypeCodeList(value: NetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct[] | cdktf.IResolvable) {
    this._icmpTypeCodeList.internalValue = value;
  }
  public resetIcmpTypeCodeList() {
    this._icmpTypeCodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeCodeListInput() {
    return this._icmpTypeCodeList.internalValue;
  }

  // service_group_list - computed: false, optional: true, required: false
  private _serviceGroupList = new NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }
  public putServiceGroupList(value: NetworkSecurityRuleAppRuleOutboundAllowListServiceGroupListStruct[] | cdktf.IResolvable) {
    this._serviceGroupList.internalValue = value;
  }
  public resetServiceGroupList() {
    this._serviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupListInput() {
    return this._serviceGroupList.internalValue;
  }

  // tcp_port_range_list - computed: false, optional: true, required: false
  private _tcpPortRangeList = new NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }
  public putTcpPortRangeList(value: NetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct[] | cdktf.IResolvable) {
    this._tcpPortRangeList.internalValue = value;
  }
  public resetTcpPortRangeList() {
    this._tcpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeListInput() {
    return this._tcpPortRangeList.internalValue;
  }

  // udp_port_range_list - computed: false, optional: true, required: false
  private _udpPortRangeList = new NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
  public putUdpPortRangeList(value: NetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct[] | cdktf.IResolvable) {
    this._udpPortRangeList.internalValue = value;
  }
  public resetUdpPortRangeList() {
    this._udpPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeListInput() {
    return this._udpPortRangeList.internalValue;
  }
}

export class NetworkSecurityRuleAppRuleOutboundAllowListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleOutboundAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference {
    return new NetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleAppRuleTargetGroupFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleAppRuleTargetGroupFilterParamsToTerraform(struct?: NetworkSecurityRuleAppRuleTargetGroupFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleAppRuleTargetGroupFilterParamsToHclTerraform(struct?: NetworkSecurityRuleAppRuleTargetGroupFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleAppRuleTargetGroupFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleAppRuleTargetGroupFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleAppRuleTargetGroupFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleAppRuleTargetGroupFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference {
    return new NetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#value NetworkSecurityRule#value}
  */
  readonly value?: string;
}

export function networkSecurityRuleCategoriesToTerraform(struct?: NetworkSecurityRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkSecurityRuleCategoriesToHclTerraform(struct?: NetworkSecurityRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NetworkSecurityRuleCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
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

export class NetworkSecurityRuleCategoriesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleCategories[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleCategoriesOutputReference {
    return new NetworkSecurityRuleCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleIsolationRuleFirstEntityFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleIsolationRuleFirstEntityFilterParamsToTerraform(struct?: NetworkSecurityRuleIsolationRuleFirstEntityFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleIsolationRuleFirstEntityFilterParamsToHclTerraform(struct?: NetworkSecurityRuleIsolationRuleFirstEntityFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleIsolationRuleFirstEntityFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleIsolationRuleFirstEntityFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleIsolationRuleFirstEntityFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference {
    return new NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleIsolationRuleSecondEntityFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#name NetworkSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#values NetworkSecurityRule#values}
  */
  readonly values: string[];
}

export function networkSecurityRuleIsolationRuleSecondEntityFilterParamsToTerraform(struct?: NetworkSecurityRuleIsolationRuleSecondEntityFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkSecurityRuleIsolationRuleSecondEntityFilterParamsToHclTerraform(struct?: NetworkSecurityRuleIsolationRuleSecondEntityFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityRuleIsolationRuleSecondEntityFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleIsolationRuleSecondEntityFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityRuleIsolationRuleSecondEntityFilterParams[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference {
    return new NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#create NetworkSecurityRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#update NetworkSecurityRule#update}
  */
  readonly update?: string;
}

export function networkSecurityRuleTimeoutsToTerraform(struct?: NetworkSecurityRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function networkSecurityRuleTimeoutsToHclTerraform(struct?: NetworkSecurityRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule nutanix_network_security_rule}
*/
export class NetworkSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_network_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityRule to import
  * @param importFromId The id of the existing NetworkSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_network_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_rule nutanix_network_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_network_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adRuleAction = config.adRuleAction;
    this._adRuleTargetGroupDefaultInternalPolicy = config.adRuleTargetGroupDefaultInternalPolicy;
    this._adRuleTargetGroupFilterKindList = config.adRuleTargetGroupFilterKindList;
    this._adRuleTargetGroupFilterType = config.adRuleTargetGroupFilterType;
    this._adRuleTargetGroupPeerSpecificationType = config.adRuleTargetGroupPeerSpecificationType;
    this._allowIpv6Traffic = config.allowIpv6Traffic;
    this._appRuleAction = config.appRuleAction;
    this._appRuleTargetGroupDefaultInternalPolicy = config.appRuleTargetGroupDefaultInternalPolicy;
    this._appRuleTargetGroupFilterKindList = config.appRuleTargetGroupFilterKindList;
    this._appRuleTargetGroupFilterType = config.appRuleTargetGroupFilterType;
    this._appRuleTargetGroupPeerSpecificationType = config.appRuleTargetGroupPeerSpecificationType;
    this._description = config.description;
    this._id = config.id;
    this._isPolicyHitlogEnabled = config.isPolicyHitlogEnabled;
    this._isolationRuleAction = config.isolationRuleAction;
    this._isolationRuleFirstEntityFilterKindList = config.isolationRuleFirstEntityFilterKindList;
    this._isolationRuleFirstEntityFilterType = config.isolationRuleFirstEntityFilterType;
    this._isolationRuleSecondEntityFilterKindList = config.isolationRuleSecondEntityFilterKindList;
    this._isolationRuleSecondEntityFilterType = config.isolationRuleSecondEntityFilterType;
    this._name = config.name;
    this._ownerReference = config.ownerReference;
    this._projectReference = config.projectReference;
    this._adRuleInboundAllowList.internalValue = config.adRuleInboundAllowList;
    this._adRuleOutboundAllowList.internalValue = config.adRuleOutboundAllowList;
    this._adRuleTargetGroupFilterParams.internalValue = config.adRuleTargetGroupFilterParams;
    this._appRuleInboundAllowList.internalValue = config.appRuleInboundAllowList;
    this._appRuleOutboundAllowList.internalValue = config.appRuleOutboundAllowList;
    this._appRuleTargetGroupFilterParams.internalValue = config.appRuleTargetGroupFilterParams;
    this._categories.internalValue = config.categories;
    this._isolationRuleFirstEntityFilterParams.internalValue = config.isolationRuleFirstEntityFilterParams;
    this._isolationRuleSecondEntityFilterParams.internalValue = config.isolationRuleSecondEntityFilterParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_rule_action - computed: true, optional: true, required: false
  private _adRuleAction?: string; 
  public get adRuleAction() {
    return this.getStringAttribute('ad_rule_action');
  }
  public set adRuleAction(value: string) {
    this._adRuleAction = value;
  }
  public resetAdRuleAction() {
    this._adRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleActionInput() {
    return this._adRuleAction;
  }

  // ad_rule_target_group_default_internal_policy - computed: false, optional: true, required: false
  private _adRuleTargetGroupDefaultInternalPolicy?: string; 
  public get adRuleTargetGroupDefaultInternalPolicy() {
    return this.getStringAttribute('ad_rule_target_group_default_internal_policy');
  }
  public set adRuleTargetGroupDefaultInternalPolicy(value: string) {
    this._adRuleTargetGroupDefaultInternalPolicy = value;
  }
  public resetAdRuleTargetGroupDefaultInternalPolicy() {
    this._adRuleTargetGroupDefaultInternalPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleTargetGroupDefaultInternalPolicyInput() {
    return this._adRuleTargetGroupDefaultInternalPolicy;
  }

  // ad_rule_target_group_filter_kind_list - computed: true, optional: true, required: false
  private _adRuleTargetGroupFilterKindList?: string[]; 
  public get adRuleTargetGroupFilterKindList() {
    return this.getListAttribute('ad_rule_target_group_filter_kind_list');
  }
  public set adRuleTargetGroupFilterKindList(value: string[]) {
    this._adRuleTargetGroupFilterKindList = value;
  }
  public resetAdRuleTargetGroupFilterKindList() {
    this._adRuleTargetGroupFilterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleTargetGroupFilterKindListInput() {
    return this._adRuleTargetGroupFilterKindList;
  }

  // ad_rule_target_group_filter_type - computed: true, optional: true, required: false
  private _adRuleTargetGroupFilterType?: string; 
  public get adRuleTargetGroupFilterType() {
    return this.getStringAttribute('ad_rule_target_group_filter_type');
  }
  public set adRuleTargetGroupFilterType(value: string) {
    this._adRuleTargetGroupFilterType = value;
  }
  public resetAdRuleTargetGroupFilterType() {
    this._adRuleTargetGroupFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleTargetGroupFilterTypeInput() {
    return this._adRuleTargetGroupFilterType;
  }

  // ad_rule_target_group_peer_specification_type - computed: false, optional: true, required: false
  private _adRuleTargetGroupPeerSpecificationType?: string; 
  public get adRuleTargetGroupPeerSpecificationType() {
    return this.getStringAttribute('ad_rule_target_group_peer_specification_type');
  }
  public set adRuleTargetGroupPeerSpecificationType(value: string) {
    this._adRuleTargetGroupPeerSpecificationType = value;
  }
  public resetAdRuleTargetGroupPeerSpecificationType() {
    this._adRuleTargetGroupPeerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleTargetGroupPeerSpecificationTypeInput() {
    return this._adRuleTargetGroupPeerSpecificationType;
  }

  // allow_ipv6_traffic - computed: true, optional: true, required: false
  private _allowIpv6Traffic?: boolean | cdktf.IResolvable; 
  public get allowIpv6Traffic() {
    return this.getBooleanAttribute('allow_ipv6_traffic');
  }
  public set allowIpv6Traffic(value: boolean | cdktf.IResolvable) {
    this._allowIpv6Traffic = value;
  }
  public resetAllowIpv6Traffic() {
    this._allowIpv6Traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpv6TrafficInput() {
    return this._allowIpv6Traffic;
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // app_rule_action - computed: true, optional: true, required: false
  private _appRuleAction?: string; 
  public get appRuleAction() {
    return this.getStringAttribute('app_rule_action');
  }
  public set appRuleAction(value: string) {
    this._appRuleAction = value;
  }
  public resetAppRuleAction() {
    this._appRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleActionInput() {
    return this._appRuleAction;
  }

  // app_rule_target_group_default_internal_policy - computed: false, optional: true, required: false
  private _appRuleTargetGroupDefaultInternalPolicy?: string; 
  public get appRuleTargetGroupDefaultInternalPolicy() {
    return this.getStringAttribute('app_rule_target_group_default_internal_policy');
  }
  public set appRuleTargetGroupDefaultInternalPolicy(value: string) {
    this._appRuleTargetGroupDefaultInternalPolicy = value;
  }
  public resetAppRuleTargetGroupDefaultInternalPolicy() {
    this._appRuleTargetGroupDefaultInternalPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleTargetGroupDefaultInternalPolicyInput() {
    return this._appRuleTargetGroupDefaultInternalPolicy;
  }

  // app_rule_target_group_filter_kind_list - computed: true, optional: true, required: false
  private _appRuleTargetGroupFilterKindList?: string[]; 
  public get appRuleTargetGroupFilterKindList() {
    return this.getListAttribute('app_rule_target_group_filter_kind_list');
  }
  public set appRuleTargetGroupFilterKindList(value: string[]) {
    this._appRuleTargetGroupFilterKindList = value;
  }
  public resetAppRuleTargetGroupFilterKindList() {
    this._appRuleTargetGroupFilterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleTargetGroupFilterKindListInput() {
    return this._appRuleTargetGroupFilterKindList;
  }

  // app_rule_target_group_filter_type - computed: true, optional: true, required: false
  private _appRuleTargetGroupFilterType?: string; 
  public get appRuleTargetGroupFilterType() {
    return this.getStringAttribute('app_rule_target_group_filter_type');
  }
  public set appRuleTargetGroupFilterType(value: string) {
    this._appRuleTargetGroupFilterType = value;
  }
  public resetAppRuleTargetGroupFilterType() {
    this._appRuleTargetGroupFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleTargetGroupFilterTypeInput() {
    return this._appRuleTargetGroupFilterType;
  }

  // app_rule_target_group_peer_specification_type - computed: false, optional: true, required: false
  private _appRuleTargetGroupPeerSpecificationType?: string; 
  public get appRuleTargetGroupPeerSpecificationType() {
    return this.getStringAttribute('app_rule_target_group_peer_specification_type');
  }
  public set appRuleTargetGroupPeerSpecificationType(value: string) {
    this._appRuleTargetGroupPeerSpecificationType = value;
  }
  public resetAppRuleTargetGroupPeerSpecificationType() {
    this._appRuleTargetGroupPeerSpecificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleTargetGroupPeerSpecificationTypeInput() {
    return this._appRuleTargetGroupPeerSpecificationType;
  }

  // description - computed: true, optional: true, required: false
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

  // is_policy_hitlog_enabled - computed: true, optional: true, required: false
  private _isPolicyHitlogEnabled?: boolean | cdktf.IResolvable; 
  public get isPolicyHitlogEnabled() {
    return this.getBooleanAttribute('is_policy_hitlog_enabled');
  }
  public set isPolicyHitlogEnabled(value: boolean | cdktf.IResolvable) {
    this._isPolicyHitlogEnabled = value;
  }
  public resetIsPolicyHitlogEnabled() {
    this._isPolicyHitlogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPolicyHitlogEnabledInput() {
    return this._isPolicyHitlogEnabled;
  }

  // isolation_rule_action - computed: true, optional: true, required: false
  private _isolationRuleAction?: string; 
  public get isolationRuleAction() {
    return this.getStringAttribute('isolation_rule_action');
  }
  public set isolationRuleAction(value: string) {
    this._isolationRuleAction = value;
  }
  public resetIsolationRuleAction() {
    this._isolationRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleActionInput() {
    return this._isolationRuleAction;
  }

  // isolation_rule_first_entity_filter_kind_list - computed: true, optional: true, required: false
  private _isolationRuleFirstEntityFilterKindList?: string[]; 
  public get isolationRuleFirstEntityFilterKindList() {
    return this.getListAttribute('isolation_rule_first_entity_filter_kind_list');
  }
  public set isolationRuleFirstEntityFilterKindList(value: string[]) {
    this._isolationRuleFirstEntityFilterKindList = value;
  }
  public resetIsolationRuleFirstEntityFilterKindList() {
    this._isolationRuleFirstEntityFilterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleFirstEntityFilterKindListInput() {
    return this._isolationRuleFirstEntityFilterKindList;
  }

  // isolation_rule_first_entity_filter_type - computed: true, optional: true, required: false
  private _isolationRuleFirstEntityFilterType?: string; 
  public get isolationRuleFirstEntityFilterType() {
    return this.getStringAttribute('isolation_rule_first_entity_filter_type');
  }
  public set isolationRuleFirstEntityFilterType(value: string) {
    this._isolationRuleFirstEntityFilterType = value;
  }
  public resetIsolationRuleFirstEntityFilterType() {
    this._isolationRuleFirstEntityFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleFirstEntityFilterTypeInput() {
    return this._isolationRuleFirstEntityFilterType;
  }

  // isolation_rule_second_entity_filter_kind_list - computed: true, optional: true, required: false
  private _isolationRuleSecondEntityFilterKindList?: string[]; 
  public get isolationRuleSecondEntityFilterKindList() {
    return this.getListAttribute('isolation_rule_second_entity_filter_kind_list');
  }
  public set isolationRuleSecondEntityFilterKindList(value: string[]) {
    this._isolationRuleSecondEntityFilterKindList = value;
  }
  public resetIsolationRuleSecondEntityFilterKindList() {
    this._isolationRuleSecondEntityFilterKindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleSecondEntityFilterKindListInput() {
    return this._isolationRuleSecondEntityFilterKindList;
  }

  // isolation_rule_second_entity_filter_type - computed: true, optional: true, required: false
  private _isolationRuleSecondEntityFilterType?: string; 
  public get isolationRuleSecondEntityFilterType() {
    return this.getStringAttribute('isolation_rule_second_entity_filter_type');
  }
  public set isolationRuleSecondEntityFilterType(value: string) {
    this._isolationRuleSecondEntityFilterType = value;
  }
  public resetIsolationRuleSecondEntityFilterType() {
    this._isolationRuleSecondEntityFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleSecondEntityFilterTypeInput() {
    return this._isolationRuleSecondEntityFilterType;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // owner_reference - computed: true, optional: true, required: false
  private _ownerReference?: { [key: string]: string }; 
  public get ownerReference() {
    return this.getStringMapAttribute('owner_reference');
  }
  public set ownerReference(value: { [key: string]: string }) {
    this._ownerReference = value;
  }
  public resetOwnerReference() {
    this._ownerReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: true, required: false
  private _projectReference?: { [key: string]: string }; 
  public get projectReference() {
    return this.getStringMapAttribute('project_reference');
  }
  public set projectReference(value: { [key: string]: string }) {
    this._projectReference = value;
  }
  public resetProjectReference() {
    this._projectReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference;
  }

  // ad_rule_inbound_allow_list - computed: false, optional: true, required: false
  private _adRuleInboundAllowList = new NetworkSecurityRuleAdRuleInboundAllowListStructList(this, "ad_rule_inbound_allow_list", false);
  public get adRuleInboundAllowList() {
    return this._adRuleInboundAllowList;
  }
  public putAdRuleInboundAllowList(value: NetworkSecurityRuleAdRuleInboundAllowListStruct[] | cdktf.IResolvable) {
    this._adRuleInboundAllowList.internalValue = value;
  }
  public resetAdRuleInboundAllowList() {
    this._adRuleInboundAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleInboundAllowListInput() {
    return this._adRuleInboundAllowList.internalValue;
  }

  // ad_rule_outbound_allow_list - computed: false, optional: true, required: false
  private _adRuleOutboundAllowList = new NetworkSecurityRuleAdRuleOutboundAllowListStructList(this, "ad_rule_outbound_allow_list", false);
  public get adRuleOutboundAllowList() {
    return this._adRuleOutboundAllowList;
  }
  public putAdRuleOutboundAllowList(value: NetworkSecurityRuleAdRuleOutboundAllowListStruct[] | cdktf.IResolvable) {
    this._adRuleOutboundAllowList.internalValue = value;
  }
  public resetAdRuleOutboundAllowList() {
    this._adRuleOutboundAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleOutboundAllowListInput() {
    return this._adRuleOutboundAllowList.internalValue;
  }

  // ad_rule_target_group_filter_params - computed: false, optional: true, required: false
  private _adRuleTargetGroupFilterParams = new NetworkSecurityRuleAdRuleTargetGroupFilterParamsList(this, "ad_rule_target_group_filter_params", true);
  public get adRuleTargetGroupFilterParams() {
    return this._adRuleTargetGroupFilterParams;
  }
  public putAdRuleTargetGroupFilterParams(value: NetworkSecurityRuleAdRuleTargetGroupFilterParams[] | cdktf.IResolvable) {
    this._adRuleTargetGroupFilterParams.internalValue = value;
  }
  public resetAdRuleTargetGroupFilterParams() {
    this._adRuleTargetGroupFilterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adRuleTargetGroupFilterParamsInput() {
    return this._adRuleTargetGroupFilterParams.internalValue;
  }

  // app_rule_inbound_allow_list - computed: false, optional: true, required: false
  private _appRuleInboundAllowList = new NetworkSecurityRuleAppRuleInboundAllowListStructList(this, "app_rule_inbound_allow_list", false);
  public get appRuleInboundAllowList() {
    return this._appRuleInboundAllowList;
  }
  public putAppRuleInboundAllowList(value: NetworkSecurityRuleAppRuleInboundAllowListStruct[] | cdktf.IResolvable) {
    this._appRuleInboundAllowList.internalValue = value;
  }
  public resetAppRuleInboundAllowList() {
    this._appRuleInboundAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleInboundAllowListInput() {
    return this._appRuleInboundAllowList.internalValue;
  }

  // app_rule_outbound_allow_list - computed: false, optional: true, required: false
  private _appRuleOutboundAllowList = new NetworkSecurityRuleAppRuleOutboundAllowListStructList(this, "app_rule_outbound_allow_list", false);
  public get appRuleOutboundAllowList() {
    return this._appRuleOutboundAllowList;
  }
  public putAppRuleOutboundAllowList(value: NetworkSecurityRuleAppRuleOutboundAllowListStruct[] | cdktf.IResolvable) {
    this._appRuleOutboundAllowList.internalValue = value;
  }
  public resetAppRuleOutboundAllowList() {
    this._appRuleOutboundAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleOutboundAllowListInput() {
    return this._appRuleOutboundAllowList.internalValue;
  }

  // app_rule_target_group_filter_params - computed: false, optional: true, required: false
  private _appRuleTargetGroupFilterParams = new NetworkSecurityRuleAppRuleTargetGroupFilterParamsList(this, "app_rule_target_group_filter_params", true);
  public get appRuleTargetGroupFilterParams() {
    return this._appRuleTargetGroupFilterParams;
  }
  public putAppRuleTargetGroupFilterParams(value: NetworkSecurityRuleAppRuleTargetGroupFilterParams[] | cdktf.IResolvable) {
    this._appRuleTargetGroupFilterParams.internalValue = value;
  }
  public resetAppRuleTargetGroupFilterParams() {
    this._appRuleTargetGroupFilterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleTargetGroupFilterParamsInput() {
    return this._appRuleTargetGroupFilterParams.internalValue;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new NetworkSecurityRuleCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: NetworkSecurityRuleCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // isolation_rule_first_entity_filter_params - computed: false, optional: true, required: false
  private _isolationRuleFirstEntityFilterParams = new NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsList(this, "isolation_rule_first_entity_filter_params", true);
  public get isolationRuleFirstEntityFilterParams() {
    return this._isolationRuleFirstEntityFilterParams;
  }
  public putIsolationRuleFirstEntityFilterParams(value: NetworkSecurityRuleIsolationRuleFirstEntityFilterParams[] | cdktf.IResolvable) {
    this._isolationRuleFirstEntityFilterParams.internalValue = value;
  }
  public resetIsolationRuleFirstEntityFilterParams() {
    this._isolationRuleFirstEntityFilterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleFirstEntityFilterParamsInput() {
    return this._isolationRuleFirstEntityFilterParams.internalValue;
  }

  // isolation_rule_second_entity_filter_params - computed: false, optional: true, required: false
  private _isolationRuleSecondEntityFilterParams = new NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsList(this, "isolation_rule_second_entity_filter_params", true);
  public get isolationRuleSecondEntityFilterParams() {
    return this._isolationRuleSecondEntityFilterParams;
  }
  public putIsolationRuleSecondEntityFilterParams(value: NetworkSecurityRuleIsolationRuleSecondEntityFilterParams[] | cdktf.IResolvable) {
    this._isolationRuleSecondEntityFilterParams.internalValue = value;
  }
  public resetIsolationRuleSecondEntityFilterParams() {
    this._isolationRuleSecondEntityFilterParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationRuleSecondEntityFilterParamsInput() {
    return this._isolationRuleSecondEntityFilterParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_rule_action: cdktf.stringToTerraform(this._adRuleAction),
      ad_rule_target_group_default_internal_policy: cdktf.stringToTerraform(this._adRuleTargetGroupDefaultInternalPolicy),
      ad_rule_target_group_filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adRuleTargetGroupFilterKindList),
      ad_rule_target_group_filter_type: cdktf.stringToTerraform(this._adRuleTargetGroupFilterType),
      ad_rule_target_group_peer_specification_type: cdktf.stringToTerraform(this._adRuleTargetGroupPeerSpecificationType),
      allow_ipv6_traffic: cdktf.booleanToTerraform(this._allowIpv6Traffic),
      app_rule_action: cdktf.stringToTerraform(this._appRuleAction),
      app_rule_target_group_default_internal_policy: cdktf.stringToTerraform(this._appRuleTargetGroupDefaultInternalPolicy),
      app_rule_target_group_filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appRuleTargetGroupFilterKindList),
      app_rule_target_group_filter_type: cdktf.stringToTerraform(this._appRuleTargetGroupFilterType),
      app_rule_target_group_peer_specification_type: cdktf.stringToTerraform(this._appRuleTargetGroupPeerSpecificationType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_policy_hitlog_enabled: cdktf.booleanToTerraform(this._isPolicyHitlogEnabled),
      isolation_rule_action: cdktf.stringToTerraform(this._isolationRuleAction),
      isolation_rule_first_entity_filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isolationRuleFirstEntityFilterKindList),
      isolation_rule_first_entity_filter_type: cdktf.stringToTerraform(this._isolationRuleFirstEntityFilterType),
      isolation_rule_second_entity_filter_kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isolationRuleSecondEntityFilterKindList),
      isolation_rule_second_entity_filter_type: cdktf.stringToTerraform(this._isolationRuleSecondEntityFilterType),
      name: cdktf.stringToTerraform(this._name),
      owner_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._ownerReference),
      project_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._projectReference),
      ad_rule_inbound_allow_list: cdktf.listMapper(networkSecurityRuleAdRuleInboundAllowListStructToTerraform, true)(this._adRuleInboundAllowList.internalValue),
      ad_rule_outbound_allow_list: cdktf.listMapper(networkSecurityRuleAdRuleOutboundAllowListStructToTerraform, true)(this._adRuleOutboundAllowList.internalValue),
      ad_rule_target_group_filter_params: cdktf.listMapper(networkSecurityRuleAdRuleTargetGroupFilterParamsToTerraform, true)(this._adRuleTargetGroupFilterParams.internalValue),
      app_rule_inbound_allow_list: cdktf.listMapper(networkSecurityRuleAppRuleInboundAllowListStructToTerraform, true)(this._appRuleInboundAllowList.internalValue),
      app_rule_outbound_allow_list: cdktf.listMapper(networkSecurityRuleAppRuleOutboundAllowListStructToTerraform, true)(this._appRuleOutboundAllowList.internalValue),
      app_rule_target_group_filter_params: cdktf.listMapper(networkSecurityRuleAppRuleTargetGroupFilterParamsToTerraform, true)(this._appRuleTargetGroupFilterParams.internalValue),
      categories: cdktf.listMapper(networkSecurityRuleCategoriesToTerraform, true)(this._categories.internalValue),
      isolation_rule_first_entity_filter_params: cdktf.listMapper(networkSecurityRuleIsolationRuleFirstEntityFilterParamsToTerraform, true)(this._isolationRuleFirstEntityFilterParams.internalValue),
      isolation_rule_second_entity_filter_params: cdktf.listMapper(networkSecurityRuleIsolationRuleSecondEntityFilterParamsToTerraform, true)(this._isolationRuleSecondEntityFilterParams.internalValue),
      timeouts: networkSecurityRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_rule_action: {
        value: cdktf.stringToHclTerraform(this._adRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ad_rule_target_group_default_internal_policy: {
        value: cdktf.stringToHclTerraform(this._adRuleTargetGroupDefaultInternalPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ad_rule_target_group_filter_kind_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adRuleTargetGroupFilterKindList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ad_rule_target_group_filter_type: {
        value: cdktf.stringToHclTerraform(this._adRuleTargetGroupFilterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ad_rule_target_group_peer_specification_type: {
        value: cdktf.stringToHclTerraform(this._adRuleTargetGroupPeerSpecificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_ipv6_traffic: {
        value: cdktf.booleanToHclTerraform(this._allowIpv6Traffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_rule_action: {
        value: cdktf.stringToHclTerraform(this._appRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_rule_target_group_default_internal_policy: {
        value: cdktf.stringToHclTerraform(this._appRuleTargetGroupDefaultInternalPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_rule_target_group_filter_kind_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appRuleTargetGroupFilterKindList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_rule_target_group_filter_type: {
        value: cdktf.stringToHclTerraform(this._appRuleTargetGroupFilterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_rule_target_group_peer_specification_type: {
        value: cdktf.stringToHclTerraform(this._appRuleTargetGroupPeerSpecificationType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_policy_hitlog_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPolicyHitlogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isolation_rule_action: {
        value: cdktf.stringToHclTerraform(this._isolationRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_rule_first_entity_filter_kind_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isolationRuleFirstEntityFilterKindList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      isolation_rule_first_entity_filter_type: {
        value: cdktf.stringToHclTerraform(this._isolationRuleFirstEntityFilterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_rule_second_entity_filter_kind_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isolationRuleSecondEntityFilterKindList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      isolation_rule_second_entity_filter_type: {
        value: cdktf.stringToHclTerraform(this._isolationRuleSecondEntityFilterType),
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
      owner_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ownerReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projectReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ad_rule_inbound_allow_list: {
        value: cdktf.listMapperHcl(networkSecurityRuleAdRuleInboundAllowListStructToHclTerraform, true)(this._adRuleInboundAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityRuleAdRuleInboundAllowListStructList",
      },
      ad_rule_outbound_allow_list: {
        value: cdktf.listMapperHcl(networkSecurityRuleAdRuleOutboundAllowListStructToHclTerraform, true)(this._adRuleOutboundAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityRuleAdRuleOutboundAllowListStructList",
      },
      ad_rule_target_group_filter_params: {
        value: cdktf.listMapperHcl(networkSecurityRuleAdRuleTargetGroupFilterParamsToHclTerraform, true)(this._adRuleTargetGroupFilterParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityRuleAdRuleTargetGroupFilterParamsList",
      },
      app_rule_inbound_allow_list: {
        value: cdktf.listMapperHcl(networkSecurityRuleAppRuleInboundAllowListStructToHclTerraform, true)(this._appRuleInboundAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityRuleAppRuleInboundAllowListStructList",
      },
      app_rule_outbound_allow_list: {
        value: cdktf.listMapperHcl(networkSecurityRuleAppRuleOutboundAllowListStructToHclTerraform, true)(this._appRuleOutboundAllowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityRuleAppRuleOutboundAllowListStructList",
      },
      app_rule_target_group_filter_params: {
        value: cdktf.listMapperHcl(networkSecurityRuleAppRuleTargetGroupFilterParamsToHclTerraform, true)(this._appRuleTargetGroupFilterParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityRuleAppRuleTargetGroupFilterParamsList",
      },
      categories: {
        value: cdktf.listMapperHcl(networkSecurityRuleCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityRuleCategoriesList",
      },
      isolation_rule_first_entity_filter_params: {
        value: cdktf.listMapperHcl(networkSecurityRuleIsolationRuleFirstEntityFilterParamsToHclTerraform, true)(this._isolationRuleFirstEntityFilterParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityRuleIsolationRuleFirstEntityFilterParamsList",
      },
      isolation_rule_second_entity_filter_params: {
        value: cdktf.listMapperHcl(networkSecurityRuleIsolationRuleSecondEntityFilterParamsToHclTerraform, true)(this._isolationRuleSecondEntityFilterParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkSecurityRuleIsolationRuleSecondEntityFilterParamsList",
      },
      timeouts: {
        value: networkSecurityRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
