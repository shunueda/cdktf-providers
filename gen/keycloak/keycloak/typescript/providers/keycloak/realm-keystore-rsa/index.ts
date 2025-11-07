// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmKeystoreRsaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set if the keys can be used for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#active RealmKeystoreRsa#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Intended algorithm for the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#algorithm RealmKeystoreRsa#algorithm}
  */
  readonly algorithm?: string;
  /**
  * X509 Certificate encoded in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#certificate RealmKeystoreRsa#certificate}
  */
  readonly certificate: string;
  /**
  * Set if the keys are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#enabled RealmKeystoreRsa#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#id RealmKeystoreRsa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name of provider when linked in admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#name RealmKeystoreRsa#name}
  */
  readonly name: string;
  /**
  * Priority for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#priority RealmKeystoreRsa#priority}
  */
  readonly priority?: number;
  /**
  * Private RSA Key encoded in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#private_key RealmKeystoreRsa#private_key}
  */
  readonly privateKey: string;
  /**
  * RSA key provider id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#provider_id RealmKeystoreRsa#provider_id}
  */
  readonly providerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#realm_id RealmKeystoreRsa#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa keycloak_realm_keystore_rsa}
*/
export class RealmKeystoreRsa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_keystore_rsa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmKeystoreRsa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmKeystoreRsa to import
  * @param importFromId The id of the existing RealmKeystoreRsa that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmKeystoreRsa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_keystore_rsa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_rsa keycloak_realm_keystore_rsa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmKeystoreRsaConfig
  */
  public constructor(scope: Construct, id: string, config: RealmKeystoreRsaConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_keystore_rsa',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._algorithm = config.algorithm;
    this._certificate = config.certificate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._privateKey = config.privateKey;
    this._providerId = config.providerId;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      certificate: cdktf.stringToTerraform(this._certificate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      private_key: cdktf.stringToTerraform(this._privateKey),
      provider_id: cdktf.stringToTerraform(this._providerId),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
