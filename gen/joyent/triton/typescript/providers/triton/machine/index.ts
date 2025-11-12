// https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrator's initial password (Windows only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#administrator_pw Machine#administrator_pw}
  */
  readonly administratorPw?: string;
  /**
  * Label based affinity rules for assisting instance placement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#affinity Machine#affinity}
  */
  readonly affinity?: string[];
  /**
  * copied to machine on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#cloud_config Machine#cloud_config}
  */
  readonly cloudConfig?: string;
  /**
  * Whether to create a delegate dataset for this machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#delegate_dataset Machine#delegate_dataset}
  */
  readonly delegateDataset?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable deletion protection for this machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#deletion_protection_enabled Machine#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the firewall for this machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#firewall_enabled Machine#firewall_enabled}
  */
  readonly firewallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#id Machine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#image Machine#image}
  */
  readonly image: string;
  /**
  * Machine metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#metadata Machine#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Friendly name for machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#name Machine#name}
  */
  readonly name?: string;
  /**
  * Desired network IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#networks Machine#networks}
  */
  readonly networks?: string[];
  /**
  * The package for use for provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#package Machine#package}
  */
  readonly package: string;
  /**
  * Authorized keys for the root user on this machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#root_authorized_keys Machine#root_authorized_keys}
  */
  readonly rootAuthorizedKeys?: string;
  /**
  * Machine tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#tags Machine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Data copied to machine on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#user_data Machine#user_data}
  */
  readonly userData?: string;
  /**
  * User script to run on boot (every boot on SmartMachines)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#user_script Machine#user_script}
  */
  readonly userScript?: string;
  /**
  * cns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#cns Machine#cns}
  */
  readonly cns?: MachineCns;
  /**
  * locality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#locality Machine#locality}
  */
  readonly locality?: MachineLocality;
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#nic Machine#nic}
  */
  readonly nic?: MachineNic[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#timeouts Machine#timeouts}
  */
  readonly timeouts?: MachineTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#volume Machine#volume}
  */
  readonly volume?: MachineVolume[] | cdktf.IResolvable;
}
export interface MachineCns {
  /**
  * Disable CNS for this instance (after create)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#disable Machine#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Assign CNS service names to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#services Machine#services}
  */
  readonly services?: string[];
}

export function machineCnsToTerraform(struct?: MachineCnsOutputReference | MachineCns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function machineCnsToHclTerraform(struct?: MachineCnsOutputReference | MachineCns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineCnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineCns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineCns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._services = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._services = value.services;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface MachineLocality {
  /**
  * UUIDs of other instances to attempt to provision alongside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#close_to Machine#close_to}
  */
  readonly closeTo?: string[];
  /**
  * UUIDs of other instances to attempt not to provision alongside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#far_from Machine#far_from}
  */
  readonly farFrom?: string[];
}

export function machineLocalityToTerraform(struct?: MachineLocalityOutputReference | MachineLocality): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.closeTo),
    far_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.farFrom),
  }
}


