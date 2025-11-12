// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyUrlmatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#cache_exemption WebproxyUrlmatch#cache_exemption}
  */
  readonly cacheExemption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#comment WebproxyUrlmatch#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#fast_fallback WebproxyUrlmatch#fast_fallback}
  */
  readonly fastFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#forward_server WebproxyUrlmatch#forward_server}
  */
  readonly forwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#id WebproxyUrlmatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#name WebproxyUrlmatch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#status WebproxyUrlmatch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#url_pattern WebproxyUrlmatch#url_pattern}
  */
  readonly urlPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#vdomparam WebproxyUrlmatch#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch fortios_webproxy_urlmatch}
*/
export class WebproxyUrlmatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webproxy_urlmatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyUrlmatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyUrlmatch to import
  * @param importFromId The id of the existing WebproxyUrlmatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyUrlmatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webproxy_urlmatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_urlmatch fortios_webproxy_urlmatch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyUrlmatchConfig
  */
  public constructor(scope: Construct, id: string, config: WebproxyUrlmatchConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_webproxy_urlmatch',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._fastFallback = config.fastFallback;
    this._forwardServer = config.forwardServer;
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._urlPattern = config.urlPattern;
    this._vdomparam = config.vdomparam;
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

  // fast_fallback - computed: false, optional: true, required: false
  private _fastFallback?: string; 
  public get fastFallback() {
    return this.getStringAttribute('fast_fallback');
  }
  public set fastFallback(value: string) {
    this._fastFallback = value;
  }
  public resetFastFallback() {
    this._fastFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFallbackInput() {
    return this._fastFallback;
  }

  // forward_server - computed: false, optional: true, required: false
  private _forwardServer?: string; 
  public get forwardServer() {
    return this.getStringAttribute('forward_server');
  }
  public set forwardServer(value: string) {
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

  // name - computed: true, optional: true, required: false
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

  // url_pattern - computed: false, optional: false, required: true
  private _urlPattern?: string; 
  public get urlPattern() {
    return this.getStringAttribute('url_pattern');
  }
  public set urlPattern(value: string) {
    this._urlPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternInput() {
    return this._urlPattern;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_exemption: cdktf.stringToTerraform(this._cacheExemption),
      comment: cdktf.stringToTerraform(this._comment),
      fast_fallback: cdktf.stringToTerraform(this._fastFallback),
      forward_server: cdktf.stringToTerraform(this._forwardServer),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      url_pattern: cdktf.stringToTerraform(this._urlPattern),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      fast_fallback: {
        value: cdktf.stringToHclTerraform(this._fastFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_server: {
        value: cdktf.stringToHclTerraform(this._forwardServer),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
