// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Admin user IDs part of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#admins Group#admins}
  */
  readonly admins?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#tags Group#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * List of user IDs part of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#users Group#users}
  */
  readonly users?: number[];
  /**
  * opennebula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#opennebula Group#opennebula}
  */
  readonly opennebula?: GroupOpennebula[] | cdktf.IResolvable;
  /**
  * quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#quotas Group#quotas}
  */
  readonly quotas?: GroupQuotas[] | cdktf.IResolvable;
  /**
  * sunstone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#sunstone Group#sunstone}
  */
  readonly sunstone?: GroupSunstone[] | cdktf.IResolvable;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#template_section Group#template_section}
  */
  readonly templateSection?: GroupTemplateSection[] | cdktf.IResolvable;
}
export interface GroupOpennebula {
  /**
  * Sets order of elements by ID in list API calls: ASC or DESC respectively for ascending or descending order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#api_list_order Group#api_list_order}
  */
  readonly apiListOrder?: string;
  /**
  * Control the default value for the PERSISTENT attribute on image creation ( clone and disk save-as): should be YES or NO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#default_image_persistent Group#default_image_persistent}
  */
  readonly defaultImagePersistent?: string;
  /**
  * Control the default value for the PERSISTENT attribute on image creation ( only new images): should be YES or NO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#default_image_persistent_new Group#default_image_persistent_new}
  */
  readonly defaultImagePersistentNew?: string;
}

export function groupOpennebulaToTerraform(struct?: GroupOpennebula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_list_order: cdktf.stringToTerraform(struct!.apiListOrder),
    default_image_persistent: cdktf.stringToTerraform(struct!.defaultImagePersistent),
    default_image_persistent_new: cdktf.stringToTerraform(struct!.defaultImagePersistentNew),
  }
}


