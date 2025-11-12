// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNetworkSecurityPoliciesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#filter DataNutanixNetworkSecurityPoliciesV2#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#id DataNutanixNetworkSecurityPoliciesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#limit DataNutanixNetworkSecurityPoliciesV2#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#order_by DataNutanixNetworkSecurityPoliciesV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#page DataNutanixNetworkSecurityPoliciesV2#page}
  */
  readonly page?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#select DataNutanixNetworkSecurityPoliciesV2#select}
  */
  readonly select?: string;
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinks {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinks | undefined) {
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

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinks {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinks | undefined) {
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

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnet {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServices {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // is_all_allowed - computed: true, optional: false, required: false
  public get isAllAllowed() {
    return this.getBooleanAttribute('is_all_allowed');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnet {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServices {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServices {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_address_group_references - computed: true, optional: false, required: false
  public get destAddressGroupReferences() {
    return this.getListAttribute('dest_address_group_references');
  }

  // dest_allow_spec - computed: true, optional: false, required: false
  public get destAllowSpec() {
    return this.getStringAttribute('dest_allow_spec');
  }

  // dest_category_references - computed: true, optional: false, required: false
  public get destCategoryReferences() {
    return this.getListAttribute('dest_category_references');
  }

  // dest_subnet - computed: true, optional: false, required: false
  private _destSubnet = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecDestSubnetList(this, "dest_subnet", false);
  public get destSubnet() {
    return this._destSubnet;
  }

  // icmp_services - computed: true, optional: false, required: false
  private _icmpServices = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecIcmpServicesList(this, "icmp_services", false);
  public get icmpServices() {
    return this._icmpServices;
  }

  // is_all_protocol_allowed - computed: true, optional: false, required: false
  public get isAllProtocolAllowed() {
    return this.getBooleanAttribute('is_all_protocol_allowed');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  public get networkFunctionChainReference() {
    return this.getStringAttribute('network_function_chain_reference');
  }

  // secured_group_category_references - computed: true, optional: false, required: false
  public get securedGroupCategoryReferences() {
    return this.getListAttribute('secured_group_category_references');
  }

  // service_group_references - computed: true, optional: false, required: false
  public get serviceGroupReferences() {
    return this.getListAttribute('service_group_references');
  }

  // src_address_group_references - computed: true, optional: false, required: false
  public get srcAddressGroupReferences() {
    return this.getListAttribute('src_address_group_references');
  }

  // src_allow_spec - computed: true, optional: false, required: false
  public get srcAllowSpec() {
    return this.getStringAttribute('src_allow_spec');
  }

  // src_category_references - computed: true, optional: false, required: false
  public get srcCategoryReferences() {
    return this.getListAttribute('src_category_references');
  }

  // src_subnet - computed: true, optional: false, required: false
  private _srcSubnet = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecSrcSubnetList(this, "src_subnet", false);
  public get srcSubnet() {
    return this._srcSubnet;
  }

  // tcp_services - computed: true, optional: false, required: false
  private _tcpServices = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecTcpServicesList(this, "tcp_services", false);
  public get tcpServices() {
    return this._tcpServices;
  }

  // udp_services - computed: true, optional: false, required: false
  private _udpServices = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecUdpServicesList(this, "udp_services", false);
  public get udpServices() {
    return this._udpServices;
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secured_group_action - computed: true, optional: false, required: false
  public get securedGroupAction() {
    return this.getStringAttribute('secured_group_action');
  }

  // secured_group_category_references - computed: true, optional: false, required: false
  public get securedGroupCategoryReferences() {
    return this.getListAttribute('secured_group_category_references');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_category_references - computed: true, optional: false, required: false
  public get groupCategoryReferences() {
    return this.getListAttribute('group_category_references');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // isolation_group - computed: true, optional: false, required: false
  private _isolationGroup = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList(this, "isolation_group", false);
  public get isolationGroup() {
    return this._isolationGroup;
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_to_all_isolation_group - computed: true, optional: false, required: false
  private _allToAllIsolationGroup = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList(this, "all_to_all_isolation_group", false);
  public get allToAllIsolationGroup() {
    return this._allToAllIsolationGroup;
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_isolation_group - computed: true, optional: false, required: false
  public get firstIsolationGroup() {
    return this.getListAttribute('first_isolation_group');
  }

  // second_isolation_group - computed: true, optional: false, required: false
  public get secondIsolationGroup() {
    return this.getListAttribute('second_isolation_group');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpec {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_rule_spec - computed: true, optional: false, required: false
  private _applicationRuleSpec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecApplicationRuleSpecList(this, "application_rule_spec", false);
  public get applicationRuleSpec() {
    return this._applicationRuleSpec;
  }

  // intra_entity_group_rule_spec - computed: true, optional: false, required: false
  private _intraEntityGroupRuleSpec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecIntraEntityGroupRuleSpecList(this, "intra_entity_group_rule_spec", false);
  public get intraEntityGroupRuleSpec() {
    return this._intraEntityGroupRuleSpec;
  }

  // multi_env_isolation_rule_spec - computed: true, optional: false, required: false
  private _multiEnvIsolationRuleSpec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecMultiEnvIsolationRuleSpecList(this, "multi_env_isolation_rule_spec", false);
  public get multiEnvIsolationRuleSpec() {
    return this._multiEnvIsolationRuleSpec;
  }

  // two_env_isolation_rule_spec - computed: true, optional: false, required: false
  private _twoEnvIsolationRuleSpec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecTwoEnvIsolationRuleSpecList(this, "two_env_isolation_rule_spec", false);
  public get twoEnvIsolationRuleSpec() {
    return this._twoEnvIsolationRuleSpec;
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRules {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPoliciesV2NetworkPolicies {
}

export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesToTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPoliciesV2NetworkPoliciesToHclTerraform(struct?: DataNutanixNetworkSecurityPoliciesV2NetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPoliciesV2NetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPoliciesV2NetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // is_hitlog_enabled - computed: true, optional: false, required: false
  public get isHitlogEnabled() {
    return this.getBooleanAttribute('is_hitlog_enabled');
  }

  // is_ipv6_traffic_allowed - computed: true, optional: false, required: false
  public get isIpv6TrafficAllowed() {
    return this.getBooleanAttribute('is_ipv6_traffic_allowed');
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
  private _links = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // secured_groups - computed: true, optional: false, required: false
  public get securedGroups() {
    return this.getListAttribute('secured_groups');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getListAttribute('vpc_reference');
  }
}

export class DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesOutputReference {
    return new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2 nutanix_network_security_policies_v2}
*/
export class DataNutanixNetworkSecurityPoliciesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_network_security_policies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNetworkSecurityPoliciesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNetworkSecurityPoliciesV2 to import
  * @param importFromId The id of the existing DataNutanixNetworkSecurityPoliciesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNetworkSecurityPoliciesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_network_security_policies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policies_v2 nutanix_network_security_policies_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNetworkSecurityPoliciesV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNetworkSecurityPoliciesV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_network_security_policies_v2',
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
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._orderBy = config.orderBy;
    this._page = config.page;
    this._select = config.select;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // network_policies - computed: true, optional: false, required: false
  private _networkPolicies = new DataNutanixNetworkSecurityPoliciesV2NetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      order_by: cdktf.stringToTerraform(this._orderBy),
      page: cdktf.numberToTerraform(this._page),
      select: cdktf.stringToTerraform(this._select),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select: {
        value: cdktf.stringToHclTerraform(this._select),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
