// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorMqttBrokersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#items SensorMqttBrokers#items}
  */
  readonly items: SensorMqttBrokersItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#network_id SensorMqttBrokers#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#organization_id SensorMqttBrokers#organization_id}
  */
  readonly organizationId: string;
}
export interface SensorMqttBrokersItems {
  /**
  * Set to true to enable MQTT broker for sensor network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#enabled SensorMqttBrokers#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * MQTT Broker ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#mqtt_broker_id SensorMqttBrokers#mqtt_broker_id}
  */
  readonly mqttBrokerId: string;
}

export function sensorMqttBrokersItemsToTerraform(struct?: SensorMqttBrokersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mqtt_broker_id: cdktf.stringToTerraform(struct!.mqttBrokerId),
  }
}


export function sensorMqttBrokersItemsToHclTerraform(struct?: SensorMqttBrokersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mqtt_broker_id: {
      value: cdktf.stringToHclTerraform(struct!.mqttBrokerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorMqttBrokersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorMqttBrokersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mqttBrokerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttBrokerId = this._mqttBrokerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorMqttBrokersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mqttBrokerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mqttBrokerId = value.mqttBrokerId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mqtt_broker_id - computed: false, optional: false, required: true
  private _mqttBrokerId?: string; 
  public get mqttBrokerId() {
    return this.getStringAttribute('mqtt_broker_id');
  }
  public set mqttBrokerId(value: string) {
    this._mqttBrokerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttBrokerIdInput() {
    return this._mqttBrokerId;
  }
}

export class SensorMqttBrokersItemsList extends cdktf.ComplexList {
  public internalValue? : SensorMqttBrokersItems[] | cdktf.IResolvable

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
  public get(index: number): SensorMqttBrokersItemsOutputReference {
    return new SensorMqttBrokersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers meraki_sensor_mqtt_brokers}
*/
export class SensorMqttBrokers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_mqtt_brokers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorMqttBrokers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorMqttBrokers to import
  * @param importFromId The id of the existing SensorMqttBrokers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorMqttBrokers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_mqtt_brokers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/sensor_mqtt_brokers meraki_sensor_mqtt_brokers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorMqttBrokersConfig
  */
  public constructor(scope: Construct, id: string, config: SensorMqttBrokersConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_mqtt_brokers',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SensorMqttBrokersItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SensorMqttBrokersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(sensorMqttBrokersItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(sensorMqttBrokersItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SensorMqttBrokersItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
