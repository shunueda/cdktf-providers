// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafCcSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Session match pattern, Optional patterns are match, location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#category WafCcSession#category}
  */
  readonly category: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#domain WafCcSession#domain}
  */
  readonly domain: string;
  /**
  * Waf edition. clb-waf means clb-waf, sparta-waf means saas-waf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#edition WafCcSession#edition}
  */
  readonly edition: string;
  /**
  * Session end identifier, when Category is match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#end_mat WafCcSession#end_mat}
  */
  readonly endMat: string;
  /**
  * End offset position, when Category is location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#end_offset WafCcSession#end_offset}
  */
  readonly endOffset: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#id WafCcSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#key_or_start_mat WafCcSession#key_or_start_mat}
  */
  readonly keyOrStartMat: string;
  /**
  * Session Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#session_name WafCcSession#session_name}
  */
  readonly sessionName: string;
  /**
  * Session matching position, Optional locations are get, post, header, cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#source WafCcSession#source}
  */
  readonly source: string;
  /**
  * Starting offset position, when Category is location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#start_offset WafCcSession#start_offset}
  */
  readonly startOffset: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session tencentcloud_waf_cc_session}
*/
export class WafCcSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_cc_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafCcSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafCcSession to import
  * @param importFromId The id of the existing WafCcSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafCcSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_cc_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_cc_session tencentcloud_waf_cc_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafCcSessionConfig
  */
  public constructor(scope: Construct, id: string, config: WafCcSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_cc_session',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._domain = config.domain;
    this._edition = config.edition;
    this._endMat = config.endMat;
    this._endOffset = config.endOffset;
    this._id = config.id;
    this._keyOrStartMat = config.keyOrStartMat;
    this._sessionName = config.sessionName;
    this._source = config.source;
    this._startOffset = config.startOffset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // end_mat - computed: false, optional: false, required: true
  private _endMat?: string; 
  public get endMat() {
    return this.getStringAttribute('end_mat');
  }
  public set endMat(value: string) {
    this._endMat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMatInput() {
    return this._endMat;
  }

  // end_offset - computed: false, optional: false, required: true
  private _endOffset?: string; 
  public get endOffset() {
    return this.getStringAttribute('end_offset');
  }
  public set endOffset(value: string) {
    this._endOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetInput() {
    return this._endOffset;
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

  // key_or_start_mat - computed: false, optional: false, required: true
  private _keyOrStartMat?: string; 
  public get keyOrStartMat() {
    return this.getStringAttribute('key_or_start_mat');
  }
  public set keyOrStartMat(value: string) {
    this._keyOrStartMat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOrStartMatInput() {
    return this._keyOrStartMat;
  }

  // session_id - computed: true, optional: false, required: false
  public get sessionId() {
    return this.getNumberAttribute('session_id');
  }

  // session_name - computed: false, optional: false, required: true
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // start_offset - computed: false, optional: false, required: true
  private _startOffset?: string; 
  public get startOffset() {
    return this.getStringAttribute('start_offset');
  }
  public set startOffset(value: string) {
    this._startOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      domain: cdktf.stringToTerraform(this._domain),
      edition: cdktf.stringToTerraform(this._edition),
      end_mat: cdktf.stringToTerraform(this._endMat),
      end_offset: cdktf.stringToTerraform(this._endOffset),
      id: cdktf.stringToTerraform(this._id),
      key_or_start_mat: cdktf.stringToTerraform(this._keyOrStartMat),
      session_name: cdktf.stringToTerraform(this._sessionName),
      source: cdktf.stringToTerraform(this._source),
      start_offset: cdktf.stringToTerraform(this._startOffset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_mat: {
        value: cdktf.stringToHclTerraform(this._endMat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_offset: {
        value: cdktf.stringToHclTerraform(this._endOffset),
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
      key_or_start_mat: {
        value: cdktf.stringToHclTerraform(this._keyOrStartMat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_name: {
        value: cdktf.stringToHclTerraform(this._sessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_offset: {
        value: cdktf.stringToHclTerraform(this._startOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
