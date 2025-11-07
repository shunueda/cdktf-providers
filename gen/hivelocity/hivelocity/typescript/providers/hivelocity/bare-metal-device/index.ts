// https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BareMetalDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set, prefer only bonded devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#bonded BareMetalDevice#bonded}
  */
  readonly bonded?: boolean | cdktf.IResolvable;
  /**
  * Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#device_id BareMetalDevice#device_id}
  */
  readonly deviceId?: number;
  /**
  * Force deployment of this Device ID (internal use only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#force_device_id BareMetalDevice#force_device_id}
  */
  readonly forceDeviceId?: number;
  /**
  * Hostname for this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#hostname BareMetalDevice#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#id BareMetalDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IgnitionConfig ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#ignition_id BareMetalDevice#ignition_id}
  */
  readonly ignitionId?: number;
  /**
  * Last time this device was updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#last_updated BareMetalDevice#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Deploy device in this location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#location_name BareMetalDevice#location_name}
  */
  readonly locationName: string;
  /**
  * Order ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#order_id BareMetalDevice#order_id}
  */
  readonly orderId?: number;
  /**
  * Operating system to install on device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#os_name BareMetalDevice#os_name}
  */
  readonly osName: string;
  /**
  * Billing period for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#period BareMetalDevice#period}
  */
  readonly period?: string;
  /**
  * Power status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#power_status BareMetalDevice#power_status}
  */
  readonly powerStatus?: string;
  /**
  * Primary IP of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#primary_ip BareMetalDevice#primary_ip}
  */
  readonly primaryIp?: string;
  /**
  * Product ID to pick from the stock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#product_id BareMetalDevice#product_id}
  */
  readonly productId: number;
  /**
  * Product Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#product_name BareMetalDevice#product_name}
  */
  readonly productName?: string;
  /**
  * ID of a SSH Key to apply for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#public_ssh_key_id BareMetalDevice#public_ssh_key_id}
  */
  readonly publicSshKeyId?: number;
  /**
  * Post-install script for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#script BareMetalDevice#script}
  */
  readonly script?: string;
  /**
  * Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#service_id BareMetalDevice#service_id}
  */
  readonly serviceId?: number;
  /**
  * Tags to apply for device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#tags BareMetalDevice#tags}
  */
  readonly tags?: string[];
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#vlan_id BareMetalDevice#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#timeouts BareMetalDevice#timeouts}
  */
  readonly timeouts?: BareMetalDeviceTimeouts;
}
export interface BareMetalDeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#create BareMetalDevice#create}
  */
  readonly create?: string;
}

export function bareMetalDeviceTimeoutsToTerraform(struct?: BareMetalDeviceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function bareMetalDeviceTimeoutsToHclTerraform(struct?: BareMetalDeviceTimeouts | cdktf.IResolvable): any {
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

export class BareMetalDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BareMetalDeviceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BareMetalDeviceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device hivelocity_bare_metal_device}
*/
export class BareMetalDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hivelocity_bare_metal_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BareMetalDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BareMetalDevice to import
  * @param importFromId The id of the existing BareMetalDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BareMetalDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hivelocity_bare_metal_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/resources/bare_metal_device hivelocity_bare_metal_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BareMetalDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: BareMetalDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'hivelocity_bare_metal_device',
      terraformGeneratorMetadata: {
        providerName: 'hivelocity',
        providerVersion: '0.7.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bonded = config.bonded;
    this._deviceId = config.deviceId;
    this._forceDeviceId = config.forceDeviceId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ignitionId = config.ignitionId;
    this._lastUpdated = config.lastUpdated;
    this._locationName = config.locationName;
    this._orderId = config.orderId;
    this._osName = config.osName;
    this._period = config.period;
    this._powerStatus = config.powerStatus;
    this._primaryIp = config.primaryIp;
    this._productId = config.productId;
    this._productName = config.productName;
    this._publicSshKeyId = config.publicSshKeyId;
    this._script = config.script;
    this._serviceId = config.serviceId;
    this._tags = config.tags;
    this._vlanId = config.vlanId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BareMetalDeviceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BareMetalDeviceTimeouts) {
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
      bonded: cdktf.booleanToTerraform(this._bonded),
      device_id: cdktf.numberToTerraform(this._deviceId),
      force_device_id: cdktf.numberToTerraform(this._forceDeviceId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ignition_id: cdktf.numberToTerraform(this._ignitionId),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      location_name: cdktf.stringToTerraform(this._locationName),
      order_id: cdktf.numberToTerraform(this._orderId),
      os_name: cdktf.stringToTerraform(this._osName),
      period: cdktf.stringToTerraform(this._period),
      power_status: cdktf.stringToTerraform(this._powerStatus),
      primary_ip: cdktf.stringToTerraform(this._primaryIp),
      product_id: cdktf.numberToTerraform(this._productId),
      product_name: cdktf.stringToTerraform(this._productName),
      public_ssh_key_id: cdktf.numberToTerraform(this._publicSshKeyId),
      script: cdktf.stringToTerraform(this._script),
      service_id: cdktf.numberToTerraform(this._serviceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      timeouts: bareMetalDeviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bonded: {
        value: cdktf.booleanToHclTerraform(this._bonded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_device_id: {
        value: cdktf.numberToHclTerraform(this._forceDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ignition_id: {
        value: cdktf.numberToHclTerraform(this._ignitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_name: {
        value: cdktf.stringToHclTerraform(this._locationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_id: {
        value: cdktf.numberToHclTerraform(this._orderId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_status: {
        value: cdktf.stringToHclTerraform(this._powerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ip: {
        value: cdktf.stringToHclTerraform(this._primaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ssh_key_id: {
        value: cdktf.numberToHclTerraform(this._publicSshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: bareMetalDeviceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BareMetalDeviceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
