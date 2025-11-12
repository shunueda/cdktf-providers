// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyServicesEntitiesFactorsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#auth_payload VerifyServicesEntitiesFactorsV2#auth_payload}
  */
  readonly authPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#binding_alg VerifyServicesEntitiesFactorsV2#binding_alg}
  */
  readonly bindingAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#binding_public_key VerifyServicesEntitiesFactorsV2#binding_public_key}
  */
  readonly bindingPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#binding_secret VerifyServicesEntitiesFactorsV2#binding_secret}
  */
  readonly bindingSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_alg VerifyServicesEntitiesFactorsV2#config_alg}
  */
  readonly configAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_app_id VerifyServicesEntitiesFactorsV2#config_app_id}
  */
  readonly configAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_code_length VerifyServicesEntitiesFactorsV2#config_code_length}
  */
  readonly configCodeLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_notification_platform VerifyServicesEntitiesFactorsV2#config_notification_platform}
  */
  readonly configNotificationPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_notification_token VerifyServicesEntitiesFactorsV2#config_notification_token}
  */
  readonly configNotificationToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_sdk_version VerifyServicesEntitiesFactorsV2#config_sdk_version}
  */
  readonly configSdkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_skew VerifyServicesEntitiesFactorsV2#config_skew}
  */
  readonly configSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#config_time_step VerifyServicesEntitiesFactorsV2#config_time_step}
  */
  readonly configTimeStep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#factor_type VerifyServicesEntitiesFactorsV2#factor_type}
  */
  readonly factorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#friendly_name VerifyServicesEntitiesFactorsV2#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#id VerifyServicesEntitiesFactorsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#identity VerifyServicesEntitiesFactorsV2#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#metadata VerifyServicesEntitiesFactorsV2#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#service_sid VerifyServicesEntitiesFactorsV2#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2 twilio_verify_services_entities_factors_v2}