export function groupOpennebulaToHclTerraform(struct?: GroupOpennebula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_list_order: {
      value: cdktf.stringToHclTerraform(struct!.apiListOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_image_persistent: {
      value: cdktf.stringToHclTerraform(struct!.defaultImagePersistent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_image_persistent_new: {
      value: cdktf.stringToHclTerraform(struct!.defaultImagePersistentNew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupOpennebulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupOpennebula | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiListOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiListOrder = this._apiListOrder;
    }
    if (this._defaultImagePersistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultImagePersistent = this._defaultImagePersistent;
    }
    if (this._defaultImagePersistentNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultImagePersistentNew = this._defaultImagePersistentNew;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupOpennebula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiListOrder = undefined;
      this._defaultImagePersistent = undefined;
      this._defaultImagePersistentNew = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiListOrder = value.apiListOrder;
      this._defaultImagePersistent = value.defaultImagePersistent;
      this._defaultImagePersistentNew = value.defaultImagePersistentNew;
    }
  }

  // api_list_order - computed: false, optional: true, required: false
  private _apiListOrder?: string; 
  public get apiListOrder() {
    return this.getStringAttribute('api_list_order');
  }
  public set apiListOrder(value: string) {
    this._apiListOrder = value;
  }
  public resetApiListOrder() {
    this._apiListOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiListOrderInput() {
    return this._apiListOrder;
  }

  // default_image_persistent - computed: false, optional: true, required: false
  private _defaultImagePersistent?: string; 
  public get defaultImagePersistent() {
    return this.getStringAttribute('default_image_persistent');
  }
  public set defaultImagePersistent(value: string) {
    this._defaultImagePersistent = value;
  }
  public resetDefaultImagePersistent() {
    this._defaultImagePersistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultImagePersistentInput() {
    return this._defaultImagePersistent;
  }

  // default_image_persistent_new - computed: false, optional: true, required: false
  private _defaultImagePersistentNew?: string; 
  public get defaultImagePersistentNew() {
    return this.getStringAttribute('default_image_persistent_new');
  }
  public set defaultImagePersistentNew(value: string) {
    this._defaultImagePersistentNew = value;
  }
  public resetDefaultImagePersistentNew() {
    this._defaultImagePersistentNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultImagePersistentNewInput() {
    return this._defaultImagePersistentNew;
  }
}

export class GroupOpennebulaList extends cdktf.ComplexList {
  public internalValue? : GroupOpennebula[] | cdktf.IResolvable

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
  public get(index: number): GroupOpennebulaOutputReference {
    return new GroupOpennebulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasDatastoreQuotas {
  /**
  * Datastore ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Images allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#images Group#images}
  */
  readonly images?: number;
  /**
  * Maximum size in MB allowed on the datastore (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#size Group#size}
  */
  readonly size?: number;
}

export function groupQuotasDatastoreQuotasToTerraform(struct?: GroupQuotasDatastoreQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    images: cdktf.numberToTerraform(struct!.images),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function groupQuotasDatastoreQuotasToHclTerraform(struct?: GroupQuotasDatastoreQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    images: {
      value: cdktf.numberToHclTerraform(struct!.images),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasDatastoreQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasDatastoreQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasDatastoreQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._images = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._images = value.images;
      this._size = value.size;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // images - computed: false, optional: true, required: false
  private _images?: number; 
  public get images() {
    return this.getNumberAttribute('images');
  }
  public set images(value: number) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class GroupQuotasDatastoreQuotasList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasDatastoreQuotas[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasDatastoreQuotasOutputReference {
    return new GroupQuotasDatastoreQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasImageQuotas {
  /**
  * Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Running VMs allowed for this image (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#running_vms Group#running_vms}
  */
  readonly runningVms?: number;
}

export function groupQuotasImageQuotasToTerraform(struct?: GroupQuotasImageQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
  }
}


export function groupQuotasImageQuotasToHclTerraform(struct?: GroupQuotasImageQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_vms: {
      value: cdktf.numberToHclTerraform(struct!.runningVms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasImageQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasImageQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._runningVms !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningVms = this._runningVms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasImageQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._runningVms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._runningVms = value.runningVms;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // running_vms - computed: false, optional: true, required: false
  private _runningVms?: number; 
  public get runningVms() {
    return this.getNumberAttribute('running_vms');
  }
  public set runningVms(value: number) {
    this._runningVms = value;
  }
  public resetRunningVms() {
    this._runningVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningVmsInput() {
    return this._runningVms;
  }
}

export class GroupQuotasImageQuotasList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasImageQuotas[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasImageQuotasOutputReference {
    return new GroupQuotasImageQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasNetworkQuotas {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Leases allowed for this network (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#leases Group#leases}
  */
  readonly leases?: number;
}

export function groupQuotasNetworkQuotasToTerraform(struct?: GroupQuotasNetworkQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    leases: cdktf.numberToTerraform(struct!.leases),
  }
}


export function groupQuotasNetworkQuotasToHclTerraform(struct?: GroupQuotasNetworkQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    leases: {
      value: cdktf.numberToHclTerraform(struct!.leases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasNetworkQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasNetworkQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leases !== undefined) {
      hasAnyValues = true;
      internalValueResult.leases = this._leases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasNetworkQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._leases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._leases = value.leases;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // leases - computed: false, optional: true, required: false
  private _leases?: number; 
  public get leases() {
    return this.getNumberAttribute('leases');
  }
  public set leases(value: number) {
    this._leases = value;
  }
  public resetLeases() {
    this._leases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasesInput() {
    return this._leases;
  }
}

export class GroupQuotasNetworkQuotasList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasNetworkQuotas[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasNetworkQuotasOutputReference {
    return new GroupQuotasNetworkQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotasVmQuotas {
  /**
  * Maximum number of CPU allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#cpu Group#cpu}
  */
  readonly cpu?: number;
  /**
  * Maximum Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#memory Group#memory}
  */
  readonly memory?: number;
  /**
  * Maximum number of 'running' CPUs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#running_cpu Group#running_cpu}
  */
  readonly runningCpu?: number;
  /**
  * 'Running' Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#running_memory Group#running_memory}
  */
  readonly runningMemory?: number;
  /**
  * Maximum number of Running VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#running_vms Group#running_vms}
  */
  readonly runningVms?: number;
  /**
  * Maximum System Disk size (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#system_disk_size Group#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Maximum number of VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#vms Group#vms}
  */
  readonly vms?: number;
}

export function groupQuotasVmQuotasToTerraform(struct?: GroupQuotasVmQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.numberToTerraform(struct!.memory),
    running_cpu: cdktf.numberToTerraform(struct!.runningCpu),
    running_memory: cdktf.numberToTerraform(struct!.runningMemory),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    vms: cdktf.numberToTerraform(struct!.vms),
  }
}


export function groupQuotasVmQuotasToHclTerraform(struct?: GroupQuotasVmQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_cpu: {
      value: cdktf.numberToHclTerraform(struct!.runningCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_memory: {
      value: cdktf.numberToHclTerraform(struct!.runningMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_vms: {
      value: cdktf.numberToHclTerraform(struct!.runningVms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vms: {
      value: cdktf.numberToHclTerraform(struct!.vms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasVmQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotasVmQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._runningCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningCpu = this._runningCpu;
    }
    if (this._runningMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningMemory = this._runningMemory;
    }
    if (this._runningVms !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningVms = this._runningVms;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._vms !== undefined) {
      hasAnyValues = true;
      internalValueResult.vms = this._vms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotasVmQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
      this._runningCpu = undefined;
      this._runningMemory = undefined;
      this._runningVms = undefined;
      this._systemDiskSize = undefined;
      this._vms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
      this._runningCpu = value.runningCpu;
      this._runningMemory = value.runningMemory;
      this._runningVms = value.runningVms;
      this._systemDiskSize = value.systemDiskSize;
      this._vms = value.vms;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // running_cpu - computed: false, optional: true, required: false
  private _runningCpu?: number; 
  public get runningCpu() {
    return this.getNumberAttribute('running_cpu');
  }
  public set runningCpu(value: number) {
    this._runningCpu = value;
  }
  public resetRunningCpu() {
    this._runningCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningCpuInput() {
    return this._runningCpu;
  }

  // running_memory - computed: false, optional: true, required: false
  private _runningMemory?: number; 
  public get runningMemory() {
    return this.getNumberAttribute('running_memory');
  }
  public set runningMemory(value: number) {
    this._runningMemory = value;
  }
  public resetRunningMemory() {
    this._runningMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningMemoryInput() {
    return this._runningMemory;
  }

  // running_vms - computed: false, optional: true, required: false
  private _runningVms?: number; 
  public get runningVms() {
    return this.getNumberAttribute('running_vms');
  }
  public set runningVms(value: number) {
    this._runningVms = value;
  }
  public resetRunningVms() {
    this._runningVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningVmsInput() {
    return this._runningVms;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // vms - computed: false, optional: true, required: false
  private _vms?: number; 
  public get vms() {
    return this.getNumberAttribute('vms');
  }
  public set vms(value: number) {
    this._vms = value;
  }
  public resetVms() {
    this._vms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsInput() {
    return this._vms;
  }
}

export class GroupQuotasVmQuotasList extends cdktf.ComplexList {
  public internalValue? : GroupQuotasVmQuotas[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasVmQuotasOutputReference {
    return new GroupQuotasVmQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupQuotas {
  /**
  * datastore_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#datastore_quotas Group#datastore_quotas}
  */
  readonly datastoreQuotas?: GroupQuotasDatastoreQuotas[] | cdktf.IResolvable;
  /**
  * image_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#image_quotas Group#image_quotas}
  */
  readonly imageQuotas?: GroupQuotasImageQuotas[] | cdktf.IResolvable;
  /**
  * network_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#network_quotas Group#network_quotas}
  */
  readonly networkQuotas?: GroupQuotasNetworkQuotas[] | cdktf.IResolvable;
  /**
  * vm_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#vm_quotas Group#vm_quotas}
  */
  readonly vmQuotas?: GroupQuotasVmQuotas[] | cdktf.IResolvable;
}

export function groupQuotasToTerraform(struct?: GroupQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_quotas: cdktf.listMapper(groupQuotasDatastoreQuotasToTerraform, true)(struct!.datastoreQuotas),
    image_quotas: cdktf.listMapper(groupQuotasImageQuotasToTerraform, true)(struct!.imageQuotas),
    network_quotas: cdktf.listMapper(groupQuotasNetworkQuotasToTerraform, true)(struct!.networkQuotas),
    vm_quotas: cdktf.listMapper(groupQuotasVmQuotasToTerraform, true)(struct!.vmQuotas),
  }
}


export function groupQuotasToHclTerraform(struct?: GroupQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_quotas: {
      value: cdktf.listMapperHcl(groupQuotasDatastoreQuotasToHclTerraform, true)(struct!.datastoreQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "GroupQuotasDatastoreQuotasList",
    },
    image_quotas: {
      value: cdktf.listMapperHcl(groupQuotasImageQuotasToHclTerraform, true)(struct!.imageQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "GroupQuotasImageQuotasList",
    },
    network_quotas: {
      value: cdktf.listMapperHcl(groupQuotasNetworkQuotasToHclTerraform, true)(struct!.networkQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "GroupQuotasNetworkQuotasList",
    },
    vm_quotas: {
      value: cdktf.listMapperHcl(groupQuotasVmQuotasToHclTerraform, true)(struct!.vmQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "GroupQuotasVmQuotasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreQuotas = this._datastoreQuotas?.internalValue;
    }
    if (this._imageQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageQuotas = this._imageQuotas?.internalValue;
    }
    if (this._networkQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkQuotas = this._networkQuotas?.internalValue;
    }
    if (this._vmQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmQuotas = this._vmQuotas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreQuotas.internalValue = undefined;
      this._imageQuotas.internalValue = undefined;
      this._networkQuotas.internalValue = undefined;
      this._vmQuotas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreQuotas.internalValue = value.datastoreQuotas;
      this._imageQuotas.internalValue = value.imageQuotas;
      this._networkQuotas.internalValue = value.networkQuotas;
      this._vmQuotas.internalValue = value.vmQuotas;
    }
  }

  // datastore_quotas - computed: false, optional: true, required: false
  private _datastoreQuotas = new GroupQuotasDatastoreQuotasList(this, "datastore_quotas", false);
  public get datastoreQuotas() {
    return this._datastoreQuotas;
  }
  public putDatastoreQuotas(value: GroupQuotasDatastoreQuotas[] | cdktf.IResolvable) {
    this._datastoreQuotas.internalValue = value;
  }
  public resetDatastoreQuotas() {
    this._datastoreQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreQuotasInput() {
    return this._datastoreQuotas.internalValue;
  }

  // image_quotas - computed: false, optional: true, required: false
  private _imageQuotas = new GroupQuotasImageQuotasList(this, "image_quotas", false);
  public get imageQuotas() {
    return this._imageQuotas;
  }
  public putImageQuotas(value: GroupQuotasImageQuotas[] | cdktf.IResolvable) {
    this._imageQuotas.internalValue = value;
  }
  public resetImageQuotas() {
    this._imageQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageQuotasInput() {
    return this._imageQuotas.internalValue;
  }

  // network_quotas - computed: false, optional: true, required: false
  private _networkQuotas = new GroupQuotasNetworkQuotasList(this, "network_quotas", false);
  public get networkQuotas() {
    return this._networkQuotas;
  }
  public putNetworkQuotas(value: GroupQuotasNetworkQuotas[] | cdktf.IResolvable) {
    this._networkQuotas.internalValue = value;
  }
  public resetNetworkQuotas() {
    this._networkQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQuotasInput() {
    return this._networkQuotas.internalValue;
  }

  // vm_quotas - computed: false, optional: true, required: false
  private _vmQuotas = new GroupQuotasVmQuotasList(this, "vm_quotas", false);
  public get vmQuotas() {
    return this._vmQuotas;
  }
  public putVmQuotas(value: GroupQuotasVmQuotas[] | cdktf.IResolvable) {
    this._vmQuotas.internalValue = value;
  }
  public resetVmQuotas() {
    this._vmQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmQuotasInput() {
    return this._vmQuotas.internalValue;
  }
}

export class GroupQuotasList extends cdktf.ComplexList {
  public internalValue? : GroupQuotas[] | cdktf.IResolvable

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
  public get(index: number): GroupQuotasOutputReference {
    return new GroupQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSunstone {
  /**
  * Default Sunstone view for regular users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#default_view Group#default_view}
  */
  readonly defaultView?: string;
  /**
  * Default Sunstone view for group admin users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#group_admin_default_view Group#group_admin_default_view}
  */
  readonly groupAdminDefaultView?: string;
  /**
  * List of available views for the group admins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#group_admin_views Group#group_admin_views}
  */
  readonly groupAdminViews?: string;
  /**
  * List of available views for regular users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#views Group#views}
  */
  readonly views?: string;
}

export function groupSunstoneToTerraform(struct?: GroupSunstone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_view: cdktf.stringToTerraform(struct!.defaultView),
    group_admin_default_view: cdktf.stringToTerraform(struct!.groupAdminDefaultView),
    group_admin_views: cdktf.stringToTerraform(struct!.groupAdminViews),
    views: cdktf.stringToTerraform(struct!.views),
  }
}


export function groupSunstoneToHclTerraform(struct?: GroupSunstone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_view: {
      value: cdktf.stringToHclTerraform(struct!.defaultView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_admin_default_view: {
      value: cdktf.stringToHclTerraform(struct!.groupAdminDefaultView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_admin_views: {
      value: cdktf.stringToHclTerraform(struct!.groupAdminViews),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    views: {
      value: cdktf.stringToHclTerraform(struct!.views),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSunstoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSunstone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultView !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultView = this._defaultView;
    }
    if (this._groupAdminDefaultView !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAdminDefaultView = this._groupAdminDefaultView;
    }
    if (this._groupAdminViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAdminViews = this._groupAdminViews;
    }
    if (this._views !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSunstone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultView = undefined;
      this._groupAdminDefaultView = undefined;
      this._groupAdminViews = undefined;
      this._views = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultView = value.defaultView;
      this._groupAdminDefaultView = value.groupAdminDefaultView;
      this._groupAdminViews = value.groupAdminViews;
      this._views = value.views;
    }
  }

  // default_view - computed: false, optional: true, required: false
  private _defaultView?: string; 
  public get defaultView() {
    return this.getStringAttribute('default_view');
  }
  public set defaultView(value: string) {
    this._defaultView = value;
  }
  public resetDefaultView() {
    this._defaultView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultViewInput() {
    return this._defaultView;
  }

  // group_admin_default_view - computed: false, optional: true, required: false
  private _groupAdminDefaultView?: string; 
  public get groupAdminDefaultView() {
    return this.getStringAttribute('group_admin_default_view');
  }
  public set groupAdminDefaultView(value: string) {
    this._groupAdminDefaultView = value;
  }
  public resetGroupAdminDefaultView() {
    this._groupAdminDefaultView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAdminDefaultViewInput() {
    return this._groupAdminDefaultView;
  }

  // group_admin_views - computed: false, optional: true, required: false
  private _groupAdminViews?: string; 
  public get groupAdminViews() {
    return this.getStringAttribute('group_admin_views');
  }
  public set groupAdminViews(value: string) {
    this._groupAdminViews = value;
  }
  public resetGroupAdminViews() {
    this._groupAdminViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAdminViewsInput() {
    return this._groupAdminViews;
  }

  // views - computed: false, optional: true, required: false
  private _views?: string; 
  public get views() {
    return this.getStringAttribute('views');
  }
  public set views(value: string) {
    this._views = value;
  }
  public resetViews() {
    this._views = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views;
  }
}

export class GroupSunstoneList extends cdktf.ComplexList {
  public internalValue? : GroupSunstone[] | cdktf.IResolvable

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
  public get(index: number): GroupSunstoneOutputReference {
    return new GroupSunstoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#elements Group#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupTemplateSectionToTerraform(struct?: GroupTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupTemplateSectionToHclTerraform(struct?: GroupTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elements),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GroupTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupTemplateSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupTemplateSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._name = value.name;
    }
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: { [key: string]: string }; 
  public get elements() {
    return this.getStringMapAttribute('elements');
  }
  public set elements(value: { [key: string]: string }) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
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

export class GroupTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : GroupTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): GroupTemplateSectionOutputReference {
    return new GroupTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group opennebula_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/group opennebula_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_group',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admins = config.admins;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._users = config.users;
    this._opennebula.internalValue = config.opennebula;
    this._quotas.internalValue = config.quotas;
    this._sunstone.internalValue = config.sunstone;
    this._templateSection.internalValue = config.templateSection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: true, required: false
  private _admins?: number[]; 
  public get admins() {
    return this.getNumberListAttribute('admins');
  }
  public set admins(value: number[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number[]; 
  public get users() {
    return this.getNumberListAttribute('users');
  }
  public set users(value: number[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // opennebula - computed: false, optional: true, required: false
  private _opennebula = new GroupOpennebulaList(this, "opennebula", true);
  public get opennebula() {
    return this._opennebula;
  }
  public putOpennebula(value: GroupOpennebula[] | cdktf.IResolvable) {
    this._opennebula.internalValue = value;
  }
  public resetOpennebula() {
    this._opennebula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opennebulaInput() {
    return this._opennebula.internalValue;
  }

  // quotas - computed: false, optional: true, required: false
  private _quotas = new GroupQuotasList(this, "quotas", true);
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: GroupQuotas[] | cdktf.IResolvable) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // sunstone - computed: false, optional: true, required: false
  private _sunstone = new GroupSunstoneList(this, "sunstone", true);
  public get sunstone() {
    return this._sunstone;
  }
  public putSunstone(value: GroupSunstone[] | cdktf.IResolvable) {
    this._sunstone.internalValue = value;
  }
  public resetSunstone() {
    this._sunstone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunstoneInput() {
    return this._sunstone.internalValue;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new GroupTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: GroupTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: cdktf.listMapper(cdktf.numberToTerraform, false)(this._admins),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      users: cdktf.listMapper(cdktf.numberToTerraform, false)(this._users),
      opennebula: cdktf.listMapper(groupOpennebulaToTerraform, true)(this._opennebula.internalValue),
      quotas: cdktf.listMapper(groupQuotasToTerraform, true)(this._quotas.internalValue),
      sunstone: cdktf.listMapper(groupSunstoneToTerraform, true)(this._sunstone.internalValue),
      template_section: cdktf.listMapper(groupTemplateSectionToTerraform, true)(this._templateSection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admins: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._admins),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      opennebula: {
        value: cdktf.listMapperHcl(groupOpennebulaToHclTerraform, true)(this._opennebula.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupOpennebulaList",
      },
      quotas: {
        value: cdktf.listMapperHcl(groupQuotasToHclTerraform, true)(this._quotas.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupQuotasList",
      },
      sunstone: {
        value: cdktf.listMapperHcl(groupSunstoneToHclTerraform, true)(this._sunstone.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupSunstoneList",
      },
      template_section: {
        value: cdktf.listMapperHcl(groupTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupTemplateSectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
