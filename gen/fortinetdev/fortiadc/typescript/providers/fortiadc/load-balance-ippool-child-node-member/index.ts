// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceIppoolChildNodeMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#ha_node_num LoadBalanceIppoolChildNodeMember#ha_node_num}
  */
  readonly haNodeNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#id LoadBalanceIppoolChildNodeMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#interface LoadBalanceIppoolChildNodeMember#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#ip6_max LoadBalanceIppoolChildNodeMember#ip6_max}
  */
  readonly ip6Max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#ip6_min LoadBalanceIppoolChildNodeMember#ip6_min}
  */
  readonly ip6Min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#ip_max LoadBalanceIppoolChildNodeMember#ip_max}
  */
  readonly ipMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#ip_min LoadBalanceIppoolChildNodeMember#ip_min}
  */
  readonly ipMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#mkey LoadBalanceIppoolChildNodeMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#pkey LoadBalanceIppoolChildNodeMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#pool_type LoadBalanceIppoolChildNodeMember#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#vdom LoadBalanceIppoolChildNodeMember#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member fortiadc_load_balance_ippool_child_node_member}
*/
export class LoadBalanceIppoolChildNodeMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_ippool_child_node_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceIppoolChildNodeMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceIppoolChildNodeMember to import
  * @param importFromId The id of the existing LoadBalanceIppoolChildNodeMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceIppoolChildNodeMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_ippool_child_node_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool_child_node_member fortiadc_load_balance_ippool_child_node_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceIppoolChildNodeMemberConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceIppoolChildNodeMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_ippool_child_node_member',
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
    this._haNodeNum = config.haNodeNum;
    this._id = config.id;
    this._interface = config.interface;
    this._ip6Max = config.ip6Max;
    this._ip6Min = config.ip6Min;
    this._ipMax = config.ipMax;
    this._ipMin = config.ipMin;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._poolType = config.poolType;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ha_node_num - computed: true, optional: true, required: false
  private _haNodeNum?: string; 
  public get haNodeNum() {
    return this.getStringAttribute('ha_node_num');
  }
  public set haNodeNum(value: string) {
    this._haNodeNum = value;
  }
  public resetHaNodeNum() {
    this._haNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNodeNumInput() {
    return this._haNodeNum;
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

  // ip6_max - computed: true, optional: true, required: false
  private _ip6Max?: string; 
  public get ip6Max() {
    return this.getStringAttribute('ip6_max');
  }
  public set ip6Max(value: string) {
    this._ip6Max = value;
  }
  public resetIp6Max() {
    this._ip6Max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxInput() {
    return this._ip6Max;
  }

  // ip6_min - computed: true, optional: true, required: false
  private _ip6Min?: string; 
  public get ip6Min() {
    return this.getStringAttribute('ip6_min');
  }
  public set ip6Min(value: string) {
    this._ip6Min = value;
  }
  public resetIp6Min() {
    this._ip6Min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinInput() {
    return this._ip6Min;
  }

  // ip_max - computed: true, optional: true, required: false
  private _ipMax?: string; 
  public get ipMax() {
    return this.getStringAttribute('ip_max');
  }
  public set ipMax(value: string) {
    this._ipMax = value;
  }
  public resetIpMax() {
    this._ipMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaxInput() {
    return this._ipMax;
  }

  // ip_min - computed: true, optional: true, required: false
  private _ipMin?: string; 
  public get ipMin() {
    return this.getStringAttribute('ip_min');
  }
  public set ipMin(value: string) {
    this._ipMin = value;
  }
  public resetIpMin() {
    this._ipMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMinInput() {
    return this._ipMin;
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

  // pool_type - computed: true, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
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
      ha_node_num: cdktf.stringToTerraform(this._haNodeNum),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip6_max: cdktf.stringToTerraform(this._ip6Max),
      ip6_min: cdktf.stringToTerraform(this._ip6Min),
      ip_max: cdktf.stringToTerraform(this._ipMax),
      ip_min: cdktf.stringToTerraform(this._ipMin),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      pool_type: cdktf.stringToTerraform(this._poolType),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ha_node_num: {
        value: cdktf.stringToHclTerraform(this._haNodeNum),
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
      ip6_max: {
        value: cdktf.stringToHclTerraform(this._ip6Max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_min: {
        value: cdktf.stringToHclTerraform(this._ip6Min),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_max: {
        value: cdktf.stringToHclTerraform(this._ipMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_min: {
        value: cdktf.stringToHclTerraform(this._ipMin),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
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
