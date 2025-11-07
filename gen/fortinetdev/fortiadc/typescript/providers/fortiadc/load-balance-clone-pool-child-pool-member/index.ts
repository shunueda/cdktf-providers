// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceClonePoolChildPoolMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#address LoadBalanceClonePoolChildPoolMember#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#dst_mac LoadBalanceClonePoolChildPoolMember#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#id LoadBalanceClonePoolChildPoolMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#interface LoadBalanceClonePoolChildPoolMember#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#mkey LoadBalanceClonePoolChildPoolMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#mode LoadBalanceClonePoolChildPoolMember#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#pkey LoadBalanceClonePoolChildPoolMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#port LoadBalanceClonePoolChildPoolMember#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#src_mac LoadBalanceClonePoolChildPoolMember#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#vdom LoadBalanceClonePoolChildPoolMember#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member fortiadc_load_balance_clone_pool_child_pool_member}
*/
export class LoadBalanceClonePoolChildPoolMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_clone_pool_child_pool_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceClonePoolChildPoolMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceClonePoolChildPoolMember to import
  * @param importFromId The id of the existing LoadBalanceClonePoolChildPoolMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceClonePoolChildPoolMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_clone_pool_child_pool_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_clone_pool_child_pool_member fortiadc_load_balance_clone_pool_child_pool_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceClonePoolChildPoolMemberConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceClonePoolChildPoolMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_clone_pool_child_pool_member',
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
    this._address = config.address;
    this._dstMac = config.dstMac;
    this._id = config.id;
    this._interface = config.interface;
    this._mkey = config.mkey;
    this._mode = config.mode;
    this._pkey = config.pkey;
    this._port = config.port;
    this._srcMac = config.srcMac;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dst_mac - computed: true, optional: true, required: false
  private _dstMac?: string; 
  public get dstMac() {
    return this.getStringAttribute('dst_mac');
  }
  public set dstMac(value: string) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // src_mac - computed: true, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
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
      address: cdktf.stringToTerraform(this._address),
      dst_mac: cdktf.stringToTerraform(this._dstMac),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      mkey: cdktf.stringToTerraform(this._mkey),
      mode: cdktf.stringToTerraform(this._mode),
      pkey: cdktf.stringToTerraform(this._pkey),
      port: cdktf.stringToTerraform(this._port),
      src_mac: cdktf.stringToTerraform(this._srcMac),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac: {
        value: cdktf.stringToHclTerraform(this._dstMac),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac: {
        value: cdktf.stringToHclTerraform(this._srcMac),
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
