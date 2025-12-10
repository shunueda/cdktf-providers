// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpImportDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of devices to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#devices PnpImportDevices#devices}
  */
  readonly devices: PnpImportDevicesDevices[] | cdktf.IResolvable;
}
export interface PnpImportDevicesDevices {
  /**
  * Device hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#hostname PnpImportDevices#hostname}
  */
  readonly hostname?: string;
  /**
  * Device product ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#pid PnpImportDevices#pid}
  */
  readonly pid?: string;
  /**
  * Device serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#serial_number PnpImportDevices#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Device is a stacked switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#stack PnpImportDevices#stack}
  */
  readonly stack?: boolean | cdktf.IResolvable;
}

export function pnpImportDevicesDevicesToTerraform(struct?: PnpImportDevicesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    pid: cdktf.stringToTerraform(struct!.pid),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    stack: cdktf.booleanToTerraform(struct!.stack),
  }
}


export function pnpImportDevicesDevicesToHclTerraform(struct?: PnpImportDevicesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pid: {
      value: cdktf.stringToHclTerraform(struct!.pid),
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
    stack: {
      value: cdktf.booleanToHclTerraform(struct!.stack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpImportDevicesDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpImportDevicesDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pid = this._pid;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._stack !== undefined) {
      hasAnyValues = true;
      internalValueResult.stack = this._stack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpImportDevicesDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._pid = undefined;
      this._serialNumber = undefined;
      this._stack = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._pid = value.pid;
      this._serialNumber = value.serialNumber;
      this._stack = value.stack;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // pid - computed: false, optional: true, required: false
  private _pid?: string; 
  public get pid() {
    return this.getStringAttribute('pid');
  }
  public set pid(value: string) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // serial_number - computed: false, optional: true, required: false
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

  // stack - computed: false, optional: true, required: false
  private _stack?: boolean | cdktf.IResolvable; 
  public get stack() {
    return this.getBooleanAttribute('stack');
  }
  public set stack(value: boolean | cdktf.IResolvable) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }
}

export class PnpImportDevicesDevicesList extends cdktf.ComplexList {
  public internalValue? : PnpImportDevicesDevices[] | cdktf.IResolvable

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
  public get(index: number): PnpImportDevicesDevicesOutputReference {
    return new PnpImportDevicesDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices catalystcenter_pnp_import_devices}
*/
export class PnpImportDevices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_pnp_import_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpImportDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpImportDevices to import
  * @param importFromId The id of the existing PnpImportDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpImportDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_pnp_import_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/pnp_import_devices catalystcenter_pnp_import_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpImportDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: PnpImportDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_pnp_import_devices',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._devices.internalValue = config.devices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices - computed: false, optional: false, required: true
  private _devices = new PnpImportDevicesDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: PnpImportDevicesDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      devices: cdktf.listMapper(pnpImportDevicesDevicesToTerraform, false)(this._devices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      devices: {
        value: cdktf.listMapperHcl(pnpImportDevicesDevicesToHclTerraform, false)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpImportDevicesDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
