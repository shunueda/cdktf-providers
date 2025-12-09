// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * A boolean indicating whether to allow application ports on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#allow_app_ports InstanceV2#allow_app_ports}
  */
  readonly allowAppPorts?: boolean | cdktf.IResolvable;
  /**
  * The availability zone in which to create the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#availability_zone InstanceV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The ID of the flavor to be used for the instance, determining its compute and memory, for example 'g1-standard-2-4'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#flavor_id InstanceV2#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#id InstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the key pair to be associated with the instance for SSH access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#keypair_name InstanceV2#keypair_name}
  */
  readonly keypairName?: string;
  /**
  * A map containing metadata, for example tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#metadata InstanceV2#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#name InstanceV2#name}
  */
  readonly name?: string;
  /**
  * A template used to generate the instance name. This field cannot be used with 'name_templates'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#name_template InstanceV2#name_template}
  */
  readonly nameTemplate?: string;
  /**
  * The password to be used for accessing the instance. 
  * 								This parameter is used to set the password either for the "Admin" user on 
  * 								a Windows VM orthe default user or a new user on a Linux VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#password InstanceV2#password}
  */
  readonly password?: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#project_id InstanceV2#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#project_name InstanceV2#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#region_id InstanceV2#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#region_name InstanceV2#region_name}
  */
  readonly regionName?: string;
  /**
  * The ID (uuid) of the server group to which the instance should belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#server_group InstanceV2#server_group}
  */
  readonly serverGroup?: string;
  /**
  * The current status of the instance. This is computed automatically and can be used to track the instance's state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#status InstanceV2#status}
  */
  readonly status?: string;
  /**
  * A field for specifying user data to be used for configuring the instance at launch time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#user_data InstanceV2#user_data}
  */
  readonly userData?: string;
  /**
  * The username to be used for accessing the instance. Required with password.
  * 								This parameter is used to set the user on a Linux VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#username InstanceV2#username}
  */
  readonly username?: string;
  /**
  * The current virtual machine state of the instance, 
  * allowing you to start or stop the VM. Possible values are stopped and active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#vm_state InstanceV2#vm_state}
  */
  readonly vmState?: string;
  /**
  * boot_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#boot_volumes InstanceV2#boot_volumes}
  */
  readonly bootVolumes: InstanceV2BootVolumes[] | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#configuration InstanceV2#configuration}
  */
  readonly configuration?: InstanceV2Configuration[] | cdktf.IResolvable;
  /**
  * data_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#data_volumes InstanceV2#data_volumes}
  */
  readonly dataVolumes?: InstanceV2DataVolumes[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#interfaces InstanceV2#interfaces}
  */
  readonly interfaces: InstanceV2Interfaces[] | cdktf.IResolvable;
}
export interface InstanceV2BootVolumes {
  /**
  * The block device attachment tag (exposed in the metadata).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#attachment_tag InstanceV2#attachment_tag}
  */
  readonly attachmentTag?: string;
  /**
  * If boot_index==0 volumes can not detached. It is used only when creating an instance. This attribute can't be updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#boot_index InstanceV2#boot_index}
  */
  readonly bootIndex: number;
  /**
  * The ID of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#volume_id InstanceV2#volume_id}
  */
  readonly volumeId: string;
}

