// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable DDoS protection resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#active ProtectionResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * List of countries to apply geoip_mode policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#geoip_list ProtectionResource#geoip_list}
  */
  readonly geoipList?: string[];
  /**
  * Manage country access policy to control access to DDoS resource from the specified countries. Available values are `no`, `allow`, `block`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#geoip_mode ProtectionResource#geoip_mode}
  */
  readonly geoipMode?: string;
  /**
  * Whether to use HTTP to make requests to the origin. If set to false (default), HTTPS is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#http_to_origin ProtectionResource#http_to_origin}
  */
  readonly httpToOrigin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#id ProtectionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets load balancing type. Available values are `Round Robin`, `Round Robin with session persistence`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#load_balancing_type ProtectionResource#load_balancing_type}
  */
  readonly loadBalancingType?: string;
  /**
  * Enable or disable Multiple origins feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#multiple_origins ProtectionResource#multiple_origins}
  */
  readonly multipleOrigins?: boolean | cdktf.IResolvable;
  /**
  * The DNS name of the DDoS protection resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#name ProtectionResource#name}
  */
  readonly name: string;
  /**
  * Enable or disable from HTTP to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#redirect_to_https ProtectionResource#redirect_to_https}
  */
  readonly redirectToHttps?: boolean | cdktf.IResolvable;
  /**
  * The list of supported TLS versions. Available value: `1`, `1.1`, `1.2`, `1.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#tls ProtectionResource#tls}
  */
  readonly tls: string[];
  /**
  * Enable or disable WAF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#waf ProtectionResource#waf}
  */
  readonly waf?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Wildcard aliases feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#wildcard_aliases ProtectionResource#wildcard_aliases}
  */
  readonly wildcardAliases?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable redirect from WWW to the primary domain option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#www_redirect ProtectionResource#www_redirect}
  */
  readonly wwwRedirect?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource edgecenter_protection_resource}
