// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the server should be auto-started in case of a failure (default=true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#auto_recovery Server#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Defines which Availability-Zone the Server is placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#availability_zone Server#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The number of server cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#cores Server#cores}
  */
  readonly cores: number;
  /**
  * Specifies the hardware settings for the virtual machine. Note: hardware_profile and hardware_profile_config parameters can't be used at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#hardware_profile Server#hardware_profile}
  */
  readonly hardwareProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#ipv4 Server#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#ipv6 Server#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#isoimage Server#isoimage}
  */
  readonly isoimage?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#labels Server#labels}
  */
  readonly labels?: string[];
  /**
  * The amount of server memory in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#memory Server#memory}
  */
  readonly memory: number;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * The number of server cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#power Server#power}
  */
  readonly power?: boolean | cdktf.IResolvable;
  /**
  * For system configuration on first boot. May contain cloud-config data or shell scripting, encoded as base64 string. Supported tools are cloud-init, Cloudbase-init, and Ignition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#user_data_base64 Server#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * hardware_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#hardware_profile_config Server#hardware_profile_config}
  */
  readonly hardwareProfileConfig?: ServerHardwareProfileConfig[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#network Server#network}
  */
  readonly network?: ServerNetwork[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#storage Server#storage}
  */
  readonly storage?: ServerStorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerHardwareProfileConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#hyperv_extensions Server#hyperv_extensions}
  */
  readonly hypervExtensions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#machinetype Server#machinetype}
  */
  readonly machinetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#nested_virtualization Server#nested_virtualization}
  */
  readonly nestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#network_model Server#network_model}
  */
  readonly networkModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#serial_interface Server#serial_interface}
  */
  readonly serialInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#server_renice Server#server_renice}
  */
  readonly serverRenice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#storage_device Server#storage_device}
  */
  readonly storageDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#usb_controller Server#usb_controller}
  */
  readonly usbController?: string;
}

export function serverHardwareProfileConfigToTerraform(struct?: ServerHardwareProfileConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperv_extensions: cdktf.booleanToTerraform(struct!.hypervExtensions),
    machinetype: cdktf.stringToTerraform(struct!.machinetype),
    nested_virtualization: cdktf.booleanToTerraform(struct!.nestedVirtualization),
    network_model: cdktf.stringToTerraform(struct!.networkModel),
    serial_interface: cdktf.booleanToTerraform(struct!.serialInterface),
    server_renice: cdktf.booleanToTerraform(struct!.serverRenice),
    storage_device: cdktf.stringToTerraform(struct!.storageDevice),
    usb_controller: cdktf.stringToTerraform(struct!.usbController),
  }
}


