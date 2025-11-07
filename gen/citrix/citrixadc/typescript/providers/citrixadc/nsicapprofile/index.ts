// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsicapprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#allow204 Nsicapprofile#allow204}
  */
  readonly allow204?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#connectionkeepalive Nsicapprofile#connectionkeepalive}
  */
  readonly connectionkeepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#hostheader Nsicapprofile#hostheader}
  */
  readonly hostheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#id Nsicapprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#inserthttprequest Nsicapprofile#inserthttprequest}
  */
  readonly inserthttprequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#inserticapheaders Nsicapprofile#inserticapheaders}
  */
  readonly inserticapheaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#logaction Nsicapprofile#logaction}
  */
  readonly logaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#mode Nsicapprofile#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#name Nsicapprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#preview Nsicapprofile#preview}
  */
  readonly preview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#previewlength Nsicapprofile#previewlength}
  */
  readonly previewlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#queryparams Nsicapprofile#queryparams}
  */
  readonly queryparams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#reqtimeout Nsicapprofile#reqtimeout}
  */
  readonly reqtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#reqtimeoutaction Nsicapprofile#reqtimeoutaction}
  */
  readonly reqtimeoutaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#uri Nsicapprofile#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#useragent Nsicapprofile#useragent}
  */
  readonly useragent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile citrixadc_nsicapprofile}
