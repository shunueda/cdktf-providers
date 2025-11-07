// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageAuthenticatorWebauthnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed values:
  *   - `platform`
  *   - `cross-platform`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#authenticator_attachment StageAuthenticatorWebauthn#authenticator_attachment}
  */
  readonly authenticatorAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#configure_flow StageAuthenticatorWebauthn#configure_flow}
  */
  readonly configureFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#device_type_restrictions StageAuthenticatorWebauthn#device_type_restrictions}
  */
  readonly deviceTypeRestrictions?: string[];
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#friendly_name StageAuthenticatorWebauthn#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#id StageAuthenticatorWebauthn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#max_attempts StageAuthenticatorWebauthn#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#name StageAuthenticatorWebauthn#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `discouraged`
  *   - `preferred`
  *   - `required`
  *  Defaults to `preferred`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#resident_key_requirement StageAuthenticatorWebauthn#resident_key_requirement}
  */
  readonly residentKeyRequirement?: string;
  /**
  * Allowed values:
  *   - `required`
  *   - `preferred`
  *   - `discouraged`
  *  Defaults to `preferred`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#user_verification StageAuthenticatorWebauthn#user_verification}
  */
  readonly userVerification?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn authentik_stage_authenticator_webauthn}
*/
export class StageAuthenticatorWebauthn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_authenticator_webauthn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageAuthenticatorWebauthn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageAuthenticatorWebauthn to import
  * @param importFromId The id of the existing StageAuthenticatorWebauthn that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageAuthenticatorWebauthn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_authenticator_webauthn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_webauthn authentik_stage_authenticator_webauthn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageAuthenticatorWebauthnConfig
  */
  public constructor(scope: Construct, id: string, config: StageAuthenticatorWebauthnConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_authenticator_webauthn',
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
    this._authenticatorAttachment = config.authenticatorAttachment;
    this._configureFlow = config.configureFlow;
    this._deviceTypeRestrictions = config.deviceTypeRestrictions;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._maxAttempts = config.maxAttempts;
    this._name = config.name;
    this._residentKeyRequirement = config.residentKeyRequirement;
    this._userVerification = config.userVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticator_attachment - computed: false, optional: true, required: false
  private _authenticatorAttachment?: string; 
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }
  public set authenticatorAttachment(value: string) {
    this._authenticatorAttachment = value;
  }
  public resetAuthenticatorAttachment() {
    this._authenticatorAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorAttachmentInput() {
    return this._authenticatorAttachment;
  }

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

  // device_type_restrictions - computed: false, optional: true, required: false
  private _deviceTypeRestrictions?: string[]; 
  public get deviceTypeRestrictions() {
    return this.getListAttribute('device_type_restrictions');
  }
  public set deviceTypeRestrictions(value: string[]) {
    this._deviceTypeRestrictions = value;
  }
  public resetDeviceTypeRestrictions() {
    this._deviceTypeRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeRestrictionsInput() {
    return this._deviceTypeRestrictions;
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

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
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

  // resident_key_requirement - computed: false, optional: true, required: false
  private _residentKeyRequirement?: string; 
  public get residentKeyRequirement() {
    return this.getStringAttribute('resident_key_requirement');
  }
  public set residentKeyRequirement(value: string) {
    this._residentKeyRequirement = value;
  }
  public resetResidentKeyRequirement() {
    this._residentKeyRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get residentKeyRequirementInput() {
    return this._residentKeyRequirement;
  }

  // user_verification - computed: false, optional: true, required: false
  private _userVerification?: string; 
  public get userVerification() {
    return this.getStringAttribute('user_verification');
  }
  public set userVerification(value: string) {
    this._userVerification = value;
  }
  public resetUserVerification() {
    this._userVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationInput() {
    return this._userVerification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticator_attachment: cdktf.stringToTerraform(this._authenticatorAttachment),
      configure_flow: cdktf.stringToTerraform(this._configureFlow),
      device_type_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypeRestrictions),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      max_attempts: cdktf.numberToTerraform(this._maxAttempts),
      name: cdktf.stringToTerraform(this._name),
      resident_key_requirement: cdktf.stringToTerraform(this._residentKeyRequirement),
      user_verification: cdktf.stringToTerraform(this._userVerification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticator_attachment: {
        value: cdktf.stringToHclTerraform(this._authenticatorAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_flow: {
        value: cdktf.stringToHclTerraform(this._configureFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type_restrictions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypeRestrictions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      max_attempts: {
        value: cdktf.numberToHclTerraform(this._maxAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resident_key_requirement: {
        value: cdktf.stringToHclTerraform(this._residentKeyRequirement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_verification: {
        value: cdktf.stringToHclTerraform(this._userVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
