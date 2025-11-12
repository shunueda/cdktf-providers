// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The availability zone where the instance will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#availability_zone CloudProjectInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Billing period - hourly | monthly 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#billing_period CloudProjectInstance#billing_period}
  */
  readonly billingPeriod: string;
  /**
  * Create multiple instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#bulk CloudProjectInstance#bulk}
  */
  readonly bulk?: number;
  /**
  * Instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#name CloudProjectInstance#name}
  */
  readonly name: string;
  /**
  * Instance region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#region CloudProjectInstance#region}
  */
  readonly region: string;
  /**
  * Service name of the resource representing the id of the cloud project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#service_name CloudProjectInstance#service_name}
  */
  readonly serviceName: string;
  /**
  * Configuration information or scripts to use upon launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#user_data CloudProjectInstance#user_data}
  */
  readonly userData?: string;
  /**
  * auto_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#auto_backup CloudProjectInstance#auto_backup}
  */
  readonly autoBackup?: CloudProjectInstanceAutoBackup;
  /**
  * boot_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#boot_from CloudProjectInstance#boot_from}
  */
  readonly bootFrom: CloudProjectInstanceBootFrom;
  /**
  * flavor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#flavor CloudProjectInstance#flavor}
  */
  readonly flavor: CloudProjectInstanceFlavor;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#group CloudProjectInstance#group}
  */
  readonly group?: CloudProjectInstanceGroup;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#network CloudProjectInstance#network}
  */
  readonly network: CloudProjectInstanceNetwork;
  /**
  * ssh_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#ssh_key CloudProjectInstance#ssh_key}
  */
  readonly sshKey?: CloudProjectInstanceSshKey;
  /**
  * ssh_key_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#ssh_key_create CloudProjectInstance#ssh_key_create}
  */
  readonly sshKeyCreate?: CloudProjectInstanceSshKeyCreate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#timeouts CloudProjectInstance#timeouts}
  */
  readonly timeouts?: CloudProjectInstanceTimeouts;
}
export interface CloudProjectInstanceAddresses {
}

