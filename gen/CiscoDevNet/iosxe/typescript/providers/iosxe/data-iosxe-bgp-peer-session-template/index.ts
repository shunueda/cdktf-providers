// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpPeerSessionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template#asn DataIosxeBgpPeerSessionTemplate#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template#device DataIosxeBgpPeerSessionTemplate#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template#template_name DataIosxeBgpPeerSessionTemplate#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template iosxe_bgp_peer_session_template}
*/
export class DataIosxeBgpPeerSessionTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_peer_session_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpPeerSessionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpPeerSessionTemplate to import
  * @param importFromId The id of the existing DataIosxeBgpPeerSessionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpPeerSessionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_peer_session_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/bgp_peer_session_template iosxe_bgp_peer_session_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpPeerSessionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpPeerSessionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_peer_session_template',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._device = config.device;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // disable_connected_check - computed: true, optional: false, required: false
  public get disableConnectedCheck() {
    return this.getBooleanAttribute('disable_connected_check');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getBooleanAttribute('ebgp_multihop');
  }

  // ebgp_multihop_max_hop - computed: true, optional: false, required: false
  public get ebgpMultihopMaxHop() {
    return this.getNumberAttribute('ebgp_multihop_max_hop');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_peer_session - computed: true, optional: false, required: false
  public get inheritPeerSession() {
    return this.getStringAttribute('inherit_peer_session');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
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

  // update_source_interface_loopback - computed: true, optional: false, required: false
  public get updateSourceInterfaceLoopback() {
    return this.getNumberAttribute('update_source_interface_loopback');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
