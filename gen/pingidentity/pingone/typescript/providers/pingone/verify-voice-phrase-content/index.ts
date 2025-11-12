// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyVoicePhraseContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The phrase a user must speak as part of the voice enrollment or verification. The phrase must be written in the language and character set required by the language specified in the `locale` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content#content VerifyVoicePhraseContent#content}
  */
  readonly content: string;
  /**
  * PingOne environment identifier (UUID) in which the verify voice phrase exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content#environment_id VerifyVoicePhraseContent#environment_id}
  */
  readonly environmentId: string;
  /**
  * Language localization requirement for the voice phrase contents.  Options are `aa`, `ab`, `ae`, `af`, `af-ZA`, `ak`, `am`, `an`, `ar`, `ar-AE`, `ar-BH`, `ar-DZ`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`, `ar-OM`, `ar-QA`, `ar-SA`, `ar-SY`, `ar-TN`, `ar-YE`, `as`, `av`, `ay`, `az`, `az-AZ`, `ba`, `be`, `be-BY`, `bg`, `bg-BG`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `bs-BA`, `ca`, `ca-ES`, `ce`, `ch`, `cmn-CN`, `cmn-TW`, `co`, `cr`, `cs`, `cs-CZ`, `cu`, `cv`, `cy`, `cy-GB`, `da`, `da-DK`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`, `dv`, `dv-MV`, `dz`, `ee`, `el`, `el-GR`, `en`, `en-AU`, `en-BZ`, `en-CA`, `en-CB`, `en-GB`, `en-GB-WLS`, `en-IE`, `en-IN`, `en-JM`, `en-NZ`, `en-PH`, `en-TT`, `en-US`, `en-ZA`, `en-ZW`, `eo`, `es`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`, `es-ES`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PE`, `es-PR`, `es-PY`, `es-SV`, `es-US`, `es-UY`, `es-VE`, `et`, `et-EE`, `eu`, `eu-ES`, `fa`, `fa-IR`, `ff`, `fi`, `fi-FI`, `fj`, `fo`, `fo-FO`, `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`, `fr-MC`, `fy`, `ga`, `gd`, `gl`, `gl-ES`, `gn`, `gu`, `gu-IN`, `gv`, `ha`, `he`, `he-IL`, `hi`, `hi-IN`, `ho`, `hr`, `hr-BA`, `hr-HR`, `ht`, `hu`, `hu-HU`, `hy`, `hy-AM`, `hz`, `ia`, `id`, `id-ID`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `is-IS`, `it`, `it-CH`, `it-IT`, `iu`, `ja`, `ja-JP`, `jv`, `ka`, `ka-GE`, `kg`, `ki`, `kj`, `kk`, `kk-KZ`, `kl`, `km`, `kn`, `kn-IN`, `ko`, `ko-KR`, `kok`, `kok-IN`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `ky-KG`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lt-LT`, `lu`, `lv`, `lv-LV`, `mg`, `mh`, `mi`, `mi-NZ`, `mk`, `mk-MK`, `ml`, `mn`, `mn-MN`, `mr`, `mr-IN`, `ms`, `ms-BN`, `ms-MY`, `mt`, `mt-MT`, `my`, `na`, `nb`, `nb-NO`, `nd`, `ne`, `ng`, `nl`, `nl-BE`, `nl-NL`, `nn`, `nn-NO`, `no`, `nr`, `ns`, `ns-ZA`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pa-IN`, `pi`, `pl`, `pl-PL`, `ps`, `ps-AR`, `pt`, `pt-BR`, `pt-PT`, `qu`, `qu-BO`, `qu-EC`, `qu-PE`, `rm`, `rn`, `ro`, `ro-RO`, `ru`, `ru-RU`, `rw`, `sa`, `sa-IN`, `sc`, `sd`, `se`, `se-FI`, `se-NO`, `se-SE`, `sg`, `si`, `sk`, `sk-SK`, `sl`, `sl-SI`, `sm`, `sn`, `so`, `sq`, `sq-AL`, `sr`, `sr-BA`, `sr-SP`, `ss`, `st`, `su`, `sv`, `sv-FI`, `sv-SE`, `sw`, `sw-KE`, `syr`, `syr-SY`, `ta`, `ta-IN`, `te`, `te-IN`, `tg`, `th`, `th-TH`, `ti`, `tk`, `tl`, `tl-PH`, `tn`, `tn-ZA`, `to`, `tr`, `tr-TR`, `ts`, `tt`, `tt-RU`, `tw`, `ty`, `ug`, `uk`, `uk-UA`, `ur`, `ur-PK`, `uz`, `uz-UZ`, `ve`, `vi`, `vi-VN`, `vo`, `wa`, `wo`, `xh`, `xh-ZA`, `yi`, `yo`, `yue-CN`, `za`, `zh`, `zh-CN`, `zh-HK`, `zh-MO`, `zh-SG`, `zh-TW`, `zu`, `zu-ZA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content#locale VerifyVoicePhraseContent#locale}
  */
  readonly locale: string;
  /**
  * The identifier (UUID) of the `voice_phrase` associated with the `voice_phrase_content` configuration.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content#voice_phrase_id VerifyVoicePhraseContent#voice_phrase_id}
  */
  readonly voicePhraseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content pingone_verify_voice_phrase_content}
*/
export class VerifyVoicePhraseContent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_verify_voice_phrase_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyVoicePhraseContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyVoicePhraseContent to import
  * @param importFromId The id of the existing VerifyVoicePhraseContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyVoicePhraseContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_verify_voice_phrase_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_voice_phrase_content pingone_verify_voice_phrase_content} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyVoicePhraseContentConfig
  */
  public constructor(scope: Construct, id: string, config: VerifyVoicePhraseContentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_verify_voice_phrase_content',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._environmentId = config.environmentId;
    this._locale = config.locale;
    this._voicePhraseId = config.voicePhraseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // voice_phrase_id - computed: false, optional: false, required: true
  private _voicePhraseId?: string; 
  public get voicePhraseId() {
    return this.getStringAttribute('voice_phrase_id');
  }
  public set voicePhraseId(value: string) {
    this._voicePhraseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voicePhraseIdInput() {
    return this._voicePhraseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      locale: cdktf.stringToTerraform(this._locale),
      voice_phrase_id: cdktf.stringToTerraform(this._voicePhraseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      voice_phrase_id: {
        value: cdktf.stringToHclTerraform(this._voicePhraseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
