// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpHotspotIpBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#___path___ IpHotspotIpBinding#___path___}
  */
  readonly path?: string;
  /**
  * The original IP address of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#address IpHotspotIpBinding#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#comment IpHotspotIpBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#disabled IpHotspotIpBinding#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#id IpHotspotIpBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC address of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#mac_address IpHotspotIpBinding#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#server IpHotspotIpBinding#server}
  */
  readonly server?: string;
  /**
  * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#to_address IpHotspotIpBinding#to_address}
  */
  readonly toAddress?: string;
  /**
  * Type of the IP-binding action
  *   * regular - performs One-to-One NAT according to the rule, translates the address to to-address;
  *   * bypassed - performs the translation, but excludes client from login to the HotSpot;
  *   * blocked - translation is not performed and packets from a host are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#type IpHotspotIpBinding#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding routeros_ip_hotspot_ip_binding}
*/
export class IpHotspotIpBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_hotspot_ip_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpHotspotIpBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpHotspotIpBinding to import
  * @param importFromId The id of the existing IpHotspotIpBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpHotspotIpBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_hotspot_ip_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_hotspot_ip_binding routeros_ip_hotspot_ip_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpHotspotIpBindingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpHotspotIpBindingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_hotspot_ip_binding',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._address = config.address;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._server = config.server;
    this._toAddress = config.toAddress;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // address - computed: false, optional: true, required: false
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // to_address - computed: false, optional: true, required: false
  private _toAddress?: string; 
  public get toAddress() {
    return this.getStringAttribute('to_address');
  }
  public set toAddress(value: string) {
    this._toAddress = value;
  }
  public resetToAddress() {
    this._toAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toAddressInput() {
    return this._toAddress;
  }

  // type - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      server: cdktf.stringToTerraform(this._server),
      to_address: cdktf.stringToTerraform(this._toAddress),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_address: {
        value: cdktf.stringToHclTerraform(this._toAddress),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
