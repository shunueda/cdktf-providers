// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#alert EventDefinition#alert}
  */
  readonly alert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#config EventDefinition#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#description EventDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#field_spec EventDefinition#field_spec}
  */
  readonly fieldSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#id EventDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#key_spec EventDefinition#key_spec}
  */
  readonly keySpec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#priority EventDefinition#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#title EventDefinition#title}
  */
  readonly title: string;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#notification_settings EventDefinition#notification_settings}
  */
  readonly notificationSettings: EventDefinitionNotificationSettings;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#notifications EventDefinition#notifications}
  */
  readonly notifications?: EventDefinitionNotifications[] | cdktf.IResolvable;
}
export interface EventDefinitionNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#backlog_size EventDefinition#backlog_size}
  */
  readonly backlogSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#grace_period_ms EventDefinition#grace_period_ms}
  */
  readonly gracePeriodMs?: number;
}

export function eventDefinitionNotificationSettingsToTerraform(struct?: EventDefinitionNotificationSettingsOutputReference | EventDefinitionNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backlog_size: cdktf.numberToTerraform(struct!.backlogSize),
    grace_period_ms: cdktf.numberToTerraform(struct!.gracePeriodMs),
  }
}


export function eventDefinitionNotificationSettingsToHclTerraform(struct?: EventDefinitionNotificationSettingsOutputReference | EventDefinitionNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backlog_size: {
      value: cdktf.numberToHclTerraform(struct!.backlogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_period_ms: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDefinitionNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventDefinitionNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backlogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backlogSize = this._backlogSize;
    }
    if (this._gracePeriodMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodMs = this._gracePeriodMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDefinitionNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backlogSize = undefined;
      this._gracePeriodMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backlogSize = value.backlogSize;
      this._gracePeriodMs = value.gracePeriodMs;
    }
  }

  // backlog_size - computed: false, optional: true, required: false
  private _backlogSize?: number; 
  public get backlogSize() {
    return this.getNumberAttribute('backlog_size');
  }
  public set backlogSize(value: number) {
    this._backlogSize = value;
  }
  public resetBacklogSize() {
    this._backlogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backlogSizeInput() {
    return this._backlogSize;
  }

  // grace_period_ms - computed: false, optional: true, required: false
  private _gracePeriodMs?: number; 
  public get gracePeriodMs() {
    return this.getNumberAttribute('grace_period_ms');
  }
  public set gracePeriodMs(value: number) {
    this._gracePeriodMs = value;
  }
  public resetGracePeriodMs() {
    this._gracePeriodMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodMsInput() {
    return this._gracePeriodMs;
  }
}
export interface EventDefinitionNotifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#notification_id EventDefinition#notification_id}
  */
  readonly notificationId: string;
}

export function eventDefinitionNotificationsToTerraform(struct?: EventDefinitionNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_id: cdktf.stringToTerraform(struct!.notificationId),
  }
}


export function eventDefinitionNotificationsToHclTerraform(struct?: EventDefinitionNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_id: {
      value: cdktf.stringToHclTerraform(struct!.notificationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDefinitionNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDefinitionNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationId = this._notificationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDefinitionNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationId = value.notificationId;
    }
  }

  // notification_id - computed: false, optional: false, required: true
  private _notificationId?: string; 
  public get notificationId() {
    return this.getStringAttribute('notification_id');
  }
  public set notificationId(value: string) {
    this._notificationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationIdInput() {
    return this._notificationId;
  }
}

export class EventDefinitionNotificationsList extends cdktf.ComplexList {
  public internalValue? : EventDefinitionNotifications[] | cdktf.IResolvable

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
  public get(index: number): EventDefinitionNotificationsOutputReference {
    return new EventDefinitionNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition graylog_event_definition}
*/
export class EventDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_event_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventDefinition to import
  * @param importFromId The id of the existing EventDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_event_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/event_definition graylog_event_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: EventDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_event_definition',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert = config.alert;
    this._config = config.config;
    this._description = config.description;
    this._fieldSpec = config.fieldSpec;
    this._id = config.id;
    this._keySpec = config.keySpec;
    this._priority = config.priority;
    this._title = config.title;
    this._notificationSettings.internalValue = config.notificationSettings;
    this._notifications.internalValue = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert - computed: false, optional: true, required: false
  private _alert?: boolean | cdktf.IResolvable; 
  public get alert() {
    return this.getBooleanAttribute('alert');
  }
  public set alert(value: boolean | cdktf.IResolvable) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // field_spec - computed: false, optional: true, required: false
  private _fieldSpec?: string; 
  public get fieldSpec() {
    return this.getStringAttribute('field_spec');
  }
  public set fieldSpec(value: string) {
    this._fieldSpec = value;
  }
  public resetFieldSpec() {
    this._fieldSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSpecInput() {
    return this._fieldSpec;
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

  // key_spec - computed: false, optional: true, required: false
  private _keySpec?: string[]; 
  public get keySpec() {
    return cdktf.Fn.tolist(this.getListAttribute('key_spec'));
  }
  public set keySpec(value: string[]) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings = new EventDefinitionNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: EventDefinitionNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new EventDefinitionNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: EventDefinitionNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert: cdktf.booleanToTerraform(this._alert),
      config: cdktf.stringToTerraform(this._config),
      description: cdktf.stringToTerraform(this._description),
      field_spec: cdktf.stringToTerraform(this._fieldSpec),
      id: cdktf.stringToTerraform(this._id),
      key_spec: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keySpec),
      priority: cdktf.numberToTerraform(this._priority),
      title: cdktf.stringToTerraform(this._title),
      notification_settings: eventDefinitionNotificationSettingsToTerraform(this._notificationSettings.internalValue),
      notifications: cdktf.listMapper(eventDefinitionNotificationsToTerraform, true)(this._notifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert: {
        value: cdktf.booleanToHclTerraform(this._alert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_spec: {
        value: cdktf.stringToHclTerraform(this._fieldSpec),
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
      key_spec: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keySpec),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_settings: {
        value: eventDefinitionNotificationSettingsToHclTerraform(this._notificationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventDefinitionNotificationSettingsList",
      },
      notifications: {
        value: cdktf.listMapperHcl(eventDefinitionNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventDefinitionNotificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
