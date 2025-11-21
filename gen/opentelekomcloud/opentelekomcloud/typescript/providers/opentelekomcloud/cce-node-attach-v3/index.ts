// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceNodeAttachV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}
  */
  readonly dockerBaseSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}
  */
  readonly k8STags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}
  */
  readonly lvmConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}
  */
  readonly postinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}
  */
  readonly preinstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}
  */
  readonly systemDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#storage CceNodeAttachV3#storage}
  */
  readonly storage?: CceNodeAttachV3Storage;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#taints CceNodeAttachV3#taints}
  */
  readonly taints?: CceNodeAttachV3Taints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#timeouts CceNodeAttachV3#timeouts}
  */
  readonly timeouts?: CceNodeAttachV3Timeouts;
}
export interface CceNodeAttachV3DataVolumes {
}

export function cceNodeAttachV3DataVolumesToTerraform(struct?: CceNodeAttachV3DataVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cceNodeAttachV3DataVolumesToHclTerraform(struct?: CceNodeAttachV3DataVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CceNodeAttachV3DataVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3DataVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3DataVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dss_pool_id - computed: true, optional: false, required: false
  public get dssPoolId() {
    return this.getStringAttribute('dss_pool_id');
  }

  // extend_param - computed: true, optional: false, required: false
  public get extendParam() {
    return this.getStringAttribute('extend_param');
  }

  // extend_params - computed: true, optional: false, required: false
  private _extendParams = new cdktf.StringMap(this, "extend_params");
  public get extendParams() {
    return this._extendParams;
  }

  // hw_passthrough - computed: true, optional: false, required: false
  public get hwPassthrough() {
    return this.getBooleanAttribute('hw_passthrough');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // volumetype - computed: true, optional: false, required: false
  public get volumetype() {
    return this.getStringAttribute('volumetype');
  }
}

export class CceNodeAttachV3DataVolumesList extends cdktf.ComplexList {

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
  public get(index: number): CceNodeAttachV3DataVolumesOutputReference {
    return new CceNodeAttachV3DataVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3RootVolume {
}

export function cceNodeAttachV3RootVolumeToTerraform(struct?: CceNodeAttachV3RootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cceNodeAttachV3RootVolumeToHclTerraform(struct?: CceNodeAttachV3RootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CceNodeAttachV3RootVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3RootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3RootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extend_param - computed: true, optional: false, required: false
  public get extendParam() {
    return this.getStringAttribute('extend_param');
  }

  // extend_params - computed: true, optional: false, required: false
  private _extendParams = new cdktf.StringMap(this, "extend_params");
  public get extendParams() {
    return this._extendParams;
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // volumetype - computed: true, optional: false, required: false
  public get volumetype() {
    return this.getStringAttribute('volumetype');
  }
}

export class CceNodeAttachV3RootVolumeList extends cdktf.ComplexList {

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
  public get(index: number): CceNodeAttachV3RootVolumeOutputReference {
    return new CceNodeAttachV3RootVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3StorageGroupsVirtualSpaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#lvm_lv_type CceNodeAttachV3#lvm_lv_type}
  */
  readonly lvmLvType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#lvm_path CceNodeAttachV3#lvm_path}
  */
  readonly lvmPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#runtime_lv_type CceNodeAttachV3#runtime_lv_type}
  */
  readonly runtimeLvType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#size CceNodeAttachV3#size}
  */
  readonly size: string;
}

export function cceNodeAttachV3StorageGroupsVirtualSpacesToTerraform(struct?: CceNodeAttachV3StorageGroupsVirtualSpaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lvm_lv_type: cdktf.stringToTerraform(struct!.lvmLvType),
    lvm_path: cdktf.stringToTerraform(struct!.lvmPath),
    name: cdktf.stringToTerraform(struct!.name),
    runtime_lv_type: cdktf.stringToTerraform(struct!.runtimeLvType),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function cceNodeAttachV3StorageGroupsVirtualSpacesToHclTerraform(struct?: CceNodeAttachV3StorageGroupsVirtualSpaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lvm_lv_type: {
      value: cdktf.stringToHclTerraform(struct!.lvmLvType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lvm_path: {
      value: cdktf.stringToHclTerraform(struct!.lvmPath),
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
    runtime_lv_type: {
      value: cdktf.stringToHclTerraform(struct!.runtimeLvType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3StorageGroupsVirtualSpaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lvmLvType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvmLvType = this._lvmLvType;
    }
    if (this._lvmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvmPath = this._lvmPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtimeLvType !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLvType = this._runtimeLvType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3StorageGroupsVirtualSpaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lvmLvType = undefined;
      this._lvmPath = undefined;
      this._name = undefined;
      this._runtimeLvType = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lvmLvType = value.lvmLvType;
      this._lvmPath = value.lvmPath;
      this._name = value.name;
      this._runtimeLvType = value.runtimeLvType;
      this._size = value.size;
    }
  }

  // lvm_lv_type - computed: false, optional: true, required: false
  private _lvmLvType?: string; 
  public get lvmLvType() {
    return this.getStringAttribute('lvm_lv_type');
  }
  public set lvmLvType(value: string) {
    this._lvmLvType = value;
  }
  public resetLvmLvType() {
    this._lvmLvType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmLvTypeInput() {
    return this._lvmLvType;
  }

  // lvm_path - computed: false, optional: true, required: false
  private _lvmPath?: string; 
  public get lvmPath() {
    return this.getStringAttribute('lvm_path');
  }
  public set lvmPath(value: string) {
    this._lvmPath = value;
  }
  public resetLvmPath() {
    this._lvmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmPathInput() {
    return this._lvmPath;
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

  // runtime_lv_type - computed: false, optional: true, required: false
  private _runtimeLvType?: string; 
  public get runtimeLvType() {
    return this.getStringAttribute('runtime_lv_type');
  }
  public set runtimeLvType(value: string) {
    this._runtimeLvType = value;
  }
  public resetRuntimeLvType() {
    this._runtimeLvType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLvTypeInput() {
    return this._runtimeLvType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class CceNodeAttachV3StorageGroupsVirtualSpacesList extends cdktf.ComplexList {
  public internalValue? : CceNodeAttachV3StorageGroupsVirtualSpaces[] | cdktf.IResolvable

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
  public get(index: number): CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference {
    return new CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3StorageGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#cce_managed CceNodeAttachV3#cce_managed}
  */
  readonly cceManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#selector_names CceNodeAttachV3#selector_names}
  */
  readonly selectorNames: string[];
  /**
  * virtual_spaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#virtual_spaces CceNodeAttachV3#virtual_spaces}
  */
  readonly virtualSpaces: CceNodeAttachV3StorageGroupsVirtualSpaces[] | cdktf.IResolvable;
}

export function cceNodeAttachV3StorageGroupsToTerraform(struct?: CceNodeAttachV3StorageGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cce_managed: cdktf.booleanToTerraform(struct!.cceManaged),
    name: cdktf.stringToTerraform(struct!.name),
    selector_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectorNames),
    virtual_spaces: cdktf.listMapper(cceNodeAttachV3StorageGroupsVirtualSpacesToTerraform, true)(struct!.virtualSpaces),
  }
}


export function cceNodeAttachV3StorageGroupsToHclTerraform(struct?: CceNodeAttachV3StorageGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cce_managed: {
      value: cdktf.booleanToHclTerraform(struct!.cceManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectorNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_spaces: {
      value: cdktf.listMapperHcl(cceNodeAttachV3StorageGroupsVirtualSpacesToHclTerraform, true)(struct!.virtualSpaces),
      isBlock: true,
      type: "list",
      storageClassType: "CceNodeAttachV3StorageGroupsVirtualSpacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceNodeAttachV3StorageGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3StorageGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cceManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.cceManaged = this._cceManaged;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selectorNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorNames = this._selectorNames;
    }
    if (this._virtualSpaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSpaces = this._virtualSpaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3StorageGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cceManaged = undefined;
      this._name = undefined;
      this._selectorNames = undefined;
      this._virtualSpaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cceManaged = value.cceManaged;
      this._name = value.name;
      this._selectorNames = value.selectorNames;
      this._virtualSpaces.internalValue = value.virtualSpaces;
    }
  }

  // cce_managed - computed: false, optional: true, required: false
  private _cceManaged?: boolean | cdktf.IResolvable; 
  public get cceManaged() {
    return this.getBooleanAttribute('cce_managed');
  }
  public set cceManaged(value: boolean | cdktf.IResolvable) {
    this._cceManaged = value;
  }
  public resetCceManaged() {
    this._cceManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cceManagedInput() {
    return this._cceManaged;
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

  // selector_names - computed: false, optional: false, required: true
  private _selectorNames?: string[]; 
  public get selectorNames() {
    return this.getListAttribute('selector_names');
  }
  public set selectorNames(value: string[]) {
    this._selectorNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorNamesInput() {
    return this._selectorNames;
  }

  // virtual_spaces - computed: false, optional: false, required: true
  private _virtualSpaces = new CceNodeAttachV3StorageGroupsVirtualSpacesList(this, "virtual_spaces", false);
  public get virtualSpaces() {
    return this._virtualSpaces;
  }
  public putVirtualSpaces(value: CceNodeAttachV3StorageGroupsVirtualSpaces[] | cdktf.IResolvable) {
    this._virtualSpaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSpacesInput() {
    return this._virtualSpaces.internalValue;
  }
}

export class CceNodeAttachV3StorageGroupsList extends cdktf.ComplexList {
  public internalValue? : CceNodeAttachV3StorageGroups[] | cdktf.IResolvable

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
  public get(index: number): CceNodeAttachV3StorageGroupsOutputReference {
    return new CceNodeAttachV3StorageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3StorageSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#match_label_count CceNodeAttachV3#match_label_count}
  */
  readonly matchLabelCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#match_label_metadata_cmkid CceNodeAttachV3#match_label_metadata_cmkid}
  */
  readonly matchLabelMetadataCmkid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#match_label_metadata_encrypted CceNodeAttachV3#match_label_metadata_encrypted}
  */
  readonly matchLabelMetadataEncrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#match_label_size CceNodeAttachV3#match_label_size}
  */
  readonly matchLabelSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#match_label_volume_type CceNodeAttachV3#match_label_volume_type}
  */
  readonly matchLabelVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#type CceNodeAttachV3#type}
  */
  readonly type?: string;
}

export function cceNodeAttachV3StorageSelectorsToTerraform(struct?: CceNodeAttachV3StorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_label_count: cdktf.stringToTerraform(struct!.matchLabelCount),
    match_label_metadata_cmkid: cdktf.stringToTerraform(struct!.matchLabelMetadataCmkid),
    match_label_metadata_encrypted: cdktf.stringToTerraform(struct!.matchLabelMetadataEncrypted),
    match_label_size: cdktf.stringToTerraform(struct!.matchLabelSize),
    match_label_volume_type: cdktf.stringToTerraform(struct!.matchLabelVolumeType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cceNodeAttachV3StorageSelectorsToHclTerraform(struct?: CceNodeAttachV3StorageSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_label_count: {
      value: cdktf.stringToHclTerraform(struct!.matchLabelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_label_metadata_cmkid: {
      value: cdktf.stringToHclTerraform(struct!.matchLabelMetadataCmkid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_label_metadata_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.matchLabelMetadataEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_label_size: {
      value: cdktf.stringToHclTerraform(struct!.matchLabelSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_label_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.matchLabelVolumeType),
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

export class CceNodeAttachV3StorageSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3StorageSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelCount = this._matchLabelCount;
    }
    if (this._matchLabelMetadataCmkid !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelMetadataCmkid = this._matchLabelMetadataCmkid;
    }
    if (this._matchLabelMetadataEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelMetadataEncrypted = this._matchLabelMetadataEncrypted;
    }
    if (this._matchLabelSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelSize = this._matchLabelSize;
    }
    if (this._matchLabelVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelVolumeType = this._matchLabelVolumeType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3StorageSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabelCount = undefined;
      this._matchLabelMetadataCmkid = undefined;
      this._matchLabelMetadataEncrypted = undefined;
      this._matchLabelSize = undefined;
      this._matchLabelVolumeType = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabelCount = value.matchLabelCount;
      this._matchLabelMetadataCmkid = value.matchLabelMetadataCmkid;
      this._matchLabelMetadataEncrypted = value.matchLabelMetadataEncrypted;
      this._matchLabelSize = value.matchLabelSize;
      this._matchLabelVolumeType = value.matchLabelVolumeType;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // match_label_count - computed: false, optional: true, required: false
  private _matchLabelCount?: string; 
  public get matchLabelCount() {
    return this.getStringAttribute('match_label_count');
  }
  public set matchLabelCount(value: string) {
    this._matchLabelCount = value;
  }
  public resetMatchLabelCount() {
    this._matchLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelCountInput() {
    return this._matchLabelCount;
  }

  // match_label_metadata_cmkid - computed: false, optional: true, required: false
  private _matchLabelMetadataCmkid?: string; 
  public get matchLabelMetadataCmkid() {
    return this.getStringAttribute('match_label_metadata_cmkid');
  }
  public set matchLabelMetadataCmkid(value: string) {
    this._matchLabelMetadataCmkid = value;
  }
  public resetMatchLabelMetadataCmkid() {
    this._matchLabelMetadataCmkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelMetadataCmkidInput() {
    return this._matchLabelMetadataCmkid;
  }

  // match_label_metadata_encrypted - computed: false, optional: true, required: false
  private _matchLabelMetadataEncrypted?: string; 
  public get matchLabelMetadataEncrypted() {
    return this.getStringAttribute('match_label_metadata_encrypted');
  }
  public set matchLabelMetadataEncrypted(value: string) {
    this._matchLabelMetadataEncrypted = value;
  }
  public resetMatchLabelMetadataEncrypted() {
    this._matchLabelMetadataEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelMetadataEncryptedInput() {
    return this._matchLabelMetadataEncrypted;
  }

  // match_label_size - computed: false, optional: true, required: false
  private _matchLabelSize?: string; 
  public get matchLabelSize() {
    return this.getStringAttribute('match_label_size');
  }
  public set matchLabelSize(value: string) {
    this._matchLabelSize = value;
  }
  public resetMatchLabelSize() {
    this._matchLabelSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelSizeInput() {
    return this._matchLabelSize;
  }

  // match_label_volume_type - computed: false, optional: true, required: false
  private _matchLabelVolumeType?: string; 
  public get matchLabelVolumeType() {
    return this.getStringAttribute('match_label_volume_type');
  }
  public set matchLabelVolumeType(value: string) {
    this._matchLabelVolumeType = value;
  }
  public resetMatchLabelVolumeType() {
    this._matchLabelVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelVolumeTypeInput() {
    return this._matchLabelVolumeType;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CceNodeAttachV3StorageSelectorsList extends cdktf.ComplexList {
  public internalValue? : CceNodeAttachV3StorageSelectors[] | cdktf.IResolvable

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
  public get(index: number): CceNodeAttachV3StorageSelectorsOutputReference {
    return new CceNodeAttachV3StorageSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3Storage {
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#groups CceNodeAttachV3#groups}
  */
  readonly groups: CceNodeAttachV3StorageGroups[] | cdktf.IResolvable;
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#selectors CceNodeAttachV3#selectors}
  */
  readonly selectors: CceNodeAttachV3StorageSelectors[] | cdktf.IResolvable;
}

export function cceNodeAttachV3StorageToTerraform(struct?: CceNodeAttachV3StorageOutputReference | CceNodeAttachV3Storage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cceNodeAttachV3StorageGroupsToTerraform, true)(struct!.groups),
    selectors: cdktf.listMapper(cceNodeAttachV3StorageSelectorsToTerraform, true)(struct!.selectors),
  }
}


export function cceNodeAttachV3StorageToHclTerraform(struct?: CceNodeAttachV3StorageOutputReference | CceNodeAttachV3Storage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cceNodeAttachV3StorageGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "CceNodeAttachV3StorageGroupsList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cceNodeAttachV3StorageSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "CceNodeAttachV3StorageSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CceNodeAttachV3StorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CceNodeAttachV3Storage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceNodeAttachV3Storage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups.internalValue = undefined;
      this._selectors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups.internalValue = value.groups;
      this._selectors.internalValue = value.selectors;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new CceNodeAttachV3StorageGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: CceNodeAttachV3StorageGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors = new CceNodeAttachV3StorageSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: CceNodeAttachV3StorageSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}
export interface CceNodeAttachV3Taints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#effect CceNodeAttachV3#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#key CceNodeAttachV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#value CceNodeAttachV3#value}
  */
  readonly value: string;
}

export function cceNodeAttachV3TaintsToTerraform(struct?: CceNodeAttachV3Taints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cceNodeAttachV3TaintsToHclTerraform(struct?: CceNodeAttachV3Taints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CceNodeAttachV3TaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CceNodeAttachV3Taints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: CceNodeAttachV3Taints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

export class CceNodeAttachV3TaintsList extends cdktf.ComplexList {
  public internalValue? : CceNodeAttachV3Taints[] | cdktf.IResolvable

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
  public get(index: number): CceNodeAttachV3TaintsOutputReference {
    return new CceNodeAttachV3TaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CceNodeAttachV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}
  */
  readonly update?: string;
}

export function cceNodeAttachV3TimeoutsToTerraform(struct?: CceNodeAttachV3Timeouts | cdktf.IResolvable): any {
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


export function cceNodeAttachV3TimeoutsToHclTerraform(struct?: CceNodeAttachV3Timeouts | cdktf.IResolvable): any {
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

export class CceNodeAttachV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CceNodeAttachV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CceNodeAttachV3Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3 opentelekomcloud_cce_node_attach_v3}
*/
export class CceNodeAttachV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cce_node_attach_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CceNodeAttachV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CceNodeAttachV3 to import
  * @param importFromId The id of the existing CceNodeAttachV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CceNodeAttachV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cce_node_attach_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/cce_node_attach_v3 opentelekomcloud_cce_node_attach_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceNodeAttachV3Config
  */
  public constructor(scope: Construct, id: string, config: CceNodeAttachV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_node_attach_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._dockerBaseSize = config.dockerBaseSize;
    this._id = config.id;
    this._k8STags = config.k8STags;
    this._keyPair = config.keyPair;
    this._lvmConfig = config.lvmConfig;
    this._maxPods = config.maxPods;
    this._name = config.name;
    this._os = config.os;
    this._password = config.password;
    this._postinstall = config.postinstall;
    this._preinstall = config.preinstall;
    this._privateKey = config.privateKey;
    this._runtime = config.runtime;
    this._serverId = config.serverId;
    this._systemDiskKmsKeyId = config.systemDiskKmsKeyId;
    this._tags = config.tags;
    this._storage.internalValue = config.storage;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // data_volumes - computed: true, optional: false, required: false
  private _dataVolumes = new CceNodeAttachV3DataVolumesList(this, "data_volumes", false);
  public get dataVolumes() {
    return this._dataVolumes;
  }

  // docker_base_size - computed: false, optional: true, required: false
  private _dockerBaseSize?: number; 
  public get dockerBaseSize() {
    return this.getNumberAttribute('docker_base_size');
  }
  public set dockerBaseSize(value: number) {
    this._dockerBaseSize = value;
  }
  public resetDockerBaseSize() {
    this._dockerBaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBaseSizeInput() {
    return this._dockerBaseSize;
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
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

  // k8s_tags - computed: false, optional: true, required: false
  private _k8STags?: { [key: string]: string }; 
  public get k8STags() {
    return this.getStringMapAttribute('k8s_tags');
  }
  public set k8STags(value: { [key: string]: string }) {
    this._k8STags = value;
  }
  public resetK8STags() {
    this._k8STags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STagsInput() {
    return this._k8STags;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // lvm_config - computed: false, optional: true, required: false
  private _lvmConfig?: string; 
  public get lvmConfig() {
    return this.getStringAttribute('lvm_config');
  }
  public set lvmConfig(value: string) {
    this._lvmConfig = value;
  }
  public resetLvmConfig() {
    this._lvmConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvmConfigInput() {
    return this._lvmConfig;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
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

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
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

  // postinstall - computed: false, optional: true, required: false
  private _postinstall?: string; 
  public get postinstall() {
    return this.getStringAttribute('postinstall');
  }
  public set postinstall(value: string) {
    this._postinstall = value;
  }
  public resetPostinstall() {
    this._postinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postinstallInput() {
    return this._postinstall;
  }

  // preinstall - computed: false, optional: true, required: false
  private _preinstall?: string; 
  public get preinstall() {
    return this.getStringAttribute('preinstall');
  }
  public set preinstall(value: string) {
    this._preinstall = value;
  }
  public resetPreinstall() {
    this._preinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preinstallInput() {
    return this._preinstall;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // root_volume - computed: true, optional: false, required: false
  private _rootVolume = new CceNodeAttachV3RootVolumeList(this, "root_volume", false);
  public get rootVolume() {
    return this._rootVolume;
  }

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_disk_kms_key_id - computed: false, optional: true, required: false
  private _systemDiskKmsKeyId?: string; 
  public get systemDiskKmsKeyId() {
    return this.getStringAttribute('system_disk_kms_key_id');
  }
  public set systemDiskKmsKeyId(value: string) {
    this._systemDiskKmsKeyId = value;
  }
  public resetSystemDiskKmsKeyId() {
    this._systemDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskKmsKeyIdInput() {
    return this._systemDiskKmsKeyId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new CceNodeAttachV3StorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: CceNodeAttachV3Storage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new CceNodeAttachV3TaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: CceNodeAttachV3Taints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceNodeAttachV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceNodeAttachV3Timeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      docker_base_size: cdktf.numberToTerraform(this._dockerBaseSize),
      id: cdktf.stringToTerraform(this._id),
      k8s_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._k8STags),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      lvm_config: cdktf.stringToTerraform(this._lvmConfig),
      max_pods: cdktf.numberToTerraform(this._maxPods),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      password: cdktf.stringToTerraform(this._password),
      postinstall: cdktf.stringToTerraform(this._postinstall),
      preinstall: cdktf.stringToTerraform(this._preinstall),
      private_key: cdktf.stringToTerraform(this._privateKey),
      runtime: cdktf.stringToTerraform(this._runtime),
      server_id: cdktf.stringToTerraform(this._serverId),
      system_disk_kms_key_id: cdktf.stringToTerraform(this._systemDiskKmsKeyId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      storage: cceNodeAttachV3StorageToTerraform(this._storage.internalValue),
      taints: cdktf.listMapper(cceNodeAttachV3TaintsToTerraform, true)(this._taints.internalValue),
      timeouts: cceNodeAttachV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_base_size: {
        value: cdktf.numberToHclTerraform(this._dockerBaseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._k8STags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_pair: {
        value: cdktf.stringToHclTerraform(this._keyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lvm_config: {
        value: cdktf.stringToHclTerraform(this._lvmConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pods: {
        value: cdktf.numberToHclTerraform(this._maxPods),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
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
      postinstall: {
        value: cdktf.stringToHclTerraform(this._postinstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preinstall: {
        value: cdktf.stringToHclTerraform(this._preinstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._systemDiskKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage: {
        value: cceNodeAttachV3StorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceNodeAttachV3StorageList",
      },
      taints: {
        value: cdktf.listMapperHcl(cceNodeAttachV3TaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CceNodeAttachV3TaintsList",
      },
      timeouts: {
        value: cceNodeAttachV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CceNodeAttachV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