export function serverHardwareProfileConfigToHclTerraform(struct?: ServerHardwareProfileConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperv_extensions: {
      value: cdktf.booleanToHclTerraform(struct!.hypervExtensions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machinetype: {
      value: cdktf.stringToHclTerraform(struct!.machinetype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.nestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_model: {
      value: cdktf.stringToHclTerraform(struct!.networkModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_interface: {
      value: cdktf.booleanToHclTerraform(struct!.serialInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_renice: {
      value: cdktf.booleanToHclTerraform(struct!.serverRenice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_device: {
      value: cdktf.stringToHclTerraform(struct!.storageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usb_controller: {
      value: cdktf.stringToHclTerraform(struct!.usbController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerHardwareProfileConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerHardwareProfileConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervExtensions = this._hypervExtensions;
    }
    if (this._machinetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinetype = this._machinetype;
    }
    if (this._nestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedVirtualization = this._nestedVirtualization;
    }
    if (this._networkModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModel = this._networkModel;
    }
    if (this._serialInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialInterface = this._serialInterface;
    }
    if (this._serverRenice !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRenice = this._serverRenice;
    }
    if (this._storageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevice = this._storageDevice;
    }
    if (this._usbController !== undefined) {
      hasAnyValues = true;
      internalValueResult.usbController = this._usbController;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerHardwareProfileConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hypervExtensions = undefined;
      this._machinetype = undefined;
      this._nestedVirtualization = undefined;
      this._networkModel = undefined;
      this._serialInterface = undefined;
      this._serverRenice = undefined;
      this._storageDevice = undefined;
      this._usbController = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hypervExtensions = value.hypervExtensions;
      this._machinetype = value.machinetype;
      this._nestedVirtualization = value.nestedVirtualization;
      this._networkModel = value.networkModel;
      this._serialInterface = value.serialInterface;
      this._serverRenice = value.serverRenice;
      this._storageDevice = value.storageDevice;
      this._usbController = value.usbController;
    }
  }

  // hyperv_extensions - computed: true, optional: true, required: false
  private _hypervExtensions?: boolean | cdktf.IResolvable; 
  public get hypervExtensions() {
    return this.getBooleanAttribute('hyperv_extensions');
  }
  public set hypervExtensions(value: boolean | cdktf.IResolvable) {
    this._hypervExtensions = value;
  }
  public resetHypervExtensions() {
    this._hypervExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervExtensionsInput() {
    return this._hypervExtensions;
  }

  // machinetype - computed: true, optional: true, required: false
  private _machinetype?: string; 
  public get machinetype() {
    return this.getStringAttribute('machinetype');
  }
  public set machinetype(value: string) {
    this._machinetype = value;
  }
  public resetMachinetype() {
    this._machinetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinetypeInput() {
    return this._machinetype;
  }

  // nested_virtualization - computed: true, optional: true, required: false
  private _nestedVirtualization?: boolean | cdktf.IResolvable; 
  public get nestedVirtualization() {
    return this.getBooleanAttribute('nested_virtualization');
  }
  public set nestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._nestedVirtualization = value;
  }
  public resetNestedVirtualization() {
    this._nestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedVirtualizationInput() {
    return this._nestedVirtualization;
  }

  // network_model - computed: true, optional: true, required: false
  private _networkModel?: string; 
  public get networkModel() {
    return this.getStringAttribute('network_model');
  }
  public set networkModel(value: string) {
    this._networkModel = value;
  }
  public resetNetworkModel() {
    this._networkModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModelInput() {
    return this._networkModel;
  }

  // serial_interface - computed: true, optional: true, required: false
  private _serialInterface?: boolean | cdktf.IResolvable; 
  public get serialInterface() {
    return this.getBooleanAttribute('serial_interface');
  }
  public set serialInterface(value: boolean | cdktf.IResolvable) {
    this._serialInterface = value;
  }
  public resetSerialInterface() {
    this._serialInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInterfaceInput() {
    return this._serialInterface;
  }

  // server_renice - computed: true, optional: true, required: false
  private _serverRenice?: boolean | cdktf.IResolvable; 
  public get serverRenice() {
    return this.getBooleanAttribute('server_renice');
  }
  public set serverRenice(value: boolean | cdktf.IResolvable) {
    this._serverRenice = value;
  }
  public resetServerRenice() {
    this._serverRenice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReniceInput() {
    return this._serverRenice;
  }

  // storage_device - computed: true, optional: true, required: false
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  public resetStorageDevice() {
    this._storageDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // usb_controller - computed: true, optional: true, required: false
  private _usbController?: string; 
  public get usbController() {
    return this.getStringAttribute('usb_controller');
  }
  public set usbController(value: string) {
    this._usbController = value;
  }
  public resetUsbController() {
    this._usbController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbControllerInput() {
    return this._usbController;
  }
}

export class ServerHardwareProfileConfigList extends cdktf.ComplexList {
  public internalValue? : ServerHardwareProfileConfig[] | cdktf.IResolvable

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
  public get(index: number): ServerHardwareProfileConfigOutputReference {
    return new ServerHardwareProfileConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkRulesV4In {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#action Server#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#comment Server#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_cidr Server#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_port Server#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#order Server#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_cidr Server#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_port Server#src_port}
  */
  readonly srcPort?: string;
}

export function serverNetworkRulesV4InToTerraform(struct?: ServerNetworkRulesV4In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function serverNetworkRulesV4InToHclTerraform(struct?: ServerNetworkRulesV4In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkRulesV4InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkRulesV4In | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkRulesV4In | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class ServerNetworkRulesV4InList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkRulesV4In[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkRulesV4InOutputReference {
    return new ServerNetworkRulesV4InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkRulesV4Out {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#action Server#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#comment Server#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_cidr Server#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_port Server#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#order Server#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_cidr Server#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_port Server#src_port}
  */
  readonly srcPort?: string;
}

export function serverNetworkRulesV4OutToTerraform(struct?: ServerNetworkRulesV4Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function serverNetworkRulesV4OutToHclTerraform(struct?: ServerNetworkRulesV4Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkRulesV4OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkRulesV4Out | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkRulesV4Out | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class ServerNetworkRulesV4OutList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkRulesV4Out[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkRulesV4OutOutputReference {
    return new ServerNetworkRulesV4OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkRulesV6In {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#action Server#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#comment Server#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_cidr Server#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_port Server#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#order Server#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_cidr Server#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_port Server#src_port}
  */
  readonly srcPort?: string;
}

export function serverNetworkRulesV6InToTerraform(struct?: ServerNetworkRulesV6In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function serverNetworkRulesV6InToHclTerraform(struct?: ServerNetworkRulesV6In | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkRulesV6InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkRulesV6In | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkRulesV6In | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class ServerNetworkRulesV6InList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkRulesV6In[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkRulesV6InOutputReference {
    return new ServerNetworkRulesV6InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkRulesV6Out {
  /**
  * This defines what the firewall will do. Either accept or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#action Server#action}
  */
  readonly action: string;
  /**
  * Comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#comment Server#comment}
  */
  readonly comment?: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then all IPs have access to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_cidr Server#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#dst_port Server#dst_port}
  */
  readonly dstPort?: string;
  /**
  * The order at which the firewall will compare packets against its rules.
  * A packet will be compared against the first rule, it will either allow it to pass or block it
  * and it won't be matched against any other rules. However, if it does no match the rule,
  * then it will proceed onto rule 2. Packets that do not match any rules are blocked by default (Only for inbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#order Server#order}
  */
  readonly order: number;
  /**
  * Either 'udp' or 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol: string;
  /**
  * Either an IPv4/6 address or and IP Network in CIDR format. If this field is empty then this service has access to all IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_cidr Server#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * A Number between 1 and 65535, port ranges are seperated by a colon for FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#src_port Server#src_port}
  */
  readonly srcPort?: string;
}

export function serverNetworkRulesV6OutToTerraform(struct?: ServerNetworkRulesV6Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    order: cdktf.numberToTerraform(struct!.order),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
  }
}


export function serverNetworkRulesV6OutToHclTerraform(struct?: ServerNetworkRulesV6Out | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkRulesV6OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkRulesV6Out | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkRulesV6Out | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._order = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._order = value.order;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }
}

export class ServerNetworkRulesV6OutList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkRulesV6Out[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkRulesV6OutOutputReference {
    return new ServerNetworkRulesV6OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#bootdevice Server#bootdevice}
  */
  readonly bootdevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#firewall_template_uuid Server#firewall_template_uuid}
  */
  readonly firewallTemplateUuid?: string;
  /**
  * Manually assign DHCP IP to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#ip Server#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#object_uuid Server#object_uuid}
  */
  readonly objectUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#ordering Server#ordering}
  */
  readonly ordering?: number;
  /**
  * rules_v4_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#rules_v4_in Server#rules_v4_in}
  */
  readonly rulesV4In?: ServerNetworkRulesV4In[] | cdktf.IResolvable;
  /**
  * rules_v4_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#rules_v4_out Server#rules_v4_out}
  */
  readonly rulesV4Out?: ServerNetworkRulesV4Out[] | cdktf.IResolvable;
  /**
  * rules_v6_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#rules_v6_in Server#rules_v6_in}
  */
  readonly rulesV6In?: ServerNetworkRulesV6In[] | cdktf.IResolvable;
  /**
  * rules_v6_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#rules_v6_out Server#rules_v6_out}
  */
  readonly rulesV6Out?: ServerNetworkRulesV6Out[] | cdktf.IResolvable;
}

export function serverNetworkToTerraform(struct?: ServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootdevice: cdktf.booleanToTerraform(struct!.bootdevice),
    firewall_template_uuid: cdktf.stringToTerraform(struct!.firewallTemplateUuid),
    ip: cdktf.stringToTerraform(struct!.ip),
    object_uuid: cdktf.stringToTerraform(struct!.objectUuid),
    ordering: cdktf.numberToTerraform(struct!.ordering),
    rules_v4_in: cdktf.listMapper(serverNetworkRulesV4InToTerraform, true)(struct!.rulesV4In),
    rules_v4_out: cdktf.listMapper(serverNetworkRulesV4OutToTerraform, true)(struct!.rulesV4Out),
    rules_v6_in: cdktf.listMapper(serverNetworkRulesV6InToTerraform, true)(struct!.rulesV6In),
    rules_v6_out: cdktf.listMapper(serverNetworkRulesV6OutToTerraform, true)(struct!.rulesV6Out),
  }
}


export function serverNetworkToHclTerraform(struct?: ServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootdevice: {
      value: cdktf.booleanToHclTerraform(struct!.bootdevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall_template_uuid: {
      value: cdktf.stringToHclTerraform(struct!.firewallTemplateUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_uuid: {
      value: cdktf.stringToHclTerraform(struct!.objectUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ordering: {
      value: cdktf.numberToHclTerraform(struct!.ordering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules_v4_in: {
      value: cdktf.listMapperHcl(serverNetworkRulesV4InToHclTerraform, true)(struct!.rulesV4In),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkRulesV4InList",
    },
    rules_v4_out: {
      value: cdktf.listMapperHcl(serverNetworkRulesV4OutToHclTerraform, true)(struct!.rulesV4Out),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkRulesV4OutList",
    },
    rules_v6_in: {
      value: cdktf.listMapperHcl(serverNetworkRulesV6InToHclTerraform, true)(struct!.rulesV6In),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkRulesV6InList",
    },
    rules_v6_out: {
      value: cdktf.listMapperHcl(serverNetworkRulesV6OutToHclTerraform, true)(struct!.rulesV6Out),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkRulesV6OutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootdevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootdevice = this._bootdevice;
    }
    if (this._firewallTemplateUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallTemplateUuid = this._firewallTemplateUuid;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._objectUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectUuid = this._objectUuid;
    }
    if (this._ordering !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordering = this._ordering;
    }
    if (this._rulesV4In?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesV4In = this._rulesV4In?.internalValue;
    }
    if (this._rulesV4Out?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesV4Out = this._rulesV4Out?.internalValue;
    }
    if (this._rulesV6In?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesV6In = this._rulesV6In?.internalValue;
    }
    if (this._rulesV6Out?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesV6Out = this._rulesV6Out?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootdevice = undefined;
      this._firewallTemplateUuid = undefined;
      this._ip = undefined;
      this._objectUuid = undefined;
      this._ordering = undefined;
      this._rulesV4In.internalValue = undefined;
      this._rulesV4Out.internalValue = undefined;
      this._rulesV6In.internalValue = undefined;
      this._rulesV6Out.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootdevice = value.bootdevice;
      this._firewallTemplateUuid = value.firewallTemplateUuid;
      this._ip = value.ip;
      this._objectUuid = value.objectUuid;
      this._ordering = value.ordering;
      this._rulesV4In.internalValue = value.rulesV4In;
      this._rulesV4Out.internalValue = value.rulesV4Out;
      this._rulesV6In.internalValue = value.rulesV6In;
      this._rulesV6Out.internalValue = value.rulesV6Out;
    }
  }

  // auto_assigned_ip - computed: true, optional: false, required: false
  public get autoAssignedIp() {
    return this.getStringAttribute('auto_assigned_ip');
  }

  // bootdevice - computed: true, optional: true, required: false
  private _bootdevice?: boolean | cdktf.IResolvable; 
  public get bootdevice() {
    return this.getBooleanAttribute('bootdevice');
  }
  public set bootdevice(value: boolean | cdktf.IResolvable) {
    this._bootdevice = value;
  }
  public resetBootdevice() {
    this._bootdevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootdeviceInput() {
    return this._bootdevice;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // firewall_template_uuid - computed: false, optional: true, required: false
  private _firewallTemplateUuid?: string; 
  public get firewallTemplateUuid() {
    return this.getStringAttribute('firewall_template_uuid');
  }
  public set firewallTemplateUuid(value: string) {
    this._firewallTemplateUuid = value;
  }
  public resetFirewallTemplateUuid() {
    this._firewallTemplateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTemplateUuidInput() {
    return this._firewallTemplateUuid;
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

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_uuid - computed: false, optional: false, required: true
  private _objectUuid?: string; 
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
  public set objectUuid(value: string) {
    this._objectUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectUuidInput() {
    return this._objectUuid;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering?: number; 
  public get ordering() {
    return this.getNumberAttribute('ordering');
  }
  public set ordering(value: number) {
    this._ordering = value;
  }
  public resetOrdering() {
    this._ordering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering;
  }

  // rules_v4_in - computed: false, optional: true, required: false
  private _rulesV4In = new ServerNetworkRulesV4InList(this, "rules_v4_in", false);
  public get rulesV4In() {
    return this._rulesV4In;
  }
  public putRulesV4In(value: ServerNetworkRulesV4In[] | cdktf.IResolvable) {
    this._rulesV4In.internalValue = value;
  }
  public resetRulesV4In() {
    this._rulesV4In.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV4InInput() {
    return this._rulesV4In.internalValue;
  }

  // rules_v4_out - computed: false, optional: true, required: false
  private _rulesV4Out = new ServerNetworkRulesV4OutList(this, "rules_v4_out", false);
  public get rulesV4Out() {
    return this._rulesV4Out;
  }
  public putRulesV4Out(value: ServerNetworkRulesV4Out[] | cdktf.IResolvable) {
    this._rulesV4Out.internalValue = value;
  }
  public resetRulesV4Out() {
    this._rulesV4Out.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV4OutInput() {
    return this._rulesV4Out.internalValue;
  }

  // rules_v6_in - computed: false, optional: true, required: false
  private _rulesV6In = new ServerNetworkRulesV6InList(this, "rules_v6_in", false);
  public get rulesV6In() {
    return this._rulesV6In;
  }
  public putRulesV6In(value: ServerNetworkRulesV6In[] | cdktf.IResolvable) {
    this._rulesV6In.internalValue = value;
  }
  public resetRulesV6In() {
    this._rulesV6In.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV6InInput() {
    return this._rulesV6In.internalValue;
  }

  // rules_v6_out - computed: false, optional: true, required: false
  private _rulesV6Out = new ServerNetworkRulesV6OutList(this, "rules_v6_out", false);
  public get rulesV6Out() {
    return this._rulesV6Out;
  }
  public putRulesV6Out(value: ServerNetworkRulesV6Out[] | cdktf.IResolvable) {
    this._rulesV6Out.internalValue = value;
  }
  public resetRulesV6Out() {
    this._rulesV6Out.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesV6OutInput() {
    return this._rulesV6Out.internalValue;
  }
}

export class ServerNetworkList extends cdktf.ComplexList {
  public internalValue? : ServerNetwork[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkOutputReference {
    return new ServerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#object_uuid Server#object_uuid}
  */
  readonly objectUuid: string;
}

export function serverStorageToTerraform(struct?: ServerStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_uuid: cdktf.stringToTerraform(struct!.objectUuid),
  }
}


export function serverStorageToHclTerraform(struct?: ServerStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_uuid: {
      value: cdktf.stringToHclTerraform(struct!.objectUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectUuid = this._objectUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectUuid = value.objectUuid;
    }
  }

  // bootdevice - computed: true, optional: false, required: false
  public get bootdevice() {
    return this.getBooleanAttribute('bootdevice');
  }

  // bus - computed: true, optional: false, required: false
  public get bus() {
    return this.getNumberAttribute('bus');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getNumberAttribute('controller');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // last_used_template - computed: true, optional: false, required: false
  public get lastUsedTemplate() {
    return this.getStringAttribute('last_used_template');
  }

  // license_product_no - computed: true, optional: false, required: false
  public get licenseProductNo() {
    return this.getNumberAttribute('license_product_no');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_uuid - computed: false, optional: false, required: true
  private _objectUuid?: string; 
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }
  public set objectUuid(value: string) {
    this._objectUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectUuidInput() {
    return this._objectUuid;
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class ServerStorageList extends cdktf.ComplexList {
  public internalValue? : ServerStorage[] | cdktf.IResolvable

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
  public get(index: number): ServerStorageOutputReference {
    return new ServerStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#delete Server#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#update Server#update}
  */
  readonly update?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
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


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
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

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server gridscale_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/server gridscale_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_server',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3',
        providerVersionConstraint: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRecovery = config.autoRecovery;
    this._availabilityZone = config.availabilityZone;
    this._cores = config.cores;
    this._hardwareProfile = config.hardwareProfile;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._isoimage = config.isoimage;
    this._labels = config.labels;
    this._memory = config.memory;
    this._name = config.name;
    this._power = config.power;
    this._userDataBase64 = config.userDataBase64;
    this._hardwareProfileConfig.internalValue = config.hardwareProfileConfig;
    this._network.internalValue = config.network;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery - computed: true, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
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

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // console_token - computed: true, optional: false, required: false
  public get consoleToken() {
    return this.getStringAttribute('console_token');
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_price - computed: true, optional: false, required: false
  public get currentPrice() {
    return this.getNumberAttribute('current_price');
  }

  // hardware_profile - computed: true, optional: true, required: false
  private _hardwareProfile?: string; 
  public get hardwareProfile() {
    return this.getStringAttribute('hardware_profile');
  }
  public set hardwareProfile(value: string) {
    this._hardwareProfile = value;
  }
  public resetHardwareProfile() {
    this._hardwareProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareProfileInput() {
    return this._hardwareProfile;
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // isoimage - computed: false, optional: true, required: false
  private _isoimage?: string; 
  public get isoimage() {
    return this.getStringAttribute('isoimage');
  }
  public set isoimage(value: string) {
    this._isoimage = value;
  }
  public resetIsoimage() {
    this._isoimage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoimageInput() {
    return this._isoimage;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // legacy - computed: true, optional: false, required: false
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }

  // location_uuid - computed: true, optional: false, required: false
  public get locationUuid() {
    return this.getStringAttribute('location_uuid');
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // power - computed: true, optional: true, required: false
  private _power?: boolean | cdktf.IResolvable; 
  public get power() {
    return this.getBooleanAttribute('power');
  }
  public set power(value: boolean | cdktf.IResolvable) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // usage_in_minutes_cores - computed: true, optional: false, required: false
  public get usageInMinutesCores() {
    return this.getNumberAttribute('usage_in_minutes_cores');
  }

  // usage_in_minutes_memory - computed: true, optional: false, required: false
  public get usageInMinutesMemory() {
    return this.getNumberAttribute('usage_in_minutes_memory');
  }

  // user_data_base64 - computed: true, optional: true, required: false
  private _userDataBase64?: string; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64;
  }

  // hardware_profile_config - computed: false, optional: true, required: false
  private _hardwareProfileConfig = new ServerHardwareProfileConfigList(this, "hardware_profile_config", true);
  public get hardwareProfileConfig() {
    return this._hardwareProfileConfig;
  }
  public putHardwareProfileConfig(value: ServerHardwareProfileConfig[] | cdktf.IResolvable) {
    this._hardwareProfileConfig.internalValue = value;
  }
  public resetHardwareProfileConfig() {
    this._hardwareProfileConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareProfileConfigInput() {
    return this._hardwareProfileConfig.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ServerNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ServerNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new ServerStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ServerStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
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
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cores: cdktf.numberToTerraform(this._cores),
      hardware_profile: cdktf.stringToTerraform(this._hardwareProfile),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      isoimage: cdktf.stringToTerraform(this._isoimage),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      power: cdktf.booleanToTerraform(this._power),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      hardware_profile_config: cdktf.listMapper(serverHardwareProfileConfigToTerraform, true)(this._hardwareProfileConfig.internalValue),
      network: cdktf.listMapper(serverNetworkToTerraform, true)(this._network.internalValue),
      storage: cdktf.listMapper(serverStorageToTerraform, true)(this._storage.internalValue),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_recovery: {
        value: cdktf.booleanToHclTerraform(this._autoRecovery),
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
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hardware_profile: {
        value: cdktf.stringToHclTerraform(this._hardwareProfile),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isoimage: {
        value: cdktf.stringToHclTerraform(this._isoimage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
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
      power: {
        value: cdktf.booleanToHclTerraform(this._power),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_data_base64: {
        value: cdktf.stringToHclTerraform(this._userDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_profile_config: {
        value: cdktf.listMapperHcl(serverHardwareProfileConfigToHclTerraform, true)(this._hardwareProfileConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerHardwareProfileConfigList",
      },
      network: {
        value: cdktf.listMapperHcl(serverNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNetworkList",
      },
      storage: {
        value: cdktf.listMapperHcl(serverStorageToHclTerraform, true)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerStorageList",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
