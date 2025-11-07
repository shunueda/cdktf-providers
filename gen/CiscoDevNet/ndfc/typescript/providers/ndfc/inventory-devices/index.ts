// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication protocol to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#auth_protocol InventoryDevices#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Default set to true. NDFC recommends deploying the device configuration during "add devices" to avoid "out-of-sync" issues when deploying in other resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#deploy InventoryDevices#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * The devices to manage in the inventory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#devices InventoryDevices#devices}
  */
  readonly devices: { [key: string]: InventoryDevicesDevices } | cdktf.IResolvable;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#fabric_name InventoryDevices#fabric_name}
  */
  readonly fabricName: string;
  /**
  * The maximum number of hops to use during the discovery of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#max_hops InventoryDevices#max_hops}
  */
  readonly maxHops?: number;
  /**
  * The password to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#password InventoryDevices#password}
  */
  readonly password: string;
  /**
  * Preserve the configuration of the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#preserve_config InventoryDevices#preserve_config}
  */
  readonly preserveConfig?: boolean | cdktf.IResolvable;
  /**
  * The number of retries to use validate fabric status before execution of requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#retries InventoryDevices#retries}
  */
  readonly retries?: number;
  /**
  * The time to wait between retries to validate fabric status before execution of requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#retry_wait_timeout InventoryDevices#retry_wait_timeout}
  */
  readonly retryWaitTimeout?: number;
  /**
  * Default set to true. NDFC recommends saving the device configuration during "add devices" to avoid "out-of-sync" issues when deploying in other resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#save InventoryDevices#save}
  */
  readonly save?: boolean | cdktf.IResolvable;
  /**
  * The seed IP address to use for the discovery devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#seed_ip InventoryDevices#seed_ip}
  */
  readonly seedIp?: string;
  /**
  * Set and use discovery credentials for LAN devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#set_as_individual_device_write_credential InventoryDevices#set_as_individual_device_write_credential}
  */
  readonly setAsIndividualDeviceWriteCredential?: boolean | cdktf.IResolvable;
  /**
  * The username to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#username InventoryDevices#username}
  */
  readonly username: string;
}
export interface InventoryDevicesDevices {
  /**
  * The breakout command provided to teh device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#breakout InventoryDevices#breakout}
  */
  readonly breakout?: string;
  /**
  * The discovery authentication protocol to use for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#discovery_auth_protocol InventoryDevices#discovery_auth_protocol}
  */
  readonly discoveryAuthProtocol?: string;
  /**
  * The discovery password to use for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#discovery_password InventoryDevices#discovery_password}
  */
  readonly discoveryPassword?: string;
  /**
  * The discovery type of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#discovery_type InventoryDevices#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * The discovery username to use for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#discovery_username InventoryDevices#discovery_username}
  */
  readonly discoveryUsername?: string;
  /**
  * The gateway to use for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#gateway InventoryDevices#gateway}
  */
  readonly gateway?: string;
  /**
  * The hostname of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#hostname InventoryDevices#hostname}
  */
  readonly hostname?: string;
  /**
  * The image policy to use for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#image_policy InventoryDevices#image_policy}
  */
  readonly imagePolicy?: string;
  /**
  * The model of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#model InventoryDevices#model}
  */
  readonly model?: string;
  /**
  * The switch modules model information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#modules_model InventoryDevices#modules_model}
  */
  readonly modulesModel?: string[];
  /**
  * The port mode of the breakout interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#port_mode InventoryDevices#port_mode}
  */
  readonly portMode?: string;
  /**
  * The role of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#role InventoryDevices#role}
  */
  readonly role?: string;
  /**
  * The serial number of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#serial_number InventoryDevices#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The software version of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#version InventoryDevices#version}
  */
  readonly version?: string;
}

