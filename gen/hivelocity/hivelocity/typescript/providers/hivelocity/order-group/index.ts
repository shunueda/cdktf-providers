// https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrderGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#id OrderGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this Order Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#name OrderGroup#name}
  */
  readonly name: string;
  /**
  * Devices will be placed in the same rack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#same_rack OrderGroup#same_rack}
  */
  readonly sameRack: boolean | cdktf.IResolvable;
  /**
  * bare_metal_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#bare_metal_device OrderGroup#bare_metal_device}
  */
  readonly bareMetalDevice: OrderGroupBareMetalDevice[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#timeouts OrderGroup#timeouts}
  */
  readonly timeouts?: OrderGroupTimeouts;
}
export interface OrderGroupBareMetalDevice {
  /**
  * When set, prefer only bonded devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#bonded OrderGroup#bonded}
  */
  readonly bonded?: boolean | cdktf.IResolvable;
  /**
  * Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#device_id OrderGroup#device_id}
  */
  readonly deviceId?: number;
  /**
  * Force deployment of this Device ID (internal use only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#force_device_id OrderGroup#force_device_id}
  */
  readonly forceDeviceId?: number;
  /**
  * Hostname for this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#hostname OrderGroup#hostname}
  */
  readonly hostname: string;
  /**
  * IgnitionConfig ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#ignition_id OrderGroup#ignition_id}
  */
  readonly ignitionId?: number;
  /**
  * Last time this device was updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#last_updated OrderGroup#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Deploy device in this location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#location_name OrderGroup#location_name}
  */
  readonly locationName: string;
  /**
  * Order ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#order_id OrderGroup#order_id}
  */
  readonly orderId?: number;
  /**
  * Operating system to install on device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#os_name OrderGroup#os_name}
  */
  readonly osName: string;
  /**
  * Billing period for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#period OrderGroup#period}
  */
  readonly period?: string;
  /**
  * Power status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#power_status OrderGroup#power_status}
  */
  readonly powerStatus?: string;
  /**
  * Primary IP of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#primary_ip OrderGroup#primary_ip}
  */
  readonly primaryIp?: string;
  /**
  * Product ID to pick from the stock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#product_id OrderGroup#product_id}
  */
  readonly productId: number;
  /**
  * Product Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#product_name OrderGroup#product_name}
  */
  readonly productName?: string;
  /**
  * ID of a SSH Key to apply for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#public_ssh_key_id OrderGroup#public_ssh_key_id}
  */
  readonly publicSshKeyId?: number;
  /**
  * Post-install script for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#script OrderGroup#script}
  */
  readonly script?: string;
  /**
  * Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#service_id OrderGroup#service_id}
  */
  readonly serviceId?: number;
  /**
  * Tags to apply for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#tags OrderGroup#tags}
  */
  readonly tags?: string[];
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#vlan_id OrderGroup#vlan_id}
  */
  readonly vlanId?: number;
}

