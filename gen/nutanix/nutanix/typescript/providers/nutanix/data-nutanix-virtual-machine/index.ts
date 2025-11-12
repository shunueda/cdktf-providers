// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#boot_device_disk_address DataNutanixVirtualMachine#boot_device_disk_address}
  */
  readonly bootDeviceDiskAddress?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#boot_device_mac_address DataNutanixVirtualMachine#boot_device_mac_address}
  */
  readonly bootDeviceMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#id DataNutanixVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#vm_id DataNutanixVirtualMachine#vm_id}
  */
  readonly vmId: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#categories DataNutanixVirtualMachine#categories}
  */
  readonly categories?: DataNutanixVirtualMachineCategories[] | cdktf.IResolvable;
}
export interface DataNutanixVirtualMachineDiskListDeviceProperties {
}

export function dataNutanixVirtualMachineDiskListDevicePropertiesToTerraform(struct?: DataNutanixVirtualMachineDiskListDeviceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineDiskListDevicePropertiesToHclTerraform(struct?: DataNutanixVirtualMachineDiskListDeviceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineDiskListDevicePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineDiskListDeviceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineDiskListDeviceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new cdktf.StringMap(this, "disk_address");
  public get diskAddress() {
    return this._diskAddress;
  }
}

export class DataNutanixVirtualMachineDiskListDevicePropertiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineDiskListDevicePropertiesOutputReference {
    return new DataNutanixVirtualMachineDiskListDevicePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReference {
}

export function dataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceToTerraform(struct?: DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceToHclTerraform(struct?: DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReference | undefined) {
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference {
    return new DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineDiskListStorageConfig {
}

export function dataNutanixVirtualMachineDiskListStorageConfigToTerraform(struct?: DataNutanixVirtualMachineDiskListStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineDiskListStorageConfigToHclTerraform(struct?: DataNutanixVirtualMachineDiskListStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineDiskListStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineDiskListStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineDiskListStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flash_mode - computed: true, optional: false, required: false
  public get flashMode() {
    return this.getStringAttribute('flash_mode');
  }

  // storage_container_reference - computed: true, optional: false, required: false
  private _storageContainerReference = new DataNutanixVirtualMachineDiskListStorageConfigStorageContainerReferenceList(this, "storage_container_reference", false);
  public get storageContainerReference() {
    return this._storageContainerReference;
  }
}

export class DataNutanixVirtualMachineDiskListStorageConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineDiskListStorageConfigOutputReference {
    return new DataNutanixVirtualMachineDiskListStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineDiskListStruct {
}

export function dataNutanixVirtualMachineDiskListStructToTerraform(struct?: DataNutanixVirtualMachineDiskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineDiskListStructToHclTerraform(struct?: DataNutanixVirtualMachineDiskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineDiskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineDiskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineDiskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_reference - computed: true, optional: false, required: false
  private _dataSourceReference = new cdktf.StringMap(this, "data_source_reference");
  public get dataSourceReference() {
    return this._dataSourceReference;
  }

  // device_properties - computed: true, optional: false, required: false
  private _deviceProperties = new DataNutanixVirtualMachineDiskListDevicePropertiesList(this, "device_properties", false);
  public get deviceProperties() {
    return this._deviceProperties;
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // disk_size_mib - computed: true, optional: false, required: false
  public get diskSizeMib() {
    return this.getNumberAttribute('disk_size_mib');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataNutanixVirtualMachineDiskListStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_group_reference - computed: true, optional: false, required: false
  private _volumeGroupReference = new cdktf.StringMap(this, "volume_group_reference");
  public get volumeGroupReference() {
    return this._volumeGroupReference;
  }
}

export class DataNutanixVirtualMachineDiskListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineDiskListStructOutputReference {
    return new DataNutanixVirtualMachineDiskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineGpuListStruct {
}

export function dataNutanixVirtualMachineGpuListStructToTerraform(struct?: DataNutanixVirtualMachineGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineGpuListStructToHclTerraform(struct?: DataNutanixVirtualMachineGpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineGpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineGpuListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineGpuListStruct | undefined) {
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

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_mib - computed: true, optional: false, required: false
  public get frameBufferSizeMib() {
    return this.getNumberAttribute('frame_buffer_size_mib');
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
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataNutanixVirtualMachineGpuListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineGpuListStructOutputReference {
    return new DataNutanixVirtualMachineGpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineMessageListStruct {
}

export function dataNutanixVirtualMachineMessageListStructToTerraform(struct?: DataNutanixVirtualMachineMessageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineMessageListStructToHclTerraform(struct?: DataNutanixVirtualMachineMessageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineMessageListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineMessageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineMessageListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class DataNutanixVirtualMachineMessageListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineMessageListStructOutputReference {
    return new DataNutanixVirtualMachineMessageListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineNicListIpEndpointListStruct {
}

export function dataNutanixVirtualMachineNicListIpEndpointListStructToTerraform(struct?: DataNutanixVirtualMachineNicListIpEndpointListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineNicListIpEndpointListStructToHclTerraform(struct?: DataNutanixVirtualMachineNicListIpEndpointListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineNicListIpEndpointListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineNicListIpEndpointListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineNicListIpEndpointListStruct | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixVirtualMachineNicListIpEndpointListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineNicListIpEndpointListStructOutputReference {
    return new DataNutanixVirtualMachineNicListIpEndpointListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineNicListStruct {
}

export function dataNutanixVirtualMachineNicListStructToTerraform(struct?: DataNutanixVirtualMachineNicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineNicListStructToHclTerraform(struct?: DataNutanixVirtualMachineNicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineNicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineNicListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineNicListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // ip_endpoint_list - computed: true, optional: false, required: false
  private _ipEndpointList = new DataNutanixVirtualMachineNicListIpEndpointListStructList(this, "ip_endpoint_list", false);
  public get ipEndpointList() {
    return this._ipEndpointList;
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getStringAttribute('is_connected');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // network_function_nic_type - computed: true, optional: false, required: false
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // num_queues - computed: true, optional: false, required: false
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // subnet_uuid - computed: true, optional: false, required: false
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixVirtualMachineNicListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineNicListStructOutputReference {
    return new DataNutanixVirtualMachineNicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineSerialPortListStruct {
}

export function dataNutanixVirtualMachineSerialPortListStructToTerraform(struct?: DataNutanixVirtualMachineSerialPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVirtualMachineSerialPortListStructToHclTerraform(struct?: DataNutanixVirtualMachineSerialPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVirtualMachineSerialPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineSerialPortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVirtualMachineSerialPortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataNutanixVirtualMachineSerialPortListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineSerialPortListStructOutputReference {
    return new DataNutanixVirtualMachineSerialPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVirtualMachineCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#name DataNutanixVirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#value DataNutanixVirtualMachine#value}
  */
  readonly value?: string;
}

export function dataNutanixVirtualMachineCategoriesToTerraform(struct?: DataNutanixVirtualMachineCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixVirtualMachineCategoriesToHclTerraform(struct?: DataNutanixVirtualMachineCategories | cdktf.IResolvable): any {
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

export class DataNutanixVirtualMachineCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVirtualMachineCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNutanixVirtualMachineCategories | cdktf.IResolvable | undefined) {
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

export class DataNutanixVirtualMachineCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixVirtualMachineCategories[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixVirtualMachineCategoriesOutputReference {
    return new DataNutanixVirtualMachineCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine nutanix_virtual_machine}
*/
export class DataNutanixVirtualMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixVirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixVirtualMachine to import
  * @param importFromId The id of the existing DataNutanixVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/virtual_machine nutanix_virtual_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_virtual_machine',
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
    this._bootDeviceDiskAddress = config.bootDeviceDiskAddress;
    this._bootDeviceMacAddress = config.bootDeviceMacAddress;
    this._id = config.id;
    this._vmId = config.vmId;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // availability_zone_reference - computed: true, optional: false, required: false
  private _availabilityZoneReference = new cdktf.StringMap(this, "availability_zone_reference");
  public get availabilityZoneReference() {
    return this._availabilityZoneReference;
  }

  // boot_device_disk_address - computed: true, optional: true, required: false
  private _bootDeviceDiskAddress?: { [key: string]: string }; 
  public get bootDeviceDiskAddress() {
    return this.getStringMapAttribute('boot_device_disk_address');
  }
  public set bootDeviceDiskAddress(value: { [key: string]: string }) {
    this._bootDeviceDiskAddress = value;
  }
  public resetBootDeviceDiskAddress() {
    this._bootDeviceDiskAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskAddressInput() {
    return this._bootDeviceDiskAddress;
  }

  // boot_device_mac_address - computed: true, optional: true, required: false
  private _bootDeviceMacAddress?: string; 
  public get bootDeviceMacAddress() {
    return this.getStringAttribute('boot_device_mac_address');
  }
  public set bootDeviceMacAddress(value: string) {
    this._bootDeviceMacAddress = value;
  }
  public resetBootDeviceMacAddress() {
    this._bootDeviceMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceMacAddressInput() {
    return this._bootDeviceMacAddress;
  }

  // boot_device_order_list - computed: true, optional: false, required: false
  public get bootDeviceOrderList() {
    return this.getListAttribute('boot_device_order_list');
  }

  // boot_type - computed: true, optional: false, required: false
  public get bootType() {
    return this.getStringAttribute('boot_type');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_list - computed: true, optional: false, required: false
  private _diskList = new DataNutanixVirtualMachineDiskListStructList(this, "disk_list", false);
  public get diskList() {
    return this._diskList;
  }

  // enable_cpu_passthrough - computed: true, optional: false, required: false
  public get enableCpuPassthrough() {
    return this.getBooleanAttribute('enable_cpu_passthrough');
  }

  // enable_script_exec - computed: true, optional: false, required: false
  public get enableScriptExec() {
    return this.getBooleanAttribute('enable_script_exec');
  }

  // gpu_list - computed: true, optional: false, required: false
  private _gpuList = new DataNutanixVirtualMachineGpuListStructList(this, "gpu_list", false);
  public get gpuList() {
    return this._gpuList;
  }

  // guest_customization_cloud_init_custom_key_values - computed: true, optional: false, required: false
  private _guestCustomizationCloudInitCustomKeyValues = new cdktf.StringMap(this, "guest_customization_cloud_init_custom_key_values");
  public get guestCustomizationCloudInitCustomKeyValues() {
    return this._guestCustomizationCloudInitCustomKeyValues;
  }

  // guest_customization_cloud_init_meta_data - computed: true, optional: false, required: false
  public get guestCustomizationCloudInitMetaData() {
    return this.getStringAttribute('guest_customization_cloud_init_meta_data');
  }

  // guest_customization_cloud_init_user_data - computed: true, optional: false, required: false
  public get guestCustomizationCloudInitUserData() {
    return this.getStringAttribute('guest_customization_cloud_init_user_data');
  }

  // guest_customization_is_overridable - computed: true, optional: false, required: false
  public get guestCustomizationIsOverridable() {
    return this.getBooleanAttribute('guest_customization_is_overridable');
  }

  // guest_customization_sysprep - computed: true, optional: false, required: false
  private _guestCustomizationSysprep = new cdktf.StringMap(this, "guest_customization_sysprep");
  public get guestCustomizationSysprep() {
    return this._guestCustomizationSysprep;
  }

  // guest_customization_sysprep_custom_key_values - computed: true, optional: false, required: false
  private _guestCustomizationSysprepCustomKeyValues = new cdktf.StringMap(this, "guest_customization_sysprep_custom_key_values");
  public get guestCustomizationSysprepCustomKeyValues() {
    return this._guestCustomizationSysprepCustomKeyValues;
  }

  // guest_os_id - computed: true, optional: false, required: false
  public get guestOsId() {
    return this.getStringAttribute('guest_os_id');
  }

  // hardware_clock_timezone - computed: true, optional: false, required: false
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }

  // host_reference - computed: true, optional: false, required: false
  private _hostReference = new cdktf.StringMap(this, "host_reference");
  public get hostReference() {
    return this._hostReference;
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
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

  // is_vcpu_hard_pinned - computed: true, optional: false, required: false
  public get isVcpuHardPinned() {
    return this.getBooleanAttribute('is_vcpu_hard_pinned');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // memory_size_mib - computed: true, optional: false, required: false
  public get memorySizeMib() {
    return this.getNumberAttribute('memory_size_mib');
  }

  // message_list - computed: true, optional: false, required: false
  private _messageList = new DataNutanixVirtualMachineMessageListStructList(this, "message_list", false);
  public get messageList() {
    return this._messageList;
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

  // ngt_credentials - computed: true, optional: false, required: false
  private _ngtCredentials = new cdktf.StringMap(this, "ngt_credentials");
  public get ngtCredentials() {
    return this._ngtCredentials;
  }

  // ngt_enabled_capability_list - computed: true, optional: false, required: false
  public get ngtEnabledCapabilityList() {
    return this.getListAttribute('ngt_enabled_capability_list');
  }

  // nic_list - computed: true, optional: false, required: false
  private _nicList = new DataNutanixVirtualMachineNicListStructList(this, "nic_list", false);
  public get nicList() {
    return this._nicList;
  }

  // num_sockets - computed: true, optional: false, required: false
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }

  // num_vcpus_per_socket - computed: true, optional: false, required: false
  public get numVcpusPerSocket() {
    return this.getNumberAttribute('num_vcpus_per_socket');
  }

  // num_vnuma_nodes - computed: true, optional: false, required: false
  public get numVnumaNodes() {
    return this.getNumberAttribute('num_vnuma_nodes');
  }

  // nutanix_guest_tools - computed: true, optional: false, required: false
  private _nutanixGuestTools = new cdktf.StringMap(this, "nutanix_guest_tools");
  public get nutanixGuestTools() {
    return this._nutanixGuestTools;
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new cdktf.StringMap(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }

  // parent_reference - computed: true, optional: false, required: false
  private _parentReference = new cdktf.StringMap(this, "parent_reference");
  public get parentReference() {
    return this._parentReference;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // power_state_mechanism - computed: true, optional: false, required: false
  public get powerStateMechanism() {
    return this.getStringAttribute('power_state_mechanism');
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new cdktf.StringMap(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }

  // serial_port_list - computed: true, optional: false, required: false
  private _serialPortList = new DataNutanixVirtualMachineSerialPortListStructList(this, "serial_port_list", false);
  public get serialPortList() {
    return this._serialPortList;
  }

  // should_fail_on_script_failure - computed: true, optional: false, required: false
  public get shouldFailOnScriptFailure() {
    return this.getBooleanAttribute('should_fail_on_script_failure');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vga_console_enabled - computed: true, optional: false, required: false
  public get vgaConsoleEnabled() {
    return this.getBooleanAttribute('vga_console_enabled');
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixVirtualMachineCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixVirtualMachineCategories[] | cdktf.IResolvable) {
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
      boot_device_disk_address: cdktf.hashMapper(cdktf.stringToTerraform)(this._bootDeviceDiskAddress),
      boot_device_mac_address: cdktf.stringToTerraform(this._bootDeviceMacAddress),
      id: cdktf.stringToTerraform(this._id),
      vm_id: cdktf.stringToTerraform(this._vmId),
      categories: cdktf.listMapper(dataNutanixVirtualMachineCategoriesToTerraform, true)(this._categories.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_device_disk_address: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bootDeviceDiskAddress),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      boot_device_mac_address: {
        value: cdktf.stringToHclTerraform(this._bootDeviceMacAddress),
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
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(dataNutanixVirtualMachineCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixVirtualMachineCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
