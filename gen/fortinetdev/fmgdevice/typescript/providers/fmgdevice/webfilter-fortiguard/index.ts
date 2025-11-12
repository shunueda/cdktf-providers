// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#cache_mem_percent WebfilterFortiguard#cache_mem_percent}
  */
  readonly cacheMemPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#cache_mem_permille WebfilterFortiguard#cache_mem_permille}
  */
  readonly cacheMemPermille?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#cache_mode WebfilterFortiguard#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#cache_prefix_match WebfilterFortiguard#cache_prefix_match}
  */
  readonly cachePrefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#close_ports WebfilterFortiguard#close_ports}
  */
  readonly closePorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#device_name WebfilterFortiguard#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#embed_image WebfilterFortiguard#embed_image}
  */
  readonly embedImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#id WebfilterFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#ovrd_auth_https WebfilterFortiguard#ovrd_auth_https}
  */
  readonly ovrdAuthHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#ovrd_auth_port_http WebfilterFortiguard#ovrd_auth_port_http}
  */
  readonly ovrdAuthPortHttp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#ovrd_auth_port_https WebfilterFortiguard#ovrd_auth_port_https}
  */
  readonly ovrdAuthPortHttps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#ovrd_auth_port_https_flow WebfilterFortiguard#ovrd_auth_port_https_flow}
  */
  readonly ovrdAuthPortHttpsFlow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#ovrd_auth_port_warning WebfilterFortiguard#ovrd_auth_port_warning}
  */
  readonly ovrdAuthPortWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#request_packet_size_limit WebfilterFortiguard#request_packet_size_limit}
  */
  readonly requestPacketSizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#warn_auth_https WebfilterFortiguard#warn_auth_https}
  */
  readonly warnAuthHttps?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard fmgdevice_webfilter_fortiguard}
