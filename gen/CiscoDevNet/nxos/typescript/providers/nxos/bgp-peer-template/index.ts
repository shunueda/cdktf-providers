// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#asn BgpPeerTemplate#asn}
  */
  readonly asn: string;
  /**
  * Peer template description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#description BgpPeerTemplate#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#device BgpPeerTemplate#device}
  */
  readonly device?: string;
  /**
  * Neighbor Fabric Type.
  *   - Choices: `fabric-internal`, `fabric-external`, `fabric-border-leaf`
  *   - Default value: `fabric-internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#peer_type BgpPeerTemplate#peer_type}
  */
  readonly peerType?: string;
  /**
  * Peer template autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#remote_asn BgpPeerTemplate#remote_asn}
  */
  readonly remoteAsn?: string;
  /**
  * Source Interface. Must match first field in the output of `show intf brief`.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#source_interface BgpPeerTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Peer template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#template_name BgpPeerTemplate#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template nxos_bgp_peer_template}
*/
export class BgpPeerTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_peer_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerTemplate to import
  * @param importFromId The id of the existing BgpPeerTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_peer_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_template nxos_bgp_peer_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_peer_template',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
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
    this._description = config.description;
    this._device = config.device;
    this._peerType = config.peerType;
    this._remoteAsn = config.remoteAsn;
    this._sourceInterface = config.sourceInterface;
    this._templateName = config.templateName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_type - computed: true, optional: true, required: false
  private _peerType?: string; 
  public get peerType() {
    return this.getStringAttribute('peer_type');
  }
  public set peerType(value: string) {
    this._peerType = value;
  }
  public resetPeerType() {
    this._peerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTypeInput() {
    return this._peerType;
  }

  // remote_asn - computed: false, optional: true, required: false
  private _remoteAsn?: string; 
  public get remoteAsn() {
    return this.getStringAttribute('remote_asn');
  }
  public set remoteAsn(value: string) {
    this._remoteAsn = value;
  }
  public resetRemoteAsn() {
    this._remoteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      peer_type: cdktf.stringToTerraform(this._peerType),
      remote_asn: cdktf.stringToTerraform(this._remoteAsn),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      template_name: cdktf.stringToTerraform(this._templateName),
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
      peer_type: {
        value: cdktf.stringToHclTerraform(this._peerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_asn: {
        value: cdktf.stringToHclTerraform(this._remoteAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
