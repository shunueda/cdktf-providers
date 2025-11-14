// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWafProfileConstraintExceptionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#address ObjectWafProfileConstraintExceptionA#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#adom ObjectWafProfileConstraintExceptionA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#content_length ObjectWafProfileConstraintExceptionA#content_length}
  */
  readonly contentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#fosid ObjectWafProfileConstraintExceptionA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#header_length ObjectWafProfileConstraintExceptionA#header_length}
  */
  readonly headerLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#hostname ObjectWafProfileConstraintExceptionA#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#id ObjectWafProfileConstraintExceptionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#line_length ObjectWafProfileConstraintExceptionA#line_length}
  */
  readonly lineLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#malformed ObjectWafProfileConstraintExceptionA#malformed}
  */
  readonly malformed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#max_cookie ObjectWafProfileConstraintExceptionA#max_cookie}
  */
  readonly maxCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#max_header_line ObjectWafProfileConstraintExceptionA#max_header_line}
  */
  readonly maxHeaderLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#max_range_segment ObjectWafProfileConstraintExceptionA#max_range_segment}
  */
  readonly maxRangeSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#max_url_param ObjectWafProfileConstraintExceptionA#max_url_param}
  */
  readonly maxUrlParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#method ObjectWafProfileConstraintExceptionA#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#param_length ObjectWafProfileConstraintExceptionA#param_length}
  */
  readonly paramLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#pattern ObjectWafProfileConstraintExceptionA#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#profile ObjectWafProfileConstraintExceptionA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#regex ObjectWafProfileConstraintExceptionA#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#scopetype ObjectWafProfileConstraintExceptionA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#url_param_length ObjectWafProfileConstraintExceptionA#url_param_length}
  */
  readonly urlParamLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#version ObjectWafProfileConstraintExceptionA#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception fortimanager_object_waf_profile_constraint_exception}
