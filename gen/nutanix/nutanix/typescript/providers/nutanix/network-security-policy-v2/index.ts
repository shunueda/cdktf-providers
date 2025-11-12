// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#description NetworkSecurityPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#id NetworkSecurityPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#is_hitlog_enabled NetworkSecurityPolicyV2#is_hitlog_enabled}
  */
  readonly isHitlogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#is_ipv6_traffic_allowed NetworkSecurityPolicyV2#is_ipv6_traffic_allowed}
  */
  readonly isIpv6TrafficAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#name NetworkSecurityPolicyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#scope NetworkSecurityPolicyV2#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#state NetworkSecurityPolicyV2#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#type NetworkSecurityPolicyV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#vpc_reference NetworkSecurityPolicyV2#vpc_reference}
  */
  readonly vpcReference?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#rules NetworkSecurityPolicyV2#rules}
  */
  readonly rules?: NetworkSecurityPolicyV2Rules[] | cdktf.IResolvable;
}
export interface NetworkSecurityPolicyV2Links {
}

export function networkSecurityPolicyV2LinksToTerraform(struct?: NetworkSecurityPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkSecurityPolicyV2LinksToHclTerraform(struct?: NetworkSecurityPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkSecurityPolicyV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class NetworkSecurityPolicyV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): NetworkSecurityPolicyV2LinksOutputReference {
    return new NetworkSecurityPolicyV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesLinks {
}

export function networkSecurityPolicyV2RulesLinksToTerraform(struct?: NetworkSecurityPolicyV2RulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkSecurityPolicyV2RulesLinksToHclTerraform(struct?: NetworkSecurityPolicyV2RulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkSecurityPolicyV2RulesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class NetworkSecurityPolicyV2RulesLinksList extends cdktf.ComplexList {

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
  public get(index: number): NetworkSecurityPolicyV2RulesLinksOutputReference {
    return new NetworkSecurityPolicyV2RulesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#prefix_length NetworkSecurityPolicyV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#value NetworkSecurityPolicyV2#value}
  */
  readonly value?: string;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#code NetworkSecurityPolicyV2#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#is_all_allowed NetworkSecurityPolicyV2#is_all_allowed}
  */
  readonly isAllAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#type NetworkSecurityPolicyV2#type}
  */
  readonly type?: number;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    is_all_allowed: cdktf.booleanToTerraform(struct!.isAllAllowed),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_all_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isAllAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._isAllAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAllAllowed = this._isAllAllowed;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._isAllAllowed = undefined;
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
      this._isAllAllowed = value.isAllAllowed;
      this._type = value.type;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // is_all_allowed - computed: true, optional: true, required: false
  private _isAllAllowed?: boolean | cdktf.IResolvable; 
  public get isAllAllowed() {
    return this.getBooleanAttribute('is_all_allowed');
  }
  public set isAllAllowed(value: boolean | cdktf.IResolvable) {
    this._isAllAllowed = value;
  }
  public resetIsAllAllowed() {
    this._isAllAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllAllowedInput() {
    return this._isAllAllowed;
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#prefix_length NetworkSecurityPolicyV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#value NetworkSecurityPolicyV2#value}
  */
  readonly value?: string;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#end_port NetworkSecurityPolicyV2#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#start_port NetworkSecurityPolicyV2#start_port}
  */
  readonly startPort: number;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | cdktf.IResolvable): any {
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | cdktf.IResolvable | undefined) {
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

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#end_port NetworkSecurityPolicyV2#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#start_port NetworkSecurityPolicyV2#start_port}
  */
  readonly startPort: number;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | cdktf.IResolvable): any {
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

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | cdktf.IResolvable | undefined) {
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

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#dest_address_group_references NetworkSecurityPolicyV2#dest_address_group_references}
  */
  readonly destAddressGroupReferences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#dest_allow_spec NetworkSecurityPolicyV2#dest_allow_spec}
  */
  readonly destAllowSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#dest_category_references NetworkSecurityPolicyV2#dest_category_references}
  */
  readonly destCategoryReferences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#is_all_protocol_allowed NetworkSecurityPolicyV2#is_all_protocol_allowed}
  */
  readonly isAllProtocolAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#network_function_chain_reference NetworkSecurityPolicyV2#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#secured_group_category_references NetworkSecurityPolicyV2#secured_group_category_references}
  */
  readonly securedGroupCategoryReferences: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#service_group_references NetworkSecurityPolicyV2#service_group_references}
  */
  readonly serviceGroupReferences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#src_address_group_references NetworkSecurityPolicyV2#src_address_group_references}
  */
  readonly srcAddressGroupReferences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#src_allow_spec NetworkSecurityPolicyV2#src_allow_spec}
  */
  readonly srcAllowSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#src_category_references NetworkSecurityPolicyV2#src_category_references}
  */
  readonly srcCategoryReferences?: string[];
  /**
  * dest_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#dest_subnet NetworkSecurityPolicyV2#dest_subnet}
  */
  readonly destSubnet?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet[] | cdktf.IResolvable;
  /**
  * icmp_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#icmp_services NetworkSecurityPolicyV2#icmp_services}
  */
  readonly icmpServices?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices[] | cdktf.IResolvable;
  /**
  * src_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#src_subnet NetworkSecurityPolicyV2#src_subnet}
  */
  readonly srcSubnet?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet[] | cdktf.IResolvable;
  /**
  * tcp_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#tcp_services NetworkSecurityPolicyV2#tcp_services}
  */
  readonly tcpServices?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices[] | cdktf.IResolvable;
  /**
  * udp_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#udp_services NetworkSecurityPolicyV2#udp_services}
  */
  readonly udpServices?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_address_group_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destAddressGroupReferences),
    dest_allow_spec: cdktf.stringToTerraform(struct!.destAllowSpec),
    dest_category_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destCategoryReferences),
    is_all_protocol_allowed: cdktf.booleanToTerraform(struct!.isAllProtocolAllowed),
    network_function_chain_reference: cdktf.stringToTerraform(struct!.networkFunctionChainReference),
    secured_group_category_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securedGroupCategoryReferences),
    service_group_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceGroupReferences),
    src_address_group_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcAddressGroupReferences),
    src_allow_spec: cdktf.stringToTerraform(struct!.srcAllowSpec),
    src_category_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcCategoryReferences),
    dest_subnet: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToTerraform, true)(struct!.destSubnet),
    icmp_services: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToTerraform, true)(struct!.icmpServices),
    src_subnet: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToTerraform, true)(struct!.srcSubnet),
    tcp_services: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToTerraform, true)(struct!.tcpServices),
    udp_services: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToTerraform, true)(struct!.udpServices),
  }
}


