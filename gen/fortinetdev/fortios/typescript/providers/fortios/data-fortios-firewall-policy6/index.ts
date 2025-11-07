// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosFirewallPolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6#id DataFortiosFirewallPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6#policyid DataFortiosFirewallPolicy6#policyid}
  */
  readonly policyid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6#vdomparam DataFortiosFirewallPolicy6#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosFirewallPolicy6AppCategory {
}

export function dataFortiosFirewallPolicy6AppCategoryToTerraform(struct?: DataFortiosFirewallPolicy6AppCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6AppCategoryToHclTerraform(struct?: DataFortiosFirewallPolicy6AppCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6AppCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6AppCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6AppCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataFortiosFirewallPolicy6AppCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6AppCategoryOutputReference {
    return new DataFortiosFirewallPolicy6AppCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6AppGroup {
}

export function dataFortiosFirewallPolicy6AppGroupToTerraform(struct?: DataFortiosFirewallPolicy6AppGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6AppGroupToHclTerraform(struct?: DataFortiosFirewallPolicy6AppGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6AppGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6AppGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6AppGroup | undefined) {
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

export class DataFortiosFirewallPolicy6AppGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6AppGroupOutputReference {
    return new DataFortiosFirewallPolicy6AppGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Application {
}

export function dataFortiosFirewallPolicy6ApplicationToTerraform(struct?: DataFortiosFirewallPolicy6Application): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6ApplicationToHclTerraform(struct?: DataFortiosFirewallPolicy6Application): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6ApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Application | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Application | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataFortiosFirewallPolicy6ApplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6ApplicationOutputReference {
    return new DataFortiosFirewallPolicy6ApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6CustomLogFields {
}

export function dataFortiosFirewallPolicy6CustomLogFieldsToTerraform(struct?: DataFortiosFirewallPolicy6CustomLogFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6CustomLogFieldsToHclTerraform(struct?: DataFortiosFirewallPolicy6CustomLogFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6CustomLogFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6CustomLogFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6CustomLogFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
}

export class DataFortiosFirewallPolicy6CustomLogFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6CustomLogFieldsOutputReference {
    return new DataFortiosFirewallPolicy6CustomLogFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Devices {
}

export function dataFortiosFirewallPolicy6DevicesToTerraform(struct?: DataFortiosFirewallPolicy6Devices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6DevicesToHclTerraform(struct?: DataFortiosFirewallPolicy6Devices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6DevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Devices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Devices | undefined) {
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

export class DataFortiosFirewallPolicy6DevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6DevicesOutputReference {
    return new DataFortiosFirewallPolicy6DevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Dstaddr {
}

export function dataFortiosFirewallPolicy6DstaddrToTerraform(struct?: DataFortiosFirewallPolicy6Dstaddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6DstaddrToHclTerraform(struct?: DataFortiosFirewallPolicy6Dstaddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6DstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Dstaddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Dstaddr | undefined) {
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

export class DataFortiosFirewallPolicy6DstaddrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6DstaddrOutputReference {
    return new DataFortiosFirewallPolicy6DstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Dstintf {
}

export function dataFortiosFirewallPolicy6DstintfToTerraform(struct?: DataFortiosFirewallPolicy6Dstintf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6DstintfToHclTerraform(struct?: DataFortiosFirewallPolicy6Dstintf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6DstintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Dstintf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Dstintf | undefined) {
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

export class DataFortiosFirewallPolicy6DstintfList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6DstintfOutputReference {
    return new DataFortiosFirewallPolicy6DstintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6FssoGroups {
}

export function dataFortiosFirewallPolicy6FssoGroupsToTerraform(struct?: DataFortiosFirewallPolicy6FssoGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6FssoGroupsToHclTerraform(struct?: DataFortiosFirewallPolicy6FssoGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6FssoGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6FssoGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6FssoGroups | undefined) {
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

export class DataFortiosFirewallPolicy6FssoGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6FssoGroupsOutputReference {
    return new DataFortiosFirewallPolicy6FssoGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Groups {
}

export function dataFortiosFirewallPolicy6GroupsToTerraform(struct?: DataFortiosFirewallPolicy6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6GroupsToHclTerraform(struct?: DataFortiosFirewallPolicy6Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6GroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Groups | undefined) {
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

export class DataFortiosFirewallPolicy6GroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6GroupsOutputReference {
    return new DataFortiosFirewallPolicy6GroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Poolname {
}

export function dataFortiosFirewallPolicy6PoolnameToTerraform(struct?: DataFortiosFirewallPolicy6Poolname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6PoolnameToHclTerraform(struct?: DataFortiosFirewallPolicy6Poolname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6PoolnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Poolname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Poolname | undefined) {
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

export class DataFortiosFirewallPolicy6PoolnameList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6PoolnameOutputReference {
    return new DataFortiosFirewallPolicy6PoolnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Service {
}

export function dataFortiosFirewallPolicy6ServiceToTerraform(struct?: DataFortiosFirewallPolicy6Service): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6ServiceToHclTerraform(struct?: DataFortiosFirewallPolicy6Service): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6ServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Service | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Service | undefined) {
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

export class DataFortiosFirewallPolicy6ServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6ServiceOutputReference {
    return new DataFortiosFirewallPolicy6ServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Srcaddr {
}

export function dataFortiosFirewallPolicy6SrcaddrToTerraform(struct?: DataFortiosFirewallPolicy6Srcaddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6SrcaddrToHclTerraform(struct?: DataFortiosFirewallPolicy6Srcaddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6SrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Srcaddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Srcaddr | undefined) {
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

export class DataFortiosFirewallPolicy6SrcaddrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6SrcaddrOutputReference {
    return new DataFortiosFirewallPolicy6SrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Srcintf {
}

export function dataFortiosFirewallPolicy6SrcintfToTerraform(struct?: DataFortiosFirewallPolicy6Srcintf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6SrcintfToHclTerraform(struct?: DataFortiosFirewallPolicy6Srcintf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6SrcintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Srcintf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Srcintf | undefined) {
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

export class DataFortiosFirewallPolicy6SrcintfList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6SrcintfOutputReference {
    return new DataFortiosFirewallPolicy6SrcintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6SslMirrorIntf {
}

export function dataFortiosFirewallPolicy6SslMirrorIntfToTerraform(struct?: DataFortiosFirewallPolicy6SslMirrorIntf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6SslMirrorIntfToHclTerraform(struct?: DataFortiosFirewallPolicy6SslMirrorIntf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6SslMirrorIntfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6SslMirrorIntf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6SslMirrorIntf | undefined) {
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

export class DataFortiosFirewallPolicy6SslMirrorIntfList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6SslMirrorIntfOutputReference {
    return new DataFortiosFirewallPolicy6SslMirrorIntfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6UrlCategory {
}

export function dataFortiosFirewallPolicy6UrlCategoryToTerraform(struct?: DataFortiosFirewallPolicy6UrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6UrlCategoryToHclTerraform(struct?: DataFortiosFirewallPolicy6UrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6UrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6UrlCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6UrlCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataFortiosFirewallPolicy6UrlCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6UrlCategoryOutputReference {
    return new DataFortiosFirewallPolicy6UrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallPolicy6Users {
}

export function dataFortiosFirewallPolicy6UsersToTerraform(struct?: DataFortiosFirewallPolicy6Users): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallPolicy6UsersToHclTerraform(struct?: DataFortiosFirewallPolicy6Users): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallPolicy6UsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallPolicy6Users | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallPolicy6Users | undefined) {
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

export class DataFortiosFirewallPolicy6UsersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallPolicy6UsersOutputReference {
    return new DataFortiosFirewallPolicy6UsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6 fortios_firewall_policy6}
*/
export class DataFortiosFirewallPolicy6 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_policy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosFirewallPolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosFirewallPolicy6 to import
  * @param importFromId The id of the existing DataFortiosFirewallPolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosFirewallPolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_policy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_policy6 fortios_firewall_policy6} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosFirewallPolicy6Config
  */
  public constructor(scope: Construct, id: string, config: DataFortiosFirewallPolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_policy6',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._policyid = config.policyid;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // anti_replay - computed: true, optional: false, required: false
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }

  // app_category - computed: true, optional: false, required: false
  private _appCategory = new DataFortiosFirewallPolicy6AppCategoryList(this, "app_category", false);
  public get appCategory() {
    return this._appCategory;
  }

  // app_group - computed: true, optional: false, required: false
  private _appGroup = new DataFortiosFirewallPolicy6AppGroupList(this, "app_group", false);
  public get appGroup() {
    return this._appGroup;
  }

  // application - computed: true, optional: false, required: false
  private _application = new DataFortiosFirewallPolicy6ApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }

  // application_list - computed: true, optional: false, required: false
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }

  // auto_asic_offload - computed: true, optional: false, required: false
  public get autoAsicOffload() {
    return this.getStringAttribute('auto_asic_offload');
  }

  // av_profile - computed: true, optional: false, required: false
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }

  // cifs_profile - computed: true, optional: false, required: false
  public get cifsProfile() {
    return this.getStringAttribute('cifs_profile');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // custom_log_fields - computed: true, optional: false, required: false
  private _customLogFields = new DataFortiosFirewallPolicy6CustomLogFieldsList(this, "custom_log_fields", false);
  public get customLogFields() {
    return this._customLogFields;
  }

  // decrypted_traffic_mirror - computed: true, optional: false, required: false
  public get decryptedTrafficMirror() {
    return this.getStringAttribute('decrypted_traffic_mirror');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataFortiosFirewallPolicy6DevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // diffserv_forward - computed: true, optional: false, required: false
  public get diffservForward() {
    return this.getStringAttribute('diffserv_forward');
  }

  // diffserv_reverse - computed: true, optional: false, required: false
  public get diffservReverse() {
    return this.getStringAttribute('diffserv_reverse');
  }

  // diffservcode_forward - computed: true, optional: false, required: false
  public get diffservcodeForward() {
    return this.getStringAttribute('diffservcode_forward');
  }

  // diffservcode_rev - computed: true, optional: false, required: false
  public get diffservcodeRev() {
    return this.getStringAttribute('diffservcode_rev');
  }

  // dlp_sensor - computed: true, optional: false, required: false
  public get dlpSensor() {
    return this.getStringAttribute('dlp_sensor');
  }

  // dnsfilter_profile - computed: true, optional: false, required: false
  public get dnsfilterProfile() {
    return this.getStringAttribute('dnsfilter_profile');
  }

  // dsri - computed: true, optional: false, required: false
  public get dsri() {
    return this.getStringAttribute('dsri');
  }

  // dstaddr - computed: true, optional: false, required: false
  private _dstaddr = new DataFortiosFirewallPolicy6DstaddrList(this, "dstaddr", false);
  public get dstaddr() {
    return this._dstaddr;
  }

  // dstaddr_negate - computed: true, optional: false, required: false
  public get dstaddrNegate() {
    return this.getStringAttribute('dstaddr_negate');
  }

  // dstintf - computed: true, optional: false, required: false
  private _dstintf = new DataFortiosFirewallPolicy6DstintfList(this, "dstintf", false);
  public get dstintf() {
    return this._dstintf;
  }

  // emailfilter_profile - computed: true, optional: false, required: false
  public get emailfilterProfile() {
    return this.getStringAttribute('emailfilter_profile');
  }

  // firewall_session_dirty - computed: true, optional: false, required: false
  public get firewallSessionDirty() {
    return this.getStringAttribute('firewall_session_dirty');
  }

  // fixedport - computed: true, optional: false, required: false
  public get fixedport() {
    return this.getStringAttribute('fixedport');
  }

  // fsso_groups - computed: true, optional: false, required: false
  private _fssoGroups = new DataFortiosFirewallPolicy6FssoGroupsList(this, "fsso_groups", false);
  public get fssoGroups() {
    return this._fssoGroups;
  }

  // global_label - computed: true, optional: false, required: false
  public get globalLabel() {
    return this.getStringAttribute('global_label');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataFortiosFirewallPolicy6GroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // http_policy_redirect - computed: true, optional: false, required: false
  public get httpPolicyRedirect() {
    return this.getStringAttribute('http_policy_redirect');
  }

  // icap_profile - computed: true, optional: false, required: false
  public get icapProfile() {
    return this.getStringAttribute('icap_profile');
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

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getStringAttribute('inbound');
  }

  // inspection_mode - computed: true, optional: false, required: false
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }

  // ippool - computed: true, optional: false, required: false
  public get ippool() {
    return this.getStringAttribute('ippool');
  }

  // ips_sensor - computed: true, optional: false, required: false
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // logtraffic - computed: true, optional: false, required: false
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }

  // logtraffic_start - computed: true, optional: false, required: false
  public get logtrafficStart() {
    return this.getStringAttribute('logtraffic_start');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getStringAttribute('nat');
  }

  // natinbound - computed: true, optional: false, required: false
  public get natinbound() {
    return this.getStringAttribute('natinbound');
  }

  // natoutbound - computed: true, optional: false, required: false
  public get natoutbound() {
    return this.getStringAttribute('natoutbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getStringAttribute('outbound');
  }

  // per_ip_shaper - computed: true, optional: false, required: false
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }

  // policyid - computed: false, optional: false, required: true
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // poolname - computed: true, optional: false, required: false
  private _poolname = new DataFortiosFirewallPolicy6PoolnameList(this, "poolname", false);
  public get poolname() {
    return this._poolname;
  }

  // profile_group - computed: true, optional: false, required: false
  public get profileGroup() {
    return this.getStringAttribute('profile_group');
  }

  // profile_protocol_options - computed: true, optional: false, required: false
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // replacemsg_override_group - computed: true, optional: false, required: false
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }

  // rsso - computed: true, optional: false, required: false
  public get rsso() {
    return this.getStringAttribute('rsso');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // send_deny_packet - computed: true, optional: false, required: false
  public get sendDenyPacket() {
    return this.getStringAttribute('send_deny_packet');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataFortiosFirewallPolicy6ServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getStringAttribute('service_negate');
  }

  // session_ttl - computed: true, optional: false, required: false
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }

  // spamfilter_profile - computed: true, optional: false, required: false
  public get spamfilterProfile() {
    return this.getStringAttribute('spamfilter_profile');
  }

  // srcaddr - computed: true, optional: false, required: false
  private _srcaddr = new DataFortiosFirewallPolicy6SrcaddrList(this, "srcaddr", false);
  public get srcaddr() {
    return this._srcaddr;
  }

  // srcaddr_negate - computed: true, optional: false, required: false
  public get srcaddrNegate() {
    return this.getStringAttribute('srcaddr_negate');
  }

  // srcintf - computed: true, optional: false, required: false
  private _srcintf = new DataFortiosFirewallPolicy6SrcintfList(this, "srcintf", false);
  public get srcintf() {
    return this._srcintf;
  }

  // ssh_filter_profile - computed: true, optional: false, required: false
  public get sshFilterProfile() {
    return this.getStringAttribute('ssh_filter_profile');
  }

  // ssh_policy_redirect - computed: true, optional: false, required: false
  public get sshPolicyRedirect() {
    return this.getStringAttribute('ssh_policy_redirect');
  }

  // ssl_mirror - computed: true, optional: false, required: false
  public get sslMirror() {
    return this.getStringAttribute('ssl_mirror');
  }

  // ssl_mirror_intf - computed: true, optional: false, required: false
  private _sslMirrorIntf = new DataFortiosFirewallPolicy6SslMirrorIntfList(this, "ssl_mirror_intf", false);
  public get sslMirrorIntf() {
    return this._sslMirrorIntf;
  }

  // ssl_ssh_profile - computed: true, optional: false, required: false
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tcp_mss_receiver - computed: true, optional: false, required: false
  public get tcpMssReceiver() {
    return this.getNumberAttribute('tcp_mss_receiver');
  }

  // tcp_mss_sender - computed: true, optional: false, required: false
  public get tcpMssSender() {
    return this.getNumberAttribute('tcp_mss_sender');
  }

  // tcp_session_without_syn - computed: true, optional: false, required: false
  public get tcpSessionWithoutSyn() {
    return this.getStringAttribute('tcp_session_without_syn');
  }

  // timeout_send_rst - computed: true, optional: false, required: false
  public get timeoutSendRst() {
    return this.getStringAttribute('timeout_send_rst');
  }

  // tos - computed: true, optional: false, required: false
  public get tos() {
    return this.getStringAttribute('tos');
  }

  // tos_mask - computed: true, optional: false, required: false
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }

  // tos_negate - computed: true, optional: false, required: false
  public get tosNegate() {
    return this.getStringAttribute('tos_negate');
  }

  // traffic_shaper - computed: true, optional: false, required: false
  public get trafficShaper() {
    return this.getStringAttribute('traffic_shaper');
  }

  // traffic_shaper_reverse - computed: true, optional: false, required: false
  public get trafficShaperReverse() {
    return this.getStringAttribute('traffic_shaper_reverse');
  }

  // url_category - computed: true, optional: false, required: false
  private _urlCategory = new DataFortiosFirewallPolicy6UrlCategoryList(this, "url_category", false);
  public get urlCategory() {
    return this._urlCategory;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataFortiosFirewallPolicy6UsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // utm_status - computed: true, optional: false, required: false
  public get utmStatus() {
    return this.getStringAttribute('utm_status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vlan_cos_fwd - computed: true, optional: false, required: false
  public get vlanCosFwd() {
    return this.getNumberAttribute('vlan_cos_fwd');
  }

  // vlan_cos_rev - computed: true, optional: false, required: false
  public get vlanCosRev() {
    return this.getNumberAttribute('vlan_cos_rev');
  }

  // vlan_filter - computed: true, optional: false, required: false
  public get vlanFilter() {
    return this.getStringAttribute('vlan_filter');
  }

  // voip_profile - computed: true, optional: false, required: false
  public get voipProfile() {
    return this.getStringAttribute('voip_profile');
  }

  // vpntunnel - computed: true, optional: false, required: false
  public get vpntunnel() {
    return this.getStringAttribute('vpntunnel');
  }

  // waf_profile - computed: true, optional: false, required: false
  public get wafProfile() {
    return this.getStringAttribute('waf_profile');
  }

  // webcache - computed: true, optional: false, required: false
  public get webcache() {
    return this.getStringAttribute('webcache');
  }

  // webcache_https - computed: true, optional: false, required: false
  public get webcacheHttps() {
    return this.getStringAttribute('webcache_https');
  }

  // webfilter_profile - computed: true, optional: false, required: false
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }

  // webproxy_forward_server - computed: true, optional: false, required: false
  public get webproxyForwardServer() {
    return this.getStringAttribute('webproxy_forward_server');
  }

  // webproxy_profile - computed: true, optional: false, required: false
  public get webproxyProfile() {
    return this.getStringAttribute('webproxy_profile');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policyid: cdktf.numberToTerraform(this._policyid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
