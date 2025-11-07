// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixRecoveryPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#id DataNutanixRecoveryPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#recovery_plan_id DataNutanixRecoveryPlan#recovery_plan_id}
  */
  readonly recoveryPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#recovery_plan_name DataNutanixRecoveryPlan#recovery_plan_name}
  */
  readonly recoveryPlanName?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#categories DataNutanixRecoveryPlan#categories}
  */
  readonly categories?: DataNutanixRecoveryPlanCategories[] | cdktf.IResolvable;
}
export interface DataNutanixRecoveryPlanOwnerReference {
}

export function dataNutanixRecoveryPlanOwnerReferenceToTerraform(struct?: DataNutanixRecoveryPlanOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanOwnerReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanOwnerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanOwnerReference | undefined) {
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

export class DataNutanixRecoveryPlanOwnerReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanOwnerReferenceOutputReference {
    return new DataNutanixRecoveryPlanOwnerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined) {
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

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined) {
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

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined) {
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

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_floating_ip_config - computed: true, optional: false, required: false
  private _recoveryFloatingIpConfig = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigList(this, "recovery_floating_ip_config", false);
  public get recoveryFloatingIpConfig() {
    return this._recoveryFloatingIpConfig;
  }

  // test_floating_ip_config - computed: true, optional: false, required: false
  private _testFloatingIpConfig = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigList(this, "test_floating_ip_config", false);
  public get testFloatingIpConfig() {
    return this._testFloatingIpConfig;
  }

  // vm_nic_information - computed: true, optional: false, required: false
  private _vmNicInformation = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationList(this, "vm_nic_information", false);
  public get vmNicInformation() {
    return this._vmNicInformation;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStruct | undefined) {
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
  private _vmIpAssignmentList = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructList(this, "vm_ip_assignment_list", false);
  public get vmIpAssignmentList() {
    return this._vmIpAssignmentList;
  }
}

export class DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_config_list - computed: true, optional: false, required: false
  private _ipConfigList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined) {
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
  private _subnetList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }

  // use_vpc_reference - computed: true, optional: false, required: false
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }

  // virtual_network_reference - computed: true, optional: false, required: false
  private _virtualNetworkReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceList(this, "virtual_network_reference", false);
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }

  // vpc_reference - computed: true, optional: false, required: false
  private _vpcReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceList(this, "vpc_reference", false);
  public get vpcReference() {
    return this._vpcReference;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_config_list - computed: true, optional: false, required: false
  private _ipConfigList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined) {
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

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined) {
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
  private _subnetList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }

  // use_vpc_reference - computed: true, optional: false, required: false
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }

  // virtual_network_reference - computed: true, optional: false, required: false
  private _virtualNetworkReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceList(this, "virtual_network_reference", false);
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }

  // vpc_reference - computed: true, optional: false, required: false
  private _vpcReference = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceList(this, "vpc_reference", false);
  public get vpcReference() {
    return this._vpcReference;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | undefined) {
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
  private _clusterReferenceList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList(this, "cluster_reference_list", false);
  public get clusterReferenceList() {
    return this._clusterReferenceList;
  }

  // recovery_ip_assignment_list - computed: true, optional: false, required: false
  private _recoveryIpAssignmentList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList(this, "recovery_ip_assignment_list", false);
  public get recoveryIpAssignmentList() {
    return this._recoveryIpAssignmentList;
  }

  // recovery_network - computed: true, optional: false, required: false
  private _recoveryNetwork = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkList(this, "recovery_network", false);
  public get recoveryNetwork() {
    return this._recoveryNetwork;
  }

  // test_ip_assignment_list - computed: true, optional: false, required: false
  private _testIpAssignmentList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList(this, "test_ip_assignment_list", false);
  public get testIpAssignmentList() {
    return this._testIpAssignmentList;
  }

  // test_network - computed: true, optional: false, required: false
  private _testNetwork = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkList(this, "test_network", false);
  public get testNetwork() {
    return this._testNetwork;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParametersNetworkMappingListStruct {
}

export function dataNutanixRecoveryPlanParametersNetworkMappingListStructToTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersNetworkMappingListStructToHclTerraform(struct?: DataNutanixRecoveryPlanParametersNetworkMappingListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParametersNetworkMappingListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParametersNetworkMappingListStruct | undefined) {
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
  private _availabilityZoneNetworkMappingList = new DataNutanixRecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList(this, "availability_zone_network_mapping_list", false);
  public get availabilityZoneNetworkMappingList() {
    return this._availabilityZoneNetworkMappingList;
  }
}

export class DataNutanixRecoveryPlanParametersNetworkMappingListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersNetworkMappingListStructOutputReference {
    return new DataNutanixRecoveryPlanParametersNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanParameters {
}

export function dataNutanixRecoveryPlanParametersToTerraform(struct?: DataNutanixRecoveryPlanParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanParametersToHclTerraform(struct?: DataNutanixRecoveryPlanParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip_assignment_list - computed: true, optional: false, required: false
  private _floatingIpAssignmentList = new DataNutanixRecoveryPlanParametersFloatingIpAssignmentListStructList(this, "floating_ip_assignment_list", false);
  public get floatingIpAssignmentList() {
    return this._floatingIpAssignmentList;
  }

  // network_mapping_list - computed: true, optional: false, required: false
  private _networkMappingList = new DataNutanixRecoveryPlanParametersNetworkMappingListStructList(this, "network_mapping_list", false);
  public get networkMappingList() {
    return this._networkMappingList;
  }
}

export class DataNutanixRecoveryPlanParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanParametersOutputReference {
    return new DataNutanixRecoveryPlanParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanProjectReference {
}

export function dataNutanixRecoveryPlanProjectReferenceToTerraform(struct?: DataNutanixRecoveryPlanProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanProjectReferenceToHclTerraform(struct?: DataNutanixRecoveryPlanProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanProjectReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanProjectReference | undefined) {
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

export class DataNutanixRecoveryPlanProjectReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanProjectReferenceOutputReference {
    return new DataNutanixRecoveryPlanProjectReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories {
}

export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | undefined) {
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

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference {
    return new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct {
}

export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | undefined) {
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

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference {
    return new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct {
}

export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | undefined) {
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
  private _categories = new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }

  // script_list - computed: true, optional: false, required: false
  private _scriptList = new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList(this, "script_list", false);
  public get scriptList() {
    return this._scriptList;
  }
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference {
    return new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStageWorkRecoverEntities {
}

export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesToTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStageWorkRecoverEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStageWorkRecoverEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_info_list - computed: true, optional: false, required: false
  private _entityInfoList = new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructList(this, "entity_info_list", false);
  public get entityInfoList() {
    return this._entityInfoList;
  }
}

export class DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesOutputReference {
    return new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStageWork {
}

export function dataNutanixRecoveryPlanStageListStageWorkToTerraform(struct?: DataNutanixRecoveryPlanStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStageWorkToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStageWorkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStageWork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStageWork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recover_entities - computed: true, optional: false, required: false
  private _recoverEntities = new DataNutanixRecoveryPlanStageListStageWorkRecoverEntitiesList(this, "recover_entities", false);
  public get recoverEntities() {
    return this._recoverEntities;
  }
}

export class DataNutanixRecoveryPlanStageListStageWorkList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStageWorkOutputReference {
    return new DataNutanixRecoveryPlanStageListStageWorkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanStageListStruct {
}

export function dataNutanixRecoveryPlanStageListStructToTerraform(struct?: DataNutanixRecoveryPlanStageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPlanStageListStructToHclTerraform(struct?: DataNutanixRecoveryPlanStageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPlanStageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanStageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPlanStageListStruct | undefined) {
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
  private _stageWork = new DataNutanixRecoveryPlanStageListStageWorkList(this, "stage_work", false);
  public get stageWork() {
    return this._stageWork;
  }
}

export class DataNutanixRecoveryPlanStageListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPlanStageListStructOutputReference {
    return new DataNutanixRecoveryPlanStageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPlanCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#name DataNutanixRecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#value DataNutanixRecoveryPlan#value}
  */
  readonly value?: string;
}

export function dataNutanixRecoveryPlanCategoriesToTerraform(struct?: DataNutanixRecoveryPlanCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixRecoveryPlanCategoriesToHclTerraform(struct?: DataNutanixRecoveryPlanCategories | cdktf.IResolvable): any {
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

export class DataNutanixRecoveryPlanCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPlanCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNutanixRecoveryPlanCategories | cdktf.IResolvable | undefined) {
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

export class DataNutanixRecoveryPlanCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixRecoveryPlanCategories[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixRecoveryPlanCategoriesOutputReference {
    return new DataNutanixRecoveryPlanCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan nutanix_recovery_plan}
*/
export class DataNutanixRecoveryPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixRecoveryPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixRecoveryPlan to import
  * @param importFromId The id of the existing DataNutanixRecoveryPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixRecoveryPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/recovery_plan nutanix_recovery_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixRecoveryPlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixRecoveryPlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_plan',
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
    this._id = config.id;
    this._recoveryPlanId = config.recoveryPlanId;
    this._recoveryPlanName = config.recoveryPlanName;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
  private _ownerReference = new DataNutanixRecoveryPlanOwnerReferenceList(this, "owner_reference", false);
  public get ownerReference() {
    return this._ownerReference;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataNutanixRecoveryPlanParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new DataNutanixRecoveryPlanProjectReferenceList(this, "project_reference", false);
  public get projectReference() {
    return this._projectReference;
  }

  // recovery_plan_id - computed: false, optional: true, required: false
  private _recoveryPlanId?: string; 
  public get recoveryPlanId() {
    return this.getStringAttribute('recovery_plan_id');
  }
  public set recoveryPlanId(value: string) {
    this._recoveryPlanId = value;
  }
  public resetRecoveryPlanId() {
    this._recoveryPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPlanIdInput() {
    return this._recoveryPlanId;
  }

  // recovery_plan_name - computed: false, optional: true, required: false
  private _recoveryPlanName?: string; 
  public get recoveryPlanName() {
    return this.getStringAttribute('recovery_plan_name');
  }
  public set recoveryPlanName(value: string) {
    this._recoveryPlanName = value;
  }
  public resetRecoveryPlanName() {
    this._recoveryPlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPlanNameInput() {
    return this._recoveryPlanName;
  }

  // stage_list - computed: true, optional: false, required: false
  private _stageList = new DataNutanixRecoveryPlanStageListStructList(this, "stage_list", false);
  public get stageList() {
    return this._stageList;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixRecoveryPlanCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixRecoveryPlanCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      recovery_plan_id: cdktf.stringToTerraform(this._recoveryPlanId),
      recovery_plan_name: cdktf.stringToTerraform(this._recoveryPlanName),
      categories: cdktf.listMapper(dataNutanixRecoveryPlanCategoriesToTerraform, true)(this._categories.internalValue),
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
      recovery_plan_id: {
        value: cdktf.stringToHclTerraform(this._recoveryPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_plan_name: {
        value: cdktf.stringToHclTerraform(this._recoveryPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(dataNutanixRecoveryPlanCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixRecoveryPlanCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
