// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecoveryPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#description RecoveryPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#id RecoveryPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#categories RecoveryPlan#categories}
  */
  readonly categories?: RecoveryPlanCategories[] | cdktf.IResolvable;
  /**
  * owner_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#owner_reference RecoveryPlan#owner_reference}
  */
  readonly ownerReference?: RecoveryPlanOwnerReference;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#parameters RecoveryPlan#parameters}
  */
  readonly parameters: RecoveryPlanParameters;
  /**
  * project_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#project_reference RecoveryPlan#project_reference}
  */
  readonly projectReference?: RecoveryPlanProjectReference;
  /**
  * stage_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#stage_list RecoveryPlan#stage_list}
  */
  readonly stageList: RecoveryPlanStageListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#timeouts RecoveryPlan#timeouts}
  */
  readonly timeouts?: RecoveryPlanTimeouts;
}
export interface RecoveryPlanCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#value RecoveryPlan#value}
  */
  readonly value?: string;
}

export function recoveryPlanCategoriesToTerraform(struct?: RecoveryPlanCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function recoveryPlanCategoriesToHclTerraform(struct?: RecoveryPlanCategories | cdktf.IResolvable): any {
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

export class RecoveryPlanCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecoveryPlanCategories | cdktf.IResolvable | undefined) {
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

export class RecoveryPlanCategoriesList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanCategories[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanCategoriesOutputReference {
    return new RecoveryPlanCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanOwnerReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanOwnerReferenceToTerraform(struct?: RecoveryPlanOwnerReferenceOutputReference | RecoveryPlanOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanOwnerReferenceToHclTerraform(struct?: RecoveryPlanOwnerReferenceOutputReference | RecoveryPlanOwnerReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanOwnerReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanOwnerReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // uuid - computed: false, optional: true, required: false
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
export interface RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip RecoveryPlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#should_allocate_dynamically RecoveryPlan#should_allocate_dynamically}
  */
  readonly shouldAllocateDynamically?: boolean | cdktf.IResolvable;
}

export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    should_allocate_dynamically: cdktf.booleanToTerraform(struct!.shouldAllocateDynamically),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_allocate_dynamically: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllocateDynamically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._shouldAllocateDynamically !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllocateDynamically = this._shouldAllocateDynamically;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._shouldAllocateDynamically = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._shouldAllocateDynamically = value.shouldAllocateDynamically;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // should_allocate_dynamically - computed: true, optional: true, required: false
  private _shouldAllocateDynamically?: boolean | cdktf.IResolvable; 
  public get shouldAllocateDynamically() {
    return this.getBooleanAttribute('should_allocate_dynamically');
  }
  public set shouldAllocateDynamically(value: boolean | cdktf.IResolvable) {
    this._shouldAllocateDynamically = value;
  }
  public resetShouldAllocateDynamically() {
    this._shouldAllocateDynamically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllocateDynamicallyInput() {
    return this._shouldAllocateDynamically;
  }
}
export interface RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip RecoveryPlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#should_allocate_dynamically RecoveryPlan#should_allocate_dynamically}
  */
  readonly shouldAllocateDynamically?: boolean | cdktf.IResolvable;
}

export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    should_allocate_dynamically: cdktf.booleanToTerraform(struct!.shouldAllocateDynamically),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_allocate_dynamically: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllocateDynamically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._shouldAllocateDynamically !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllocateDynamically = this._shouldAllocateDynamically;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._shouldAllocateDynamically = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._shouldAllocateDynamically = value.shouldAllocateDynamically;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // should_allocate_dynamically - computed: true, optional: true, required: false
  private _shouldAllocateDynamically?: boolean | cdktf.IResolvable; 
  public get shouldAllocateDynamically() {
    return this.getBooleanAttribute('should_allocate_dynamically');
  }
  public set shouldAllocateDynamically(value: boolean | cdktf.IResolvable) {
    this._shouldAllocateDynamically = value;
  }
  public resetShouldAllocateDynamically() {
    this._shouldAllocateDynamically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllocateDynamicallyInput() {
    return this._shouldAllocateDynamically;
  }
}
export interface RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip RecoveryPlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid: string;
}

export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._uuid = value.uuid;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid: string;
}

export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct {
  /**
  * recovery_floating_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#recovery_floating_ip_config RecoveryPlan#recovery_floating_ip_config}
  */
  readonly recoveryFloatingIpConfig?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig;
  /**
  * test_floating_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#test_floating_ip_config RecoveryPlan#test_floating_ip_config}
  */
  readonly testFloatingIpConfig?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig;
  /**
  * vm_nic_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vm_nic_information RecoveryPlan#vm_nic_information}
  */
  readonly vmNicInformation: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vm_reference RecoveryPlan#vm_reference}
  */
  readonly vmReference: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference;
}

export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_floating_ip_config: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToTerraform(struct!.recoveryFloatingIpConfig),
    test_floating_ip_config: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToTerraform(struct!.testFloatingIpConfig),
    vm_nic_information: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToTerraform(struct!.vmNicInformation),
    vm_reference: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToTerraform(struct!.vmReference),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_floating_ip_config: {
      value: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigToHclTerraform(struct!.recoveryFloatingIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigList",
    },
    test_floating_ip_config: {
      value: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigToHclTerraform(struct!.testFloatingIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigList",
    },
    vm_nic_information: {
      value: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationToHclTerraform(struct!.vmNicInformation),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationList",
    },
    vm_reference: {
      value: recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceToHclTerraform(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryFloatingIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryFloatingIpConfig = this._recoveryFloatingIpConfig?.internalValue;
    }
    if (this._testFloatingIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testFloatingIpConfig = this._testFloatingIpConfig?.internalValue;
    }
    if (this._vmNicInformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmNicInformation = this._vmNicInformation?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recoveryFloatingIpConfig.internalValue = undefined;
      this._testFloatingIpConfig.internalValue = undefined;
      this._vmNicInformation.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recoveryFloatingIpConfig.internalValue = value.recoveryFloatingIpConfig;
      this._testFloatingIpConfig.internalValue = value.testFloatingIpConfig;
      this._vmNicInformation.internalValue = value.vmNicInformation;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // recovery_floating_ip_config - computed: false, optional: true, required: false
  private _recoveryFloatingIpConfig = new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfigOutputReference(this, "recovery_floating_ip_config");
  public get recoveryFloatingIpConfig() {
    return this._recoveryFloatingIpConfig;
  }
  public putRecoveryFloatingIpConfig(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListRecoveryFloatingIpConfig) {
    this._recoveryFloatingIpConfig.internalValue = value;
  }
  public resetRecoveryFloatingIpConfig() {
    this._recoveryFloatingIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFloatingIpConfigInput() {
    return this._recoveryFloatingIpConfig.internalValue;
  }

  // test_floating_ip_config - computed: false, optional: true, required: false
  private _testFloatingIpConfig = new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfigOutputReference(this, "test_floating_ip_config");
  public get testFloatingIpConfig() {
    return this._testFloatingIpConfig;
  }
  public putTestFloatingIpConfig(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListTestFloatingIpConfig) {
    this._testFloatingIpConfig.internalValue = value;
  }
  public resetTestFloatingIpConfig() {
    this._testFloatingIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFloatingIpConfigInput() {
    return this._testFloatingIpConfig.internalValue;
  }

  // vm_nic_information - computed: false, optional: false, required: true
  private _vmNicInformation = new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformationOutputReference(this, "vm_nic_information");
  public get vmNicInformation() {
    return this._vmNicInformation;
  }
  public putVmNicInformation(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmNicInformation) {
    this._vmNicInformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNicInformationInput() {
    return this._vmNicInformation.internalValue;
  }

  // vm_reference - computed: false, optional: false, required: true
  private _vmReference = new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReferenceOutputReference(this, "vm_reference");
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListVmReference) {
    this._vmReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference {
    return new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersFloatingIpAssignmentListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#availability_zone_url RecoveryPlan#availability_zone_url}
  */
  readonly availabilityZoneUrl: string;
  /**
  * vm_ip_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vm_ip_assignment_list RecoveryPlan#vm_ip_assignment_list}
  */
  readonly vmIpAssignmentList: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct[] | cdktf.IResolvable;
}

export function recoveryPlanParametersFloatingIpAssignmentListStructToTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_url: cdktf.stringToTerraform(struct!.availabilityZoneUrl),
    vm_ip_assignment_list: cdktf.listMapper(recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToTerraform, true)(struct!.vmIpAssignmentList),
  }
}


export function recoveryPlanParametersFloatingIpAssignmentListStructToHclTerraform(struct?: RecoveryPlanParametersFloatingIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_url: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ip_assignment_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructToHclTerraform, true)(struct!.vmIpAssignmentList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersFloatingIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersFloatingIpAssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneUrl = this._availabilityZoneUrl;
    }
    if (this._vmIpAssignmentList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIpAssignmentList = this._vmIpAssignmentList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersFloatingIpAssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = undefined;
      this._vmIpAssignmentList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = value.availabilityZoneUrl;
      this._vmIpAssignmentList.internalValue = value.vmIpAssignmentList;
    }
  }

  // availability_zone_url - computed: false, optional: false, required: true
  private _availabilityZoneUrl?: string; 
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }
  public set availabilityZoneUrl(value: string) {
    this._availabilityZoneUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneUrlInput() {
    return this._availabilityZoneUrl;
  }

  // vm_ip_assignment_list - computed: false, optional: false, required: true
  private _vmIpAssignmentList = new RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStructList(this, "vm_ip_assignment_list", false);
  public get vmIpAssignmentList() {
    return this._vmIpAssignmentList;
  }
  public putVmIpAssignmentList(value: RecoveryPlanParametersFloatingIpAssignmentListVmIpAssignmentListStruct[] | cdktf.IResolvable) {
    this._vmIpAssignmentList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpAssignmentListInput() {
    return this._vmIpAssignmentList.internalValue;
  }
}

export class RecoveryPlanParametersFloatingIpAssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersFloatingIpAssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersFloatingIpAssignmentListStructOutputReference {
    return new RecoveryPlanParametersFloatingIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip_address RecoveryPlan#ip_address}
  */
  readonly ipAddress: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct {
  /**
  * ip_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip_config_list RecoveryPlan#ip_config_list}
  */
  readonly ipConfigList: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vm_reference RecoveryPlan#vm_reference}
  */
  readonly vmReference: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_config_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToTerraform, true)(struct!.ipConfigList),
    vm_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToTerraform(struct!.vmReference),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_config_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructToHclTerraform, true)(struct!.ipConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList",
    },
    vm_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceToHclTerraform(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfigList = this._ipConfigList?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipConfigList.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipConfigList.internalValue = value.ipConfigList;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // ip_config_list - computed: false, optional: false, required: true
  private _ipConfigList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }
  public putIpConfigList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable) {
    this._ipConfigList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigListInput() {
    return this._ipConfigList.internalValue;
  }

  // vm_reference - computed: false, optional: false, required: true
  private _vmReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReferenceOutputReference(this, "vm_reference");
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListVmReference) {
    this._vmReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#external_connectivity_state RecoveryPlan#external_connectivity_state}
  */
  readonly externalConnectivityState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#gateway_ip RecoveryPlan#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#prefix_length RecoveryPlan#prefix_length}
  */
  readonly prefixLength: number;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_connectivity_state: cdktf.stringToTerraform(struct!.externalConnectivityState),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_connectivity_state: {
      value: cdktf.stringToHclTerraform(struct!.externalConnectivityState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalConnectivityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectivityState = this._externalConnectivityState;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalConnectivityState = undefined;
      this._gatewayIp = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalConnectivityState = value.externalConnectivityState;
      this._gatewayIp = value.gatewayIp;
      this._prefixLength = value.prefixLength;
    }
  }

  // external_connectivity_state - computed: true, optional: true, required: false
  private _externalConnectivityState?: string; 
  public get externalConnectivityState() {
    return this.getStringAttribute('external_connectivity_state');
  }
  public set externalConnectivityState(value: string) {
    this._externalConnectivityState = value;
  }
  public resetExternalConnectivityState() {
    this._externalConnectivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectivityStateInput() {
    return this._externalConnectivityState;
  }

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#use_vpc_reference RecoveryPlan#use_vpc_reference}
  */
  readonly useVpcReference?: boolean | cdktf.IResolvable;
  /**
  * subnet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#subnet_list RecoveryPlan#subnet_list}
  */
  readonly subnetList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct[] | cdktf.IResolvable;
  /**
  * virtual_network_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#virtual_network_reference RecoveryPlan#virtual_network_reference}
  */
  readonly virtualNetworkReference?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference;
  /**
  * vpc_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vpc_reference RecoveryPlan#vpc_reference}
  */
  readonly vpcReference?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_vpc_reference: cdktf.booleanToTerraform(struct!.useVpcReference),
    subnet_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToTerraform, true)(struct!.subnetList),
    virtual_network_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToTerraform(struct!.virtualNetworkReference),
    vpc_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToTerraform(struct!.vpcReference),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork): any {
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
    use_vpc_reference: {
      value: cdktf.booleanToHclTerraform(struct!.useVpcReference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructToHclTerraform, true)(struct!.subnetList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList",
    },
    virtual_network_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceToHclTerraform(struct!.virtualNetworkReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceList",
    },
    vpc_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceToHclTerraform(struct!.vpcReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useVpcReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVpcReference = this._useVpcReference;
    }
    if (this._subnetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetList = this._subnetList?.internalValue;
    }
    if (this._virtualNetworkReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkReference = this._virtualNetworkReference?.internalValue;
    }
    if (this._vpcReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcReference = this._vpcReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._useVpcReference = undefined;
      this._subnetList.internalValue = undefined;
      this._virtualNetworkReference.internalValue = undefined;
      this._vpcReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._useVpcReference = value.useVpcReference;
      this._subnetList.internalValue = value.subnetList;
      this._virtualNetworkReference.internalValue = value.virtualNetworkReference;
      this._vpcReference.internalValue = value.vpcReference;
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

  // use_vpc_reference - computed: true, optional: true, required: false
  private _useVpcReference?: boolean | cdktf.IResolvable; 
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }
  public set useVpcReference(value: boolean | cdktf.IResolvable) {
    this._useVpcReference = value;
  }
  public resetUseVpcReference() {
    this._useVpcReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVpcReferenceInput() {
    return this._useVpcReference;
  }

  // subnet_list - computed: false, optional: true, required: false
  private _subnetList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }
  public putSubnetList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkSubnetListStruct[] | cdktf.IResolvable) {
    this._subnetList.internalValue = value;
  }
  public resetSubnetList() {
    this._subnetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetListInput() {
    return this._subnetList.internalValue;
  }

  // virtual_network_reference - computed: false, optional: true, required: false
  private _virtualNetworkReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReferenceOutputReference(this, "virtual_network_reference");
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }
  public putVirtualNetworkReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVirtualNetworkReference) {
    this._virtualNetworkReference.internalValue = value;
  }
  public resetVirtualNetworkReference() {
    this._virtualNetworkReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkReferenceInput() {
    return this._virtualNetworkReference.internalValue;
  }

  // vpc_reference - computed: false, optional: true, required: false
  private _vpcReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReferenceOutputReference(this, "vpc_reference");
  public get vpcReference() {
    return this._vpcReference;
  }
  public putVpcReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkVpcReference) {
    this._vpcReference.internalValue = value;
  }
  public resetVpcReference() {
    this._vpcReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceInput() {
    return this._vpcReference.internalValue;
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip_address RecoveryPlan#ip_address}
  */
  readonly ipAddress: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct {
  /**
  * ip_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#ip_config_list RecoveryPlan#ip_config_list}
  */
  readonly ipConfigList: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vm_reference RecoveryPlan#vm_reference}
  */
  readonly vmReference: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_config_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToTerraform, true)(struct!.ipConfigList),
    vm_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToTerraform(struct!.vmReference),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_config_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructToHclTerraform, true)(struct!.ipConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList",
    },
    vm_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceToHclTerraform(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfigList = this._ipConfigList?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipConfigList.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipConfigList.internalValue = value.ipConfigList;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // ip_config_list - computed: false, optional: false, required: true
  private _ipConfigList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStructList(this, "ip_config_list", false);
  public get ipConfigList() {
    return this._ipConfigList;
  }
  public putIpConfigList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListIpConfigListStruct[] | cdktf.IResolvable) {
    this._ipConfigList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigListInput() {
    return this._ipConfigList.internalValue;
  }

  // vm_reference - computed: false, optional: false, required: true
  private _vmReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReferenceOutputReference(this, "vm_reference");
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListVmReference) {
    this._vmReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#external_connectivity_state RecoveryPlan#external_connectivity_state}
  */
  readonly externalConnectivityState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#gateway_ip RecoveryPlan#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#prefix_length RecoveryPlan#prefix_length}
  */
  readonly prefixLength: number;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_connectivity_state: cdktf.stringToTerraform(struct!.externalConnectivityState),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_connectivity_state: {
      value: cdktf.stringToHclTerraform(struct!.externalConnectivityState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalConnectivityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectivityState = this._externalConnectivityState;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalConnectivityState = undefined;
      this._gatewayIp = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalConnectivityState = value.externalConnectivityState;
      this._gatewayIp = value.gatewayIp;
      this._prefixLength = value.prefixLength;
    }
  }

  // external_connectivity_state - computed: true, optional: true, required: false
  private _externalConnectivityState?: string; 
  public get externalConnectivityState() {
    return this.getStringAttribute('external_connectivity_state');
  }
  public set externalConnectivityState(value: string) {
    this._externalConnectivityState = value;
  }
  public resetExternalConnectivityState() {
    this._externalConnectivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectivityStateInput() {
    return this._externalConnectivityState;
  }

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
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
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#use_vpc_reference RecoveryPlan#use_vpc_reference}
  */
  readonly useVpcReference?: boolean | cdktf.IResolvable;
  /**
  * subnet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#subnet_list RecoveryPlan#subnet_list}
  */
  readonly subnetList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct[] | cdktf.IResolvable;
  /**
  * virtual_network_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#virtual_network_reference RecoveryPlan#virtual_network_reference}
  */
  readonly virtualNetworkReference?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference;
  /**
  * vpc_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#vpc_reference RecoveryPlan#vpc_reference}
  */
  readonly vpcReference?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_vpc_reference: cdktf.booleanToTerraform(struct!.useVpcReference),
    subnet_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToTerraform, true)(struct!.subnetList),
    virtual_network_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToTerraform(struct!.virtualNetworkReference),
    vpc_reference: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToTerraform(struct!.vpcReference),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference | RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork): any {
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
    use_vpc_reference: {
      value: cdktf.booleanToHclTerraform(struct!.useVpcReference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructToHclTerraform, true)(struct!.subnetList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList",
    },
    virtual_network_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceToHclTerraform(struct!.virtualNetworkReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceList",
    },
    vpc_reference: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceToHclTerraform(struct!.vpcReference),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useVpcReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVpcReference = this._useVpcReference;
    }
    if (this._subnetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetList = this._subnetList?.internalValue;
    }
    if (this._virtualNetworkReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkReference = this._virtualNetworkReference?.internalValue;
    }
    if (this._vpcReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcReference = this._vpcReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._useVpcReference = undefined;
      this._subnetList.internalValue = undefined;
      this._virtualNetworkReference.internalValue = undefined;
      this._vpcReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._useVpcReference = value.useVpcReference;
      this._subnetList.internalValue = value.subnetList;
      this._virtualNetworkReference.internalValue = value.virtualNetworkReference;
      this._vpcReference.internalValue = value.vpcReference;
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

  // use_vpc_reference - computed: true, optional: true, required: false
  private _useVpcReference?: boolean | cdktf.IResolvable; 
  public get useVpcReference() {
    return this.getBooleanAttribute('use_vpc_reference');
  }
  public set useVpcReference(value: boolean | cdktf.IResolvable) {
    this._useVpcReference = value;
  }
  public resetUseVpcReference() {
    this._useVpcReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVpcReferenceInput() {
    return this._useVpcReference;
  }

  // subnet_list - computed: false, optional: true, required: false
  private _subnetList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStructList(this, "subnet_list", false);
  public get subnetList() {
    return this._subnetList;
  }
  public putSubnetList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkSubnetListStruct[] | cdktf.IResolvable) {
    this._subnetList.internalValue = value;
  }
  public resetSubnetList() {
    this._subnetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetListInput() {
    return this._subnetList.internalValue;
  }

  // virtual_network_reference - computed: false, optional: true, required: false
  private _virtualNetworkReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReferenceOutputReference(this, "virtual_network_reference");
  public get virtualNetworkReference() {
    return this._virtualNetworkReference;
  }
  public putVirtualNetworkReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVirtualNetworkReference) {
    this._virtualNetworkReference.internalValue = value;
  }
  public resetVirtualNetworkReference() {
    this._virtualNetworkReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkReferenceInput() {
    return this._virtualNetworkReference.internalValue;
  }

  // vpc_reference - computed: false, optional: true, required: false
  private _vpcReference = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReferenceOutputReference(this, "vpc_reference");
  public get vpcReference() {
    return this._vpcReference;
  }
  public putVpcReference(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkVpcReference) {
    this._vpcReference.internalValue = value;
  }
  public resetVpcReference() {
    this._vpcReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceInput() {
    return this._vpcReference.internalValue;
  }
}
export interface RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#availability_zone_url RecoveryPlan#availability_zone_url}
  */
  readonly availabilityZoneUrl?: string;
  /**
  * cluster_reference_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#cluster_reference_list RecoveryPlan#cluster_reference_list}
  */
  readonly clusterReferenceList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct[] | cdktf.IResolvable;
  /**
  * recovery_ip_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#recovery_ip_assignment_list RecoveryPlan#recovery_ip_assignment_list}
  */
  readonly recoveryIpAssignmentList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct[] | cdktf.IResolvable;
  /**
  * recovery_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#recovery_network RecoveryPlan#recovery_network}
  */
  readonly recoveryNetwork?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork;
  /**
  * test_ip_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#test_ip_assignment_list RecoveryPlan#test_ip_assignment_list}
  */
  readonly testIpAssignmentList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct[] | cdktf.IResolvable;
  /**
  * test_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#test_network RecoveryPlan#test_network}
  */
  readonly testNetwork?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork;
}

export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_url: cdktf.stringToTerraform(struct!.availabilityZoneUrl),
    cluster_reference_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToTerraform, true)(struct!.clusterReferenceList),
    recovery_ip_assignment_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToTerraform, true)(struct!.recoveryIpAssignmentList),
    recovery_network: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToTerraform(struct!.recoveryNetwork),
    test_ip_assignment_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToTerraform, true)(struct!.testIpAssignmentList),
    test_network: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToTerraform(struct!.testNetwork),
  }
}


export function recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_url: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_reference_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructToHclTerraform, true)(struct!.clusterReferenceList),
      isBlock: true,
      type: "set",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList",
    },
    recovery_ip_assignment_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructToHclTerraform, true)(struct!.recoveryIpAssignmentList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList",
    },
    recovery_network: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkToHclTerraform(struct!.recoveryNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkList",
    },
    test_ip_assignment_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructToHclTerraform, true)(struct!.testIpAssignmentList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList",
    },
    test_network: {
      value: recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkToHclTerraform(struct!.testNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneUrl = this._availabilityZoneUrl;
    }
    if (this._clusterReferenceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterReferenceList = this._clusterReferenceList?.internalValue;
    }
    if (this._recoveryIpAssignmentList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryIpAssignmentList = this._recoveryIpAssignmentList?.internalValue;
    }
    if (this._recoveryNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryNetwork = this._recoveryNetwork?.internalValue;
    }
    if (this._testIpAssignmentList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testIpAssignmentList = this._testIpAssignmentList?.internalValue;
    }
    if (this._testNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testNetwork = this._testNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = undefined;
      this._clusterReferenceList.internalValue = undefined;
      this._recoveryIpAssignmentList.internalValue = undefined;
      this._recoveryNetwork.internalValue = undefined;
      this._testIpAssignmentList.internalValue = undefined;
      this._testNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = value.availabilityZoneUrl;
      this._clusterReferenceList.internalValue = value.clusterReferenceList;
      this._recoveryIpAssignmentList.internalValue = value.recoveryIpAssignmentList;
      this._recoveryNetwork.internalValue = value.recoveryNetwork;
      this._testIpAssignmentList.internalValue = value.testIpAssignmentList;
      this._testNetwork.internalValue = value.testNetwork;
    }
  }

  // availability_zone_url - computed: true, optional: true, required: false
  private _availabilityZoneUrl?: string; 
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }
  public set availabilityZoneUrl(value: string) {
    this._availabilityZoneUrl = value;
  }
  public resetAvailabilityZoneUrl() {
    this._availabilityZoneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneUrlInput() {
    return this._availabilityZoneUrl;
  }

  // cluster_reference_list - computed: false, optional: true, required: false
  private _clusterReferenceList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStructList(this, "cluster_reference_list", true);
  public get clusterReferenceList() {
    return this._clusterReferenceList;
  }
  public putClusterReferenceList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListClusterReferenceListStruct[] | cdktf.IResolvable) {
    this._clusterReferenceList.internalValue = value;
  }
  public resetClusterReferenceList() {
    this._clusterReferenceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterReferenceListInput() {
    return this._clusterReferenceList.internalValue;
  }

  // recovery_ip_assignment_list - computed: false, optional: true, required: false
  private _recoveryIpAssignmentList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStructList(this, "recovery_ip_assignment_list", false);
  public get recoveryIpAssignmentList() {
    return this._recoveryIpAssignmentList;
  }
  public putRecoveryIpAssignmentList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryIpAssignmentListStruct[] | cdktf.IResolvable) {
    this._recoveryIpAssignmentList.internalValue = value;
  }
  public resetRecoveryIpAssignmentList() {
    this._recoveryIpAssignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryIpAssignmentListInput() {
    return this._recoveryIpAssignmentList.internalValue;
  }

  // recovery_network - computed: false, optional: true, required: false
  private _recoveryNetwork = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetworkOutputReference(this, "recovery_network");
  public get recoveryNetwork() {
    return this._recoveryNetwork;
  }
  public putRecoveryNetwork(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListRecoveryNetwork) {
    this._recoveryNetwork.internalValue = value;
  }
  public resetRecoveryNetwork() {
    this._recoveryNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryNetworkInput() {
    return this._recoveryNetwork.internalValue;
  }

  // test_ip_assignment_list - computed: false, optional: true, required: false
  private _testIpAssignmentList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStructList(this, "test_ip_assignment_list", false);
  public get testIpAssignmentList() {
    return this._testIpAssignmentList;
  }
  public putTestIpAssignmentList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestIpAssignmentListStruct[] | cdktf.IResolvable) {
    this._testIpAssignmentList.internalValue = value;
  }
  public resetTestIpAssignmentList() {
    this._testIpAssignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIpAssignmentListInput() {
    return this._testIpAssignmentList.internalValue;
  }

  // test_network - computed: false, optional: true, required: false
  private _testNetwork = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetworkOutputReference(this, "test_network");
  public get testNetwork() {
    return this._testNetwork;
  }
  public putTestNetwork(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListTestNetwork) {
    this._testNetwork.internalValue = value;
  }
  public resetTestNetwork() {
    this._testNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNetworkInput() {
    return this._testNetwork.internalValue;
  }
}

export class RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParametersNetworkMappingListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#are_networks_stretched RecoveryPlan#are_networks_stretched}
  */
  readonly areNetworksStretched?: boolean | cdktf.IResolvable;
  /**
  * availability_zone_network_mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#availability_zone_network_mapping_list RecoveryPlan#availability_zone_network_mapping_list}
  */
  readonly availabilityZoneNetworkMappingList?: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct[] | cdktf.IResolvable;
}

export function recoveryPlanParametersNetworkMappingListStructToTerraform(struct?: RecoveryPlanParametersNetworkMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_networks_stretched: cdktf.booleanToTerraform(struct!.areNetworksStretched),
    availability_zone_network_mapping_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToTerraform, true)(struct!.availabilityZoneNetworkMappingList),
  }
}


