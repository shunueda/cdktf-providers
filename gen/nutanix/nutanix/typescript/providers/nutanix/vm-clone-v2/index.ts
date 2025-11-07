// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmCloneV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#id VmCloneV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#memory_size_bytes VmCloneV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#name VmCloneV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#num_cores_per_socket VmCloneV2#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#num_sockets VmCloneV2#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#num_threads_per_core VmCloneV2#num_threads_per_core}
  */
  readonly numThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#vm_ext_id VmCloneV2#vm_ext_id}
  */
  readonly vmExtId: string;
  /**
  * boot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_config VmCloneV2#boot_config}
  */
  readonly bootConfig?: VmCloneV2BootConfig[] | cdktf.IResolvable;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#guest_customization VmCloneV2#guest_customization}
  */
  readonly guestCustomization?: VmCloneV2GuestCustomization[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#nics VmCloneV2#nics}
  */
  readonly nics?: VmCloneV2Nics[] | cdktf.IResolvable;
}
export interface VmCloneV2ApcConfigCpuModel {
}

export function vmCloneV2ApcConfigCpuModelToTerraform(struct?: VmCloneV2ApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2ApcConfigCpuModelToHclTerraform(struct?: VmCloneV2ApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2ApcConfigCpuModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2ApcConfigCpuModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2ApcConfigCpuModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class VmCloneV2ApcConfigCpuModelList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2ApcConfigCpuModelOutputReference {
    return new VmCloneV2ApcConfigCpuModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2ApcConfig {
}

export function vmCloneV2ApcConfigToTerraform(struct?: VmCloneV2ApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2ApcConfigToHclTerraform(struct?: VmCloneV2ApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2ApcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2ApcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2ApcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_model - computed: true, optional: false, required: false
  private _cpuModel = new VmCloneV2ApcConfigCpuModelList(this, "cpu_model", false);
  public get cpuModel() {
    return this._cpuModel;
  }

  // is_apc_enabled - computed: true, optional: false, required: false
  public get isApcEnabled() {
    return this.getBooleanAttribute('is_apc_enabled');
  }
}

export class VmCloneV2ApcConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2ApcConfigOutputReference {
    return new VmCloneV2ApcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Categories {
}

export function vmCloneV2CategoriesToTerraform(struct?: VmCloneV2Categories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CategoriesToHclTerraform(struct?: VmCloneV2Categories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Categories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Categories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2CategoriesList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CategoriesOutputReference {
    return new VmCloneV2CategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReference {
}

export function vmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ext_id - computed: true, optional: false, required: false
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference {
}

export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReference {
}

export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSourceReference {
}

export function vmCloneV2CdRomsBackingInfoDataSourceReferenceToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceReferenceToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new VmCloneV2CdRomsBackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new VmCloneV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceReferenceOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoDataSource {
}

export function vmCloneV2CdRomsBackingInfoDataSourceToTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoDataSourceToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new VmCloneV2CdRomsBackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class VmCloneV2CdRomsBackingInfoDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoDataSourceOutputReference {
    return new VmCloneV2CdRomsBackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoStorageConfig {
}

export function vmCloneV2CdRomsBackingInfoStorageConfigToTerraform(struct?: VmCloneV2CdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoStorageConfigToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
}

export class VmCloneV2CdRomsBackingInfoStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoStorageConfigOutputReference {
    return new VmCloneV2CdRomsBackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfoStorageContainer {
}

export function vmCloneV2CdRomsBackingInfoStorageContainerToTerraform(struct?: VmCloneV2CdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoStorageContainerToHclTerraform(struct?: VmCloneV2CdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfoStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfoStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2CdRomsBackingInfoStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoStorageContainerOutputReference {
    return new VmCloneV2CdRomsBackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsBackingInfo {
}

export function vmCloneV2CdRomsBackingInfoToTerraform(struct?: VmCloneV2CdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsBackingInfoToHclTerraform(struct?: VmCloneV2CdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new VmCloneV2CdRomsBackingInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new VmCloneV2CdRomsBackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new VmCloneV2CdRomsBackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class VmCloneV2CdRomsBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsBackingInfoOutputReference {
    return new VmCloneV2CdRomsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRomsDiskAddress {
}

export function vmCloneV2CdRomsDiskAddressToTerraform(struct?: VmCloneV2CdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsDiskAddressToHclTerraform(struct?: VmCloneV2CdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRomsDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRomsDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class VmCloneV2CdRomsDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsDiskAddressOutputReference {
    return new VmCloneV2CdRomsDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2CdRoms {
}

export function vmCloneV2CdRomsToTerraform(struct?: VmCloneV2CdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2CdRomsToHclTerraform(struct?: VmCloneV2CdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2CdRomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2CdRoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2CdRoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new VmCloneV2CdRomsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new VmCloneV2CdRomsDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // iso_type - computed: true, optional: false, required: false
  public get isoType() {
    return this.getStringAttribute('iso_type');
  }
}

export class VmCloneV2CdRomsList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2CdRomsOutputReference {
    return new VmCloneV2CdRomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Cluster {
}

export function vmCloneV2ClusterToTerraform(struct?: VmCloneV2Cluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2ClusterToHclTerraform(struct?: VmCloneV2Cluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2ClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Cluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Cluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2ClusterList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2ClusterOutputReference {
    return new VmCloneV2ClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoAdfsVolumeGroupReference {
}

export function vmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceToTerraform(struct?: VmCloneV2DisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform(struct?: VmCloneV2DisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoAdfsVolumeGroupReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoAdfsVolumeGroupReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_group_ext_id - computed: true, optional: false, required: false
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
}

export class VmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference {
    return new VmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReference {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ext_id - computed: true, optional: false, required: false
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSourceReference {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceReferenceToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskDataSource {
}

export function vmCloneV2DisksBackingInfoVmDiskDataSourceToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskDataSourceToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new VmCloneV2DisksBackingInfoVmDiskDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class VmCloneV2DisksBackingInfoVmDiskDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskDataSourceOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskStorageConfig {
}

export function vmCloneV2DisksBackingInfoVmDiskStorageConfigToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskStorageConfigToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
}

export class VmCloneV2DisksBackingInfoVmDiskStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskStorageConfigOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDiskStorageContainer {
}

export function vmCloneV2DisksBackingInfoVmDiskStorageContainerToTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskStorageContainerToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDiskStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDiskStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2DisksBackingInfoVmDiskStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskStorageContainerOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfoVmDisk {
}

export function vmCloneV2DisksBackingInfoVmDiskToTerraform(struct?: VmCloneV2DisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoVmDiskToHclTerraform(struct?: VmCloneV2DisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfoVmDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfoVmDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new VmCloneV2DisksBackingInfoVmDiskDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new VmCloneV2DisksBackingInfoVmDiskStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new VmCloneV2DisksBackingInfoVmDiskStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class VmCloneV2DisksBackingInfoVmDiskList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoVmDiskOutputReference {
    return new VmCloneV2DisksBackingInfoVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksBackingInfo {
}

export function vmCloneV2DisksBackingInfoToTerraform(struct?: VmCloneV2DisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksBackingInfoToHclTerraform(struct?: VmCloneV2DisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adfs_volume_group_reference - computed: true, optional: false, required: false
  private _adfsVolumeGroupReference = new VmCloneV2DisksBackingInfoAdfsVolumeGroupReferenceList(this, "adfs_volume_group_reference", false);
  public get adfsVolumeGroupReference() {
    return this._adfsVolumeGroupReference;
  }

  // vm_disk - computed: true, optional: false, required: false
  private _vmDisk = new VmCloneV2DisksBackingInfoVmDiskList(this, "vm_disk", false);
  public get vmDisk() {
    return this._vmDisk;
  }
}

export class VmCloneV2DisksBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksBackingInfoOutputReference {
    return new VmCloneV2DisksBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2DisksDiskAddress {
}

export function vmCloneV2DisksDiskAddressToTerraform(struct?: VmCloneV2DisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksDiskAddressToHclTerraform(struct?: VmCloneV2DisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2DisksDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2DisksDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class VmCloneV2DisksDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksDiskAddressOutputReference {
    return new VmCloneV2DisksDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Disks {
}

export function vmCloneV2DisksToTerraform(struct?: VmCloneV2Disks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2DisksToHclTerraform(struct?: VmCloneV2Disks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2DisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Disks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Disks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new VmCloneV2DisksBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new VmCloneV2DisksDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2DisksList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2DisksOutputReference {
    return new VmCloneV2DisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GpusPciAddress {
}

export function vmCloneV2GpusPciAddressToTerraform(struct?: VmCloneV2GpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2GpusPciAddressToHclTerraform(struct?: VmCloneV2GpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2GpusPciAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GpusPciAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GpusPciAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus - computed: true, optional: false, required: false
  public get bus() {
    return this.getNumberAttribute('bus');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getNumberAttribute('device');
  }

  // func - computed: true, optional: false, required: false
  public get func() {
    return this.getNumberAttribute('func');
  }

  // segment - computed: true, optional: false, required: false
  public get segment() {
    return this.getNumberAttribute('segment');
  }
}

export class VmCloneV2GpusPciAddressList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2GpusPciAddressOutputReference {
    return new VmCloneV2GpusPciAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Gpus {
}

export function vmCloneV2GpusToTerraform(struct?: VmCloneV2Gpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2GpusToHclTerraform(struct?: VmCloneV2Gpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2GpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Gpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Gpus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_bytes - computed: true, optional: false, required: false
  public get frameBufferSizeBytes() {
    return this.getNumberAttribute('frame_buffer_size_bytes');
  }

  // guest_driver_version - computed: true, optional: false, required: false
  public get guestDriverVersion() {
    return this.getStringAttribute('guest_driver_version');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_virtual_display_heads - computed: true, optional: false, required: false
  public get numVirtualDisplayHeads() {
    return this.getNumberAttribute('num_virtual_display_heads');
  }

  // pci_address - computed: true, optional: false, required: false
  private _pciAddress = new VmCloneV2GpusPciAddressList(this, "pci_address", false);
  public get pciAddress() {
    return this._pciAddress;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class VmCloneV2GpusList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2GpusOutputReference {
    return new VmCloneV2GpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestTools {
}

export function vmCloneV2GuestToolsToTerraform(struct?: VmCloneV2GuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2GuestToolsToHclTerraform(struct?: VmCloneV2GuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2GuestToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // is_iso_inserted - computed: true, optional: false, required: false
  public get isIsoInserted() {
    return this.getBooleanAttribute('is_iso_inserted');
  }

  // is_reachable - computed: true, optional: false, required: false
  public get isReachable() {
    return this.getBooleanAttribute('is_reachable');
  }

  // is_vm_mobility_drivers_installed - computed: true, optional: false, required: false
  public get isVmMobilityDriversInstalled() {
    return this.getBooleanAttribute('is_vm_mobility_drivers_installed');
  }

  // is_vss_snapshot_capable - computed: true, optional: false, required: false
  public get isVssSnapshotCapable() {
    return this.getBooleanAttribute('is_vss_snapshot_capable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VmCloneV2GuestToolsList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2GuestToolsOutputReference {
    return new VmCloneV2GuestToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Host {
}

export function vmCloneV2HostToTerraform(struct?: VmCloneV2Host): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2HostToHclTerraform(struct?: VmCloneV2Host): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2HostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Host | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Host | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2HostList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2HostOutputReference {
    return new VmCloneV2HostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Links {
}

export function vmCloneV2LinksToTerraform(struct?: VmCloneV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2LinksToHclTerraform(struct?: VmCloneV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Links | undefined) {
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

export class VmCloneV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2LinksOutputReference {
    return new VmCloneV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2OwnershipInfoOwner {
}

export function vmCloneV2OwnershipInfoOwnerToTerraform(struct?: VmCloneV2OwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2OwnershipInfoOwnerToHclTerraform(struct?: VmCloneV2OwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2OwnershipInfoOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2OwnershipInfoOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2OwnershipInfoOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2OwnershipInfoOwnerList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2OwnershipInfoOwnerOutputReference {
    return new VmCloneV2OwnershipInfoOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2OwnershipInfo {
}

export function vmCloneV2OwnershipInfoToTerraform(struct?: VmCloneV2OwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2OwnershipInfoToHclTerraform(struct?: VmCloneV2OwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2OwnershipInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2OwnershipInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2OwnershipInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new VmCloneV2OwnershipInfoOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
}

export class VmCloneV2OwnershipInfoList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2OwnershipInfoOutputReference {
    return new VmCloneV2OwnershipInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2ProtectionPolicyStatePolicy {
}

export function vmCloneV2ProtectionPolicyStatePolicyToTerraform(struct?: VmCloneV2ProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2ProtectionPolicyStatePolicyToHclTerraform(struct?: VmCloneV2ProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2ProtectionPolicyStatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2ProtectionPolicyStatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2ProtectionPolicyStatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2ProtectionPolicyStatePolicyList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2ProtectionPolicyStatePolicyOutputReference {
    return new VmCloneV2ProtectionPolicyStatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2ProtectionPolicyState {
}

export function vmCloneV2ProtectionPolicyStateToTerraform(struct?: VmCloneV2ProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2ProtectionPolicyStateToHclTerraform(struct?: VmCloneV2ProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2ProtectionPolicyStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2ProtectionPolicyState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2ProtectionPolicyState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new VmCloneV2ProtectionPolicyStatePolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
}

export class VmCloneV2ProtectionPolicyStateList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2ProtectionPolicyStateOutputReference {
    return new VmCloneV2ProtectionPolicyStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2SerialPorts {
}

export function vmCloneV2SerialPortsToTerraform(struct?: VmCloneV2SerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2SerialPortsToHclTerraform(struct?: VmCloneV2SerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2SerialPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2SerialPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2SerialPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
}

export class VmCloneV2SerialPortsList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2SerialPortsOutputReference {
    return new VmCloneV2SerialPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Source {
}

export function vmCloneV2SourceToTerraform(struct?: VmCloneV2Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2SourceToHclTerraform(struct?: VmCloneV2Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2SourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VmCloneV2SourceList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2SourceOutputReference {
    return new VmCloneV2SourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2StorageConfigQosConfig {
}

export function vmCloneV2StorageConfigQosConfigToTerraform(struct?: VmCloneV2StorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2StorageConfigQosConfigToHclTerraform(struct?: VmCloneV2StorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2StorageConfigQosConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2StorageConfigQosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2StorageConfigQosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // throttled_iops - computed: true, optional: false, required: false
  public get throttledIops() {
    return this.getNumberAttribute('throttled_iops');
  }
}

export class VmCloneV2StorageConfigQosConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2StorageConfigQosConfigOutputReference {
    return new VmCloneV2StorageConfigQosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2StorageConfig {
}

export function vmCloneV2StorageConfigToTerraform(struct?: VmCloneV2StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2StorageConfigToHclTerraform(struct?: VmCloneV2StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2StorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2StorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2StorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }

  // qos_config - computed: true, optional: false, required: false
  private _qosConfig = new VmCloneV2StorageConfigQosConfigList(this, "qos_config", false);
  public get qosConfig() {
    return this._qosConfig;
  }
}

export class VmCloneV2StorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2StorageConfigOutputReference {
    return new VmCloneV2StorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2VtpmConfig {
}

export function vmCloneV2VtpmConfigToTerraform(struct?: VmCloneV2VtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmCloneV2VtpmConfigToHclTerraform(struct?: VmCloneV2VtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmCloneV2VtpmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2VtpmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2VtpmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_vtpm_enabled - computed: true, optional: false, required: false
  public get isVtpmEnabled() {
    return this.getBooleanAttribute('is_vtpm_enabled');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VmCloneV2VtpmConfigList extends cdktf.ComplexList {

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
  public get(index: number): VmCloneV2VtpmConfigOutputReference {
    return new VmCloneV2VtpmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#bus_type VmCloneV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#index VmCloneV2#index}
  */
  readonly index?: number;
}

export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
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
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#disk_address VmCloneV2#disk_address}
  */
  readonly diskAddress?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference {
    return new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#mac_address VmCloneV2#mac_address}
  */
  readonly macAddress?: string;
}

export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicToTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
    }
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference {
    return new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigLegacyBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device_disk VmCloneV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device_nic VmCloneV2#boot_device_nic}
  */
  readonly bootDeviceNic?: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigLegacyBootBootDeviceToTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function vmCloneV2BootConfigLegacyBootBootDeviceToHclTerraform(struct?: VmCloneV2BootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigLegacyBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: VmCloneV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class VmCloneV2BootConfigLegacyBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigLegacyBootBootDeviceOutputReference {
    return new VmCloneV2BootConfigLegacyBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigLegacyBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_order VmCloneV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device VmCloneV2#boot_device}
  */
  readonly bootDevice?: VmCloneV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigLegacyBootToTerraform(struct?: VmCloneV2BootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    boot_device: cdktf.listMapper(vmCloneV2BootConfigLegacyBootBootDeviceToTerraform, true)(struct!.bootDevice),
  }
}


export function vmCloneV2BootConfigLegacyBootToHclTerraform(struct?: VmCloneV2BootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    boot_device: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigLegacyBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigLegacyBootBootDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigLegacyBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigLegacyBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigLegacyBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._bootDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._bootDevice.internalValue = value.bootDevice;
    }
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string[]; 
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
  public set bootOrder(value: string[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new VmCloneV2BootConfigLegacyBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: VmCloneV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }
}

export class VmCloneV2BootConfigLegacyBootList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigLegacyBoot[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigLegacyBootOutputReference {
    return new VmCloneV2BootConfigLegacyBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#bus_type VmCloneV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#index VmCloneV2#index}
  */
  readonly index?: number;
}

export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
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
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#disk_address VmCloneV2#disk_address}
  */
  readonly diskAddress?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskToTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference {
    return new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#mac_address VmCloneV2#mac_address}
  */
  readonly macAddress?: string;
}

export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicToTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function vmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform(struct?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
    }
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference {
    return new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device_disk VmCloneV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device_nic VmCloneV2#boot_device_nic}
  */
  readonly bootDeviceNic?: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootBootDeviceToTerraform(struct?: VmCloneV2BootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function vmCloneV2BootConfigUefiBootBootDeviceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: VmCloneV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootBootDeviceOutputReference {
    return new VmCloneV2BootConfigUefiBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#image_ext_id VmCloneV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#bus_type VmCloneV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#index VmCloneV2#index}
  */
  readonly index?: number;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
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
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ext_id VmCloneV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#disk_ext_id VmCloneV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#disk_address VmCloneV2#disk_address}
  */
  readonly diskAddress?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#vm_reference VmCloneV2#vm_reference}
  */
  readonly vmReference?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#image_reference VmCloneV2#image_reference}
  */
  readonly imageReference?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#vm_disk_reference VmCloneV2#vm_disk_reference}
  */
  readonly vmDiskReference?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#reference VmCloneV2#reference}
  */
  readonly reference?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#is_flash_mode_enabled VmCloneV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ext_id VmCloneV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#disk_size_bytes VmCloneV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#data_source VmCloneV2#data_source}
  */
  readonly dataSource?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#storage_config VmCloneV2#storage_config}
  */
  readonly storageConfig?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#storage_container VmCloneV2#storage_container}
  */
  readonly storageContainer?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBootNvramDevice {
  /**
  * backing_storage_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#backing_storage_info VmCloneV2#backing_storage_info}
  */
  readonly backingStorageInfo?: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootNvramDeviceToTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_storage_info: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform, true)(struct!.backingStorageInfo),
  }
}


export function vmCloneV2BootConfigUefiBootNvramDeviceToHclTerraform(struct?: VmCloneV2BootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_storage_info: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform, true)(struct!.backingStorageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootNvramDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingStorageInfo = this._backingStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = value.backingStorageInfo;
    }
  }

  // backing_storage_info - computed: false, optional: true, required: false
  private _backingStorageInfo = new VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfoList(this, "backing_storage_info", false);
  public get backingStorageInfo() {
    return this._backingStorageInfo;
  }
  public putBackingStorageInfo(value: VmCloneV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable) {
    this._backingStorageInfo.internalValue = value;
  }
  public resetBackingStorageInfo() {
    this._backingStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingStorageInfoInput() {
    return this._backingStorageInfo.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootNvramDeviceList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootNvramDeviceOutputReference {
    return new VmCloneV2BootConfigUefiBootNvramDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfigUefiBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_order VmCloneV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#is_secure_boot_enabled VmCloneV2#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#boot_device VmCloneV2#boot_device}
  */
  readonly bootDevice?: VmCloneV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable;
  /**
  * nvram_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#nvram_device VmCloneV2#nvram_device}
  */
  readonly nvramDevice?: VmCloneV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigUefiBootToTerraform(struct?: VmCloneV2BootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    boot_device: cdktf.listMapper(vmCloneV2BootConfigUefiBootBootDeviceToTerraform, true)(struct!.bootDevice),
    nvram_device: cdktf.listMapper(vmCloneV2BootConfigUefiBootNvramDeviceToTerraform, true)(struct!.nvramDevice),
  }
}


export function vmCloneV2BootConfigUefiBootToHclTerraform(struct?: VmCloneV2BootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_device: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootBootDeviceList",
    },
    nvram_device: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootNvramDeviceToHclTerraform, true)(struct!.nvramDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootNvramDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigUefiBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfigUefiBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    if (this._nvramDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvramDevice = this._nvramDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfigUefiBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._isSecureBootEnabled = undefined;
      this._bootDevice.internalValue = undefined;
      this._nvramDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._bootDevice.internalValue = value.bootDevice;
      this._nvramDevice.internalValue = value.nvramDevice;
    }
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string[]; 
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
  public set bootOrder(value: string[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new VmCloneV2BootConfigUefiBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: VmCloneV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }

  // nvram_device - computed: false, optional: true, required: false
  private _nvramDevice = new VmCloneV2BootConfigUefiBootNvramDeviceList(this, "nvram_device", false);
  public get nvramDevice() {
    return this._nvramDevice;
  }
  public putNvramDevice(value: VmCloneV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable) {
    this._nvramDevice.internalValue = value;
  }
  public resetNvramDevice() {
    this._nvramDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvramDeviceInput() {
    return this._nvramDevice.internalValue;
  }
}

export class VmCloneV2BootConfigUefiBootList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfigUefiBoot[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigUefiBootOutputReference {
    return new VmCloneV2BootConfigUefiBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2BootConfig {
  /**
  * legacy_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#legacy_boot VmCloneV2#legacy_boot}
  */
  readonly legacyBoot?: VmCloneV2BootConfigLegacyBoot[] | cdktf.IResolvable;
  /**
  * uefi_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#uefi_boot VmCloneV2#uefi_boot}
  */
  readonly uefiBoot?: VmCloneV2BootConfigUefiBoot[] | cdktf.IResolvable;
}

export function vmCloneV2BootConfigToTerraform(struct?: VmCloneV2BootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legacy_boot: cdktf.listMapper(vmCloneV2BootConfigLegacyBootToTerraform, true)(struct!.legacyBoot),
    uefi_boot: cdktf.listMapper(vmCloneV2BootConfigUefiBootToTerraform, true)(struct!.uefiBoot),
  }
}


export function vmCloneV2BootConfigToHclTerraform(struct?: VmCloneV2BootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legacy_boot: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigLegacyBootToHclTerraform, true)(struct!.legacyBoot),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigLegacyBootList",
    },
    uefi_boot: {
      value: cdktf.listMapperHcl(vmCloneV2BootConfigUefiBootToHclTerraform, true)(struct!.uefiBoot),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2BootConfigUefiBootList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2BootConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2BootConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legacyBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyBoot = this._legacyBoot?.internalValue;
    }
    if (this._uefiBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefiBoot = this._uefiBoot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2BootConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = undefined;
      this._uefiBoot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = value.legacyBoot;
      this._uefiBoot.internalValue = value.uefiBoot;
    }
  }

  // legacy_boot - computed: false, optional: true, required: false
  private _legacyBoot = new VmCloneV2BootConfigLegacyBootList(this, "legacy_boot", false);
  public get legacyBoot() {
    return this._legacyBoot;
  }
  public putLegacyBoot(value: VmCloneV2BootConfigLegacyBoot[] | cdktf.IResolvable) {
    this._legacyBoot.internalValue = value;
  }
  public resetLegacyBoot() {
    this._legacyBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyBootInput() {
    return this._legacyBoot.internalValue;
  }

  // uefi_boot - computed: false, optional: true, required: false
  private _uefiBoot = new VmCloneV2BootConfigUefiBootList(this, "uefi_boot", false);
  public get uefiBoot() {
    return this._uefiBoot;
  }
  public putUefiBoot(value: VmCloneV2BootConfigUefiBoot[] | cdktf.IResolvable) {
    this._uefiBoot.internalValue = value;
  }
  public resetUefiBoot() {
    this._uefiBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiBootInput() {
    return this._uefiBoot.internalValue;
  }
}

export class VmCloneV2BootConfigList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2BootConfig[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2BootConfigOutputReference {
    return new VmCloneV2BootConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#name VmCloneV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsToTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs | cdktf.IResolvable): any {
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

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs | cdktf.IResolvable | undefined) {
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

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsOutputReference {
    return new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#key_value_pairs VmCloneV2#key_value_pairs}
  */
  readonly keyValuePairs?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysToTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysOutputReference {
    return new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#custom_keys VmCloneV2#custom_keys}
  */
  readonly customKeys?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#user_data VmCloneV2#user_data}
  */
  readonly userData?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_keys: cdktf.listMapper(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysToTerraform, true)(struct!.customKeys),
    user_data: cdktf.listMapper(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_keys: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysToHclTerraform, true)(struct!.customKeys),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysList",
    },
    user_data: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeys = this._customKeys?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeys.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeys.internalValue = value.customKeys;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_keys - computed: false, optional: true, required: false
  private _customKeys = new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeysList(this, "custom_keys", false);
  public get customKeys() {
    return this._customKeys;
  }
  public putCustomKeys(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeys[] | cdktf.IResolvable) {
    this._customKeys.internalValue = value;
  }
  public resetCustomKeys() {
    this._customKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeysInput() {
    return this._customKeys.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#datasource_type VmCloneV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#metadata VmCloneV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#cloud_init_script VmCloneV2#cloud_init_script}
  */
  readonly cloudInitScript?: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigCloudInitToTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function vmCloneV2GuestCustomizationConfigCloudInitToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init_script: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._cloudInitScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitScript = this._cloudInitScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceType = undefined;
      this._metadata = undefined;
      this._cloudInitScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceType = value.datasourceType;
      this._metadata = value.metadata;
      this._cloudInitScript.internalValue = value.cloudInitScript;
    }
  }

  // datasource_type - computed: false, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // cloud_init_script - computed: false, optional: true, required: false
  private _cloudInitScript = new VmCloneV2GuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: VmCloneV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
    this._cloudInitScript.internalValue = value;
  }
  public resetCloudInitScript() {
    this._cloudInitScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitScriptInput() {
    return this._cloudInitScript.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigCloudInitOutputReference {
    return new VmCloneV2GuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#name VmCloneV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
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

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#key_value_pairs VmCloneV2#key_value_pairs}
  */
  readonly keyValuePairs?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#custom_key_values VmCloneV2#custom_key_values}
  */
  readonly customKeyValues?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#unattend_xml VmCloneV2#unattend_xml}
  */
  readonly unattendXml?: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function vmCloneV2GuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._unattendXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unattendXml = this._unattendXml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._unattendXml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._unattendXml.internalValue = value.unattendXml;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // unattend_xml - computed: false, optional: true, required: false
  private _unattendXml = new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
    this._unattendXml.internalValue = value;
  }
  public resetUnattendXml() {
    this._unattendXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendXmlInput() {
    return this._unattendXml.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#install_type VmCloneV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#sysprep_script VmCloneV2#sysprep_script}
  */
  readonly sysprepScript?: VmCloneV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigSysprepToTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function vmCloneV2GuestCustomizationConfigSysprepToHclTerraform(struct?: VmCloneV2GuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysprep_script: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._sysprepScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprepScript = this._sysprepScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installType = undefined;
      this._sysprepScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installType = value.installType;
      this._sysprepScript.internalValue = value.sysprepScript;
    }
  }

  // install_type - computed: true, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // sysprep_script - computed: false, optional: true, required: false
  private _sysprepScript = new VmCloneV2GuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: VmCloneV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
    this._sysprepScript.internalValue = value;
  }
  public resetSysprepScript() {
    this._sysprepScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepScriptInput() {
    return this._sysprepScript.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigSysprepOutputReference {
    return new VmCloneV2GuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#cloud_init VmCloneV2#cloud_init}
  */
  readonly cloudInit?: VmCloneV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#sysprep VmCloneV2#sysprep}
  */
  readonly sysprep?: VmCloneV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationConfigToTerraform(struct?: VmCloneV2GuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(vmCloneV2GuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(vmCloneV2GuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function vmCloneV2GuestCustomizationConfigToHclTerraform(struct?: VmCloneV2GuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit?.internalValue;
    }
    if (this._sysprep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprep = this._sysprep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = undefined;
      this._sysprep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = value.cloudInit;
      this._sysprep.internalValue = value.sysprep;
    }
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new VmCloneV2GuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: VmCloneV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep = new VmCloneV2GuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: VmCloneV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
    this._sysprep.internalValue = value;
  }
  public resetSysprep() {
    this._sysprep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep.internalValue;
  }
}

export class VmCloneV2GuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationConfigOutputReference {
    return new VmCloneV2GuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2GuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#config VmCloneV2#config}
  */
  readonly config?: VmCloneV2GuestCustomizationConfig[] | cdktf.IResolvable;
}

export function vmCloneV2GuestCustomizationToTerraform(struct?: VmCloneV2GuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(vmCloneV2GuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function vmCloneV2GuestCustomizationToHclTerraform(struct?: VmCloneV2GuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2GuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2GuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2GuestCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2GuestCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new VmCloneV2GuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: VmCloneV2GuestCustomizationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class VmCloneV2GuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2GuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2GuestCustomizationOutputReference {
    return new VmCloneV2GuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#is_connected VmCloneV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#mac_address VmCloneV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#model VmCloneV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#num_queues VmCloneV2#num_queues}
  */
  readonly numQueues?: number;
}

export function vmCloneV2NicsBackingInfoToTerraform(struct?: VmCloneV2NicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    num_queues: cdktf.numberToTerraform(struct!.numQueues),
  }
}


export function vmCloneV2NicsBackingInfoToHclTerraform(struct?: VmCloneV2NicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_queues: {
      value: cdktf.numberToHclTerraform(struct!.numQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._numQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueues = this._numQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isConnected = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._numQueues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isConnected = value.isConnected;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._numQueues = value.numQueues;
    }
  }

  // is_connected - computed: true, optional: true, required: false
  private _isConnected?: boolean | cdktf.IResolvable; 
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
  public set isConnected(value: boolean | cdktf.IResolvable) {
    this._isConnected = value;
  }
  public resetIsConnected() {
    this._isConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectedInput() {
    return this._isConnected;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // num_queues - computed: false, optional: true, required: false
  private _numQueues?: number; 
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
  public set numQueues(value: number) {
    this._numQueues = value;
  }
  public resetNumQueues() {
    this._numQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueuesInput() {
    return this._numQueues;
  }
}

export class VmCloneV2NicsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsBackingInfoOutputReference {
    return new VmCloneV2NicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#prefix_length VmCloneV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2NicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2NicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#prefix_length VmCloneV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#value VmCloneV2#value}
  */
  readonly value?: string;
}

export function vmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfoIpv4Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#should_assign_ip VmCloneV2#should_assign_ip}
  */
  readonly shouldAssignIp?: boolean | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ip_address VmCloneV2#ip_address}
  */
  readonly ipAddress?: VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable;
  /**
  * secondary_ip_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#secondary_ip_address_list VmCloneV2#secondary_ip_address_list}
  */
  readonly secondaryIpAddressList?: VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable;
}

export function vmCloneV2NicsNetworkInfoIpv4ConfigToTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_assign_ip: cdktf.booleanToTerraform(struct!.shouldAssignIp),
    ip_address: cdktf.listMapper(vmCloneV2NicsNetworkInfoIpv4ConfigIpAddressToTerraform, true)(struct!.ipAddress),
    secondary_ip_address_list: cdktf.listMapper(vmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform, true)(struct!.secondaryIpAddressList),
  }
}


export function vmCloneV2NicsNetworkInfoIpv4ConfigToHclTerraform(struct?: VmCloneV2NicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_assign_ip: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAssignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoIpv4ConfigIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressList",
    },
    secondary_ip_address_list: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform, true)(struct!.secondaryIpAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAssignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAssignIp = this._shouldAssignIp;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    if (this._secondaryIpAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAddressList = this._secondaryIpAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAssignIp = undefined;
      this._ipAddress.internalValue = undefined;
      this._secondaryIpAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAssignIp = value.shouldAssignIp;
      this._ipAddress.internalValue = value.ipAddress;
      this._secondaryIpAddressList.internalValue = value.secondaryIpAddressList;
    }
  }

  // should_assign_ip - computed: true, optional: true, required: false
  private _shouldAssignIp?: boolean | cdktf.IResolvable; 
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
  public set shouldAssignIp(value: boolean | cdktf.IResolvable) {
    this._shouldAssignIp = value;
  }
  public resetShouldAssignIp() {
    this._shouldAssignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAssignIpInput() {
    return this._shouldAssignIp;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new VmCloneV2NicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: VmCloneV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // secondary_ip_address_list - computed: false, optional: true, required: false
  private _secondaryIpAddressList = new VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }
  public putSecondaryIpAddressList(value: VmCloneV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable) {
    this._secondaryIpAddressList.internalValue = value;
  }
  public resetSecondaryIpAddressList() {
    this._secondaryIpAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAddressListInput() {
    return this._secondaryIpAddressList.internalValue;
  }
}

export class VmCloneV2NicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoIpv4ConfigOutputReference {
    return new VmCloneV2NicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfoNetworkFunctionChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ext_id VmCloneV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCloneV2NicsNetworkInfoNetworkFunctionChainToTerraform(struct?: VmCloneV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCloneV2NicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: VmCloneV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VmCloneV2NicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoNetworkFunctionChainOutputReference {
    return new VmCloneV2NicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfoSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ext_id VmCloneV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCloneV2NicsNetworkInfoSubnetToTerraform(struct?: VmCloneV2NicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCloneV2NicsNetworkInfoSubnetToHclTerraform(struct?: VmCloneV2NicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfoSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfoSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VmCloneV2NicsNetworkInfoSubnetList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfoSubnet[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoSubnetOutputReference {
    return new VmCloneV2NicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2NicsNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#network_function_nic_type VmCloneV2#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#nic_type VmCloneV2#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#should_allow_unknown_macs VmCloneV2#should_allow_unknown_macs}
  */
  readonly shouldAllowUnknownMacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#trunked_vlans VmCloneV2#trunked_vlans}
  */
  readonly trunkedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#vlan_mode VmCloneV2#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ipv4_config VmCloneV2#ipv4_config}
  */
  readonly ipv4Config?: VmCloneV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable;
  /**
  * network_function_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#network_function_chain VmCloneV2#network_function_chain}
  */
  readonly networkFunctionChain?: VmCloneV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#subnet VmCloneV2#subnet}
  */
  readonly subnet?: VmCloneV2NicsNetworkInfoSubnet[] | cdktf.IResolvable;
}

export function vmCloneV2NicsNetworkInfoToTerraform(struct?: VmCloneV2NicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_function_nic_type: cdktf.stringToTerraform(struct!.networkFunctionNicType),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    should_allow_unknown_macs: cdktf.booleanToTerraform(struct!.shouldAllowUnknownMacs),
    trunked_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.trunkedVlans),
    vlan_mode: cdktf.stringToTerraform(struct!.vlanMode),
    ipv4_config: cdktf.listMapper(vmCloneV2NicsNetworkInfoIpv4ConfigToTerraform, true)(struct!.ipv4Config),
    network_function_chain: cdktf.listMapper(vmCloneV2NicsNetworkInfoNetworkFunctionChainToTerraform, true)(struct!.networkFunctionChain),
    subnet: cdktf.listMapper(vmCloneV2NicsNetworkInfoSubnetToTerraform, true)(struct!.subnet),
  }
}


export function vmCloneV2NicsNetworkInfoToHclTerraform(struct?: VmCloneV2NicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_function_nic_type: {
      value: cdktf.stringToHclTerraform(struct!.networkFunctionNicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_allow_unknown_macs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowUnknownMacs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trunked_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.trunkedVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    vlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_config: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoIpv4ConfigToHclTerraform, true)(struct!.ipv4Config),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoIpv4ConfigList",
    },
    network_function_chain: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoNetworkFunctionChainToHclTerraform, true)(struct!.networkFunctionChain),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoNetworkFunctionChainList",
    },
    subnet: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2NicsNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionNicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionNicType = this._networkFunctionNicType;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._shouldAllowUnknownMacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowUnknownMacs = this._shouldAllowUnknownMacs;
    }
    if (this._trunkedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkedVlans = this._trunkedVlans;
    }
    if (this._vlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMode = this._vlanMode;
    }
    if (this._ipv4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Config = this._ipv4Config?.internalValue;
    }
    if (this._networkFunctionChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChain = this._networkFunctionChain?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2NicsNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._shouldAllowUnknownMacs = undefined;
      this._trunkedVlans = undefined;
      this._vlanMode = undefined;
      this._ipv4Config.internalValue = undefined;
      this._networkFunctionChain.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = value.networkFunctionNicType;
      this._nicType = value.nicType;
      this._shouldAllowUnknownMacs = value.shouldAllowUnknownMacs;
      this._trunkedVlans = value.trunkedVlans;
      this._vlanMode = value.vlanMode;
      this._ipv4Config.internalValue = value.ipv4Config;
      this._networkFunctionChain.internalValue = value.networkFunctionChain;
      this._subnet.internalValue = value.subnet;
    }
  }

  // network_function_nic_type - computed: true, optional: true, required: false
  private _networkFunctionNicType?: string; 
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }
  public set networkFunctionNicType(value: string) {
    this._networkFunctionNicType = value;
  }
  public resetNetworkFunctionNicType() {
    this._networkFunctionNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionNicTypeInput() {
    return this._networkFunctionNicType;
  }

  // nic_type - computed: true, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // should_allow_unknown_macs - computed: true, optional: true, required: false
  private _shouldAllowUnknownMacs?: boolean | cdktf.IResolvable; 
  public get shouldAllowUnknownMacs() {
    return this.getBooleanAttribute('should_allow_unknown_macs');
  }
  public set shouldAllowUnknownMacs(value: boolean | cdktf.IResolvable) {
    this._shouldAllowUnknownMacs = value;
  }
  public resetShouldAllowUnknownMacs() {
    this._shouldAllowUnknownMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowUnknownMacsInput() {
    return this._shouldAllowUnknownMacs;
  }

  // trunked_vlans - computed: true, optional: true, required: false
  private _trunkedVlans?: number[]; 
  public get trunkedVlans() {
    return this.getNumberListAttribute('trunked_vlans');
  }
  public set trunkedVlans(value: number[]) {
    this._trunkedVlans = value;
  }
  public resetTrunkedVlans() {
    this._trunkedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkedVlansInput() {
    return this._trunkedVlans;
  }

  // vlan_mode - computed: true, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // ipv4_config - computed: false, optional: true, required: false
  private _ipv4Config = new VmCloneV2NicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: VmCloneV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // network_function_chain - computed: false, optional: true, required: false
  private _networkFunctionChain = new VmCloneV2NicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }
  public putNetworkFunctionChain(value: VmCloneV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable) {
    this._networkFunctionChain.internalValue = value;
  }
  public resetNetworkFunctionChain() {
    this._networkFunctionChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainInput() {
    return this._networkFunctionChain.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new VmCloneV2NicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: VmCloneV2NicsNetworkInfoSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class VmCloneV2NicsNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2NicsNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsNetworkInfoOutputReference {
    return new VmCloneV2NicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCloneV2Nics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#ext_id VmCloneV2#ext_id}
  */
  readonly extId?: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#backing_info VmCloneV2#backing_info}
  */
  readonly backingInfo?: VmCloneV2NicsBackingInfo[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#network_info VmCloneV2#network_info}
  */
  readonly networkInfo?: VmCloneV2NicsNetworkInfo[] | cdktf.IResolvable;
}

export function vmCloneV2NicsToTerraform(struct?: VmCloneV2Nics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    backing_info: cdktf.listMapper(vmCloneV2NicsBackingInfoToTerraform, true)(struct!.backingInfo),
    network_info: cdktf.listMapper(vmCloneV2NicsNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function vmCloneV2NicsToHclTerraform(struct?: VmCloneV2Nics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backing_info: {
      value: cdktf.listMapperHcl(vmCloneV2NicsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsBackingInfoList",
    },
    network_info: {
      value: cdktf.listMapperHcl(vmCloneV2NicsNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VmCloneV2NicsNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCloneV2NicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloneV2Nics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloneV2Nics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._backingInfo.internalValue = undefined;
      this._networkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._backingInfo.internalValue = value.backingInfo;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new VmCloneV2NicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: VmCloneV2NicsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new VmCloneV2NicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: VmCloneV2NicsNetworkInfo[] | cdktf.IResolvable) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }
}

export class VmCloneV2NicsList extends cdktf.ComplexList {
  public internalValue? : VmCloneV2Nics[] | cdktf.IResolvable

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
  public get(index: number): VmCloneV2NicsOutputReference {
    return new VmCloneV2NicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2 nutanix_vm_clone_v2}
*/
export class VmCloneV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_vm_clone_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmCloneV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmCloneV2 to import
  * @param importFromId The id of the existing VmCloneV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmCloneV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_vm_clone_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_clone_v2 nutanix_vm_clone_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmCloneV2Config
  */
  public constructor(scope: Construct, id: string, config: VmCloneV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_vm_clone_v2',
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
    this._memorySizeBytes = config.memorySizeBytes;
    this._name = config.name;
    this._numCoresPerSocket = config.numCoresPerSocket;
    this._numSockets = config.numSockets;
    this._numThreadsPerCore = config.numThreadsPerCore;
    this._vmExtId = config.vmExtId;
    this._bootConfig.internalValue = config.bootConfig;
    this._guestCustomization.internalValue = config.guestCustomization;
    this._nics.internalValue = config.nics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apc_config - computed: true, optional: false, required: false
  private _apcConfig = new VmCloneV2ApcConfigList(this, "apc_config", false);
  public get apcConfig() {
    return this._apcConfig;
  }

  // bios_uuid - computed: true, optional: false, required: false
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new VmCloneV2CategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // cd_roms - computed: true, optional: false, required: false
  private _cdRoms = new VmCloneV2CdRomsList(this, "cd_roms", false);
  public get cdRoms() {
    return this._cdRoms;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new VmCloneV2ClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new VmCloneV2DisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // enabled_cpu_features - computed: true, optional: false, required: false
  public get enabledCpuFeatures() {
    return this.getListAttribute('enabled_cpu_features');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // generation_uuid - computed: true, optional: false, required: false
  public get generationUuid() {
    return this.getStringAttribute('generation_uuid');
  }

  // gpus - computed: true, optional: false, required: false
  private _gpus = new VmCloneV2GpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }

  // guest_tools - computed: true, optional: false, required: false
  private _guestTools = new VmCloneV2GuestToolsList(this, "guest_tools", false);
  public get guestTools() {
    return this._guestTools;
  }

  // hardware_clock_timezone - computed: true, optional: false, required: false
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }

  // host - computed: true, optional: false, required: false
  private _host = new VmCloneV2HostList(this, "host", false);
  public get host() {
    return this._host;
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

  // is_agent_vm - computed: true, optional: false, required: false
  public get isAgentVm() {
    return this.getBooleanAttribute('is_agent_vm');
  }

  // is_branding_enabled - computed: true, optional: false, required: false
  public get isBrandingEnabled() {
    return this.getBooleanAttribute('is_branding_enabled');
  }

  // is_cpu_hotplug_enabled - computed: true, optional: false, required: false
  public get isCpuHotplugEnabled() {
    return this.getBooleanAttribute('is_cpu_hotplug_enabled');
  }

  // is_cpu_passthrough_enabled - computed: true, optional: false, required: false
  public get isCpuPassthroughEnabled() {
    return this.getBooleanAttribute('is_cpu_passthrough_enabled');
  }

  // is_gpu_console_enabled - computed: true, optional: false, required: false
  public get isGpuConsoleEnabled() {
    return this.getBooleanAttribute('is_gpu_console_enabled');
  }

  // is_memory_overcommit_enabled - computed: true, optional: false, required: false
  public get isMemoryOvercommitEnabled() {
    return this.getBooleanAttribute('is_memory_overcommit_enabled');
  }

  // is_scsi_controller_enabled - computed: true, optional: false, required: false
  public get isScsiControllerEnabled() {
    return this.getBooleanAttribute('is_scsi_controller_enabled');
  }

  // is_vcpu_hard_pinning_enabled - computed: true, optional: false, required: false
  public get isVcpuHardPinningEnabled() {
    return this.getBooleanAttribute('is_vcpu_hard_pinning_enabled');
  }

  // is_vga_console_enabled - computed: true, optional: false, required: false
  public get isVgaConsoleEnabled() {
    return this.getBooleanAttribute('is_vga_console_enabled');
  }

  // links - computed: true, optional: false, required: false
  private _links = new VmCloneV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // memory_size_bytes - computed: true, optional: true, required: false
  private _memorySizeBytes?: number; 
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }
  public set memorySizeBytes(value: number) {
    this._memorySizeBytes = value;
  }
  public resetMemorySizeBytes() {
    this._memorySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeBytesInput() {
    return this._memorySizeBytes;
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

  // num_cores_per_socket - computed: true, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_numa_nodes - computed: true, optional: false, required: false
  public get numNumaNodes() {
    return this.getNumberAttribute('num_numa_nodes');
  }

  // num_sockets - computed: true, optional: true, required: false
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

  // num_threads_per_core - computed: true, optional: true, required: false
  private _numThreadsPerCore?: number; 
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }
  public set numThreadsPerCore(value: number) {
    this._numThreadsPerCore = value;
  }
  public resetNumThreadsPerCore() {
    this._numThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsPerCoreInput() {
    return this._numThreadsPerCore;
  }

  // ownership_info - computed: true, optional: false, required: false
  private _ownershipInfo = new VmCloneV2OwnershipInfoList(this, "ownership_info", false);
  public get ownershipInfo() {
    return this._ownershipInfo;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // protection_policy_state - computed: true, optional: false, required: false
  private _protectionPolicyState = new VmCloneV2ProtectionPolicyStateList(this, "protection_policy_state", false);
  public get protectionPolicyState() {
    return this._protectionPolicyState;
  }

  // protection_type - computed: true, optional: false, required: false
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }

  // serial_ports - computed: true, optional: false, required: false
  private _serialPorts = new VmCloneV2SerialPortsList(this, "serial_ports", false);
  public get serialPorts() {
    return this._serialPorts;
  }

  // source - computed: true, optional: false, required: false
  private _source = new VmCloneV2SourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new VmCloneV2StorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vm_ext_id - computed: false, optional: false, required: true
  private _vmExtId?: string; 
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }
  public set vmExtId(value: string) {
    this._vmExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmExtIdInput() {
    return this._vmExtId;
  }

  // vtpm_config - computed: true, optional: false, required: false
  private _vtpmConfig = new VmCloneV2VtpmConfigList(this, "vtpm_config", false);
  public get vtpmConfig() {
    return this._vtpmConfig;
  }

  // boot_config - computed: false, optional: true, required: false
  private _bootConfig = new VmCloneV2BootConfigList(this, "boot_config", false);
  public get bootConfig() {
    return this._bootConfig;
  }
  public putBootConfig(value: VmCloneV2BootConfig[] | cdktf.IResolvable) {
    this._bootConfig.internalValue = value;
  }
  public resetBootConfig() {
    this._bootConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigInput() {
    return this._bootConfig.internalValue;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new VmCloneV2GuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: VmCloneV2GuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new VmCloneV2NicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: VmCloneV2Nics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      memory_size_bytes: cdktf.numberToTerraform(this._memorySizeBytes),
      name: cdktf.stringToTerraform(this._name),
      num_cores_per_socket: cdktf.numberToTerraform(this._numCoresPerSocket),
      num_sockets: cdktf.numberToTerraform(this._numSockets),
      num_threads_per_core: cdktf.numberToTerraform(this._numThreadsPerCore),
      vm_ext_id: cdktf.stringToTerraform(this._vmExtId),
      boot_config: cdktf.listMapper(vmCloneV2BootConfigToTerraform, true)(this._bootConfig.internalValue),
      guest_customization: cdktf.listMapper(vmCloneV2GuestCustomizationToTerraform, true)(this._guestCustomization.internalValue),
      nics: cdktf.listMapper(vmCloneV2NicsToTerraform, true)(this._nics.internalValue),
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
      memory_size_bytes: {
        value: cdktf.numberToHclTerraform(this._memorySizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_cores_per_socket: {
        value: cdktf.numberToHclTerraform(this._numCoresPerSocket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_sockets: {
        value: cdktf.numberToHclTerraform(this._numSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_threads_per_core: {
        value: cdktf.numberToHclTerraform(this._numThreadsPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_ext_id: {
        value: cdktf.stringToHclTerraform(this._vmExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_config: {
        value: cdktf.listMapperHcl(vmCloneV2BootConfigToHclTerraform, true)(this._bootConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCloneV2BootConfigList",
      },
      guest_customization: {
        value: cdktf.listMapperHcl(vmCloneV2GuestCustomizationToHclTerraform, true)(this._guestCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCloneV2GuestCustomizationList",
      },
      nics: {
        value: cdktf.listMapperHcl(vmCloneV2NicsToHclTerraform, true)(this._nics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCloneV2NicsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
