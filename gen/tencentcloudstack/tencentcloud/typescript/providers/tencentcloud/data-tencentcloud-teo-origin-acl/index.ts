// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTeoOriginAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl#id DataTencentcloudTeoOriginAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl#result_output_file DataTencentcloudTeoOriginAcl#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Specifies the site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl#zone_id DataTencentcloudTeoOriginAcl#zone_id}
  */
  readonly zoneId: string;
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddresses {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // i_pv4 - computed: true, optional: false, required: false
  public get iPv4() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv4'));
  }

  // i_pv6 - computed: true, optional: false, required: false
  public get iPv6() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv6'));
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAcl {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_time - computed: true, optional: false, required: false
  public get activeTime() {
    return this.getStringAttribute('active_time');
  }

  // entire_addresses - computed: true, optional: false, required: false
  private _entireAddresses = new DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclEntireAddressesList(this, "entire_addresses", false);
  public get entireAddresses() {
    return this._entireAddresses;
  }

  // is_planed - computed: true, optional: false, required: false
  public get isPlaned() {
    return this.getStringAttribute('is_planed');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddresses {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // i_pv4 - computed: true, optional: false, required: false
  public get iPv4() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv4'));
  }

  // i_pv6 - computed: true, optional: false, required: false
  public get iPv6() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv6'));
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddresses {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // i_pv4 - computed: true, optional: false, required: false
  public get iPv4() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv4'));
  }

  // i_pv6 - computed: true, optional: false, required: false
  public get iPv6() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv6'));
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddresses {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // i_pv4 - computed: true, optional: false, required: false
  public get iPv4() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv4'));
  }

  // i_pv6 - computed: true, optional: false, required: false
  public get iPv6() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv6'));
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddresses {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // i_pv4 - computed: true, optional: false, required: false
  public get iPv4() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv4'));
  }

  // i_pv6 - computed: true, optional: false, required: false
  public get iPv6() {
    return cdktf.Fn.tolist(this.getListAttribute('i_pv6'));
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6'));
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAcl {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // added_addresses - computed: true, optional: false, required: false
  private _addedAddresses = new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclAddedAddressesList(this, "added_addresses", false);
  public get addedAddresses() {
    return this._addedAddresses;
  }

  // entire_addresses - computed: true, optional: false, required: false
  private _entireAddresses = new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclEntireAddressesList(this, "entire_addresses", false);
  public get entireAddresses() {
    return this._entireAddresses;
  }

  // no_change_addresses - computed: true, optional: false, required: false
  private _noChangeAddresses = new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclNoChangeAddressesList(this, "no_change_addresses", false);
  public get noChangeAddresses() {
    return this._noChangeAddresses;
  }

  // planned_active_time - computed: true, optional: false, required: false
  public get plannedActiveTime() {
    return this.getStringAttribute('planned_active_time');
  }

  // removed_addresses - computed: true, optional: false, required: false
  private _removedAddresses = new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclRemovedAddressesList(this, "removed_addresses", false);
  public get removedAddresses() {
    return this._removedAddresses;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTeoOriginAclOriginAclInfo {
}

export function dataTencentcloudTeoOriginAclOriginAclInfoToTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTeoOriginAclOriginAclInfoToHclTerraform(struct?: DataTencentcloudTeoOriginAclOriginAclInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTeoOriginAclOriginAclInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTeoOriginAclOriginAclInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTeoOriginAclOriginAclInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_origin_acl - computed: true, optional: false, required: false
  private _currentOriginAcl = new DataTencentcloudTeoOriginAclOriginAclInfoCurrentOriginAclList(this, "current_origin_acl", false);
  public get currentOriginAcl() {
    return this._currentOriginAcl;
  }

  // l4_proxy_ids - computed: true, optional: false, required: false
  public get l4ProxyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('l4_proxy_ids'));
  }

  // l7_hosts - computed: true, optional: false, required: false
  public get l7Hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('l7_hosts'));
  }

  // next_origin_acl - computed: true, optional: false, required: false
  private _nextOriginAcl = new DataTencentcloudTeoOriginAclOriginAclInfoNextOriginAclList(this, "next_origin_acl", false);
  public get nextOriginAcl() {
    return this._nextOriginAcl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudTeoOriginAclOriginAclInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTeoOriginAclOriginAclInfoOutputReference {
    return new DataTencentcloudTeoOriginAclOriginAclInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl tencentcloud_teo_origin_acl}
*/
export class DataTencentcloudTeoOriginAcl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_origin_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTeoOriginAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTeoOriginAcl to import
  * @param importFromId The id of the existing DataTencentcloudTeoOriginAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTeoOriginAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_origin_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/teo_origin_acl tencentcloud_teo_origin_acl} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTeoOriginAclConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTeoOriginAclConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_origin_acl',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // origin_acl_info - computed: true, optional: false, required: false
  private _originAclInfo = new DataTencentcloudTeoOriginAclOriginAclInfoList(this, "origin_acl_info", false);
  public get originAclInfo() {
    return this._originAclInfo;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
