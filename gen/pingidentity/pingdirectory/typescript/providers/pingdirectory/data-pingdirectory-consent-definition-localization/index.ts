// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConsentDefinitionLocalizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Consent Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization#consent_definition_name DataPingdirectoryConsentDefinitionLocalization#consent_definition_name}
  */
  readonly consentDefinitionName: string;
  /**
  * The locale of this Consent Definition Localization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization#locale DataPingdirectoryConsentDefinitionLocalization#locale}
  */
  readonly locale: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization pingdirectory_consent_definition_localization}
*/
export class DataPingdirectoryConsentDefinitionLocalization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_consent_definition_localization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConsentDefinitionLocalization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConsentDefinitionLocalization to import
  * @param importFromId The id of the existing DataPingdirectoryConsentDefinitionLocalization that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConsentDefinitionLocalization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_consent_definition_localization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localization pingdirectory_consent_definition_localization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConsentDefinitionLocalizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConsentDefinitionLocalizationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_consent_definition_localization',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consentDefinitionName = config.consentDefinitionName;
    this._locale = config.locale;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consent_definition_name - computed: false, optional: false, required: true
  private _consentDefinitionName?: string; 
  public get consentDefinitionName() {
    return this.getStringAttribute('consent_definition_name');
  }
  public set consentDefinitionName(value: string) {
    this._consentDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentDefinitionNameInput() {
    return this._consentDefinitionName;
  }

  // data_text - computed: true, optional: false, required: false
  public get dataText() {
    return this.getStringAttribute('data_text');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // purpose_text - computed: true, optional: false, required: false
  public get purposeText() {
    return this.getStringAttribute('purpose_text');
  }

  // title_text - computed: true, optional: false, required: false
  public get titleText() {
    return this.getStringAttribute('title_text');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consent_definition_name: cdktf.stringToTerraform(this._consentDefinitionName),
      locale: cdktf.stringToTerraform(this._locale),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consent_definition_name: {
        value: cdktf.stringToHclTerraform(this._consentDefinitionName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
