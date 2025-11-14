import * as cdktf from 'cdktf';
import { TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference,
templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform,
templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList,
TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference,
templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToTerraform,
templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceList,
TemplateV2TemplateVersionSpecVmSpecDisksLinksList,
TemplateV2TemplateVersionSpecVmSpecLinksList,
TemplateV2TemplateVersionSpecVmSpecApcConfig,
templateV2TemplateVersionSpecVmSpecApcConfigToTerraform,
templateV2TemplateVersionSpecVmSpecApcConfigToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecApcConfigList,
TemplateV2TemplateVersionSpecVmSpecAvailabilityZone,
templateV2TemplateVersionSpecVmSpecAvailabilityZoneToTerraform,
templateV2TemplateVersionSpecVmSpecAvailabilityZoneToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneList,
TemplateV2TemplateVersionSpecVmSpecBootConfig,
templateV2TemplateVersionSpecVmSpecBootConfigToTerraform,
templateV2TemplateVersionSpecVmSpecBootConfigToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecBootConfigList,
TemplateV2TemplateVersionSpecVmSpecCategories,
templateV2TemplateVersionSpecVmSpecCategoriesToTerraform,
templateV2TemplateVersionSpecVmSpecCategoriesToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecCategoriesList,
TemplateV2TemplateVersionSpecVmSpecCdRoms,
templateV2TemplateVersionSpecVmSpecCdRomsToTerraform,
templateV2TemplateVersionSpecVmSpecCdRomsToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecCdRomsList,
TemplateV2TemplateVersionSpecVmSpecCluster,
templateV2TemplateVersionSpecVmSpecClusterToTerraform,
templateV2TemplateVersionSpecVmSpecClusterToHclTerraform,
TemplateV2TemplateVersionSpecVmSpecClusterList,
TemplateV2TemplateVersionSpecLinksList,
TemplateV2TemplateVersionSpecCreatedBy,
templateV2TemplateVersionSpecCreatedByToTerraform,
templateV2TemplateVersionSpecCreatedByToHclTerraform,
TemplateV2TemplateVersionSpecCreatedByList,
TemplateV2TemplateVersionSpecVersionSource,
templateV2TemplateVersionSpecVersionSourceToTerraform,
templateV2TemplateVersionSpecVersionSourceToHclTerraform,
TemplateV2TemplateVersionSpecVersionSourceOutputReference } from './structs0'
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#disk_ext_id TemplateV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vm_reference TemplateV2#vm_reference}
  */
  readonly vmReference?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
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
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
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
  private _vmReference = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#image_reference TemplateV2#image_reference}
  */
  readonly imageReference?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vm_disk_reference TemplateV2#vm_disk_reference}
  */
  readonly vmDiskReference?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable | undefined) {
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
  private _imageReference = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable) {
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
  private _vmDiskReference = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#reference TemplateV2#reference}
  */
  readonly reference?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource | cdktf.IResolvable | undefined) {
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
  private _reference = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_flash_mode_enabled TemplateV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#disk_size_bytes TemplateV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_migration_in_progress TemplateV2#is_migration_in_progress}
  */
  readonly isMigrationInProgress?: boolean | cdktf.IResolvable;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#data_source TemplateV2#data_source}
  */
  readonly dataSource?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#storage_config TemplateV2#storage_config}
  */
  readonly storageConfig?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#storage_container TemplateV2#storage_container}
  */
  readonly storageContainer?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    is_migration_in_progress: cdktf.booleanToTerraform(struct!.isMigrationInProgress),
    data_source: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk | cdktf.IResolvable): any {
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
    is_migration_in_progress: {
      value: cdktf.booleanToHclTerraform(struct!.isMigrationInProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_source: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._isMigrationInProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMigrationInProgress = this._isMigrationInProgress;
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._isMigrationInProgress = undefined;
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
      this._isMigrationInProgress = value.isMigrationInProgress;
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

  // is_migration_in_progress - computed: true, optional: true, required: false
  private _isMigrationInProgress?: boolean | cdktf.IResolvable; 
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }
  public set isMigrationInProgress(value: boolean | cdktf.IResolvable) {
    this._isMigrationInProgress = value;
  }
  public resetIsMigrationInProgress() {
    this._isMigrationInProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMigrationInProgressInput() {
    return this._isMigrationInProgress;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable) {
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
  private _storageConfig = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable) {
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
  private _storageContainer = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo {
  /**
  * adfs_volume_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#adfs_volume_group_reference TemplateV2#adfs_volume_group_reference}
  */
  readonly adfsVolumeGroupReference?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable;
  /**
  * vm_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vm_disk TemplateV2#vm_disk}
  */
  readonly vmDisk?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adfs_volume_group_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToTerraform, true)(struct!.adfsVolumeGroupReference),
    vm_disk: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskToTerraform, true)(struct!.vmDisk),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adfs_volume_group_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform, true)(struct!.adfsVolumeGroupReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceList",
    },
    vm_disk: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskToHclTerraform, true)(struct!.vmDisk),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adfsVolumeGroupReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfsVolumeGroupReference = this._adfsVolumeGroupReference?.internalValue;
    }
    if (this._vmDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDisk = this._vmDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adfsVolumeGroupReference.internalValue = undefined;
      this._vmDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adfsVolumeGroupReference.internalValue = value.adfsVolumeGroupReference;
      this._vmDisk.internalValue = value.vmDisk;
    }
  }

  // adfs_volume_group_reference - computed: false, optional: true, required: false
  private _adfsVolumeGroupReference = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceList(this, "adfs_volume_group_reference", false);
  public get adfsVolumeGroupReference() {
    return this._adfsVolumeGroupReference;
  }
  public putAdfsVolumeGroupReference(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable) {
    this._adfsVolumeGroupReference.internalValue = value;
  }
  public resetAdfsVolumeGroupReference() {
    this._adfsVolumeGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsVolumeGroupReferenceInput() {
    return this._adfsVolumeGroupReference.internalValue;
  }

  // vm_disk - computed: false, optional: true, required: false
  private _vmDisk = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskList(this, "vm_disk", false);
  public get vmDisk() {
    return this._vmDisk;
  }
  public putVmDisk(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDisk[] | cdktf.IResolvable) {
    this._vmDisk.internalValue = value;
  }
  public resetVmDisk() {
    this._vmDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskInput() {
    return this._vmDisk.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecDisksDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisks {
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#backing_info TemplateV2#backing_info}
  */
  readonly backingInfo?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo[] | cdktf.IResolvable;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecDisksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksBackingInfoToTerraform, true)(struct!.backingInfo),
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoList",
    },
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = value.backingInfo;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecDisksLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecDisksDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecDisksDiskAddress[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecDisksList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisks[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGpusLinks {
}

export function templateV2TemplateVersionSpecVmSpecGpusLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecGpusLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecGpusLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGpusLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGpusLinks | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecGpusLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGpusLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGpusLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGpusPciAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#bus TemplateV2#bus}
  */
  readonly bus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#device TemplateV2#device}
  */
  readonly device?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#func TemplateV2#func}
  */
  readonly func?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#segment TemplateV2#segment}
  */
  readonly segment?: number;
}

export function templateV2TemplateVersionSpecVmSpecGpusPciAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpusPciAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.numberToTerraform(struct!.bus),
    device: cdktf.numberToTerraform(struct!.device),
    func: cdktf.numberToTerraform(struct!.func),
    segment: cdktf.numberToTerraform(struct!.segment),
  }
}


export function templateV2TemplateVersionSpecVmSpecGpusPciAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpusPciAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.numberToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device: {
      value: cdktf.numberToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    func: {
      value: cdktf.numberToHclTerraform(struct!.func),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGpusPciAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGpusPciAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._func !== undefined) {
      hasAnyValues = true;
      internalValueResult.func = this._func;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGpusPciAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._device = undefined;
      this._func = undefined;
      this._segment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._device = value.device;
      this._func = value.func;
      this._segment = value.segment;
    }
  }

  // bus - computed: true, optional: true, required: false
  private _bus?: number; 
  public get bus() {
    return this.getNumberAttribute('bus');
  }
  public set bus(value: number) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // device - computed: true, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // func - computed: true, optional: true, required: false
  private _func?: number; 
  public get func() {
    return this.getNumberAttribute('func');
  }
  public set func(value: number) {
    this._func = value;
  }
  public resetFunc() {
    this._func = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcInput() {
    return this._func;
  }

  // segment - computed: true, optional: true, required: false
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGpusPciAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGpusPciAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGpusPciAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGpusPciAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGpus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#device_id TemplateV2#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#mode TemplateV2#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vendor TemplateV2#vendor}
  */
  readonly vendor?: string;
  /**
  * pci_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#pci_address TemplateV2#pci_address}
  */
  readonly pciAddress?: TemplateV2TemplateVersionSpecVmSpecGpusPciAddress[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGpusToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    mode: cdktf.stringToTerraform(struct!.mode),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    pci_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGpusPciAddressToTerraform, true)(struct!.pciAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecGpusToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGpusPciAddressToHclTerraform, true)(struct!.pciAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGpusPciAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._pciAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddress = this._pciAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._mode = undefined;
      this._vendor = undefined;
      this._pciAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._mode = value.mode;
      this._vendor = value.vendor;
      this._pciAddress.internalValue = value.pciAddress;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecGpusLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_virtual_display_heads - computed: true, optional: false, required: false
  public get numVirtualDisplayHeads() {
    return this.getNumberAttribute('num_virtual_display_heads');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // pci_address - computed: false, optional: true, required: false
  private _pciAddress = new TemplateV2TemplateVersionSpecVmSpecGpusPciAddressList(this, "pci_address", false);
  public get pciAddress() {
    return this._pciAddress;
  }
  public putPciAddress(value: TemplateV2TemplateVersionSpecVmSpecGpusPciAddress[] | cdktf.IResolvable) {
    this._pciAddress.internalValue = value;
  }
  public resetPciAddress() {
    this._pciAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddressInput() {
    return this._pciAddress.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGpusList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGpus[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGpusOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
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
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#user_data TemplateV2#user_data}
  */
  readonly userData?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#datasource_type TemplateV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#metadata TemplateV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#cloud_init_script TemplateV2#cloud_init_script}
  */
  readonly cloudInitScript?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
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

  // datasource_type - computed: true, optional: true, required: false
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
  private _cloudInitScript = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
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
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#unattend_xml TemplateV2#unattend_xml}
  */
  readonly unattendXml?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
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
  private _customKeyValues = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
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
  private _unattendXml = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#install_type TemplateV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#sysprep_script TemplateV2#sysprep_script}
  */
  readonly sysprepScript?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
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
  private _sysprepScript = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#cloud_init TemplateV2#cloud_init}
  */
  readonly cloudInit?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#sysprep TemplateV2#sysprep}
  */
  readonly sysprep?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig | cdktf.IResolvable | undefined) {
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
  private _cloudInit = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
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
  private _sysprep = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#config TemplateV2#config}
  */
  readonly config?: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestCustomizationToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestCustomizationToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestCustomization | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomization | cdktf.IResolvable | undefined) {
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
  private _config = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomizationConfig[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecGuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestCustomizationOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecGuestTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#capabilities TemplateV2#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_enabled TemplateV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecGuestToolsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function templateV2TemplateVersionSpecVmSpecGuestToolsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecGuestTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecGuestToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecGuestTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecGuestTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._isEnabled = value.isEnabled;
    }
  }

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

export class TemplateV2TemplateVersionSpecVmSpecGuestToolsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecGuestTools[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecGuestToolsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecGuestToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecHostToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecHostToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecHost | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecHost | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecHostList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecHost[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecHostOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsLinks {
}

export function templateV2TemplateVersionSpecVmSpecNicsLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecNicsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsLinks | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_connected TemplateV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#mac_address TemplateV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#model TemplateV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#num_queues TemplateV2#num_queues}
  */
  readonly numQueues?: number;
}

export function templateV2TemplateVersionSpecVmSpecNicsBackingInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo | cdktf.IResolvable): any {
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


export function templateV2TemplateVersionSpecVmSpecNicsBackingInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo | cdktf.IResolvable | undefined) {
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

  // is_connected - computed: false, optional: true, required: false
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

export class TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddress {
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#should_assign_ip TemplateV2#should_assign_ip}
  */
  readonly shouldAssignIp?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_assign_ip: cdktf.booleanToTerraform(struct!.shouldAssignIp),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAssignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAssignIp = this._shouldAssignIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAssignIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAssignIp = value.shouldAssignIp;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // secondary_ip_address_list - computed: true, optional: false, required: false
  private _secondaryIpAddressList = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
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
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#prefix_length TemplateV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value: string;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined) {
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

  // prefix_length - computed: false, optional: true, required: false
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info {
  /**
  * learned_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#learned_ip_addresses TemplateV2#learned_ip_addresses}
  */
  readonly learnedIpAddresses?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learned_ip_addresses: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform, true)(struct!.learnedIpAddresses),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learned_ip_addresses: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform, true)(struct!.learnedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learnedIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnedIpAddresses = this._learnedIpAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = value.learnedIpAddresses;
    }
  }

  // learned_ip_addresses - computed: false, optional: true, required: false
  private _learnedIpAddresses = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
  public putLearnedIpAddresses(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable) {
    this._learnedIpAddresses.internalValue = value;
  }
  public resetLearnedIpAddresses() {
    this._learnedIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnedIpAddressesInput() {
    return this._learnedIpAddresses.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#network_function_nic_type TemplateV2#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#nic_type TemplateV2#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#should_allow_unknown_macs TemplateV2#should_allow_unknown_macs}
  */
  readonly shouldAllowUnknownMacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#trunked_vlans TemplateV2#trunked_vlans}
  */
  readonly trunkedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vlan_mode TemplateV2#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ipv4_config TemplateV2#ipv4_config}
  */
  readonly ipv4Config?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config[] | cdktf.IResolvable;
  /**
  * ipv4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ipv4_info TemplateV2#ipv4_info}
  */
  readonly ipv4Info?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info[] | cdktf.IResolvable;
  /**
  * network_function_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#network_function_chain TemplateV2#network_function_chain}
  */
  readonly networkFunctionChain?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#subnet TemplateV2#subnet}
  */
  readonly subnet?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo | cdktf.IResolvable): any {
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
    ipv4_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigToTerraform, true)(struct!.ipv4Config),
    ipv4_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoToTerraform, true)(struct!.ipv4Info),
    network_function_chain: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainToTerraform, true)(struct!.networkFunctionChain),
    subnet: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetToTerraform, true)(struct!.subnet),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsNetworkInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigToHclTerraform, true)(struct!.ipv4Config),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigList",
    },
    ipv4_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoToHclTerraform, true)(struct!.ipv4Info),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoList",
    },
    network_function_chain: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainToHclTerraform, true)(struct!.networkFunctionChain),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainList",
    },
    subnet: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo | cdktf.IResolvable | undefined {
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
    if (this._ipv4Info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Info = this._ipv4Info?.internalValue;
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._shouldAllowUnknownMacs = undefined;
      this._trunkedVlans = undefined;
      this._vlanMode = undefined;
      this._ipv4Config.internalValue = undefined;
      this._ipv4Info.internalValue = undefined;
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
      this._ipv4Info.internalValue = value.ipv4Info;
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
  private _ipv4Config = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // ipv4_info - computed: false, optional: true, required: false
  private _ipv4Info = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }
  public putIpv4Info(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoIpv4Info[] | cdktf.IResolvable) {
    this._ipv4Info.internalValue = value;
  }
  public resetIpv4Info() {
    this._ipv4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InfoInput() {
    return this._ipv4Info.internalValue;
  }

  // network_function_chain - computed: false, optional: true, required: false
  private _networkFunctionChain = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }
  public putNetworkFunctionChain(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable) {
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
  private _subnet = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoSubnet[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecNics {
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#backing_info TemplateV2#backing_info}
  */
  readonly backingInfo?: TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#network_info TemplateV2#network_info}
  */
  readonly networkInfo?: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecNicsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsBackingInfoToTerraform, true)(struct!.backingInfo),
    network_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function templateV2TemplateVersionSpecVmSpecNicsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoList",
    },
    network_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._backingInfo.internalValue = value.backingInfo;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecNicsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new TemplateV2TemplateVersionSpecVmSpecNicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: TemplateV2TemplateVersionSpecVmSpecNicsBackingInfo[] | cdktf.IResolvable) {
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
  private _networkInfo = new TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: TemplateV2TemplateVersionSpecVmSpecNicsNetworkInfo[] | cdktf.IResolvable) {
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

export class TemplateV2TemplateVersionSpecVmSpecNicsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecNics[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecNicsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecOwnershipInfo {
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#owner TemplateV2#owner}
  */
  readonly owner?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecOwnershipInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerToTerraform, true)(struct!.owner),
  }
}


export function templateV2TemplateVersionSpecVmSpecOwnershipInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecOwnershipInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecOwnershipInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner.internalValue = value.owner;
    }
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecOwnershipInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecOwnershipInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecOwnershipInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevicesLinks {
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevicesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesLinks | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#device_ext_id TemplateV2#device_ext_id}
  */
  readonly deviceExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_ext_id: cdktf.stringToTerraform(struct!.deviceExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceExtId = this._deviceExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceExtId = value.deviceExtId;
    }
  }

  // device_ext_id - computed: true, optional: true, required: false
  private _deviceExtId?: string; 
  public get deviceExtId() {
    return this.getStringAttribute('device_ext_id');
  }
  public set deviceExtId(value: string) {
    this._deviceExtId = value;
  }
  public resetDeviceExtId() {
    this._deviceExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceExtIdInput() {
    return this._deviceExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo {
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#device TemplateV2#device}
  */
  readonly device?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceToTerraform, true)(struct!.device),
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device.internalValue = value.device;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device = new TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#device_ext_id TemplateV2#device_ext_id}
  */
  readonly deviceExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_ext_id: cdktf.stringToTerraform(struct!.deviceExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceExtId = this._deviceExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceExtId = value.deviceExtId;
    }
  }

  // device_ext_id - computed: true, optional: true, required: false
  private _deviceExtId?: string; 
  public get deviceExtId() {
    return this.getStringAttribute('device_ext_id');
  }
  public set deviceExtId(value: string) {
    this._deviceExtId = value;
  }
  public resetDeviceExtId() {
    this._deviceExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceExtIdInput() {
    return this._deviceExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo {
  /**
  * pcie_device_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#pcie_device_reference TemplateV2#pcie_device_reference}
  */
  readonly pcieDeviceReference?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcie_device_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToTerraform, true)(struct!.pcieDeviceReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcie_device_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceToHclTerraform, true)(struct!.pcieDeviceReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcieDeviceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcieDeviceReference = this._pcieDeviceReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pcieDeviceReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pcieDeviceReference.internalValue = value.pcieDeviceReference;
    }
  }

  // pcie_device_reference - computed: false, optional: true, required: false
  private _pcieDeviceReference = new TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReferenceList(this, "pcie_device_reference", false);
  public get pcieDeviceReference() {
    return this._pcieDeviceReference;
  }
  public putPcieDeviceReference(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoPcieDeviceReference[] | cdktf.IResolvable) {
    this._pcieDeviceReference.internalValue = value;
  }
  public resetPcieDeviceReference() {
    this._pcieDeviceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieDeviceReferenceInput() {
    return this._pcieDeviceReference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecPciDevices {
  /**
  * assigned_device_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#assigned_device_info TemplateV2#assigned_device_info}
  */
  readonly assignedDeviceInfo?: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo[] | cdktf.IResolvable;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#backing_info TemplateV2#backing_info}
  */
  readonly backingInfo?: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecPciDevicesToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_device_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoToTerraform, true)(struct!.assignedDeviceInfo),
    backing_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoToTerraform, true)(struct!.backingInfo),
  }
}


export function templateV2TemplateVersionSpecVmSpecPciDevicesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecPciDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_device_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoToHclTerraform, true)(struct!.assignedDeviceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoList",
    },
    backing_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecPciDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedDeviceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedDeviceInfo = this._assignedDeviceInfo?.internalValue;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecPciDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedDeviceInfo.internalValue = undefined;
      this._backingInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedDeviceInfo.internalValue = value.assignedDeviceInfo;
      this._backingInfo.internalValue = value.backingInfo;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecPciDevicesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // assigned_device_info - computed: false, optional: true, required: false
  private _assignedDeviceInfo = new TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfoList(this, "assigned_device_info", false);
  public get assignedDeviceInfo() {
    return this._assignedDeviceInfo;
  }
  public putAssignedDeviceInfo(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesAssignedDeviceInfo[] | cdktf.IResolvable) {
    this._assignedDeviceInfo.internalValue = value;
  }
  public resetAssignedDeviceInfo() {
    this._assignedDeviceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedDeviceInfoInput() {
    return this._assignedDeviceInfo.internalValue;
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: TemplateV2TemplateVersionSpecVmSpecPciDevicesBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecPciDevicesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecPciDevices[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecPciDevicesOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy | cdktf.IResolvable): any {
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

export class TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy | cdktf.IResolvable | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#policy TemplateV2#policy}
  */
  readonly policy?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecProtectionPolicyStateToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyToTerraform, true)(struct!.policy),
  }
}


