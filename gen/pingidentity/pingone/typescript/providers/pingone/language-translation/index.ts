// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LanguageTranslationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to create and manage the language_translation in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#environment_id LanguageTranslation#environment_id}
  */
  readonly environmentId: string;
  /**
  * An ISO standard language code. For more information about standard language codes, see [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm).  The following language codes are supported: `aa`, `ab`, `ae`, `af`, `af-ZA`, `ak`, `am`, `an`, `ar`, `ar-AE`, `ar-BH`, `ar-DZ`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`, `ar-OM`, `ar-QA`, `ar-SA`, `ar-SY`, `ar-TN`, `ar-YE`, `as`, `av`, `ay`, `az`, `az-AZ`, `ba`, `be`, `be-BY`, `bg`, `bg-BG`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `bs-BA`, `ca`, `ca-ES`, `ce`, `ch`, `cmn-CN`, `cmn-TW`, `co`, `cr`, `cs`, `cs-CZ`, `cu`, `cv`, `cy`, `cy-GB`, `da`, `da-DK`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`, `dv`, `dv-MV`, `dz`, `ee`, `el`, `el-GR`, `en`, `en-AU`, `en-BZ`, `en-CA`, `en-CB`, `en-GB`, `en-GB-WLS`, `en-IE`, `en-IN`, `en-JM`, `en-NZ`, `en-PH`, `en-TT`, `en-US`, `en-ZA`, `en-ZW`, `eo`, `es`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`, `es-ES`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PE`, `es-PR`, `es-PY`, `es-SV`, `es-US`, `es-UY`, `es-VE`, `et`, `et-EE`, `eu`, `eu-ES`, `fa`, `fa-IR`, `ff`, `fi`, `fi-FI`, `fj`, `fo`, `fo-FO`, `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`, `fr-MC`, `fy`, `ga`, `gd`, `gl`, `gl-ES`, `gn`, `gu`, `gu-IN`, `gv`, `ha`, `he`, `he-IL`, `hi`, `hi-IN`, `ho`, `hr`, `hr-BA`, `hr-HR`, `ht`, `hu`, `hu-HU`, `hy`, `hy-AM`, `hz`, `ia`, `id`, `id-ID`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `is-IS`, `it`, `it-CH`, `it-IT`, `iu`, `ja`, `ja-JP`, `jv`, `ka`, `ka-GE`, `kg`, `ki`, `kj`, `kk`, `kk-KZ`, `kl`, `km`, `kn`, `kn-IN`, `ko`, `ko-KR`, `kok`, `kok-IN`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `ky-KG`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lt-LT`, `lu`, `lv`, `lv-LV`, `mg`, `mh`, `mi`, `mi-NZ`, `mk`, `mk-MK`, `ml`, `mn`, `mn-MN`, `mr`, `mr-IN`, `ms`, `ms-BN`, `ms-MY`, `mt`, `mt-MT`, `my`, `na`, `nb`, `nb-NO`, `nd`, `ne`, `ng`, `nl`, `nl-BE`, `nl-NL`, `nn`, `nn-NO`, `no`, `nr`, `ns`, `ns-ZA`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pa-IN`, `pi`, `pl`, `pl-PL`, `ps`, `ps-AR`, `pt`, `pt-BR`, `pt-PT`, `qu`, `qu-BO`, `qu-EC`, `qu-PE`, `rm`, `rn`, `ro`, `ro-RO`, `ru`, `ru-RU`, `rw`, `sa`, `sa-IN`, `sc`, `sd`, `se`, `se-FI`, `se-NO`, `se-SE`, `sg`, `si`, `sk`, `sk-SK`, `sl`, `sl-SI`, `sm`, `sn`, `so`, `sq`, `sq-AL`, `sr`, `sr-BA`, `sr-SP`, `ss`, `st`, `su`, `sv`, `sv-FI`, `sv-SE`, `sw`, `sw-KE`, `syr`, `syr-SY`, `ta`, `ta-IN`, `te`, `te-IN`, `tg`, `th`, `th-TH`, `ti`, `tk`, `tl`, `tl-PH`, `tn`, `tn-ZA`, `to`, `tr`, `tr-TR`, `ts`, `tt`, `tt-RU`, `tw`, `ty`, `ug`, `uk`, `uk-UA`, `ur`, `ur-PK`, `uz`, `uz-UZ`, `ve`, `vi`, `vi-VN`, `vo`, `wa`, `wo`, `xh`, `xh-ZA`, `yi`, `yo`, `yue-CN`, `za`, `zh`, `zh-CN`, `zh-HK`, `zh-MO`, `zh-SG`, `zh-TW`, `zu`, `zu-ZA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#locale LanguageTranslation#locale}
  */
  readonly locale: string;
  /**
  * A list of translations for the specified locale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#translations LanguageTranslation#translations}
  */
  readonly translations: LanguageTranslationTranslations[] | cdktf.IResolvable;
}
export interface LanguageTranslationTranslations {
  /**
  * The page and name of the interface element to be localized (for example, `flow-ui.button.cancel`). Keys for a locale can be found using the [PingOne Platform API](https://apidocs.pingidentity.com/pingone/platform/v1/api/#get-read-translation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#key LanguageTranslation#key}
  */
  readonly key: string;
  /**
  * The translated string text associated with the UI element. Excluding this attribute will reset the translation to its original configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#translated_text LanguageTranslation#translated_text}
  */
  readonly translatedText?: string;
}

