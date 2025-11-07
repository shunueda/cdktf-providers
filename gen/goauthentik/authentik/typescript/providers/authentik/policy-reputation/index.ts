// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyReputationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#check_ip PolicyReputation#check_ip}
  */
  readonly checkIp?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#check_username PolicyReputation#check_username}
  */
  readonly checkUsername?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#execution_logging PolicyReputation#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#id PolicyReputation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#name PolicyReputation#name}
  */
  readonly name: string;
  /**
  * Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#threshold PolicyReputation#threshold}
  */
  readonly threshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation authentik_policy_reputation}
*/
export class PolicyReputation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_reputation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyReputation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyReputation to import
  * @param importFromId The id of the existing PolicyReputation that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyReputation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_reputation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_reputation authentik_policy_reputation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyReputationConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyReputationConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_reputation',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkIp = config.checkIp;
    this._checkUsername = config.checkUsername;
    this._executionLogging = config.executionLogging;
    this._id = config.id;
    this._name = config.name;
    this._threshold = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_ip - computed: false, optional: true, required: false
  private _checkIp?: boolean | cdktf.IResolvable; 
  public get checkIp() {
    return this.getBooleanAttribute('check_ip');
  }
  public set checkIp(value: boolean | cdktf.IResolvable) {
    this._checkIp = value;
  }
  public resetCheckIp() {
    this._checkIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIpInput() {
    return this._checkIp;
  }

  // check_username - computed: false, optional: true, required: false
  private _checkUsername?: boolean | cdktf.IResolvable; 
  public get checkUsername() {
    return this.getBooleanAttribute('check_username');
  }
  public set checkUsername(value: boolean | cdktf.IResolvable) {
    this._checkUsername = value;
  }
  public resetCheckUsername() {
    this._checkUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUsernameInput() {
    return this._checkUsername;
  }

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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_ip: cdktf.booleanToTerraform(this._checkIp),
      check_username: cdktf.booleanToTerraform(this._checkUsername),
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      threshold: cdktf.numberToTerraform(this._threshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_ip: {
        value: cdktf.booleanToHclTerraform(this._checkIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_username: {
        value: cdktf.booleanToHclTerraform(this._checkUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
