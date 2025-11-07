// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileWebAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#adom ObjectWebfilterProfileWebA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#allowlist ObjectWebfilterProfileWebA#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#blacklist ObjectWebfilterProfileWebA#blacklist}
  */
  readonly blacklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#blocklist ObjectWebfilterProfileWebA#blocklist}
  */
  readonly blocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#bword_table ObjectWebfilterProfileWebA#bword_table}
  */
  readonly bwordTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#bword_threshold ObjectWebfilterProfileWebA#bword_threshold}
  */
  readonly bwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#content_header_list ObjectWebfilterProfileWebA#content_header_list}
  */
  readonly contentHeaderList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#id ObjectWebfilterProfileWebA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#keyword_match ObjectWebfilterProfileWebA#keyword_match}
  */
  readonly keywordMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#log_search ObjectWebfilterProfileWebA#log_search}
  */
  readonly logSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#profile ObjectWebfilterProfileWebA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#safe_search ObjectWebfilterProfileWebA#safe_search}
  */
  readonly safeSearch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#scopetype ObjectWebfilterProfileWebA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#urlfilter_table ObjectWebfilterProfileWebA#urlfilter_table}
  */
  readonly urlfilterTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#vimeo_restrict ObjectWebfilterProfileWebA#vimeo_restrict}
  */
  readonly vimeoRestrict?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#whitelist ObjectWebfilterProfileWebA#whitelist}
  */
  readonly whitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#youtube_restrict ObjectWebfilterProfileWebA#youtube_restrict}
  */
  readonly youtubeRestrict?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web fortimanager_object_webfilter_profile_web}
