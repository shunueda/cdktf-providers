// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixRecoveryPlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plans#id DataNutanixRecoveryPlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixRecoveryPlansEntitiesCategories {
}

export function dataNutanixRecoveryPlansEntitiesCategoriesToTerraform(struct?: DataNutanixRecoveryPlansEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesCategoriesToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesCategories | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixRecoveryPlansEntitiesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesCategoriesOutputReference {
    return new DataNutanixRecoveryPlansEntitiesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesOwnerReference {
}

export function dataNutanixRecoveryPlansEntitiesOwnerReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesOwnerReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesOwnerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesOwnerReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesOwnerReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesOwnerReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesOwnerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // should_allocate_dynamically - computed: true, optional: false, required: false
  public get shouldAllocateDynamically() {
    return this.getBooleanAttribute('should_allocate_dynamically');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // should_allocate_dynamically - computed: true, optional: false, required: false
  public get shouldAllocateDynamically() {
    return this.getBooleanAttribute('should_allocate_dynamically');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_floating_ip_config - computed: true, optional: false, required: false
  private _recoveryFloatingIpConfig = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigList(this, "recovery_floating_ip_config", false);
  public get recoveryFloatingIpConfig() {
    return this._recoveryFloatingIpConfig;
  }

  // test_floating_ip_config - computed: true, optional: false, required: false
  private _testFloatingIpConfig = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigList(this, "test_floating_ip_config", false);
  public get testFloatingIpConfig() {
    return this._testFloatingIpConfig;
  }

  // vm_nic_information - computed: true, optional: false, required: false
  private _vmNicInformation = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationList(this, "vm_nic_information", false);
  public get vmNicInformation() {
    return this._vmNicInformation;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_url - computed: true, optional: false, required: false
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }

  // vm_ip_assignment_list - computed: true, optional: false, required: false
  private _vmIpAssignmentList = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListVmIpAssignmentListStructList(this, "vm_ip_assignment_list", false);
  public get vmIpAssignmentList() {
    return this._vmIpAssignmentList;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_config_list - computed: true, optional: false, required: false
  private _ipConfigList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_connectivity_state - computed: true, optional: false, required: false
  public get externalConnectivityState() {
    return this.getStringAttribute('external_connectivity_state');
  }

  // gateway_ip - computed: true, optional: false, required: false
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined) {
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

  // subnet_list - computed: true, optional: false, required: false
  private _subnetList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }

  // use_vpc_reference - computed: true, optional: false, required: false
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }

  // virtual_network_reference - computed: true, optional: false, required: false
  private _virtualNetworkReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceList(this, "virtual_network_reference", false);
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }

  // vpc_reference - computed: true, optional: false, required: false
  private _vpcReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceList(this, "vpc_reference", false);
  public get vpcReference() {
    return this._vpcReference;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_config_list - computed: true, optional: false, required: false
  private _ipConfigList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_connectivity_state - computed: true, optional: false, required: false
  public get externalConnectivityState() {
    return this.getStringAttribute('external_connectivity_state');
  }

  // gateway_ip - computed: true, optional: false, required: false
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined) {
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

  // subnet_list - computed: true, optional: false, required: false
  private _subnetList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }

  // use_vpc_reference - computed: true, optional: false, required: false
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }

  // virtual_network_reference - computed: true, optional: false, required: false
  private _virtualNetworkReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceList(this, "virtual_network_reference", false);
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }

  // vpc_reference - computed: true, optional: false, required: false
  private _vpcReference = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceList(this, "vpc_reference", false);
  public get vpcReference() {
    return this._vpcReference;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_url - computed: true, optional: false, required: false
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }

  // cluster_reference_list - computed: true, optional: false, required: false
  private _clusterReferenceList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList(this, "cluster_reference_list", false);
  public get clusterReferenceList() {
    return this._clusterReferenceList;
  }

  // recovery_ip_assignment_list - computed: true, optional: false, required: false
  private _recoveryIpAssignmentList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList(this, "recovery_ip_assignment_list", false);
  public get recoveryIpAssignmentList() {
    return this._recoveryIpAssignmentList;
  }

  // recovery_network - computed: true, optional: false, required: false
  private _recoveryNetwork = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkList(this, "recovery_network", false);
  public get recoveryNetwork() {
    return this._recoveryNetwork;
  }

  // test_ip_assignment_list - computed: true, optional: false, required: false
  private _testIpAssignmentList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList(this, "test_ip_assignment_list", false);
  public get testIpAssignmentList() {
    return this._testIpAssignmentList;
  }

  // test_network - computed: true, optional: false, required: false
  private _testNetwork = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkList(this, "test_network", false);
  public get testNetwork() {
    return this._testNetwork;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStruct {
}

export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_networks_stretched - computed: true, optional: false, required: false
  public get areNetworksStretched() {
    return this.getBooleanAttribute('are_networks_stretched');
  }

  // availability_zone_network_mapping_list - computed: true, optional: false, required: false
  private _availabilityZoneNetworkMappingList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList(this, "availability_zone_network_mapping_list", false);
  public get availabilityZoneNetworkMappingList() {
    return this._availabilityZoneNetworkMappingList;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesParameters {
}

export function dataNutanixRecoveryPlansEntitiesParametersToTerraform(struct?: DataNutanixRecoveryPlansEntitiesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesParametersToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip_assignment_list - computed: true, optional: false, required: false
  private _floatingIpAssignmentList = new DataNutanixRecoveryPlansEntitiesParametersFloatingIpAssignmentListStructList(this, "floating_ip_assignment_list", false);
  public get floatingIpAssignmentList() {
    return this._floatingIpAssignmentList;
  }

  // network_mapping_list - computed: true, optional: false, required: false
  private _networkMappingList = new DataNutanixRecoveryPlansEntitiesParametersNetworkMappingListStructList(this, "network_mapping_list", false);
  public get networkMappingList() {
    return this._networkMappingList;
  }
}

export class DataNutanixRecoveryPlansEntitiesParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesParametersOutputReference {
    return new DataNutanixRecoveryPlansEntitiesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesProjectReference {
}

export function dataNutanixRecoveryPlansEntitiesProjectReferenceToTerraform(struct?: DataNutanixRecoveryPlansEntitiesProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesProjectReferenceToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesProjectReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesProjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixRecoveryPlansEntitiesProjectReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesProjectReferenceOutputReference {
    return new DataNutanixRecoveryPlansEntitiesProjectReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategories {
}

export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategories | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct {
}

export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_script_exec - computed: true, optional: false, required: false
  public get enableScriptExec() {
    return this.getBooleanAttribute('enable_script_exec');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStruct {
}

export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_entity_reference_kind - computed: true, optional: false, required: false
  public get anyEntityReferenceKind() {
    return this.getStringAttribute('any_entity_reference_kind');
  }

  // any_entity_reference_name - computed: true, optional: false, required: false
  public get anyEntityReferenceName() {
    return this.getStringAttribute('any_entity_reference_name');
  }

  // any_entity_reference_uuid - computed: true, optional: false, required: false
  public get anyEntityReferenceUuid() {
    return this.getStringAttribute('any_entity_reference_uuid');
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }

  // script_list - computed: true, optional: false, required: false
  private _scriptList = new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList(this, "script_list", false);
  public get scriptList() {
    return this._scriptList;
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntities {
}

export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_info_list - computed: true, optional: false, required: false
  private _entityInfoList = new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesEntityInfoListStructList(this, "entity_info_list", false);
  public get entityInfoList() {
    return this._entityInfoList;
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStageWork {
}

export function dataNutanixRecoveryPlansEntitiesStageListStageWorkToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStageWorkToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStageWork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStageWork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recover_entities - computed: true, optional: false, required: false
  private _recoverEntities = new DataNutanixRecoveryPlansEntitiesStageListStageWorkRecoverEntitiesList(this, "recover_entities", false);
  public get recoverEntities() {
    return this._recoverEntities;
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStageWorkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStageWorkOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStageWorkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntitiesStageListStruct {
}

export function dataNutanixRecoveryPlansEntitiesStageListStructToTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesStageListStructToHclTerraform(struct?: DataNutanixRecoveryPlansEntitiesStageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesStageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntitiesStageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntitiesStageListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay_time_secs - computed: true, optional: false, required: false
  public get delayTimeSecs() {
    return this.getNumberAttribute('delay_time_secs');
  }

  // stage_uuid - computed: true, optional: false, required: false
  public get stageUuid() {
    return this.getStringAttribute('stage_uuid');
  }

  // stage_work - computed: true, optional: false, required: false
  private _stageWork = new DataNutanixRecoveryPlansEntitiesStageListStageWorkList(this, "stage_work", false);
  public get stageWork() {
    return this._stageWork;
  }
}

export class DataNutanixRecoveryPlansEntitiesStageListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesStageListStructOutputReference {
    return new DataNutanixRecoveryPlansEntitiesStageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlansEntities {
}

export function dataNutanixRecoveryPlansEntitiesToTerraform(struct?: DataNutanixRecoveryPlansEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlansEntitiesToHclTerraform(struct?: DataNutanixRecoveryPlansEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlansEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlansEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlansEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixRecoveryPlansEntitiesCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new DataNutanixRecoveryPlansEntitiesOwnerReferenceList(this, "owner_reference", false);
  public get ownerReference() {
    return this._ownerReference;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataNutanixRecoveryPlansEntitiesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new DataNutanixRecoveryPlansEntitiesProjectReferenceList(this, "project_reference", false);
  public get projectReference() {
    return this._projectReference;
  }

  // stage_list - computed: true, optional: false, required: false
  private _stageList = new DataNutanixRecoveryPlansEntitiesStageListStructList(this, "stage_list", false);
  public get stageList() {
    return this._stageList;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataNutanixRecoveryPlansEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlansEntitiesOutputReference {
    return new DataNutanixRecoveryPlansEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plans nutanix_recovery_plans}
*/
export class DataNutanixRecoveryPlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_plans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixRecoveryPlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixRecoveryPlans to import
  * @param importFromId The id of the existing DataNutanixRecoveryPlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixRecoveryPlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_plans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plans nutanix_recovery_plans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixRecoveryPlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixRecoveryPlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_plans',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataNutanixRecoveryPlansEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
