// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the Destination action to trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#action_id DestinationSubscription#action_id}
  */
  readonly actionId: string;
  /**
  * The associated Destination instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#destination_id DestinationSubscription#destination_id}
  */
  readonly destinationId: string;
  /**
  * Is the subscription enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#enabled DestinationSubscription#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The unique identifier for the linked ReverseETLModel, if this part of a Reverse ETL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#model_id DestinationSubscription#model_id}
  */
  readonly modelId?: string;
  /**
  * The name of the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#name DestinationSubscription#name}
  */
  readonly name: string;
  /**
  * (Reverse ETL only) The schedule for the subscription being attached to ReverseETL model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#reverse_etl_schedule DestinationSubscription#reverse_etl_schedule}
  */
  readonly reverseEtlSchedule?: DestinationSubscriptionReverseEtlSchedule;
  /**
  * The customer settings for action fields. Only settings included in the configuration will be managed by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#settings DestinationSubscription#settings}
  */
  readonly settings: string;
  /**
  * FQL string that describes what events should trigger a Destination action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#trigger DestinationSubscription#trigger}
  */
  readonly trigger: string;
}
export interface DestinationSubscriptionReverseEtlSchedule {
  /**
  * Configures the schedule for the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#config DestinationSubscription#config}
  */
  readonly config?: string;
  /**
  * Strategy supports the following modes: PERIODIC, SPECIFIC_DAYS, CRON, DBT_CLOUD or MANUAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#strategy DestinationSubscription#strategy}
  */
  readonly strategy: string;
}

export function destinationSubscriptionReverseEtlScheduleToTerraform(struct?: DestinationSubscriptionReverseEtlSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function destinationSubscriptionReverseEtlScheduleToHclTerraform(struct?: DestinationSubscriptionReverseEtlSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSubscriptionReverseEtlScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSubscriptionReverseEtlSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSubscriptionReverseEtlSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._strategy = value.strategy;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription segment_destination_subscription}
*/
export class DestinationSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_destination_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationSubscription to import
  * @param importFromId The id of the existing DestinationSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_destination_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/destination_subscription segment_destination_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_destination_subscription',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionId = config.actionId;
    this._destinationId = config.destinationId;
    this._enabled = config.enabled;
    this._modelId = config.modelId;
    this._name = config.name;
    this._reverseEtlSchedule.internalValue = config.reverseEtlSchedule;
    this._settings = config.settings;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // action_slug - computed: true, optional: false, required: false
  public get actionSlug() {
    return this.getStringAttribute('action_slug');
  }

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_id - computed: false, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
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

  // reverse_etl_schedule - computed: false, optional: true, required: false
  private _reverseEtlSchedule = new DestinationSubscriptionReverseEtlScheduleOutputReference(this, "reverse_etl_schedule");
  public get reverseEtlSchedule() {
    return this._reverseEtlSchedule;
  }
  public putReverseEtlSchedule(value: DestinationSubscriptionReverseEtlSchedule) {
    this._reverseEtlSchedule.internalValue = value;
  }
  public resetReverseEtlSchedule() {
    this._reverseEtlSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseEtlScheduleInput() {
    return this._reverseEtlSchedule.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.stringToTerraform(this._actionId),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      model_id: cdktf.stringToTerraform(this._modelId),
      name: cdktf.stringToTerraform(this._name),
      reverse_etl_schedule: destinationSubscriptionReverseEtlScheduleToTerraform(this._reverseEtlSchedule.internalValue),
      settings: cdktf.stringToTerraform(this._settings),
      trigger: cdktf.stringToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_id: {
        value: cdktf.stringToHclTerraform(this._actionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
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
      reverse_etl_schedule: {
        value: destinationSubscriptionReverseEtlScheduleToHclTerraform(this._reverseEtlSchedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationSubscriptionReverseEtlSchedule",
      },
      settings: {
        value: cdktf.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
