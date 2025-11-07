// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication driver. Select between: core, public, ssh, x509, ldap, server_cipher, server_x509 and custom. Defaults to 'core'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#auth_driver User#auth_driver}
  */
  readonly authDriver?: string;
  /**
  * List of group IDs to add to the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#groups User#groups}
  */
  readonly groups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Password of the User. Required for all `auth_driver` options excepted 'ldap'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Primary (Default) Group ID of the user. Defaults to 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#primary_group User#primary_group}
  */
  readonly primaryGroup?: number;
  /**
  * User SSH public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#ssh_public_key User#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#tags User#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#quotas User#quotas}
  */
  readonly quotas?: UserQuotas[] | cdktf.IResolvable;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#template_section User#template_section}
  */
  readonly templateSection?: UserTemplateSection[] | cdktf.IResolvable;
}
export interface UserQuotasDatastoreQuotas {
  /**
  * Datastore ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Images allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#images User#images}
  */
  readonly images?: number;
  /**
  * Maximum size in MB allowed on the datastore (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#size User#size}
  */
  readonly size?: number;
}

export function userQuotasDatastoreQuotasToTerraform(struct?: UserQuotasDatastoreQuotas | cdktf.IResolvable): any {
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


export function userQuotasDatastoreQuotasToHclTerraform(struct?: UserQuotasDatastoreQuotas | cdktf.IResolvable): any {
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

export class UserQuotasDatastoreQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasDatastoreQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasDatastoreQuotas | cdktf.IResolvable | undefined) {
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

export class UserQuotasDatastoreQuotasList extends cdktf.ComplexList {
  public internalValue? : UserQuotasDatastoreQuotas[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasDatastoreQuotasOutputReference {
    return new UserQuotasDatastoreQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasImageQuotas {
  /**
  * Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Running VMs allowed for this image (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#running_vms User#running_vms}
  */
  readonly runningVms?: number;
}

export function userQuotasImageQuotasToTerraform(struct?: UserQuotasImageQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    running_vms: cdktf.numberToTerraform(struct!.runningVms),
  }
}


export function userQuotasImageQuotasToHclTerraform(struct?: UserQuotasImageQuotas | cdktf.IResolvable): any {
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

export class UserQuotasImageQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasImageQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasImageQuotas | cdktf.IResolvable | undefined) {
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

export class UserQuotasImageQuotasList extends cdktf.ComplexList {
  public internalValue? : UserQuotasImageQuotas[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasImageQuotasOutputReference {
    return new UserQuotasImageQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasNetworkQuotas {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Maximum number of Leases allowed for this network (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#leases User#leases}
  */
  readonly leases?: number;
}

export function userQuotasNetworkQuotasToTerraform(struct?: UserQuotasNetworkQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    leases: cdktf.numberToTerraform(struct!.leases),
  }
}


export function userQuotasNetworkQuotasToHclTerraform(struct?: UserQuotasNetworkQuotas | cdktf.IResolvable): any {
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

export class UserQuotasNetworkQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasNetworkQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasNetworkQuotas | cdktf.IResolvable | undefined) {
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

export class UserQuotasNetworkQuotasList extends cdktf.ComplexList {
  public internalValue? : UserQuotasNetworkQuotas[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasNetworkQuotasOutputReference {
    return new UserQuotasNetworkQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotasVmQuotas {
  /**
  * Maximum number of CPU allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#cpu User#cpu}
  */
  readonly cpu?: number;
  /**
  * Maximum Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#memory User#memory}
  */
  readonly memory?: number;
  /**
  * Maximum number of 'running' CPUs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#running_cpu User#running_cpu}
  */
  readonly runningCpu?: number;
  /**
  * 'Running' Memory (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#running_memory User#running_memory}
  */
  readonly runningMemory?: number;
  /**
  * Maximum number of Running VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#running_vms User#running_vms}
  */
  readonly runningVms?: number;
  /**
  * Maximum System Disk size (MB) allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#system_disk_size User#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Maximum number of VMs allowed (default: default quota)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#vms User#vms}
  */
  readonly vms?: number;
}

export function userQuotasVmQuotasToTerraform(struct?: UserQuotasVmQuotas | cdktf.IResolvable): any {
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


export function userQuotasVmQuotasToHclTerraform(struct?: UserQuotasVmQuotas | cdktf.IResolvable): any {
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

export class UserQuotasVmQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotasVmQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotasVmQuotas | cdktf.IResolvable | undefined) {
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

export class UserQuotasVmQuotasList extends cdktf.ComplexList {
  public internalValue? : UserQuotasVmQuotas[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasVmQuotasOutputReference {
    return new UserQuotasVmQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserQuotas {
  /**
  * datastore_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#datastore_quotas User#datastore_quotas}
  */
  readonly datastoreQuotas?: UserQuotasDatastoreQuotas[] | cdktf.IResolvable;
  /**
  * image_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#image_quotas User#image_quotas}
  */
  readonly imageQuotas?: UserQuotasImageQuotas[] | cdktf.IResolvable;
  /**
  * network_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#network_quotas User#network_quotas}
  */
  readonly networkQuotas?: UserQuotasNetworkQuotas[] | cdktf.IResolvable;
  /**
  * vm_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#vm_quotas User#vm_quotas}
  */
  readonly vmQuotas?: UserQuotasVmQuotas[] | cdktf.IResolvable;
}

export function userQuotasToTerraform(struct?: UserQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_quotas: cdktf.listMapper(userQuotasDatastoreQuotasToTerraform, true)(struct!.datastoreQuotas),
    image_quotas: cdktf.listMapper(userQuotasImageQuotasToTerraform, true)(struct!.imageQuotas),
    network_quotas: cdktf.listMapper(userQuotasNetworkQuotasToTerraform, true)(struct!.networkQuotas),
    vm_quotas: cdktf.listMapper(userQuotasVmQuotasToTerraform, true)(struct!.vmQuotas),
  }
}


export function userQuotasToHclTerraform(struct?: UserQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_quotas: {
      value: cdktf.listMapperHcl(userQuotasDatastoreQuotasToHclTerraform, true)(struct!.datastoreQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "UserQuotasDatastoreQuotasList",
    },
    image_quotas: {
      value: cdktf.listMapperHcl(userQuotasImageQuotasToHclTerraform, true)(struct!.imageQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "UserQuotasImageQuotasList",
    },
    network_quotas: {
      value: cdktf.listMapperHcl(userQuotasNetworkQuotasToHclTerraform, true)(struct!.networkQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "UserQuotasNetworkQuotasList",
    },
    vm_quotas: {
      value: cdktf.listMapperHcl(userQuotasVmQuotasToHclTerraform, true)(struct!.vmQuotas),
      isBlock: true,
      type: "list",
      storageClassType: "UserQuotasVmQuotasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserQuotas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserQuotas | cdktf.IResolvable | undefined) {
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
  private _datastoreQuotas = new UserQuotasDatastoreQuotasList(this, "datastore_quotas", false);
  public get datastoreQuotas() {
    return this._datastoreQuotas;
  }
  public putDatastoreQuotas(value: UserQuotasDatastoreQuotas[] | cdktf.IResolvable) {
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
  private _imageQuotas = new UserQuotasImageQuotasList(this, "image_quotas", false);
  public get imageQuotas() {
    return this._imageQuotas;
  }
  public putImageQuotas(value: UserQuotasImageQuotas[] | cdktf.IResolvable) {
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
  private _networkQuotas = new UserQuotasNetworkQuotasList(this, "network_quotas", false);
  public get networkQuotas() {
    return this._networkQuotas;
  }
  public putNetworkQuotas(value: UserQuotasNetworkQuotas[] | cdktf.IResolvable) {
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
  private _vmQuotas = new UserQuotasVmQuotasList(this, "vm_quotas", false);
  public get vmQuotas() {
    return this._vmQuotas;
  }
  public putVmQuotas(value: UserQuotasVmQuotas[] | cdktf.IResolvable) {
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

export class UserQuotasList extends cdktf.ComplexList {
  public internalValue? : UserQuotas[] | cdktf.IResolvable

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
  public get(index: number): UserQuotasOutputReference {
    return new UserQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#elements User#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#name User#name}
  */
  readonly name: string;
}

export function userTemplateSectionToTerraform(struct?: UserTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userTemplateSectionToHclTerraform(struct?: UserTemplateSection | cdktf.IResolvable): any {
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

export class UserTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserTemplateSection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserTemplateSection | cdktf.IResolvable | undefined) {
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

export class UserTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : UserTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): UserTemplateSectionOutputReference {
    return new UserTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user opennebula_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/user opennebula_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_user',
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
    this._authDriver = config.authDriver;
    this._groups = config.groups;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._primaryGroup = config.primaryGroup;
    this._sshPublicKey = config.sshPublicKey;
    this._tags = config.tags;
    this._quotas.internalValue = config.quotas;
    this._templateSection.internalValue = config.templateSection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_driver - computed: false, optional: true, required: false
  private _authDriver?: string; 
  public get authDriver() {
    return this.getStringAttribute('auth_driver');
  }
  public set authDriver(value: string) {
    this._authDriver = value;
  }
  public resetAuthDriver() {
    this._authDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDriverInput() {
    return this._authDriver;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: number[]; 
  public get groups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('groups')));
  }
  public set groups(value: number[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // primary_group - computed: false, optional: true, required: false
  private _primaryGroup?: number; 
  public get primaryGroup() {
    return this.getNumberAttribute('primary_group');
  }
  public set primaryGroup(value: number) {
    this._primaryGroup = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
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

  // quotas - computed: false, optional: true, required: false
  private _quotas = new UserQuotasList(this, "quotas", true);
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: UserQuotas[] | cdktf.IResolvable) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new UserTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: UserTemplateSection[] | cdktf.IResolvable) {
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
      auth_driver: cdktf.stringToTerraform(this._authDriver),
      groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      primary_group: cdktf.numberToTerraform(this._primaryGroup),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      quotas: cdktf.listMapper(userQuotasToTerraform, true)(this._quotas.internalValue),
      template_section: cdktf.listMapper(userTemplateSectionToTerraform, true)(this._templateSection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_driver: {
        value: cdktf.stringToHclTerraform(this._authDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_group: {
        value: cdktf.numberToHclTerraform(this._primaryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
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
      quotas: {
        value: cdktf.listMapperHcl(userQuotasToHclTerraform, true)(this._quotas.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserQuotasList",
      },
      template_section: {
        value: cdktf.listMapperHcl(userTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserTemplateSectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
