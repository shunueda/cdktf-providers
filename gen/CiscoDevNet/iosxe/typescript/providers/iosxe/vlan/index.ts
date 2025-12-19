// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#device Vlan#device}
  */
  readonly device?: string;
  /**
  * Ascii name of the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#name Vlan#name}
  */
  readonly name?: string;
  /**
  * Configure association between private VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#private_vlan_association Vlan#private_vlan_association}
  */
  readonly privateVlanAssociation?: string;
  /**
  * Configure the VLAN as a community private VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#private_vlan_community Vlan#private_vlan_community}
  */
  readonly privateVlanCommunity?: boolean | cdktf.IResolvable;
  /**
  * Configure the VLAN as an isolated private VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#private_vlan_isolated Vlan#private_vlan_isolated}
  */
  readonly privateVlanIsolated?: boolean | cdktf.IResolvable;
  /**
  * Configure the VLAN as a primary private VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#private_vlan_primary Vlan#private_vlan_primary}
  */
  readonly privateVlanPrimary?: boolean | cdktf.IResolvable;
  /**
  * Configure as Remote SPAN VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#remote_span Vlan#remote_span}
  */
  readonly remoteSpan?: boolean | cdktf.IResolvable;
  /**
  * Shutdown VLAN switching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#shutdown Vlan#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#vlan_id Vlan#vlan_id}
  */
  readonly vlanId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan iosxe_vlan}
*/
export class Vlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlan to import
  * @param importFromId The id of the existing Vlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan iosxe_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vlan',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
    this._privateVlanAssociation = config.privateVlanAssociation;
    this._privateVlanCommunity = config.privateVlanCommunity;
    this._privateVlanIsolated = config.privateVlanIsolated;
    this._privateVlanPrimary = config.privateVlanPrimary;
    this._remoteSpan = config.remoteSpan;
    this._shutdown = config.shutdown;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_vlan_association - computed: false, optional: true, required: false
  private _privateVlanAssociation?: string; 
  public get privateVlanAssociation() {
    return this.getStringAttribute('private_vlan_association');
  }
  public set privateVlanAssociation(value: string) {
    this._privateVlanAssociation = value;
  }
  public resetPrivateVlanAssociation() {
    this._privateVlanAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanAssociationInput() {
    return this._privateVlanAssociation;
  }

  // private_vlan_community - computed: false, optional: true, required: false
  private _privateVlanCommunity?: boolean | cdktf.IResolvable; 
  public get privateVlanCommunity() {
    return this.getBooleanAttribute('private_vlan_community');
  }
  public set privateVlanCommunity(value: boolean | cdktf.IResolvable) {
    this._privateVlanCommunity = value;
  }
  public resetPrivateVlanCommunity() {
    this._privateVlanCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanCommunityInput() {
    return this._privateVlanCommunity;
  }

  // private_vlan_isolated - computed: false, optional: true, required: false
  private _privateVlanIsolated?: boolean | cdktf.IResolvable; 
  public get privateVlanIsolated() {
    return this.getBooleanAttribute('private_vlan_isolated');
  }
  public set privateVlanIsolated(value: boolean | cdktf.IResolvable) {
    this._privateVlanIsolated = value;
  }
  public resetPrivateVlanIsolated() {
    this._privateVlanIsolated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanIsolatedInput() {
    return this._privateVlanIsolated;
  }

  // private_vlan_primary - computed: false, optional: true, required: false
  private _privateVlanPrimary?: boolean | cdktf.IResolvable; 
  public get privateVlanPrimary() {
    return this.getBooleanAttribute('private_vlan_primary');
  }
  public set privateVlanPrimary(value: boolean | cdktf.IResolvable) {
    this._privateVlanPrimary = value;
  }
  public resetPrivateVlanPrimary() {
    this._privateVlanPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanPrimaryInput() {
    return this._privateVlanPrimary;
  }

  // remote_span - computed: false, optional: true, required: false
  private _remoteSpan?: boolean | cdktf.IResolvable; 
  public get remoteSpan() {
    return this.getBooleanAttribute('remote_span');
  }
  public set remoteSpan(value: boolean | cdktf.IResolvable) {
    this._remoteSpan = value;
  }
  public resetRemoteSpan() {
    this._remoteSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSpanInput() {
    return this._remoteSpan;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      private_vlan_association: cdktf.stringToTerraform(this._privateVlanAssociation),
      private_vlan_community: cdktf.booleanToTerraform(this._privateVlanCommunity),
      private_vlan_isolated: cdktf.booleanToTerraform(this._privateVlanIsolated),
      private_vlan_primary: cdktf.booleanToTerraform(this._privateVlanPrimary),
      remote_span: cdktf.booleanToTerraform(this._remoteSpan),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      private_vlan_association: {
        value: cdktf.stringToHclTerraform(this._privateVlanAssociation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_vlan_community: {
        value: cdktf.booleanToHclTerraform(this._privateVlanCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_vlan_isolated: {
        value: cdktf.booleanToHclTerraform(this._privateVlanIsolated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_vlan_primary: {
        value: cdktf.booleanToHclTerraform(this._privateVlanPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_span: {
        value: cdktf.booleanToHclTerraform(this._remoteSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
