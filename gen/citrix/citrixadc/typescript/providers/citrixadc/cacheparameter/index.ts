// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CacheparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#cacheevictionpolicy Cacheparameter#cacheevictionpolicy}
  */
  readonly cacheevictionpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#enablebypass Cacheparameter#enablebypass}
  */
  readonly enablebypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#enablehaobjpersist Cacheparameter#enablehaobjpersist}
  */
  readonly enablehaobjpersist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#id Cacheparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#maxpostlen Cacheparameter#maxpostlen}
  */
  readonly maxpostlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#memlimit Cacheparameter#memlimit}
  */
  readonly memlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#prefetchmaxpending Cacheparameter#prefetchmaxpending}
  */
  readonly prefetchmaxpending?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#undefaction Cacheparameter#undefaction}
  */
  readonly undefaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#verifyusing Cacheparameter#verifyusing}
  */
  readonly verifyusing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#via Cacheparameter#via}
  */
  readonly via?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter citrixadc_cacheparameter}
*/
export class Cacheparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cacheparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cacheparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cacheparameter to import
  * @param importFromId The id of the existing Cacheparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cacheparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cacheparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cacheparameter citrixadc_cacheparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CacheparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CacheparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cacheparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheevictionpolicy = config.cacheevictionpolicy;
    this._enablebypass = config.enablebypass;
    this._enablehaobjpersist = config.enablehaobjpersist;
    this._id = config.id;
    this._maxpostlen = config.maxpostlen;
    this._memlimit = config.memlimit;
    this._prefetchmaxpending = config.prefetchmaxpending;
    this._undefaction = config.undefaction;
    this._verifyusing = config.verifyusing;
    this._via = config.via;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacheevictionpolicy - computed: true, optional: true, required: false
  private _cacheevictionpolicy?: string; 
  public get cacheevictionpolicy() {
    return this.getStringAttribute('cacheevictionpolicy');
  }
  public set cacheevictionpolicy(value: string) {
    this._cacheevictionpolicy = value;
  }
  public resetCacheevictionpolicy() {
    this._cacheevictionpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheevictionpolicyInput() {
    return this._cacheevictionpolicy;
  }

  // enablebypass - computed: true, optional: true, required: false
  private _enablebypass?: string; 
  public get enablebypass() {
    return this.getStringAttribute('enablebypass');
  }
  public set enablebypass(value: string) {
    this._enablebypass = value;
  }
  public resetEnablebypass() {
    this._enablebypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebypassInput() {
    return this._enablebypass;
  }

  // enablehaobjpersist - computed: true, optional: true, required: false
  private _enablehaobjpersist?: string; 
  public get enablehaobjpersist() {
    return this.getStringAttribute('enablehaobjpersist');
  }
  public set enablehaobjpersist(value: string) {
    this._enablehaobjpersist = value;
  }
  public resetEnablehaobjpersist() {
    this._enablehaobjpersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablehaobjpersistInput() {
    return this._enablehaobjpersist;
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

  // maxpostlen - computed: true, optional: true, required: false
  private _maxpostlen?: number; 
  public get maxpostlen() {
    return this.getNumberAttribute('maxpostlen');
  }
  public set maxpostlen(value: number) {
    this._maxpostlen = value;
  }
  public resetMaxpostlen() {
    this._maxpostlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpostlenInput() {
    return this._maxpostlen;
  }

  // memlimit - computed: true, optional: true, required: false
  private _memlimit?: number; 
  public get memlimit() {
    return this.getNumberAttribute('memlimit');
  }
  public set memlimit(value: number) {
    this._memlimit = value;
  }
  public resetMemlimit() {
    this._memlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memlimitInput() {
    return this._memlimit;
  }

  // prefetchmaxpending - computed: true, optional: true, required: false
  private _prefetchmaxpending?: number; 
  public get prefetchmaxpending() {
    return this.getNumberAttribute('prefetchmaxpending');
  }
  public set prefetchmaxpending(value: number) {
    this._prefetchmaxpending = value;
  }
  public resetPrefetchmaxpending() {
    this._prefetchmaxpending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchmaxpendingInput() {
    return this._prefetchmaxpending;
  }

  // undefaction - computed: true, optional: true, required: false
  private _undefaction?: string; 
  public get undefaction() {
    return this.getStringAttribute('undefaction');
  }
  public set undefaction(value: string) {
    this._undefaction = value;
  }
  public resetUndefaction() {
    this._undefaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactionInput() {
    return this._undefaction;
  }

  // verifyusing - computed: true, optional: true, required: false
  private _verifyusing?: string; 
  public get verifyusing() {
    return this.getStringAttribute('verifyusing');
  }
  public set verifyusing(value: string) {
    this._verifyusing = value;
  }
  public resetVerifyusing() {
    this._verifyusing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyusingInput() {
    return this._verifyusing;
  }

  // via - computed: true, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacheevictionpolicy: cdktf.stringToTerraform(this._cacheevictionpolicy),
      enablebypass: cdktf.stringToTerraform(this._enablebypass),
      enablehaobjpersist: cdktf.stringToTerraform(this._enablehaobjpersist),
      id: cdktf.stringToTerraform(this._id),
      maxpostlen: cdktf.numberToTerraform(this._maxpostlen),
      memlimit: cdktf.numberToTerraform(this._memlimit),
      prefetchmaxpending: cdktf.numberToTerraform(this._prefetchmaxpending),
      undefaction: cdktf.stringToTerraform(this._undefaction),
      verifyusing: cdktf.stringToTerraform(this._verifyusing),
      via: cdktf.stringToTerraform(this._via),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacheevictionpolicy: {
        value: cdktf.stringToHclTerraform(this._cacheevictionpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablebypass: {
        value: cdktf.stringToHclTerraform(this._enablebypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablehaobjpersist: {
        value: cdktf.stringToHclTerraform(this._enablehaobjpersist),
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
      maxpostlen: {
        value: cdktf.numberToHclTerraform(this._maxpostlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memlimit: {
        value: cdktf.numberToHclTerraform(this._memlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefetchmaxpending: {
        value: cdktf.numberToHclTerraform(this._prefetchmaxpending),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      undefaction: {
        value: cdktf.stringToHclTerraform(this._undefaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifyusing: {
        value: cdktf.stringToHclTerraform(this._verifyusing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via: {
        value: cdktf.stringToHclTerraform(this._via),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