export function cloudProjectInstanceAddressesToTerraform(struct?: CloudProjectInstanceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectInstanceAddressesToHclTerraform(struct?: CloudProjectInstanceAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectInstanceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectInstanceAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceAddresses | undefined) {
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class CloudProjectInstanceAddressesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudProjectInstanceAddressesOutputReference {
    return new CloudProjectInstanceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectInstanceAttachedVolumes {
}

export function cloudProjectInstanceAttachedVolumesToTerraform(struct?: CloudProjectInstanceAttachedVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectInstanceAttachedVolumesToHclTerraform(struct?: CloudProjectInstanceAttachedVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectInstanceAttachedVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectInstanceAttachedVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceAttachedVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class CloudProjectInstanceAttachedVolumesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudProjectInstanceAttachedVolumesOutputReference {
    return new CloudProjectInstanceAttachedVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectInstanceAutoBackup {
  /**
  * Unix cron pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#cron CloudProjectInstance#cron}
  */
  readonly cron: string;
  /**
  * Number of backup to keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#rotation CloudProjectInstance#rotation}
  */
  readonly rotation: number;
}

export function cloudProjectInstanceAutoBackupToTerraform(struct?: CloudProjectInstanceAutoBackupOutputReference | CloudProjectInstanceAutoBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
    rotation: cdktf.numberToTerraform(struct!.rotation),
  }
}


export function cloudProjectInstanceAutoBackupToHclTerraform(struct?: CloudProjectInstanceAutoBackupOutputReference | CloudProjectInstanceAutoBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation: {
      value: cdktf.numberToHclTerraform(struct!.rotation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceAutoBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceAutoBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._rotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotation = this._rotation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceAutoBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
      this._rotation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
      this._rotation = value.rotation;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // rotation - computed: false, optional: false, required: true
  private _rotation?: number; 
  public get rotation() {
    return this.getNumberAttribute('rotation');
  }
  public set rotation(value: number) {
    this._rotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationInput() {
    return this._rotation;
  }
}
export interface CloudProjectInstanceBootFrom {
  /**
  * Instance image id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#image_id CloudProjectInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * Instance volume id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#volume_id CloudProjectInstance#volume_id}
  */
  readonly volumeId?: string;
}

export function cloudProjectInstanceBootFromToTerraform(struct?: CloudProjectInstanceBootFromOutputReference | CloudProjectInstanceBootFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function cloudProjectInstanceBootFromToHclTerraform(struct?: CloudProjectInstanceBootFromOutputReference | CloudProjectInstanceBootFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceBootFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceBootFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceBootFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageId = value.imageId;
      this._volumeId = value.volumeId;
    }
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface CloudProjectInstanceFlavor {
  /**
  * Flavor id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#flavor_id CloudProjectInstance#flavor_id}
  */
  readonly flavorId: string;
}

export function cloudProjectInstanceFlavorToTerraform(struct?: CloudProjectInstanceFlavorOutputReference | CloudProjectInstanceFlavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor_id: cdktf.stringToTerraform(struct!.flavorId),
  }
}


export function cloudProjectInstanceFlavorToHclTerraform(struct?: CloudProjectInstanceFlavorOutputReference | CloudProjectInstanceFlavor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor_id: {
      value: cdktf.stringToHclTerraform(struct!.flavorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceFlavorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceFlavor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorId = this._flavorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceFlavor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flavorId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flavorId = value.flavorId;
    }
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }
}
export interface CloudProjectInstanceGroup {
  /**
  * Group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#group_id CloudProjectInstance#group_id}
  */
  readonly groupId?: string;
}

export function cloudProjectInstanceGroupToTerraform(struct?: CloudProjectInstanceGroupOutputReference | CloudProjectInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function cloudProjectInstanceGroupToHclTerraform(struct?: CloudProjectInstanceGroupOutputReference | CloudProjectInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface CloudProjectInstanceNetworkPrivateFloatingIp {
  /**
  * Floating IP ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#id CloudProjectInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudProjectInstanceNetworkPrivateFloatingIpToTerraform(struct?: CloudProjectInstanceNetworkPrivateFloatingIpOutputReference | CloudProjectInstanceNetworkPrivateFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudProjectInstanceNetworkPrivateFloatingIpToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateFloatingIpOutputReference | CloudProjectInstanceNetworkPrivateFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateFloatingIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateFloatingIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface CloudProjectInstanceNetworkPrivateFloatingIpCreate {
  /**
  * Floating IP description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#description CloudProjectInstance#description}
  */
  readonly description?: string;
}

export function cloudProjectInstanceNetworkPrivateFloatingIpCreateToTerraform(struct?: CloudProjectInstanceNetworkPrivateFloatingIpCreateOutputReference | CloudProjectInstanceNetworkPrivateFloatingIpCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function cloudProjectInstanceNetworkPrivateFloatingIpCreateToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateFloatingIpCreateOutputReference | CloudProjectInstanceNetworkPrivateFloatingIpCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateFloatingIpCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateFloatingIpCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateFloatingIpCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
    }
  }

  // description - computed: false, optional: true, required: false
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
}
export interface CloudProjectInstanceNetworkPrivateGateway {
  /**
  * Existing gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#id CloudProjectInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudProjectInstanceNetworkPrivateGatewayToTerraform(struct?: CloudProjectInstanceNetworkPrivateGatewayOutputReference | CloudProjectInstanceNetworkPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudProjectInstanceNetworkPrivateGatewayToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateGatewayOutputReference | CloudProjectInstanceNetworkPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface CloudProjectInstanceNetworkPrivateGatewayCreate {
  /**
  * Gateway model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#model CloudProjectInstance#model}
  */
  readonly model?: string;
  /**
  * Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#name CloudProjectInstance#name}
  */
  readonly name?: string;
}

export function cloudProjectInstanceNetworkPrivateGatewayCreateToTerraform(struct?: CloudProjectInstanceNetworkPrivateGatewayCreateOutputReference | CloudProjectInstanceNetworkPrivateGatewayCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudProjectInstanceNetworkPrivateGatewayCreateToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateGatewayCreateOutputReference | CloudProjectInstanceNetworkPrivateGatewayCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateGatewayCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateGatewayCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateGatewayCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._name = value.name;
    }
  }

  // model - computed: false, optional: true, required: false
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
}
export interface CloudProjectInstanceNetworkPrivateNetwork {
  /**
  * Existing network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#id CloudProjectInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Existing subnet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#subnet_id CloudProjectInstance#subnet_id}
  */
  readonly subnetId?: string;
}

export function cloudProjectInstanceNetworkPrivateNetworkToTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkOutputReference | CloudProjectInstanceNetworkPrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function cloudProjectInstanceNetworkPrivateNetworkToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkOutputReference | CloudProjectInstanceNetworkPrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._subnetId = value.subnetId;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface CloudProjectInstanceNetworkPrivateNetworkCreateSubnet {
  /**
  * Subnet range in CIDR notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#cidr CloudProjectInstance#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#enable_dhcp CloudProjectInstance#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * IP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#ip_version CloudProjectInstance#ip_version}
  */
  readonly ipVersion?: number;
}

export function cloudProjectInstanceNetworkPrivateNetworkCreateSubnetToTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkCreateSubnetOutputReference | CloudProjectInstanceNetworkPrivateNetworkCreateSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    ip_version: cdktf.numberToTerraform(struct!.ipVersion),
  }
}


export function cloudProjectInstanceNetworkPrivateNetworkCreateSubnetToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkCreateSubnetOutputReference | CloudProjectInstanceNetworkPrivateNetworkCreateSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_version: {
      value: cdktf.numberToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateNetworkCreateSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateNetworkCreateSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateNetworkCreateSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._enableDhcp = undefined;
      this._ipVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._enableDhcp = value.enableDhcp;
      this._ipVersion = value.ipVersion;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }
}
export interface CloudProjectInstanceNetworkPrivateNetworkCreate {
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#name CloudProjectInstance#name}
  */
  readonly name?: string;
  /**
  * Network vlan ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#vlan_id CloudProjectInstance#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#subnet CloudProjectInstance#subnet}
  */
  readonly subnet?: CloudProjectInstanceNetworkPrivateNetworkCreateSubnet;
}

export function cloudProjectInstanceNetworkPrivateNetworkCreateToTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkCreateOutputReference | CloudProjectInstanceNetworkPrivateNetworkCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    subnet: cloudProjectInstanceNetworkPrivateNetworkCreateSubnetToTerraform(struct!.subnet),
  }
}


export function cloudProjectInstanceNetworkPrivateNetworkCreateToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateNetworkCreateOutputReference | CloudProjectInstanceNetworkPrivateNetworkCreate): any {
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
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet: {
      value: cloudProjectInstanceNetworkPrivateNetworkCreateSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateNetworkCreateSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateNetworkCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivateNetworkCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivateNetworkCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._vlanId = undefined;
      this._subnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._vlanId = value.vlanId;
      this._subnet.internalValue = value.subnet;
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

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new CloudProjectInstanceNetworkPrivateNetworkCreateSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: CloudProjectInstanceNetworkPrivateNetworkCreateSubnet) {
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
export interface CloudProjectInstanceNetworkPrivate {
  /**
  * Instance IP in the private network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#ip CloudProjectInstance#ip}
  */
  readonly ip?: string;
  /**
  * floating_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#floating_ip CloudProjectInstance#floating_ip}
  */
  readonly floatingIp?: CloudProjectInstanceNetworkPrivateFloatingIp;
  /**
  * floating_ip_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#floating_ip_create CloudProjectInstance#floating_ip_create}
  */
  readonly floatingIpCreate?: CloudProjectInstanceNetworkPrivateFloatingIpCreate;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#gateway CloudProjectInstance#gateway}
  */
  readonly gateway?: CloudProjectInstanceNetworkPrivateGateway;
  /**
  * gateway_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#gateway_create CloudProjectInstance#gateway_create}
  */
  readonly gatewayCreate?: CloudProjectInstanceNetworkPrivateGatewayCreate;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#network CloudProjectInstance#network}
  */
  readonly network?: CloudProjectInstanceNetworkPrivateNetwork;
  /**
  * network_create block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#network_create CloudProjectInstance#network_create}
  */
  readonly networkCreate?: CloudProjectInstanceNetworkPrivateNetworkCreate;
}

export function cloudProjectInstanceNetworkPrivateToTerraform(struct?: CloudProjectInstanceNetworkPrivateOutputReference | CloudProjectInstanceNetworkPrivate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    floating_ip: cloudProjectInstanceNetworkPrivateFloatingIpToTerraform(struct!.floatingIp),
    floating_ip_create: cloudProjectInstanceNetworkPrivateFloatingIpCreateToTerraform(struct!.floatingIpCreate),
    gateway: cloudProjectInstanceNetworkPrivateGatewayToTerraform(struct!.gateway),
    gateway_create: cloudProjectInstanceNetworkPrivateGatewayCreateToTerraform(struct!.gatewayCreate),
    network: cloudProjectInstanceNetworkPrivateNetworkToTerraform(struct!.network),
    network_create: cloudProjectInstanceNetworkPrivateNetworkCreateToTerraform(struct!.networkCreate),
  }
}


export function cloudProjectInstanceNetworkPrivateToHclTerraform(struct?: CloudProjectInstanceNetworkPrivateOutputReference | CloudProjectInstanceNetworkPrivate): any {
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
    floating_ip: {
      value: cloudProjectInstanceNetworkPrivateFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateFloatingIpList",
    },
    floating_ip_create: {
      value: cloudProjectInstanceNetworkPrivateFloatingIpCreateToHclTerraform(struct!.floatingIpCreate),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateFloatingIpCreateList",
    },
    gateway: {
      value: cloudProjectInstanceNetworkPrivateGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateGatewayList",
    },
    gateway_create: {
      value: cloudProjectInstanceNetworkPrivateGatewayCreateToHclTerraform(struct!.gatewayCreate),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateGatewayCreateList",
    },
    network: {
      value: cloudProjectInstanceNetworkPrivateNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateNetworkList",
    },
    network_create: {
      value: cloudProjectInstanceNetworkPrivateNetworkCreateToHclTerraform(struct!.networkCreate),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateNetworkCreateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetworkPrivate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    if (this._floatingIpCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpCreate = this._floatingIpCreate?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._gatewayCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayCreate = this._gatewayCreate?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._networkCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkCreate = this._networkCreate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetworkPrivate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._floatingIp.internalValue = undefined;
      this._floatingIpCreate.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._gatewayCreate.internalValue = undefined;
      this._network.internalValue = undefined;
      this._networkCreate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._floatingIp.internalValue = value.floatingIp;
      this._floatingIpCreate.internalValue = value.floatingIpCreate;
      this._gateway.internalValue = value.gateway;
      this._gatewayCreate.internalValue = value.gatewayCreate;
      this._network.internalValue = value.network;
      this._networkCreate.internalValue = value.networkCreate;
    }
  }

  // ip - computed: false, optional: true, required: false
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

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new CloudProjectInstanceNetworkPrivateFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: CloudProjectInstanceNetworkPrivateFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // floating_ip_create - computed: false, optional: true, required: false
  private _floatingIpCreate = new CloudProjectInstanceNetworkPrivateFloatingIpCreateOutputReference(this, "floating_ip_create");
  public get floatingIpCreate() {
    return this._floatingIpCreate;
  }
  public putFloatingIpCreate(value: CloudProjectInstanceNetworkPrivateFloatingIpCreate) {
    this._floatingIpCreate.internalValue = value;
  }
  public resetFloatingIpCreate() {
    this._floatingIpCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpCreateInput() {
    return this._floatingIpCreate.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new CloudProjectInstanceNetworkPrivateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: CloudProjectInstanceNetworkPrivateGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // gateway_create - computed: false, optional: true, required: false
  private _gatewayCreate = new CloudProjectInstanceNetworkPrivateGatewayCreateOutputReference(this, "gateway_create");
  public get gatewayCreate() {
    return this._gatewayCreate;
  }
  public putGatewayCreate(value: CloudProjectInstanceNetworkPrivateGatewayCreate) {
    this._gatewayCreate.internalValue = value;
  }
  public resetGatewayCreate() {
    this._gatewayCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayCreateInput() {
    return this._gatewayCreate.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new CloudProjectInstanceNetworkPrivateNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: CloudProjectInstanceNetworkPrivateNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // network_create - computed: false, optional: true, required: false
  private _networkCreate = new CloudProjectInstanceNetworkPrivateNetworkCreateOutputReference(this, "network_create");
  public get networkCreate() {
    return this._networkCreate;
  }
  public putNetworkCreate(value: CloudProjectInstanceNetworkPrivateNetworkCreate) {
    this._networkCreate.internalValue = value;
  }
  public resetNetworkCreate() {
    this._networkCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCreateInput() {
    return this._networkCreate.internalValue;
  }
}
export interface CloudProjectInstanceNetwork {
  /**
  * Set the new instance as public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#public CloudProjectInstance#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#private CloudProjectInstance#private}
  */
  readonly private?: CloudProjectInstanceNetworkPrivate;
}

export function cloudProjectInstanceNetworkToTerraform(struct?: CloudProjectInstanceNetworkOutputReference | CloudProjectInstanceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public: cdktf.booleanToTerraform(struct!.public),
    private: cloudProjectInstanceNetworkPrivateToTerraform(struct!.private),
  }
}


export function cloudProjectInstanceNetworkToHclTerraform(struct?: CloudProjectInstanceNetworkOutputReference | CloudProjectInstanceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private: {
      value: cloudProjectInstanceNetworkPrivateToHclTerraform(struct!.private),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectInstanceNetworkPrivateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._private?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._public = undefined;
      this._private.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._public = value.public;
      this._private.internalValue = value.private;
    }
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // private - computed: false, optional: true, required: false
  private _private = new CloudProjectInstanceNetworkPrivateOutputReference(this, "private");
  public get private() {
    return this._private;
  }
  public putPrivate(value: CloudProjectInstanceNetworkPrivate) {
    this._private.internalValue = value;
  }
  public resetPrivate() {
    this._private.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private.internalValue;
  }
}
export interface CloudProjectInstanceSshKey {
  /**
  * SSH Key pair name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#name CloudProjectInstance#name}
  */
  readonly name: string;
}

export function cloudProjectInstanceSshKeyToTerraform(struct?: CloudProjectInstanceSshKeyOutputReference | CloudProjectInstanceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudProjectInstanceSshKeyToHclTerraform(struct?: CloudProjectInstanceSshKeyOutputReference | CloudProjectInstanceSshKey): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface CloudProjectInstanceSshKeyCreate {
  /**
  * SSH Key pair name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#name CloudProjectInstance#name}
  */
  readonly name: string;
  /**
  * SSH Public Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#public_key CloudProjectInstance#public_key}
  */
  readonly publicKey: string;
}

export function cloudProjectInstanceSshKeyCreateToTerraform(struct?: CloudProjectInstanceSshKeyCreateOutputReference | CloudProjectInstanceSshKeyCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function cloudProjectInstanceSshKeyCreateToHclTerraform(struct?: CloudProjectInstanceSshKeyCreateOutputReference | CloudProjectInstanceSshKeyCreate): any {
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
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceSshKeyCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectInstanceSshKeyCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceSshKeyCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._publicKey = value.publicKey;
    }
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

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface CloudProjectInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#create CloudProjectInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#default CloudProjectInstance#default}
  */
  readonly default?: string;
}

export function cloudProjectInstanceTimeoutsToTerraform(struct?: CloudProjectInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cloudProjectInstanceTimeoutsToHclTerraform(struct?: CloudProjectInstanceTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance ovh_cloud_project_instance}
*/
export class CloudProjectInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectInstance to import
  * @param importFromId The id of the existing CloudProjectInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_instance ovh_cloud_project_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_instance',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._billingPeriod = config.billingPeriod;
    this._bulk = config.bulk;
    this._name = config.name;
    this._region = config.region;
    this._serviceName = config.serviceName;
    this._userData = config.userData;
    this._autoBackup.internalValue = config.autoBackup;
    this._bootFrom.internalValue = config.bootFrom;
    this._flavor.internalValue = config.flavor;
    this._group.internalValue = config.group;
    this._network.internalValue = config.network;
    this._sshKey.internalValue = config.sshKey;
    this._sshKeyCreate.internalValue = config.sshKeyCreate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  private _addresses = new CloudProjectInstanceAddressesList(this, "addresses", true);
  public get addresses() {
    return this._addresses;
  }

  // attached_volumes - computed: true, optional: false, required: false
  private _attachedVolumes = new CloudProjectInstanceAttachedVolumesList(this, "attached_volumes", true);
  public get attachedVolumes() {
    return this._attachedVolumes;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // billing_period - computed: false, optional: false, required: true
  private _billingPeriod?: string; 
  public get billingPeriod() {
    return this.getStringAttribute('billing_period');
  }
  public set billingPeriod(value: string) {
    this._billingPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPeriodInput() {
    return this._billingPeriod;
  }

  // bulk - computed: false, optional: true, required: false
  private _bulk?: number; 
  public get bulk() {
    return this.getNumberAttribute('bulk');
  }
  public set bulk(value: number) {
    this._bulk = value;
  }
  public resetBulk() {
    this._bulk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkInput() {
    return this._bulk;
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // flavor_name - computed: true, optional: false, required: false
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_state - computed: true, optional: false, required: false
  public get taskState() {
    return this.getStringAttribute('task_state');
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // auto_backup - computed: false, optional: true, required: false
  private _autoBackup = new CloudProjectInstanceAutoBackupOutputReference(this, "auto_backup");
  public get autoBackup() {
    return this._autoBackup;
  }
  public putAutoBackup(value: CloudProjectInstanceAutoBackup) {
    this._autoBackup.internalValue = value;
  }
  public resetAutoBackup() {
    this._autoBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup.internalValue;
  }

  // boot_from - computed: false, optional: false, required: true
  private _bootFrom = new CloudProjectInstanceBootFromOutputReference(this, "boot_from");
  public get bootFrom() {
    return this._bootFrom;
  }
  public putBootFrom(value: CloudProjectInstanceBootFrom) {
    this._bootFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFromInput() {
    return this._bootFrom.internalValue;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor = new CloudProjectInstanceFlavorOutputReference(this, "flavor");
  public get flavor() {
    return this._flavor;
  }
  public putFlavor(value: CloudProjectInstanceFlavor) {
    this._flavor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new CloudProjectInstanceGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: CloudProjectInstanceGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new CloudProjectInstanceNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: CloudProjectInstanceNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey = new CloudProjectInstanceSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: CloudProjectInstanceSshKey) {
    this._sshKey.internalValue = value;
  }
  public resetSshKey() {
    this._sshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }

  // ssh_key_create - computed: false, optional: true, required: false
  private _sshKeyCreate = new CloudProjectInstanceSshKeyCreateOutputReference(this, "ssh_key_create");
  public get sshKeyCreate() {
    return this._sshKeyCreate;
  }
  public putSshKeyCreate(value: CloudProjectInstanceSshKeyCreate) {
    this._sshKeyCreate.internalValue = value;
  }
  public resetSshKeyCreate() {
    this._sshKeyCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyCreateInput() {
    return this._sshKeyCreate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectInstanceTimeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      billing_period: cdktf.stringToTerraform(this._billingPeriod),
      bulk: cdktf.numberToTerraform(this._bulk),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_name: cdktf.stringToTerraform(this._serviceName),
      user_data: cdktf.stringToTerraform(this._userData),
      auto_backup: cloudProjectInstanceAutoBackupToTerraform(this._autoBackup.internalValue),
      boot_from: cloudProjectInstanceBootFromToTerraform(this._bootFrom.internalValue),
      flavor: cloudProjectInstanceFlavorToTerraform(this._flavor.internalValue),
      group: cloudProjectInstanceGroupToTerraform(this._group.internalValue),
      network: cloudProjectInstanceNetworkToTerraform(this._network.internalValue),
      ssh_key: cloudProjectInstanceSshKeyToTerraform(this._sshKey.internalValue),
      ssh_key_create: cloudProjectInstanceSshKeyCreateToTerraform(this._sshKeyCreate.internalValue),
      timeouts: cloudProjectInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_period: {
        value: cdktf.stringToHclTerraform(this._billingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bulk: {
        value: cdktf.numberToHclTerraform(this._bulk),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_backup: {
        value: cloudProjectInstanceAutoBackupToHclTerraform(this._autoBackup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceAutoBackupList",
      },
      boot_from: {
        value: cloudProjectInstanceBootFromToHclTerraform(this._bootFrom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceBootFromList",
      },
      flavor: {
        value: cloudProjectInstanceFlavorToHclTerraform(this._flavor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceFlavorList",
      },
      group: {
        value: cloudProjectInstanceGroupToHclTerraform(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceGroupList",
      },
      network: {
        value: cloudProjectInstanceNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceNetworkList",
      },
      ssh_key: {
        value: cloudProjectInstanceSshKeyToHclTerraform(this._sshKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceSshKeyList",
      },
      ssh_key_create: {
        value: cloudProjectInstanceSshKeyCreateToHclTerraform(this._sshKeyCreate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectInstanceSshKeyCreateList",
      },
      timeouts: {
        value: cloudProjectInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
