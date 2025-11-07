// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConsentDefinitionLocalizationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Consent Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations#consent_definition_name DataPingdirectoryConsentDefinitionLocalizations#consent_definition_name}
  */
  readonly consentDefinitionName: string;
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations#filter DataPingdirectoryConsentDefinitionLocalizations#filter}
  */
  readonly filter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations pingdirectory_consent_definition_localizations}
*/
export class DataPingdirectoryConsentDefinitionLocalizations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_consent_definition_localizations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConsentDefinitionLocalizations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConsentDefinitionLocalizations to import
  * @param importFromId The id of the existing DataPingdirectoryConsentDefinitionLocalizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConsentDefinitionLocalizations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_consent_definition_localizations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_definition_localizations pingdirectory_consent_definition_localizations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConsentDefinitionLocalizationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConsentDefinitionLocalizationsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_consent_definition_localizations',
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
    this._filter = config.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consent_definition_name: cdktf.stringToTerraform(this._consentDefinitionName),
      filter: cdktf.stringToTerraform(this._filter),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