export function networkSecurityPolicyV2RulesSpecApplicationRuleSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_address_group_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destAddressGroupReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_allow_spec: {
      value: cdktf.stringToHclTerraform(struct!.destAllowSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_category_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destCategoryReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_all_protocol_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isAllProtocolAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_function_chain_reference: {
      value: cdktf.stringToHclTerraform(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secured_group_category_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securedGroupCategoryReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_group_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceGroupReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_address_group_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcAddressGroupReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_allow_spec: {
      value: cdktf.stringToHclTerraform(struct!.srcAllowSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_category_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcCategoryReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_subnet: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToHclTerraform, true)(struct!.destSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetList",
    },
    icmp_services: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToHclTerraform, true)(struct!.icmpServices),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesList",
    },
    src_subnet: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToHclTerraform, true)(struct!.srcSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetList",
    },
    tcp_services: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToHclTerraform, true)(struct!.tcpServices),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesList",
    },
    udp_services: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToHclTerraform, true)(struct!.udpServices),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destAddressGroupReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddressGroupReferences = this._destAddressGroupReferences;
    }
    if (this._destAllowSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAllowSpec = this._destAllowSpec;
    }
    if (this._destCategoryReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.destCategoryReferences = this._destCategoryReferences;
    }
    if (this._isAllProtocolAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAllProtocolAllowed = this._isAllProtocolAllowed;
    }
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._securedGroupCategoryReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.securedGroupCategoryReferences = this._securedGroupCategoryReferences;
    }
    if (this._serviceGroupReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupReferences = this._serviceGroupReferences;
    }
    if (this._srcAddressGroupReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressGroupReferences = this._srcAddressGroupReferences;
    }
    if (this._srcAllowSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAllowSpec = this._srcAllowSpec;
    }
    if (this._srcCategoryReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCategoryReferences = this._srcCategoryReferences;
    }
    if (this._destSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destSubnet = this._destSubnet?.internalValue;
    }
    if (this._icmpServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpServices = this._icmpServices?.internalValue;
    }
    if (this._srcSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSubnet = this._srcSubnet?.internalValue;
    }
    if (this._tcpServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpServices = this._tcpServices?.internalValue;
    }
    if (this._udpServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpServices = this._udpServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destAddressGroupReferences = undefined;
      this._destAllowSpec = undefined;
      this._destCategoryReferences = undefined;
      this._isAllProtocolAllowed = undefined;
      this._networkFunctionChainReference = undefined;
      this._securedGroupCategoryReferences = undefined;
      this._serviceGroupReferences = undefined;
      this._srcAddressGroupReferences = undefined;
      this._srcAllowSpec = undefined;
      this._srcCategoryReferences = undefined;
      this._destSubnet.internalValue = undefined;
      this._icmpServices.internalValue = undefined;
      this._srcSubnet.internalValue = undefined;
      this._tcpServices.internalValue = undefined;
      this._udpServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destAddressGroupReferences = value.destAddressGroupReferences;
      this._destAllowSpec = value.destAllowSpec;
      this._destCategoryReferences = value.destCategoryReferences;
      this._isAllProtocolAllowed = value.isAllProtocolAllowed;
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._securedGroupCategoryReferences = value.securedGroupCategoryReferences;
      this._serviceGroupReferences = value.serviceGroupReferences;
      this._srcAddressGroupReferences = value.srcAddressGroupReferences;
      this._srcAllowSpec = value.srcAllowSpec;
      this._srcCategoryReferences = value.srcCategoryReferences;
      this._destSubnet.internalValue = value.destSubnet;
      this._icmpServices.internalValue = value.icmpServices;
      this._srcSubnet.internalValue = value.srcSubnet;
      this._tcpServices.internalValue = value.tcpServices;
      this._udpServices.internalValue = value.udpServices;
    }
  }

  // dest_address_group_references - computed: true, optional: true, required: false
  private _destAddressGroupReferences?: string[]; 
  public get destAddressGroupReferences() {
    return this.getListAttribute('dest_address_group_references');
  }
  public set destAddressGroupReferences(value: string[]) {
    this._destAddressGroupReferences = value;
  }
  public resetDestAddressGroupReferences() {
    this._destAddressGroupReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddressGroupReferencesInput() {
    return this._destAddressGroupReferences;
  }

  // dest_allow_spec - computed: true, optional: true, required: false
  private _destAllowSpec?: string; 
  public get destAllowSpec() {
    return this.getStringAttribute('dest_allow_spec');
  }
  public set destAllowSpec(value: string) {
    this._destAllowSpec = value;
  }
  public resetDestAllowSpec() {
    this._destAllowSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAllowSpecInput() {
    return this._destAllowSpec;
  }

  // dest_category_references - computed: true, optional: true, required: false
  private _destCategoryReferences?: string[]; 
  public get destCategoryReferences() {
    return this.getListAttribute('dest_category_references');
  }
  public set destCategoryReferences(value: string[]) {
    this._destCategoryReferences = value;
  }
  public resetDestCategoryReferences() {
    this._destCategoryReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destCategoryReferencesInput() {
    return this._destCategoryReferences;
  }

  // is_all_protocol_allowed - computed: true, optional: true, required: false
  private _isAllProtocolAllowed?: boolean | cdktf.IResolvable; 
  public get isAllProtocolAllowed() {
    return this.getBooleanAttribute('is_all_protocol_allowed');
  }
  public set isAllProtocolAllowed(value: boolean | cdktf.IResolvable) {
    this._isAllProtocolAllowed = value;
  }
  public resetIsAllProtocolAllowed() {
    this._isAllProtocolAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllProtocolAllowedInput() {
    return this._isAllProtocolAllowed;
  }

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: string; 
  public get networkFunctionChainReference() {
    return this.getStringAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: string) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // secured_group_category_references - computed: false, optional: false, required: true
  private _securedGroupCategoryReferences?: string[]; 
  public get securedGroupCategoryReferences() {
    return this.getListAttribute('secured_group_category_references');
  }
  public set securedGroupCategoryReferences(value: string[]) {
    this._securedGroupCategoryReferences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securedGroupCategoryReferencesInput() {
    return this._securedGroupCategoryReferences;
  }

  // service_group_references - computed: true, optional: true, required: false
  private _serviceGroupReferences?: string[]; 
  public get serviceGroupReferences() {
    return this.getListAttribute('service_group_references');
  }
  public set serviceGroupReferences(value: string[]) {
    this._serviceGroupReferences = value;
  }
  public resetServiceGroupReferences() {
    this._serviceGroupReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupReferencesInput() {
    return this._serviceGroupReferences;
  }

  // src_address_group_references - computed: true, optional: true, required: false
  private _srcAddressGroupReferences?: string[]; 
  public get srcAddressGroupReferences() {
    return this.getListAttribute('src_address_group_references');
  }
  public set srcAddressGroupReferences(value: string[]) {
    this._srcAddressGroupReferences = value;
  }
  public resetSrcAddressGroupReferences() {
    this._srcAddressGroupReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressGroupReferencesInput() {
    return this._srcAddressGroupReferences;
  }

  // src_allow_spec - computed: true, optional: true, required: false
  private _srcAllowSpec?: string; 
  public get srcAllowSpec() {
    return this.getStringAttribute('src_allow_spec');
  }
  public set srcAllowSpec(value: string) {
    this._srcAllowSpec = value;
  }
  public resetSrcAllowSpec() {
    this._srcAllowSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAllowSpecInput() {
    return this._srcAllowSpec;
  }

  // src_category_references - computed: true, optional: true, required: false
  private _srcCategoryReferences?: string[]; 
  public get srcCategoryReferences() {
    return this.getListAttribute('src_category_references');
  }
  public set srcCategoryReferences(value: string[]) {
    this._srcCategoryReferences = value;
  }
  public resetSrcCategoryReferences() {
    this._srcCategoryReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCategoryReferencesInput() {
    return this._srcCategoryReferences;
  }

  // dest_subnet - computed: false, optional: true, required: false
  private _destSubnet = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetList(this, "dest_subnet", false);
  public get destSubnet() {
    return this._destSubnet;
  }
  public putDestSubnet(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet[] | cdktf.IResolvable) {
    this._destSubnet.internalValue = value;
  }
  public resetDestSubnet() {
    this._destSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSubnetInput() {
    return this._destSubnet.internalValue;
  }

  // icmp_services - computed: false, optional: true, required: false
  private _icmpServices = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesList(this, "icmp_services", false);
  public get icmpServices() {
    return this._icmpServices;
  }
  public putIcmpServices(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices[] | cdktf.IResolvable) {
    this._icmpServices.internalValue = value;
  }
  public resetIcmpServices() {
    this._icmpServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpServicesInput() {
    return this._icmpServices.internalValue;
  }

  // src_subnet - computed: false, optional: true, required: false
  private _srcSubnet = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetList(this, "src_subnet", false);
  public get srcSubnet() {
    return this._srcSubnet;
  }
  public putSrcSubnet(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet[] | cdktf.IResolvable) {
    this._srcSubnet.internalValue = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet.internalValue;
  }

  // tcp_services - computed: false, optional: true, required: false
  private _tcpServices = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesList(this, "tcp_services", false);
  public get tcpServices() {
    return this._tcpServices;
  }
  public putTcpServices(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices[] | cdktf.IResolvable) {
    this._tcpServices.internalValue = value;
  }
  public resetTcpServices() {
    this._tcpServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpServicesInput() {
    return this._tcpServices.internalValue;
  }

  // udp_services - computed: false, optional: true, required: false
  private _udpServices = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesList(this, "udp_services", false);
  public get udpServices() {
    return this._udpServices;
  }
  public putUdpServices(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices[] | cdktf.IResolvable) {
    this._udpServices.internalValue = value;
  }
  public resetUdpServices() {
    this._udpServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpServicesInput() {
    return this._udpServices.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#secured_group_action NetworkSecurityPolicyV2#secured_group_action}
  */
  readonly securedGroupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#secured_group_category_references NetworkSecurityPolicyV2#secured_group_category_references}
  */
  readonly securedGroupCategoryReferences?: string[];
}

export function networkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secured_group_action: cdktf.stringToTerraform(struct!.securedGroupAction),
    secured_group_category_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securedGroupCategoryReferences),
  }
}


export function networkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secured_group_action: {
      value: cdktf.stringToHclTerraform(struct!.securedGroupAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secured_group_category_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securedGroupCategoryReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securedGroupAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.securedGroupAction = this._securedGroupAction;
    }
    if (this._securedGroupCategoryReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.securedGroupCategoryReferences = this._securedGroupCategoryReferences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securedGroupAction = undefined;
      this._securedGroupCategoryReferences = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securedGroupAction = value.securedGroupAction;
      this._securedGroupCategoryReferences = value.securedGroupCategoryReferences;
    }
  }

  // secured_group_action - computed: true, optional: true, required: false
  private _securedGroupAction?: string; 
  public get securedGroupAction() {
    return this.getStringAttribute('secured_group_action');
  }
  public set securedGroupAction(value: string) {
    this._securedGroupAction = value;
  }
  public resetSecuredGroupAction() {
    this._securedGroupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedGroupActionInput() {
    return this._securedGroupAction;
  }

  // secured_group_category_references - computed: true, optional: true, required: false
  private _securedGroupCategoryReferences?: string[]; 
  public get securedGroupCategoryReferences() {
    return this.getListAttribute('secured_group_category_references');
  }
  public set securedGroupCategoryReferences(value: string[]) {
    this._securedGroupCategoryReferences = value;
  }
  public resetSecuredGroupCategoryReferences() {
    this._securedGroupCategoryReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedGroupCategoryReferencesInput() {
    return this._securedGroupCategoryReferences;
  }
}

export class NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#group_category_references NetworkSecurityPolicyV2#group_category_references}
  */
  readonly groupCategoryReferences: string[];
}

export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_category_references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupCategoryReferences),
  }
}


export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_category_references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupCategoryReferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupCategoryReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupCategoryReferences = this._groupCategoryReferences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupCategoryReferences = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupCategoryReferences = value.groupCategoryReferences;
    }
  }

  // group_category_references - computed: false, optional: false, required: true
  private _groupCategoryReferences?: string[]; 
  public get groupCategoryReferences() {
    return this.getListAttribute('group_category_references');
  }
  public set groupCategoryReferences(value: string[]) {
    this._groupCategoryReferences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCategoryReferencesInput() {
    return this._groupCategoryReferences;
  }
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup {
  /**
  * isolation_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#isolation_group NetworkSecurityPolicyV2#isolation_group}
  */
  readonly isolationGroup: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isolation_group: cdktf.listMapper(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToTerraform, true)(struct!.isolationGroup),
  }
}


export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isolation_group: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToHclTerraform, true)(struct!.isolationGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isolationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationGroup = this._isolationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isolationGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isolationGroup.internalValue = value.isolationGroup;
    }
  }

  // isolation_group - computed: false, optional: false, required: true
  private _isolationGroup = new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList(this, "isolation_group", false);
  public get isolationGroup() {
    return this._isolationGroup;
  }
  public putIsolationGroup(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup[] | cdktf.IResolvable) {
    this._isolationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationGroupInput() {
    return this._isolationGroup.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec {
  /**
  * all_to_all_isolation_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#all_to_all_isolation_group NetworkSecurityPolicyV2#all_to_all_isolation_group}
  */
  readonly allToAllIsolationGroup?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_to_all_isolation_group: cdktf.listMapper(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToTerraform, true)(struct!.allToAllIsolationGroup),
  }
}


export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_to_all_isolation_group: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToHclTerraform, true)(struct!.allToAllIsolationGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allToAllIsolationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allToAllIsolationGroup = this._allToAllIsolationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allToAllIsolationGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allToAllIsolationGroup.internalValue = value.allToAllIsolationGroup;
    }
  }

  // all_to_all_isolation_group - computed: false, optional: true, required: false
  private _allToAllIsolationGroup = new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList(this, "all_to_all_isolation_group", false);
  public get allToAllIsolationGroup() {
    return this._allToAllIsolationGroup;
  }
  public putAllToAllIsolationGroup(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup[] | cdktf.IResolvable) {
    this._allToAllIsolationGroup.internalValue = value;
  }
  public resetAllToAllIsolationGroup() {
    this._allToAllIsolationGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allToAllIsolationGroupInput() {
    return this._allToAllIsolationGroup.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec {
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#spec NetworkSecurityPolicyV2#spec}
  */
  readonly spec: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToTerraform, true)(struct!.spec),
  }
}


export function networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#first_isolation_group NetworkSecurityPolicyV2#first_isolation_group}
  */
  readonly firstIsolationGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#second_isolation_group NetworkSecurityPolicyV2#second_isolation_group}
  */
  readonly secondIsolationGroup: string[];
}

export function networkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_isolation_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firstIsolationGroup),
    second_isolation_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondIsolationGroup),
  }
}


