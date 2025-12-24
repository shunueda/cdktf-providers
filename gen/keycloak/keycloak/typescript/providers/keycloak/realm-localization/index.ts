// https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmLocalizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization#id RealmLocalization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The locale for the localization texts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization#locale RealmLocalization#locale}
  */
  readonly locale: string;
  /**
  * The realm in which the texts exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization#realm_id RealmLocalization#realm_id}
  */
  readonly realmId: string;
  /**
  * The mapping of localization texts keys to values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization#texts RealmLocalization#texts}
  */
  readonly texts?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization keycloak_realm_localization}
*/
export class RealmLocalization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_localization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmLocalization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmLocalization to import
  * @param importFromId The id of the existing RealmLocalization that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmLocalization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_localization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/realm_localization keycloak_realm_localization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmLocalizationConfig
  */
  public constructor(scope: Construct, id: string, config: RealmLocalizationConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_localization',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.6.0',
        providerVersionConstraint: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._locale = config.locale;
    this._realmId = config.realmId;
    this._texts = config.texts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

  // texts - computed: false, optional: true, required: false
  private _texts?: { [key: string]: string }; 
  public get texts() {
    return this.getStringMapAttribute('texts');
  }
  public set texts(value: { [key: string]: string }) {
    this._texts = value;
  }
  public resetTexts() {
    this._texts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textsInput() {
    return this._texts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      locale: cdktf.stringToTerraform(this._locale),
      realm_id: cdktf.stringToTerraform(this._realmId),
      texts: cdktf.hashMapper(cdktf.stringToTerraform)(this._texts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
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
      texts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._texts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
