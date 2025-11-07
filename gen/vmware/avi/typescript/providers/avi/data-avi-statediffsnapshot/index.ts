// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviStatediffsnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot#id DataAviStatediffsnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot#name DataAviStatediffsnapshot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot#tenant_ref DataAviStatediffsnapshot#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot#uuid DataAviStatediffsnapshot#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatus {
}

export function dataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotGssnapshot {
}

export function dataAviStatediffsnapshotPostSnapshotGssnapshotToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotGssnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotGssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotGssnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotGssnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPostSnapshotGssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPostSnapshotGssnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotGssnapshotOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotGssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatus {
}

export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotPoolsnapshot {
}

export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotPoolsnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotPoolsnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotPoolsnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotPoolsnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPostSnapshotPoolsnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPostSnapshotPoolsnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotPoolsnapshotOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotPoolsnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatus {
}

export function dataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotSesnapshot {
}

export function dataAviStatediffsnapshotPostSnapshotSesnapshotToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotSesnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotSesnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotSesnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotSesnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPostSnapshotSesnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPostSnapshotSesnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotSesnapshotOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotSesnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatus {
}

export function dataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshotVssnapshot {
}

export function dataAviStatediffsnapshotPostSnapshotVssnapshotToTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotVssnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshotVssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshotVssnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshotVssnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPostSnapshotVssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPostSnapshotVssnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotVssnapshotOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotVssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPostSnapshot {
}

export function dataAviStatediffsnapshotPostSnapshotToTerraform(struct?: DataAviStatediffsnapshotPostSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPostSnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPostSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPostSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPostSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPostSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gssnapshot - computed: true, optional: false, required: false
  private _gssnapshot = new DataAviStatediffsnapshotPostSnapshotGssnapshotList(this, "gssnapshot", true);
  public get gssnapshot() {
    return this._gssnapshot;
  }

  // poolsnapshot - computed: true, optional: false, required: false
  private _poolsnapshot = new DataAviStatediffsnapshotPostSnapshotPoolsnapshotList(this, "poolsnapshot", true);
  public get poolsnapshot() {
    return this._poolsnapshot;
  }

  // sesnapshot - computed: true, optional: false, required: false
  private _sesnapshot = new DataAviStatediffsnapshotPostSnapshotSesnapshotList(this, "sesnapshot", true);
  public get sesnapshot() {
    return this._sesnapshot;
  }

  // vssnapshot - computed: true, optional: false, required: false
  private _vssnapshot = new DataAviStatediffsnapshotPostSnapshotVssnapshotList(this, "vssnapshot", true);
  public get vssnapshot() {
    return this._vssnapshot;
  }
}

export class DataAviStatediffsnapshotPostSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPostSnapshotOutputReference {
    return new DataAviStatediffsnapshotPostSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatus {
}

export function dataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotGssnapshot {
}

export function dataAviStatediffsnapshotPreSnapshotGssnapshotToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotGssnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotGssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotGssnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotGssnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPreSnapshotGssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPreSnapshotGssnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotGssnapshotOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotGssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatus {
}

export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotPoolsnapshot {
}

export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotPoolsnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotPoolsnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotPoolsnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotPoolsnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPreSnapshotPoolsnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPreSnapshotPoolsnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotPoolsnapshotOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotPoolsnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatus {
}

export function dataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotSesnapshot {
}

export function dataAviStatediffsnapshotPreSnapshotSesnapshotToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotSesnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotSesnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotSesnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotSesnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPreSnapshotSesnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPreSnapshotSesnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotSesnapshotOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotSesnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime {
}

export function dataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatus {
}

export function dataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshotVssnapshot {
}

export function dataAviStatediffsnapshotPreSnapshotVssnapshotToTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotVssnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshotVssnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshotVssnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshotVssnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviStatediffsnapshotPreSnapshotVssnapshotOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
}

export class DataAviStatediffsnapshotPreSnapshotVssnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotVssnapshotOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotVssnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviStatediffsnapshotPreSnapshot {
}

export function dataAviStatediffsnapshotPreSnapshotToTerraform(struct?: DataAviStatediffsnapshotPreSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviStatediffsnapshotPreSnapshotToHclTerraform(struct?: DataAviStatediffsnapshotPreSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviStatediffsnapshotPreSnapshotOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviStatediffsnapshotPreSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviStatediffsnapshotPreSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gssnapshot - computed: true, optional: false, required: false
  private _gssnapshot = new DataAviStatediffsnapshotPreSnapshotGssnapshotList(this, "gssnapshot", true);
  public get gssnapshot() {
    return this._gssnapshot;
  }

  // poolsnapshot - computed: true, optional: false, required: false
  private _poolsnapshot = new DataAviStatediffsnapshotPreSnapshotPoolsnapshotList(this, "poolsnapshot", true);
  public get poolsnapshot() {
    return this._poolsnapshot;
  }

  // sesnapshot - computed: true, optional: false, required: false
  private _sesnapshot = new DataAviStatediffsnapshotPreSnapshotSesnapshotList(this, "sesnapshot", true);
  public get sesnapshot() {
    return this._sesnapshot;
  }

  // vssnapshot - computed: true, optional: false, required: false
  private _vssnapshot = new DataAviStatediffsnapshotPreSnapshotVssnapshotList(this, "vssnapshot", true);
  public get vssnapshot() {
    return this._vssnapshot;
  }
}

export class DataAviStatediffsnapshotPreSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAviStatediffsnapshotPreSnapshotOutputReference {
    return new DataAviStatediffsnapshotPreSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot avi_statediffsnapshot}
*/
export class DataAviStatediffsnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_statediffsnapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviStatediffsnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviStatediffsnapshot to import
  * @param importFromId The id of the existing DataAviStatediffsnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviStatediffsnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_statediffsnapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/statediffsnapshot avi_statediffsnapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviStatediffsnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviStatediffsnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_statediffsnapshot',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gslb_name - computed: true, optional: false, required: false
  public get gslbName() {
    return this.getStringAttribute('gslb_name');
  }

  // gslb_uuid - computed: true, optional: false, required: false
  public get gslbUuid() {
    return this.getStringAttribute('gslb_uuid');
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

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }

  // pool_uuid - computed: true, optional: false, required: false
  public get poolUuid() {
    return this.getStringAttribute('pool_uuid');
  }

  // post_snapshot - computed: true, optional: false, required: false
  private _postSnapshot = new DataAviStatediffsnapshotPostSnapshotList(this, "post_snapshot", true);
  public get postSnapshot() {
    return this._postSnapshot;
  }

  // pre_snapshot - computed: true, optional: false, required: false
  private _preSnapshot = new DataAviStatediffsnapshotPreSnapshotList(this, "pre_snapshot", true);
  public get preSnapshot() {
    return this._preSnapshot;
  }

  // se_group_name - computed: true, optional: false, required: false
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }

  // se_group_uuid - computed: true, optional: false, required: false
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }

  // se_name - computed: true, optional: false, required: false
  public get seName() {
    return this.getStringAttribute('se_name');
  }

  // se_uuid - computed: true, optional: false, required: false
  public get seUuid() {
    return this.getStringAttribute('se_uuid');
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }

  // statediff_operation_ref - computed: true, optional: false, required: false
  public get statediffOperationRef() {
    return this.getStringAttribute('statediff_operation_ref');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // vs_name - computed: true, optional: false, required: false
  public get vsName() {
    return this.getStringAttribute('vs_name');
  }

  // vs_uuid - computed: true, optional: false, required: false
  public get vsUuid() {
    return this.getStringAttribute('vs_uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
