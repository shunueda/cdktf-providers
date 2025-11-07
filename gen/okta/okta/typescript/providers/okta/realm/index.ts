// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Okta Realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm#name Realm#name}
  */
  readonly name: string;
  /**
  * The realm type. Valid values: `PARTNER` and `DEFAULT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm#realm_type Realm#realm_type}
  */
  readonly realmType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm okta_realm}
*/
export class Realm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Realm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Realm to import
  * @param importFromId The id of the existing Realm that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Realm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/realm okta_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmConfig
  */
  public constructor(scope: Construct, id: string, config: RealmConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_realm',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._realmType = config.realmType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // realm_type - computed: false, optional: true, required: false
  private _realmType?: string; 
  public get realmType() {
    return this.getStringAttribute('realm_type');
  }
  public set realmType(value: string) {
    this._realmType = value;
  }
  public resetRealmType() {
    this._realmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmTypeInput() {
    return this._realmType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      realm_type: cdktf.stringToTerraform(this._realmType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_type: {
        value: cdktf.stringToHclTerraform(this._realmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
