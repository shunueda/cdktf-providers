// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLoadBalanceVirtualServerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#alternate GlobalLoadBalanceVirtualServerPool#alternate}
  */
  readonly alternate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#alternate_cmr GlobalLoadBalanceVirtualServerPool#alternate_cmr}
  */
  readonly alternateCmr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#check_server_status GlobalLoadBalanceVirtualServerPool#check_server_status}
  */
  readonly checkServerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#check_virtual_server_existent GlobalLoadBalanceVirtualServerPool#check_virtual_server_existent}
  */
  readonly checkVirtualServerExistent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#id GlobalLoadBalanceVirtualServerPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#load_balance_method GlobalLoadBalanceVirtualServerPool#load_balance_method}
  */
  readonly loadBalanceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#mkey GlobalLoadBalanceVirtualServerPool#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#preferred GlobalLoadBalanceVirtualServerPool#preferred}
  */
  readonly preferred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#preferred_cmr GlobalLoadBalanceVirtualServerPool#preferred_cmr}
  */
  readonly preferredCmr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#vdom GlobalLoadBalanceVirtualServerPool#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool fortiadc_global_load_balance_virtual_server_pool}
*/
export class GlobalLoadBalanceVirtualServerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_load_balance_virtual_server_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLoadBalanceVirtualServerPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLoadBalanceVirtualServerPool to import
  * @param importFromId The id of the existing GlobalLoadBalanceVirtualServerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLoadBalanceVirtualServerPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_load_balance_virtual_server_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_virtual_server_pool fortiadc_global_load_balance_virtual_server_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLoadBalanceVirtualServerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLoadBalanceVirtualServerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_load_balance_virtual_server_pool',
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
    this._alternate = config.alternate;
    this._alternateCmr = config.alternateCmr;
    this._checkServerStatus = config.checkServerStatus;
    this._checkVirtualServerExistent = config.checkVirtualServerExistent;
    this._id = config.id;
    this._loadBalanceMethod = config.loadBalanceMethod;
    this._mkey = config.mkey;
    this._preferred = config.preferred;
    this._preferredCmr = config.preferredCmr;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate - computed: true, optional: true, required: false
  private _alternate?: string; 
  public get alternate() {
    return this.getStringAttribute('alternate');
  }
  public set alternate(value: string) {
    this._alternate = value;
  }
  public resetAlternate() {
    this._alternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateInput() {
    return this._alternate;
  }

  // alternate_cmr - computed: true, optional: true, required: false
  private _alternateCmr?: string; 
  public get alternateCmr() {
    return this.getStringAttribute('alternate_cmr');
  }
  public set alternateCmr(value: string) {
    this._alternateCmr = value;
  }
  public resetAlternateCmr() {
    this._alternateCmr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateCmrInput() {
    return this._alternateCmr;
  }

  // check_server_status - computed: true, optional: true, required: false
  private _checkServerStatus?: string; 
  public get checkServerStatus() {
    return this.getStringAttribute('check_server_status');
  }
  public set checkServerStatus(value: string) {
    this._checkServerStatus = value;
  }
  public resetCheckServerStatus() {
    this._checkServerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkServerStatusInput() {
    return this._checkServerStatus;
  }

  // check_virtual_server_existent - computed: true, optional: true, required: false
  private _checkVirtualServerExistent?: string; 
  public get checkVirtualServerExistent() {
    return this.getStringAttribute('check_virtual_server_existent');
  }
  public set checkVirtualServerExistent(value: string) {
    this._checkVirtualServerExistent = value;
  }
  public resetCheckVirtualServerExistent() {
    this._checkVirtualServerExistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkVirtualServerExistentInput() {
    return this._checkVirtualServerExistent;
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

  // load_balance_method - computed: true, optional: true, required: false
  private _loadBalanceMethod?: string; 
  public get loadBalanceMethod() {
    return this.getStringAttribute('load_balance_method');
  }
  public set loadBalanceMethod(value: string) {
    this._loadBalanceMethod = value;
  }
  public resetLoadBalanceMethod() {
    this._loadBalanceMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceMethodInput() {
    return this._loadBalanceMethod;
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

  // preferred - computed: true, optional: true, required: false
  private _preferred?: string; 
  public get preferred() {
    return this.getStringAttribute('preferred');
  }
  public set preferred(value: string) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // preferred_cmr - computed: true, optional: true, required: false
  private _preferredCmr?: string; 
  public get preferredCmr() {
    return this.getStringAttribute('preferred_cmr');
  }
  public set preferredCmr(value: string) {
    this._preferredCmr = value;
  }
  public resetPreferredCmr() {
    this._preferredCmr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCmrInput() {
    return this._preferredCmr;
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
      alternate: cdktf.stringToTerraform(this._alternate),
      alternate_cmr: cdktf.stringToTerraform(this._alternateCmr),
      check_server_status: cdktf.stringToTerraform(this._checkServerStatus),
      check_virtual_server_existent: cdktf.stringToTerraform(this._checkVirtualServerExistent),
      id: cdktf.stringToTerraform(this._id),
      load_balance_method: cdktf.stringToTerraform(this._loadBalanceMethod),
      mkey: cdktf.stringToTerraform(this._mkey),
      preferred: cdktf.stringToTerraform(this._preferred),
      preferred_cmr: cdktf.stringToTerraform(this._preferredCmr),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate: {
        value: cdktf.stringToHclTerraform(this._alternate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alternate_cmr: {
        value: cdktf.stringToHclTerraform(this._alternateCmr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_server_status: {
        value: cdktf.stringToHclTerraform(this._checkServerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_virtual_server_existent: {
        value: cdktf.stringToHclTerraform(this._checkVirtualServerExistent),
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
      load_balance_method: {
        value: cdktf.stringToHclTerraform(this._loadBalanceMethod),
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
      preferred: {
        value: cdktf.stringToHclTerraform(this._preferred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_cmr: {
        value: cdktf.stringToHclTerraform(this._preferredCmr),
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
