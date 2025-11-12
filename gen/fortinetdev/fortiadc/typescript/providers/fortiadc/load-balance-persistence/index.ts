// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePersistenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#avpno LoadBalancePersistence#avpno}
  */
  readonly avpno?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_custom_attr LoadBalancePersistence#cookie_custom_attr}
  */
  readonly cookieCustomAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_custom_attr_val LoadBalancePersistence#cookie_custom_attr_val}
  */
  readonly cookieCustomAttrVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_domain LoadBalancePersistence#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_httponly LoadBalancePersistence#cookie_httponly}
  */
  readonly cookieHttponly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_samesite LoadBalancePersistence#cookie_samesite}
  */
  readonly cookieSamesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#cookie_secure LoadBalancePersistence#cookie_secure}
  */
  readonly cookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#id LoadBalancePersistence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#ipv4_maskbits LoadBalancePersistence#ipv4_maskbits}
  */
  readonly ipv4Maskbits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#ipv6_maskbits LoadBalancePersistence#ipv6_maskbits}
  */
  readonly ipv6Maskbits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#iso8583_bitmap_relation LoadBalancePersistence#iso8583_bitmap_relation}
  */
  readonly iso8583BitmapRelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#keyvalue_relation LoadBalancePersistence#keyvalue_relation}
  */
  readonly keyvalueRelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#keyword LoadBalancePersistence#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#match_across_servers LoadBalancePersistence#match_across_servers}
  */
  readonly matchAcrossServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#mkey LoadBalancePersistence#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#override_connection_limit LoadBalancePersistence#override_connection_limit}
  */
  readonly overrideConnectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#radius_attribute_relation LoadBalancePersistence#radius_attribute_relation}
  */
  readonly radiusAttributeRelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#sess_kw_type LoadBalancePersistence#sess_kw_type}
  */
  readonly sessKwType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#timeout LoadBalancePersistence#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#type LoadBalancePersistence#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#vdom LoadBalancePersistence#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence fortiadc_load_balance_persistence}
