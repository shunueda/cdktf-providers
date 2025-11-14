// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_decryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile to import
  * @param importFromId The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_decryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_decryption_profile',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_certificate_extensions_restricted - computed: true, optional: false, required: false
  public get areCertificateExtensionsRestricted() {
    return this.getBooleanAttribute('are_certificate_extensions_restricted');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_include_alt_name - computed: true, optional: false, required: false
  public get isAutoIncludeAltName() {
    return this.getBooleanAttribute('is_auto_include_alt_name');
  }

  // is_expired_certificate_blocked - computed: true, optional: false, required: false
  public get isExpiredCertificateBlocked() {
    return this.getBooleanAttribute('is_expired_certificate_blocked');
  }

  // is_out_of_capacity_blocked - computed: true, optional: false, required: false
  public get isOutOfCapacityBlocked() {
    return this.getBooleanAttribute('is_out_of_capacity_blocked');
  }

  // is_revocation_status_timeout_blocked - computed: true, optional: false, required: false
  public get isRevocationStatusTimeoutBlocked() {
    return this.getBooleanAttribute('is_revocation_status_timeout_blocked');
  }

  // is_unknown_revocation_status_blocked - computed: true, optional: false, required: false
  public get isUnknownRevocationStatusBlocked() {
    return this.getBooleanAttribute('is_unknown_revocation_status_blocked');
  }

  // is_unsupported_cipher_blocked - computed: true, optional: false, required: false
  public get isUnsupportedCipherBlocked() {
    return this.getBooleanAttribute('is_unsupported_cipher_blocked');
  }

  // is_unsupported_version_blocked - computed: true, optional: false, required: false
  public get isUnsupportedVersionBlocked() {
    return this.getBooleanAttribute('is_unsupported_version_blocked');
  }

  // is_untrusted_issuer_blocked - computed: true, optional: false, required: false
  public get isUntrustedIssuerBlocked() {
    return this.getBooleanAttribute('is_untrusted_issuer_blocked');
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

  // network_firewall_policy_id - computed: false, optional: false, required: true
  private _networkFirewallPolicyId?: string; 
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }
  public set networkFirewallPolicyId(value: string) {
    this._networkFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyIdInput() {
    return this._networkFirewallPolicyId;
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