export function machineLocalityToHclTerraform(struct?: MachineLocalityOutputReference | MachineLocality): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.closeTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    far_from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.farFrom),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLocalityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLocality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeTo = this._closeTo;
    }
    if (this._farFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.farFrom = this._farFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLocality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._closeTo = undefined;
      this._farFrom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._closeTo = value.closeTo;
      this._farFrom = value.farFrom;
    }
  }

  // close_to - computed: false, optional: true, required: false
  private _closeTo?: string[]; 
  public get closeTo() {
    return this.getListAttribute('close_to');
  }
  public set closeTo(value: string[]) {
    this._closeTo = value;
  }
  public resetCloseTo() {
    this._closeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeToInput() {
    return this._closeTo;
  }

  // far_from - computed: false, optional: true, required: false
  private _farFrom?: string[]; 
  public get farFrom() {
    return this.getListAttribute('far_from');
  }
  public set farFrom(value: string[]) {
    this._farFrom = value;
  }
  public resetFarFrom() {
    this._farFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get farFromInput() {
    return this._farFrom;
  }
}
export interface MachineNic {
  /**
  * ID of the network to which the NIC is attached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#network Machine#network}
  */
  readonly network: string;
}

export function machineNicToTerraform(struct?: MachineNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function machineNicToHclTerraform(struct?: MachineNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class MachineNicList extends cdktf.ComplexList {
  public internalValue? : MachineNic[] | cdktf.IResolvable

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
  public get(index: number): MachineNicOutputReference {
    return new MachineNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#create Machine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#delete Machine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#read Machine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#update Machine#update}
  */
  readonly update?: string;
}

export function machineTimeoutsToTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function machineTimeoutsToHclTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface MachineVolume {
  /**
  * The volume attachment mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#mode Machine#mode}
  */
  readonly mode?: string;
  /**
  * Where to attach the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#mountpoint Machine#mountpoint}
  */
  readonly mountpoint: string;
  /**
  * The name of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#name Machine#name}
  */
  readonly name: string;
  /**
  * The type of volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#type Machine#type}
  */
  readonly type?: string;
}

export function machineVolumeToTerraform(struct?: MachineVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    mountpoint: cdktf.stringToTerraform(struct!.mountpoint),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function machineVolumeToHclTerraform(struct?: MachineVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpoint: {
      value: cdktf.stringToHclTerraform(struct!.mountpoint),
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

export class MachineVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._mountpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpoint = this._mountpoint;
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

  public set internalValue(value: MachineVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._mountpoint = undefined;
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
      this._mode = value.mode;
      this._mountpoint = value.mountpoint;
      this._name = value.name;
      this._type = value.type;
    }
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

  // mountpoint - computed: false, optional: false, required: true
  private _mountpoint?: string; 
  public get mountpoint() {
    return this.getStringAttribute('mountpoint');
  }
  public set mountpoint(value: string) {
    this._mountpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpointInput() {
    return this._mountpoint;
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

  // type - computed: true, optional: true, required: false
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

export class MachineVolumeList extends cdktf.ComplexList {
  public internalValue? : MachineVolume[] | cdktf.IResolvable

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
  public get(index: number): MachineVolumeOutputReference {
    return new MachineVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine triton_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "triton_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "triton_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joyent/triton/0.8.2/docs/resources/machine triton_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig
  */
  public constructor(scope: Construct, id: string, config: MachineConfig) {
    super(scope, id, {
      terraformResourceType: 'triton_machine',
      terraformGeneratorMetadata: {
        providerName: 'triton',
        providerVersion: '0.8.2',
        providerVersionConstraint: '0.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorPw = config.administratorPw;
    this._affinity = config.affinity;
    this._cloudConfig = config.cloudConfig;
    this._delegateDataset = config.delegateDataset;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._firewallEnabled = config.firewallEnabled;
    this._id = config.id;
    this._image = config.image;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networks = config.networks;
    this._package = config.package;
    this._rootAuthorizedKeys = config.rootAuthorizedKeys;
    this._tags = config.tags;
    this._userData = config.userData;
    this._userScript = config.userScript;
    this._cns.internalValue = config.cns;
    this._locality.internalValue = config.locality;
    this._nic.internalValue = config.nic;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_pw - computed: false, optional: true, required: false
  private _administratorPw?: string; 
  public get administratorPw() {
    return this.getStringAttribute('administrator_pw');
  }
  public set administratorPw(value: string) {
    this._administratorPw = value;
  }
  public resetAdministratorPw() {
    this._administratorPw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPwInput() {
    return this._administratorPw;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string[]; 
  public get affinity() {
    return this.getListAttribute('affinity');
  }
  public set affinity(value: string[]) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig?: string; 
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }
  public set cloudConfig(value: string) {
    this._cloudConfig = value;
  }
  public resetCloudConfig() {
    this._cloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig;
  }

  // compute_node - computed: true, optional: false, required: false
  public get computeNode() {
    return this.getStringAttribute('compute_node');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // delegate_dataset - computed: false, optional: true, required: false
  private _delegateDataset?: boolean | cdktf.IResolvable; 
  public get delegateDataset() {
    return this.getBooleanAttribute('delegate_dataset');
  }
  public set delegateDataset(value: boolean | cdktf.IResolvable) {
    this._delegateDataset = value;
  }
  public resetDelegateDataset() {
    this._delegateDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateDatasetInput() {
    return this._delegateDataset;
  }

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }

  // firewall_enabled - computed: false, optional: true, required: false
  private _firewallEnabled?: boolean | cdktf.IResolvable; 
  public get firewallEnabled() {
    return this.getBooleanAttribute('firewall_enabled');
  }
  public set firewallEnabled(value: boolean | cdktf.IResolvable) {
    this._firewallEnabled = value;
  }
  public resetFirewallEnabled() {
    this._firewallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallEnabledInput() {
    return this._firewallEnabled;
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

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // primaryip - computed: true, optional: false, required: false
  public get primaryip() {
    return this.getStringAttribute('primaryip');
  }

  // root_authorized_keys - computed: true, optional: true, required: false
  private _rootAuthorizedKeys?: string; 
  public get rootAuthorizedKeys() {
    return this.getStringAttribute('root_authorized_keys');
  }
  public set rootAuthorizedKeys(value: string) {
    this._rootAuthorizedKeys = value;
  }
  public resetRootAuthorizedKeys() {
    this._rootAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAuthorizedKeysInput() {
    return this._rootAuthorizedKeys;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
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

  // user_script - computed: false, optional: true, required: false
  private _userScript?: string; 
  public get userScript() {
    return this.getStringAttribute('user_script');
  }
  public set userScript(value: string) {
    this._userScript = value;
  }
  public resetUserScript() {
    this._userScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScriptInput() {
    return this._userScript;
  }

  // cns - computed: false, optional: true, required: false
  private _cns = new MachineCnsOutputReference(this, "cns");
  public get cns() {
    return this._cns;
  }
  public putCns(value: MachineCns) {
    this._cns.internalValue = value;
  }
  public resetCns() {
    this._cns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnsInput() {
    return this._cns.internalValue;
  }

  // locality - computed: false, optional: true, required: false
  private _locality = new MachineLocalityOutputReference(this, "locality");
  public get locality() {
    return this._locality;
  }
  public putLocality(value: MachineLocality) {
    this._locality.internalValue = value;
  }
  public resetLocality() {
    this._locality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality.internalValue;
  }

  // nic - computed: false, optional: true, required: false
  private _nic = new MachineNicList(this, "nic", true);
  public get nic() {
    return this._nic;
  }
  public putNic(value: MachineNic[] | cdktf.IResolvable) {
    this._nic.internalValue = value;
  }
  public resetNic() {
    this._nic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new MachineVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: MachineVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_pw: cdktf.stringToTerraform(this._administratorPw),
      affinity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._affinity),
      cloud_config: cdktf.stringToTerraform(this._cloudConfig),
      delegate_dataset: cdktf.booleanToTerraform(this._delegateDataset),
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      firewall_enabled: cdktf.booleanToTerraform(this._firewallEnabled),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      package: cdktf.stringToTerraform(this._package),
      root_authorized_keys: cdktf.stringToTerraform(this._rootAuthorizedKeys),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      user_script: cdktf.stringToTerraform(this._userScript),
      cns: machineCnsToTerraform(this._cns.internalValue),
      locality: machineLocalityToTerraform(this._locality.internalValue),
      nic: cdktf.listMapper(machineNicToTerraform, true)(this._nic.internalValue),
      timeouts: machineTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cdktf.listMapper(machineVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_pw: {
        value: cdktf.stringToHclTerraform(this._administratorPw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._affinity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cloud_config: {
        value: cdktf.stringToHclTerraform(this._cloudConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_dataset: {
        value: cdktf.booleanToHclTerraform(this._delegateDataset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_enabled: {
        value: cdktf.booleanToHclTerraform(this._firewallEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
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
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_authorized_keys: {
        value: cdktf.stringToHclTerraform(this._rootAuthorizedKeys),
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
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_script: {
        value: cdktf.stringToHclTerraform(this._userScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cns: {
        value: machineCnsToHclTerraform(this._cns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineCnsList",
      },
      locality: {
        value: machineLocalityToHclTerraform(this._locality.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLocalityList",
      },
      nic: {
        value: cdktf.listMapperHcl(machineNicToHclTerraform, true)(this._nic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineNicList",
      },
      timeouts: {
        value: machineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineTimeouts",
      },
      volume: {
        value: cdktf.listMapperHcl(machineVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
