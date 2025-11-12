// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * http proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config#http_proxy ProxyConfig#http_proxy}
  */
  readonly httpProxy: string;
  /**
  * https proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config#https_proxy ProxyConfig#https_proxy}
  */
  readonly httpsProxy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config#id ProxyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server CA Certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config#proxy_ca_certificate ProxyConfig#proxy_ca_certificate}
  */
  readonly proxyCaCertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config aviatrix_proxy_config}
*/
export class ProxyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_proxy_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyConfig to import
  * @param importFromId The id of the existing ProxyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_proxy_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/proxy_config aviatrix_proxy_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_proxy_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._id = config.id;
    this._proxyCaCertificate = config.proxyCaCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_proxy - computed: false, optional: false, required: true
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: false, required: true
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
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

  // proxy_ca_certificate - computed: false, optional: true, required: false
  private _proxyCaCertificate?: string; 
  public get proxyCaCertificate() {
    return this.getStringAttribute('proxy_ca_certificate');
  }
  public set proxyCaCertificate(value: string) {
    this._proxyCaCertificate = value;
  }
  public resetProxyCaCertificate() {
    this._proxyCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaCertificateInput() {
    return this._proxyCaCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      https_proxy: cdktf.stringToTerraform(this._httpsProxy),
      id: cdktf.stringToTerraform(this._id),
      proxy_ca_certificate: cdktf.stringToTerraform(this._proxyCaCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktf.stringToHclTerraform(this._httpsProxy),
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
      proxy_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._proxyCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