*/
export class VerifyServicesEntitiesFactorsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_verify_services_entities_factors_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyServicesEntitiesFactorsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyServicesEntitiesFactorsV2 to import
  * @param importFromId The id of the existing VerifyServicesEntitiesFactorsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyServicesEntitiesFactorsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_verify_services_entities_factors_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_entities_factors_v2 twilio_verify_services_entities_factors_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyServicesEntitiesFactorsV2Config
  */
  public constructor(scope: Construct, id: string, config: VerifyServicesEntitiesFactorsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_verify_services_entities_factors_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPayload = config.authPayload;
    this._bindingAlg = config.bindingAlg;
    this._bindingPublicKey = config.bindingPublicKey;
    this._bindingSecret = config.bindingSecret;
    this._configAlg = config.configAlg;
    this._configAppId = config.configAppId;
    this._configCodeLength = config.configCodeLength;
    this._configNotificationPlatform = config.configNotificationPlatform;
    this._configNotificationToken = config.configNotificationToken;
    this._configSdkVersion = config.configSdkVersion;
    this._configSkew = config.configSkew;
    this._configTimeStep = config.configTimeStep;
    this._factorType = config.factorType;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._identity = config.identity;
    this._metadata = config.metadata;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_payload - computed: true, optional: true, required: false
  private _authPayload?: string; 
  public get authPayload() {
    return this.getStringAttribute('auth_payload');
  }
  public set authPayload(value: string) {
    this._authPayload = value;
  }
  public resetAuthPayload() {
    this._authPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPayloadInput() {
    return this._authPayload;
  }

  // binding_alg - computed: true, optional: true, required: false
  private _bindingAlg?: string; 
  public get bindingAlg() {
    return this.getStringAttribute('binding_alg');
  }
  public set bindingAlg(value: string) {
    this._bindingAlg = value;
  }
  public resetBindingAlg() {
    this._bindingAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingAlgInput() {
    return this._bindingAlg;
  }

  // binding_public_key - computed: true, optional: true, required: false
  private _bindingPublicKey?: string; 
  public get bindingPublicKey() {
    return this.getStringAttribute('binding_public_key');
  }
  public set bindingPublicKey(value: string) {
    this._bindingPublicKey = value;
  }
  public resetBindingPublicKey() {
    this._bindingPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingPublicKeyInput() {
    return this._bindingPublicKey;
  }

  // binding_secret - computed: true, optional: true, required: false
  private _bindingSecret?: string; 
  public get bindingSecret() {
    return this.getStringAttribute('binding_secret');
  }
  public set bindingSecret(value: string) {
    this._bindingSecret = value;
  }
  public resetBindingSecret() {
    this._bindingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingSecretInput() {
    return this._bindingSecret;
  }

  // config_alg - computed: true, optional: true, required: false
  private _configAlg?: string; 
  public get configAlg() {
    return this.getStringAttribute('config_alg');
  }
  public set configAlg(value: string) {
    this._configAlg = value;
  }
  public resetConfigAlg() {
    this._configAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAlgInput() {
    return this._configAlg;
  }

  // config_app_id - computed: true, optional: true, required: false
  private _configAppId?: string; 
  public get configAppId() {
    return this.getStringAttribute('config_app_id');
  }
  public set configAppId(value: string) {
    this._configAppId = value;
  }
  public resetConfigAppId() {
    this._configAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAppIdInput() {
    return this._configAppId;
  }

  // config_code_length - computed: true, optional: true, required: false
  private _configCodeLength?: number; 
  public get configCodeLength() {
    return this.getNumberAttribute('config_code_length');
  }
  public set configCodeLength(value: number) {
    this._configCodeLength = value;
  }
  public resetConfigCodeLength() {
    this._configCodeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configCodeLengthInput() {
    return this._configCodeLength;
  }

  // config_notification_platform - computed: true, optional: true, required: false
  private _configNotificationPlatform?: string; 
  public get configNotificationPlatform() {
    return this.getStringAttribute('config_notification_platform');
  }
  public set configNotificationPlatform(value: string) {
    this._configNotificationPlatform = value;
  }
  public resetConfigNotificationPlatform() {
    this._configNotificationPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNotificationPlatformInput() {
    return this._configNotificationPlatform;
  }

  // config_notification_token - computed: true, optional: true, required: false
  private _configNotificationToken?: string; 
  public get configNotificationToken() {
    return this.getStringAttribute('config_notification_token');
  }
  public set configNotificationToken(value: string) {
    this._configNotificationToken = value;
  }
  public resetConfigNotificationToken() {
    this._configNotificationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNotificationTokenInput() {
    return this._configNotificationToken;
  }

  // config_sdk_version - computed: true, optional: true, required: false
  private _configSdkVersion?: string; 
  public get configSdkVersion() {
    return this.getStringAttribute('config_sdk_version');
  }
  public set configSdkVersion(value: string) {
    this._configSdkVersion = value;
  }
  public resetConfigSdkVersion() {
    this._configSdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSdkVersionInput() {
    return this._configSdkVersion;
  }

  // config_skew - computed: true, optional: true, required: false
  private _configSkew?: number; 
  public get configSkew() {
    return this.getNumberAttribute('config_skew');
  }
  public set configSkew(value: number) {
    this._configSkew = value;
  }
  public resetConfigSkew() {
    this._configSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSkewInput() {
    return this._configSkew;
  }

  // config_time_step - computed: true, optional: true, required: false
  private _configTimeStep?: number; 
  public get configTimeStep() {
    return this.getNumberAttribute('config_time_step');
  }
  public set configTimeStep(value: number) {
    this._configTimeStep = value;
  }
  public resetConfigTimeStep() {
    this._configTimeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTimeStepInput() {
    return this._configTimeStep;
  }

  // factor_type - computed: false, optional: false, required: true
  private _factorType?: string; 
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }
  public set factorType(value: string) {
    this._factorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get factorTypeInput() {
    return this._factorType;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
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

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_payload: cdktf.stringToTerraform(this._authPayload),
      binding_alg: cdktf.stringToTerraform(this._bindingAlg),
      binding_public_key: cdktf.stringToTerraform(this._bindingPublicKey),
      binding_secret: cdktf.stringToTerraform(this._bindingSecret),
      config_alg: cdktf.stringToTerraform(this._configAlg),
      config_app_id: cdktf.stringToTerraform(this._configAppId),
      config_code_length: cdktf.numberToTerraform(this._configCodeLength),
      config_notification_platform: cdktf.stringToTerraform(this._configNotificationPlatform),
      config_notification_token: cdktf.stringToTerraform(this._configNotificationToken),
      config_sdk_version: cdktf.stringToTerraform(this._configSdkVersion),
      config_skew: cdktf.numberToTerraform(this._configSkew),
      config_time_step: cdktf.numberToTerraform(this._configTimeStep),
      factor_type: cdktf.stringToTerraform(this._factorType),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      metadata: cdktf.stringToTerraform(this._metadata),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_payload: {
        value: cdktf.stringToHclTerraform(this._authPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_alg: {
        value: cdktf.stringToHclTerraform(this._bindingAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_public_key: {
        value: cdktf.stringToHclTerraform(this._bindingPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_secret: {
        value: cdktf.stringToHclTerraform(this._bindingSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_alg: {
        value: cdktf.stringToHclTerraform(this._configAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_app_id: {
        value: cdktf.stringToHclTerraform(this._configAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_code_length: {
        value: cdktf.numberToHclTerraform(this._configCodeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_notification_platform: {
        value: cdktf.stringToHclTerraform(this._configNotificationPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_notification_token: {
        value: cdktf.stringToHclTerraform(this._configNotificationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_sdk_version: {
        value: cdktf.stringToHclTerraform(this._configSdkVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_skew: {
        value: cdktf.numberToHclTerraform(this._configSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_time_step: {
        value: cdktf.numberToHclTerraform(this._configTimeStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      factor_type: {
        value: cdktf.stringToHclTerraform(this._factorType),
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
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
