// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrefilterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#description PrefilterPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#id PrefilterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#name PrefilterPolicy#name}
  */
  readonly name: string;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#default_action PrefilterPolicy#default_action}
  */
  readonly defaultAction: PrefilterPolicyDefaultAction;
}
export interface PrefilterPolicyDefaultAction {
  /**
  * Action. Should be BLOCK_TUNNELS or ANALYZE_TUNNELS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#action PrefilterPolicy#action}
  */
  readonly action: string;
  /**
  * Log begin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#log_begin PrefilterPolicy#log_begin}
  */
  readonly logBegin?: boolean | cdktf.IResolvable;
  /**
  * Send events to FMC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#send_events_to_fmc PrefilterPolicy#send_events_to_fmc}
  */
  readonly sendEventsToFmc?: boolean | cdktf.IResolvable;
}

export function prefilterPolicyDefaultActionToTerraform(struct?: PrefilterPolicyDefaultActionOutputReference | PrefilterPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log_begin: cdktf.booleanToTerraform(struct!.logBegin),
    send_events_to_fmc: cdktf.booleanToTerraform(struct!.sendEventsToFmc),
  }
}


export function prefilterPolicyDefaultActionToHclTerraform(struct?: PrefilterPolicyDefaultActionOutputReference | PrefilterPolicyDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_begin: {
      value: cdktf.booleanToHclTerraform(struct!.logBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_events_to_fmc: {
      value: cdktf.booleanToHclTerraform(struct!.sendEventsToFmc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrefilterPolicyDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrefilterPolicyDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._logBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBegin = this._logBegin;
    }
    if (this._sendEventsToFmc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEventsToFmc = this._sendEventsToFmc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrefilterPolicyDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._logBegin = undefined;
      this._sendEventsToFmc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._logBegin = value.logBegin;
      this._sendEventsToFmc = value.sendEventsToFmc;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_begin - computed: false, optional: true, required: false
  private _logBegin?: boolean | cdktf.IResolvable; 
  public get logBegin() {
    return this.getBooleanAttribute('log_begin');
  }
  public set logBegin(value: boolean | cdktf.IResolvable) {
    this._logBegin = value;
  }
  public resetLogBegin() {
    this._logBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBeginInput() {
    return this._logBegin;
  }

  // send_events_to_fmc - computed: false, optional: true, required: false
  private _sendEventsToFmc?: boolean | cdktf.IResolvable; 
  public get sendEventsToFmc() {
    return this.getBooleanAttribute('send_events_to_fmc');
  }
  public set sendEventsToFmc(value: boolean | cdktf.IResolvable) {
    this._sendEventsToFmc = value;
  }
  public resetSendEventsToFmc() {
    this._sendEventsToFmc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEventsToFmcInput() {
    return this._sendEventsToFmc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy fmc_prefilter_policy}
*/
export class PrefilterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_prefilter_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrefilterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrefilterPolicy to import
  * @param importFromId The id of the existing PrefilterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrefilterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_prefilter_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/prefilter_policy fmc_prefilter_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrefilterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PrefilterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_prefilter_policy',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._defaultAction.internalValue = config.defaultAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new PrefilterPolicyDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: PrefilterPolicyDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      default_action: prefilterPolicyDefaultActionToTerraform(this._defaultAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: prefilterPolicyDefaultActionToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrefilterPolicyDefaultActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