*/
export class WebfilterFortiguard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_webfilter_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterFortiguard to import
  * @param importFromId The id of the existing WebfilterFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_webfilter_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_fortiguard fmgdevice_webfilter_fortiguard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterFortiguardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebfilterFortiguardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_webfilter_fortiguard',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheMemPercent = config.cacheMemPercent;
    this._cacheMemPermille = config.cacheMemPermille;
    this._cacheMode = config.cacheMode;
    this._cachePrefixMatch = config.cachePrefixMatch;
    this._closePorts = config.closePorts;
    this._deviceName = config.deviceName;
    this._embedImage = config.embedImage;
    this._id = config.id;
    this._ovrdAuthHttps = config.ovrdAuthHttps;
    this._ovrdAuthPortHttp = config.ovrdAuthPortHttp;
    this._ovrdAuthPortHttps = config.ovrdAuthPortHttps;
    this._ovrdAuthPortHttpsFlow = config.ovrdAuthPortHttpsFlow;
    this._ovrdAuthPortWarning = config.ovrdAuthPortWarning;
    this._requestPacketSizeLimit = config.requestPacketSizeLimit;
    this._warnAuthHttps = config.warnAuthHttps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_mem_percent - computed: true, optional: true, required: false
  private _cacheMemPercent?: number; 
  public get cacheMemPercent() {
    return this.getNumberAttribute('cache_mem_percent');
  }
  public set cacheMemPercent(value: number) {
    this._cacheMemPercent = value;
  }
  public resetCacheMemPercent() {
    this._cacheMemPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMemPercentInput() {
    return this._cacheMemPercent;
  }

  // cache_mem_permille - computed: true, optional: true, required: false
  private _cacheMemPermille?: number; 
  public get cacheMemPermille() {
    return this.getNumberAttribute('cache_mem_permille');
  }
  public set cacheMemPermille(value: number) {
    this._cacheMemPermille = value;
  }
  public resetCacheMemPermille() {
    this._cacheMemPermille = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMemPermilleInput() {
    return this._cacheMemPermille;
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // cache_prefix_match - computed: true, optional: true, required: false
  private _cachePrefixMatch?: string; 
  public get cachePrefixMatch() {
    return this.getStringAttribute('cache_prefix_match');
  }
  public set cachePrefixMatch(value: string) {
    this._cachePrefixMatch = value;
  }
  public resetCachePrefixMatch() {
    this._cachePrefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePrefixMatchInput() {
    return this._cachePrefixMatch;
  }

  // close_ports - computed: true, optional: true, required: false
  private _closePorts?: string; 
  public get closePorts() {
    return this.getStringAttribute('close_ports');
  }
  public set closePorts(value: string) {
    this._closePorts = value;
  }
  public resetClosePorts() {
    this._closePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closePortsInput() {
    return this._closePorts;
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

  // embed_image - computed: true, optional: true, required: false
  private _embedImage?: string; 
  public get embedImage() {
    return this.getStringAttribute('embed_image');
  }
  public set embedImage(value: string) {
    this._embedImage = value;
  }
  public resetEmbedImage() {
    this._embedImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedImageInput() {
    return this._embedImage;
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

  // ovrd_auth_https - computed: true, optional: true, required: false
  private _ovrdAuthHttps?: string; 
  public get ovrdAuthHttps() {
    return this.getStringAttribute('ovrd_auth_https');
  }
  public set ovrdAuthHttps(value: string) {
    this._ovrdAuthHttps = value;
  }
  public resetOvrdAuthHttps() {
    this._ovrdAuthHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdAuthHttpsInput() {
    return this._ovrdAuthHttps;
  }

  // ovrd_auth_port_http - computed: true, optional: true, required: false
  private _ovrdAuthPortHttp?: number; 
  public get ovrdAuthPortHttp() {
    return this.getNumberAttribute('ovrd_auth_port_http');
  }
  public set ovrdAuthPortHttp(value: number) {
    this._ovrdAuthPortHttp = value;
  }
  public resetOvrdAuthPortHttp() {
    this._ovrdAuthPortHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdAuthPortHttpInput() {
    return this._ovrdAuthPortHttp;
  }

  // ovrd_auth_port_https - computed: true, optional: true, required: false
  private _ovrdAuthPortHttps?: number; 
  public get ovrdAuthPortHttps() {
    return this.getNumberAttribute('ovrd_auth_port_https');
  }
  public set ovrdAuthPortHttps(value: number) {
    this._ovrdAuthPortHttps = value;
  }
  public resetOvrdAuthPortHttps() {
    this._ovrdAuthPortHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdAuthPortHttpsInput() {
    return this._ovrdAuthPortHttps;
  }

  // ovrd_auth_port_https_flow - computed: true, optional: true, required: false
  private _ovrdAuthPortHttpsFlow?: number; 
  public get ovrdAuthPortHttpsFlow() {
    return this.getNumberAttribute('ovrd_auth_port_https_flow');
  }
  public set ovrdAuthPortHttpsFlow(value: number) {
    this._ovrdAuthPortHttpsFlow = value;
  }
  public resetOvrdAuthPortHttpsFlow() {
    this._ovrdAuthPortHttpsFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdAuthPortHttpsFlowInput() {
    return this._ovrdAuthPortHttpsFlow;
  }

  // ovrd_auth_port_warning - computed: true, optional: true, required: false
  private _ovrdAuthPortWarning?: number; 
  public get ovrdAuthPortWarning() {
    return this.getNumberAttribute('ovrd_auth_port_warning');
  }
  public set ovrdAuthPortWarning(value: number) {
    this._ovrdAuthPortWarning = value;
  }
  public resetOvrdAuthPortWarning() {
    this._ovrdAuthPortWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdAuthPortWarningInput() {
    return this._ovrdAuthPortWarning;
  }

  // request_packet_size_limit - computed: false, optional: true, required: false
  private _requestPacketSizeLimit?: number; 
  public get requestPacketSizeLimit() {
    return this.getNumberAttribute('request_packet_size_limit');
  }
  public set requestPacketSizeLimit(value: number) {
    this._requestPacketSizeLimit = value;
  }
  public resetRequestPacketSizeLimit() {
    this._requestPacketSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPacketSizeLimitInput() {
    return this._requestPacketSizeLimit;
  }

  // warn_auth_https - computed: true, optional: true, required: false
  private _warnAuthHttps?: string; 
  public get warnAuthHttps() {
    return this.getStringAttribute('warn_auth_https');
  }
  public set warnAuthHttps(value: string) {
    this._warnAuthHttps = value;
  }
  public resetWarnAuthHttps() {
    this._warnAuthHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnAuthHttpsInput() {
    return this._warnAuthHttps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_mem_percent: cdktf.numberToTerraform(this._cacheMemPercent),
      cache_mem_permille: cdktf.numberToTerraform(this._cacheMemPermille),
      cache_mode: cdktf.stringToTerraform(this._cacheMode),
      cache_prefix_match: cdktf.stringToTerraform(this._cachePrefixMatch),
      close_ports: cdktf.stringToTerraform(this._closePorts),
      device_name: cdktf.stringToTerraform(this._deviceName),
      embed_image: cdktf.stringToTerraform(this._embedImage),
      id: cdktf.stringToTerraform(this._id),
      ovrd_auth_https: cdktf.stringToTerraform(this._ovrdAuthHttps),
      ovrd_auth_port_http: cdktf.numberToTerraform(this._ovrdAuthPortHttp),
      ovrd_auth_port_https: cdktf.numberToTerraform(this._ovrdAuthPortHttps),
      ovrd_auth_port_https_flow: cdktf.numberToTerraform(this._ovrdAuthPortHttpsFlow),
      ovrd_auth_port_warning: cdktf.numberToTerraform(this._ovrdAuthPortWarning),
      request_packet_size_limit: cdktf.numberToTerraform(this._requestPacketSizeLimit),
      warn_auth_https: cdktf.stringToTerraform(this._warnAuthHttps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_mem_percent: {
        value: cdktf.numberToHclTerraform(this._cacheMemPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_mem_permille: {
        value: cdktf.numberToHclTerraform(this._cacheMemPermille),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_mode: {
        value: cdktf.stringToHclTerraform(this._cacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_prefix_match: {
        value: cdktf.stringToHclTerraform(this._cachePrefixMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      close_ports: {
        value: cdktf.stringToHclTerraform(this._closePorts),
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
      embed_image: {
        value: cdktf.stringToHclTerraform(this._embedImage),
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
      ovrd_auth_https: {
        value: cdktf.stringToHclTerraform(this._ovrdAuthHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_auth_port_http: {
        value: cdktf.numberToHclTerraform(this._ovrdAuthPortHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ovrd_auth_port_https: {
        value: cdktf.numberToHclTerraform(this._ovrdAuthPortHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ovrd_auth_port_https_flow: {
        value: cdktf.numberToHclTerraform(this._ovrdAuthPortHttpsFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ovrd_auth_port_warning: {
        value: cdktf.numberToHclTerraform(this._ovrdAuthPortWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_packet_size_limit: {
        value: cdktf.numberToHclTerraform(this._requestPacketSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warn_auth_https: {
        value: cdktf.stringToHclTerraform(this._warnAuthHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