*/
export class Nsicapprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsicapprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsicapprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsicapprofile to import
  * @param importFromId The id of the existing Nsicapprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsicapprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsicapprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsicapprofile citrixadc_nsicapprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsicapprofileConfig
  */
  public constructor(scope: Construct, id: string, config: NsicapprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsicapprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allow204 = config.allow204;
    this._connectionkeepalive = config.connectionkeepalive;
    this._hostheader = config.hostheader;
    this._id = config.id;
    this._inserthttprequest = config.inserthttprequest;
    this._inserticapheaders = config.inserticapheaders;
    this._logaction = config.logaction;
    this._mode = config.mode;
    this._name = config.name;
    this._preview = config.preview;
    this._previewlength = config.previewlength;
    this._queryparams = config.queryparams;
    this._reqtimeout = config.reqtimeout;
    this._reqtimeoutaction = config.reqtimeoutaction;
    this._uri = config.uri;
    this._useragent = config.useragent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow204 - computed: true, optional: true, required: false
  private _allow204?: string; 
  public get allow204() {
    return this.getStringAttribute('allow204');
  }
  public set allow204(value: string) {
    this._allow204 = value;
  }
  public resetAllow204() {
    this._allow204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allow204Input() {
    return this._allow204;
  }

  // connectionkeepalive - computed: true, optional: true, required: false
  private _connectionkeepalive?: string; 
  public get connectionkeepalive() {
    return this.getStringAttribute('connectionkeepalive');
  }
  public set connectionkeepalive(value: string) {
    this._connectionkeepalive = value;
  }
  public resetConnectionkeepalive() {
    this._connectionkeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionkeepaliveInput() {
    return this._connectionkeepalive;
  }

  // hostheader - computed: true, optional: true, required: false
  private _hostheader?: string; 
  public get hostheader() {
    return this.getStringAttribute('hostheader');
  }
  public set hostheader(value: string) {
    this._hostheader = value;
  }
  public resetHostheader() {
    this._hostheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostheaderInput() {
    return this._hostheader;
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

  // inserthttprequest - computed: true, optional: true, required: false
  private _inserthttprequest?: string; 
  public get inserthttprequest() {
    return this.getStringAttribute('inserthttprequest');
  }
  public set inserthttprequest(value: string) {
    this._inserthttprequest = value;
  }
  public resetInserthttprequest() {
    this._inserthttprequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inserthttprequestInput() {
    return this._inserthttprequest;
  }

  // inserticapheaders - computed: true, optional: true, required: false
  private _inserticapheaders?: string; 
  public get inserticapheaders() {
    return this.getStringAttribute('inserticapheaders');
  }
  public set inserticapheaders(value: string) {
    this._inserticapheaders = value;
  }
  public resetInserticapheaders() {
    this._inserticapheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inserticapheadersInput() {
    return this._inserticapheaders;
  }

  // logaction - computed: true, optional: true, required: false
  private _logaction?: string; 
  public get logaction() {
    return this.getStringAttribute('logaction');
  }
  public set logaction(value: string) {
    this._logaction = value;
  }
  public resetLogaction() {
    this._logaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logactionInput() {
    return this._logaction;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preview - computed: true, optional: true, required: false
  private _preview?: string; 
  public get preview() {
    return this.getStringAttribute('preview');
  }
  public set preview(value: string) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // previewlength - computed: true, optional: true, required: false
  private _previewlength?: number; 
  public get previewlength() {
    return this.getNumberAttribute('previewlength');
  }
  public set previewlength(value: number) {
    this._previewlength = value;
  }
  public resetPreviewlength() {
    this._previewlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewlengthInput() {
    return this._previewlength;
  }

  // queryparams - computed: true, optional: true, required: false
  private _queryparams?: string; 
  public get queryparams() {
    return this.getStringAttribute('queryparams');
  }
  public set queryparams(value: string) {
    this._queryparams = value;
  }
  public resetQueryparams() {
    this._queryparams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryparamsInput() {
    return this._queryparams;
  }

  // reqtimeout - computed: true, optional: true, required: false
  private _reqtimeout?: number; 
  public get reqtimeout() {
    return this.getNumberAttribute('reqtimeout');
  }
  public set reqtimeout(value: number) {
    this._reqtimeout = value;
  }
  public resetReqtimeout() {
    this._reqtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqtimeoutInput() {
    return this._reqtimeout;
  }

  // reqtimeoutaction - computed: true, optional: true, required: false
  private _reqtimeoutaction?: string; 
  public get reqtimeoutaction() {
    return this.getStringAttribute('reqtimeoutaction');
  }
  public set reqtimeoutaction(value: string) {
    this._reqtimeoutaction = value;
  }
  public resetReqtimeoutaction() {
    this._reqtimeoutaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqtimeoutactionInput() {
    return this._reqtimeoutaction;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // useragent - computed: true, optional: true, required: false
  private _useragent?: string; 
  public get useragent() {
    return this.getStringAttribute('useragent');
  }
  public set useragent(value: string) {
    this._useragent = value;
  }
  public resetUseragent() {
    this._useragent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useragentInput() {
    return this._useragent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow204: cdktf.stringToTerraform(this._allow204),
      connectionkeepalive: cdktf.stringToTerraform(this._connectionkeepalive),
      hostheader: cdktf.stringToTerraform(this._hostheader),
      id: cdktf.stringToTerraform(this._id),
      inserthttprequest: cdktf.stringToTerraform(this._inserthttprequest),
      inserticapheaders: cdktf.stringToTerraform(this._inserticapheaders),
      logaction: cdktf.stringToTerraform(this._logaction),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      preview: cdktf.stringToTerraform(this._preview),
      previewlength: cdktf.numberToTerraform(this._previewlength),
      queryparams: cdktf.stringToTerraform(this._queryparams),
      reqtimeout: cdktf.numberToTerraform(this._reqtimeout),
      reqtimeoutaction: cdktf.stringToTerraform(this._reqtimeoutaction),
      uri: cdktf.stringToTerraform(this._uri),
      useragent: cdktf.stringToTerraform(this._useragent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow204: {
        value: cdktf.stringToHclTerraform(this._allow204),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectionkeepalive: {
        value: cdktf.stringToHclTerraform(this._connectionkeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostheader: {
        value: cdktf.stringToHclTerraform(this._hostheader),
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
      inserthttprequest: {
        value: cdktf.stringToHclTerraform(this._inserthttprequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inserticapheaders: {
        value: cdktf.stringToHclTerraform(this._inserticapheaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logaction: {
        value: cdktf.stringToHclTerraform(this._logaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.stringToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previewlength: {
        value: cdktf.numberToHclTerraform(this._previewlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queryparams: {
        value: cdktf.stringToHclTerraform(this._queryparams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqtimeout: {
        value: cdktf.numberToHclTerraform(this._reqtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reqtimeoutaction: {
        value: cdktf.stringToHclTerraform(this._reqtimeoutaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useragent: {
        value: cdktf.stringToHclTerraform(this._useragent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
