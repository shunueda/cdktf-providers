// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemRemoteAccessFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature#feature_profile_id DataSdwanSystemRemoteAccessFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature#id DataSdwanSystemRemoteAccessFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature sdwan_system_remote_access_feature}
*/
export class DataSdwanSystemRemoteAccessFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_remote_access_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemRemoteAccessFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemRemoteAccessFeature to import
  * @param importFromId The id of the existing DataSdwanSystemRemoteAccessFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemRemoteAccessFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_remote_access_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_remote_access_feature sdwan_system_remote_access_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemRemoteAccessFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemRemoteAccessFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_remote_access_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_derive_name_from_peer_domain - computed: true, optional: false, required: false
  public get aaaDeriveNameFromPeerDomain() {
    return this.getStringAttribute('aaa_derive_name_from_peer_domain');
  }

  // aaa_derive_name_from_peer_domain_variable - computed: true, optional: false, required: false
  public get aaaDeriveNameFromPeerDomainVariable() {
    return this.getStringAttribute('aaa_derive_name_from_peer_domain_variable');
  }

  // aaa_derive_name_from_peer_identity - computed: true, optional: false, required: false
  public get aaaDeriveNameFromPeerIdentity() {
    return this.getStringAttribute('aaa_derive_name_from_peer_identity');
  }

  // aaa_derive_name_from_peer_identity_variable - computed: true, optional: false, required: false
  public get aaaDeriveNameFromPeerIdentityVariable() {
    return this.getStringAttribute('aaa_derive_name_from_peer_identity_variable');
  }

  // aaa_enable_accounting - computed: true, optional: false, required: false
  public get aaaEnableAccounting() {
    return this.getBooleanAttribute('aaa_enable_accounting');
  }

  // aaa_enable_accounting_variable - computed: true, optional: false, required: false
  public get aaaEnableAccountingVariable() {
    return this.getStringAttribute('aaa_enable_accounting_variable');
  }

  // aaa_specify_name_policy_name - computed: true, optional: false, required: false
  public get aaaSpecifyNamePolicyName() {
    return this.getStringAttribute('aaa_specify_name_policy_name');
  }

  // aaa_specify_name_policy_name_variable - computed: true, optional: false, required: false
  public get aaaSpecifyNamePolicyNameVariable() {
    return this.getStringAttribute('aaa_specify_name_policy_name_variable');
  }

  // aaa_specify_name_policy_password - computed: true, optional: false, required: false
  public get aaaSpecifyNamePolicyPassword() {
    return this.getStringAttribute('aaa_specify_name_policy_password');
  }

  // aaa_specify_name_policy_password_variable - computed: true, optional: false, required: false
  public get aaaSpecifyNamePolicyPasswordVariable() {
    return this.getStringAttribute('aaa_specify_name_policy_password_variable');
  }

  // any_connect_eap_authentication_type - computed: true, optional: false, required: false
  public get anyConnectEapAuthenticationType() {
    return this.getStringAttribute('any_connect_eap_authentication_type');
  }

  // connection_type_ssl - computed: true, optional: false, required: false
  public get connectionTypeSsl() {
    return this.getBooleanAttribute('connection_type_ssl');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_certificate_list_check - computed: true, optional: false, required: false
  public get enableCertificateListCheck() {
    return this.getBooleanAttribute('enable_certificate_list_check');
  }

  // enable_certificate_list_check_variable - computed: true, optional: false, required: false
  public get enableCertificateListCheckVariable() {
    return this.getStringAttribute('enable_certificate_list_check_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ikev2_anti_dos_threshold - computed: true, optional: false, required: false
  public get ikev2AntiDosThreshold() {
    return this.getNumberAttribute('ikev2_anti_dos_threshold');
  }

  // ikev2_anti_dos_threshold_variable - computed: true, optional: false, required: false
  public get ikev2AntiDosThresholdVariable() {
    return this.getStringAttribute('ikev2_anti_dos_threshold_variable');
  }

  // ikev2_local_ike_identity_type - computed: true, optional: false, required: false
  public get ikev2LocalIkeIdentityType() {
    return this.getStringAttribute('ikev2_local_ike_identity_type');
  }

  // ikev2_local_ike_identity_type_variable - computed: true, optional: false, required: false
  public get ikev2LocalIkeIdentityTypeVariable() {
    return this.getStringAttribute('ikev2_local_ike_identity_type_variable');
  }

  // ikev2_local_ike_identity_value - computed: true, optional: false, required: false
  public get ikev2LocalIkeIdentityValue() {
    return this.getStringAttribute('ikev2_local_ike_identity_value');
  }

  // ikev2_local_ike_identity_value_variable - computed: true, optional: false, required: false
  public get ikev2LocalIkeIdentityValueVariable() {
    return this.getStringAttribute('ikev2_local_ike_identity_value_variable');
  }

  // ikev2_security_association_lifetime - computed: true, optional: false, required: false
  public get ikev2SecurityAssociationLifetime() {
    return this.getNumberAttribute('ikev2_security_association_lifetime');
  }

  // ikev2_security_association_lifetime_variable - computed: true, optional: false, required: false
  public get ikev2SecurityAssociationLifetimeVariable() {
    return this.getStringAttribute('ikev2_security_association_lifetime_variable');
  }

  // ipsec_anti_replay_window_size - computed: true, optional: false, required: false
  public get ipsecAntiReplayWindowSize() {
    return this.getNumberAttribute('ipsec_anti_replay_window_size');
  }

  // ipsec_anti_replay_window_size_variable - computed: true, optional: false, required: false
  public get ipsecAntiReplayWindowSizeVariable() {
    return this.getStringAttribute('ipsec_anti_replay_window_size_variable');
  }

  // ipsec_enable_anti_replay - computed: true, optional: false, required: false
  public get ipsecEnableAntiReplay() {
    return this.getBooleanAttribute('ipsec_enable_anti_replay');
  }

  // ipsec_enable_anti_replay_variable - computed: true, optional: false, required: false
  public get ipsecEnableAntiReplayVariable() {
    return this.getStringAttribute('ipsec_enable_anti_replay_variable');
  }

  // ipsec_enable_perfect_foward_secrecy - computed: true, optional: false, required: false
  public get ipsecEnablePerfectFowardSecrecy() {
    return this.getBooleanAttribute('ipsec_enable_perfect_foward_secrecy');
  }

  // ipsec_enable_perfect_foward_secrecy_variable - computed: true, optional: false, required: false
  public get ipsecEnablePerfectFowardSecrecyVariable() {
    return this.getStringAttribute('ipsec_enable_perfect_foward_secrecy_variable');
  }

  // ipsec_security_association_lifetime - computed: true, optional: false, required: false
  public get ipsecSecurityAssociationLifetime() {
    return this.getNumberAttribute('ipsec_security_association_lifetime');
  }

  // ipsec_security_association_lifetime_variable - computed: true, optional: false, required: false
  public get ipsecSecurityAssociationLifetimeVariable() {
    return this.getStringAttribute('ipsec_security_association_lifetime_variable');
  }

  // ipv4_pool_size - computed: true, optional: false, required: false
  public get ipv4PoolSize() {
    return this.getNumberAttribute('ipv4_pool_size');
  }

  // ipv4_pool_size_variable - computed: true, optional: false, required: false
  public get ipv4PoolSizeVariable() {
    return this.getStringAttribute('ipv4_pool_size_variable');
  }

  // ipv6_pool_size - computed: true, optional: false, required: false
  public get ipv6PoolSize() {
    return this.getNumberAttribute('ipv6_pool_size');
  }

  // ipv6_pool_size_variable - computed: true, optional: false, required: false
  public get ipv6PoolSizeVariable() {
    return this.getStringAttribute('ipv6_pool_size_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // psk_authentication_pre_shared_key - computed: true, optional: false, required: false
  public get pskAuthenticationPreSharedKey() {
    return this.getStringAttribute('psk_authentication_pre_shared_key');
  }

  // psk_authentication_pre_shared_key_variable - computed: true, optional: false, required: false
  public get pskAuthenticationPreSharedKeyVariable() {
    return this.getStringAttribute('psk_authentication_pre_shared_key_variable');
  }

  // psk_authentication_type - computed: true, optional: false, required: false
  public get pskAuthenticationType() {
    return this.getStringAttribute('psk_authentication_type');
  }

  // psk_authentication_type_variable - computed: true, optional: false, required: false
  public get pskAuthenticationTypeVariable() {
    return this.getStringAttribute('psk_authentication_type_variable');
  }

  // radius_group_name - computed: true, optional: false, required: false
  public get radiusGroupName() {
    return this.getStringAttribute('radius_group_name');
  }

  // radius_group_name_variable - computed: true, optional: false, required: false
  public get radiusGroupNameVariable() {
    return this.getStringAttribute('radius_group_name_variable');
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
