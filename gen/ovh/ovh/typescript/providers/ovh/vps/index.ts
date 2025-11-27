// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the name displayed in Manager for your VPS (max 50 chars)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#display_name Vps#display_name}
  */
  readonly displayName?: string;
  /**
  * Id of the image to install on the VPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#image_id Vps#image_id}
  */
  readonly imageId?: string;
  /**
  * KVM keyboard layout on VPS Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#keymap Vps#keymap}
  */
  readonly keymap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#memory_limit Vps#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * A structure describing characteristics of a VPS model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#model Vps#model}
  */
  readonly model?: VpsModel;
  /**
  * Ip blocks for OVH monitoring servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#monitoring_ip_blocks Vps#monitoring_ip_blocks}
  */
  readonly monitoringIpBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#name Vps#name}
  */
  readonly name?: string;
  /**
  * All values a VPS netboot mode can be in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#netboot_mode Vps#netboot_mode}
  */
  readonly netbootMode?: string;
  /**
  * All offers a VPS can have
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#offer_type Vps#offer_type}
  */
  readonly offerType?: string;
  /**
  * OVH subsidiaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#ovh_subsidiary Vps#ovh_subsidiary}
  */
  readonly ovhSubsidiary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#plan Vps#plan}
  */
  readonly plan?: VpsPlan[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#plan_option Vps#plan_option}
  */
  readonly planOption?: VpsPlanOption[] | cdktf.IResolvable;
  /**
  * Public SSH key to pre-install on your VPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#public_ssh_key Vps#public_ssh_key}
  */
  readonly publicSshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#sla_monitoring Vps#sla_monitoring}
  */
  readonly slaMonitoring?: boolean | cdktf.IResolvable;
  /**
  * All states a VPS can be in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#state Vps#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#vcore Vps#vcore}
  */
  readonly vcore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#zone Vps#zone}
  */
  readonly zone?: string;
}
export interface VpsIam {
}

