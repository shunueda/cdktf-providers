// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageAuthenticatorValidateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#configuration_stages StageAuthenticatorValidate#configuration_stages}
  */
  readonly configurationStages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#device_classes StageAuthenticatorValidate#device_classes}
  */
  readonly deviceClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#id StageAuthenticatorValidate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `seconds=0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#last_auth_threshold StageAuthenticatorValidate#last_auth_threshold}
  */
  readonly lastAuthThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#name StageAuthenticatorValidate#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `skip`
  *   - `deny`
  *   - `configure`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#not_configured_action StageAuthenticatorValidate#not_configured_action}
  */
  readonly notConfiguredAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#webauthn_allowed_device_types StageAuthenticatorValidate#webauthn_allowed_device_types}
  */
  readonly webauthnAllowedDeviceTypes?: string[];
  /**
  * Allowed values:
  *   - `required`
  *   - `preferred`
  *   - `discouraged`
  *  Defaults to `preferred`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#webauthn_user_verification StageAuthenticatorValidate#webauthn_user_verification}
  */
  readonly webauthnUserVerification?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate authentik_stage_authenticator_validate}
*/
export class StageAuthenticatorValidate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_authenticator_validate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageAuthenticatorValidate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageAuthenticatorValidate to import
  * @param importFromId The id of the existing StageAuthenticatorValidate that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageAuthenticatorValidate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_authenticator_validate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_validate authentik_stage_authenticator_validate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageAuthenticatorValidateConfig
  */
  public constructor(scope: Construct, id: string, config: StageAuthenticatorValidateConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_authenticator_validate',
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
    this._configurationStages = config.configurationStages;
    this._deviceClasses = config.deviceClasses;
    this._id = config.id;
    this._lastAuthThreshold = config.lastAuthThreshold;
    this._name = config.name;
    this._notConfiguredAction = config.notConfiguredAction;
    this._webauthnAllowedDeviceTypes = config.webauthnAllowedDeviceTypes;
    this._webauthnUserVerification = config.webauthnUserVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_stages - computed: false, optional: true, required: false
  private _configurationStages?: string[]; 
  public get configurationStages() {
    return this.getListAttribute('configuration_stages');
  }
  public set configurationStages(value: string[]) {
    this._configurationStages = value;
  }
  public resetConfigurationStages() {
    this._configurationStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationStagesInput() {
    return this._configurationStages;
  }

  // device_classes - computed: false, optional: true, required: false
  private _deviceClasses?: string[]; 
  public get deviceClasses() {
    return this.getListAttribute('device_classes');
  }
  public set deviceClasses(value: string[]) {
    this._deviceClasses = value;
  }
  public resetDeviceClasses() {
    this._deviceClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassesInput() {
    return this._deviceClasses;
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

  // last_auth_threshold - computed: false, optional: true, required: false
  private _lastAuthThreshold?: string; 
  public get lastAuthThreshold() {
    return this.getStringAttribute('last_auth_threshold');
  }
  public set lastAuthThreshold(value: string) {
    this._lastAuthThreshold = value;
  }
  public resetLastAuthThreshold() {
    this._lastAuthThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAuthThresholdInput() {
    return this._lastAuthThreshold;
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

  // not_configured_action - computed: false, optional: false, required: true
  private _notConfiguredAction?: string; 
  public get notConfiguredAction() {
    return this.getStringAttribute('not_configured_action');
  }
  public set notConfiguredAction(value: string) {
    this._notConfiguredAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notConfiguredActionInput() {
    return this._notConfiguredAction;
  }

  // webauthn_allowed_device_types - computed: false, optional: true, required: false
  private _webauthnAllowedDeviceTypes?: string[]; 
  public get webauthnAllowedDeviceTypes() {
    return this.getListAttribute('webauthn_allowed_device_types');
  }
  public set webauthnAllowedDeviceTypes(value: string[]) {
    this._webauthnAllowedDeviceTypes = value;
  }
  public resetWebauthnAllowedDeviceTypes() {
    this._webauthnAllowedDeviceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnAllowedDeviceTypesInput() {
    return this._webauthnAllowedDeviceTypes;
  }

  // webauthn_user_verification - computed: false, optional: true, required: false
  private _webauthnUserVerification?: string; 
  public get webauthnUserVerification() {
    return this.getStringAttribute('webauthn_user_verification');
  }
  public set webauthnUserVerification(value: string) {
    this._webauthnUserVerification = value;
  }
  public resetWebauthnUserVerification() {
    this._webauthnUserVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnUserVerificationInput() {
    return this._webauthnUserVerification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationStages),
      device_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceClasses),
      id: cdktf.stringToTerraform(this._id),
      last_auth_threshold: cdktf.stringToTerraform(this._lastAuthThreshold),
      name: cdktf.stringToTerraform(this._name),
      not_configured_action: cdktf.stringToTerraform(this._notConfiguredAction),
      webauthn_allowed_device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webauthnAllowedDeviceTypes),
      webauthn_user_verification: cdktf.stringToTerraform(this._webauthnUserVerification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_stages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationStages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_auth_threshold: {
        value: cdktf.stringToHclTerraform(this._lastAuthThreshold),
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
      not_configured_action: {
        value: cdktf.stringToHclTerraform(this._notConfiguredAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webauthn_allowed_device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webauthnAllowedDeviceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      webauthn_user_verification: {
        value: cdktf.stringToHclTerraform(this._webauthnUserVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
