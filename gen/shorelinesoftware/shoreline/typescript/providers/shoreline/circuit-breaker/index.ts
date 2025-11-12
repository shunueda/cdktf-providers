// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CircuitBreakerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#breaker_type CircuitBreaker#breaker_type}
  */
  readonly breakerType?: string;
  /**
  * A specific action to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#command CircuitBreaker#command}
  */
  readonly command: string;
  /**
  * A string value denoting the slack channel where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#communication_channel CircuitBreaker#communication_channel}
  */
  readonly communicationChannel?: string;
  /**
  * A string value denoting the slack workspace where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#communication_workspace CircuitBreaker#communication_workspace}
  */
  readonly communicationWorkspace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#duration CircuitBreaker#duration}
  */
  readonly duration: string;
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#enabled CircuitBreaker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `safe`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#fail_over CircuitBreaker#fail_over}
  */
  readonly failOver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#hard_limit CircuitBreaker#hard_limit}
  */
  readonly hardLimit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#id CircuitBreaker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#name CircuitBreaker#name}
  */
  readonly name: string;
  /**
  * Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#soft_limit CircuitBreaker#soft_limit}
  */
  readonly softLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker shoreline_circuit_breaker}
*/
export class CircuitBreaker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_circuit_breaker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CircuitBreaker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CircuitBreaker to import
  * @param importFromId The id of the existing CircuitBreaker that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CircuitBreaker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_circuit_breaker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/circuit_breaker shoreline_circuit_breaker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CircuitBreakerConfig
  */
  public constructor(scope: Construct, id: string, config: CircuitBreakerConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_circuit_breaker',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._breakerType = config.breakerType;
    this._command = config.command;
    this._communicationChannel = config.communicationChannel;
    this._communicationWorkspace = config.communicationWorkspace;
    this._duration = config.duration;
    this._enabled = config.enabled;
    this._failOver = config.failOver;
    this._hardLimit = config.hardLimit;
    this._id = config.id;
    this._name = config.name;
    this._softLimit = config.softLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // breaker_type - computed: false, optional: true, required: false
  private _breakerType?: string; 
  public get breakerType() {
    return this.getStringAttribute('breaker_type');
  }
  public set breakerType(value: string) {
    this._breakerType = value;
  }
  public resetBreakerType() {
    this._breakerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerTypeInput() {
    return this._breakerType;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // communication_channel - computed: false, optional: true, required: false
  private _communicationChannel?: string; 
  public get communicationChannel() {
    return this.getStringAttribute('communication_channel');
  }
  public set communicationChannel(value: string) {
    this._communicationChannel = value;
  }
  public resetCommunicationChannel() {
    this._communicationChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationChannelInput() {
    return this._communicationChannel;
  }

  // communication_workspace - computed: false, optional: true, required: false
  private _communicationWorkspace?: string; 
  public get communicationWorkspace() {
    return this.getStringAttribute('communication_workspace');
  }
  public set communicationWorkspace(value: string) {
    this._communicationWorkspace = value;
  }
  public resetCommunicationWorkspace() {
    this._communicationWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationWorkspaceInput() {
    return this._communicationWorkspace;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fail_over - computed: false, optional: true, required: false
  private _failOver?: string; 
  public get failOver() {
    return this.getStringAttribute('fail_over');
  }
  public set failOver(value: string) {
    this._failOver = value;
  }
  public resetFailOver() {
    this._failOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverInput() {
    return this._failOver;
  }

  // hard_limit - computed: false, optional: false, required: true
  private _hardLimit?: number; 
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }
  public set hardLimit(value: number) {
    this._hardLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardLimitInput() {
    return this._hardLimit;
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

  // soft_limit - computed: false, optional: true, required: false
  private _softLimit?: number; 
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
  public set softLimit(value: number) {
    this._softLimit = value;
  }
  public resetSoftLimit() {
    this._softLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitInput() {
    return this._softLimit;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      breaker_type: cdktf.stringToTerraform(this._breakerType),
      command: cdktf.stringToTerraform(this._command),
      communication_channel: cdktf.stringToTerraform(this._communicationChannel),
      communication_workspace: cdktf.stringToTerraform(this._communicationWorkspace),
      duration: cdktf.stringToTerraform(this._duration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fail_over: cdktf.stringToTerraform(this._failOver),
      hard_limit: cdktf.numberToTerraform(this._hardLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      soft_limit: cdktf.numberToTerraform(this._softLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      breaker_type: {
        value: cdktf.stringToHclTerraform(this._breakerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_channel: {
        value: cdktf.stringToHclTerraform(this._communicationChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_workspace: {
        value: cdktf.stringToHclTerraform(this._communicationWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      fail_over: {
        value: cdktf.stringToHclTerraform(this._failOver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hard_limit: {
        value: cdktf.numberToHclTerraform(this._hardLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      soft_limit: {
        value: cdktf.numberToHclTerraform(this._softLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