export function networkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_isolation_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firstIsolationGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    second_isolation_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondIsolationGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstIsolationGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIsolationGroup = this._firstIsolationGroup;
    }
    if (this._secondIsolationGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondIsolationGroup = this._secondIsolationGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstIsolationGroup = undefined;
      this._secondIsolationGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstIsolationGroup = value.firstIsolationGroup;
      this._secondIsolationGroup = value.secondIsolationGroup;
    }
  }

  // first_isolation_group - computed: false, optional: false, required: true
  private _firstIsolationGroup?: string[]; 
  public get firstIsolationGroup() {
    return this.getListAttribute('first_isolation_group');
  }
  public set firstIsolationGroup(value: string[]) {
    this._firstIsolationGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIsolationGroupInput() {
    return this._firstIsolationGroup;
  }

  // second_isolation_group - computed: false, optional: false, required: true
  private _secondIsolationGroup?: string[]; 
  public get secondIsolationGroup() {
    return this.getListAttribute('second_isolation_group');
  }
  public set secondIsolationGroup(value: string[]) {
    this._secondIsolationGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondIsolationGroupInput() {
    return this._secondIsolationGroup;
  }
}

export class NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2RulesSpec {
  /**
  * application_rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#application_rule_spec NetworkSecurityPolicyV2#application_rule_spec}
  */
  readonly applicationRuleSpec?: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec[] | cdktf.IResolvable;
  /**
  * intra_entity_group_rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#intra_entity_group_rule_spec NetworkSecurityPolicyV2#intra_entity_group_rule_spec}
  */
  readonly intraEntityGroupRuleSpec?: NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec[] | cdktf.IResolvable;
  /**
  * multi_env_isolation_rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#multi_env_isolation_rule_spec NetworkSecurityPolicyV2#multi_env_isolation_rule_spec}
  */
  readonly multiEnvIsolationRuleSpec?: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec[] | cdktf.IResolvable;
  /**
  * two_env_isolation_rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#two_env_isolation_rule_spec NetworkSecurityPolicyV2#two_env_isolation_rule_spec}
  */
  readonly twoEnvIsolationRuleSpec?: NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesSpecToTerraform(struct?: NetworkSecurityPolicyV2RulesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_rule_spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecApplicationRuleSpecToTerraform, true)(struct!.applicationRuleSpec),
    intra_entity_group_rule_spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToTerraform, true)(struct!.intraEntityGroupRuleSpec),
    multi_env_isolation_rule_spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToTerraform, true)(struct!.multiEnvIsolationRuleSpec),
    two_env_isolation_rule_spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToTerraform, true)(struct!.twoEnvIsolationRuleSpec),
  }
}


