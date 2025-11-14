// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfServiceAppPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#app_uuid SelfServiceAppPatch#app_uuid}
  */
  readonly appUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#config_name SelfServiceAppPatch#config_name}
  */
  readonly configName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#id SelfServiceAppPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#patch_name SelfServiceAppPatch#patch_name}
  */
  readonly patchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#runlog_uuid SelfServiceAppPatch#runlog_uuid}
  */
  readonly runlogUuid?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#categories SelfServiceAppPatch#categories}
  */
  readonly categories?: SelfServiceAppPatchCategories[] | cdktf.IResolvable;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#disks SelfServiceAppPatch#disks}
  */
  readonly disks?: SelfServiceAppPatchDisks[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#nics SelfServiceAppPatch#nics}
  */
  readonly nics?: SelfServiceAppPatchNics[] | cdktf.IResolvable;
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#vm_config SelfServiceAppPatch#vm_config}
  */
  readonly vmConfig?: SelfServiceAppPatchVmConfig[] | cdktf.IResolvable;
}
export interface SelfServiceAppPatchCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#operation SelfServiceAppPatch#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#value SelfServiceAppPatch#value}
  */
  readonly value?: string;
}

export function selfServiceAppPatchCategoriesToTerraform(struct?: SelfServiceAppPatchCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function selfServiceAppPatchCategoriesToHclTerraform(struct?: SelfServiceAppPatchCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class SelfServiceAppPatchCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfServiceAppPatchCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceAppPatchCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

export class SelfServiceAppPatchCategoriesList extends cdktf.ComplexList {
  public internalValue? : SelfServiceAppPatchCategories[] | cdktf.IResolvable

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
  public get(index: number): SelfServiceAppPatchCategoriesOutputReference {
    return new SelfServiceAppPatchCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfServiceAppPatchDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#disk_size_mib SelfServiceAppPatch#disk_size_mib}
  */
  readonly diskSizeMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#operation SelfServiceAppPatch#operation}
  */
  readonly operation: string;
}

export function selfServiceAppPatchDisksToTerraform(struct?: SelfServiceAppPatchDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_mib: cdktf.numberToTerraform(struct!.diskSizeMib),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function selfServiceAppPatchDisksToHclTerraform(struct?: SelfServiceAppPatchDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceAppPatchDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfServiceAppPatchDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeMib = this._diskSizeMib;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceAppPatchDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeMib = undefined;
      this._operation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeMib = value.diskSizeMib;
      this._operation = value.operation;
    }
  }

  // disk_size_mib - computed: false, optional: true, required: false
  private _diskSizeMib?: number; 
  public get diskSizeMib() {
    return this.getNumberAttribute('disk_size_mib');
  }
  public set diskSizeMib(value: number) {
    this._diskSizeMib = value;
  }
  public resetDiskSizeMib() {
    this._diskSizeMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeMibInput() {
    return this._diskSizeMib;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}

export class SelfServiceAppPatchDisksList extends cdktf.ComplexList {
  public internalValue? : SelfServiceAppPatchDisks[] | cdktf.IResolvable

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
  public get(index: number): SelfServiceAppPatchDisksOutputReference {
    return new SelfServiceAppPatchDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfServiceAppPatchNics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#index SelfServiceAppPatch#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#operation SelfServiceAppPatch#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#subnet_uuid SelfServiceAppPatch#subnet_uuid}
  */
  readonly subnetUuid?: string;
}

export function selfServiceAppPatchNicsToTerraform(struct?: SelfServiceAppPatchNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    operation: cdktf.stringToTerraform(struct!.operation),
    subnet_uuid: cdktf.stringToTerraform(struct!.subnetUuid),
  }
}


export function selfServiceAppPatchNicsToHclTerraform(struct?: SelfServiceAppPatchNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_uuid: {
      value: cdktf.stringToHclTerraform(struct!.subnetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceAppPatchNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfServiceAppPatchNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._subnetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetUuid = this._subnetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceAppPatchNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._operation = undefined;
      this._subnetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._operation = value.operation;
      this._subnetUuid = value.subnetUuid;
    }
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // subnet_uuid - computed: false, optional: true, required: false
  private _subnetUuid?: string; 
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }
  public set subnetUuid(value: string) {
    this._subnetUuid = value;
  }
  public resetSubnetUuid() {
    this._subnetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetUuidInput() {
    return this._subnetUuid;
  }
}

export class SelfServiceAppPatchNicsList extends cdktf.ComplexList {
  public internalValue? : SelfServiceAppPatchNics[] | cdktf.IResolvable

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
  public get(index: number): SelfServiceAppPatchNicsOutputReference {
    return new SelfServiceAppPatchNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfServiceAppPatchVmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#memory_size_mib SelfServiceAppPatch#memory_size_mib}
  */
  readonly memorySizeMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#num_sockets SelfServiceAppPatch#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#num_vcpus_per_socket SelfServiceAppPatch#num_vcpus_per_socket}
  */
  readonly numVcpusPerSocket?: number;
}

export function selfServiceAppPatchVmConfigToTerraform(struct?: SelfServiceAppPatchVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_size_mib: cdktf.numberToTerraform(struct!.memorySizeMib),
    num_sockets: cdktf.numberToTerraform(struct!.numSockets),
    num_vcpus_per_socket: cdktf.numberToTerraform(struct!.numVcpusPerSocket),
  }
}


export function selfServiceAppPatchVmConfigToHclTerraform(struct?: SelfServiceAppPatchVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_size_mib: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_sockets: {
      value: cdktf.numberToHclTerraform(struct!.numSockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_vcpus_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numVcpusPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SelfServiceAppPatchVmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelfServiceAppPatchVmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memorySizeMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeMib = this._memorySizeMib;
    }
    if (this._numSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSockets = this._numSockets;
    }
    if (this._numVcpusPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVcpusPerSocket = this._numVcpusPerSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfServiceAppPatchVmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memorySizeMib = undefined;
      this._numSockets = undefined;
      this._numVcpusPerSocket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memorySizeMib = value.memorySizeMib;
      this._numSockets = value.numSockets;
      this._numVcpusPerSocket = value.numVcpusPerSocket;
    }
  }

  // memory_size_mib - computed: false, optional: true, required: false
  private _memorySizeMib?: number; 
  public get memorySizeMib() {
    return this.getNumberAttribute('memory_size_mib');
  }
  public set memorySizeMib(value: number) {
    this._memorySizeMib = value;
  }
  public resetMemorySizeMib() {
    this._memorySizeMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeMibInput() {
    return this._memorySizeMib;
  }

  // num_sockets - computed: false, optional: true, required: false
  private _numSockets?: number; 
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }
  public set numSockets(value: number) {
    this._numSockets = value;
  }
  public resetNumSockets() {
    this._numSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSocketsInput() {
    return this._numSockets;
  }

  // num_vcpus_per_socket - computed: false, optional: true, required: false
  private _numVcpusPerSocket?: number; 
  public get numVcpusPerSocket() {
    return this.getNumberAttribute('num_vcpus_per_socket');
  }
  public set numVcpusPerSocket(value: number) {
    this._numVcpusPerSocket = value;
  }
  public resetNumVcpusPerSocket() {
    this._numVcpusPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVcpusPerSocketInput() {
    return this._numVcpusPerSocket;
  }
}

export class SelfServiceAppPatchVmConfigList extends cdktf.ComplexList {
  public internalValue? : SelfServiceAppPatchVmConfig[] | cdktf.IResolvable

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
  public get(index: number): SelfServiceAppPatchVmConfigOutputReference {
    return new SelfServiceAppPatchVmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch nutanix_self_service_app_patch}
*/
export class SelfServiceAppPatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_self_service_app_patch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfServiceAppPatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfServiceAppPatch to import
  * @param importFromId The id of the existing SelfServiceAppPatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfServiceAppPatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_self_service_app_patch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_patch nutanix_self_service_app_patch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfServiceAppPatchConfig
  */
  public constructor(scope: Construct, id: string, config: SelfServiceAppPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_self_service_app_patch',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appUuid = config.appUuid;
    this._configName = config.configName;
    this._id = config.id;
    this._patchName = config.patchName;
    this._runlogUuid = config.runlogUuid;
    this._categories.internalValue = config.categories;
    this._disks.internalValue = config.disks;
    this._nics.internalValue = config.nics;
    this._vmConfig.internalValue = config.vmConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_uuid - computed: false, optional: false, required: true
  private _appUuid?: string; 
  public get appUuid() {
    return this.getStringAttribute('app_uuid');
  }
  public set appUuid(value: string) {
    this._appUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUuidInput() {
    return this._appUuid;
  }

  // config_name - computed: false, optional: false, required: true
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
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

  // patch_name - computed: false, optional: false, required: true
  private _patchName?: string; 
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }
  public set patchName(value: string) {
    this._patchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchNameInput() {
    return this._patchName;
  }

  // runlog_uuid - computed: true, optional: true, required: false
  private _runlogUuid?: string; 
  public get runlogUuid() {
    return this.getStringAttribute('runlog_uuid');
  }
  public set runlogUuid(value: string) {
    this._runlogUuid = value;
  }
  public resetRunlogUuid() {
    this._runlogUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runlogUuidInput() {
    return this._runlogUuid;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new SelfServiceAppPatchCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: SelfServiceAppPatchCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new SelfServiceAppPatchDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: SelfServiceAppPatchDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new SelfServiceAppPatchNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: SelfServiceAppPatchNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // vm_config - computed: false, optional: true, required: false
  private _vmConfig = new SelfServiceAppPatchVmConfigList(this, "vm_config", false);
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: SelfServiceAppPatchVmConfig[] | cdktf.IResolvable) {
    this._vmConfig.internalValue = value;
  }
  public resetVmConfig() {
    this._vmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_uuid: cdktf.stringToTerraform(this._appUuid),
      config_name: cdktf.stringToTerraform(this._configName),
      id: cdktf.stringToTerraform(this._id),
      patch_name: cdktf.stringToTerraform(this._patchName),
      runlog_uuid: cdktf.stringToTerraform(this._runlogUuid),
      categories: cdktf.listMapper(selfServiceAppPatchCategoriesToTerraform, true)(this._categories.internalValue),
      disks: cdktf.listMapper(selfServiceAppPatchDisksToTerraform, true)(this._disks.internalValue),
      nics: cdktf.listMapper(selfServiceAppPatchNicsToTerraform, true)(this._nics.internalValue),
      vm_config: cdktf.listMapper(selfServiceAppPatchVmConfigToTerraform, true)(this._vmConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_uuid: {
        value: cdktf.stringToHclTerraform(this._appUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
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
      patch_name: {
        value: cdktf.stringToHclTerraform(this._patchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runlog_uuid: {
        value: cdktf.stringToHclTerraform(this._runlogUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(selfServiceAppPatchCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceAppPatchCategoriesList",
      },
      disks: {
        value: cdktf.listMapperHcl(selfServiceAppPatchDisksToHclTerraform, true)(this._disks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceAppPatchDisksList",
      },
      nics: {
        value: cdktf.listMapperHcl(selfServiceAppPatchNicsToHclTerraform, true)(this._nics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceAppPatchNicsList",
      },
      vm_config: {
        value: cdktf.listMapperHcl(selfServiceAppPatchVmConfigToHclTerraform, true)(this._vmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelfServiceAppPatchVmConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
