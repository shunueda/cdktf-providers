import * as cdktf from 'cdktf';
import { DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecApcConfigList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecAvailabilityZoneList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecBootConfigList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecCategoriesList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecCdRomsList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecClusterList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecDisksList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGpusList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGuestCustomizationList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGuestToolsList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecHostList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecLinksList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecNicsList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecOwnershipInfoList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecCreatedByList,
DataNutanixTemplatesV2TemplatesTemplateVersionSpecLinksList,
DataNutanixTemplatesV2TemplatesCreatedByList,
DataNutanixTemplatesV2TemplatesGuestUpdateStatusList,
DataNutanixTemplatesV2TemplatesLinksList } from './structs0'
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_ext_id - computed: true, optional: false, required: false
  public get deviceExtId() {
    return this.getStringAttribute('device_ext_id');
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfo {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pcie_device_reference - computed: true, optional: false, required: false
  private _pcieDeviceReference = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceList(this, "pcie_device_reference", false);
  public get pcieDeviceReference() {
    return this._pcieDeviceReference;
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinks {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinks | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevices {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_device_info - computed: true, optional: false, required: false
  private _assignedDeviceInfo = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoList(this, "assigned_device_info", false);
  public get assignedDeviceInfo() {
    return this._assignedDeviceInfo;
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicy {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicy | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyState {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStatePolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinks {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinks | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPorts {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPorts | undefined) {
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

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSource {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSource | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfig {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfig | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfig {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfig | undefined) {
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
  private _qosConfig = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigQosConfigList(this, "qos_config", false);
  public get qosConfig() {
    return this._qosConfig;
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfig {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfig | undefined) {
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

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpec {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apc_config - computed: true, optional: false, required: false
  private _apcConfig = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecApcConfigList(this, "apc_config", false);
  public get apcConfig() {
    return this._apcConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  private _availabilityZone = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecAvailabilityZoneList(this, "availability_zone", false);
  public get availabilityZone() {
    return this._availabilityZone;
  }

  // bios_uuid - computed: true, optional: false, required: false
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }

  // boot_config - computed: true, optional: false, required: false
  private _bootConfig = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecBootConfigList(this, "boot_config", false);
  public get bootConfig() {
    return this._bootConfig;
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // cd_roms - computed: true, optional: false, required: false
  private _cdRoms = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecCdRomsList(this, "cd_roms", false);
  public get cdRoms() {
    return this._cdRoms;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecClusterList(this, "cluster", false);
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
  private _disks = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecDisksList(this, "disks", false);
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
  private _gpus = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }

  // guest_customization - computed: true, optional: false, required: false
  private _guestCustomization = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }

  // guest_tools - computed: true, optional: false, required: false
  private _guestTools = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecGuestToolsList(this, "guest_tools", false);
  public get guestTools() {
    return this._guestTools;
  }

  // hardware_clock_timezone - computed: true, optional: false, required: false
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecHostList(this, "host", false);
  public get host() {
    return this._host;
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

  // is_cross_cluster_migration_in_progress - computed: true, optional: false, required: false
  public get isCrossClusterMigrationInProgress() {
    return this.getBooleanAttribute('is_cross_cluster_migration_in_progress');
  }

  // is_gpu_console_enabled - computed: true, optional: false, required: false
  public get isGpuConsoleEnabled() {
    return this.getBooleanAttribute('is_gpu_console_enabled');
  }

  // is_live_migrate_capable - computed: true, optional: false, required: false
  public get isLiveMigrateCapable() {
    return this.getBooleanAttribute('is_live_migrate_capable');
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
  private _links = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // memory_size_bytes - computed: true, optional: false, required: false
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nics - computed: true, optional: false, required: false
  private _nics = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }

  // num_cores_per_socket - computed: true, optional: false, required: false
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }

  // num_numa_nodes - computed: true, optional: false, required: false
  public get numNumaNodes() {
    return this.getNumberAttribute('num_numa_nodes');
  }

  // num_sockets - computed: true, optional: false, required: false
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }

  // num_threads_per_core - computed: true, optional: false, required: false
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }

  // ownership_info - computed: true, optional: false, required: false
  private _ownershipInfo = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecOwnershipInfoList(this, "ownership_info", false);
  public get ownershipInfo() {
    return this._ownershipInfo;
  }

  // pci_devices - computed: true, optional: false, required: false
  private _pciDevices = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecPciDevicesList(this, "pci_devices", false);
  public get pciDevices() {
    return this._pciDevices;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // protection_policy_state - computed: true, optional: false, required: false
  private _protectionPolicyState = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecProtectionPolicyStateList(this, "protection_policy_state", false);
  public get protectionPolicyState() {
    return this._protectionPolicyState;
  }

  // protection_type - computed: true, optional: false, required: false
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }

  // serial_ports - computed: true, optional: false, required: false
  private _serialPorts = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSerialPortsList(this, "serial_ports", false);
  public get serialPorts() {
    return this._serialPorts;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecStorageConfigList(this, "storage_config", false);
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

  // vtpm_config - computed: true, optional: false, required: false
  private _vtpmConfig = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecVtpmConfigList(this, "vtpm_config", false);
  public get vtpmConfig() {
    return this._vtpmConfig;
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesTemplateVersionSpec {
}

export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecToTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesTemplateVersionSpecToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesTemplateVersionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesTemplateVersionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesTemplateVersionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // is_active_version - computed: true, optional: false, required: false
  public get isActiveVersion() {
    return this.getBooleanAttribute('is_active_version');
  }

  // is_gc_override_enabled - computed: true, optional: false, required: false
  public get isGcOverrideEnabled() {
    return this.getBooleanAttribute('is_gc_override_enabled');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version_description - computed: true, optional: false, required: false
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // vm_spec - computed: true, optional: false, required: false
  private _vmSpec = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecVmSpecList(this, "vm_spec", false);
  public get vmSpec() {
    return this._vmSpec;
  }
}

export class DataNutanixTemplatesV2TemplatesTemplateVersionSpecList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesTemplateVersionSpecOutputReference {
    return new DataNutanixTemplatesV2TemplatesTemplateVersionSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStrings {
}

export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map - computed: true, optional: false, required: false
  private _map = new cdktf.StringMap(this, "map");
  public get map() {
    return this._map;
  }
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValue {
}

export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueToTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // map_of_strings - computed: true, optional: false, required: false
  private _mapOfStrings = new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }

  // object - computed: true, optional: false, required: false
  private _object = new cdktf.StringMap(this, "object");
  public get object() {
    return this._object;
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueOutputReference {
    return new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributes {
}

export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesToTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributes | undefined) {
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
  private _value = new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesOutputReference {
    return new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2TemplatesUpdatedBy {
}

export function dataNutanixTemplatesV2TemplatesUpdatedByToTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesUpdatedByToHclTerraform(struct?: DataNutanixTemplatesV2TemplatesUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesUpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2TemplatesUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2TemplatesUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new DataNutanixTemplatesV2TemplatesUpdatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // is_force_reset_password_enabled - computed: true, optional: false, required: false
  public get isForceResetPasswordEnabled() {
    return this.getBooleanAttribute('is_force_reset_password_enabled');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // middle_initial - computed: true, optional: false, required: false
  public get middleInitial() {
    return this.getStringAttribute('middle_initial');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataNutanixTemplatesV2TemplatesUpdatedByList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesUpdatedByOutputReference {
    return new DataNutanixTemplatesV2TemplatesUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixTemplatesV2Templates {
}

export function dataNutanixTemplatesV2TemplatesToTerraform(struct?: DataNutanixTemplatesV2Templates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixTemplatesV2TemplatesToHclTerraform(struct?: DataNutanixTemplatesV2Templates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixTemplatesV2TemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixTemplatesV2Templates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixTemplatesV2Templates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ext_ids - computed: true, optional: false, required: false
  public get categoryExtIds() {
    return this.getListAttribute('category_ext_ids');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataNutanixTemplatesV2TemplatesCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // guest_update_status - computed: true, optional: false, required: false
  private _guestUpdateStatus = new DataNutanixTemplatesV2TemplatesGuestUpdateStatusList(this, "guest_update_status", false);
  public get guestUpdateStatus() {
    return this._guestUpdateStatus;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixTemplatesV2TemplatesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // template_description - computed: true, optional: false, required: false
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // template_version_spec - computed: true, optional: false, required: false
  private _templateVersionSpec = new DataNutanixTemplatesV2TemplatesTemplateVersionSpecList(this, "template_version_spec", false);
  public get templateVersionSpec() {
    return this._templateVersionSpec;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataNutanixTemplatesV2TemplatesUpdatedByList(this, "updated_by", false);
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataNutanixTemplatesV2TemplatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixTemplatesV2TemplatesOutputReference {
    return new DataNutanixTemplatesV2TemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
