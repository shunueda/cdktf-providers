// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceCachingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#id LoadBalanceCaching#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#max_age LoadBalanceCaching#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#max_cache_size LoadBalanceCaching#max_cache_size}
  */
  readonly maxCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#max_entries LoadBalanceCaching#max_entries}
  */
  readonly maxEntries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#max_object_size LoadBalanceCaching#max_object_size}
  */
  readonly maxObjectSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#mkey LoadBalanceCaching#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#vdom LoadBalanceCaching#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching fortiadc_load_balance_caching}
*/
export class LoadBalanceCaching extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_caching";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceCaching resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceCaching to import
  * @param importFromId The id of the existing LoadBalanceCaching that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceCaching to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_caching", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_caching fortiadc_load_balance_caching} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceCachingConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceCachingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_caching',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
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
    this._maxAge = config.maxAge;
    this._maxCacheSize = config.maxCacheSize;
    this._maxEntries = config.maxEntries;
    this._maxObjectSize = config.maxObjectSize;
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_cache_size - computed: true, optional: true, required: false
  private _maxCacheSize?: string; 
  public get maxCacheSize() {
    return this.getStringAttribute('max_cache_size');
  }
  public set maxCacheSize(value: string) {
    this._maxCacheSize = value;
  }
  public resetMaxCacheSize() {
    this._maxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheSizeInput() {
    return this._maxCacheSize;
  }

  // max_entries - computed: true, optional: true, required: false
  private _maxEntries?: string; 
  public get maxEntries() {
    return this.getStringAttribute('max_entries');
  }
  public set maxEntries(value: string) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // max_object_size - computed: true, optional: true, required: false
  private _maxObjectSize?: string; 
  public get maxObjectSize() {
    return this.getStringAttribute('max_object_size');
  }
  public set maxObjectSize(value: string) {
    this._maxObjectSize = value;
  }
  public resetMaxObjectSize() {
    this._maxObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectSizeInput() {
    return this._maxObjectSize;
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
      max_age: cdktf.stringToTerraform(this._maxAge),
      max_cache_size: cdktf.stringToTerraform(this._maxCacheSize),
      max_entries: cdktf.stringToTerraform(this._maxEntries),
      max_object_size: cdktf.stringToTerraform(this._maxObjectSize),
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
      max_age: {
        value: cdktf.stringToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cache_size: {
        value: cdktf.stringToHclTerraform(this._maxCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_entries: {
        value: cdktf.stringToHclTerraform(this._maxEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_object_size: {
        value: cdktf.stringToHclTerraform(this._maxObjectSize),
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
