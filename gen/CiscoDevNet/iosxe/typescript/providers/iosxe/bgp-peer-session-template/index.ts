// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerSessionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#asn BgpPeerSessionTemplate#asn}
  */
  readonly asn: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#delete_mode BgpPeerSessionTemplate#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#description BgpPeerSessionTemplate#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#device BgpPeerSessionTemplate#device}
  */
  readonly device?: string;
  /**
  * one-hop away EBGP peer using loopback address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#disable_connected_check BgpPeerSessionTemplate#disable_connected_check}
  */
  readonly disableConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#ebgp_multihop BgpPeerSessionTemplate#ebgp_multihop}
  */
  readonly ebgpMultihop?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `2`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#ebgp_multihop_max_hop BgpPeerSessionTemplate#ebgp_multihop_max_hop}
  */
  readonly ebgpMultihopMaxHop?: number;
  /**
  * Inherit a peer-session template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#inherit_peer_session BgpPeerSessionTemplate#inherit_peer_session}
  */
  readonly inheritPeerSession?: string;
  /**
  * Specify a BGP neighbor remote-as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#remote_as BgpPeerSessionTemplate#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#template_name BgpPeerSessionTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * Loopback interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#update_source_interface_loopback BgpPeerSessionTemplate#update_source_interface_loopback}
  */
  readonly updateSourceInterfaceLoopback?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template iosxe_bgp_peer_session_template}
*/
export class BgpPeerSessionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_peer_session_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerSessionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerSessionTemplate to import
  * @param importFromId The id of the existing BgpPeerSessionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerSessionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_peer_session_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/bgp_peer_session_template iosxe_bgp_peer_session_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerSessionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerSessionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_peer_session_template',
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
    this._asn = config.asn;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._disableConnectedCheck = config.disableConnectedCheck;
    this._ebgpMultihop = config.ebgpMultihop;
    this._ebgpMultihopMaxHop = config.ebgpMultihopMaxHop;
    this._inheritPeerSession = config.inheritPeerSession;
    this._remoteAs = config.remoteAs;
    this._templateName = config.templateName;
    this._updateSourceInterfaceLoopback = config.updateSourceInterfaceLoopback;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // disable_connected_check - computed: false, optional: true, required: false
  private _disableConnectedCheck?: boolean | cdktf.IResolvable; 
  public get disableConnectedCheck() {
    return this.getBooleanAttribute('disable_connected_check');
  }
  public set disableConnectedCheck(value: boolean | cdktf.IResolvable) {
    this._disableConnectedCheck = value;
  }
  public resetDisableConnectedCheck() {
    this._disableConnectedCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectedCheckInput() {
    return this._disableConnectedCheck;
  }

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: boolean | cdktf.IResolvable; 
  public get ebgpMultihop() {
    return this.getBooleanAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: boolean | cdktf.IResolvable) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_max_hop - computed: false, optional: true, required: false
  private _ebgpMultihopMaxHop?: number; 
  public get ebgpMultihopMaxHop() {
    return this.getNumberAttribute('ebgp_multihop_max_hop');
  }
  public set ebgpMultihopMaxHop(value: number) {
    this._ebgpMultihopMaxHop = value;
  }
  public resetEbgpMultihopMaxHop() {
    this._ebgpMultihopMaxHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopMaxHopInput() {
    return this._ebgpMultihopMaxHop;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_peer_session - computed: false, optional: true, required: false
  private _inheritPeerSession?: string; 
  public get inheritPeerSession() {
    return this.getStringAttribute('inherit_peer_session');
  }
  public set inheritPeerSession(value: string) {
    this._inheritPeerSession = value;
  }
  public resetInheritPeerSession() {
    this._inheritPeerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritPeerSessionInput() {
    return this._inheritPeerSession;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // update_source_interface_loopback - computed: false, optional: true, required: false
  private _updateSourceInterfaceLoopback?: number; 
  public get updateSourceInterfaceLoopback() {
    return this.getNumberAttribute('update_source_interface_loopback');
  }
  public set updateSourceInterfaceLoopback(value: number) {
    this._updateSourceInterfaceLoopback = value;
  }
  public resetUpdateSourceInterfaceLoopback() {
    this._updateSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceLoopbackInput() {
    return this._updateSourceInterfaceLoopback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      disable_connected_check: cdktf.booleanToTerraform(this._disableConnectedCheck),
      ebgp_multihop: cdktf.booleanToTerraform(this._ebgpMultihop),
      ebgp_multihop_max_hop: cdktf.numberToTerraform(this._ebgpMultihopMaxHop),
      inherit_peer_session: cdktf.stringToTerraform(this._inheritPeerSession),
      remote_as: cdktf.stringToTerraform(this._remoteAs),
      template_name: cdktf.stringToTerraform(this._templateName),
      update_source_interface_loopback: cdktf.numberToTerraform(this._updateSourceInterfaceLoopback),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_connected_check: {
        value: cdktf.booleanToHclTerraform(this._disableConnectedCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebgp_multihop: {
        value: cdktf.booleanToHclTerraform(this._ebgpMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebgp_multihop_max_hop: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopMaxHop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inherit_peer_session: {
        value: cdktf.stringToHclTerraform(this._inheritPeerSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.stringToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._updateSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