export function instanceV2BootVolumesToTerraform(struct?: InstanceV2BootVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_tag: cdktf.stringToTerraform(struct!.attachmentTag),
    boot_index: cdktf.numberToTerraform(struct!.bootIndex),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function instanceV2BootVolumesToHclTerraform(struct?: InstanceV2BootVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_tag: {
      value: cdktf.stringToHclTerraform(struct!.attachmentTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_index: {
      value: cdktf.numberToHclTerraform(struct!.bootIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class InstanceV2BootVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceV2BootVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentTag = this._attachmentTag;
    }
    if (this._bootIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootIndex = this._bootIndex;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceV2BootVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentTag = undefined;
      this._bootIndex = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentTag = value.attachmentTag;
      this._bootIndex = value.bootIndex;
      this._volumeId = value.volumeId;
    }
  }

  // attachment_tag - computed: false, optional: true, required: false
  private _attachmentTag?: string; 
  public get attachmentTag() {
    return this.getStringAttribute('attachment_tag');
  }
  public set attachmentTag(value: string) {
    this._attachmentTag = value;
  }
  public resetAttachmentTag() {
    this._attachmentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTagInput() {
    return this._attachmentTag;
  }

  // boot_index - computed: false, optional: false, required: true
  private _bootIndex?: number; 
  public get bootIndex() {
    return this.getNumberAttribute('boot_index');
  }
  public set bootIndex(value: number) {
    this._bootIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIndexInput() {
    return this._bootIndex;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class InstanceV2BootVolumesList extends cdktf.ComplexList {
  public internalValue? : InstanceV2BootVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): InstanceV2BootVolumesOutputReference {
    return new InstanceV2BootVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceV2Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#key InstanceV2#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#value InstanceV2#value}
  */
  readonly value: string;
}

export function instanceV2ConfigurationToTerraform(struct?: InstanceV2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function instanceV2ConfigurationToHclTerraform(struct?: InstanceV2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class InstanceV2ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceV2Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceV2Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class InstanceV2ConfigurationList extends cdktf.ComplexList {
  public internalValue? : InstanceV2Configuration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): InstanceV2ConfigurationOutputReference {
    return new InstanceV2ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceV2DataVolumes {
  /**
  * The block device attachment tag (exposed in the metadata).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#attachment_tag InstanceV2#attachment_tag}
  */
  readonly attachmentTag?: string;
  /**
  * The ID of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#volume_id InstanceV2#volume_id}
  */
  readonly volumeId: string;
}

export function instanceV2DataVolumesToTerraform(struct?: InstanceV2DataVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_tag: cdktf.stringToTerraform(struct!.attachmentTag),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function instanceV2DataVolumesToHclTerraform(struct?: InstanceV2DataVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_tag: {
      value: cdktf.stringToHclTerraform(struct!.attachmentTag),
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

export class InstanceV2DataVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceV2DataVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentTag = this._attachmentTag;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceV2DataVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentTag = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentTag = value.attachmentTag;
      this._volumeId = value.volumeId;
    }
  }

  // attachment_tag - computed: false, optional: true, required: false
  private _attachmentTag?: string; 
  public get attachmentTag() {
    return this.getStringAttribute('attachment_tag');
  }
  public set attachmentTag(value: string) {
    this._attachmentTag = value;
  }
  public resetAttachmentTag() {
    this._attachmentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTagInput() {
    return this._attachmentTag;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class InstanceV2DataVolumesList extends cdktf.ComplexList {
  public internalValue? : InstanceV2DataVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): InstanceV2DataVolumesOutputReference {
    return new InstanceV2DataVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceV2Interfaces {
  /**
  * This field determines whether this interface will be connected first. 
  * The first connected interface defines the default routing. WARNING: if you change this attribute, interfaces 
  * connected earlier than the selected new default interface will be reattached and it's IP addresses can be changed, if the reserved IP address is not used in these 
  * interfaces. You must always have exactly one interface with set attribute 'is_default.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#is_default InstanceV2#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Required if type is 'subnet'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#network_id InstanceV2#network_id}
  */
  readonly networkId?: string;
  /**
  * required if type is  'reserved_fixed_ip'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#reserved_fixed_ip_port_id InstanceV2#reserved_fixed_ip_port_id}
  */
  readonly reservedFixedIpPortId?: string;
  /**
  * Required if type is 'subnet'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#subnet_id InstanceV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Available values are 'subnet', 'external', 'reserved_fixed_ip'. You can't create more than one interface on the same subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#type InstanceV2#type}
  */
  readonly type: string;
}

export function instanceV2InterfacesToTerraform(struct?: InstanceV2Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    reserved_fixed_ip_port_id: cdktf.stringToTerraform(struct!.reservedFixedIpPortId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceV2InterfacesToHclTerraform(struct?: InstanceV2Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_fixed_ip_port_id: {
      value: cdktf.stringToHclTerraform(struct!.reservedFixedIpPortId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceV2InterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceV2Interfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._reservedFixedIpPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedFixedIpPortId = this._reservedFixedIpPortId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceV2Interfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._networkId = undefined;
      this._reservedFixedIpPortId = undefined;
      this._subnetId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._networkId = value.networkId;
      this._reservedFixedIpPortId = value.reservedFixedIpPortId;
      this._subnetId = value.subnetId;
      this._type = value.type;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // reserved_fixed_ip_port_id - computed: false, optional: true, required: false
  private _reservedFixedIpPortId?: string; 
  public get reservedFixedIpPortId() {
    return this.getStringAttribute('reserved_fixed_ip_port_id');
  }
  public set reservedFixedIpPortId(value: string) {
    this._reservedFixedIpPortId = value;
  }
  public resetReservedFixedIpPortId() {
    this._reservedFixedIpPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedFixedIpPortIdInput() {
    return this._reservedFixedIpPortId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InstanceV2InterfacesList extends cdktf.ComplexList {
  public internalValue? : InstanceV2Interfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): InstanceV2InterfacesOutputReference {
    return new InstanceV2InterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2 edgecenter_instanceV2}
*/
export class InstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_instanceV2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceV2 to import
  * @param importFromId The id of the existing InstanceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_instanceV2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/instance_v2 edgecenter_instanceV2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: InstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_instanceV2',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAppPorts = config.allowAppPorts;
    this._availabilityZone = config.availabilityZone;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._keypairName = config.keypairName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nameTemplate = config.nameTemplate;
    this._password = config.password;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._serverGroup = config.serverGroup;
    this._status = config.status;
    this._userData = config.userData;
    this._username = config.username;
    this._vmState = config.vmState;
    this._bootVolumes.internalValue = config.bootVolumes;
    this._configuration.internalValue = config.configuration;
    this._dataVolumes.internalValue = config.dataVolumes;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_app_ports - computed: false, optional: true, required: false
  private _allowAppPorts?: boolean | cdktf.IResolvable; 
  public get allowAppPorts() {
    return this.getBooleanAttribute('allow_app_ports');
  }
  public set allowAppPorts(value: boolean | cdktf.IResolvable) {
    this._allowAppPorts = value;
  }
  public resetAllowAppPorts() {
    this._allowAppPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAppPortsInput() {
    return this._allowAppPorts;
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

  // flavor - computed: true, optional: false, required: false
  private _flavor = new cdktf.StringMap(this, "flavor");
  public get flavor() {
    return this._flavor;
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

  // keypair_name - computed: false, optional: true, required: false
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  public resetKeypairName() {
    this._keypairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // name_template - computed: false, optional: true, required: false
  private _nameTemplate?: string; 
  public get nameTemplate() {
    return this.getStringAttribute('name_template');
  }
  public set nameTemplate(value: string) {
    this._nameTemplate = value;
  }
  public resetNameTemplate() {
    this._nameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplateInput() {
    return this._nameTemplate;
  }

  // password - computed: false, optional: true, required: false
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup?: string; 
  public get serverGroup() {
    return this.getStringAttribute('server_group');
  }
  public set serverGroup(value: string) {
    this._serverGroup = value;
  }
  public resetServerGroup() {
    this._serverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vm_state - computed: true, optional: true, required: false
  private _vmState?: string; 
  public get vmState() {
    return this.getStringAttribute('vm_state');
  }
  public set vmState(value: string) {
    this._vmState = value;
  }
  public resetVmState() {
    this._vmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStateInput() {
    return this._vmState;
  }

  // boot_volumes - computed: false, optional: false, required: true
  private _bootVolumes = new InstanceV2BootVolumesList(this, "boot_volumes", true);
  public get bootVolumes() {
    return this._bootVolumes;
  }
  public putBootVolumes(value: InstanceV2BootVolumes[] | cdktf.IResolvable) {
    this._bootVolumes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumesInput() {
    return this._bootVolumes.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new InstanceV2ConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: InstanceV2Configuration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // data_volumes - computed: false, optional: true, required: false
  private _dataVolumes = new InstanceV2DataVolumesList(this, "data_volumes", true);
  public get dataVolumes() {
    return this._dataVolumes;
  }
  public putDataVolumes(value: InstanceV2DataVolumes[] | cdktf.IResolvable) {
    this._dataVolumes.internalValue = value;
  }
  public resetDataVolumes() {
    this._dataVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumesInput() {
    return this._dataVolumes.internalValue;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new InstanceV2InterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: InstanceV2Interfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_app_ports: cdktf.booleanToTerraform(this._allowAppPorts),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      name_template: cdktf.stringToTerraform(this._nameTemplate),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      server_group: cdktf.stringToTerraform(this._serverGroup),
      status: cdktf.stringToTerraform(this._status),
      user_data: cdktf.stringToTerraform(this._userData),
      username: cdktf.stringToTerraform(this._username),
      vm_state: cdktf.stringToTerraform(this._vmState),
      boot_volumes: cdktf.listMapper(instanceV2BootVolumesToTerraform, true)(this._bootVolumes.internalValue),
      configuration: cdktf.listMapper(instanceV2ConfigurationToTerraform, true)(this._configuration.internalValue),
      data_volumes: cdktf.listMapper(instanceV2DataVolumesToTerraform, true)(this._dataVolumes.internalValue),
      interfaces: cdktf.listMapper(instanceV2InterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_app_ports: {
        value: cdktf.booleanToHclTerraform(this._allowAppPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_template: {
        value: cdktf.stringToHclTerraform(this._nameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group: {
        value: cdktf.stringToHclTerraform(this._serverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_state: {
        value: cdktf.stringToHclTerraform(this._vmState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_volumes: {
        value: cdktf.listMapperHcl(instanceV2BootVolumesToHclTerraform, true)(this._bootVolumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceV2BootVolumesList",
      },
      configuration: {
        value: cdktf.listMapperHcl(instanceV2ConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceV2ConfigurationList",
      },
      data_volumes: {
        value: cdktf.listMapperHcl(instanceV2DataVolumesToHclTerraform, true)(this._dataVolumes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceV2DataVolumesList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(instanceV2InterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceV2InterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
