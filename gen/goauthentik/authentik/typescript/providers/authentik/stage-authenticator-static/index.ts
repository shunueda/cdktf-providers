// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageAuthenticatorStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#configure_flow StageAuthenticatorStatic#configure_flow}
  */
  readonly configureFlow?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#friendly_name StageAuthenticatorStatic#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#id StageAuthenticatorStatic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#name StageAuthenticatorStatic#name}
  */
  readonly name: string;
  /**
  * Defaults to `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#token_count StageAuthenticatorStatic#token_count}
  */
  readonly tokenCount?: number;
  /**
  * Defaults to `12`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#token_length StageAuthenticatorStatic#token_length}
  */
  readonly tokenLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static authentik_stage_authenticator_static}
*/
export class StageAuthenticatorStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_authenticator_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageAuthenticatorStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageAuthenticatorStatic to import
  * @param importFromId The id of the existing StageAuthenticatorStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageAuthenticatorStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_authenticator_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/stage_authenticator_static authentik_stage_authenticator_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageAuthenticatorStaticConfig
  */
  public constructor(scope: Construct, id: string, config: StageAuthenticatorStaticConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_authenticator_static',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configureFlow = config.configureFlow;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._name = config.name;
    this._tokenCount = config.tokenCount;
    this._tokenLength = config.tokenLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configure_flow - computed: false, optional: true, required: false
  private _configureFlow?: string; 
  public get configureFlow() {
    return this.getStringAttribute('configure_flow');
  }
  public set configureFlow(value: string) {
    this._configureFlow = value;
  }
  public resetConfigureFlow() {
    this._configureFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureFlowInput() {
    return this._configureFlow;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // token_count - computed: false, optional: true, required: false
  private _tokenCount?: number; 
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
  public set tokenCount(value: number) {
    this._tokenCount = value;
  }
  public resetTokenCount() {
    this._tokenCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCountInput() {
    return this._tokenCount;
  }

  // token_length - computed: false, optional: true, required: false
  private _tokenLength?: number; 
  public get tokenLength() {
    return this.getNumberAttribute('token_length');
  }
  public set tokenLength(value: number) {
    this._tokenLength = value;
  }
  public resetTokenLength() {
    this._tokenLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLengthInput() {
    return this._tokenLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configure_flow: cdktf.stringToTerraform(this._configureFlow),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      token_count: cdktf.numberToTerraform(this._tokenCount),
      token_length: cdktf.numberToTerraform(this._tokenLength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configure_flow: {
        value: cdktf.stringToHclTerraform(this._configureFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      token_count: {
        value: cdktf.numberToHclTerraform(this._tokenCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_length: {
        value: cdktf.numberToHclTerraform(this._tokenLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
