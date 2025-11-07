// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoVpnInterfaceIpsecFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template#id DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template#name DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template sdwan_cisco_vpn_interface_ipsec_feature_template}
*/
export class DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_ipsec_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoVpnInterfaceIpsecFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_ipsec_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_ipsec_feature_template sdwan_cisco_vpn_interface_ipsec_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoVpnInterfaceIpsecFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoVpnInterfaceIpsecFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_ipsec_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // application_variable - computed: true, optional: false, required: false
  public get applicationVariable() {
    return this.getStringAttribute('application_variable');
  }

  // clear_dont_fragment - computed: true, optional: false, required: false
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }

  // clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }

  // dead_peer_detection_interval - computed: true, optional: false, required: false
  public get deadPeerDetectionInterval() {
    return this.getNumberAttribute('dead_peer_detection_interval');
  }

  // dead_peer_detection_interval_variable - computed: true, optional: false, required: false
  public get deadPeerDetectionIntervalVariable() {
    return this.getStringAttribute('dead_peer_detection_interval_variable');
  }

  // dead_peer_detection_retries - computed: true, optional: false, required: false
  public get deadPeerDetectionRetries() {
    return this.getNumberAttribute('dead_peer_detection_retries');
  }

  // dead_peer_detection_retries_variable - computed: true, optional: false, required: false
  public get deadPeerDetectionRetriesVariable() {
    return this.getStringAttribute('dead_peer_detection_retries_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // ike_ciphersuite - computed: true, optional: false, required: false
  public get ikeCiphersuite() {
    return this.getStringAttribute('ike_ciphersuite');
  }

  // ike_ciphersuite_variable - computed: true, optional: false, required: false
  public get ikeCiphersuiteVariable() {
    return this.getStringAttribute('ike_ciphersuite_variable');
  }

  // ike_group - computed: true, optional: false, required: false
  public get ikeGroup() {
    return this.getStringAttribute('ike_group');
  }

  // ike_group_variable - computed: true, optional: false, required: false
  public get ikeGroupVariable() {
    return this.getStringAttribute('ike_group_variable');
  }

  // ike_mode - computed: true, optional: false, required: false
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }

  // ike_mode_variable - computed: true, optional: false, required: false
  public get ikeModeVariable() {
    return this.getStringAttribute('ike_mode_variable');
  }

  // ike_pre_shared_key - computed: true, optional: false, required: false
  public get ikePreSharedKey() {
    return this.getStringAttribute('ike_pre_shared_key');
  }

  // ike_pre_shared_key_local_id - computed: true, optional: false, required: false
  public get ikePreSharedKeyLocalId() {
    return this.getStringAttribute('ike_pre_shared_key_local_id');
  }

  // ike_pre_shared_key_local_id_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyLocalIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_local_id_variable');
  }

  // ike_pre_shared_key_remote_id - computed: true, optional: false, required: false
  public get ikePreSharedKeyRemoteId() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id');
  }

  // ike_pre_shared_key_remote_id_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyRemoteIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id_variable');
  }

  // ike_pre_shared_key_variable - computed: true, optional: false, required: false
  public get ikePreSharedKeyVariable() {
    return this.getStringAttribute('ike_pre_shared_key_variable');
  }

  // ike_rekey_interval - computed: true, optional: false, required: false
  public get ikeRekeyInterval() {
    return this.getNumberAttribute('ike_rekey_interval');
  }

  // ike_rekey_interval_variable - computed: true, optional: false, required: false
  public get ikeRekeyIntervalVariable() {
    return this.getStringAttribute('ike_rekey_interval_variable');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // ipsec_ciphersuite - computed: true, optional: false, required: false
  public get ipsecCiphersuite() {
    return this.getStringAttribute('ipsec_ciphersuite');
  }

  // ipsec_ciphersuite_variable - computed: true, optional: false, required: false
  public get ipsecCiphersuiteVariable() {
    return this.getStringAttribute('ipsec_ciphersuite_variable');
  }

  // ipsec_perfect_forward_secrecy - computed: true, optional: false, required: false
  public get ipsecPerfectForwardSecrecy() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy');
  }

  // ipsec_perfect_forward_secrecy_variable - computed: true, optional: false, required: false
  public get ipsecPerfectForwardSecrecyVariable() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy_variable');
  }

  // ipsec_rekey_interval - computed: true, optional: false, required: false
  public get ipsecRekeyInterval() {
    return this.getNumberAttribute('ipsec_rekey_interval');
  }

  // ipsec_rekey_interval_variable - computed: true, optional: false, required: false
  public get ipsecRekeyIntervalVariable() {
    return this.getStringAttribute('ipsec_rekey_interval_variable');
  }

  // ipsec_replay_window - computed: true, optional: false, required: false
  public get ipsecReplayWindow() {
    return this.getNumberAttribute('ipsec_replay_window');
  }

  // ipsec_replay_window_variable - computed: true, optional: false, required: false
  public get ipsecReplayWindowVariable() {
    return this.getStringAttribute('ipsec_replay_window_variable');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_variable - computed: true, optional: false, required: false
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // tcp_mss_adjust - computed: true, optional: false, required: false
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }

  // tcp_mss_adjust_variable - computed: true, optional: false, required: false
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }

  // tunnel_destination - computed: true, optional: false, required: false
  public get tunnelDestination() {
    return this.getStringAttribute('tunnel_destination');
  }

  // tunnel_destination_variable - computed: true, optional: false, required: false
  public get tunnelDestinationVariable() {
    return this.getStringAttribute('tunnel_destination_variable');
  }

  // tunnel_route_via - computed: true, optional: false, required: false
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }

  // tunnel_route_via_variable - computed: true, optional: false, required: false
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }

  // tunnel_source - computed: true, optional: false, required: false
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }

  // tunnel_source_interface - computed: true, optional: false, required: false
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }

  // tunnel_source_interface_variable - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }

  // tunnel_source_variable - computed: true, optional: false, required: false
  public get tunnelSourceVariable() {
    return this.getStringAttribute('tunnel_source_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
