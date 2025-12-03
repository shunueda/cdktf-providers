// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchPortIsolationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#___path___ InterfaceEthernetSwitchPortIsolation#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#___skip___ InterfaceEthernetSwitchPortIsolation#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#___unset___ InterfaceEthernetSwitchPortIsolation#___unset___}
  */
  readonly unset?: string;
  /**
  * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them with a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#forwarding_override InterfaceEthernetSwitchPortIsolation#forwarding_override}
  */
  readonly forwardingOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#id InterfaceEthernetSwitchPortIsolation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#name InterfaceEthernetSwitchPortIsolation#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation routeros_interface_ethernet_switch_port_isolation}
*/
export class InterfaceEthernetSwitchPortIsolation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_port_isolation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchPortIsolation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchPortIsolation to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchPortIsolation that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchPortIsolation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_port_isolation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port_isolation routeros_interface_ethernet_switch_port_isolation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchPortIsolationConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchPortIsolationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_port_isolation',
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
    this._skip = config.skip;
    this._unset = config.unset;
    this._forwardingOverride = config.forwardingOverride;
    this._id = config.id;
    this._name = config.name;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // forwarding_override - computed: false, optional: true, required: false
  private _forwardingOverride?: string; 
  public get forwardingOverride() {
    return this.getStringAttribute('forwarding_override');
  }
  public set forwardingOverride(value: string) {
    this._forwardingOverride = value;
  }
  public resetForwardingOverride() {
    this._forwardingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingOverrideInput() {
    return this._forwardingOverride;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      ___unset___: cdktf.stringToTerraform(this._unset),
      forwarding_override: cdktf.stringToTerraform(this._forwardingOverride),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
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
      forwarding_override: {
        value: cdktf.stringToHclTerraform(this._forwardingOverride),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
