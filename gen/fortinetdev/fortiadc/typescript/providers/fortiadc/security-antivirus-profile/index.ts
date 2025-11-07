// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAntivirusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#analytics_db SecurityAntivirusProfile#analytics_db}
  */
  readonly analyticsDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#analytics_max_upload SecurityAntivirusProfile#analytics_max_upload}
  */
  readonly analyticsMaxUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#av_block_log SecurityAntivirusProfile#av_block_log}
  */
  readonly avBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#av_virus_log SecurityAntivirusProfile#av_virus_log}
  */
  readonly avVirusLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#comments SecurityAntivirusProfile#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#emulator SecurityAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#ftgd_analytics SecurityAntivirusProfile#ftgd_analytics}
  */
  readonly ftgdAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#id SecurityAntivirusProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#mkey SecurityAntivirusProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#options SecurityAntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#oversize SecurityAntivirusProfile#oversize}
  */
  readonly oversize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#oversize_limit SecurityAntivirusProfile#oversize_limit}
  */
  readonly oversizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#scan_bzip2 SecurityAntivirusProfile#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#streaming_content_bypass SecurityAntivirusProfile#streaming_content_bypass}
  */
  readonly streamingContentBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#uncomp_nest_limit SecurityAntivirusProfile#uncomp_nest_limit}
  */
  readonly uncompNestLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#uncomp_size_limit SecurityAntivirusProfile#uncomp_size_limit}
  */
  readonly uncompSizeLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#vdom SecurityAntivirusProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile fortiadc_security_antivirus_profile}
