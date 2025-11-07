// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfChildOspfInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#authentication RouterOspfChildOspfInterface#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#cost RouterOspfChildOspfInterface#cost}
  */
  readonly cost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#dead_interval RouterOspfChildOspfInterface#dead_interval}
  */
  readonly deadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#hello_interval RouterOspfChildOspfInterface#hello_interval}
  */
  readonly helloInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#id RouterOspfChildOspfInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#interface RouterOspfChildOspfInterface#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#md5 RouterOspfChildOspfInterface#md5}
  */
  readonly md5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#mkey RouterOspfChildOspfInterface#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#mtu_ignore RouterOspfChildOspfInterface#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#network_type RouterOspfChildOspfInterface#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#priority RouterOspfChildOspfInterface#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#retransmit_interval RouterOspfChildOspfInterface#retransmit_interval}
  */
  readonly retransmitInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#text RouterOspfChildOspfInterface#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#transmit_delay RouterOspfChildOspfInterface#transmit_delay}
  */
  readonly transmitDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#vdom RouterOspfChildOspfInterface#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface fortiadc_router_ospf_child_ospf_interface}
*/
export class RouterOspfChildOspfInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_ospf_child_ospf_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfChildOspfInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfChildOspfInterface to import
  * @param importFromId The id of the existing RouterOspfChildOspfInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfChildOspfInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_ospf_child_ospf_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_ospf_child_ospf_interface fortiadc_router_ospf_child_ospf_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfChildOspfInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfChildOspfInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_router_ospf_child_ospf_interface',
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
    this._authentication = config.authentication;
    this._cost = config.cost;
    this._deadInterval = config.deadInterval;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._interface = config.interface;
    this._md5 = config.md5;
    this._mkey = config.mkey;
    this._mtuIgnore = config.mtuIgnore;
    this._networkType = config.networkType;
    this._priority = config.priority;
    this._retransmitInterval = config.retransmitInterval;
    this._text = config.text;
    this._transmitDelay = config.transmitDelay;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: string; 
  public get cost() {
    return this.getStringAttribute('cost');
  }
  public set cost(value: string) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: true, optional: true, required: false
  private _deadInterval?: string; 
  public get deadInterval() {
    return this.getStringAttribute('dead_interval');
  }
  public set deadInterval(value: string) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: string; 
  public get helloInterval() {
    return this.getStringAttribute('hello_interval');
  }
  public set helloInterval(value: string) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // md5 - computed: true, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
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

  // mtu_ignore - computed: true, optional: true, required: false
  private _mtuIgnore?: string; 
  public get mtuIgnore() {
    return this.getStringAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: string) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: string; 
  public get retransmitInterval() {
    return this.getStringAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: string) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: string; 
  public get transmitDelay() {
    return this.getStringAttribute('transmit_delay');
  }
  public set transmitDelay(value: string) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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
      authentication: cdktf.stringToTerraform(this._authentication),
      cost: cdktf.stringToTerraform(this._cost),
      dead_interval: cdktf.stringToTerraform(this._deadInterval),
      hello_interval: cdktf.stringToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      md5: cdktf.stringToTerraform(this._md5),
      mkey: cdktf.stringToTerraform(this._mkey),
      mtu_ignore: cdktf.stringToTerraform(this._mtuIgnore),
      network_type: cdktf.stringToTerraform(this._networkType),
      priority: cdktf.stringToTerraform(this._priority),
      retransmit_interval: cdktf.stringToTerraform(this._retransmitInterval),
      text: cdktf.stringToTerraform(this._text),
      transmit_delay: cdktf.stringToTerraform(this._transmitDelay),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.stringToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_interval: {
        value: cdktf.stringToHclTerraform(this._deadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.stringToHclTerraform(this._helloInterval),
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
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
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
      mtu_ignore: {
        value: cdktf.stringToHclTerraform(this._mtuIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retransmit_interval: {
        value: cdktf.stringToHclTerraform(this._retransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_delay: {
        value: cdktf.stringToHclTerraform(this._transmitDelay),
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
