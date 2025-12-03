// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpUpnpInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#___path___ IpUpnpInterfaces#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#___unset___ IpUpnpInterfaces#___unset___}
  */
  readonly unset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#disabled IpUpnpInterfaces#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Allow specifying what public IP to use if the external interface has more than one IP available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#forced_ip IpUpnpInterfaces#forced_ip}
  */
  readonly forcedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#id IpUpnpInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name on which UPnP will be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#interface IpUpnpInterfaces#interface}
  */
  readonly interface: string;
  /**
  * UPnP interface type:
  *   * external - the interface a global IP address is assigned to
  *   * internal - router's local interface the clients are connected to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#type IpUpnpInterfaces#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces routeros_ip_upnp_interfaces}
*/
export class IpUpnpInterfaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_upnp_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpUpnpInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpUpnpInterfaces to import
  * @param importFromId The id of the existing IpUpnpInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpUpnpInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_upnp_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_upnp_interfaces routeros_ip_upnp_interfaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpUpnpInterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: IpUpnpInterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_upnp_interfaces',
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
    this._unset = config.unset;
    this._disabled = config.disabled;
    this._forcedIp = config.forcedIp;
    this._id = config.id;
    this._interface = config.interface;
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

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // forced_ip - computed: false, optional: true, required: false
  private _forcedIp?: string; 
  public get forcedIp() {
    return this.getStringAttribute('forced_ip');
  }
  public set forcedIp(value: string) {
    this._forcedIp = value;
  }
  public resetForcedIp() {
    this._forcedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedIpInput() {
    return this._forcedIp;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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
      ___unset___: cdktf.stringToTerraform(this._unset),
      disabled: cdktf.booleanToTerraform(this._disabled),
      forced_ip: cdktf.stringToTerraform(this._forcedIp),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
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
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
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
      forced_ip: {
        value: cdktf.stringToHclTerraform(this._forcedIp),
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
