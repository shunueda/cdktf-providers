// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceIppoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#id LoadBalanceIppool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#interface LoadBalanceIppool#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#ip6_end LoadBalanceIppool#ip6_end}
  */
  readonly ip6End?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#ip6_start LoadBalanceIppool#ip6_start}
  */
  readonly ip6Start?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#ip_end LoadBalanceIppool#ip_end}
  */
  readonly ipEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#ip_start LoadBalanceIppool#ip_start}
  */
  readonly ipStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#mkey LoadBalanceIppool#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#pool_type LoadBalanceIppool#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#vdom LoadBalanceIppool#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool fortiadc_load_balance_ippool}
*/
export class LoadBalanceIppool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_ippool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceIppool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceIppool to import
  * @param importFromId The id of the existing LoadBalanceIppool that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceIppool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_ippool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_ippool fortiadc_load_balance_ippool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceIppoolConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceIppoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_ippool',
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
    this._interface = config.interface;
    this._ip6End = config.ip6End;
    this._ip6Start = config.ip6Start;
    this._ipEnd = config.ipEnd;
    this._ipStart = config.ipStart;
    this._mkey = config.mkey;
    this._poolType = config.poolType;
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

  // ip6_end - computed: true, optional: true, required: false
  private _ip6End?: string; 
  public get ip6End() {
    return this.getStringAttribute('ip6_end');
  }
  public set ip6End(value: string) {
    this._ip6End = value;
  }
  public resetIp6End() {
    this._ip6End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6EndInput() {
    return this._ip6End;
  }

  // ip6_start - computed: true, optional: true, required: false
  private _ip6Start?: string; 
  public get ip6Start() {
    return this.getStringAttribute('ip6_start');
  }
  public set ip6Start(value: string) {
    this._ip6Start = value;
  }
  public resetIp6Start() {
    this._ip6Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6StartInput() {
    return this._ip6Start;
  }

  // ip_end - computed: true, optional: true, required: false
  private _ipEnd?: string; 
  public get ipEnd() {
    return this.getStringAttribute('ip_end');
  }
  public set ipEnd(value: string) {
    this._ipEnd = value;
  }
  public resetIpEnd() {
    this._ipEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndInput() {
    return this._ipEnd;
  }

  // ip_start - computed: true, optional: true, required: false
  private _ipStart?: string; 
  public get ipStart() {
    return this.getStringAttribute('ip_start');
  }
  public set ipStart(value: string) {
    this._ipStart = value;
  }
  public resetIpStart() {
    this._ipStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStartInput() {
    return this._ipStart;
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
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip6_end: cdktf.stringToTerraform(this._ip6End),
      ip6_start: cdktf.stringToTerraform(this._ip6Start),
      ip_end: cdktf.stringToTerraform(this._ipEnd),
      ip_start: cdktf.stringToTerraform(this._ipStart),
      mkey: cdktf.stringToTerraform(this._mkey),
      pool_type: cdktf.stringToTerraform(this._poolType),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_end: {
        value: cdktf.stringToHclTerraform(this._ip6End),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_start: {
        value: cdktf.stringToHclTerraform(this._ip6Start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_end: {
        value: cdktf.stringToHclTerraform(this._ipEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_start: {
        value: cdktf.stringToHclTerraform(this._ipStart),
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
