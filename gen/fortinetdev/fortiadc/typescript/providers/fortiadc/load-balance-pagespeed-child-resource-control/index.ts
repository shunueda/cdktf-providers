// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePagespeedChildResourceControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#fetch_domain LoadBalancePagespeedChildResourceControl#fetch_domain}
  */
  readonly fetchDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#id LoadBalancePagespeedChildResourceControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#mkey LoadBalancePagespeedChildResourceControl#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#origin_domain_pattern LoadBalancePagespeedChildResourceControl#origin_domain_pattern}
  */
  readonly originDomainPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#pkey LoadBalancePagespeedChildResourceControl#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#rewrite_domain LoadBalancePagespeedChildResourceControl#rewrite_domain}
  */
  readonly rewriteDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#vdom LoadBalancePagespeedChildResourceControl#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control fortiadc_load_balance_pagespeed_child_resource_control}
*/
export class LoadBalancePagespeedChildResourceControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pagespeed_child_resource_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePagespeedChildResourceControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePagespeedChildResourceControl to import
  * @param importFromId The id of the existing LoadBalancePagespeedChildResourceControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePagespeedChildResourceControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pagespeed_child_resource_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed_child_resource_control fortiadc_load_balance_pagespeed_child_resource_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePagespeedChildResourceControlConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePagespeedChildResourceControlConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_pagespeed_child_resource_control',
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
    this._fetchDomain = config.fetchDomain;
    this._id = config.id;
    this._mkey = config.mkey;
    this._originDomainPattern = config.originDomainPattern;
    this._pkey = config.pkey;
    this._rewriteDomain = config.rewriteDomain;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fetch_domain - computed: true, optional: true, required: false
  private _fetchDomain?: string; 
  public get fetchDomain() {
    return this.getStringAttribute('fetch_domain');
  }
  public set fetchDomain(value: string) {
    this._fetchDomain = value;
  }
  public resetFetchDomain() {
    this._fetchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchDomainInput() {
    return this._fetchDomain;
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

  // origin_domain_pattern - computed: true, optional: true, required: false
  private _originDomainPattern?: string; 
  public get originDomainPattern() {
    return this.getStringAttribute('origin_domain_pattern');
  }
  public set originDomainPattern(value: string) {
    this._originDomainPattern = value;
  }
  public resetOriginDomainPattern() {
    this._originDomainPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDomainPatternInput() {
    return this._originDomainPattern;
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
  }

  // rewrite_domain - computed: true, optional: true, required: false
  private _rewriteDomain?: string; 
  public get rewriteDomain() {
    return this.getStringAttribute('rewrite_domain');
  }
  public set rewriteDomain(value: string) {
    this._rewriteDomain = value;
  }
  public resetRewriteDomain() {
    this._rewriteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteDomainInput() {
    return this._rewriteDomain;
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
      fetch_domain: cdktf.stringToTerraform(this._fetchDomain),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      origin_domain_pattern: cdktf.stringToTerraform(this._originDomainPattern),
      pkey: cdktf.stringToTerraform(this._pkey),
      rewrite_domain: cdktf.stringToTerraform(this._rewriteDomain),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fetch_domain: {
        value: cdktf.stringToHclTerraform(this._fetchDomain),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_domain_pattern: {
        value: cdktf.stringToHclTerraform(this._originDomainPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_domain: {
        value: cdktf.stringToHclTerraform(this._rewriteDomain),
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
