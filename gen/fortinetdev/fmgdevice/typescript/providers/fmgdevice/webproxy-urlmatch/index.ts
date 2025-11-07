// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyUrlmatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#cache_exemption WebproxyUrlmatch#cache_exemption}
  */
  readonly cacheExemption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#comment WebproxyUrlmatch#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#device_name WebproxyUrlmatch#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#device_vdom WebproxyUrlmatch#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#fast_fallback WebproxyUrlmatch#fast_fallback}
  */
  readonly fastFallback?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#forward_server WebproxyUrlmatch#forward_server}
  */
  readonly forwardServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#id WebproxyUrlmatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#name WebproxyUrlmatch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#status WebproxyUrlmatch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#url_pattern WebproxyUrlmatch#url_pattern}
  */
  readonly urlPattern?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch fmgdevice_webproxy_urlmatch}
*/
export class WebproxyUrlmatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_webproxy_urlmatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyUrlmatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyUrlmatch to import
  * @param importFromId The id of the existing WebproxyUrlmatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyUrlmatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_webproxy_urlmatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_urlmatch fmgdevice_webproxy_urlmatch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyUrlmatchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebproxyUrlmatchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_webproxy_urlmatch',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheExemption = config.cacheExemption;
    this._comment = config.comment;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fastFallback = config.fastFallback;
    this._forwardServer = config.forwardServer;
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._urlPattern = config.urlPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_exemption - computed: true, optional: true, required: false
  private _cacheExemption?: string; 
  public get cacheExemption() {
    return this.getStringAttribute('cache_exemption');
  }
  public set cacheExemption(value: string) {
    this._cacheExemption = value;
  }
  public resetCacheExemption() {
    this._cacheExemption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExemptionInput() {
    return this._cacheExemption;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fast_fallback - computed: true, optional: true, required: false
  private _fastFallback?: string[]; 
  public get fastFallback() {
    return cdktf.Fn.tolist(this.getListAttribute('fast_fallback'));
  }
  public set fastFallback(value: string[]) {
    this._fastFallback = value;
  }
  public resetFastFallback() {
    this._fastFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFallbackInput() {
    return this._fastFallback;
  }

  // forward_server - computed: true, optional: true, required: false
  private _forwardServer?: string[]; 
  public get forwardServer() {
    return cdktf.Fn.tolist(this.getListAttribute('forward_server'));
  }
  public set forwardServer(value: string[]) {
    this._forwardServer = value;
  }
  public resetForwardServer() {
    this._forwardServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardServerInput() {
    return this._forwardServer;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // url_pattern - computed: false, optional: true, required: false
  private _urlPattern?: string; 
  public get urlPattern() {
    return this.getStringAttribute('url_pattern');
  }
  public set urlPattern(value: string) {
    this._urlPattern = value;
  }
  public resetUrlPattern() {
    this._urlPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternInput() {
    return this._urlPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_exemption: cdktf.stringToTerraform(this._cacheExemption),
      comment: cdktf.stringToTerraform(this._comment),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fast_fallback: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fastFallback),
      forward_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwardServer),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      url_pattern: cdktf.stringToTerraform(this._urlPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_exemption: {
        value: cdktf.stringToHclTerraform(this._cacheExemption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_fallback: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fastFallback),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      forward_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forwardServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_pattern: {
        value: cdktf.stringToHclTerraform(this._urlPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
