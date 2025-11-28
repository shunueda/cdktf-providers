// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceBridgeVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#___path___ InterfaceBridgeVlan#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#___skip___ InterfaceBridgeVlan#___skip___}
  */
  readonly skip?: string;
  /**
  * The bridge interface which the respective VLAN entry is intended for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#bridge InterfaceBridgeVlan#bridge}
  */
  readonly bridge: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#comment InterfaceBridgeVlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#disabled InterfaceBridgeVlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#id InterfaceBridgeVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ports that ignore all MRP messages and remains Not Registered (MT), as well as disables applicant from declaring specific VLAN ID (available since RouterOS 7.15).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#mvrp_forbidden InterfaceBridgeVlan#mvrp_forbidden}
  */
  readonly mvrpForbidden?: string[];
  /**
  * Interface list with a VLAN tag adding action in egress. This setting accepts comma separated values. E.g. tagged=ether1,ether2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#tagged InterfaceBridgeVlan#tagged}
  */
  readonly tagged?: string[];
  /**
  * Interface list with a VLAN tag removing action in egress. This setting accepts comma separated values. E.g. untagged=ether3,ether4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#untagged InterfaceBridgeVlan#untagged}
  */
  readonly untagged?: string[];
  /**
  * The list of VLAN IDs for certain port configuration. This setting accepts VLAN ID range as well as comma separated values. E.g. `vlan-ids=["100-115","120","122","128-130"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#vlan_ids InterfaceBridgeVlan#vlan_ids}
  */
  readonly vlanIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan routeros_interface_bridge_vlan}
*/
export class InterfaceBridgeVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_bridge_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceBridgeVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceBridgeVlan to import
  * @param importFromId The id of the existing InterfaceBridgeVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceBridgeVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_bridge_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_bridge_vlan routeros_interface_bridge_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceBridgeVlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceBridgeVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_bridge_vlan',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._bridge = config.bridge;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._mvrpForbidden = config.mvrpForbidden;
    this._tagged = config.tagged;
    this._untagged = config.untagged;
    this._vlanIds = config.vlanIds;
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

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
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

  // current_tagged - computed: true, optional: false, required: false
  public get currentTagged() {
    return this.getListAttribute('current_tagged');
  }

  // current_untagged - computed: true, optional: false, required: false
  public get currentUntagged() {
    return this.getListAttribute('current_untagged');
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

  // mvrp_forbidden - computed: false, optional: true, required: false
  private _mvrpForbidden?: string[]; 
  public get mvrpForbidden() {
    return this.getListAttribute('mvrp_forbidden');
  }
  public set mvrpForbidden(value: string[]) {
    this._mvrpForbidden = value;
  }
  public resetMvrpForbidden() {
    this._mvrpForbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvrpForbiddenInput() {
    return this._mvrpForbidden;
  }

  // tagged - computed: false, optional: true, required: false
  private _tagged?: string[]; 
  public get tagged() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged'));
  }
  public set tagged(value: string[]) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // untagged - computed: false, optional: true, required: false
  private _untagged?: string[]; 
  public get untagged() {
    return cdktf.Fn.tolist(this.getListAttribute('untagged'));
  }
  public set untagged(value: string[]) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_ids - computed: false, optional: false, required: true
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_ids'));
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      bridge: cdktf.stringToTerraform(this._bridge),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      mvrp_forbidden: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mvrpForbidden),
      tagged: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagged),
      untagged: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untagged),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
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
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
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
      mvrp_forbidden: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mvrpForbidden),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tagged: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagged),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      untagged: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untagged),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
