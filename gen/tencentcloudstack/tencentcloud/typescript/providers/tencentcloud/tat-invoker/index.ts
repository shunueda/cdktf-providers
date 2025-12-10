// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TatInvokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remote command ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#command_id TatInvoker#command_id}
  */
  readonly commandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#id TatInvoker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the instance bound to the trigger. Up to 100 IDs are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#instance_ids TatInvoker#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Invoker name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#name TatInvoker#name}
  */
  readonly name: string;
  /**
  * Custom parameters of the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#parameters TatInvoker#parameters}
  */
  readonly parameters?: string;
  /**
  * Invoker type. It can only be `SCHEDULE` (recurring invokers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#type TatInvoker#type}
  */
  readonly type: string;
  /**
  * The user who executes the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#username TatInvoker#username}
  */
  readonly username?: string;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#schedule_settings TatInvoker#schedule_settings}
  */
  readonly scheduleSettings?: TatInvokerScheduleSettings;
}
export interface TatInvokerScheduleSettings {
  /**
  * The next execution time of the invoker. This field is required if Policy is ONCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#invoke_time TatInvoker#invoke_time}
  */
  readonly invokeTime?: string;
  /**
  * Execution policy: `ONCE`: Execute once; `RECURRENCE`: Execute repeatedly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#policy TatInvoker#policy}
  */
  readonly policy: string;
  /**
  * Trigger the crontab expression. This field is required if `Policy` is `RECURRENCE`. The crontab expression is parsed in UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#recurrence TatInvoker#recurrence}
  */
  readonly recurrence?: string;
}

export function tatInvokerScheduleSettingsToTerraform(struct?: TatInvokerScheduleSettingsOutputReference | TatInvokerScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invoke_time: cdktf.stringToTerraform(struct!.invokeTime),
    policy: cdktf.stringToTerraform(struct!.policy),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
  }
}


export function tatInvokerScheduleSettingsToHclTerraform(struct?: TatInvokerScheduleSettingsOutputReference | TatInvokerScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invoke_time: {
      value: cdktf.stringToHclTerraform(struct!.invokeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TatInvokerScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TatInvokerScheduleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeTime = this._invokeTime;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TatInvokerScheduleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invokeTime = undefined;
      this._policy = undefined;
      this._recurrence = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invokeTime = value.invokeTime;
      this._policy = value.policy;
      this._recurrence = value.recurrence;
    }
  }

  // invoke_time - computed: false, optional: true, required: false
  private _invokeTime?: string; 
  public get invokeTime() {
    return this.getStringAttribute('invoke_time');
  }
  public set invokeTime(value: string) {
    this._invokeTime = value;
  }
  public resetInvokeTime() {
    this._invokeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTimeInput() {
    return this._invokeTime;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker tencentcloud_tat_invoker}
*/
export class TatInvoker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tat_invoker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TatInvoker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TatInvoker to import
  * @param importFromId The id of the existing TatInvoker that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TatInvoker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tat_invoker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tat_invoker tencentcloud_tat_invoker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TatInvokerConfig
  */
  public constructor(scope: Construct, id: string, config: TatInvokerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tat_invoker',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandId = config.commandId;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._name = config.name;
    this._parameters = config.parameters;
    this._type = config.type;
    this._username = config.username;
    this._scheduleSettings.internalValue = config.scheduleSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_id - computed: false, optional: false, required: true
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
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

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // invoker_id - computed: true, optional: false, required: false
  public get invokerId() {
    return this.getStringAttribute('invoker_id');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // schedule_settings - computed: false, optional: true, required: false
  private _scheduleSettings = new TatInvokerScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: TatInvokerScheduleSettings) {
    this._scheduleSettings.internalValue = value;
  }
  public resetScheduleSettings() {
    this._scheduleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleSettingsInput() {
    return this._scheduleSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_id: cdktf.stringToTerraform(this._commandId),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.stringToTerraform(this._parameters),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      schedule_settings: tatInvokerScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_id: {
        value: cdktf.stringToHclTerraform(this._commandId),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_settings: {
        value: tatInvokerScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TatInvokerScheduleSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
