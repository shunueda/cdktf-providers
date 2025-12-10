// https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSyntheticsDevicesV2CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check#id DataSyntheticsDevicesV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check#devices DataSyntheticsDevicesV2Check#devices}
  */
  readonly devices?: DataSyntheticsDevicesV2CheckDevices[] | cdktf.IResolvable;
}
export interface DataSyntheticsDevicesV2CheckDevicesNetworkConnection {
}

export function dataSyntheticsDevicesV2CheckDevicesNetworkConnectionToTerraform(struct?: DataSyntheticsDevicesV2CheckDevicesNetworkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsDevicesV2CheckDevicesNetworkConnectionToHclTerraform(struct?: DataSyntheticsDevicesV2CheckDevicesNetworkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsDevicesV2CheckDevicesNetworkConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDevicesV2CheckDevicesNetworkConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsDevicesV2CheckDevicesNetworkConnection | undefined) {
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

  // download_bandwidth - computed: true, optional: false, required: false
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // packet_loss - computed: true, optional: false, required: false
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }

  // upload_bandwidth - computed: true, optional: false, required: false
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
}

export class DataSyntheticsDevicesV2CheckDevicesNetworkConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataSyntheticsDevicesV2CheckDevicesNetworkConnectionOutputReference {
    return new DataSyntheticsDevicesV2CheckDevicesNetworkConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsDevicesV2CheckDevices {
}

export function dataSyntheticsDevicesV2CheckDevicesToTerraform(struct?: DataSyntheticsDevicesV2CheckDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsDevicesV2CheckDevicesToHclTerraform(struct?: DataSyntheticsDevicesV2CheckDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsDevicesV2CheckDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsDevicesV2CheckDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsDevicesV2CheckDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // network_connection - computed: true, optional: false, required: false
  private _networkConnection = new DataSyntheticsDevicesV2CheckDevicesNetworkConnectionList(this, "network_connection", true);
  public get networkConnection() {
    return this._networkConnection;
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }

  // viewport_height - computed: true, optional: false, required: false
  public get viewportHeight() {
    return this.getNumberAttribute('viewport_height');
  }

  // viewport_width - computed: true, optional: false, required: false
  public get viewportWidth() {
    return this.getNumberAttribute('viewport_width');
  }
}

export class DataSyntheticsDevicesV2CheckDevicesList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsDevicesV2CheckDevices[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsDevicesV2CheckDevicesOutputReference {
    return new DataSyntheticsDevicesV2CheckDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check synthetics_devices_v2_check}
*/
export class DataSyntheticsDevicesV2Check extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_devices_v2_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSyntheticsDevicesV2Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSyntheticsDevicesV2Check to import
  * @param importFromId The id of the existing DataSyntheticsDevicesV2Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSyntheticsDevicesV2Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_devices_v2_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/devices_v2_check synthetics_devices_v2_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSyntheticsDevicesV2CheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSyntheticsDevicesV2CheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'synthetics_devices_v2_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.17',
        providerVersionConstraint: '2.0.17'
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
    this._devices.internalValue = config.devices;
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

  // devices - computed: false, optional: true, required: false
  private _devices = new DataSyntheticsDevicesV2CheckDevicesList(this, "devices", true);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataSyntheticsDevicesV2CheckDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      devices: cdktf.listMapper(dataSyntheticsDevicesV2CheckDevicesToTerraform, true)(this._devices.internalValue),
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
      devices: {
        value: cdktf.listMapperHcl(dataSyntheticsDevicesV2CheckDevicesToHclTerraform, true)(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsDevicesV2CheckDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
