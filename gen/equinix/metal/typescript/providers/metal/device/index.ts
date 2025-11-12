// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, a device with OS custom_ipxe will
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#always_pxe Device#always_pxe}
  */
  readonly alwaysPxe?: boolean | cdktf.IResolvable;
  /**
  * monthly or hourly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#billing_cycle Device#billing_cycle}
  */
  readonly billingCycle?: string;
  /**
  * A string of the desired Custom Data for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#custom_data Device#custom_data}
  */
  readonly customData?: string;
  /**
  * Description string for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#description Device#description}
  */
  readonly description?: string;
  /**
  * List of facility codes with deployment preferences. Equinix Metal API will go through the list and will deploy your device to first facility with free capacity. List items must be facility codes or any (a wildcard). To find the facility code, visit [Facilities API docs](https://metal.equinix.com/developers/api/facilities/), set your API auth token in the top of the page and see JSON from the API response. Conflicts with metro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#facilities Device#facilities}
  */
  readonly facilities?: string[];
  /**
  * Delete device even if it has volumes attached. Only applies for destroy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#force_detach_volumes Device#force_detach_volumes}
  */
  readonly forceDetachVolumes?: boolean | cdktf.IResolvable;
  /**
  * The UUID of the hardware reservation where you want this device deployed, or next-available if you want to pick your next available reservation automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#hardware_reservation_id Device#hardware_reservation_id}
  */
  readonly hardwareReservationId?: string;
  /**
  * The device hostname used in deployments taking advantage of Layer3 DHCP or metadata service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#hostname Device#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#id Device#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URL pointing to a hosted iPXE script. More
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#ipxe_script_url Device#ipxe_script_url}
  */
  readonly ipxeScriptUrl?: string;
  /**
  * Metro area for the new device. Conflicts with facilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#metro Device#metro}
  */
  readonly metro?: string;
  /**
  * The operating system slug. To find the slug, or visit [Operating Systems API docs](https://metal.equinix.com/developers/api/operatingsystems), set your API auth token in the top of the page and see JSON from the API response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#operating_system Device#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * The device plan slug. To find the plan slug, visit [Device plans API docs](https://metal.equinix.com/developers/api/plans), set your auth token in the top of the page and see JSON from the API response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#plan Device#plan}
  */
  readonly plan: string;
  /**
  * The ID of the project in which to create the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#project_id Device#project_id}
  */
  readonly projectId: string;
  /**
  * Array of IDs of the project SSH keys which should be added to the device. If you omit this, SSH keys of all the members of the parent project will be added to the device. If you specify this array, only the listed project SSH keys will be added. Project SSH keys can be created with the [metal_project_ssh_key](project_ssh_key.md) resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#project_ssh_key_ids Device#project_ssh_key_ids}
  */
  readonly projectSshKeyIds?: string[];
  /**
  * JSON for custom partitioning. Only usable on reserved hardware. More information in in the [Custom Partitioning and RAID](https://metal.equinix.com/developers/docs/servers/custom-partitioning-raid/) doc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#storage Device#storage}
  */
  readonly storage?: string;
  /**
  * Tags attached to the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#tags Device#tags}
  */
  readonly tags?: string[];
  /**
  * Timestamp for device termination. For example "2021-09-03T16:32:00+03:00". If you don't supply timezone info, timestamp is assumed to be in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#termination_time Device#termination_time}
  */
  readonly terminationTime?: string;
  /**
  * A string of the desired User Data for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#user_data Device#user_data}
  */
  readonly userData?: string;
  /**
  * Only used for devices in reserved hardware. If set, the deletion of this device will block until the hardware reservation is marked provisionable (about 4 minutes in August 2019)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#wait_for_reservation_deprovision Device#wait_for_reservation_deprovision}
  */
  readonly waitForReservationDeprovision?: boolean | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#ip_address Device#ip_address}
  */
  readonly ipAddress?: DeviceIpAddress[] | cdktf.IResolvable;
  /**
  * reinstall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#reinstall Device#reinstall}
  */
  readonly reinstall?: DeviceReinstall;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#timeouts Device#timeouts}
  */
  readonly timeouts?: DeviceTimeouts;
}
export interface DeviceNetwork {
}

export function deviceNetworkToTerraform(struct?: DeviceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceNetworkToHclTerraform(struct?: DeviceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getNumberAttribute('family');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }
}

