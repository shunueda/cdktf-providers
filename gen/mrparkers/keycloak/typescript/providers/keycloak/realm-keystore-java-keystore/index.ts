// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmKeystoreJavaKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set if the keys can be used for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#active RealmKeystoreJavaKeystore#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Intended algorithm for the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#algorithm RealmKeystoreJavaKeystore#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Set if the keys are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#enabled RealmKeystoreJavaKeystore#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#id RealmKeystoreJavaKeystore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Alias for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#key_alias RealmKeystoreJavaKeystore#key_alias}
  */
  readonly keyAlias: string;
  /**
  * Password for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#key_password RealmKeystoreJavaKeystore#key_password}
  */
  readonly keyPassword: string;
  /**
  * Path to keys file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#keystore RealmKeystoreJavaKeystore#keystore}
  */
  readonly keystore: string;
  /**
  * Password for the keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#keystore_password RealmKeystoreJavaKeystore#keystore_password}
  */
  readonly keystorePassword: string;
  /**
  * Display name of provider when linked in admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#name RealmKeystoreJavaKeystore#name}
  */
  readonly name: string;
  /**
  * Priority for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#priority RealmKeystoreJavaKeystore#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#realm_id RealmKeystoreJavaKeystore#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore keycloak_realm_keystore_java_keystore}
*/
export class RealmKeystoreJavaKeystore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_keystore_java_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmKeystoreJavaKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmKeystoreJavaKeystore to import
  * @param importFromId The id of the existing RealmKeystoreJavaKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmKeystoreJavaKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_keystore_java_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/realm_keystore_java_keystore keycloak_realm_keystore_java_keystore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmKeystoreJavaKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: RealmKeystoreJavaKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_keystore_java_keystore',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._keyAlias = config.keyAlias;
    this._keyPassword = config.keyPassword;
    this._keystore = config.keystore;
    this._keystorePassword = config.keystorePassword;
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

  // key_alias - computed: false, optional: false, required: true
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_password - computed: false, optional: false, required: true
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // keystore - computed: false, optional: false, required: true
  private _keystore?: string; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string) {
    this._keystore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore;
  }

  // keystore_password - computed: false, optional: false, required: true
  private _keystorePassword?: string; 
  public get keystorePassword() {
    return this.getStringAttribute('keystore_password');
  }
  public set keystorePassword(value: string) {
    this._keystorePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordInput() {
    return this._keystorePassword;
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      key_alias: cdktf.stringToTerraform(this._keyAlias),
      key_password: cdktf.stringToTerraform(this._keyPassword),
      keystore: cdktf.stringToTerraform(this._keystore),
      keystore_password: cdktf.stringToTerraform(this._keystorePassword),
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
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      key_alias: {
        value: cdktf.stringToHclTerraform(this._keyAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_password: {
        value: cdktf.stringToHclTerraform(this._keyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore: {
        value: cdktf.stringToHclTerraform(this._keystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore_password: {
        value: cdktf.stringToHclTerraform(this._keystorePassword),
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
