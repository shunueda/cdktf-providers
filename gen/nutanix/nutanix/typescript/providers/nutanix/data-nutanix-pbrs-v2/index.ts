// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixPbrsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#filter DataNutanixPbrsV2#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#id DataNutanixPbrsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#limit DataNutanixPbrsV2#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#order_by DataNutanixPbrsV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#page DataNutanixPbrsV2#page}
  */
  readonly page?: number;
}
export interface DataNutanixPbrsV2RoutingPoliciesLinks {
}

export function dataNutanixPbrsV2RoutingPoliciesLinksToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesLinksToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesLinks | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesLinksOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesMetadata {
}

export function dataNutanixPbrsV2RoutingPoliciesMetadataToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesMetadataToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesMetadataOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddress {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIp {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIp {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6 | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIp {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParams {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_service_ip - computed: true, optional: false, required: false
  private _egressServiceIp = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsEgressServiceIpList(this, "egress_service_ip", false);
  public get egressServiceIp() {
    return this._egressServiceIp;
  }

  // ingress_service_ip - computed: true, optional: false, required: false
  private _ingressServiceIp = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsIngressServiceIpList(this, "ingress_service_ip", false);
  public get ingressServiceIp() {
    return this._ingressServiceIp;
  }

  // reroute_fallback_action - computed: true, optional: false, required: false
  public get rerouteFallbackAction() {
    return this.getStringAttribute('reroute_fallback_action');
  }

  // service_ip - computed: true, optional: false, required: false
  private _serviceIp = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsServiceIpList(this, "service_ip", false);
  public get serviceIp() {
    return this._serviceIp;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyAction {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // nexthop_ip_address - computed: true, optional: false, required: false
  private _nexthopIpAddress = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionNexthopIpAddressList(this, "nexthop_ip_address", false);
  public get nexthopIpAddress() {
    return this._nexthopIpAddress;
  }

  // reroute_params - computed: true, optional: false, required: false
  private _rerouteParams = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionRerouteParamsList(this, "reroute_params", false);
  public get rerouteParams() {
    return this._rerouteParams;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefix {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestination {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // subnet_prefix - computed: true, optional: false, required: false
  private _subnetPrefix = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationSubnetPrefixList(this, "subnet_prefix", false);
  public get subnetPrefix() {
    return this._subnetPrefix;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObject {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObject {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  private _destinationPortRanges = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }

  // source_port_ranges - computed: true, optional: false, required: false
  private _sourcePortRanges = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObject {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol_number - computed: true, optional: false, required: false
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParameters {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp_object - computed: true, optional: false, required: false
  private _icmpObject = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersIcmpObjectList(this, "icmp_object", false);
  public get icmpObject() {
    return this._icmpObject;
  }

  // layer_four_protocol_object - computed: true, optional: false, required: false
  private _layerFourProtocolObject = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectList(this, "layer_four_protocol_object", false);
  public get layerFourProtocolObject() {
    return this._layerFourProtocolObject;
  }

  // protocol_number_object - computed: true, optional: false, required: false
  private _protocolNumberObject = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersProtocolNumberObjectList(this, "protocol_number_object", false);
  public get protocolNumberObject() {
    return this._protocolNumberObject;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4Ip {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6Ip {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | undefined) {
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

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6 {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6ToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6ToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefix {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSource {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // subnet_prefix - computed: true, optional: false, required: false
  private _subnetPrefix = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceSubnetPrefixList(this, "subnet_prefix", false);
  public get subnetPrefix() {
    return this._subnetPrefix;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatch {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // protocol_parameters - computed: true, optional: false, required: false
  private _protocolParameters = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchProtocolParametersList(this, "protocol_parameters", false);
  public get protocolParameters() {
    return this._protocolParameters;
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesPolicies {
}

export function dataNutanixPbrsV2RoutingPoliciesPoliciesToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesPoliciesToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_bidirectional - computed: true, optional: false, required: false
  public get isBidirectional() {
    return this.getBooleanAttribute('is_bidirectional');
  }

  // policy_action - computed: true, optional: false, required: false
  private _policyAction = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyActionList(this, "policy_action", false);
  public get policyAction() {
    return this._policyAction;
  }

  // policy_match - computed: true, optional: false, required: false
  private _policyMatch = new DataNutanixPbrsV2RoutingPoliciesPoliciesPolicyMatchList(this, "policy_match", false);
  public get policyMatch() {
    return this._policyMatch;
  }
}

export class DataNutanixPbrsV2RoutingPoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesPoliciesOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPoliciesVpc {
}

export function dataNutanixPbrsV2RoutingPoliciesVpcToTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesVpcToHclTerraform(struct?: DataNutanixPbrsV2RoutingPoliciesVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPoliciesVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPoliciesVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesVpcOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixPbrsV2RoutingPolicies {
}

export function dataNutanixPbrsV2RoutingPoliciesToTerraform(struct?: DataNutanixPbrsV2RoutingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixPbrsV2RoutingPoliciesToHclTerraform(struct?: DataNutanixPbrsV2RoutingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixPbrsV2RoutingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixPbrsV2RoutingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixPbrsV2RoutingPolicies | undefined) {
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
  private _links = new DataNutanixPbrsV2RoutingPoliciesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixPbrsV2RoutingPoliciesMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataNutanixPbrsV2RoutingPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataNutanixPbrsV2RoutingPoliciesVpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }

  // vpc_ext_id - computed: true, optional: false, required: false
  public get vpcExtId() {
    return this.getStringAttribute('vpc_ext_id');
  }
}

export class DataNutanixPbrsV2RoutingPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixPbrsV2RoutingPoliciesOutputReference {
    return new DataNutanixPbrsV2RoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2 nutanix_pbrs_v2}
*/
export class DataNutanixPbrsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pbrs_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixPbrsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixPbrsV2 to import
  * @param importFromId The id of the existing DataNutanixPbrsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixPbrsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pbrs_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/pbrs_v2 nutanix_pbrs_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixPbrsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixPbrsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pbrs_v2',
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
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._orderBy = config.orderBy;
    this._page = config.page;
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

  // routing_policies - computed: true, optional: false, required: false
  private _routingPolicies = new DataNutanixPbrsV2RoutingPoliciesList(this, "routing_policies", false);
  public get routingPolicies() {
    return this._routingPolicies;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