*/
export class ProtectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_protection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionResource to import
  * @param importFromId The id of the existing ProtectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_protection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/protection_resource edgecenter_protection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_protection_resource',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.5',
        providerVersionConstraint: '0.10.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._geoipList = config.geoipList;
    this._geoipMode = config.geoipMode;
    this._httpToOrigin = config.httpToOrigin;
    this._id = config.id;
    this._loadBalancingType = config.loadBalancingType;
    this._multipleOrigins = config.multipleOrigins;
    this._name = config.name;
    this._redirectToHttps = config.redirectToHttps;
    this._tls = config.tls;
    this._waf = config.waf;
    this._wildcardAliases = config.wildcardAliases;
    this._wwwRedirect = config.wwwRedirect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // geoip_list - computed: true, optional: true, required: false
  private _geoipList?: string[]; 
  public get geoipList() {
    return cdktf.Fn.tolist(this.getListAttribute('geoip_list'));
  }
  public set geoipList(value: string[]) {
    this._geoipList = value;
  }
  public resetGeoipList() {
    this._geoipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipListInput() {
    return this._geoipList;
  }

  // geoip_mode - computed: true, optional: true, required: false
  private _geoipMode?: string; 
  public get geoipMode() {
    return this.getStringAttribute('geoip_mode');
  }
  public set geoipMode(value: string) {
    this._geoipMode = value;
  }
  public resetGeoipMode() {
    this._geoipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipModeInput() {
    return this._geoipMode;
  }

  // http_to_origin - computed: true, optional: true, required: false
  private _httpToOrigin?: boolean | cdktf.IResolvable; 
  public get httpToOrigin() {
    return this.getBooleanAttribute('http_to_origin');
  }
  public set httpToOrigin(value: boolean | cdktf.IResolvable) {
    this._httpToOrigin = value;
  }
  public resetHttpToOrigin() {
    this._httpToOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToOriginInput() {
    return this._httpToOrigin;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // load_balancing_type - computed: true, optional: true, required: false
  private _loadBalancingType?: string; 
  public get loadBalancingType() {
    return this.getStringAttribute('load_balancing_type');
  }
  public set loadBalancingType(value: string) {
    this._loadBalancingType = value;
  }
  public resetLoadBalancingType() {
    this._loadBalancingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingTypeInput() {
    return this._loadBalancingType;
  }

  // multiple_origins - computed: true, optional: true, required: false
  private _multipleOrigins?: boolean | cdktf.IResolvable; 
  public get multipleOrigins() {
    return this.getBooleanAttribute('multiple_origins');
  }
  public set multipleOrigins(value: boolean | cdktf.IResolvable) {
    this._multipleOrigins = value;
  }
  public resetMultipleOrigins() {
    this._multipleOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOriginsInput() {
    return this._multipleOrigins;
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

  // redirect_to_https - computed: true, optional: true, required: false
  private _redirectToHttps?: boolean | cdktf.IResolvable; 
  public get redirectToHttps() {
    return this.getBooleanAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tls - computed: false, optional: false, required: true
  private _tls?: string[]; 
  public get tls() {
    return cdktf.Fn.tolist(this.getListAttribute('tls'));
  }
  public set tls(value: string[]) {
    this._tls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // waf - computed: true, optional: true, required: false
  private _waf?: boolean | cdktf.IResolvable; 
  public get waf() {
    return this.getBooleanAttribute('waf');
  }
  public set waf(value: boolean | cdktf.IResolvable) {
    this._waf = value;
  }
  public resetWaf() {
    this._waf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }

  // wait_for_le - computed: true, optional: false, required: false
  public get waitForLe() {
    return this.getNumberAttribute('wait_for_le');
  }

  // wildcard_aliases - computed: true, optional: true, required: false
  private _wildcardAliases?: boolean | cdktf.IResolvable; 
  public get wildcardAliases() {
    return this.getBooleanAttribute('wildcard_aliases');
  }
  public set wildcardAliases(value: boolean | cdktf.IResolvable) {
    this._wildcardAliases = value;
  }
  public resetWildcardAliases() {
    this._wildcardAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardAliasesInput() {
    return this._wildcardAliases;
  }

  // www_redirect - computed: true, optional: true, required: false
  private _wwwRedirect?: boolean | cdktf.IResolvable; 
  public get wwwRedirect() {
    return this.getBooleanAttribute('www_redirect');
  }
  public set wwwRedirect(value: boolean | cdktf.IResolvable) {
    this._wwwRedirect = value;
  }
  public resetWwwRedirect() {
    this._wwwRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwwRedirectInput() {
    return this._wwwRedirect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      geoip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipList),
      geoip_mode: cdktf.stringToTerraform(this._geoipMode),
      http_to_origin: cdktf.booleanToTerraform(this._httpToOrigin),
      id: cdktf.stringToTerraform(this._id),
      load_balancing_type: cdktf.stringToTerraform(this._loadBalancingType),
      multiple_origins: cdktf.booleanToTerraform(this._multipleOrigins),
      name: cdktf.stringToTerraform(this._name),
      redirect_to_https: cdktf.booleanToTerraform(this._redirectToHttps),
      tls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tls),
      waf: cdktf.booleanToTerraform(this._waf),
      wildcard_aliases: cdktf.booleanToTerraform(this._wildcardAliases),
      www_redirect: cdktf.booleanToTerraform(this._wwwRedirect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      geoip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      geoip_mode: {
        value: cdktf.stringToHclTerraform(this._geoipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_to_origin: {
        value: cdktf.booleanToHclTerraform(this._httpToOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_origins: {
        value: cdktf.booleanToHclTerraform(this._multipleOrigins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_to_https: {
        value: cdktf.booleanToHclTerraform(this._redirectToHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      waf: {
        value: cdktf.booleanToHclTerraform(this._waf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wildcard_aliases: {
        value: cdktf.booleanToHclTerraform(this._wildcardAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      www_redirect: {
        value: cdktf.booleanToHclTerraform(this._wwwRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