export function vpsIamToTerraform(struct?: VpsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpsIamToHclTerraform(struct?: VpsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpsIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpsIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface VpsModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#available_options Vps#available_options}
  */
  readonly availableOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#datacenter Vps#datacenter}
  */
  readonly datacenter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#disk Vps#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#maximum_additionnal_ip Vps#maximum_additionnal_ip}
  */
  readonly maximumAdditionnalIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#memory Vps#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#name Vps#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#offer Vps#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#vcore Vps#vcore}
  */
  readonly vcore?: number;
  /**
  * All versions that VPS can have
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#version Vps#version}
  */
  readonly version?: string;
}

export function vpsModelToTerraform(struct?: VpsModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availableOptions),
    datacenter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenter),
    disk: cdktf.numberToTerraform(struct!.disk),
    maximum_additionnal_ip: cdktf.numberToTerraform(struct!.maximumAdditionnalIp),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    offer: cdktf.stringToTerraform(struct!.offer),
    vcore: cdktf.numberToTerraform(struct!.vcore),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function vpsModelToHclTerraform(struct?: VpsModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availableOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datacenter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datacenter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_additionnal_ip: {
      value: cdktf.numberToHclTerraform(struct!.maximumAdditionnalIp),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcore: {
      value: cdktf.numberToHclTerraform(struct!.vcore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpsModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpsModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availableOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableOptions = this._availableOptions;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._maximumAdditionnalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAdditionnalIp = this._maximumAdditionnalIp;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._vcore !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcore = this._vcore;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availableOptions = undefined;
      this._datacenter = undefined;
      this._disk = undefined;
      this._maximumAdditionnalIp = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._offer = undefined;
      this._vcore = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availableOptions = value.availableOptions;
      this._datacenter = value.datacenter;
      this._disk = value.disk;
      this._maximumAdditionnalIp = value.maximumAdditionnalIp;
      this._memory = value.memory;
      this._name = value.name;
      this._offer = value.offer;
      this._vcore = value.vcore;
      this._version = value.version;
    }
  }

  // available_options - computed: true, optional: true, required: false
  private _availableOptions?: string[]; 
  public get availableOptions() {
    return this.getListAttribute('available_options');
  }
  public set availableOptions(value: string[]) {
    this._availableOptions = value;
  }
  public resetAvailableOptions() {
    this._availableOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableOptionsInput() {
    return this._availableOptions;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string[]; 
  public get datacenter() {
    return this.getListAttribute('datacenter');
  }
  public set datacenter(value: string[]) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // maximum_additionnal_ip - computed: true, optional: true, required: false
  private _maximumAdditionnalIp?: number; 
  public get maximumAdditionnalIp() {
    return this.getNumberAttribute('maximum_additionnal_ip');
  }
  public set maximumAdditionnalIp(value: number) {
    this._maximumAdditionnalIp = value;
  }
  public resetMaximumAdditionnalIp() {
    this._maximumAdditionnalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAdditionnalIpInput() {
    return this._maximumAdditionnalIp;
  }

  // memory - computed: true, optional: true, required: false
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

  // offer - computed: true, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // vcore - computed: true, optional: true, required: false
  private _vcore?: number; 
  public get vcore() {
    return this.getNumberAttribute('vcore');
  }
  public set vcore(value: number) {
    this._vcore = value;
  }
  public resetVcore() {
    this._vcore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoreInput() {
    return this._vcore;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VpsOrderDetails {
}

export function vpsOrderDetailsToTerraform(struct?: VpsOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpsOrderDetailsToHclTerraform(struct?: VpsOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpsOrderDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpsOrderDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsOrderDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detail_type - computed: true, optional: false, required: false
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // order_detail_id - computed: true, optional: false, required: false
  public get orderDetailId() {
    return this.getNumberAttribute('order_detail_id');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }
}

export class VpsOrderDetailsList extends cdktf.ComplexList {

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
  public get(index: number): VpsOrderDetailsOutputReference {
    return new VpsOrderDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpsOrder {
}

export function vpsOrderToTerraform(struct?: VpsOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpsOrderToHclTerraform(struct?: VpsOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpsOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpsOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // details - computed: true, optional: false, required: false
  private _details = new VpsOrderDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
}
export interface VpsPlanConfiguration {
  /**
  * Label for your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#label Vps#label}
  */
  readonly label: string;
  /**
  * Value or resource URL on API.OVH.COM of your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#value Vps#value}
  */
  readonly value: string;
}

export function vpsPlanConfigurationToTerraform(struct?: VpsPlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vpsPlanConfigurationToHclTerraform(struct?: VpsPlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class VpsPlanConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpsPlanConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsPlanConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: true, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: true, optional: false, required: true
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

export class VpsPlanConfigurationList extends cdktf.ComplexList {
  public internalValue? : VpsPlanConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VpsPlanConfigurationOutputReference {
    return new VpsPlanConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpsPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#configuration Vps#configuration}
  */
  readonly configuration?: VpsPlanConfiguration[] | cdktf.IResolvable;
  /**
  * Duration selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#duration Vps#duration}
  */
  readonly duration: string;
  /**
  * Cart item to be linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#item_id Vps#item_id}
  */
  readonly itemId?: number;
  /**
  * Identifier of the option offer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#plan_code Vps#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing mode selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#pricing_mode Vps#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * Quantity of product desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#quantity Vps#quantity}
  */
  readonly quantity?: number;
}

export function vpsPlanToTerraform(struct?: VpsPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(vpsPlanConfigurationToTerraform, false)(struct!.configuration),
    duration: cdktf.stringToTerraform(struct!.duration),
    item_id: cdktf.numberToTerraform(struct!.itemId),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function vpsPlanToHclTerraform(struct?: VpsPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(vpsPlanConfigurationToHclTerraform, false)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "VpsPlanConfigurationList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_id: {
      value: cdktf.numberToHclTerraform(struct!.itemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpsPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpsPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._duration = undefined;
      this._itemId = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._duration = value.duration;
      this._itemId = value.itemId;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._quantity = value.quantity;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new VpsPlanConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: VpsPlanConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // item_id - computed: false, optional: true, required: false
  private _itemId?: number; 
  public get itemId() {
    return this.getNumberAttribute('item_id');
  }
  public set itemId(value: number) {
    this._itemId = value;
  }
  public resetItemId() {
    this._itemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class VpsPlanList extends cdktf.ComplexList {
  public internalValue? : VpsPlan[] | cdktf.IResolvable

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
  public get(index: number): VpsPlanOutputReference {
    return new VpsPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpsPlanOptionConfiguration {
  /**
  * Label for your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#label Vps#label}
  */
  readonly label: string;
  /**
  * Value or resource URL on API.OVH.COM of your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#value Vps#value}
  */
  readonly value: string;
}

export function vpsPlanOptionConfigurationToTerraform(struct?: VpsPlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vpsPlanOptionConfigurationToHclTerraform(struct?: VpsPlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class VpsPlanOptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpsPlanOptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsPlanOptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

export class VpsPlanOptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : VpsPlanOptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VpsPlanOptionConfigurationOutputReference {
    return new VpsPlanOptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpsPlanOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#configuration Vps#configuration}
  */
  readonly configuration?: VpsPlanOptionConfiguration[] | cdktf.IResolvable;
  /**
  * Duration selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#duration Vps#duration}
  */
  readonly duration: string;
  /**
  * Identifier of the option offer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#plan_code Vps#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing mode selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#pricing_mode Vps#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * Quantity of product desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#quantity Vps#quantity}
  */
  readonly quantity: number;
}

export function vpsPlanOptionToTerraform(struct?: VpsPlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(vpsPlanOptionConfigurationToTerraform, false)(struct!.configuration),
    duration: cdktf.stringToTerraform(struct!.duration),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function vpsPlanOptionToHclTerraform(struct?: VpsPlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(vpsPlanOptionConfigurationToHclTerraform, false)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "VpsPlanOptionConfigurationList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpsPlanOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpsPlanOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpsPlanOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._duration = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._duration = value.duration;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._quantity = value.quantity;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new VpsPlanOptionConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: VpsPlanOptionConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class VpsPlanOptionList extends cdktf.ComplexList {
  public internalValue? : VpsPlanOption[] | cdktf.IResolvable

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
  public get(index: number): VpsPlanOptionOutputReference {
    return new VpsPlanOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps ovh_vps}
*/
export class Vps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vps to import
  * @param importFromId The id of the existing Vps that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vps ovh_vps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_vps',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._imageId = config.imageId;
    this._keymap = config.keymap;
    this._memoryLimit = config.memoryLimit;
    this._model.internalValue = config.model;
    this._monitoringIpBlocks = config.monitoringIpBlocks;
    this._name = config.name;
    this._netbootMode = config.netbootMode;
    this._offerType = config.offerType;
    this._ovhSubsidiary = config.ovhSubsidiary;
    this._plan.internalValue = config.plan;
    this._planOption.internalValue = config.planOption;
    this._publicSshKey = config.publicSshKey;
    this._slaMonitoring = config.slaMonitoring;
    this._state = config.state;
    this._vcore = config.vcore;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
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

  // iam - computed: true, optional: false, required: false
  private _iam = new VpsIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // keymap - computed: true, optional: true, required: false
  private _keymap?: string; 
  public get keymap() {
    return this.getStringAttribute('keymap');
  }
  public set keymap(value: string) {
    this._keymap = value;
  }
  public resetKeymap() {
    this._keymap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keymapInput() {
    return this._keymap;
  }

  // memory_limit - computed: true, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // model - computed: true, optional: true, required: false
  private _model = new VpsModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: VpsModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // monitoring_ip_blocks - computed: true, optional: true, required: false
  private _monitoringIpBlocks?: string[]; 
  public get monitoringIpBlocks() {
    return this.getListAttribute('monitoring_ip_blocks');
  }
  public set monitoringIpBlocks(value: string[]) {
    this._monitoringIpBlocks = value;
  }
  public resetMonitoringIpBlocks() {
    this._monitoringIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIpBlocksInput() {
    return this._monitoringIpBlocks;
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

  // netboot_mode - computed: true, optional: true, required: false
  private _netbootMode?: string; 
  public get netbootMode() {
    return this.getStringAttribute('netboot_mode');
  }
  public set netbootMode(value: string) {
    this._netbootMode = value;
  }
  public resetNetbootMode() {
    this._netbootMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbootModeInput() {
    return this._netbootMode;
  }

  // offer_type - computed: true, optional: true, required: false
  private _offerType?: string; 
  public get offerType() {
    return this.getStringAttribute('offer_type');
  }
  public set offerType(value: string) {
    this._offerType = value;
  }
  public resetOfferType() {
    this._offerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerTypeInput() {
    return this._offerType;
  }

  // order - computed: true, optional: false, required: false
  private _order = new VpsOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }

  // ovh_subsidiary - computed: false, optional: true, required: false
  private _ovhSubsidiary?: string; 
  public get ovhSubsidiary() {
    return this.getStringAttribute('ovh_subsidiary');
  }
  public set ovhSubsidiary(value: string) {
    this._ovhSubsidiary = value;
  }
  public resetOvhSubsidiary() {
    this._ovhSubsidiary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhSubsidiaryInput() {
    return this._ovhSubsidiary;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new VpsPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: VpsPlan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // plan_option - computed: false, optional: true, required: false
  private _planOption = new VpsPlanOptionList(this, "plan_option", false);
  public get planOption() {
    return this._planOption;
  }
  public putPlanOption(value: VpsPlanOption[] | cdktf.IResolvable) {
    this._planOption.internalValue = value;
  }
  public resetPlanOption() {
    this._planOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planOptionInput() {
    return this._planOption.internalValue;
  }

  // public_ssh_key - computed: false, optional: true, required: false
  private _publicSshKey?: string; 
  public get publicSshKey() {
    return this.getStringAttribute('public_ssh_key');
  }
  public set publicSshKey(value: string) {
    this._publicSshKey = value;
  }
  public resetPublicSshKey() {
    this._publicSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSshKeyInput() {
    return this._publicSshKey;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sla_monitoring - computed: true, optional: true, required: false
  private _slaMonitoring?: boolean | cdktf.IResolvable; 
  public get slaMonitoring() {
    return this.getBooleanAttribute('sla_monitoring');
  }
  public set slaMonitoring(value: boolean | cdktf.IResolvable) {
    this._slaMonitoring = value;
  }
  public resetSlaMonitoring() {
    this._slaMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaMonitoringInput() {
    return this._slaMonitoring;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vcore - computed: true, optional: true, required: false
  private _vcore?: number; 
  public get vcore() {
    return this.getNumberAttribute('vcore');
  }
  public set vcore(value: number) {
    this._vcore = value;
  }
  public resetVcore() {
    this._vcore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoreInput() {
    return this._vcore;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      image_id: cdktf.stringToTerraform(this._imageId),
      keymap: cdktf.stringToTerraform(this._keymap),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      model: vpsModelToTerraform(this._model.internalValue),
      monitoring_ip_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitoringIpBlocks),
      name: cdktf.stringToTerraform(this._name),
      netboot_mode: cdktf.stringToTerraform(this._netbootMode),
      offer_type: cdktf.stringToTerraform(this._offerType),
      ovh_subsidiary: cdktf.stringToTerraform(this._ovhSubsidiary),
      plan: cdktf.listMapper(vpsPlanToTerraform, false)(this._plan.internalValue),
      plan_option: cdktf.listMapper(vpsPlanOptionToTerraform, false)(this._planOption.internalValue),
      public_ssh_key: cdktf.stringToTerraform(this._publicSshKey),
      sla_monitoring: cdktf.booleanToTerraform(this._slaMonitoring),
      state: cdktf.stringToTerraform(this._state),
      vcore: cdktf.numberToTerraform(this._vcore),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keymap: {
        value: cdktf.stringToHclTerraform(this._keymap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model: {
        value: vpsModelToHclTerraform(this._model.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpsModel",
      },
      monitoring_ip_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitoringIpBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netboot_mode: {
        value: cdktf.stringToHclTerraform(this._netbootMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offer_type: {
        value: cdktf.stringToHclTerraform(this._offerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovh_subsidiary: {
        value: cdktf.stringToHclTerraform(this._ovhSubsidiary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.listMapperHcl(vpsPlanToHclTerraform, false)(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpsPlanList",
      },
      plan_option: {
        value: cdktf.listMapperHcl(vpsPlanOptionToHclTerraform, false)(this._planOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpsPlanOptionList",
      },
      public_ssh_key: {
        value: cdktf.stringToHclTerraform(this._publicSshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_monitoring: {
        value: cdktf.booleanToHclTerraform(this._slaMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcore: {
        value: cdktf.numberToHclTerraform(this._vcore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
