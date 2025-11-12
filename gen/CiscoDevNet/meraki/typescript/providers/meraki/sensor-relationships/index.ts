// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorRelationshipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of the related devices for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships#livestream_related_devices SensorRelationships#livestream_related_devices}
  */
  readonly livestreamRelatedDevices?: SensorRelationshipsLivestreamRelatedDevices[] | cdktf.IResolvable;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships#serial SensorRelationships#serial}
  */
  readonly serial: string;
}
export interface SensorRelationshipsLivestreamRelatedDevices {
  /**
  * The serial of the related device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships#serial SensorRelationships#serial}
  */
  readonly serial: string;
}

export function sensorRelationshipsLivestreamRelatedDevicesToTerraform(struct?: SensorRelationshipsLivestreamRelatedDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function sensorRelationshipsLivestreamRelatedDevicesToHclTerraform(struct?: SensorRelationshipsLivestreamRelatedDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorRelationshipsLivestreamRelatedDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorRelationshipsLivestreamRelatedDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorRelationshipsLivestreamRelatedDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serial = value.serial;
    }
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class SensorRelationshipsLivestreamRelatedDevicesList extends cdktf.ComplexList {
  public internalValue? : SensorRelationshipsLivestreamRelatedDevices[] | cdktf.IResolvable

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
  public get(index: number): SensorRelationshipsLivestreamRelatedDevicesOutputReference {
    return new SensorRelationshipsLivestreamRelatedDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships meraki_sensor_relationships}
*/
export class SensorRelationships extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_relationships";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorRelationships resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorRelationships to import
  * @param importFromId The id of the existing SensorRelationships that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorRelationships to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_relationships", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_relationships meraki_sensor_relationships} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorRelationshipsConfig
  */
  public constructor(scope: Construct, id: string, config: SensorRelationshipsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_relationships',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._livestreamRelatedDevices.internalValue = config.livestreamRelatedDevices;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // livestream_related_devices - computed: false, optional: true, required: false
  private _livestreamRelatedDevices = new SensorRelationshipsLivestreamRelatedDevicesList(this, "livestream_related_devices", false);
  public get livestreamRelatedDevices() {
    return this._livestreamRelatedDevices;
  }
  public putLivestreamRelatedDevices(value: SensorRelationshipsLivestreamRelatedDevices[] | cdktf.IResolvable) {
    this._livestreamRelatedDevices.internalValue = value;
  }
  public resetLivestreamRelatedDevices() {
    this._livestreamRelatedDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livestreamRelatedDevicesInput() {
    return this._livestreamRelatedDevices.internalValue;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      livestream_related_devices: cdktf.listMapper(sensorRelationshipsLivestreamRelatedDevicesToTerraform, false)(this._livestreamRelatedDevices.internalValue),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      livestream_related_devices: {
        value: cdktf.listMapperHcl(sensorRelationshipsLivestreamRelatedDevicesToHclTerraform, false)(this._livestreamRelatedDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensorRelationshipsLivestreamRelatedDevicesList",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
