// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of devices to be managed by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices#devices Devices#devices}
  */
  readonly devices?: DevicesDevices[] | cdktf.IResolvable;
}
export interface DevicesDevices {
  /**
  * ID of device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices#id Devices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Service tag of device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices#service_tag Devices#service_tag}
  */
  readonly serviceTag?: string;
}

export function devicesDevicesToTerraform(struct?: DevicesDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    service_tag: cdktf.stringToTerraform(struct!.serviceTag),
  }
}


export function devicesDevicesToHclTerraform(struct?: DevicesDevices | cdktf.IResolvable): any {
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
    service_tag: {
      value: cdktf.stringToHclTerraform(struct!.serviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicesDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevicesDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._serviceTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._serviceTag = value.serviceTag;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // management_ips - computed: true, optional: false, required: false
  public get managementIps() {
    return this.getListAttribute('management_ips');
  }

  // service_tag - computed: true, optional: true, required: false
  private _serviceTag?: string; 
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }
  public set serviceTag(value: string) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }
}

export class DevicesDevicesList extends cdktf.ComplexList {
  public internalValue? : DevicesDevices[] | cdktf.IResolvable

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
  public get(index: number): DevicesDevicesOutputReference {
    return new DevicesDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices ome_devices}
*/
export class Devices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Devices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Devices to import
  * @param importFromId The id of the existing Devices that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Devices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/devices ome_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DevicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_devices',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
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

  // devices - computed: true, optional: true, required: false
  private _devices = new DevicesDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DevicesDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
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
      devices: cdktf.listMapper(devicesDevicesToTerraform, false)(this._devices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      devices: {
        value: cdktf.listMapperHcl(devicesDevicesToHclTerraform, false)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevicesDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
