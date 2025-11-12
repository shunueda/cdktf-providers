// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePagespeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#file_cache_max_inode LoadBalancePagespeed#file_cache_max_inode}
  */
  readonly fileCacheMaxInode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#file_cache_max_size LoadBalancePagespeed#file_cache_max_size}
  */
  readonly fileCacheMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#id LoadBalancePagespeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#mkey LoadBalancePagespeed#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#pagespeed_profile_id LoadBalancePagespeed#pagespeed_profile_id}
  */
  readonly pagespeedProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#vdom LoadBalancePagespeed#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed fortiadc_load_balance_pagespeed}
*/
export class LoadBalancePagespeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pagespeed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePagespeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePagespeed to import
  * @param importFromId The id of the existing LoadBalancePagespeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePagespeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pagespeed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pagespeed fortiadc_load_balance_pagespeed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePagespeedConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePagespeedConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_pagespeed',
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
    this._fileCacheMaxInode = config.fileCacheMaxInode;
    this._fileCacheMaxSize = config.fileCacheMaxSize;
    this._id = config.id;
    this._mkey = config.mkey;
    this._pagespeedProfileId = config.pagespeedProfileId;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_cache_max_inode - computed: true, optional: true, required: false
  private _fileCacheMaxInode?: string; 
  public get fileCacheMaxInode() {
    return this.getStringAttribute('file_cache_max_inode');
  }
  public set fileCacheMaxInode(value: string) {
    this._fileCacheMaxInode = value;
  }
  public resetFileCacheMaxInode() {
    this._fileCacheMaxInode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCacheMaxInodeInput() {
    return this._fileCacheMaxInode;
  }

  // file_cache_max_size - computed: true, optional: true, required: false
  private _fileCacheMaxSize?: string; 
  public get fileCacheMaxSize() {
    return this.getStringAttribute('file_cache_max_size');
  }
  public set fileCacheMaxSize(value: string) {
    this._fileCacheMaxSize = value;
  }
  public resetFileCacheMaxSize() {
    this._fileCacheMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCacheMaxSizeInput() {
    return this._fileCacheMaxSize;
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

  // pagespeed_profile_id - computed: true, optional: true, required: false
  private _pagespeedProfileId?: string; 
  public get pagespeedProfileId() {
    return this.getStringAttribute('pagespeed_profile_id');
  }
  public set pagespeedProfileId(value: string) {
    this._pagespeedProfileId = value;
  }
  public resetPagespeedProfileId() {
    this._pagespeedProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagespeedProfileIdInput() {
    return this._pagespeedProfileId;
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
      file_cache_max_inode: cdktf.stringToTerraform(this._fileCacheMaxInode),
      file_cache_max_size: cdktf.stringToTerraform(this._fileCacheMaxSize),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pagespeed_profile_id: cdktf.stringToTerraform(this._pagespeedProfileId),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_cache_max_inode: {
        value: cdktf.stringToHclTerraform(this._fileCacheMaxInode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_cache_max_size: {
        value: cdktf.stringToHclTerraform(this._fileCacheMaxSize),
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
      pagespeed_profile_id: {
        value: cdktf.stringToHclTerraform(this._pagespeedProfileId),
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
