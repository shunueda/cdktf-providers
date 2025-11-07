// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20AnqpipaddresstypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#adom ObjectWirelesscontrollerHotspot20Anqpipaddresstype#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#id ObjectWirelesscontrollerHotspot20Anqpipaddresstype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#ipv4_address_type ObjectWirelesscontrollerHotspot20Anqpipaddresstype#ipv4_address_type}
  */
  readonly ipv4AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#ipv6_address_type ObjectWirelesscontrollerHotspot20Anqpipaddresstype#ipv6_address_type}
  */
  readonly ipv6AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#name ObjectWirelesscontrollerHotspot20Anqpipaddresstype#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#scopetype ObjectWirelesscontrollerHotspot20Anqpipaddresstype#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype fortimanager_object_wirelesscontroller_hotspot20_anqpipaddresstype}
*/
export class ObjectWirelesscontrollerHotspot20Anqpipaddresstype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_anqpipaddresstype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20Anqpipaddresstype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20Anqpipaddresstype to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20Anqpipaddresstype that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20Anqpipaddresstype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_anqpipaddresstype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_hotspot20_anqpipaddresstype fortimanager_object_wirelesscontroller_hotspot20_anqpipaddresstype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20AnqpipaddresstypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20AnqpipaddresstypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_anqpipaddresstype',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._ipv4AddressType = config.ipv4AddressType;
    this._ipv6AddressType = config.ipv6AddressType;
    this._name = config.name;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // ipv4_address_type - computed: true, optional: true, required: false
  private _ipv4AddressType?: string; 
  public get ipv4AddressType() {
    return this.getStringAttribute('ipv4_address_type');
  }
  public set ipv4AddressType(value: string) {
    this._ipv4AddressType = value;
  }
  public resetIpv4AddressType() {
    this._ipv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressTypeInput() {
    return this._ipv4AddressType;
  }

  // ipv6_address_type - computed: true, optional: true, required: false
  private _ipv6AddressType?: string; 
  public get ipv6AddressType() {
    return this.getStringAttribute('ipv6_address_type');
  }
  public set ipv6AddressType(value: string) {
    this._ipv6AddressType = value;
  }
  public resetIpv6AddressType() {
    this._ipv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressTypeInput() {
    return this._ipv6AddressType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address_type: cdktf.stringToTerraform(this._ipv4AddressType),
      ipv6_address_type: cdktf.stringToTerraform(this._ipv6AddressType),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      ipv4_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