*/
export class ObjectWafProfileConstraintExceptionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_waf_profile_constraint_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWafProfileConstraintExceptionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWafProfileConstraintExceptionA to import
  * @param importFromId The id of the existing ObjectWafProfileConstraintExceptionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWafProfileConstraintExceptionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_waf_profile_constraint_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_waf_profile_constraint_exception fortimanager_object_waf_profile_constraint_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWafProfileConstraintExceptionAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWafProfileConstraintExceptionAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_waf_profile_constraint_exception',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._adom = config.adom;
    this._contentLength = config.contentLength;
    this._fosid = config.fosid;
    this._headerLength = config.headerLength;
    this._hostname = config.hostname;
    this._id = config.id;
    this._lineLength = config.lineLength;
    this._malformed = config.malformed;
    this._maxCookie = config.maxCookie;
    this._maxHeaderLine = config.maxHeaderLine;
    this._maxRangeSegment = config.maxRangeSegment;
    this._maxUrlParam = config.maxUrlParam;
    this._method = config.method;
    this._paramLength = config.paramLength;
    this._pattern = config.pattern;
    this._profile = config.profile;
    this._regex = config.regex;
    this._scopetype = config.scopetype;
    this._urlParamLength = config.urlParamLength;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

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

  // content_length - computed: true, optional: true, required: false
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  public resetContentLength() {
    this._contentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // header_length - computed: true, optional: true, required: false
  private _headerLength?: string; 
  public get headerLength() {
    return this.getStringAttribute('header_length');
  }
  public set headerLength(value: string) {
    this._headerLength = value;
  }
  public resetHeaderLength() {
    this._headerLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthInput() {
    return this._headerLength;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // line_length - computed: true, optional: true, required: false
  private _lineLength?: string; 
  public get lineLength() {
    return this.getStringAttribute('line_length');
  }
  public set lineLength(value: string) {
    this._lineLength = value;
  }
  public resetLineLength() {
    this._lineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength;
  }

  // malformed - computed: true, optional: true, required: false
  private _malformed?: string; 
  public get malformed() {
    return this.getStringAttribute('malformed');
  }
  public set malformed(value: string) {
    this._malformed = value;
  }
  public resetMalformed() {
    this._malformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed;
  }

  // max_cookie - computed: true, optional: true, required: false
  private _maxCookie?: string; 
  public get maxCookie() {
    return this.getStringAttribute('max_cookie');
  }
  public set maxCookie(value: string) {
    this._maxCookie = value;
  }
  public resetMaxCookie() {
    this._maxCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie;
  }

  // max_header_line - computed: true, optional: true, required: false
  private _maxHeaderLine?: string; 
  public get maxHeaderLine() {
    return this.getStringAttribute('max_header_line');
  }
  public set maxHeaderLine(value: string) {
    this._maxHeaderLine = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine;
  }

  // max_range_segment - computed: true, optional: true, required: false
  private _maxRangeSegment?: string; 
  public get maxRangeSegment() {
    return this.getStringAttribute('max_range_segment');
  }
  public set maxRangeSegment(value: string) {
    this._maxRangeSegment = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment;
  }

  // max_url_param - computed: true, optional: true, required: false
  private _maxUrlParam?: string; 
  public get maxUrlParam() {
    return this.getStringAttribute('max_url_param');
  }
  public set maxUrlParam(value: string) {
    this._maxUrlParam = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // param_length - computed: true, optional: true, required: false
  private _paramLength?: string; 
  public get paramLength() {
    return this.getStringAttribute('param_length');
  }
  public set paramLength(value: string) {
    this._paramLength = value;
  }
  public resetParamLength() {
    this._paramLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLengthInput() {
    return this._paramLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // url_param_length - computed: true, optional: true, required: false
  private _urlParamLength?: string; 
  public get urlParamLength() {
    return this.getStringAttribute('url_param_length');
  }
  public set urlParamLength(value: string) {
    this._urlParamLength = value;
  }
  public resetUrlParamLength() {
    this._urlParamLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamLengthInput() {
    return this._urlParamLength;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      adom: cdktf.stringToTerraform(this._adom),
      content_length: cdktf.stringToTerraform(this._contentLength),
      fosid: cdktf.numberToTerraform(this._fosid),
      header_length: cdktf.stringToTerraform(this._headerLength),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      line_length: cdktf.stringToTerraform(this._lineLength),
      malformed: cdktf.stringToTerraform(this._malformed),
      max_cookie: cdktf.stringToTerraform(this._maxCookie),
      max_header_line: cdktf.stringToTerraform(this._maxHeaderLine),
      max_range_segment: cdktf.stringToTerraform(this._maxRangeSegment),
      max_url_param: cdktf.stringToTerraform(this._maxUrlParam),
      method: cdktf.stringToTerraform(this._method),
      param_length: cdktf.stringToTerraform(this._paramLength),
      pattern: cdktf.stringToTerraform(this._pattern),
      profile: cdktf.stringToTerraform(this._profile),
      regex: cdktf.stringToTerraform(this._regex),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      url_param_length: cdktf.stringToTerraform(this._urlParamLength),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_length: {
        value: cdktf.stringToHclTerraform(this._contentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_length: {
        value: cdktf.stringToHclTerraform(this._headerLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      line_length: {
        value: cdktf.stringToHclTerraform(this._lineLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed: {
        value: cdktf.stringToHclTerraform(this._malformed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cookie: {
        value: cdktf.stringToHclTerraform(this._maxCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_header_line: {
        value: cdktf.stringToHclTerraform(this._maxHeaderLine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_range_segment: {
        value: cdktf.stringToHclTerraform(this._maxRangeSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_url_param: {
        value: cdktf.stringToHclTerraform(this._maxUrlParam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param_length: {
        value: cdktf.stringToHclTerraform(this._paramLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
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
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_param_length: {
        value: cdktf.stringToHclTerraform(this._urlParamLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