export function networkSecurityPolicyV2RulesSpecToHclTerraform(struct?: NetworkSecurityPolicyV2RulesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_rule_spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecApplicationRuleSpecToHclTerraform, true)(struct!.applicationRuleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecList",
    },
    intra_entity_group_rule_spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToHclTerraform, true)(struct!.intraEntityGroupRuleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecList",
    },
    multi_env_isolation_rule_spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToHclTerraform, true)(struct!.multiEnvIsolationRuleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecList",
    },
    two_env_isolation_rule_spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToHclTerraform, true)(struct!.twoEnvIsolationRuleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2RulesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationRuleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRuleSpec = this._applicationRuleSpec?.internalValue;
    }
    if (this._intraEntityGroupRuleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intraEntityGroupRuleSpec = this._intraEntityGroupRuleSpec?.internalValue;
    }
    if (this._multiEnvIsolationRuleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiEnvIsolationRuleSpec = this._multiEnvIsolationRuleSpec?.internalValue;
    }
    if (this._twoEnvIsolationRuleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoEnvIsolationRuleSpec = this._twoEnvIsolationRuleSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2RulesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationRuleSpec.internalValue = undefined;
      this._intraEntityGroupRuleSpec.internalValue = undefined;
      this._multiEnvIsolationRuleSpec.internalValue = undefined;
      this._twoEnvIsolationRuleSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationRuleSpec.internalValue = value.applicationRuleSpec;
      this._intraEntityGroupRuleSpec.internalValue = value.intraEntityGroupRuleSpec;
      this._multiEnvIsolationRuleSpec.internalValue = value.multiEnvIsolationRuleSpec;
      this._twoEnvIsolationRuleSpec.internalValue = value.twoEnvIsolationRuleSpec;
    }
  }

  // application_rule_spec - computed: false, optional: true, required: false
  private _applicationRuleSpec = new NetworkSecurityPolicyV2RulesSpecApplicationRuleSpecList(this, "application_rule_spec", false);
  public get applicationRuleSpec() {
    return this._applicationRuleSpec;
  }
  public putApplicationRuleSpec(value: NetworkSecurityPolicyV2RulesSpecApplicationRuleSpec[] | cdktf.IResolvable) {
    this._applicationRuleSpec.internalValue = value;
  }
  public resetApplicationRuleSpec() {
    this._applicationRuleSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRuleSpecInput() {
    return this._applicationRuleSpec.internalValue;
  }

  // intra_entity_group_rule_spec - computed: false, optional: true, required: false
  private _intraEntityGroupRuleSpec = new NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecList(this, "intra_entity_group_rule_spec", false);
  public get intraEntityGroupRuleSpec() {
    return this._intraEntityGroupRuleSpec;
  }
  public putIntraEntityGroupRuleSpec(value: NetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec[] | cdktf.IResolvable) {
    this._intraEntityGroupRuleSpec.internalValue = value;
  }
  public resetIntraEntityGroupRuleSpec() {
    this._intraEntityGroupRuleSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraEntityGroupRuleSpecInput() {
    return this._intraEntityGroupRuleSpec.internalValue;
  }

  // multi_env_isolation_rule_spec - computed: false, optional: true, required: false
  private _multiEnvIsolationRuleSpec = new NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecList(this, "multi_env_isolation_rule_spec", false);
  public get multiEnvIsolationRuleSpec() {
    return this._multiEnvIsolationRuleSpec;
  }
  public putMultiEnvIsolationRuleSpec(value: NetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec[] | cdktf.IResolvable) {
    this._multiEnvIsolationRuleSpec.internalValue = value;
  }
  public resetMultiEnvIsolationRuleSpec() {
    this._multiEnvIsolationRuleSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiEnvIsolationRuleSpecInput() {
    return this._multiEnvIsolationRuleSpec.internalValue;
  }

  // two_env_isolation_rule_spec - computed: false, optional: true, required: false
  private _twoEnvIsolationRuleSpec = new NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecList(this, "two_env_isolation_rule_spec", false);
  public get twoEnvIsolationRuleSpec() {
    return this._twoEnvIsolationRuleSpec;
  }
  public putTwoEnvIsolationRuleSpec(value: NetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec[] | cdktf.IResolvable) {
    this._twoEnvIsolationRuleSpec.internalValue = value;
  }
  public resetTwoEnvIsolationRuleSpec() {
    this._twoEnvIsolationRuleSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoEnvIsolationRuleSpecInput() {
    return this._twoEnvIsolationRuleSpec.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2RulesSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesSpecOutputReference {
    return new NetworkSecurityPolicyV2RulesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityPolicyV2Rules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#description NetworkSecurityPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#type NetworkSecurityPolicyV2#type}
  */
  readonly type: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#spec NetworkSecurityPolicyV2#spec}
  */
  readonly spec: NetworkSecurityPolicyV2RulesSpec[] | cdktf.IResolvable;
}

export function networkSecurityPolicyV2RulesToTerraform(struct?: NetworkSecurityPolicyV2Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    type: cdktf.stringToTerraform(struct!.type),
    spec: cdktf.listMapper(networkSecurityPolicyV2RulesSpecToTerraform, true)(struct!.spec),
  }
}


export function networkSecurityPolicyV2RulesToHclTerraform(struct?: NetworkSecurityPolicyV2Rules | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityPolicyV2RulesSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityPolicyV2RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityPolicyV2Rules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityPolicyV2Rules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._spec.internalValue = value.spec;
    }
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

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new NetworkSecurityPolicyV2RulesLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new NetworkSecurityPolicyV2RulesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NetworkSecurityPolicyV2RulesSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class NetworkSecurityPolicyV2RulesList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityPolicyV2Rules[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityPolicyV2RulesOutputReference {
    return new NetworkSecurityPolicyV2RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2 nutanix_network_security_policy_v2}
*/
export class NetworkSecurityPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_network_security_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityPolicyV2 to import
  * @param importFromId The id of the existing NetworkSecurityPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_network_security_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/network_security_policy_v2 nutanix_network_security_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_network_security_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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
    this._id = config.id;
    this._isHitlogEnabled = config.isHitlogEnabled;
    this._isIpv6TrafficAllowed = config.isIpv6TrafficAllowed;
    this._name = config.name;
    this._scope = config.scope;
    this._state = config.state;
    this._type = config.type;
    this._vpcReference = config.vpcReference;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // is_hitlog_enabled - computed: false, optional: true, required: false
  private _isHitlogEnabled?: boolean | cdktf.IResolvable; 
  public get isHitlogEnabled() {
    return this.getBooleanAttribute('is_hitlog_enabled');
  }
  public set isHitlogEnabled(value: boolean | cdktf.IResolvable) {
    this._isHitlogEnabled = value;
  }
  public resetIsHitlogEnabled() {
    this._isHitlogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHitlogEnabledInput() {
    return this._isHitlogEnabled;
  }

  // is_ipv6_traffic_allowed - computed: false, optional: true, required: false
  private _isIpv6TrafficAllowed?: boolean | cdktf.IResolvable; 
  public get isIpv6TrafficAllowed() {
    return this.getBooleanAttribute('is_ipv6_traffic_allowed');
  }
  public set isIpv6TrafficAllowed(value: boolean | cdktf.IResolvable) {
    this._isIpv6TrafficAllowed = value;
  }
  public resetIsIpv6TrafficAllowed() {
    this._isIpv6TrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6TrafficAllowedInput() {
    return this._isIpv6TrafficAllowed;
  }

  // is_system_defined - computed: true, optional: false, required: false
  public get isSystemDefined() {
    return this.getBooleanAttribute('is_system_defined');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new NetworkSecurityPolicyV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // scope - computed: true, optional: true, required: false
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

  // secured_groups - computed: true, optional: false, required: false
  public get securedGroups() {
    return this.getListAttribute('secured_groups');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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

  // vpc_reference - computed: false, optional: true, required: false
  private _vpcReference?: string[]; 
  public get vpcReference() {
    return this.getListAttribute('vpc_reference');
  }
  public set vpcReference(value: string[]) {
    this._vpcReference = value;
  }
  public resetVpcReference() {
    this._vpcReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceInput() {
    return this._vpcReference;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new NetworkSecurityPolicyV2RulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: NetworkSecurityPolicyV2Rules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_hitlog_enabled: cdktf.booleanToTerraform(this._isHitlogEnabled),
      is_ipv6_traffic_allowed: cdktf.booleanToTerraform(this._isIpv6TrafficAllowed),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      vpc_reference: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcReference),
      rules: cdktf.listMapper(networkSecurityPolicyV2RulesToTerraform, true)(this._rules.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_hitlog_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHitlogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ipv6_traffic_allowed: {
        value: cdktf.booleanToHclTerraform(this._isIpv6TrafficAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcReference),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.listMapperHcl(networkSecurityPolicyV2RulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityPolicyV2RulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
