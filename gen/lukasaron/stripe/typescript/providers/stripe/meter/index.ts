// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The meter’s name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#display_name Meter#display_name}
  */
  readonly displayName: string;
  /**
  * The name of the meter event to record usage for. Corresponds with the event_name field on meter events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#event_name Meter#event_name}
  */
  readonly eventName: string;
  /**
  * The time window to pre-aggregate meter events for, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#event_time_window Meter#event_time_window}
  */
  readonly eventTimeWindow?: string;
  /**
  * customer_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#customer_mapping Meter#customer_mapping}
  */
  readonly customerMapping?: MeterCustomerMapping;
  /**
  * default_aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#default_aggregation Meter#default_aggregation}
  */
  readonly defaultAggregation: MeterDefaultAggregation;
  /**
  * value_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#value_settings Meter#value_settings}
  */
  readonly valueSettings?: MeterValueSettings;
}
export interface MeterCustomerMapping {
  /**
  * The key in the usage event payload to use for mapping the event to a customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#event_payload_key Meter#event_payload_key}
  */
  readonly eventPayloadKey: string;
  /**
  * The method for mapping a meter event to a customer. Must be by_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#type Meter#type}
  */
  readonly type: string;
}

export function meterCustomerMappingToTerraform(struct?: MeterCustomerMappingOutputReference | MeterCustomerMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_payload_key: cdktf.stringToTerraform(struct!.eventPayloadKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function meterCustomerMappingToHclTerraform(struct?: MeterCustomerMappingOutputReference | MeterCustomerMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_payload_key: {
      value: cdktf.stringToHclTerraform(struct!.eventPayloadKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MeterCustomerMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeterCustomerMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventPayloadKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPayloadKey = this._eventPayloadKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeterCustomerMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventPayloadKey = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventPayloadKey = value.eventPayloadKey;
      this._type = value.type;
    }
  }

  // event_payload_key - computed: false, optional: false, required: true
  private _eventPayloadKey?: string; 
  public get eventPayloadKey() {
    return this.getStringAttribute('event_payload_key');
  }
  public set eventPayloadKey(value: string) {
    this._eventPayloadKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPayloadKeyInput() {
    return this._eventPayloadKey;
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
export interface MeterDefaultAggregation {
  /**
  * Specifies how events are aggregated. Allowed values are count to count the number of events and sum to sum each event’s value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#formula Meter#formula}
  */
  readonly formula: string;
}

export function meterDefaultAggregationToTerraform(struct?: MeterDefaultAggregationOutputReference | MeterDefaultAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formula: cdktf.stringToTerraform(struct!.formula),
  }
}


export function meterDefaultAggregationToHclTerraform(struct?: MeterDefaultAggregationOutputReference | MeterDefaultAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeterDefaultAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeterDefaultAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeterDefaultAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formula = value.formula;
    }
  }

  // formula - computed: false, optional: false, required: true
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }
}
export interface MeterValueSettings {
  /**
  * The key in the usage event payload to use as the value for this meter. For example, if the event payload  contains usage on a bytes_used field, then set the event_payload_key to “bytes_used”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#event_payload_key Meter#event_payload_key}
  */
  readonly eventPayloadKey: string;
}

export function meterValueSettingsToTerraform(struct?: MeterValueSettingsOutputReference | MeterValueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_payload_key: cdktf.stringToTerraform(struct!.eventPayloadKey),
  }
}


export function meterValueSettingsToHclTerraform(struct?: MeterValueSettingsOutputReference | MeterValueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_payload_key: {
      value: cdktf.stringToHclTerraform(struct!.eventPayloadKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeterValueSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeterValueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventPayloadKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPayloadKey = this._eventPayloadKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeterValueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventPayloadKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventPayloadKey = value.eventPayloadKey;
    }
  }

  // event_payload_key - computed: false, optional: false, required: true
  private _eventPayloadKey?: string; 
  public get eventPayloadKey() {
    return this.getStringAttribute('event_payload_key');
  }
  public set eventPayloadKey(value: string) {
    this._eventPayloadKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPayloadKeyInput() {
    return this._eventPayloadKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter stripe_meter}
*/
export class Meter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_meter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Meter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Meter to import
  * @param importFromId The id of the existing Meter that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Meter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_meter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/meter stripe_meter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeterConfig
  */
  public constructor(scope: Construct, id: string, config: MeterConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_meter',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._eventName = config.eventName;
    this._eventTimeWindow = config.eventTimeWindow;
    this._customerMapping.internalValue = config.customerMapping;
    this._defaultAggregation.internalValue = config.defaultAggregation;
    this._valueSettings.internalValue = config.valueSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // event_time_window - computed: false, optional: true, required: false
  private _eventTimeWindow?: string; 
  public get eventTimeWindow() {
    return this.getStringAttribute('event_time_window');
  }
  public set eventTimeWindow(value: string) {
    this._eventTimeWindow = value;
  }
  public resetEventTimeWindow() {
    this._eventTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeWindowInput() {
    return this._eventTimeWindow;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // customer_mapping - computed: false, optional: true, required: false
  private _customerMapping = new MeterCustomerMappingOutputReference(this, "customer_mapping");
  public get customerMapping() {
    return this._customerMapping;
  }
  public putCustomerMapping(value: MeterCustomerMapping) {
    this._customerMapping.internalValue = value;
  }
  public resetCustomerMapping() {
    this._customerMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMappingInput() {
    return this._customerMapping.internalValue;
  }

  // default_aggregation - computed: false, optional: false, required: true
  private _defaultAggregation = new MeterDefaultAggregationOutputReference(this, "default_aggregation");
  public get defaultAggregation() {
    return this._defaultAggregation;
  }
  public putDefaultAggregation(value: MeterDefaultAggregation) {
    this._defaultAggregation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAggregationInput() {
    return this._defaultAggregation.internalValue;
  }

  // value_settings - computed: false, optional: true, required: false
  private _valueSettings = new MeterValueSettingsOutputReference(this, "value_settings");
  public get valueSettings() {
    return this._valueSettings;
  }
  public putValueSettings(value: MeterValueSettings) {
    this._valueSettings.internalValue = value;
  }
  public resetValueSettings() {
    this._valueSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSettingsInput() {
    return this._valueSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      event_name: cdktf.stringToTerraform(this._eventName),
      event_time_window: cdktf.stringToTerraform(this._eventTimeWindow),
      customer_mapping: meterCustomerMappingToTerraform(this._customerMapping.internalValue),
      default_aggregation: meterDefaultAggregationToTerraform(this._defaultAggregation.internalValue),
      value_settings: meterValueSettingsToTerraform(this._valueSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_name: {
        value: cdktf.stringToHclTerraform(this._eventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_time_window: {
        value: cdktf.stringToHclTerraform(this._eventTimeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_mapping: {
        value: meterCustomerMappingToHclTerraform(this._customerMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeterCustomerMappingList",
      },
      default_aggregation: {
        value: meterDefaultAggregationToHclTerraform(this._defaultAggregation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeterDefaultAggregationList",
      },
      value_settings: {
        value: meterValueSettingsToHclTerraform(this._valueSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeterValueSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
