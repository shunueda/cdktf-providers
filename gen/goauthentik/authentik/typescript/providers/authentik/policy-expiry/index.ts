// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyExpiryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#days PolicyExpiry#days}
  */
  readonly days: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#deny_only PolicyExpiry#deny_only}
  */
  readonly denyOnly?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#execution_logging PolicyExpiry#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#id PolicyExpiry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#name PolicyExpiry#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry authentik_policy_expiry}
*/
export class PolicyExpiry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_expiry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyExpiry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyExpiry to import
  * @param importFromId The id of the existing PolicyExpiry that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyExpiry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_expiry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/policy_expiry authentik_policy_expiry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyExpiryConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyExpiryConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_expiry',
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
    this._days = config.days;
    this._denyOnly = config.denyOnly;
    this._executionLogging = config.executionLogging;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // deny_only - computed: false, optional: true, required: false
  private _denyOnly?: boolean | cdktf.IResolvable; 
  public get denyOnly() {
    return this.getBooleanAttribute('deny_only');
  }
  public set denyOnly(value: boolean | cdktf.IResolvable) {
    this._denyOnly = value;
  }
  public resetDenyOnly() {
    this._denyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyOnlyInput() {
    return this._denyOnly;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      days: cdktf.numberToTerraform(this._days),
      deny_only: cdktf.booleanToTerraform(this._denyOnly),
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      days: {
        value: cdktf.numberToHclTerraform(this._days),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deny_only: {
        value: cdktf.booleanToHclTerraform(this._denyOnly),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
