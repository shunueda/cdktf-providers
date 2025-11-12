// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNetworkSecurityPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2#ext_id DataNutanixNetworkSecurityPolicyV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2#id DataNutanixNetworkSecurityPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixNetworkSecurityPolicyV2Links {
}

export function dataNutanixNetworkSecurityPolicyV2LinksToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2LinksToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2Links | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2LinksOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesLinks {
}

export function dataNutanixNetworkSecurityPolicyV2RulesLinksToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesLinksToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesLinks | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesLinksOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnet | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServices | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnet | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServices | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServices | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpec | undefined) {
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
  private _destSubnet = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecDestSubnetList(this, "dest_subnet", false);
  public get destSubnet() {
    return this._destSubnet;
  }

  // icmp_services - computed: true, optional: false, required: false
  private _icmpServices = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecIcmpServicesList(this, "icmp_services", false);
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
  private _srcSubnet = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecSrcSubnetList(this, "src_subnet", false);
  public get srcSubnet() {
    return this._srcSubnet;
  }

  // tcp_services - computed: true, optional: false, required: false
  private _tcpServices = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecTcpServicesList(this, "tcp_services", false);
  public get tcpServices() {
    return this._tcpServices;
  }

  // udp_services - computed: true, optional: false, required: false
  private _udpServices = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecUdpServicesList(this, "udp_services", false);
  public get udpServices() {
    return this._udpServices;
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpec | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroup | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // isolation_group - computed: true, optional: false, required: false
  private _isolationGroup = new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupIsolationGroupList(this, "isolation_group", false);
  public get isolationGroup() {
    return this._isolationGroup;
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_to_all_isolation_group - computed: true, optional: false, required: false
  private _allToAllIsolationGroup = new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecAllToAllIsolationGroupList(this, "all_to_all_isolation_group", false);
  public get allToAllIsolationGroup() {
    return this._allToAllIsolationGroup;
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpec | undefined) {
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

export class DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2RulesSpec {
}

export function dataNutanixNetworkSecurityPolicyV2RulesSpecToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesSpecToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2RulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2RulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2RulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_rule_spec - computed: true, optional: false, required: false
  private _applicationRuleSpec = new DataNutanixNetworkSecurityPolicyV2RulesSpecApplicationRuleSpecList(this, "application_rule_spec", false);
  public get applicationRuleSpec() {
    return this._applicationRuleSpec;
  }

  // intra_entity_group_rule_spec - computed: true, optional: false, required: false
  private _intraEntityGroupRuleSpec = new DataNutanixNetworkSecurityPolicyV2RulesSpecIntraEntityGroupRuleSpecList(this, "intra_entity_group_rule_spec", false);
  public get intraEntityGroupRuleSpec() {
    return this._intraEntityGroupRuleSpec;
  }

  // multi_env_isolation_rule_spec - computed: true, optional: false, required: false
  private _multiEnvIsolationRuleSpec = new DataNutanixNetworkSecurityPolicyV2RulesSpecMultiEnvIsolationRuleSpecList(this, "multi_env_isolation_rule_spec", false);
  public get multiEnvIsolationRuleSpec() {
    return this._multiEnvIsolationRuleSpec;
  }

  // two_env_isolation_rule_spec - computed: true, optional: false, required: false
  private _twoEnvIsolationRuleSpec = new DataNutanixNetworkSecurityPolicyV2RulesSpecTwoEnvIsolationRuleSpecList(this, "two_env_isolation_rule_spec", false);
  public get twoEnvIsolationRuleSpec() {
    return this._twoEnvIsolationRuleSpec;
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesSpecOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityPolicyV2Rules {
}

export function dataNutanixNetworkSecurityPolicyV2RulesToTerraform(struct?: DataNutanixNetworkSecurityPolicyV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityPolicyV2RulesToHclTerraform(struct?: DataNutanixNetworkSecurityPolicyV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityPolicyV2RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityPolicyV2Rules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityPolicyV2Rules | undefined) {
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
  private _links = new DataNutanixNetworkSecurityPolicyV2RulesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataNutanixNetworkSecurityPolicyV2RulesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityPolicyV2RulesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityPolicyV2RulesOutputReference {
    return new DataNutanixNetworkSecurityPolicyV2RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2 nutanix_network_security_policy_v2}
*/
export class DataNutanixNetworkSecurityPolicyV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_network_security_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNetworkSecurityPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNetworkSecurityPolicyV2 to import
  * @param importFromId The id of the existing DataNutanixNetworkSecurityPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNetworkSecurityPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_network_security_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_policy_v2 nutanix_network_security_policy_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNetworkSecurityPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNetworkSecurityPolicyV2Config) {
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
    this._extId = config.extId;
    this._id = config.id;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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
  private _links = new DataNutanixNetworkSecurityPolicyV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataNutanixNetworkSecurityPolicyV2RulesList(this, "rules", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
