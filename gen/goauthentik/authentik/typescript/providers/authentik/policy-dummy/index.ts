// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDummyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#execution_logging PolicyDummy#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#id PolicyDummy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#name PolicyDummy#name}
  */
  readonly name: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#result PolicyDummy#result}
  */
  readonly result?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#wait_max PolicyDummy#wait_max}
  */
  readonly waitMax?: number;
  /**
  * Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#wait_min PolicyDummy#wait_min}
  */
  readonly waitMin?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy authentik_policy_dummy}
*/
export class PolicyDummy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_dummy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDummy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDummy to import
  * @param importFromId The id of the existing PolicyDummy that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDummy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_dummy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_dummy authentik_policy_dummy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDummyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDummyConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_dummy',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionLogging = config.executionLogging;
    this._id = config.id;
    this._name = config.name;
    this._result = config.result;
    this._waitMax = config.waitMax;
    this._waitMin = config.waitMin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_logging - computed: false, optional: true, required: false
  private _executionLogging?: boolean | cdktf.IResolvable; 
  public get executionLogging() {
    return this.getBooleanAttribute('execution_logging');
  }
  public set executionLogging(value: boolean | cdktf.IResolvable) {
    this._executionLogging = value;
  }
  public resetExecutionLogging() {
    this._executionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLoggingInput() {
    return this._executionLogging;
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

  // result - computed: false, optional: true, required: false
  private _result?: boolean | cdktf.IResolvable; 
  public get result() {
    return this.getBooleanAttribute('result');
  }
  public set result(value: boolean | cdktf.IResolvable) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // wait_max - computed: false, optional: true, required: false
  private _waitMax?: number; 
  public get waitMax() {
    return this.getNumberAttribute('wait_max');
  }
  public set waitMax(value: number) {
    this._waitMax = value;
  }
  public resetWaitMax() {
    this._waitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitMaxInput() {
    return this._waitMax;
  }

  // wait_min - computed: false, optional: true, required: false
  private _waitMin?: number; 
  public get waitMin() {
    return this.getNumberAttribute('wait_min');
  }
  public set waitMin(value: number) {
    this._waitMin = value;
  }
  public resetWaitMin() {
    this._waitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitMinInput() {
    return this._waitMin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result: cdktf.booleanToTerraform(this._result),
      wait_max: cdktf.numberToTerraform(this._waitMax),
      wait_min: cdktf.numberToTerraform(this._waitMin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_logging: {
        value: cdktf.booleanToHclTerraform(this._executionLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      result: {
        value: cdktf.booleanToHclTerraform(this._result),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_max: {
        value: cdktf.numberToHclTerraform(this._waitMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_min: {
        value: cdktf.numberToHclTerraform(this._waitMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