export function templateV2TemplateVersionSpecVmSpecProtectionPolicyStateToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStatePolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecSerialPortsLinks {
}

export function templateV2TemplateVersionSpecVmSpecSerialPortsLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSerialPortsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecSerialPortsLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSerialPortsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecSerialPortsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecSerialPortsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecSerialPortsLinks | undefined) {
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

export class TemplateV2TemplateVersionSpecVmSpecSerialPortsLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecSerialPortsLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecSerialPortsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecSerialPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_connected TemplateV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecSerialPortsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSerialPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
  }
}


export function templateV2TemplateVersionSpecVmSpecSerialPortsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSerialPorts | cdktf.IResolvable): any {
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
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecSerialPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecSerialPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecSerialPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._isConnected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._isConnected = value.isConnected;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecSerialPortsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecSerialPortsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecSerialPorts[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecSerialPortsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecSerialPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#entity_type TemplateV2#entity_type}
  */
  readonly entityType?: string;
}

export function templateV2TemplateVersionSpecVmSpecSourceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
  }
}


export function templateV2TemplateVersionSpecVmSpecSourceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
    }
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecSourceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecSource[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecSourceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#throttled_iops TemplateV2#throttled_iops}
  */
  readonly throttledIops?: number;
}

