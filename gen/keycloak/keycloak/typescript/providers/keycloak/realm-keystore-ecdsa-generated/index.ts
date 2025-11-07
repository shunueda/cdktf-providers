// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmKeystoreEcdsaGeneratedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set if the keys can be used for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#active RealmKeystoreEcdsaGenerated#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Elliptic Curve used in ECDSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#elliptic_curve_key RealmKeystoreEcdsaGenerated#elliptic_curve_key}
  */
  readonly ellipticCurveKey?: string;
  /**
  * Set if the keys are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#enabled RealmKeystoreEcdsaGenerated#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#id RealmKeystoreEcdsaGenerated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name of provider when linked in admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#name RealmKeystoreEcdsaGenerated#name}
  */
  readonly name: string;
  /**
  * Priority for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#priority RealmKeystoreEcdsaGenerated#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#realm_id RealmKeystoreEcdsaGenerated#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated keycloak_realm_keystore_ecdsa_generated}
*/
export class RealmKeystoreEcdsaGenerated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_keystore_ecdsa_generated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmKeystoreEcdsaGenerated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmKeystoreEcdsaGenerated to import
  * @param importFromId The id of the existing RealmKeystoreEcdsaGenerated that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmKeystoreEcdsaGenerated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_keystore_ecdsa_generated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_keystore_ecdsa_generated keycloak_realm_keystore_ecdsa_generated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmKeystoreEcdsaGeneratedConfig
  */
  public constructor(scope: Construct, id: string, config: RealmKeystoreEcdsaGeneratedConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_keystore_ecdsa_generated',
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
    this._ellipticCurveKey = config.ellipticCurveKey;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
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

  // elliptic_curve_key - computed: false, optional: true, required: false
  private _ellipticCurveKey?: string; 
  public get ellipticCurveKey() {
    return this.getStringAttribute('elliptic_curve_key');
  }
  public set ellipticCurveKey(value: string) {
    this._ellipticCurveKey = value;
  }
  public resetEllipticCurveKey() {
    this._ellipticCurveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveKeyInput() {
    return this._ellipticCurveKey;
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
      elliptic_curve_key: cdktf.stringToTerraform(this._ellipticCurveKey),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
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
      elliptic_curve_key: {
        value: cdktf.stringToHclTerraform(this._ellipticCurveKey),
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