*/
export class SecurityAntivirusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_antivirus_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAntivirusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAntivirusProfile to import
  * @param importFromId The id of the existing SecurityAntivirusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAntivirusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_antivirus_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_antivirus_profile fortiadc_security_antivirus_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAntivirusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAntivirusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_antivirus_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsDb = config.analyticsDb;
    this._analyticsMaxUpload = config.analyticsMaxUpload;
    this._avBlockLog = config.avBlockLog;
    this._avVirusLog = config.avVirusLog;
    this._comments = config.comments;
    this._emulator = config.emulator;
    this._ftgdAnalytics = config.ftgdAnalytics;
    this._id = config.id;
    this._mkey = config.mkey;
    this._options = config.options;
    this._oversize = config.oversize;
    this._oversizeLimit = config.oversizeLimit;
    this._scanBzip2 = config.scanBzip2;
    this._streamingContentBypass = config.streamingContentBypass;
    this._uncompNestLimit = config.uncompNestLimit;
    this._uncompSizeLimit = config.uncompSizeLimit;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_db - computed: true, optional: true, required: false
  private _analyticsDb?: string; 
  public get analyticsDb() {
    return this.getStringAttribute('analytics_db');
  }
  public set analyticsDb(value: string) {
    this._analyticsDb = value;
  }
  public resetAnalyticsDb() {
    this._analyticsDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsDbInput() {
    return this._analyticsDb;
  }

  // analytics_max_upload - computed: true, optional: true, required: false
  private _analyticsMaxUpload?: string; 
  public get analyticsMaxUpload() {
    return this.getStringAttribute('analytics_max_upload');
  }
  public set analyticsMaxUpload(value: string) {
    this._analyticsMaxUpload = value;
  }
  public resetAnalyticsMaxUpload() {
    this._analyticsMaxUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsMaxUploadInput() {
    return this._analyticsMaxUpload;
  }

  // av_block_log - computed: true, optional: true, required: false
  private _avBlockLog?: string; 
  public get avBlockLog() {
    return this.getStringAttribute('av_block_log');
  }
  public set avBlockLog(value: string) {
    this._avBlockLog = value;
  }
  public resetAvBlockLog() {
    this._avBlockLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avBlockLogInput() {
    return this._avBlockLog;
  }

  // av_virus_log - computed: true, optional: true, required: false
  private _avVirusLog?: string; 
  public get avVirusLog() {
    return this.getStringAttribute('av_virus_log');
  }
  public set avVirusLog(value: string) {
    this._avVirusLog = value;
  }
  public resetAvVirusLog() {
    this._avVirusLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avVirusLogInput() {
    return this._avVirusLog;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // ftgd_analytics - computed: true, optional: true, required: false
  private _ftgdAnalytics?: string; 
  public get ftgdAnalytics() {
    return this.getStringAttribute('ftgd_analytics');
  }
  public set ftgdAnalytics(value: string) {
    this._ftgdAnalytics = value;
  }
  public resetFtgdAnalytics() {
    this._ftgdAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdAnalyticsInput() {
    return this._ftgdAnalytics;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize - computed: true, optional: true, required: false
  private _oversize?: string; 
  public get oversize() {
    return this.getStringAttribute('oversize');
  }
  public set oversize(value: string) {
    this._oversize = value;
  }
  public resetOversize() {
    this._oversize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeInput() {
    return this._oversize;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: string; 
  public get oversizeLimit() {
    return this.getStringAttribute('oversize_limit');
  }
  public set oversizeLimit(value: string) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // streaming_content_bypass - computed: true, optional: true, required: false
  private _streamingContentBypass?: string; 
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }
  public set streamingContentBypass(value: string) {
    this._streamingContentBypass = value;
  }
  public resetStreamingContentBypass() {
    this._streamingContentBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingContentBypassInput() {
    return this._streamingContentBypass;
  }

  // uncomp_nest_limit - computed: true, optional: true, required: false
  private _uncompNestLimit?: string; 
  public get uncompNestLimit() {
    return this.getStringAttribute('uncomp_nest_limit');
  }
  public set uncompNestLimit(value: string) {
    this._uncompNestLimit = value;
  }
  public resetUncompNestLimit() {
    this._uncompNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompNestLimitInput() {
    return this._uncompNestLimit;
  }

  // uncomp_size_limit - computed: true, optional: true, required: false
  private _uncompSizeLimit?: string; 
  public get uncompSizeLimit() {
    return this.getStringAttribute('uncomp_size_limit');
  }
  public set uncompSizeLimit(value: string) {
    this._uncompSizeLimit = value;
  }
  public resetUncompSizeLimit() {
    this._uncompSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompSizeLimitInput() {
    return this._uncompSizeLimit;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_db: cdktf.stringToTerraform(this._analyticsDb),
      analytics_max_upload: cdktf.stringToTerraform(this._analyticsMaxUpload),
      av_block_log: cdktf.stringToTerraform(this._avBlockLog),
      av_virus_log: cdktf.stringToTerraform(this._avVirusLog),
      comments: cdktf.stringToTerraform(this._comments),
      emulator: cdktf.stringToTerraform(this._emulator),
      ftgd_analytics: cdktf.stringToTerraform(this._ftgdAnalytics),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      options: cdktf.stringToTerraform(this._options),
      oversize: cdktf.stringToTerraform(this._oversize),
      oversize_limit: cdktf.stringToTerraform(this._oversizeLimit),
      scan_bzip2: cdktf.stringToTerraform(this._scanBzip2),
      streaming_content_bypass: cdktf.stringToTerraform(this._streamingContentBypass),
      uncomp_nest_limit: cdktf.stringToTerraform(this._uncompNestLimit),
      uncomp_size_limit: cdktf.stringToTerraform(this._uncompSizeLimit),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_db: {
        value: cdktf.stringToHclTerraform(this._analyticsDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_max_upload: {
        value: cdktf.stringToHclTerraform(this._analyticsMaxUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_block_log: {
        value: cdktf.stringToHclTerraform(this._avBlockLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_virus_log: {
        value: cdktf.stringToHclTerraform(this._avVirusLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emulator: {
        value: cdktf.stringToHclTerraform(this._emulator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftgd_analytics: {
        value: cdktf.stringToHclTerraform(this._ftgdAnalytics),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oversize: {
        value: cdktf.stringToHclTerraform(this._oversize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oversize_limit: {
        value: cdktf.stringToHclTerraform(this._oversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_bzip2: {
        value: cdktf.stringToHclTerraform(this._scanBzip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming_content_bypass: {
        value: cdktf.stringToHclTerraform(this._streamingContentBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncomp_nest_limit: {
        value: cdktf.stringToHclTerraform(this._uncompNestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncomp_size_limit: {
        value: cdktf.stringToHclTerraform(this._uncompSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