export function templateV2TemplateVersionSpecVmSpecStorageConfigQosConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    throttled_iops: cdktf.numberToTerraform(struct!.throttledIops),
  }
}


export function templateV2TemplateVersionSpecVmSpecStorageConfigQosConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    throttled_iops: {
      value: cdktf.numberToHclTerraform(struct!.throttledIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._throttledIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttledIops = this._throttledIops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._throttledIops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._throttledIops = value.throttledIops;
    }
  }

  // throttled_iops - computed: true, optional: true, required: false
  private _throttledIops?: number; 
  public get throttledIops() {
    return this.getNumberAttribute('throttled_iops');
  }
  public set throttledIops(value: number) {
    this._throttledIops = value;
  }
  public resetThrottledIops() {
    this._throttledIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttledIopsInput() {
    return this._throttledIops;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_flash_mode_enabled TemplateV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * qos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#qos_config TemplateV2#qos_config}
  */
  readonly qosConfig?: TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecStorageConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
    qos_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecStorageConfigQosConfigToTerraform, true)(struct!.qosConfig),
  }
}


export function templateV2TemplateVersionSpecVmSpecStorageConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecStorageConfig | cdktf.IResolvable): any {
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
    qos_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecStorageConfigQosConfigToHclTerraform, true)(struct!.qosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    if (this._qosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosConfig = this._qosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
      this._qosConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
      this._qosConfig.internalValue = value.qosConfig;
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

  // qos_config - computed: false, optional: true, required: false
  private _qosConfig = new TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfigList(this, "qos_config", false);
  public get qosConfig() {
    return this._qosConfig;
  }
  public putQosConfig(value: TemplateV2TemplateVersionSpecVmSpecStorageConfigQosConfig[] | cdktf.IResolvable) {
    this._qosConfig.internalValue = value;
  }
  public resetQosConfig() {
    this._qosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosConfigInput() {
    return this._qosConfig.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecStorageConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecStorageConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecVtpmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_vtpm_enabled TemplateV2#is_vtpm_enabled}
  */
  readonly isVtpmEnabled?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecVtpmConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecVtpmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_vtpm_enabled: cdktf.booleanToTerraform(struct!.isVtpmEnabled),
  }
}


export function templateV2TemplateVersionSpecVmSpecVtpmConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecVtpmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_vtpm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isVtpmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecVtpmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecVtpmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isVtpmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVtpmEnabled = this._isVtpmEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecVtpmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isVtpmEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isVtpmEnabled = value.isVtpmEnabled;
    }
  }

  // is_vtpm_enabled - computed: true, optional: true, required: false
  private _isVtpmEnabled?: boolean | cdktf.IResolvable; 
  public get isVtpmEnabled() {
    return this.getBooleanAttribute('is_vtpm_enabled');
  }
  public set isVtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._isVtpmEnabled = value;
  }
  public resetIsVtpmEnabled() {
    this._isVtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVtpmEnabledInput() {
    return this._isVtpmEnabled;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecVtpmConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecVtpmConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecVtpmConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecVtpmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#bios_uuid TemplateV2#bios_uuid}
  */
  readonly biosUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#description TemplateV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#enabled_cpu_features TemplateV2#enabled_cpu_features}
  */
  readonly enabledCpuFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#generation_uuid TemplateV2#generation_uuid}
  */
  readonly generationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#hardware_clock_timezone TemplateV2#hardware_clock_timezone}
  */
  readonly hardwareClockTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_agent_vm TemplateV2#is_agent_vm}
  */
  readonly isAgentVm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_branding_enabled TemplateV2#is_branding_enabled}
  */
  readonly isBrandingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_cpu_hotplug_enabled TemplateV2#is_cpu_hotplug_enabled}
  */
  readonly isCpuHotplugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_cpu_passthrough_enabled TemplateV2#is_cpu_passthrough_enabled}
  */
  readonly isCpuPassthroughEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_gpu_console_enabled TemplateV2#is_gpu_console_enabled}
  */
  readonly isGpuConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_memory_overcommit_enabled TemplateV2#is_memory_overcommit_enabled}
  */
  readonly isMemoryOvercommitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_scsi_controller_enabled TemplateV2#is_scsi_controller_enabled}
  */
  readonly isScsiControllerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_vcpu_hard_pinning_enabled TemplateV2#is_vcpu_hard_pinning_enabled}
  */
  readonly isVcpuHardPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_vga_console_enabled TemplateV2#is_vga_console_enabled}
  */
  readonly isVgaConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#machine_type TemplateV2#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#memory_size_bytes TemplateV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#num_cores_per_socket TemplateV2#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#num_numa_nodes TemplateV2#num_numa_nodes}
  */
  readonly numNumaNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#num_sockets TemplateV2#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#num_threads_per_core TemplateV2#num_threads_per_core}
  */
  readonly numThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#power_state TemplateV2#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#protection_type TemplateV2#protection_type}
  */
  readonly protectionType?: string;
  /**
  * apc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#apc_config TemplateV2#apc_config}
  */
  readonly apcConfig?: TemplateV2TemplateVersionSpecVmSpecApcConfig[] | cdktf.IResolvable;
  /**
  * availability_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#availability_zone TemplateV2#availability_zone}
  */
  readonly availabilityZone?: TemplateV2TemplateVersionSpecVmSpecAvailabilityZone[] | cdktf.IResolvable;
  /**
  * boot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#boot_config TemplateV2#boot_config}
  */
  readonly bootConfig?: TemplateV2TemplateVersionSpecVmSpecBootConfig[] | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#categories TemplateV2#categories}
  */
  readonly categories?: TemplateV2TemplateVersionSpecVmSpecCategories[] | cdktf.IResolvable;
  /**
  * cd_roms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#cd_roms TemplateV2#cd_roms}
  */
  readonly cdRoms?: TemplateV2TemplateVersionSpecVmSpecCdRoms[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#cluster TemplateV2#cluster}
  */
  readonly cluster?: TemplateV2TemplateVersionSpecVmSpecCluster[] | cdktf.IResolvable;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#disks TemplateV2#disks}
  */
  readonly disks?: TemplateV2TemplateVersionSpecVmSpecDisks[] | cdktf.IResolvable;
  /**
  * gpus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#gpus TemplateV2#gpus}
  */
  readonly gpus?: TemplateV2TemplateVersionSpecVmSpecGpus[] | cdktf.IResolvable;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#guest_customization TemplateV2#guest_customization}
  */
  readonly guestCustomization?: TemplateV2TemplateVersionSpecVmSpecGuestCustomization[] | cdktf.IResolvable;
  /**
  * guest_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#guest_tools TemplateV2#guest_tools}
  */
  readonly guestTools?: TemplateV2TemplateVersionSpecVmSpecGuestTools[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#host TemplateV2#host}
  */
  readonly host?: TemplateV2TemplateVersionSpecVmSpecHost[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#nics TemplateV2#nics}
  */
  readonly nics?: TemplateV2TemplateVersionSpecVmSpecNics[] | cdktf.IResolvable;
  /**
  * ownership_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#ownership_info TemplateV2#ownership_info}
  */
  readonly ownershipInfo?: TemplateV2TemplateVersionSpecVmSpecOwnershipInfo[] | cdktf.IResolvable;
  /**
  * pci_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#pci_devices TemplateV2#pci_devices}
  */
  readonly pciDevices?: TemplateV2TemplateVersionSpecVmSpecPciDevices[] | cdktf.IResolvable;
  /**
  * protection_policy_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#protection_policy_state TemplateV2#protection_policy_state}
  */
  readonly protectionPolicyState?: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState[] | cdktf.IResolvable;
  /**
  * serial_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#serial_ports TemplateV2#serial_ports}
  */
  readonly serialPorts?: TemplateV2TemplateVersionSpecVmSpecSerialPorts[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#source TemplateV2#source}
  */
  readonly source?: TemplateV2TemplateVersionSpecVmSpecSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#storage_config TemplateV2#storage_config}
  */
  readonly storageConfig?: TemplateV2TemplateVersionSpecVmSpecStorageConfig[] | cdktf.IResolvable;
  /**
  * vtpm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vtpm_config TemplateV2#vtpm_config}
  */
  readonly vtpmConfig?: TemplateV2TemplateVersionSpecVmSpecVtpmConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bios_uuid: cdktf.stringToTerraform(struct!.biosUuid),
    description: cdktf.stringToTerraform(struct!.description),
    enabled_cpu_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledCpuFeatures),
    generation_uuid: cdktf.stringToTerraform(struct!.generationUuid),
    hardware_clock_timezone: cdktf.stringToTerraform(struct!.hardwareClockTimezone),
    is_agent_vm: cdktf.booleanToTerraform(struct!.isAgentVm),
    is_branding_enabled: cdktf.booleanToTerraform(struct!.isBrandingEnabled),
    is_cpu_hotplug_enabled: cdktf.booleanToTerraform(struct!.isCpuHotplugEnabled),
    is_cpu_passthrough_enabled: cdktf.booleanToTerraform(struct!.isCpuPassthroughEnabled),
    is_gpu_console_enabled: cdktf.booleanToTerraform(struct!.isGpuConsoleEnabled),
    is_memory_overcommit_enabled: cdktf.booleanToTerraform(struct!.isMemoryOvercommitEnabled),
    is_scsi_controller_enabled: cdktf.booleanToTerraform(struct!.isScsiControllerEnabled),
    is_vcpu_hard_pinning_enabled: cdktf.booleanToTerraform(struct!.isVcpuHardPinningEnabled),
    is_vga_console_enabled: cdktf.booleanToTerraform(struct!.isVgaConsoleEnabled),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    memory_size_bytes: cdktf.numberToTerraform(struct!.memorySizeBytes),
    name: cdktf.stringToTerraform(struct!.name),
    num_cores_per_socket: cdktf.numberToTerraform(struct!.numCoresPerSocket),
    num_numa_nodes: cdktf.numberToTerraform(struct!.numNumaNodes),
    num_sockets: cdktf.numberToTerraform(struct!.numSockets),
    num_threads_per_core: cdktf.numberToTerraform(struct!.numThreadsPerCore),
    power_state: cdktf.stringToTerraform(struct!.powerState),
    protection_type: cdktf.stringToTerraform(struct!.protectionType),
    apc_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecApcConfigToTerraform, true)(struct!.apcConfig),
    availability_zone: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecAvailabilityZoneToTerraform, true)(struct!.availabilityZone),
    boot_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigToTerraform, true)(struct!.bootConfig),
    categories: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCategoriesToTerraform, true)(struct!.categories),
    cd_roms: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsToTerraform, true)(struct!.cdRoms),
    cluster: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecClusterToTerraform, true)(struct!.cluster),
    disks: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecDisksToTerraform, true)(struct!.disks),
    gpus: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGpusToTerraform, true)(struct!.gpus),
    guest_customization: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestCustomizationToTerraform, true)(struct!.guestCustomization),
    guest_tools: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecGuestToolsToTerraform, true)(struct!.guestTools),
    host: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecHostToTerraform, true)(struct!.host),
    nics: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecNicsToTerraform, true)(struct!.nics),
    ownership_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecOwnershipInfoToTerraform, true)(struct!.ownershipInfo),
    pci_devices: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecPciDevicesToTerraform, true)(struct!.pciDevices),
    protection_policy_state: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecProtectionPolicyStateToTerraform, true)(struct!.protectionPolicyState),
    serial_ports: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecSerialPortsToTerraform, true)(struct!.serialPorts),
    source: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecSourceToTerraform, true)(struct!.source),
    storage_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecStorageConfigToTerraform, true)(struct!.storageConfig),
    vtpm_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecVtpmConfigToTerraform, true)(struct!.vtpmConfig),
  }
}


export function templateV2TemplateVersionSpecVmSpecToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bios_uuid: {
      value: cdktf.stringToHclTerraform(struct!.biosUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_cpu_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledCpuFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    generation_uuid: {
      value: cdktf.stringToHclTerraform(struct!.generationUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_clock_timezone: {
      value: cdktf.stringToHclTerraform(struct!.hardwareClockTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_agent_vm: {
      value: cdktf.booleanToHclTerraform(struct!.isAgentVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_branding_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isBrandingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_cpu_hotplug_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCpuHotplugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_cpu_passthrough_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCpuPassthroughEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_gpu_console_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isGpuConsoleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_memory_overcommit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMemoryOvercommitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_scsi_controller_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isScsiControllerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_vcpu_hard_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isVcpuHardPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_vga_console_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isVgaConsoleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numCoresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_numa_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numNumaNodes),
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
    num_threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.numThreadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_state: {
      value: cdktf.stringToHclTerraform(struct!.powerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_type: {
      value: cdktf.stringToHclTerraform(struct!.protectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apc_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecApcConfigToHclTerraform, true)(struct!.apcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecApcConfigList",
    },
    availability_zone: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecAvailabilityZoneToHclTerraform, true)(struct!.availabilityZone),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneList",
    },
    boot_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigToHclTerraform, true)(struct!.bootConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigList",
    },
    categories: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCategoriesList",
    },
    cd_roms: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsToHclTerraform, true)(struct!.cdRoms),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsList",
    },
    cluster: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecClusterList",
    },
    disks: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecDisksToHclTerraform, true)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecDisksList",
    },
    gpus: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGpusToHclTerraform, true)(struct!.gpus),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGpusList",
    },
    guest_customization: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestCustomizationToHclTerraform, true)(struct!.guestCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestCustomizationList",
    },
    guest_tools: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecGuestToolsToHclTerraform, true)(struct!.guestTools),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecGuestToolsList",
    },
    host: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecHostList",
    },
    nics: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecNicsToHclTerraform, true)(struct!.nics),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecNicsList",
    },
    ownership_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecOwnershipInfoToHclTerraform, true)(struct!.ownershipInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecOwnershipInfoList",
    },
    pci_devices: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecPciDevicesToHclTerraform, true)(struct!.pciDevices),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecPciDevicesList",
    },
    protection_policy_state: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecProtectionPolicyStateToHclTerraform, true)(struct!.protectionPolicyState),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateList",
    },
    serial_ports: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecSerialPortsToHclTerraform, true)(struct!.serialPorts),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecSerialPortsList",
    },
    source: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecStorageConfigList",
    },
    vtpm_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecVtpmConfigToHclTerraform, true)(struct!.vtpmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecVtpmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biosUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.biosUuid = this._biosUuid;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledCpuFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledCpuFeatures = this._enabledCpuFeatures;
    }
    if (this._generationUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationUuid = this._generationUuid;
    }
    if (this._hardwareClockTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareClockTimezone = this._hardwareClockTimezone;
    }
    if (this._isAgentVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAgentVm = this._isAgentVm;
    }
    if (this._isBrandingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBrandingEnabled = this._isBrandingEnabled;
    }
    if (this._isCpuHotplugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCpuHotplugEnabled = this._isCpuHotplugEnabled;
    }
    if (this._isCpuPassthroughEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCpuPassthroughEnabled = this._isCpuPassthroughEnabled;
    }
    if (this._isGpuConsoleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGpuConsoleEnabled = this._isGpuConsoleEnabled;
    }
    if (this._isMemoryOvercommitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMemoryOvercommitEnabled = this._isMemoryOvercommitEnabled;
    }
    if (this._isScsiControllerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isScsiControllerEnabled = this._isScsiControllerEnabled;
    }
    if (this._isVcpuHardPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVcpuHardPinningEnabled = this._isVcpuHardPinningEnabled;
    }
    if (this._isVgaConsoleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVgaConsoleEnabled = this._isVgaConsoleEnabled;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._memorySizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeBytes = this._memorySizeBytes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numCoresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCoresPerSocket = this._numCoresPerSocket;
    }
    if (this._numNumaNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNumaNodes = this._numNumaNodes;
    }
    if (this._numSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSockets = this._numSockets;
    }
    if (this._numThreadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.numThreadsPerCore = this._numThreadsPerCore;
    }
    if (this._powerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerState = this._powerState;
    }
    if (this._protectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionType = this._protectionType;
    }
    if (this._apcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcConfig = this._apcConfig?.internalValue;
    }
    if (this._availabilityZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone?.internalValue;
    }
    if (this._bootConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootConfig = this._bootConfig?.internalValue;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._cdRoms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdRoms = this._cdRoms?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._gpus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus?.internalValue;
    }
    if (this._guestCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestCustomization = this._guestCustomization?.internalValue;
    }
    if (this._guestTools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestTools = this._guestTools?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._nics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics?.internalValue;
    }
    if (this._ownershipInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownershipInfo = this._ownershipInfo?.internalValue;
    }
    if (this._pciDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciDevices = this._pciDevices?.internalValue;
    }
    if (this._protectionPolicyState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionPolicyState = this._protectionPolicyState?.internalValue;
    }
    if (this._serialPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialPorts = this._serialPorts?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._vtpmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtpmConfig = this._vtpmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biosUuid = undefined;
      this._description = undefined;
      this._enabledCpuFeatures = undefined;
      this._generationUuid = undefined;
      this._hardwareClockTimezone = undefined;
      this._isAgentVm = undefined;
      this._isBrandingEnabled = undefined;
      this._isCpuHotplugEnabled = undefined;
      this._isCpuPassthroughEnabled = undefined;
      this._isGpuConsoleEnabled = undefined;
      this._isMemoryOvercommitEnabled = undefined;
      this._isScsiControllerEnabled = undefined;
      this._isVcpuHardPinningEnabled = undefined;
      this._isVgaConsoleEnabled = undefined;
      this._machineType = undefined;
      this._memorySizeBytes = undefined;
      this._name = undefined;
      this._numCoresPerSocket = undefined;
      this._numNumaNodes = undefined;
      this._numSockets = undefined;
      this._numThreadsPerCore = undefined;
      this._powerState = undefined;
      this._protectionType = undefined;
      this._apcConfig.internalValue = undefined;
      this._availabilityZone.internalValue = undefined;
      this._bootConfig.internalValue = undefined;
      this._categories.internalValue = undefined;
      this._cdRoms.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._disks.internalValue = undefined;
      this._gpus.internalValue = undefined;
      this._guestCustomization.internalValue = undefined;
      this._guestTools.internalValue = undefined;
      this._host.internalValue = undefined;
      this._nics.internalValue = undefined;
      this._ownershipInfo.internalValue = undefined;
      this._pciDevices.internalValue = undefined;
      this._protectionPolicyState.internalValue = undefined;
      this._serialPorts.internalValue = undefined;
      this._source.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._vtpmConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biosUuid = value.biosUuid;
      this._description = value.description;
      this._enabledCpuFeatures = value.enabledCpuFeatures;
      this._generationUuid = value.generationUuid;
      this._hardwareClockTimezone = value.hardwareClockTimezone;
      this._isAgentVm = value.isAgentVm;
      this._isBrandingEnabled = value.isBrandingEnabled;
      this._isCpuHotplugEnabled = value.isCpuHotplugEnabled;
      this._isCpuPassthroughEnabled = value.isCpuPassthroughEnabled;
      this._isGpuConsoleEnabled = value.isGpuConsoleEnabled;
      this._isMemoryOvercommitEnabled = value.isMemoryOvercommitEnabled;
      this._isScsiControllerEnabled = value.isScsiControllerEnabled;
      this._isVcpuHardPinningEnabled = value.isVcpuHardPinningEnabled;
      this._isVgaConsoleEnabled = value.isVgaConsoleEnabled;
      this._machineType = value.machineType;
      this._memorySizeBytes = value.memorySizeBytes;
      this._name = value.name;
      this._numCoresPerSocket = value.numCoresPerSocket;
      this._numNumaNodes = value.numNumaNodes;
      this._numSockets = value.numSockets;
      this._numThreadsPerCore = value.numThreadsPerCore;
      this._powerState = value.powerState;
      this._protectionType = value.protectionType;
      this._apcConfig.internalValue = value.apcConfig;
      this._availabilityZone.internalValue = value.availabilityZone;
      this._bootConfig.internalValue = value.bootConfig;
      this._categories.internalValue = value.categories;
      this._cdRoms.internalValue = value.cdRoms;
      this._cluster.internalValue = value.cluster;
      this._disks.internalValue = value.disks;
      this._gpus.internalValue = value.gpus;
      this._guestCustomization.internalValue = value.guestCustomization;
      this._guestTools.internalValue = value.guestTools;
      this._host.internalValue = value.host;
      this._nics.internalValue = value.nics;
      this._ownershipInfo.internalValue = value.ownershipInfo;
      this._pciDevices.internalValue = value.pciDevices;
      this._protectionPolicyState.internalValue = value.protectionPolicyState;
      this._serialPorts.internalValue = value.serialPorts;
      this._source.internalValue = value.source;
      this._storageConfig.internalValue = value.storageConfig;
      this._vtpmConfig.internalValue = value.vtpmConfig;
    }
  }

  // bios_uuid - computed: true, optional: true, required: false
  private _biosUuid?: string; 
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }
  public set biosUuid(value: string) {
    this._biosUuid = value;
  }
  public resetBiosUuid() {
    this._biosUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosUuidInput() {
    return this._biosUuid;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // enabled_cpu_features - computed: true, optional: true, required: false
  private _enabledCpuFeatures?: string[]; 
  public get enabledCpuFeatures() {
    return this.getListAttribute('enabled_cpu_features');
  }
  public set enabledCpuFeatures(value: string[]) {
    this._enabledCpuFeatures = value;
  }
  public resetEnabledCpuFeatures() {
    this._enabledCpuFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCpuFeaturesInput() {
    return this._enabledCpuFeatures;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // generation_uuid - computed: true, optional: true, required: false
  private _generationUuid?: string; 
  public get generationUuid() {
    return this.getStringAttribute('generation_uuid');
  }
  public set generationUuid(value: string) {
    this._generationUuid = value;
  }
  public resetGenerationUuid() {
    this._generationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationUuidInput() {
    return this._generationUuid;
  }

  // hardware_clock_timezone - computed: true, optional: true, required: false
  private _hardwareClockTimezone?: string; 
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }
  public set hardwareClockTimezone(value: string) {
    this._hardwareClockTimezone = value;
  }
  public resetHardwareClockTimezone() {
    this._hardwareClockTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareClockTimezoneInput() {
    return this._hardwareClockTimezone;
  }

  // is_agent_vm - computed: true, optional: true, required: false
  private _isAgentVm?: boolean | cdktf.IResolvable; 
  public get isAgentVm() {
    return this.getBooleanAttribute('is_agent_vm');
  }
  public set isAgentVm(value: boolean | cdktf.IResolvable) {
    this._isAgentVm = value;
  }
  public resetIsAgentVm() {
    this._isAgentVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAgentVmInput() {
    return this._isAgentVm;
  }

  // is_branding_enabled - computed: true, optional: true, required: false
  private _isBrandingEnabled?: boolean | cdktf.IResolvable; 
  public get isBrandingEnabled() {
    return this.getBooleanAttribute('is_branding_enabled');
  }
  public set isBrandingEnabled(value: boolean | cdktf.IResolvable) {
    this._isBrandingEnabled = value;
  }
  public resetIsBrandingEnabled() {
    this._isBrandingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBrandingEnabledInput() {
    return this._isBrandingEnabled;
  }

  // is_cpu_hotplug_enabled - computed: true, optional: true, required: false
  private _isCpuHotplugEnabled?: boolean | cdktf.IResolvable; 
  public get isCpuHotplugEnabled() {
    return this.getBooleanAttribute('is_cpu_hotplug_enabled');
  }
  public set isCpuHotplugEnabled(value: boolean | cdktf.IResolvable) {
    this._isCpuHotplugEnabled = value;
  }
  public resetIsCpuHotplugEnabled() {
    this._isCpuHotplugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCpuHotplugEnabledInput() {
    return this._isCpuHotplugEnabled;
  }

  // is_cpu_passthrough_enabled - computed: true, optional: true, required: false
  private _isCpuPassthroughEnabled?: boolean | cdktf.IResolvable; 
  public get isCpuPassthroughEnabled() {
    return this.getBooleanAttribute('is_cpu_passthrough_enabled');
  }
  public set isCpuPassthroughEnabled(value: boolean | cdktf.IResolvable) {
    this._isCpuPassthroughEnabled = value;
  }
  public resetIsCpuPassthroughEnabled() {
    this._isCpuPassthroughEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCpuPassthroughEnabledInput() {
    return this._isCpuPassthroughEnabled;
  }

  // is_cross_cluster_migration_in_progress - computed: true, optional: false, required: false
  public get isCrossClusterMigrationInProgress() {
    return this.getBooleanAttribute('is_cross_cluster_migration_in_progress');
  }

  // is_gpu_console_enabled - computed: true, optional: true, required: false
  private _isGpuConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get isGpuConsoleEnabled() {
    return this.getBooleanAttribute('is_gpu_console_enabled');
  }
  public set isGpuConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._isGpuConsoleEnabled = value;
  }
  public resetIsGpuConsoleEnabled() {
    this._isGpuConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGpuConsoleEnabledInput() {
    return this._isGpuConsoleEnabled;
  }

  // is_live_migrate_capable - computed: true, optional: false, required: false
  public get isLiveMigrateCapable() {
    return this.getBooleanAttribute('is_live_migrate_capable');
  }

  // is_memory_overcommit_enabled - computed: true, optional: true, required: false
  private _isMemoryOvercommitEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryOvercommitEnabled() {
    return this.getBooleanAttribute('is_memory_overcommit_enabled');
  }
  public set isMemoryOvercommitEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryOvercommitEnabled = value;
  }
  public resetIsMemoryOvercommitEnabled() {
    this._isMemoryOvercommitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryOvercommitEnabledInput() {
    return this._isMemoryOvercommitEnabled;
  }

  // is_scsi_controller_enabled - computed: true, optional: true, required: false
  private _isScsiControllerEnabled?: boolean | cdktf.IResolvable; 
  public get isScsiControllerEnabled() {
    return this.getBooleanAttribute('is_scsi_controller_enabled');
  }
  public set isScsiControllerEnabled(value: boolean | cdktf.IResolvable) {
    this._isScsiControllerEnabled = value;
  }
  public resetIsScsiControllerEnabled() {
    this._isScsiControllerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScsiControllerEnabledInput() {
    return this._isScsiControllerEnabled;
  }

  // is_vcpu_hard_pinning_enabled - computed: true, optional: true, required: false
  private _isVcpuHardPinningEnabled?: boolean | cdktf.IResolvable; 
  public get isVcpuHardPinningEnabled() {
    return this.getBooleanAttribute('is_vcpu_hard_pinning_enabled');
  }
  public set isVcpuHardPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._isVcpuHardPinningEnabled = value;
  }
  public resetIsVcpuHardPinningEnabled() {
    this._isVcpuHardPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVcpuHardPinningEnabledInput() {
    return this._isVcpuHardPinningEnabled;
  }

  // is_vga_console_enabled - computed: true, optional: true, required: false
  private _isVgaConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get isVgaConsoleEnabled() {
    return this.getBooleanAttribute('is_vga_console_enabled');
  }
  public set isVgaConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._isVgaConsoleEnabled = value;
  }
  public resetIsVgaConsoleEnabled() {
    this._isVgaConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVgaConsoleEnabledInput() {
    return this._isVgaConsoleEnabled;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // num_numa_nodes - computed: true, optional: true, required: false
  private _numNumaNodes?: number; 
  public get numNumaNodes() {
    return this.getNumberAttribute('num_numa_nodes');
  }
  public set numNumaNodes(value: number) {
    this._numNumaNodes = value;
  }
  public resetNumNumaNodes() {
    this._numNumaNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNumaNodesInput() {
    return this._numNumaNodes;
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

  // power_state - computed: true, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // protection_type - computed: true, optional: true, required: false
  private _protectionType?: string; 
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }
  public set protectionType(value: string) {
    this._protectionType = value;
  }
  public resetProtectionType() {
    this._protectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionTypeInput() {
    return this._protectionType;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // apc_config - computed: false, optional: true, required: false
  private _apcConfig = new TemplateV2TemplateVersionSpecVmSpecApcConfigList(this, "apc_config", false);
  public get apcConfig() {
    return this._apcConfig;
  }
  public putApcConfig(value: TemplateV2TemplateVersionSpecVmSpecApcConfig[] | cdktf.IResolvable) {
    this._apcConfig.internalValue = value;
  }
  public resetApcConfig() {
    this._apcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcConfigInput() {
    return this._apcConfig.internalValue;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone = new TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneList(this, "availability_zone", false);
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public putAvailabilityZone(value: TemplateV2TemplateVersionSpecVmSpecAvailabilityZone[] | cdktf.IResolvable) {
    this._availabilityZone.internalValue = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone.internalValue;
  }

  // boot_config - computed: false, optional: true, required: false
  private _bootConfig = new TemplateV2TemplateVersionSpecVmSpecBootConfigList(this, "boot_config", false);
  public get bootConfig() {
    return this._bootConfig;
  }
  public putBootConfig(value: TemplateV2TemplateVersionSpecVmSpecBootConfig[] | cdktf.IResolvable) {
    this._bootConfig.internalValue = value;
  }
  public resetBootConfig() {
    this._bootConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigInput() {
    return this._bootConfig.internalValue;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new TemplateV2TemplateVersionSpecVmSpecCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: TemplateV2TemplateVersionSpecVmSpecCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // cd_roms - computed: false, optional: true, required: false
  private _cdRoms = new TemplateV2TemplateVersionSpecVmSpecCdRomsList(this, "cd_roms", false);
  public get cdRoms() {
    return this._cdRoms;
  }
  public putCdRoms(value: TemplateV2TemplateVersionSpecVmSpecCdRoms[] | cdktf.IResolvable) {
    this._cdRoms.internalValue = value;
  }
  public resetCdRoms() {
    this._cdRoms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdRomsInput() {
    return this._cdRoms.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TemplateV2TemplateVersionSpecVmSpecClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TemplateV2TemplateVersionSpecVmSpecCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new TemplateV2TemplateVersionSpecVmSpecDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: TemplateV2TemplateVersionSpecVmSpecDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new TemplateV2TemplateVersionSpecVmSpecGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: TemplateV2TemplateVersionSpecVmSpecGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new TemplateV2TemplateVersionSpecVmSpecGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: TemplateV2TemplateVersionSpecVmSpecGuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }

  // guest_tools - computed: false, optional: true, required: false
  private _guestTools = new TemplateV2TemplateVersionSpecVmSpecGuestToolsList(this, "guest_tools", false);
  public get guestTools() {
    return this._guestTools;
  }
  public putGuestTools(value: TemplateV2TemplateVersionSpecVmSpecGuestTools[] | cdktf.IResolvable) {
    this._guestTools.internalValue = value;
  }
  public resetGuestTools() {
    this._guestTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestToolsInput() {
    return this._guestTools.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new TemplateV2TemplateVersionSpecVmSpecHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: TemplateV2TemplateVersionSpecVmSpecHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new TemplateV2TemplateVersionSpecVmSpecNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: TemplateV2TemplateVersionSpecVmSpecNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // ownership_info - computed: false, optional: true, required: false
  private _ownershipInfo = new TemplateV2TemplateVersionSpecVmSpecOwnershipInfoList(this, "ownership_info", false);
  public get ownershipInfo() {
    return this._ownershipInfo;
  }
  public putOwnershipInfo(value: TemplateV2TemplateVersionSpecVmSpecOwnershipInfo[] | cdktf.IResolvable) {
    this._ownershipInfo.internalValue = value;
  }
  public resetOwnershipInfo() {
    this._ownershipInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipInfoInput() {
    return this._ownershipInfo.internalValue;
  }

  // pci_devices - computed: false, optional: true, required: false
  private _pciDevices = new TemplateV2TemplateVersionSpecVmSpecPciDevicesList(this, "pci_devices", false);
  public get pciDevices() {
    return this._pciDevices;
  }
  public putPciDevices(value: TemplateV2TemplateVersionSpecVmSpecPciDevices[] | cdktf.IResolvable) {
    this._pciDevices.internalValue = value;
  }
  public resetPciDevices() {
    this._pciDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciDevicesInput() {
    return this._pciDevices.internalValue;
  }

  // protection_policy_state - computed: false, optional: true, required: false
  private _protectionPolicyState = new TemplateV2TemplateVersionSpecVmSpecProtectionPolicyStateList(this, "protection_policy_state", false);
  public get protectionPolicyState() {
    return this._protectionPolicyState;
  }
  public putProtectionPolicyState(value: TemplateV2TemplateVersionSpecVmSpecProtectionPolicyState[] | cdktf.IResolvable) {
    this._protectionPolicyState.internalValue = value;
  }
  public resetProtectionPolicyState() {
    this._protectionPolicyState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyStateInput() {
    return this._protectionPolicyState.internalValue;
  }

  // serial_ports - computed: false, optional: true, required: false
  private _serialPorts = new TemplateV2TemplateVersionSpecVmSpecSerialPortsList(this, "serial_ports", false);
  public get serialPorts() {
    return this._serialPorts;
  }
  public putSerialPorts(value: TemplateV2TemplateVersionSpecVmSpecSerialPorts[] | cdktf.IResolvable) {
    this._serialPorts.internalValue = value;
  }
  public resetSerialPorts() {
    this._serialPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortsInput() {
    return this._serialPorts.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new TemplateV2TemplateVersionSpecVmSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: TemplateV2TemplateVersionSpecVmSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new TemplateV2TemplateVersionSpecVmSpecStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: TemplateV2TemplateVersionSpecVmSpecStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // vtpm_config - computed: false, optional: true, required: false
  private _vtpmConfig = new TemplateV2TemplateVersionSpecVmSpecVtpmConfigList(this, "vtpm_config", false);
  public get vtpmConfig() {
    return this._vtpmConfig;
  }
  public putVtpmConfig(value: TemplateV2TemplateVersionSpecVmSpecVtpmConfig[] | cdktf.IResolvable) {
    this._vtpmConfig.internalValue = value;
  }
  public resetVtpmConfig() {
    this._vtpmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmConfigInput() {
    return this._vtpmConfig.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpec[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_active_version TemplateV2#is_active_version}
  */
  readonly isActiveVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_gc_override_enabled TemplateV2#is_gc_override_enabled}
  */
  readonly isGcOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#version_description TemplateV2#version_description}
  */
  readonly versionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#version_name TemplateV2#version_name}
  */
  readonly versionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#version_source_discriminator TemplateV2#version_source_discriminator}
  */
  readonly versionSourceDiscriminator?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#created_by TemplateV2#created_by}
  */
  readonly createdBy?: TemplateV2TemplateVersionSpecCreatedBy[] | cdktf.IResolvable;
  /**
  * version_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#version_source TemplateV2#version_source}
  */
  readonly versionSource: TemplateV2TemplateVersionSpecVersionSource;
  /**
  * vm_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#vm_spec TemplateV2#vm_spec}
  */
  readonly vmSpec?: TemplateV2TemplateVersionSpecVmSpec[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecToTerraform(struct?: TemplateV2TemplateVersionSpecOutputReference | TemplateV2TemplateVersionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_active_version: cdktf.booleanToTerraform(struct!.isActiveVersion),
    is_gc_override_enabled: cdktf.booleanToTerraform(struct!.isGcOverrideEnabled),
    version_description: cdktf.stringToTerraform(struct!.versionDescription),
    version_name: cdktf.stringToTerraform(struct!.versionName),
    version_source_discriminator: cdktf.stringToTerraform(struct!.versionSourceDiscriminator),
    created_by: cdktf.listMapper(templateV2TemplateVersionSpecCreatedByToTerraform, true)(struct!.createdBy),
    version_source: templateV2TemplateVersionSpecVersionSourceToTerraform(struct!.versionSource),
    vm_spec: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecToTerraform, true)(struct!.vmSpec),
  }
}


export function templateV2TemplateVersionSpecToHclTerraform(struct?: TemplateV2TemplateVersionSpecOutputReference | TemplateV2TemplateVersionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_active_version: {
      value: cdktf.booleanToHclTerraform(struct!.isActiveVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_gc_override_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isGcOverrideEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version_description: {
      value: cdktf.stringToHclTerraform(struct!.versionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_source_discriminator: {
      value: cdktf.stringToHclTerraform(struct!.versionSourceDiscriminator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_by: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecCreatedByToHclTerraform, true)(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecCreatedByList",
    },
    version_source: {
      value: templateV2TemplateVersionSpecVersionSourceToHclTerraform(struct!.versionSource),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceList",
    },
    vm_spec: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecToHclTerraform, true)(struct!.vmSpec),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateV2TemplateVersionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isActiveVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActiveVersion = this._isActiveVersion;
    }
    if (this._isGcOverrideEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGcOverrideEnabled = this._isGcOverrideEnabled;
    }
    if (this._versionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionDescription = this._versionDescription;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    if (this._versionSourceDiscriminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionSourceDiscriminator = this._versionSourceDiscriminator;
    }
    if (this._createdBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy?.internalValue;
    }
    if (this._versionSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionSource = this._versionSource?.internalValue;
    }
    if (this._vmSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSpec = this._vmSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isActiveVersion = undefined;
      this._isGcOverrideEnabled = undefined;
      this._versionDescription = undefined;
      this._versionName = undefined;
      this._versionSourceDiscriminator = undefined;
      this._createdBy.internalValue = undefined;
      this._versionSource.internalValue = undefined;
      this._vmSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isActiveVersion = value.isActiveVersion;
      this._isGcOverrideEnabled = value.isGcOverrideEnabled;
      this._versionDescription = value.versionDescription;
      this._versionName = value.versionName;
      this._versionSourceDiscriminator = value.versionSourceDiscriminator;
      this._createdBy.internalValue = value.createdBy;
      this._versionSource.internalValue = value.versionSource;
      this._vmSpec.internalValue = value.vmSpec;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // is_active_version - computed: false, optional: true, required: false
  private _isActiveVersion?: boolean | cdktf.IResolvable; 
  public get isActiveVersion() {
    return this.getBooleanAttribute('is_active_version');
  }
  public set isActiveVersion(value: boolean | cdktf.IResolvable) {
    this._isActiveVersion = value;
  }
  public resetIsActiveVersion() {
    this._isActiveVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveVersionInput() {
    return this._isActiveVersion;
  }

  // is_gc_override_enabled - computed: true, optional: true, required: false
  private _isGcOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get isGcOverrideEnabled() {
    return this.getBooleanAttribute('is_gc_override_enabled');
  }
  public set isGcOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._isGcOverrideEnabled = value;
  }
  public resetIsGcOverrideEnabled() {
    this._isGcOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGcOverrideEnabledInput() {
    return this._isGcOverrideEnabled;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_name - computed: true, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // version_source_discriminator - computed: true, optional: true, required: false
  private _versionSourceDiscriminator?: string; 
  public get versionSourceDiscriminator() {
    return this.getStringAttribute('version_source_discriminator');
  }
  public set versionSourceDiscriminator(value: string) {
    this._versionSourceDiscriminator = value;
  }
  public resetVersionSourceDiscriminator() {
    this._versionSourceDiscriminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSourceDiscriminatorInput() {
    return this._versionSourceDiscriminator;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new TemplateV2TemplateVersionSpecCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: TemplateV2TemplateVersionSpecCreatedBy[] | cdktf.IResolvable) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // version_source - computed: false, optional: false, required: true
  private _versionSource = new TemplateV2TemplateVersionSpecVersionSourceOutputReference(this, "version_source");
  public get versionSource() {
    return this._versionSource;
  }
  public putVersionSource(value: TemplateV2TemplateVersionSpecVersionSource) {
    this._versionSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSourceInput() {
    return this._versionSource.internalValue;
  }

  // vm_spec - computed: false, optional: true, required: false
  private _vmSpec = new TemplateV2TemplateVersionSpecVmSpecList(this, "vm_spec", false);
  public get vmSpec() {
    return this._vmSpec;
  }
  public putVmSpec(value: TemplateV2TemplateVersionSpecVmSpec[] | cdktf.IResolvable) {
    this._vmSpec.internalValue = value;
  }
  public resetVmSpec() {
    this._vmSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSpecInput() {
    return this._vmSpec.internalValue;
  }
}
export interface TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2UpdatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2UpdatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2UpdatedByAdditionalAttributesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2UpdatedByAdditionalAttributesValueToTerraform(struct?: TemplateV2UpdatedByAdditionalAttributesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2UpdatedByAdditionalAttributesValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2UpdatedByAdditionalAttributesValueToHclTerraform(struct?: TemplateV2UpdatedByAdditionalAttributesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2UpdatedByAdditionalAttributesValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2UpdatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2UpdatedByAdditionalAttributesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2UpdatedByAdditionalAttributesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2UpdatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2UpdatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2UpdatedByAdditionalAttributesValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2UpdatedByAdditionalAttributesValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2UpdatedByAdditionalAttributesValueOutputReference {
    return new TemplateV2UpdatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2UpdatedByAdditionalAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2UpdatedByAdditionalAttributesValue[] | cdktf.IResolvable;
}

export function templateV2UpdatedByAdditionalAttributesToTerraform(struct?: TemplateV2UpdatedByAdditionalAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2UpdatedByAdditionalAttributesValueToTerraform, true)(struct!.value),
  }
}


export function templateV2UpdatedByAdditionalAttributesToHclTerraform(struct?: TemplateV2UpdatedByAdditionalAttributes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(templateV2UpdatedByAdditionalAttributesValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2UpdatedByAdditionalAttributesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2UpdatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2UpdatedByAdditionalAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2UpdatedByAdditionalAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2UpdatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2UpdatedByAdditionalAttributesValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2UpdatedByAdditionalAttributesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2UpdatedByAdditionalAttributes[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2UpdatedByAdditionalAttributesOutputReference {
    return new TemplateV2UpdatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2UpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#creation_type TemplateV2#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#description TemplateV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#display_name TemplateV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#email_id TemplateV2#email_id}
  */
  readonly emailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#first_name TemplateV2#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#idp_id TemplateV2#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#is_force_reset_password_enabled TemplateV2#is_force_reset_password_enabled}
  */
  readonly isForceResetPasswordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#last_name TemplateV2#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#locale TemplateV2#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#middle_initial TemplateV2#middle_initial}
  */
  readonly middleInitial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#password TemplateV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#region TemplateV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#status TemplateV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#user_type TemplateV2#user_type}
  */
  readonly userType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#username TemplateV2#username}
  */
  readonly username: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#additional_attributes TemplateV2#additional_attributes}
  */
  readonly additionalAttributes?: TemplateV2UpdatedByAdditionalAttributes[] | cdktf.IResolvable;
}

export function templateV2UpdatedByToTerraform(struct?: TemplateV2UpdatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email_id: cdktf.stringToTerraform(struct!.emailId),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    is_force_reset_password_enabled: cdktf.booleanToTerraform(struct!.isForceResetPasswordEnabled),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    locale: cdktf.stringToTerraform(struct!.locale),
    middle_initial: cdktf.stringToTerraform(struct!.middleInitial),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    user_type: cdktf.stringToTerraform(struct!.userType),
    username: cdktf.stringToTerraform(struct!.username),
    additional_attributes: cdktf.listMapper(templateV2UpdatedByAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function templateV2UpdatedByToHclTerraform(struct?: TemplateV2UpdatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_id: {
      value: cdktf.stringToHclTerraform(struct!.emailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_force_reset_password_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isForceResetPasswordEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle_initial: {
      value: cdktf.stringToHclTerraform(struct!.middleInitial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktf.listMapperHcl(templateV2UpdatedByAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2UpdatedByAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2UpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2UpdatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._emailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailId = this._emailId;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._isForceResetPasswordEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceResetPasswordEnabled = this._isForceResetPasswordEnabled;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._middleInitial !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleInitial = this._middleInitial;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2UpdatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._emailId = undefined;
      this._firstName = undefined;
      this._idpId = undefined;
      this._isForceResetPasswordEnabled = undefined;
      this._lastName = undefined;
      this._locale = undefined;
      this._middleInitial = undefined;
      this._password = undefined;
      this._region = undefined;
      this._status = undefined;
      this._userType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationType = value.creationType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._emailId = value.emailId;
      this._firstName = value.firstName;
      this._idpId = value.idpId;
      this._isForceResetPasswordEnabled = value.isForceResetPasswordEnabled;
      this._lastName = value.lastName;
      this._locale = value.locale;
      this._middleInitial = value.middleInitial;
      this._password = value.password;
      this._region = value.region;
      this._status = value.status;
      this._userType = value.userType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // creation_type - computed: true, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_id - computed: true, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // idp_id - computed: true, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // is_force_reset_password_enabled - computed: true, optional: true, required: false
  private _isForceResetPasswordEnabled?: boolean | cdktf.IResolvable; 
  public get isForceResetPasswordEnabled() {
    return this.getBooleanAttribute('is_force_reset_password_enabled');
  }
  public set isForceResetPasswordEnabled(value: boolean | cdktf.IResolvable) {
    this._isForceResetPasswordEnabled = value;
  }
  public resetIsForceResetPasswordEnabled() {
    this._isForceResetPasswordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceResetPasswordEnabledInput() {
    return this._isForceResetPasswordEnabled;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // middle_initial - computed: true, optional: true, required: false
  private _middleInitial?: string; 
  public get middleInitial() {
    return this.getStringAttribute('middle_initial');
  }
  public set middleInitial(value: string) {
    this._middleInitial = value;
  }
  public resetMiddleInitial() {
    this._middleInitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleInitialInput() {
    return this._middleInitial;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new TemplateV2UpdatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: TemplateV2UpdatedByAdditionalAttributes[] | cdktf.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}

export class TemplateV2UpdatedByList extends cdktf.ComplexList {
  public internalValue? : TemplateV2UpdatedBy[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2UpdatedByOutputReference {
    return new TemplateV2UpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
