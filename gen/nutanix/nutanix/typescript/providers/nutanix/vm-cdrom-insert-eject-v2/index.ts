// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmCdromInsertEjectV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#ext_id VmCdromInsertEjectV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#id VmCdromInsertEjectV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#vm_ext_id VmCdromInsertEjectV2#vm_ext_id}
  */
  readonly vmExtId: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#backing_info VmCdromInsertEjectV2#backing_info}
  */
  readonly backingInfo?: VmCdromInsertEjectV2BackingInfo[] | cdktf.IResolvable;
}
export interface VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#image_ext_id VmCdromInsertEjectV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
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

  // image_ext_id - computed: false, optional: true, required: false
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#bus_type VmCdromInsertEjectV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#index VmCdromInsertEjectV2#index}
  */
  readonly index?: number;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
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

  // bus_type - computed: false, optional: true, required: false
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
}

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#ext_id VmCdromInsertEjectV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
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

  // ext_id - computed: false, optional: true, required: false
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#disk_ext_id VmCdromInsertEjectV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#disk_address VmCdromInsertEjectV2#disk_address}
  */
  readonly diskAddress?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#vm_reference VmCdromInsertEjectV2#vm_reference}
  */
  readonly vmReference?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
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

  // disk_ext_id - computed: false, optional: true, required: false
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
  private _diskAddress = new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
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
  private _vmReference = new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#image_reference VmCdromInsertEjectV2#image_reference}
  */
  readonly imageReference?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#vm_disk_reference VmCdromInsertEjectV2#vm_disk_reference}
  */
  readonly vmDiskReference?: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceReferenceToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSourceReference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSourceReference | cdktf.IResolvable | undefined) {
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
  private _imageReference = new VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
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
  private _vmDiskReference = new VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: VmCdromInsertEjectV2BackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSourceReference[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceReferenceOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#reference VmCdromInsertEjectV2#reference}
  */
  readonly reference?: VmCdromInsertEjectV2BackingInfoDataSourceReference[] | cdktf.IResolvable;
}

export function vmCdromInsertEjectV2BackingInfoDataSourceToTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function vmCdromInsertEjectV2BackingInfoDataSourceToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCdromInsertEjectV2BackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoDataSource | cdktf.IResolvable | undefined) {
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
  private _reference = new VmCdromInsertEjectV2BackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: VmCdromInsertEjectV2BackingInfoDataSourceReference[] | cdktf.IResolvable) {
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

export class VmCdromInsertEjectV2BackingInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoDataSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoDataSourceOutputReference {
    return new VmCdromInsertEjectV2BackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#is_flash_mode_enabled VmCdromInsertEjectV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function vmCdromInsertEjectV2BackingInfoStorageConfigToTerraform(struct?: VmCdromInsertEjectV2BackingInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function vmCdromInsertEjectV2BackingInfoStorageConfigToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoStorageConfig | cdktf.IResolvable): any {
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

export class VmCdromInsertEjectV2BackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoStorageConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoStorageConfig | cdktf.IResolvable | undefined) {
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

  // is_flash_mode_enabled - computed: false, optional: true, required: false
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

export class VmCdromInsertEjectV2BackingInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoStorageConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoStorageConfigOutputReference {
    return new VmCdromInsertEjectV2BackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#ext_id VmCdromInsertEjectV2#ext_id}
  */
  readonly extId?: string;
}

export function vmCdromInsertEjectV2BackingInfoStorageContainerToTerraform(struct?: VmCdromInsertEjectV2BackingInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function vmCdromInsertEjectV2BackingInfoStorageContainerToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfoStorageContainer | cdktf.IResolvable): any {
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

export class VmCdromInsertEjectV2BackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfoStorageContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfoStorageContainer | cdktf.IResolvable | undefined) {
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

  // ext_id - computed: false, optional: true, required: false
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

export class VmCdromInsertEjectV2BackingInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfoStorageContainer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoStorageContainerOutputReference {
    return new VmCdromInsertEjectV2BackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmCdromInsertEjectV2BackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#disk_size_bytes VmCdromInsertEjectV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#data_source VmCdromInsertEjectV2#data_source}
  */
  readonly dataSource?: VmCdromInsertEjectV2BackingInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#storage_config VmCdromInsertEjectV2#storage_config}
  */
  readonly storageConfig?: VmCdromInsertEjectV2BackingInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#storage_container VmCdromInsertEjectV2#storage_container}
  */
  readonly storageContainer?: VmCdromInsertEjectV2BackingInfoStorageContainer[] | cdktf.IResolvable;
}

export function vmCdromInsertEjectV2BackingInfoToTerraform(struct?: VmCdromInsertEjectV2BackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function vmCdromInsertEjectV2BackingInfoToHclTerraform(struct?: VmCdromInsertEjectV2BackingInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "VmCdromInsertEjectV2BackingInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCdromInsertEjectV2BackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCdromInsertEjectV2BackingInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmCdromInsertEjectV2BackingInfo | cdktf.IResolvable | undefined) {
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

  // disk_size_bytes - computed: false, optional: true, required: false
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

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new VmCdromInsertEjectV2BackingInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: VmCdromInsertEjectV2BackingInfoDataSource[] | cdktf.IResolvable) {
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
  private _storageConfig = new VmCdromInsertEjectV2BackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VmCdromInsertEjectV2BackingInfoStorageConfig[] | cdktf.IResolvable) {
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
  private _storageContainer = new VmCdromInsertEjectV2BackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: VmCdromInsertEjectV2BackingInfoStorageContainer[] | cdktf.IResolvable) {
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

export class VmCdromInsertEjectV2BackingInfoList extends cdktf.ComplexList {
  public internalValue? : VmCdromInsertEjectV2BackingInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VmCdromInsertEjectV2BackingInfoOutputReference {
    return new VmCdromInsertEjectV2BackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2 nutanix_vm_cdrom_insert_eject_v2}
*/
export class VmCdromInsertEjectV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_vm_cdrom_insert_eject_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmCdromInsertEjectV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmCdromInsertEjectV2 to import
  * @param importFromId The id of the existing VmCdromInsertEjectV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmCdromInsertEjectV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_vm_cdrom_insert_eject_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_cdrom_insert_eject_v2 nutanix_vm_cdrom_insert_eject_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmCdromInsertEjectV2Config
  */
  public constructor(scope: Construct, id: string, config: VmCdromInsertEjectV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_vm_cdrom_insert_eject_v2',
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
    this._extId = config.extId;
    this._id = config.id;
    this._vmExtId = config.vmExtId;
    this._backingInfo.internalValue = config.backingInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new VmCdromInsertEjectV2BackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: VmCdromInsertEjectV2BackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      vm_ext_id: cdktf.stringToTerraform(this._vmExtId),
      backing_info: cdktf.listMapper(vmCdromInsertEjectV2BackingInfoToTerraform, true)(this._backingInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      vm_ext_id: {
        value: cdktf.stringToHclTerraform(this._vmExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backing_info: {
        value: cdktf.listMapperHcl(vmCdromInsertEjectV2BackingInfoToHclTerraform, true)(this._backingInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCdromInsertEjectV2BackingInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