export function languageTranslationTranslationsToTerraform(struct?: LanguageTranslationTranslations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    translated_text: cdktf.stringToTerraform(struct!.translatedText),
  }
}


export function languageTranslationTranslationsToHclTerraform(struct?: LanguageTranslationTranslations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_text: {
      value: cdktf.stringToHclTerraform(struct!.translatedText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanguageTranslationTranslationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LanguageTranslationTranslations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._translatedText !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedText = this._translatedText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanguageTranslationTranslations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._translatedText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._translatedText = value.translatedText;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // reference_text - computed: true, optional: false, required: false
  public get referenceText() {
    return this.getStringAttribute('reference_text');
  }

  // short_key - computed: true, optional: false, required: false
  public get shortKey() {
    return this.getStringAttribute('short_key');
  }

  // translated_text - computed: true, optional: true, required: false
  private _translatedText?: string; 
  public get translatedText() {
    return this.getStringAttribute('translated_text');
  }
  public set translatedText(value: string) {
    this._translatedText = value;
  }
  public resetTranslatedText() {
    this._translatedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedTextInput() {
    return this._translatedText;
  }
}

export class LanguageTranslationTranslationsList extends cdktf.ComplexList {
  public internalValue? : LanguageTranslationTranslations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LanguageTranslationTranslationsOutputReference {
    return new LanguageTranslationTranslationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation pingone_language_translation}
*/
export class LanguageTranslation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_language_translation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LanguageTranslation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LanguageTranslation to import
  * @param importFromId The id of the existing LanguageTranslation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LanguageTranslation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_language_translation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/language_translation pingone_language_translation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LanguageTranslationConfig
  */
  public constructor(scope: Construct, id: string, config: LanguageTranslationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_language_translation',
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
    this._environmentId = config.environmentId;
    this._locale = config.locale;
    this._translations.internalValue = config.translations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // translations - computed: false, optional: false, required: true
  private _translations = new LanguageTranslationTranslationsList(this, "translations", true);
  public get translations() {
    return this._translations;
  }
  public putTranslations(value: LanguageTranslationTranslations[] | cdktf.IResolvable) {
    this._translations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get translationsInput() {
    return this._translations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      locale: cdktf.stringToTerraform(this._locale),
      translations: cdktf.listMapper(languageTranslationTranslationsToTerraform, false)(this._translations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      translations: {
        value: cdktf.listMapperHcl(languageTranslationTranslationsToHclTerraform, false)(this._translations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LanguageTranslationTranslationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
