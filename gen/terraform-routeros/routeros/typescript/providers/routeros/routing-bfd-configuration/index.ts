// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingBfdConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#___path___ RoutingBfdConfiguration#___path___}
  */
  readonly path?: string;
  /**
  * Name of the address list in which users IP address will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#address_list RoutingBfdConfiguration#address_list}
  */
  readonly addressList?: string;
  /**
  * Set of IP (v4 or v6) addresses or CIDR networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#addresses RoutingBfdConfiguration#addresses}
  */
  readonly addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#disabled RoutingBfdConfiguration#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#forbid_bfd RoutingBfdConfiguration#forbid_bfd}
  */
  readonly forbidBfd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#id RoutingBfdConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#interfaces RoutingBfdConfiguration#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#min_rx RoutingBfdConfiguration#min_rx}
  */
  readonly minRx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#min_tx RoutingBfdConfiguration#min_tx}
  */
  readonly minTx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#multiplier RoutingBfdConfiguration#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#vrf RoutingBfdConfiguration#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration routeros_routing_bfd_configuration}
*/
export class RoutingBfdConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_bfd_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingBfdConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingBfdConfiguration to import
  * @param importFromId The id of the existing RoutingBfdConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingBfdConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_bfd_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/routing_bfd_configuration routeros_routing_bfd_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingBfdConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RoutingBfdConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_bfd_configuration',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._addressList = config.addressList;
    this._addresses = config.addresses;
    this._disabled = config.disabled;
    this._forbidBfd = config.forbidBfd;
    this._id = config.id;
    this._interfaces = config.interfaces;
    this._minRx = config.minRx;
    this._minTx = config.minTx;
    this._multiplier = config.multiplier;
    this._vrf = config.vrf;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string; 
  public get addressList() {
    return this.getStringAttribute('address_list');
  }
  public set addressList(value: string) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
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

  // forbid_bfd - computed: false, optional: true, required: false
  private _forbidBfd?: boolean | cdktf.IResolvable; 
  public get forbidBfd() {
    return this.getBooleanAttribute('forbid_bfd');
  }
  public set forbidBfd(value: boolean | cdktf.IResolvable) {
    this._forbidBfd = value;
  }
  public resetForbidBfd() {
    this._forbidBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidBfdInput() {
    return this._forbidBfd;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('interfaces'));
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // min_rx - computed: false, optional: true, required: false
  private _minRx?: string; 
  public get minRx() {
    return this.getStringAttribute('min_rx');
  }
  public set minRx(value: string) {
    this._minRx = value;
  }
  public resetMinRx() {
    this._minRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxInput() {
    return this._minRx;
  }

  // min_tx - computed: false, optional: true, required: false
  private _minTx?: string; 
  public get minTx() {
    return this.getStringAttribute('min_tx');
  }
  public set minTx(value: string) {
    this._minTx = value;
  }
  public resetMinTx() {
    this._minTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxInput() {
    return this._minTx;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address_list: cdktf.stringToTerraform(this._addressList),
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      disabled: cdktf.booleanToTerraform(this._disabled),
      forbid_bfd: cdktf.booleanToTerraform(this._forbidBfd),
      id: cdktf.stringToTerraform(this._id),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      min_rx: cdktf.stringToTerraform(this._minRx),
      min_tx: cdktf.stringToTerraform(this._minTx),
      multiplier: cdktf.numberToTerraform(this._multiplier),
      vrf: cdktf.stringToTerraform(this._vrf),
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
      address_list: {
        value: cdktf.stringToHclTerraform(this._addressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forbid_bfd: {
        value: cdktf.booleanToHclTerraform(this._forbidBfd),
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
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      min_rx: {
        value: cdktf.stringToHclTerraform(this._minRx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tx: {
        value: cdktf.stringToHclTerraform(this._minTx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiplier: {
        value: cdktf.numberToHclTerraform(this._multiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