export function recoveryPlanParametersNetworkMappingListStructToHclTerraform(struct?: RecoveryPlanParametersNetworkMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_networks_stretched: {
      value: cdktf.booleanToHclTerraform(struct!.areNetworksStretched),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zone_network_mapping_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructToHclTerraform, true)(struct!.availabilityZoneNetworkMappingList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersNetworkMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanParametersNetworkMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areNetworksStretched !== undefined) {
      hasAnyValues = true;
      internalValueResult.areNetworksStretched = this._areNetworksStretched;
    }
    if (this._availabilityZoneNetworkMappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneNetworkMappingList = this._availabilityZoneNetworkMappingList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParametersNetworkMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areNetworksStretched = undefined;
      this._availabilityZoneNetworkMappingList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areNetworksStretched = value.areNetworksStretched;
      this._availabilityZoneNetworkMappingList.internalValue = value.availabilityZoneNetworkMappingList;
    }
  }

  // are_networks_stretched - computed: true, optional: true, required: false
  private _areNetworksStretched?: boolean | cdktf.IResolvable; 
  public get areNetworksStretched() {
    return this.getBooleanAttribute('are_networks_stretched');
  }
  public set areNetworksStretched(value: boolean | cdktf.IResolvable) {
    this._areNetworksStretched = value;
  }
  public resetAreNetworksStretched() {
    this._areNetworksStretched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areNetworksStretchedInput() {
    return this._areNetworksStretched;
  }

  // availability_zone_network_mapping_list - computed: false, optional: true, required: false
  private _availabilityZoneNetworkMappingList = new RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStructList(this, "availability_zone_network_mapping_list", false);
  public get availabilityZoneNetworkMappingList() {
    return this._availabilityZoneNetworkMappingList;
  }
  public putAvailabilityZoneNetworkMappingList(value: RecoveryPlanParametersNetworkMappingListAvailabilityZoneNetworkMappingListStruct[] | cdktf.IResolvable) {
    this._availabilityZoneNetworkMappingList.internalValue = value;
  }
  public resetAvailabilityZoneNetworkMappingList() {
    this._availabilityZoneNetworkMappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNetworkMappingListInput() {
    return this._availabilityZoneNetworkMappingList.internalValue;
  }
}

export class RecoveryPlanParametersNetworkMappingListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanParametersNetworkMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanParametersNetworkMappingListStructOutputReference {
    return new RecoveryPlanParametersNetworkMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanParameters {
  /**
  * floating_ip_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#floating_ip_assignment_list RecoveryPlan#floating_ip_assignment_list}
  */
  readonly floatingIpAssignmentList?: RecoveryPlanParametersFloatingIpAssignmentListStruct[] | cdktf.IResolvable;
  /**
  * network_mapping_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#network_mapping_list RecoveryPlan#network_mapping_list}
  */
  readonly networkMappingList?: RecoveryPlanParametersNetworkMappingListStruct[] | cdktf.IResolvable;
}

export function recoveryPlanParametersToTerraform(struct?: RecoveryPlanParametersOutputReference | RecoveryPlanParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip_assignment_list: cdktf.listMapper(recoveryPlanParametersFloatingIpAssignmentListStructToTerraform, true)(struct!.floatingIpAssignmentList),
    network_mapping_list: cdktf.listMapper(recoveryPlanParametersNetworkMappingListStructToTerraform, true)(struct!.networkMappingList),
  }
}


export function recoveryPlanParametersToHclTerraform(struct?: RecoveryPlanParametersOutputReference | RecoveryPlanParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip_assignment_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersFloatingIpAssignmentListStructToHclTerraform, true)(struct!.floatingIpAssignmentList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersFloatingIpAssignmentListStructList",
    },
    network_mapping_list: {
      value: cdktf.listMapperHcl(recoveryPlanParametersNetworkMappingListStructToHclTerraform, true)(struct!.networkMappingList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanParametersNetworkMappingListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIpAssignmentList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpAssignmentList = this._floatingIpAssignmentList?.internalValue;
    }
    if (this._networkMappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMappingList = this._networkMappingList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatingIpAssignmentList.internalValue = undefined;
      this._networkMappingList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatingIpAssignmentList.internalValue = value.floatingIpAssignmentList;
      this._networkMappingList.internalValue = value.networkMappingList;
    }
  }

  // floating_ip_assignment_list - computed: false, optional: true, required: false
  private _floatingIpAssignmentList = new RecoveryPlanParametersFloatingIpAssignmentListStructList(this, "floating_ip_assignment_list", false);
  public get floatingIpAssignmentList() {
    return this._floatingIpAssignmentList;
  }
  public putFloatingIpAssignmentList(value: RecoveryPlanParametersFloatingIpAssignmentListStruct[] | cdktf.IResolvable) {
    this._floatingIpAssignmentList.internalValue = value;
  }
  public resetFloatingIpAssignmentList() {
    this._floatingIpAssignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpAssignmentListInput() {
    return this._floatingIpAssignmentList.internalValue;
  }

  // network_mapping_list - computed: false, optional: true, required: false
  private _networkMappingList = new RecoveryPlanParametersNetworkMappingListStructList(this, "network_mapping_list", false);
  public get networkMappingList() {
    return this._networkMappingList;
  }
  public putNetworkMappingList(value: RecoveryPlanParametersNetworkMappingListStruct[] | cdktf.IResolvable) {
    this._networkMappingList.internalValue = value;
  }
  public resetNetworkMappingList() {
    this._networkMappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMappingListInput() {
    return this._networkMappingList.internalValue;
  }
}
export interface RecoveryPlanProjectReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#kind RecoveryPlan#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#uuid RecoveryPlan#uuid}
  */
  readonly uuid?: string;
}

export function recoveryPlanProjectReferenceToTerraform(struct?: RecoveryPlanProjectReferenceOutputReference | RecoveryPlanProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function recoveryPlanProjectReferenceToHclTerraform(struct?: RecoveryPlanProjectReferenceOutputReference | RecoveryPlanProjectReference): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RecoveryPlanProjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanProjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // uuid - computed: false, optional: true, required: false
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
export interface RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#name RecoveryPlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#value RecoveryPlan#value}
  */
  readonly value?: string;
}

export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToHclTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | cdktf.IResolvable): any {
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

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
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

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference {
    return new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#enable_script_exec RecoveryPlan#enable_script_exec}
  */
  readonly enableScriptExec: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#timeout RecoveryPlan#timeout}
  */
  readonly timeout?: string;
}

export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_script_exec: cdktf.booleanToTerraform(struct!.enableScriptExec),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToHclTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_script_exec: {
      value: cdktf.booleanToHclTerraform(struct!.enableScriptExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableScriptExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScriptExec = this._enableScriptExec;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableScriptExec = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableScriptExec = value.enableScriptExec;
      this._timeout = value.timeout;
    }
  }

  // enable_script_exec - computed: false, optional: false, required: true
  private _enableScriptExec?: boolean | cdktf.IResolvable; 
  public get enableScriptExec() {
    return this.getBooleanAttribute('enable_script_exec');
  }
  public set enableScriptExec(value: boolean | cdktf.IResolvable) {
    this._enableScriptExec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScriptExecInput() {
    return this._enableScriptExec;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference {
    return new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#any_entity_reference_kind RecoveryPlan#any_entity_reference_kind}
  */
  readonly anyEntityReferenceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#any_entity_reference_name RecoveryPlan#any_entity_reference_name}
  */
  readonly anyEntityReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#any_entity_reference_uuid RecoveryPlan#any_entity_reference_uuid}
  */
  readonly anyEntityReferenceUuid?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#categories RecoveryPlan#categories}
  */
  readonly categories?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories[] | cdktf.IResolvable;
  /**
  * script_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#script_list RecoveryPlan#script_list}
  */
  readonly scriptList?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct[] | cdktf.IResolvable;
}

export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_entity_reference_kind: cdktf.stringToTerraform(struct!.anyEntityReferenceKind),
    any_entity_reference_name: cdktf.stringToTerraform(struct!.anyEntityReferenceName),
    any_entity_reference_uuid: cdktf.stringToTerraform(struct!.anyEntityReferenceUuid),
    categories: cdktf.listMapper(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToTerraform, true)(struct!.categories),
    script_list: cdktf.listMapper(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToTerraform, true)(struct!.scriptList),
  }
}


export function recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToHclTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_entity_reference_kind: {
      value: cdktf.stringToHclTerraform(struct!.anyEntityReferenceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_entity_reference_name: {
      value: cdktf.stringToHclTerraform(struct!.anyEntityReferenceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_entity_reference_uuid: {
      value: cdktf.stringToHclTerraform(struct!.anyEntityReferenceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "set",
      storageClassType: "RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList",
    },
    script_list: {
      value: cdktf.listMapperHcl(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructToHclTerraform, true)(struct!.scriptList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyEntityReferenceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEntityReferenceKind = this._anyEntityReferenceKind;
    }
    if (this._anyEntityReferenceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEntityReferenceName = this._anyEntityReferenceName;
    }
    if (this._anyEntityReferenceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEntityReferenceUuid = this._anyEntityReferenceUuid;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._scriptList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptList = this._scriptList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyEntityReferenceKind = undefined;
      this._anyEntityReferenceName = undefined;
      this._anyEntityReferenceUuid = undefined;
      this._categories.internalValue = undefined;
      this._scriptList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyEntityReferenceKind = value.anyEntityReferenceKind;
      this._anyEntityReferenceName = value.anyEntityReferenceName;
      this._anyEntityReferenceUuid = value.anyEntityReferenceUuid;
      this._categories.internalValue = value.categories;
      this._scriptList.internalValue = value.scriptList;
    }
  }

  // any_entity_reference_kind - computed: false, optional: true, required: false
  private _anyEntityReferenceKind?: string; 
  public get anyEntityReferenceKind() {
    return this.getStringAttribute('any_entity_reference_kind');
  }
  public set anyEntityReferenceKind(value: string) {
    this._anyEntityReferenceKind = value;
  }
  public resetAnyEntityReferenceKind() {
    this._anyEntityReferenceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEntityReferenceKindInput() {
    return this._anyEntityReferenceKind;
  }

  // any_entity_reference_name - computed: false, optional: true, required: false
  private _anyEntityReferenceName?: string; 
  public get anyEntityReferenceName() {
    return this.getStringAttribute('any_entity_reference_name');
  }
  public set anyEntityReferenceName(value: string) {
    this._anyEntityReferenceName = value;
  }
  public resetAnyEntityReferenceName() {
    this._anyEntityReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEntityReferenceNameInput() {
    return this._anyEntityReferenceName;
  }

  // any_entity_reference_uuid - computed: false, optional: true, required: false
  private _anyEntityReferenceUuid?: string; 
  public get anyEntityReferenceUuid() {
    return this.getStringAttribute('any_entity_reference_uuid');
  }
  public set anyEntityReferenceUuid(value: string) {
    this._anyEntityReferenceUuid = value;
  }
  public resetAnyEntityReferenceUuid() {
    this._anyEntityReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEntityReferenceUuidInput() {
    return this._anyEntityReferenceUuid;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // script_list - computed: false, optional: true, required: false
  private _scriptList = new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStructList(this, "script_list", false);
  public get scriptList() {
    return this._scriptList;
  }
  public putScriptList(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListScriptListStruct[] | cdktf.IResolvable) {
    this._scriptList.internalValue = value;
  }
  public resetScriptList() {
    this._scriptList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptListInput() {
    return this._scriptList.internalValue;
  }
}

export class RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference {
    return new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanStageListStageWorkRecoverEntities {
  /**
  * entity_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#entity_info_list RecoveryPlan#entity_info_list}
  */
  readonly entityInfoList?: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct[] | cdktf.IResolvable;
}

export function recoveryPlanStageListStageWorkRecoverEntitiesToTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesOutputReference | RecoveryPlanStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_info_list: cdktf.listMapper(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToTerraform, true)(struct!.entityInfoList),
  }
}


export function recoveryPlanStageListStageWorkRecoverEntitiesToHclTerraform(struct?: RecoveryPlanStageListStageWorkRecoverEntitiesOutputReference | RecoveryPlanStageListStageWorkRecoverEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_info_list: {
      value: cdktf.listMapperHcl(recoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructToHclTerraform, true)(struct!.entityInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanStageListStageWorkRecoverEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanStageListStageWorkRecoverEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityInfoList = this._entityInfoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanStageListStageWorkRecoverEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityInfoList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityInfoList.internalValue = value.entityInfoList;
    }
  }

  // entity_info_list - computed: false, optional: true, required: false
  private _entityInfoList = new RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStructList(this, "entity_info_list", false);
  public get entityInfoList() {
    return this._entityInfoList;
  }
  public putEntityInfoList(value: RecoveryPlanStageListStageWorkRecoverEntitiesEntityInfoListStruct[] | cdktf.IResolvable) {
    this._entityInfoList.internalValue = value;
  }
  public resetEntityInfoList() {
    this._entityInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInfoListInput() {
    return this._entityInfoList.internalValue;
  }
}
export interface RecoveryPlanStageListStageWork {
  /**
  * recover_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#recover_entities RecoveryPlan#recover_entities}
  */
  readonly recoverEntities?: RecoveryPlanStageListStageWorkRecoverEntities;
}

export function recoveryPlanStageListStageWorkToTerraform(struct?: RecoveryPlanStageListStageWorkOutputReference | RecoveryPlanStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recover_entities: recoveryPlanStageListStageWorkRecoverEntitiesToTerraform(struct!.recoverEntities),
  }
}


export function recoveryPlanStageListStageWorkToHclTerraform(struct?: RecoveryPlanStageListStageWorkOutputReference | RecoveryPlanStageListStageWork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recover_entities: {
      value: recoveryPlanStageListStageWorkRecoverEntitiesToHclTerraform(struct!.recoverEntities),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanStageListStageWorkRecoverEntitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanStageListStageWorkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecoveryPlanStageListStageWork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoverEntities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverEntities = this._recoverEntities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanStageListStageWork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoverEntities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoverEntities.internalValue = value.recoverEntities;
    }
  }

  // recover_entities - computed: false, optional: true, required: false
  private _recoverEntities = new RecoveryPlanStageListStageWorkRecoverEntitiesOutputReference(this, "recover_entities");
  public get recoverEntities() {
    return this._recoverEntities;
  }
  public putRecoverEntities(value: RecoveryPlanStageListStageWorkRecoverEntities) {
    this._recoverEntities.internalValue = value;
  }
  public resetRecoverEntities() {
    this._recoverEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverEntitiesInput() {
    return this._recoverEntities.internalValue;
  }
}
export interface RecoveryPlanStageListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#delay_time_secs RecoveryPlan#delay_time_secs}
  */
  readonly delayTimeSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#stage_uuid RecoveryPlan#stage_uuid}
  */
  readonly stageUuid?: string;
  /**
  * stage_work block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#stage_work RecoveryPlan#stage_work}
  */
  readonly stageWork: RecoveryPlanStageListStageWork;
}

export function recoveryPlanStageListStructToTerraform(struct?: RecoveryPlanStageListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_time_secs: cdktf.numberToTerraform(struct!.delayTimeSecs),
    stage_uuid: cdktf.stringToTerraform(struct!.stageUuid),
    stage_work: recoveryPlanStageListStageWorkToTerraform(struct!.stageWork),
  }
}


export function recoveryPlanStageListStructToHclTerraform(struct?: RecoveryPlanStageListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_time_secs: {
      value: cdktf.numberToHclTerraform(struct!.delayTimeSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stage_uuid: {
      value: cdktf.stringToHclTerraform(struct!.stageUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_work: {
      value: recoveryPlanStageListStageWorkToHclTerraform(struct!.stageWork),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPlanStageListStageWorkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPlanStageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPlanStageListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayTimeSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayTimeSecs = this._delayTimeSecs;
    }
    if (this._stageUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageUuid = this._stageUuid;
    }
    if (this._stageWork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageWork = this._stageWork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPlanStageListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayTimeSecs = undefined;
      this._stageUuid = undefined;
      this._stageWork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayTimeSecs = value.delayTimeSecs;
      this._stageUuid = value.stageUuid;
      this._stageWork.internalValue = value.stageWork;
    }
  }

  // delay_time_secs - computed: true, optional: true, required: false
  private _delayTimeSecs?: number; 
  public get delayTimeSecs() {
    return this.getNumberAttribute('delay_time_secs');
  }
  public set delayTimeSecs(value: number) {
    this._delayTimeSecs = value;
  }
  public resetDelayTimeSecs() {
    this._delayTimeSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTimeSecsInput() {
    return this._delayTimeSecs;
  }

  // stage_uuid - computed: true, optional: true, required: false
  private _stageUuid?: string; 
  public get stageUuid() {
    return this.getStringAttribute('stage_uuid');
  }
  public set stageUuid(value: string) {
    this._stageUuid = value;
  }
  public resetStageUuid() {
    this._stageUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageUuidInput() {
    return this._stageUuid;
  }

  // stage_work - computed: false, optional: false, required: true
  private _stageWork = new RecoveryPlanStageListStageWorkOutputReference(this, "stage_work");
  public get stageWork() {
    return this._stageWork;
  }
  public putStageWork(value: RecoveryPlanStageListStageWork) {
    this._stageWork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageWorkInput() {
    return this._stageWork.internalValue;
  }
}

export class RecoveryPlanStageListStructList extends cdktf.ComplexList {
  public internalValue? : RecoveryPlanStageListStruct[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPlanStageListStructOutputReference {
    return new RecoveryPlanStageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#create RecoveryPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#delete RecoveryPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#update RecoveryPlan#update}
  */
  readonly update?: string;
}

export function recoveryPlanTimeoutsToTerraform(struct?: RecoveryPlanTimeouts | cdktf.IResolvable): any {
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


export function recoveryPlanTimeoutsToHclTerraform(struct?: RecoveryPlanTimeouts | cdktf.IResolvable): any {
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

export class RecoveryPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RecoveryPlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RecoveryPlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan nutanix_recovery_plan}
*/
export class RecoveryPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecoveryPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecoveryPlan to import
  * @param importFromId The id of the existing RecoveryPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecoveryPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_plan nutanix_recovery_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecoveryPlanConfig
  */
  public constructor(scope: Construct, id: string, config: RecoveryPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_plan',
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
    this._name = config.name;
    this._categories.internalValue = config.categories;
    this._ownerReference.internalValue = config.ownerReference;
    this._parameters.internalValue = config.parameters;
    this._projectReference.internalValue = config.projectReference;
    this._stageList.internalValue = config.stageList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new RecoveryPlanCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: RecoveryPlanCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // owner_reference - computed: false, optional: true, required: false
  private _ownerReference = new RecoveryPlanOwnerReferenceOutputReference(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }
  public putOwnerReference(value: RecoveryPlanOwnerReference) {
    this._ownerReference.internalValue = value;
  }
  public resetOwnerReference() {
    this._ownerReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new RecoveryPlanParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RecoveryPlanParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // project_reference - computed: false, optional: true, required: false
  private _projectReference = new RecoveryPlanProjectReferenceOutputReference(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }
  public putProjectReference(value: RecoveryPlanProjectReference) {
    this._projectReference.internalValue = value;
  }
  public resetProjectReference() {
    this._projectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference.internalValue;
  }

  // stage_list - computed: false, optional: false, required: true
  private _stageList = new RecoveryPlanStageListStructList(this, "stage_list", false);
  public get stageList() {
    return this._stageList;
  }
  public putStageList(value: RecoveryPlanStageListStruct[] | cdktf.IResolvable) {
    this._stageList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageListInput() {
    return this._stageList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RecoveryPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RecoveryPlanTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      categories: cdktf.listMapper(recoveryPlanCategoriesToTerraform, true)(this._categories.internalValue),
      owner_reference: recoveryPlanOwnerReferenceToTerraform(this._ownerReference.internalValue),
      parameters: recoveryPlanParametersToTerraform(this._parameters.internalValue),
      project_reference: recoveryPlanProjectReferenceToTerraform(this._projectReference.internalValue),
      stage_list: cdktf.listMapper(recoveryPlanStageListStructToTerraform, true)(this._stageList.internalValue),
      timeouts: recoveryPlanTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(recoveryPlanCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RecoveryPlanCategoriesList",
      },
      owner_reference: {
        value: recoveryPlanOwnerReferenceToHclTerraform(this._ownerReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPlanOwnerReferenceList",
      },
      parameters: {
        value: recoveryPlanParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPlanParametersList",
      },
      project_reference: {
        value: recoveryPlanProjectReferenceToHclTerraform(this._projectReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPlanProjectReferenceList",
      },
      stage_list: {
        value: cdktf.listMapperHcl(recoveryPlanStageListStructToHclTerraform, true)(this._stageList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPlanStageListStructList",
      },
      timeouts: {
        value: recoveryPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RecoveryPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