export function orderGroupBareMetalDeviceToTerraform(struct?: OrderGroupBareMetalDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bonded: cdktf.booleanToTerraform(struct!.bonded),
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    force_device_id: cdktf.numberToTerraform(struct!.forceDeviceId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ignition_id: cdktf.numberToTerraform(struct!.ignitionId),
    last_updated: cdktf.stringToTerraform(struct!.lastUpdated),
    location_name: cdktf.stringToTerraform(struct!.locationName),
    order_id: cdktf.numberToTerraform(struct!.orderId),
    os_name: cdktf.stringToTerraform(struct!.osName),
    period: cdktf.stringToTerraform(struct!.period),
    power_status: cdktf.stringToTerraform(struct!.powerStatus),
    primary_ip: cdktf.stringToTerraform(struct!.primaryIp),
    product_id: cdktf.numberToTerraform(struct!.productId),
    product_name: cdktf.stringToTerraform(struct!.productName),
    public_ssh_key_id: cdktf.numberToTerraform(struct!.publicSshKeyId),
    script: cdktf.stringToTerraform(struct!.script),
    service_id: cdktf.numberToTerraform(struct!.serviceId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function orderGroupBareMetalDeviceToHclTerraform(struct?: OrderGroupBareMetalDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bonded: {
      value: cdktf.booleanToHclTerraform(struct!.bonded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_device_id: {
      value: cdktf.numberToHclTerraform(struct!.forceDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignition_id: {
      value: cdktf.numberToHclTerraform(struct!.ignitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_updated: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_id: {
      value: cdktf.numberToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_status: {
      value: cdktf.stringToHclTerraform(struct!.powerStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_id: {
      value: cdktf.numberToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_name: {
      value: cdktf.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ssh_key_id: {
      value: cdktf.numberToHclTerraform(struct!.publicSshKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.numberToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrderGroupBareMetalDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrderGroupBareMetalDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bonded !== undefined) {
      hasAnyValues = true;
      internalValueResult.bonded = this._bonded;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._forceDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeviceId = this._forceDeviceId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ignitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignitionId = this._ignitionId;
    }
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._powerStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerStatus = this._powerStatus;
    }
    if (this._primaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIp = this._primaryIp;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._productName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._publicSshKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSshKeyId = this._publicSshKeyId;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderGroupBareMetalDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bonded = undefined;
      this._deviceId = undefined;
      this._forceDeviceId = undefined;
      this._hostname = undefined;
      this._ignitionId = undefined;
      this._lastUpdated = undefined;
      this._locationName = undefined;
      this._orderId = undefined;
      this._osName = undefined;
      this._period = undefined;
      this._powerStatus = undefined;
      this._primaryIp = undefined;
      this._productId = undefined;
      this._productName = undefined;
      this._publicSshKeyId = undefined;
      this._script = undefined;
      this._serviceId = undefined;
      this._tags = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bonded = value.bonded;
      this._deviceId = value.deviceId;
      this._forceDeviceId = value.forceDeviceId;
      this._hostname = value.hostname;
      this._ignitionId = value.ignitionId;
      this._lastUpdated = value.lastUpdated;
      this._locationName = value.locationName;
      this._orderId = value.orderId;
      this._osName = value.osName;
      this._period = value.period;
      this._powerStatus = value.powerStatus;
      this._primaryIp = value.primaryIp;
      this._productId = value.productId;
      this._productName = value.productName;
      this._publicSshKeyId = value.publicSshKeyId;
      this._script = value.script;
      this._serviceId = value.serviceId;
      this._tags = value.tags;
      this._vlanId = value.vlanId;
    }
  }

  // bonded - computed: false, optional: true, required: false
  private _bonded?: boolean | cdktf.IResolvable; 
  public get bonded() {
    return this.getBooleanAttribute('bonded');
  }
  public set bonded(value: boolean | cdktf.IResolvable) {
    this._bonded = value;
  }
  public resetBonded() {
    this._bonded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondedInput() {
    return this._bonded;
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

  // force_device_id - computed: false, optional: true, required: false
  private _forceDeviceId?: number; 
  public get forceDeviceId() {
    return this.getNumberAttribute('force_device_id');
  }
  public set forceDeviceId(value: number) {
    this._forceDeviceId = value;
  }
  public resetForceDeviceId() {
    this._forceDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeviceIdInput() {
    return this._forceDeviceId;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ignition_id - computed: false, optional: true, required: false
  private _ignitionId?: number; 
  public get ignitionId() {
    return this.getNumberAttribute('ignition_id');
  }
  public set ignitionId(value: number) {
    this._ignitionId = value;
  }
  public resetIgnitionId() {
    this._ignitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignitionIdInput() {
    return this._ignitionId;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: number; 
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
  public set orderId(value: number) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // os_name - computed: false, optional: false, required: true
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // power_status - computed: true, optional: true, required: false
  private _powerStatus?: string; 
  public get powerStatus() {
    return this.getStringAttribute('power_status');
  }
  public set powerStatus(value: string) {
    this._powerStatus = value;
  }
  public resetPowerStatus() {
    this._powerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStatusInput() {
    return this._powerStatus;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // public_ssh_key_id - computed: false, optional: true, required: false
  private _publicSshKeyId?: number; 
  public get publicSshKeyId() {
    return this.getNumberAttribute('public_ssh_key_id');
  }
  public set publicSshKeyId(value: number) {
    this._publicSshKeyId = value;
  }
  public resetPublicSshKeyId() {
    this._publicSshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSshKeyIdInput() {
    return this._publicSshKeyId;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
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
}

export class OrderGroupBareMetalDeviceList extends cdktf.ComplexList {
  public internalValue? : OrderGroupBareMetalDevice[] | cdktf.IResolvable

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
  public get(index: number): OrderGroupBareMetalDeviceOutputReference {
    return new OrderGroupBareMetalDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrderGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#create OrderGroup#create}
  */
  readonly create?: string;
}

export function orderGroupTimeoutsToTerraform(struct?: OrderGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function orderGroupTimeoutsToHclTerraform(struct?: OrderGroupTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrderGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrderGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group hivelocity_order_group}
*/
export class OrderGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hivelocity_order_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrderGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrderGroup to import
  * @param importFromId The id of the existing OrderGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrderGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hivelocity_order_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/order_group hivelocity_order_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrderGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OrderGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'hivelocity_order_group',
      terraformGeneratorMetadata: {
        providerName: 'hivelocity',
        providerVersion: '0.7.9',
        providerVersionConstraint: '0.7.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._sameRack = config.sameRack;
    this._bareMetalDevice.internalValue = config.bareMetalDevice;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // same_rack - computed: false, optional: false, required: true
  private _sameRack?: boolean | cdktf.IResolvable; 
  public get sameRack() {
    return this.getBooleanAttribute('same_rack');
  }
  public set sameRack(value: boolean | cdktf.IResolvable) {
    this._sameRack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sameRackInput() {
    return this._sameRack;
  }

  // bare_metal_device - computed: false, optional: false, required: true
  private _bareMetalDevice = new OrderGroupBareMetalDeviceList(this, "bare_metal_device", false);
  public get bareMetalDevice() {
    return this._bareMetalDevice;
  }
  public putBareMetalDevice(value: OrderGroupBareMetalDevice[] | cdktf.IResolvable) {
    this._bareMetalDevice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalDeviceInput() {
    return this._bareMetalDevice.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrderGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrderGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      same_rack: cdktf.booleanToTerraform(this._sameRack),
      bare_metal_device: cdktf.listMapper(orderGroupBareMetalDeviceToTerraform, true)(this._bareMetalDevice.internalValue),
      timeouts: orderGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      same_rack: {
        value: cdktf.booleanToHclTerraform(this._sameRack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bare_metal_device: {
        value: cdktf.listMapperHcl(orderGroupBareMetalDeviceToHclTerraform, true)(this._bareMetalDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrderGroupBareMetalDeviceList",
      },
      timeouts: {
        value: orderGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrderGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
