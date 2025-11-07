// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAddress6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#id SystemAddress6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#ip6_max SystemAddress6#ip6_max}
  */
  readonly ip6Max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#ip6_min SystemAddress6#ip6_min}
  */
  readonly ip6Min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#ip6_network SystemAddress6#ip6_network}
  */
  readonly ip6Network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#mkey SystemAddress6#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#type SystemAddress6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#vdom SystemAddress6#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6 fortiadc_system_address6}
*/
export class SystemAddress6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_address6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAddress6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAddress6 to import
  * @param importFromId The id of the existing SystemAddress6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAddress6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_address6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_address6 fortiadc_system_address6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAddress6Config
  */
  public constructor(scope: Construct, id: string, config: SystemAddress6Config) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_address6',
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
    this._ip6Max = config.ip6Max;
    this._ip6Min = config.ip6Min;
    this._ip6Network = config.ip6Network;
    this._mkey = config.mkey;
    this._type = config.type;
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

  // ip6_network - computed: true, optional: true, required: false
  private _ip6Network?: string; 
  public get ip6Network() {
    return this.getStringAttribute('ip6_network');
  }
  public set ip6Network(value: string) {
    this._ip6Network = value;
  }
  public resetIp6Network() {
    this._ip6Network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6NetworkInput() {
    return this._ip6Network;
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
      id: cdktf.stringToTerraform(this._id),
      ip6_max: cdktf.stringToTerraform(this._ip6Max),
      ip6_min: cdktf.stringToTerraform(this._ip6Min),
      ip6_network: cdktf.stringToTerraform(this._ip6Network),
      mkey: cdktf.stringToTerraform(this._mkey),
      type: cdktf.stringToTerraform(this._type),
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
      ip6_network: {
        value: cdktf.stringToHclTerraform(this._ip6Network),
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
