// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptWebcacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#always_revalidate WanoptWebcache#always_revalidate}
  */
  readonly alwaysRevalidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#cache_by_default WanoptWebcache#cache_by_default}
  */
  readonly cacheByDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#cache_cookie WanoptWebcache#cache_cookie}
  */
  readonly cacheCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#cache_expired WanoptWebcache#cache_expired}
  */
  readonly cacheExpired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#default_ttl WanoptWebcache#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#device_name WanoptWebcache#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#device_vdom WanoptWebcache#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#external WanoptWebcache#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#fresh_factor WanoptWebcache#fresh_factor}
  */
  readonly freshFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#host_validate WanoptWebcache#host_validate}
  */
  readonly hostValidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#id WanoptWebcache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#ignore_conditional WanoptWebcache#ignore_conditional}
  */
  readonly ignoreConditional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#ignore_ie_reload WanoptWebcache#ignore_ie_reload}
  */
  readonly ignoreIeReload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#ignore_ims WanoptWebcache#ignore_ims}
  */
  readonly ignoreIms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#ignore_pnc WanoptWebcache#ignore_pnc}
  */
  readonly ignorePnc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#max_object_size WanoptWebcache#max_object_size}
  */
  readonly maxObjectSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#max_ttl WanoptWebcache#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#min_ttl WanoptWebcache#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#neg_resp_time WanoptWebcache#neg_resp_time}
  */
  readonly negRespTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#reval_pnc WanoptWebcache#reval_pnc}
  */
  readonly revalPnc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache fmgdevice_wanopt_webcache}