export function inventoryDevicesDevicesToTerraform(struct?: InventoryDevicesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakout: cdktf.stringToTerraform(struct!.breakout),
    discovery_auth_protocol: cdktf.stringToTerraform(struct!.discoveryAuthProtocol),
    discovery_password: cdktf.stringToTerraform(struct!.discoveryPassword),
    discovery_type: cdktf.stringToTerraform(struct!.discoveryType),
    discovery_username: cdktf.stringToTerraform(struct!.discoveryUsername),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_policy: cdktf.stringToTerraform(struct!.imagePolicy),
    model: cdktf.stringToTerraform(struct!.model),
    modules_model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modulesModel),
    port_mode: cdktf.stringToTerraform(struct!.portMode),
    role: cdktf.stringToTerraform(struct!.role),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function inventoryDevicesDevicesToHclTerraform(struct?: InventoryDevicesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breakout: {
      value: cdktf.stringToHclTerraform(struct!.breakout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.discoveryAuthProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_password: {
      value: cdktf.stringToHclTerraform(struct!.discoveryPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_type: {
      value: cdktf.stringToHclTerraform(struct!.discoveryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_username: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modules_model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modulesModel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_mode: {
      value: cdktf.stringToHclTerraform(struct!.portMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class InventoryDevicesDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): InventoryDevicesDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakout !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakout = this._breakout;
    }
    if (this._discoveryAuthProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryAuthProtocol = this._discoveryAuthProtocol;
    }
    if (this._discoveryPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPassword = this._discoveryPassword;
    }
    if (this._discoveryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryType = this._discoveryType;
    }
    if (this._discoveryUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUsername = this._discoveryUsername;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._imagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePolicy = this._imagePolicy;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._modulesModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesModel = this._modulesModel;
    }
    if (this._portMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMode = this._portMode;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryDevicesDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakout = undefined;
      this._discoveryAuthProtocol = undefined;
      this._discoveryPassword = undefined;
      this._discoveryType = undefined;
      this._discoveryUsername = undefined;
      this._gateway = undefined;
      this._hostname = undefined;
      this._imagePolicy = undefined;
      this._model = undefined;
      this._modulesModel = undefined;
      this._portMode = undefined;
      this._role = undefined;
      this._serialNumber = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakout = value.breakout;
      this._discoveryAuthProtocol = value.discoveryAuthProtocol;
      this._discoveryPassword = value.discoveryPassword;
      this._discoveryType = value.discoveryType;
      this._discoveryUsername = value.discoveryUsername;
      this._gateway = value.gateway;
      this._hostname = value.hostname;
      this._imagePolicy = value.imagePolicy;
      this._model = value.model;
      this._modulesModel = value.modulesModel;
      this._portMode = value.portMode;
      this._role = value.role;
      this._serialNumber = value.serialNumber;
      this._version = value.version;
    }
  }

  // breakout - computed: false, optional: true, required: false
  private _breakout?: string; 
  public get breakout() {
    return this.getStringAttribute('breakout');
  }
  public set breakout(value: string) {
    this._breakout = value;
  }
  public resetBreakout() {
    this._breakout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakoutInput() {
    return this._breakout;
  }

  // config_status - computed: true, optional: false, required: false
  public get configStatus() {
    return this.getStringAttribute('config_status');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }

  // discovery_auth_protocol - computed: false, optional: true, required: false
  private _discoveryAuthProtocol?: string; 
  public get discoveryAuthProtocol() {
    return this.getStringAttribute('discovery_auth_protocol');
  }
  public set discoveryAuthProtocol(value: string) {
    this._discoveryAuthProtocol = value;
  }
  public resetDiscoveryAuthProtocol() {
    this._discoveryAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryAuthProtocolInput() {
    return this._discoveryAuthProtocol;
  }

  // discovery_password - computed: false, optional: true, required: false
  private _discoveryPassword?: string; 
  public get discoveryPassword() {
    return this.getStringAttribute('discovery_password');
  }
  public set discoveryPassword(value: string) {
    this._discoveryPassword = value;
  }
  public resetDiscoveryPassword() {
    this._discoveryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPasswordInput() {
    return this._discoveryPassword;
  }

  // discovery_status - computed: true, optional: false, required: false
  public get discoveryStatus() {
    return this.getStringAttribute('discovery_status');
  }

  // discovery_type - computed: true, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
  }

  // discovery_username - computed: false, optional: true, required: false
  private _discoveryUsername?: string; 
  public get discoveryUsername() {
    return this.getStringAttribute('discovery_username');
  }
  public set discoveryUsername(value: string) {
    this._discoveryUsername = value;
  }
  public resetDiscoveryUsername() {
    this._discoveryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUsernameInput() {
    return this._discoveryUsername;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // image_policy - computed: false, optional: true, required: false
  private _imagePolicy?: string; 
  public get imagePolicy() {
    return this.getStringAttribute('image_policy');
  }
  public set imagePolicy(value: string) {
    this._imagePolicy = value;
  }
  public resetImagePolicy() {
    this._imagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePolicyInput() {
    return this._imagePolicy;
  }

  // manageable - computed: true, optional: false, required: false
  public get manageable() {
    return this.getBooleanAttribute('manageable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // modules_model - computed: true, optional: true, required: false
  private _modulesModel?: string[]; 
  public get modulesModel() {
    return cdktf.Fn.tolist(this.getListAttribute('modules_model'));
  }
  public set modulesModel(value: string[]) {
    this._modulesModel = value;
  }
  public resetModulesModel() {
    this._modulesModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesModelInput() {
    return this._modulesModel;
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }

  // port_mode - computed: false, optional: true, required: false
  private _portMode?: string; 
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }
  public set portMode(value: string) {
    this._portMode = value;
  }
  public resetPortMode() {
    this._portMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModeInput() {
    return this._portMode;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // switch_db_id - computed: true, optional: false, required: false
  public get switchDbId() {
    return this.getStringAttribute('switch_db_id');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // vdc_mac - computed: true, optional: false, required: false
  public get vdcMac() {
    return this.getStringAttribute('vdc_mac');
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

export class InventoryDevicesDevicesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InventoryDevicesDevices } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): InventoryDevicesDevicesOutputReference {
    return new InventoryDevicesDevicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices ndfc_inventory_devices}
*/
export class InventoryDevices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_inventory_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InventoryDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InventoryDevices to import
  * @param importFromId The id of the existing InventoryDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InventoryDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_inventory_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/inventory_devices ndfc_inventory_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: InventoryDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_inventory_devices',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProtocol = config.authProtocol;
    this._deploy = config.deploy;
    this._devices.internalValue = config.devices;
    this._fabricName = config.fabricName;
    this._maxHops = config.maxHops;
    this._password = config.password;
    this._preserveConfig = config.preserveConfig;
    this._retries = config.retries;
    this._retryWaitTimeout = config.retryWaitTimeout;
    this._save = config.save;
    this._seedIp = config.seedIp;
    this._setAsIndividualDeviceWriteCredential = config.setAsIndividualDeviceWriteCredential;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_protocol - computed: true, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // devices - computed: false, optional: false, required: true
  private _devices = new InventoryDevicesDevicesMap(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: { [key: string]: InventoryDevicesDevices } | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_hops - computed: false, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preserve_config - computed: true, optional: true, required: false
  private _preserveConfig?: boolean | cdktf.IResolvable; 
  public get preserveConfig() {
    return this.getBooleanAttribute('preserve_config');
  }
  public set preserveConfig(value: boolean | cdktf.IResolvable) {
    this._preserveConfig = value;
  }
  public resetPreserveConfig() {
    this._preserveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveConfigInput() {
    return this._preserveConfig;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_wait_timeout - computed: true, optional: true, required: false
  private _retryWaitTimeout?: number; 
  public get retryWaitTimeout() {
    return this.getNumberAttribute('retry_wait_timeout');
  }
  public set retryWaitTimeout(value: number) {
    this._retryWaitTimeout = value;
  }
  public resetRetryWaitTimeout() {
    this._retryWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitTimeoutInput() {
    return this._retryWaitTimeout;
  }

  // save - computed: true, optional: true, required: false
  private _save?: boolean | cdktf.IResolvable; 
  public get save() {
    return this.getBooleanAttribute('save');
  }
  public set save(value: boolean | cdktf.IResolvable) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }

  // seed_ip - computed: false, optional: true, required: false
  private _seedIp?: string; 
  public get seedIp() {
    return this.getStringAttribute('seed_ip');
  }
  public set seedIp(value: string) {
    this._seedIp = value;
  }
  public resetSeedIp() {
    this._seedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedIpInput() {
    return this._seedIp;
  }

  // set_as_individual_device_write_credential - computed: true, optional: true, required: false
  private _setAsIndividualDeviceWriteCredential?: boolean | cdktf.IResolvable; 
  public get setAsIndividualDeviceWriteCredential() {
    return this.getBooleanAttribute('set_as_individual_device_write_credential');
  }
  public set setAsIndividualDeviceWriteCredential(value: boolean | cdktf.IResolvable) {
    this._setAsIndividualDeviceWriteCredential = value;
  }
  public resetSetAsIndividualDeviceWriteCredential() {
    this._setAsIndividualDeviceWriteCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsIndividualDeviceWriteCredentialInput() {
    return this._setAsIndividualDeviceWriteCredential;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_protocol: cdktf.stringToTerraform(this._authProtocol),
      deploy: cdktf.booleanToTerraform(this._deploy),
      devices: cdktf.hashMapper(inventoryDevicesDevicesToTerraform)(this._devices.internalValue),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      password: cdktf.stringToTerraform(this._password),
      preserve_config: cdktf.booleanToTerraform(this._preserveConfig),
      retries: cdktf.numberToTerraform(this._retries),
      retry_wait_timeout: cdktf.numberToTerraform(this._retryWaitTimeout),
      save: cdktf.booleanToTerraform(this._save),
      seed_ip: cdktf.stringToTerraform(this._seedIp),
      set_as_individual_device_write_credential: cdktf.booleanToTerraform(this._setAsIndividualDeviceWriteCredential),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_protocol: {
        value: cdktf.stringToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      devices: {
        value: cdktf.hashMapperHcl(inventoryDevicesDevicesToHclTerraform)(this._devices.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InventoryDevicesDevicesMap",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_config: {
        value: cdktf.booleanToHclTerraform(this._preserveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._retryWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      save: {
        value: cdktf.booleanToHclTerraform(this._save),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      seed_ip: {
        value: cdktf.stringToHclTerraform(this._seedIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_individual_device_write_credential: {
        value: cdktf.booleanToHclTerraform(this._setAsIndividualDeviceWriteCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