export class DeviceNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DeviceNetworkOutputReference {
    return new DeviceNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevicePorts {
}

export function devicePortsToTerraform(struct?: DevicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devicePortsToHclTerraform(struct?: DevicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bonded - computed: true, optional: false, required: false
  public get bonded() {
    return this.getBooleanAttribute('bonded');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DevicePortsList extends cdktf.ComplexList {

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
  public get(index: number): DevicePortsOutputReference {
    return new DevicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceIpAddress {
  /**
  * CIDR suffix for IP block assigned to this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#cidr Device#cidr}
  */
  readonly cidr?: number;
  /**
  * IDs of reservations to pick the blocks from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#reservation_ids Device#reservation_ids}
  */
  readonly reservationIds?: string[];
  /**
  * one of public_ipv4,private_ipv4,public_ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#type Device#type}
  */
  readonly type: string;
}

export function deviceIpAddressToTerraform(struct?: DeviceIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.numberToTerraform(struct!.cidr),
    reservation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reservationIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function deviceIpAddressToHclTerraform(struct?: DeviceIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.numberToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reservation_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reservationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DeviceIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._reservationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationIds = this._reservationIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._reservationIds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._reservationIds = value.reservationIds;
      this._type = value.type;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // reservation_ids - computed: false, optional: true, required: false
  private _reservationIds?: string[]; 
  public get reservationIds() {
    return this.getListAttribute('reservation_ids');
  }
  public set reservationIds(value: string[]) {
    this._reservationIds = value;
  }
  public resetReservationIds() {
    this._reservationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationIdsInput() {
    return this._reservationIds;
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

export class DeviceIpAddressList extends cdktf.ComplexList {
  public internalValue? : DeviceIpAddress[] | cdktf.IResolvable

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
  public get(index: number): DeviceIpAddressOutputReference {
    return new DeviceIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceReinstall {
  /**
  * Whether the OS disk should be filled with `00h` bytes before reinstall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#deprovision_fast Device#deprovision_fast}
  */
  readonly deprovisionFast?: boolean | cdktf.IResolvable;
  /**
  * Whether the device should be reinstalled instead of destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#enabled Device#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the non-OS disks should be kept or wiped during reinstall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#preserve_data Device#preserve_data}
  */
  readonly preserveData?: boolean | cdktf.IResolvable;
}

export function deviceReinstallToTerraform(struct?: DeviceReinstallOutputReference | DeviceReinstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deprovision_fast: cdktf.booleanToTerraform(struct!.deprovisionFast),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    preserve_data: cdktf.booleanToTerraform(struct!.preserveData),
  }
}


export function deviceReinstallToHclTerraform(struct?: DeviceReinstallOutputReference | DeviceReinstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deprovision_fast: {
      value: cdktf.booleanToHclTerraform(struct!.deprovisionFast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_data: {
      value: cdktf.booleanToHclTerraform(struct!.preserveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceReinstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeviceReinstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deprovisionFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprovisionFast = this._deprovisionFast;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._preserveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveData = this._preserveData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReinstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deprovisionFast = undefined;
      this._enabled = undefined;
      this._preserveData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deprovisionFast = value.deprovisionFast;
      this._enabled = value.enabled;
      this._preserveData = value.preserveData;
    }
  }

  // deprovision_fast - computed: false, optional: true, required: false
  private _deprovisionFast?: boolean | cdktf.IResolvable; 
  public get deprovisionFast() {
    return this.getBooleanAttribute('deprovision_fast');
  }
  public set deprovisionFast(value: boolean | cdktf.IResolvable) {
    this._deprovisionFast = value;
  }
  public resetDeprovisionFast() {
    this._deprovisionFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionFastInput() {
    return this._deprovisionFast;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // preserve_data - computed: false, optional: true, required: false
  private _preserveData?: boolean | cdktf.IResolvable; 
  public get preserveData() {
    return this.getBooleanAttribute('preserve_data');
  }
  public set preserveData(value: boolean | cdktf.IResolvable) {
    this._preserveData = value;
  }
  public resetPreserveData() {
    this._preserveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDataInput() {
    return this._preserveData;
  }
}
export interface DeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#create Device#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#delete Device#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#update Device#update}
  */
  readonly update?: string;
}

export function deviceTimeoutsToTerraform(struct?: DeviceTimeouts | cdktf.IResolvable): any {
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


export function deviceTimeoutsToHclTerraform(struct?: DeviceTimeouts | cdktf.IResolvable): any {
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

export class DeviceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeviceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeviceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device metal_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/device metal_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'metal_device',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0',
        providerVersionConstraint: '3.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysPxe = config.alwaysPxe;
    this._billingCycle = config.billingCycle;
    this._customData = config.customData;
    this._description = config.description;
    this._facilities = config.facilities;
    this._forceDetachVolumes = config.forceDetachVolumes;
    this._hardwareReservationId = config.hardwareReservationId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipxeScriptUrl = config.ipxeScriptUrl;
    this._metro = config.metro;
    this._operatingSystem = config.operatingSystem;
    this._plan = config.plan;
    this._projectId = config.projectId;
    this._projectSshKeyIds = config.projectSshKeyIds;
    this._storage = config.storage;
    this._tags = config.tags;
    this._terminationTime = config.terminationTime;
    this._userData = config.userData;
    this._waitForReservationDeprovision = config.waitForReservationDeprovision;
    this._ipAddress.internalValue = config.ipAddress;
    this._reinstall.internalValue = config.reinstall;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_private_ipv4 - computed: true, optional: false, required: false
  public get accessPrivateIpv4() {
    return this.getStringAttribute('access_private_ipv4');
  }

  // access_public_ipv4 - computed: true, optional: false, required: false
  public get accessPublicIpv4() {
    return this.getStringAttribute('access_public_ipv4');
  }

  // access_public_ipv6 - computed: true, optional: false, required: false
  public get accessPublicIpv6() {
    return this.getStringAttribute('access_public_ipv6');
  }

  // always_pxe - computed: false, optional: true, required: false
  private _alwaysPxe?: boolean | cdktf.IResolvable; 
  public get alwaysPxe() {
    return this.getBooleanAttribute('always_pxe');
  }
  public set alwaysPxe(value: boolean | cdktf.IResolvable) {
    this._alwaysPxe = value;
  }
  public resetAlwaysPxe() {
    this._alwaysPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPxeInput() {
    return this._alwaysPxe;
  }

  // billing_cycle - computed: true, optional: true, required: false
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  public resetBillingCycle() {
    this._billingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // deployed_facility - computed: true, optional: false, required: false
  public get deployedFacility() {
    return this.getStringAttribute('deployed_facility');
  }

  // deployed_hardware_reservation_id - computed: true, optional: false, required: false
  public get deployedHardwareReservationId() {
    return this.getStringAttribute('deployed_hardware_reservation_id');
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

  // facilities - computed: false, optional: true, required: false
  private _facilities?: string[]; 
  public get facilities() {
    return this.getListAttribute('facilities');
  }
  public set facilities(value: string[]) {
    this._facilities = value;
  }
  public resetFacilities() {
    this._facilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilitiesInput() {
    return this._facilities;
  }

  // force_detach_volumes - computed: false, optional: true, required: false
  private _forceDetachVolumes?: boolean | cdktf.IResolvable; 
  public get forceDetachVolumes() {
    return this.getBooleanAttribute('force_detach_volumes');
  }
  public set forceDetachVolumes(value: boolean | cdktf.IResolvable) {
    this._forceDetachVolumes = value;
  }
  public resetForceDetachVolumes() {
    this._forceDetachVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDetachVolumesInput() {
    return this._forceDetachVolumes;
  }

  // hardware_reservation_id - computed: false, optional: true, required: false
  private _hardwareReservationId?: string; 
  public get hardwareReservationId() {
    return this.getStringAttribute('hardware_reservation_id');
  }
  public set hardwareReservationId(value: string) {
    this._hardwareReservationId = value;
  }
  public resetHardwareReservationId() {
    this._hardwareReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareReservationIdInput() {
    return this._hardwareReservationId;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ipxe_script_url - computed: false, optional: true, required: false
  private _ipxeScriptUrl?: string; 
  public get ipxeScriptUrl() {
    return this.getStringAttribute('ipxe_script_url');
  }
  public set ipxeScriptUrl(value: string) {
    this._ipxeScriptUrl = value;
  }
  public resetIpxeScriptUrl() {
    this._ipxeScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptUrlInput() {
    return this._ipxeScriptUrl;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DeviceNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DevicePortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_ssh_key_ids - computed: false, optional: true, required: false
  private _projectSshKeyIds?: string[]; 
  public get projectSshKeyIds() {
    return this.getListAttribute('project_ssh_key_ids');
  }
  public set projectSshKeyIds(value: string[]) {
    this._projectSshKeyIds = value;
  }
  public resetProjectSshKeyIds() {
    this._projectSshKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSshKeyIdsInput() {
    return this._projectSshKeyIds;
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // ssh_key_ids - computed: true, optional: false, required: false
  public get sshKeyIds() {
    return this.getListAttribute('ssh_key_ids');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // termination_time - computed: false, optional: true, required: false
  private _terminationTime?: string; 
  public get terminationTime() {
    return this.getStringAttribute('termination_time');
  }
  public set terminationTime(value: string) {
    this._terminationTime = value;
  }
  public resetTerminationTime() {
    this._terminationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationTimeInput() {
    return this._terminationTime;
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

  // wait_for_reservation_deprovision - computed: false, optional: true, required: false
  private _waitForReservationDeprovision?: boolean | cdktf.IResolvable; 
  public get waitForReservationDeprovision() {
    return this.getBooleanAttribute('wait_for_reservation_deprovision');
  }
  public set waitForReservationDeprovision(value: boolean | cdktf.IResolvable) {
    this._waitForReservationDeprovision = value;
  }
  public resetWaitForReservationDeprovision() {
    this._waitForReservationDeprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReservationDeprovisionInput() {
    return this._waitForReservationDeprovision;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new DeviceIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: DeviceIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // reinstall - computed: false, optional: true, required: false
  private _reinstall = new DeviceReinstallOutputReference(this, "reinstall");
  public get reinstall() {
    return this._reinstall;
  }
  public putReinstall(value: DeviceReinstall) {
    this._reinstall.internalValue = value;
  }
  public resetReinstall() {
    this._reinstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinstallInput() {
    return this._reinstall.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeviceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeviceTimeouts) {
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
      always_pxe: cdktf.booleanToTerraform(this._alwaysPxe),
      billing_cycle: cdktf.stringToTerraform(this._billingCycle),
      custom_data: cdktf.stringToTerraform(this._customData),
      description: cdktf.stringToTerraform(this._description),
      facilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._facilities),
      force_detach_volumes: cdktf.booleanToTerraform(this._forceDetachVolumes),
      hardware_reservation_id: cdktf.stringToTerraform(this._hardwareReservationId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ipxe_script_url: cdktf.stringToTerraform(this._ipxeScriptUrl),
      metro: cdktf.stringToTerraform(this._metro),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      plan: cdktf.stringToTerraform(this._plan),
      project_id: cdktf.stringToTerraform(this._projectId),
      project_ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectSshKeyIds),
      storage: cdktf.stringToTerraform(this._storage),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      termination_time: cdktf.stringToTerraform(this._terminationTime),
      user_data: cdktf.stringToTerraform(this._userData),
      wait_for_reservation_deprovision: cdktf.booleanToTerraform(this._waitForReservationDeprovision),
      ip_address: cdktf.listMapper(deviceIpAddressToTerraform, true)(this._ipAddress.internalValue),
      reinstall: deviceReinstallToTerraform(this._reinstall.internalValue),
      timeouts: deviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_pxe: {
        value: cdktf.booleanToHclTerraform(this._alwaysPxe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_cycle: {
        value: cdktf.stringToHclTerraform(this._billingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._facilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_detach_volumes: {
        value: cdktf.booleanToHclTerraform(this._forceDetachVolumes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hardware_reservation_id: {
        value: cdktf.stringToHclTerraform(this._hardwareReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ipxe_script_url: {
        value: cdktf.stringToHclTerraform(this._ipxeScriptUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ssh_key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectSshKeyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      termination_time: {
        value: cdktf.stringToHclTerraform(this._terminationTime),
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
      wait_for_reservation_deprovision: {
        value: cdktf.booleanToHclTerraform(this._waitForReservationDeprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_address: {
        value: cdktf.listMapperHcl(deviceIpAddressToHclTerraform, true)(this._ipAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceIpAddressList",
      },
      reinstall: {
        value: deviceReinstallToHclTerraform(this._reinstall.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceReinstallList",
      },
      timeouts: {
        value: deviceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeviceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