*/
export class LoadBalancePersistence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_persistence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePersistence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePersistence to import
  * @param importFromId The id of the existing LoadBalancePersistence that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePersistence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_persistence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_persistence fortiadc_load_balance_persistence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePersistenceConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePersistenceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_persistence',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avpno = config.avpno;
    this._cookieCustomAttr = config.cookieCustomAttr;
    this._cookieCustomAttrVal = config.cookieCustomAttrVal;
    this._cookieDomain = config.cookieDomain;
    this._cookieHttponly = config.cookieHttponly;
    this._cookieSamesite = config.cookieSamesite;
    this._cookieSecure = config.cookieSecure;
    this._id = config.id;
    this._ipv4Maskbits = config.ipv4Maskbits;
    this._ipv6Maskbits = config.ipv6Maskbits;
    this._iso8583BitmapRelation = config.iso8583BitmapRelation;
    this._keyvalueRelation = config.keyvalueRelation;
    this._keyword = config.keyword;
    this._matchAcrossServers = config.matchAcrossServers;
    this._mkey = config.mkey;
    this._overrideConnectionLimit = config.overrideConnectionLimit;
    this._radiusAttributeRelation = config.radiusAttributeRelation;
    this._sessKwType = config.sessKwType;
    this._timeout = config.timeout;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avpno - computed: true, optional: true, required: false
  private _avpno?: string; 
  public get avpno() {
    return this.getStringAttribute('avpno');
  }
  public set avpno(value: string) {
    this._avpno = value;
  }
  public resetAvpno() {
    this._avpno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avpnoInput() {
    return this._avpno;
  }

  // cookie_custom_attr - computed: true, optional: true, required: false
  private _cookieCustomAttr?: string; 
  public get cookieCustomAttr() {
    return this.getStringAttribute('cookie_custom_attr');
  }
  public set cookieCustomAttr(value: string) {
    this._cookieCustomAttr = value;
  }
  public resetCookieCustomAttr() {
    this._cookieCustomAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieCustomAttrInput() {
    return this._cookieCustomAttr;
  }

  // cookie_custom_attr_val - computed: true, optional: true, required: false
  private _cookieCustomAttrVal?: string; 
  public get cookieCustomAttrVal() {
    return this.getStringAttribute('cookie_custom_attr_val');
  }
  public set cookieCustomAttrVal(value: string) {
    this._cookieCustomAttrVal = value;
  }
  public resetCookieCustomAttrVal() {
    this._cookieCustomAttrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieCustomAttrValInput() {
    return this._cookieCustomAttrVal;
  }

  // cookie_domain - computed: true, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // cookie_httponly - computed: true, optional: true, required: false
  private _cookieHttponly?: string; 
  public get cookieHttponly() {
    return this.getStringAttribute('cookie_httponly');
  }
  public set cookieHttponly(value: string) {
    this._cookieHttponly = value;
  }
  public resetCookieHttponly() {
    this._cookieHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieHttponlyInput() {
    return this._cookieHttponly;
  }

  // cookie_samesite - computed: true, optional: true, required: false
  private _cookieSamesite?: string; 
  public get cookieSamesite() {
    return this.getStringAttribute('cookie_samesite');
  }
  public set cookieSamesite(value: string) {
    this._cookieSamesite = value;
  }
  public resetCookieSamesite() {
    this._cookieSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSamesiteInput() {
    return this._cookieSamesite;
  }

  // cookie_secure - computed: true, optional: true, required: false
  private _cookieSecure?: string; 
  public get cookieSecure() {
    return this.getStringAttribute('cookie_secure');
  }
  public set cookieSecure(value: string) {
    this._cookieSecure = value;
  }
  public resetCookieSecure() {
    this._cookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSecureInput() {
    return this._cookieSecure;
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

  // ipv4_maskbits - computed: true, optional: true, required: false
  private _ipv4Maskbits?: string; 
  public get ipv4Maskbits() {
    return this.getStringAttribute('ipv4_maskbits');
  }
  public set ipv4Maskbits(value: string) {
    this._ipv4Maskbits = value;
  }
  public resetIpv4Maskbits() {
    this._ipv4Maskbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskbitsInput() {
    return this._ipv4Maskbits;
  }

  // ipv6_maskbits - computed: true, optional: true, required: false
  private _ipv6Maskbits?: string; 
  public get ipv6Maskbits() {
    return this.getStringAttribute('ipv6_maskbits');
  }
  public set ipv6Maskbits(value: string) {
    this._ipv6Maskbits = value;
  }
  public resetIpv6Maskbits() {
    this._ipv6Maskbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskbitsInput() {
    return this._ipv6Maskbits;
  }

  // iso8583_bitmap_relation - computed: true, optional: true, required: false
  private _iso8583BitmapRelation?: string; 
  public get iso8583BitmapRelation() {
    return this.getStringAttribute('iso8583_bitmap_relation');
  }
  public set iso8583BitmapRelation(value: string) {
    this._iso8583BitmapRelation = value;
  }
  public resetIso8583BitmapRelation() {
    this._iso8583BitmapRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8583BitmapRelationInput() {
    return this._iso8583BitmapRelation;
  }

  // keyvalue_relation - computed: true, optional: true, required: false
  private _keyvalueRelation?: string; 
  public get keyvalueRelation() {
    return this.getStringAttribute('keyvalue_relation');
  }
  public set keyvalueRelation(value: string) {
    this._keyvalueRelation = value;
  }
  public resetKeyvalueRelation() {
    this._keyvalueRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyvalueRelationInput() {
    return this._keyvalueRelation;
  }

  // keyword - computed: true, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // match_across_servers - computed: true, optional: true, required: false
  private _matchAcrossServers?: string; 
  public get matchAcrossServers() {
    return this.getStringAttribute('match_across_servers');
  }
  public set matchAcrossServers(value: string) {
    this._matchAcrossServers = value;
  }
  public resetMatchAcrossServers() {
    this._matchAcrossServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossServersInput() {
    return this._matchAcrossServers;
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

  // override_connection_limit - computed: true, optional: true, required: false
  private _overrideConnectionLimit?: string; 
  public get overrideConnectionLimit() {
    return this.getStringAttribute('override_connection_limit');
  }
  public set overrideConnectionLimit(value: string) {
    this._overrideConnectionLimit = value;
  }
  public resetOverrideConnectionLimit() {
    this._overrideConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConnectionLimitInput() {
    return this._overrideConnectionLimit;
  }

  // radius_attribute_relation - computed: true, optional: true, required: false
  private _radiusAttributeRelation?: string; 
  public get radiusAttributeRelation() {
    return this.getStringAttribute('radius_attribute_relation');
  }
  public set radiusAttributeRelation(value: string) {
    this._radiusAttributeRelation = value;
  }
  public resetRadiusAttributeRelation() {
    this._radiusAttributeRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAttributeRelationInput() {
    return this._radiusAttributeRelation;
  }

  // sess_kw_type - computed: true, optional: true, required: false
  private _sessKwType?: string; 
  public get sessKwType() {
    return this.getStringAttribute('sess_kw_type');
  }
  public set sessKwType(value: string) {
    this._sessKwType = value;
  }
  public resetSessKwType() {
    this._sessKwType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessKwTypeInput() {
    return this._sessKwType;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
      avpno: cdktf.stringToTerraform(this._avpno),
      cookie_custom_attr: cdktf.stringToTerraform(this._cookieCustomAttr),
      cookie_custom_attr_val: cdktf.stringToTerraform(this._cookieCustomAttrVal),
      cookie_domain: cdktf.stringToTerraform(this._cookieDomain),
      cookie_httponly: cdktf.stringToTerraform(this._cookieHttponly),
      cookie_samesite: cdktf.stringToTerraform(this._cookieSamesite),
      cookie_secure: cdktf.stringToTerraform(this._cookieSecure),
      id: cdktf.stringToTerraform(this._id),
      ipv4_maskbits: cdktf.stringToTerraform(this._ipv4Maskbits),
      ipv6_maskbits: cdktf.stringToTerraform(this._ipv6Maskbits),
      iso8583_bitmap_relation: cdktf.stringToTerraform(this._iso8583BitmapRelation),
      keyvalue_relation: cdktf.stringToTerraform(this._keyvalueRelation),
      keyword: cdktf.stringToTerraform(this._keyword),
      match_across_servers: cdktf.stringToTerraform(this._matchAcrossServers),
      mkey: cdktf.stringToTerraform(this._mkey),
      override_connection_limit: cdktf.stringToTerraform(this._overrideConnectionLimit),
      radius_attribute_relation: cdktf.stringToTerraform(this._radiusAttributeRelation),
      sess_kw_type: cdktf.stringToTerraform(this._sessKwType),
      timeout: cdktf.stringToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avpno: {
        value: cdktf.stringToHclTerraform(this._avpno),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_custom_attr: {
        value: cdktf.stringToHclTerraform(this._cookieCustomAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_custom_attr_val: {
        value: cdktf.stringToHclTerraform(this._cookieCustomAttrVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_domain: {
        value: cdktf.stringToHclTerraform(this._cookieDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_httponly: {
        value: cdktf.stringToHclTerraform(this._cookieHttponly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_samesite: {
        value: cdktf.stringToHclTerraform(this._cookieSamesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_secure: {
        value: cdktf.stringToHclTerraform(this._cookieSecure),
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
      ipv4_maskbits: {
        value: cdktf.stringToHclTerraform(this._ipv4Maskbits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_maskbits: {
        value: cdktf.stringToHclTerraform(this._ipv6Maskbits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iso8583_bitmap_relation: {
        value: cdktf.stringToHclTerraform(this._iso8583BitmapRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyvalue_relation: {
        value: cdktf.stringToHclTerraform(this._keyvalueRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_servers: {
        value: cdktf.stringToHclTerraform(this._matchAcrossServers),
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
      override_connection_limit: {
        value: cdktf.stringToHclTerraform(this._overrideConnectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_attribute_relation: {
        value: cdktf.stringToHclTerraform(this._radiusAttributeRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sess_kw_type: {
        value: cdktf.stringToHclTerraform(this._sessKwType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
