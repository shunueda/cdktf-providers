// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalancePersistenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence#id DataFortiadcLoadBalancePersistence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence#mkey DataFortiadcLoadBalancePersistence#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence#vdom DataFortiadcLoadBalancePersistence#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence fortiadc_load_balance_persistence}
*/
export class DataFortiadcLoadBalancePersistence extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_persistence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalancePersistence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalancePersistence to import
  * @param importFromId The id of the existing DataFortiadcLoadBalancePersistence that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalancePersistence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_persistence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_persistence fortiadc_load_balance_persistence} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalancePersistenceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalancePersistenceConfig) {
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
    this._id = config.id;
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avpno - computed: true, optional: false, required: false
  public get avpno() {
    return this.getStringAttribute('avpno');
  }

  // cookie_custom_attr - computed: true, optional: false, required: false
  public get cookieCustomAttr() {
    return this.getStringAttribute('cookie_custom_attr');
  }

  // cookie_custom_attr_val - computed: true, optional: false, required: false
  public get cookieCustomAttrVal() {
    return this.getStringAttribute('cookie_custom_attr_val');
  }

  // cookie_domain - computed: true, optional: false, required: false
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }

  // cookie_httponly - computed: true, optional: false, required: false
  public get cookieHttponly() {
    return this.getStringAttribute('cookie_httponly');
  }

  // cookie_samesite - computed: true, optional: false, required: false
  public get cookieSamesite() {
    return this.getStringAttribute('cookie_samesite');
  }

  // cookie_secure - computed: true, optional: false, required: false
  public get cookieSecure() {
    return this.getStringAttribute('cookie_secure');
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

  // ipv4_maskbits - computed: true, optional: false, required: false
  public get ipv4Maskbits() {
    return this.getStringAttribute('ipv4_maskbits');
  }

  // ipv6_maskbits - computed: true, optional: false, required: false
  public get ipv6Maskbits() {
    return this.getStringAttribute('ipv6_maskbits');
  }

  // iso8583_bitmap_relation - computed: true, optional: false, required: false
  public get iso8583BitmapRelation() {
    return this.getStringAttribute('iso8583_bitmap_relation');
  }

  // keyvalue_relation - computed: true, optional: false, required: false
  public get keyvalueRelation() {
    return this.getStringAttribute('keyvalue_relation');
  }

  // keyword - computed: true, optional: false, required: false
  public get keyword() {
    return this.getStringAttribute('keyword');
  }

  // match_across_servers - computed: true, optional: false, required: false
  public get matchAcrossServers() {
    return this.getStringAttribute('match_across_servers');
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

  // override_connection_limit - computed: true, optional: false, required: false
  public get overrideConnectionLimit() {
    return this.getStringAttribute('override_connection_limit');
  }

  // radius_attribute_relation - computed: true, optional: false, required: false
  public get radiusAttributeRelation() {
    return this.getStringAttribute('radius_attribute_relation');
  }

  // sess_kw_type - computed: true, optional: false, required: false
  public get sessKwType() {
    return this.getStringAttribute('sess_kw_type');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
