// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspf6Ospf6InterfaceIpseckeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#auth_key RouterOspf6Ospf6InterfaceIpseckeys#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#device_name RouterOspf6Ospf6InterfaceIpseckeys#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#device_vdom RouterOspf6Ospf6InterfaceIpseckeys#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#enc_key RouterOspf6Ospf6InterfaceIpseckeys#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#id RouterOspf6Ospf6InterfaceIpseckeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#ospf6_interface RouterOspf6Ospf6InterfaceIpseckeys#ospf6_interface}
  */
  readonly ospf6Interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#spi RouterOspf6Ospf6InterfaceIpseckeys#spi}
  */
  readonly spi?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys fmgdevice_router_ospf6_ospf6interface_ipseckeys}
*/
export class RouterOspf6Ospf6InterfaceIpseckeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ospf6_ospf6interface_ipseckeys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf6Ospf6InterfaceIpseckeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf6Ospf6InterfaceIpseckeys to import
  * @param importFromId The id of the existing RouterOspf6Ospf6InterfaceIpseckeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf6Ospf6InterfaceIpseckeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ospf6_ospf6interface_ipseckeys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface_ipseckeys fmgdevice_router_ospf6_ospf6interface_ipseckeys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspf6Ospf6InterfaceIpseckeysConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspf6Ospf6InterfaceIpseckeysConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ospf6_ospf6interface_ipseckeys',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKey = config.authKey;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._encKey = config.encKey;
    this._id = config.id;
    this._ospf6Interface = config.ospf6Interface;
    this._spi = config.spi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string[]; 
  public get authKey() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_key'));
  }
  public set authKey(value: string[]) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // enc_key - computed: true, optional: true, required: false
  private _encKey?: string[]; 
  public get encKey() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_key'));
  }
  public set encKey(value: string[]) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
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

  // ospf6_interface - computed: false, optional: false, required: true
  private _ospf6Interface?: string; 
  public get ospf6Interface() {
    return this.getStringAttribute('ospf6_interface');
  }
  public set ospf6Interface(value: string) {
    this._ospf6Interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6InterfaceInput() {
    return this._ospf6Interface;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKey),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      enc_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encKey),
      id: cdktf.stringToTerraform(this._id),
      ospf6_interface: cdktf.stringToTerraform(this._ospf6Interface),
      spi: cdktf.numberToTerraform(this._spi),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6_interface: {
        value: cdktf.stringToHclTerraform(this._ospf6Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spi: {
        value: cdktf.numberToHclTerraform(this._spi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
