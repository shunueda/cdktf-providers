// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneAgreementLocalizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID that identifies the agreement ID that the localization is applied to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#agreement_id DataPingoneAgreementLocalization#agreement_id}
  */
  readonly agreementId: string;
  /**
  * The ID of the agreement localization language to retrieve.  Exactly one of the following must be defined: `agreement_localization_id`, `display_name`, `locale`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#agreement_localization_id DataPingoneAgreementLocalization#agreement_localization_id}
  */
  readonly agreementLocalizationId?: string;
  /**
  * A string used as the title of the agreement localization to retrieve.  Exactly one of the following must be defined: `agreement_localization_id`, `display_name`, `locale`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#display_name DataPingoneAgreementLocalization#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the environment that is configured with the agreement localization.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#environment_id DataPingoneAgreementLocalization#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string used as the locale code of the agreement localization to retrieve.  Options are `aa`, `ab`, `ae`, `af`, `af-ZA`, `ak`, `am`, `an`, `ar`, `ar-AE`, `ar-BH`, `ar-DZ`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`, `ar-OM`, `ar-QA`, `ar-SA`, `ar-SY`, `ar-TN`, `ar-YE`, `as`, `av`, `ay`, `az`, `az-AZ`, `ba`, `be`, `be-BY`, `bg`, `bg-BG`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `bs-BA`, `ca`, `ca-ES`, `ce`, `ch`, `cmn-CN`, `cmn-TW`, `co`, `cr`, `cs`, `cs-CZ`, `cu`, `cv`, `cy`, `cy-GB`, `da`, `da-DK`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`, `dv`, `dv-MV`, `dz`, `ee`, `el`, `el-GR`, `en`, `en-AU`, `en-BZ`, `en-CA`, `en-CB`, `en-GB`, `en-GB-WLS`, `en-IE`, `en-IN`, `en-JM`, `en-NZ`, `en-PH`, `en-TT`, `en-US`, `en-ZA`, `en-ZW`, `eo`, `es`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`, `es-ES`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PE`, `es-PR`, `es-PY`, `es-SV`, `es-US`, `es-UY`, `es-VE`, `et`, `et-EE`, `eu`, `eu-ES`, `fa`, `fa-IR`, `ff`, `fi`, `fi-FI`, `fj`, `fo`, `fo-FO`, `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`, `fr-MC`, `fy`, `ga`, `gd`, `gl`, `gl-ES`, `gn`, `gu`, `gu-IN`, `gv`, `ha`, `he`, `he-IL`, `hi`, `hi-IN`, `ho`, `hr`, `hr-BA`, `hr-HR`, `ht`, `hu`, `hu-HU`, `hy`, `hy-AM`, `hz`, `ia`, `id`, `id-ID`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `is-IS`, `it`, `it-CH`, `it-IT`, `iu`, `ja`, `ja-JP`, `jv`, `ka`, `ka-GE`, `kg`, `ki`, `kj`, `kk`, `kk-KZ`, `kl`, `km`, `kn`, `kn-IN`, `ko`, `ko-KR`, `kok`, `kok-IN`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `ky-KG`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lt-LT`, `lu`, `lv`, `lv-LV`, `mg`, `mh`, `mi`, `mi-NZ`, `mk`, `mk-MK`, `ml`, `mn`, `mn-MN`, `mr`, `mr-IN`, `ms`, `ms-BN`, `ms-MY`, `mt`, `mt-MT`, `my`, `na`, `nb`, `nb-NO`, `nd`, `ne`, `ng`, `nl`, `nl-BE`, `nl-NL`, `nn`, `nn-NO`, `no`, `nr`, `ns`, `ns-ZA`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pa-IN`, `pi`, `pl`, `pl-PL`, `ps`, `ps-AR`, `pt`, `pt-BR`, `pt-PT`, `qu`, `qu-BO`, `qu-EC`, `qu-PE`, `rm`, `rn`, `ro`, `ro-RO`, `ru`, `ru-RU`, `rw`, `sa`, `sa-IN`, `sc`, `sd`, `se`, `se-FI`, `se-NO`, `se-SE`, `sg`, `si`, `sk`, `sk-SK`, `sl`, `sl-SI`, `sm`, `sn`, `so`, `sq`, `sq-AL`, `sr`, `sr-BA`, `sr-SP`, `ss`, `st`, `su`, `sv`, `sv-FI`, `sv-SE`, `sw`, `sw-KE`, `syr`, `syr-SY`, `ta`, `ta-IN`, `te`, `te-IN`, `tg`, `th`, `th-TH`, `ti`, `tk`, `tl`, `tl-PH`, `tn`, `tn-ZA`, `to`, `tr`, `tr-TR`, `ts`, `tt`, `tt-RU`, `tw`, `ty`, `ug`, `uk`, `uk-UA`, `ur`, `ur-PK`, `uz`, `uz-UZ`, `ve`, `vi`, `vi-VN`, `vo`, `wa`, `wo`, `xh`, `xh-ZA`, `yi`, `yo`, `yue-CN`, `za`, `zh`, `zh-CN`, `zh-HK`, `zh-MO`, `zh-SG`, `zh-TW`, `zu`, `zu-ZA`.  Exactly one of the following must be defined: `agreement_localization_id`, `display_name`, `locale`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#locale DataPingoneAgreementLocalization#locale}
  */
  readonly locale?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization pingone_agreement_localization}
*/
export class DataPingoneAgreementLocalization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement_localization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneAgreementLocalization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneAgreementLocalization to import
  * @param importFromId The id of the existing DataPingoneAgreementLocalization that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneAgreementLocalization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement_localization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement_localization pingone_agreement_localization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneAgreementLocalizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneAgreementLocalizationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement_localization',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agreementId = config.agreementId;
    this._agreementLocalizationId = config.agreementLocalizationId;
    this._displayName = config.displayName;
    this._environmentId = config.environmentId;
    this._locale = config.locale;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId?: string; 
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementIdInput() {
    return this._agreementId;
  }

  // agreement_localization_id - computed: false, optional: true, required: false
  private _agreementLocalizationId?: string; 
  public get agreementLocalizationId() {
    return this.getStringAttribute('agreement_localization_id');
  }
  public set agreementLocalizationId(value: string) {
    this._agreementLocalizationId = value;
  }
  public resetAgreementLocalizationId() {
    this._agreementLocalizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementLocalizationIdInput() {
    return this._agreementLocalizationId;
  }

  // current_revision_id - computed: true, optional: false, required: false
  public get currentRevisionId() {
    return this.getStringAttribute('current_revision_id');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_id - computed: true, optional: false, required: false
  public get languageId() {
    return this.getStringAttribute('language_id');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // text_button_continue - computed: true, optional: false, required: false
  public get textButtonContinue() {
    return this.getStringAttribute('text_button_continue');
  }

  // text_button_decline - computed: true, optional: false, required: false
  public get textButtonDecline() {
    return this.getStringAttribute('text_button_decline');
  }

  // text_checkbox_accept - computed: true, optional: false, required: false
  public get textCheckboxAccept() {
    return this.getStringAttribute('text_checkbox_accept');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: cdktf.stringToTerraform(this._agreementId),
      agreement_localization_id: cdktf.stringToTerraform(this._agreementLocalizationId),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      locale: cdktf.stringToTerraform(this._locale),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agreement_id: {
        value: cdktf.stringToHclTerraform(this._agreementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agreement_localization_id: {
        value: cdktf.stringToHclTerraform(this._agreementLocalizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