*/
export class ObjectWebfilterProfileWebA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_web";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileWebA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileWebA to import
  * @param importFromId The id of the existing ObjectWebfilterProfileWebA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileWebA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_web", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_profile_web fortimanager_object_webfilter_profile_web} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileWebAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileWebAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_web',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
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
    this._adom = config.adom;
    this._allowlist = config.allowlist;
    this._blacklist = config.blacklist;
    this._blocklist = config.blocklist;
    this._bwordTable = config.bwordTable;
    this._bwordThreshold = config.bwordThreshold;
    this._contentHeaderList = config.contentHeaderList;
    this._id = config.id;
    this._keywordMatch = config.keywordMatch;
    this._logSearch = config.logSearch;
    this._profile = config.profile;
    this._safeSearch = config.safeSearch;
    this._scopetype = config.scopetype;
    this._urlfilterTable = config.urlfilterTable;
    this._vimeoRestrict = config.vimeoRestrict;
    this._whitelist = config.whitelist;
    this._youtubeRestrict = config.youtubeRestrict;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // allowlist - computed: true, optional: true, required: false
  private _allowlist?: string[]; 
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }
  public set allowlist(value: string[]) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // blacklist - computed: true, optional: true, required: false
  private _blacklist?: string; 
  public get blacklist() {
    return this.getStringAttribute('blacklist');
  }
  public set blacklist(value: string) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // blocklist - computed: true, optional: true, required: false
  private _blocklist?: string; 
  public get blocklist() {
    return this.getStringAttribute('blocklist');
  }
  public set blocklist(value: string) {
    this._blocklist = value;
  }
  public resetBlocklist() {
    this._blocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistInput() {
    return this._blocklist;
  }

  // bword_table - computed: false, optional: true, required: false
  private _bwordTable?: string; 
  public get bwordTable() {
    return this.getStringAttribute('bword_table');
  }
  public set bwordTable(value: string) {
    this._bwordTable = value;
  }
  public resetBwordTable() {
    this._bwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordTableInput() {
    return this._bwordTable;
  }

  // bword_threshold - computed: true, optional: true, required: false
  private _bwordThreshold?: number; 
  public get bwordThreshold() {
    return this.getNumberAttribute('bword_threshold');
  }
  public set bwordThreshold(value: number) {
    this._bwordThreshold = value;
  }
  public resetBwordThreshold() {
    this._bwordThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordThresholdInput() {
    return this._bwordThreshold;
  }

  // content_header_list - computed: false, optional: true, required: false
  private _contentHeaderList?: string; 
  public get contentHeaderList() {
    return this.getStringAttribute('content_header_list');
  }
  public set contentHeaderList(value: string) {
    this._contentHeaderList = value;
  }
  public resetContentHeaderList() {
    this._contentHeaderList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHeaderListInput() {
    return this._contentHeaderList;
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

  // keyword_match - computed: true, optional: true, required: false
  private _keywordMatch?: string[]; 
  public get keywordMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('keyword_match'));
  }
  public set keywordMatch(value: string[]) {
    this._keywordMatch = value;
  }
  public resetKeywordMatch() {
    this._keywordMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMatchInput() {
    return this._keywordMatch;
  }

  // log_search - computed: true, optional: true, required: false
  private _logSearch?: string; 
  public get logSearch() {
    return this.getStringAttribute('log_search');
  }
  public set logSearch(value: string) {
    this._logSearch = value;
  }
  public resetLogSearch() {
    this._logSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchInput() {
    return this._logSearch;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // safe_search - computed: true, optional: true, required: false
  private _safeSearch?: string[]; 
  public get safeSearch() {
    return cdktf.Fn.tolist(this.getListAttribute('safe_search'));
  }
  public set safeSearch(value: string[]) {
    this._safeSearch = value;
  }
  public resetSafeSearch() {
    this._safeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchInput() {
    return this._safeSearch;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // urlfilter_table - computed: false, optional: true, required: false
  private _urlfilterTable?: string; 
  public get urlfilterTable() {
    return this.getStringAttribute('urlfilter_table');
  }
  public set urlfilterTable(value: string) {
    this._urlfilterTable = value;
  }
  public resetUrlfilterTable() {
    this._urlfilterTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlfilterTableInput() {
    return this._urlfilterTable;
  }

  // vimeo_restrict - computed: false, optional: true, required: false
  private _vimeoRestrict?: string; 
  public get vimeoRestrict() {
    return this.getStringAttribute('vimeo_restrict');
  }
  public set vimeoRestrict(value: string) {
    this._vimeoRestrict = value;
  }
  public resetVimeoRestrict() {
    this._vimeoRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vimeoRestrictInput() {
    return this._vimeoRestrict;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // youtube_restrict - computed: true, optional: true, required: false
  private _youtubeRestrict?: string; 
  public get youtubeRestrict() {
    return this.getStringAttribute('youtube_restrict');
  }
  public set youtubeRestrict(value: string) {
    this._youtubeRestrict = value;
  }
  public resetYoutubeRestrict() {
    this._youtubeRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get youtubeRestrictInput() {
    return this._youtubeRestrict;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowlist),
      blacklist: cdktf.stringToTerraform(this._blacklist),
      blocklist: cdktf.stringToTerraform(this._blocklist),
      bword_table: cdktf.stringToTerraform(this._bwordTable),
      bword_threshold: cdktf.numberToTerraform(this._bwordThreshold),
      content_header_list: cdktf.stringToTerraform(this._contentHeaderList),
      id: cdktf.stringToTerraform(this._id),
      keyword_match: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keywordMatch),
      log_search: cdktf.stringToTerraform(this._logSearch),
      profile: cdktf.stringToTerraform(this._profile),
      safe_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._safeSearch),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      urlfilter_table: cdktf.stringToTerraform(this._urlfilterTable),
      vimeo_restrict: cdktf.stringToTerraform(this._vimeoRestrict),
      whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelist),
      youtube_restrict: cdktf.stringToTerraform(this._youtubeRestrict),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowlist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blacklist: {
        value: cdktf.stringToHclTerraform(this._blacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocklist: {
        value: cdktf.stringToHclTerraform(this._blocklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bword_table: {
        value: cdktf.stringToHclTerraform(this._bwordTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bword_threshold: {
        value: cdktf.numberToHclTerraform(this._bwordThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_header_list: {
        value: cdktf.stringToHclTerraform(this._contentHeaderList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_match: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keywordMatch),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_search: {
        value: cdktf.stringToHclTerraform(this._logSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._safeSearch),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlfilter_table: {
        value: cdktf.stringToHclTerraform(this._urlfilterTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vimeo_restrict: {
        value: cdktf.stringToHclTerraform(this._vimeoRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      youtube_restrict: {
        value: cdktf.stringToHclTerraform(this._youtubeRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