*/
export class WanoptWebcache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wanopt_webcache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptWebcache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptWebcache to import
  * @param importFromId The id of the existing WanoptWebcache that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptWebcache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wanopt_webcache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_webcache fmgdevice_wanopt_webcache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptWebcacheConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptWebcacheConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wanopt_webcache',
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
    this._alwaysRevalidate = config.alwaysRevalidate;
    this._cacheByDefault = config.cacheByDefault;
    this._cacheCookie = config.cacheCookie;
    this._cacheExpired = config.cacheExpired;
    this._defaultTtl = config.defaultTtl;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._external = config.external;
    this._freshFactor = config.freshFactor;
    this._hostValidate = config.hostValidate;
    this._id = config.id;
    this._ignoreConditional = config.ignoreConditional;
    this._ignoreIeReload = config.ignoreIeReload;
    this._ignoreIms = config.ignoreIms;
    this._ignorePnc = config.ignorePnc;
    this._maxObjectSize = config.maxObjectSize;
    this._maxTtl = config.maxTtl;
    this._minTtl = config.minTtl;
    this._negRespTime = config.negRespTime;
    this._revalPnc = config.revalPnc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_revalidate - computed: false, optional: true, required: false
  private _alwaysRevalidate?: string; 
  public get alwaysRevalidate() {
    return this.getStringAttribute('always_revalidate');
  }
  public set alwaysRevalidate(value: string) {
    this._alwaysRevalidate = value;
  }
  public resetAlwaysRevalidate() {
    this._alwaysRevalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRevalidateInput() {
    return this._alwaysRevalidate;
  }

  // cache_by_default - computed: true, optional: true, required: false
  private _cacheByDefault?: string; 
  public get cacheByDefault() {
    return this.getStringAttribute('cache_by_default');
  }
  public set cacheByDefault(value: string) {
    this._cacheByDefault = value;
  }
  public resetCacheByDefault() {
    this._cacheByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheByDefaultInput() {
    return this._cacheByDefault;
  }

  // cache_cookie - computed: true, optional: true, required: false
  private _cacheCookie?: string; 
  public get cacheCookie() {
    return this.getStringAttribute('cache_cookie');
  }
  public set cacheCookie(value: string) {
    this._cacheCookie = value;
  }
  public resetCacheCookie() {
    this._cacheCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCookieInput() {
    return this._cacheCookie;
  }

  // cache_expired - computed: true, optional: true, required: false
  private _cacheExpired?: string; 
  public get cacheExpired() {
    return this.getStringAttribute('cache_expired');
  }
  public set cacheExpired(value: string) {
    this._cacheExpired = value;
  }
  public resetCacheExpired() {
    this._cacheExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpiredInput() {
    return this._cacheExpired;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // external - computed: true, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // fresh_factor - computed: true, optional: true, required: false
  private _freshFactor?: number; 
  public get freshFactor() {
    return this.getNumberAttribute('fresh_factor');
  }
  public set freshFactor(value: number) {
    this._freshFactor = value;
  }
  public resetFreshFactor() {
    this._freshFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshFactorInput() {
    return this._freshFactor;
  }

  // host_validate - computed: true, optional: true, required: false
  private _hostValidate?: string; 
  public get hostValidate() {
    return this.getStringAttribute('host_validate');
  }
  public set hostValidate(value: string) {
    this._hostValidate = value;
  }
  public resetHostValidate() {
    this._hostValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostValidateInput() {
    return this._hostValidate;
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

  // ignore_conditional - computed: true, optional: true, required: false
  private _ignoreConditional?: string; 
  public get ignoreConditional() {
    return this.getStringAttribute('ignore_conditional');
  }
  public set ignoreConditional(value: string) {
    this._ignoreConditional = value;
  }
  public resetIgnoreConditional() {
    this._ignoreConditional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreConditionalInput() {
    return this._ignoreConditional;
  }

  // ignore_ie_reload - computed: true, optional: true, required: false
  private _ignoreIeReload?: string; 
  public get ignoreIeReload() {
    return this.getStringAttribute('ignore_ie_reload');
  }
  public set ignoreIeReload(value: string) {
    this._ignoreIeReload = value;
  }
  public resetIgnoreIeReload() {
    this._ignoreIeReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIeReloadInput() {
    return this._ignoreIeReload;
  }

  // ignore_ims - computed: true, optional: true, required: false
  private _ignoreIms?: string; 
  public get ignoreIms() {
    return this.getStringAttribute('ignore_ims');
  }
  public set ignoreIms(value: string) {
    this._ignoreIms = value;
  }
  public resetIgnoreIms() {
    this._ignoreIms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreImsInput() {
    return this._ignoreIms;
  }

  // ignore_pnc - computed: true, optional: true, required: false
  private _ignorePnc?: string; 
  public get ignorePnc() {
    return this.getStringAttribute('ignore_pnc');
  }
  public set ignorePnc(value: string) {
    this._ignorePnc = value;
  }
  public resetIgnorePnc() {
    this._ignorePnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePncInput() {
    return this._ignorePnc;
  }

  // max_object_size - computed: true, optional: true, required: false
  private _maxObjectSize?: number; 
  public get maxObjectSize() {
    return this.getNumberAttribute('max_object_size');
  }
  public set maxObjectSize(value: number) {
    this._maxObjectSize = value;
  }
  public resetMaxObjectSize() {
    this._maxObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectSizeInput() {
    return this._maxObjectSize;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: true, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // neg_resp_time - computed: false, optional: true, required: false
  private _negRespTime?: number; 
  public get negRespTime() {
    return this.getNumberAttribute('neg_resp_time');
  }
  public set negRespTime(value: number) {
    this._negRespTime = value;
  }
  public resetNegRespTime() {
    this._negRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negRespTimeInput() {
    return this._negRespTime;
  }

  // reval_pnc - computed: true, optional: true, required: false
  private _revalPnc?: string; 
  public get revalPnc() {
    return this.getStringAttribute('reval_pnc');
  }
  public set revalPnc(value: string) {
    this._revalPnc = value;
  }
  public resetRevalPnc() {
    this._revalPnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revalPncInput() {
    return this._revalPnc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_revalidate: cdktf.stringToTerraform(this._alwaysRevalidate),
      cache_by_default: cdktf.stringToTerraform(this._cacheByDefault),
      cache_cookie: cdktf.stringToTerraform(this._cacheCookie),
      cache_expired: cdktf.stringToTerraform(this._cacheExpired),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      external: cdktf.stringToTerraform(this._external),
      fresh_factor: cdktf.numberToTerraform(this._freshFactor),
      host_validate: cdktf.stringToTerraform(this._hostValidate),
      id: cdktf.stringToTerraform(this._id),
      ignore_conditional: cdktf.stringToTerraform(this._ignoreConditional),
      ignore_ie_reload: cdktf.stringToTerraform(this._ignoreIeReload),
      ignore_ims: cdktf.stringToTerraform(this._ignoreIms),
      ignore_pnc: cdktf.stringToTerraform(this._ignorePnc),
      max_object_size: cdktf.numberToTerraform(this._maxObjectSize),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      min_ttl: cdktf.numberToTerraform(this._minTtl),
      neg_resp_time: cdktf.numberToTerraform(this._negRespTime),
      reval_pnc: cdktf.stringToTerraform(this._revalPnc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_revalidate: {
        value: cdktf.stringToHclTerraform(this._alwaysRevalidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_by_default: {
        value: cdktf.stringToHclTerraform(this._cacheByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_cookie: {
        value: cdktf.stringToHclTerraform(this._cacheCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_expired: {
        value: cdktf.stringToHclTerraform(this._cacheExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      external: {
        value: cdktf.stringToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fresh_factor: {
        value: cdktf.numberToHclTerraform(this._freshFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_validate: {
        value: cdktf.stringToHclTerraform(this._hostValidate),
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
      ignore_conditional: {
        value: cdktf.stringToHclTerraform(this._ignoreConditional),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_ie_reload: {
        value: cdktf.stringToHclTerraform(this._ignoreIeReload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_ims: {
        value: cdktf.stringToHclTerraform(this._ignoreIms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_pnc: {
        value: cdktf.stringToHclTerraform(this._ignorePnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_object_size: {
        value: cdktf.numberToHclTerraform(this._maxObjectSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ttl: {
        value: cdktf.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ttl: {
        value: cdktf.numberToHclTerraform(this._minTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neg_resp_time: {
        value: cdktf.numberToHclTerraform(this._negRespTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reval_pnc: {
        value: cdktf.stringToHclTerraform(this._revalPnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
