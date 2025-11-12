// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRemoteAccessFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * , Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_derive_name_from_peer_domain SystemRemoteAccessFeature#aaa_derive_name_from_peer_domain}
  */
  readonly aaaDeriveNameFromPeerDomain?: string;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_derive_name_from_peer_domain_variable SystemRemoteAccessFeature#aaa_derive_name_from_peer_domain_variable}
  */
  readonly aaaDeriveNameFromPeerDomainVariable?: string;
  /**
  * , Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_derive_name_from_peer_identity SystemRemoteAccessFeature#aaa_derive_name_from_peer_identity}
  */
  readonly aaaDeriveNameFromPeerIdentity?: string;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_derive_name_from_peer_identity_variable SystemRemoteAccessFeature#aaa_derive_name_from_peer_identity_variable}
  */
  readonly aaaDeriveNameFromPeerIdentityVariable?: string;
  /**
  * Enable Accounting
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_enable_accounting SystemRemoteAccessFeature#aaa_enable_accounting}
  */
  readonly aaaEnableAccounting?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_enable_accounting_variable SystemRemoteAccessFeature#aaa_enable_accounting_variable}
  */
  readonly aaaEnableAccountingVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_specify_name_policy_name SystemRemoteAccessFeature#aaa_specify_name_policy_name}
  */
  readonly aaaSpecifyNamePolicyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_specify_name_policy_name_variable SystemRemoteAccessFeature#aaa_specify_name_policy_name_variable}
  */
  readonly aaaSpecifyNamePolicyNameVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_specify_name_policy_password SystemRemoteAccessFeature#aaa_specify_name_policy_password}
  */
  readonly aaaSpecifyNamePolicyPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#aaa_specify_name_policy_password_variable SystemRemoteAccessFeature#aaa_specify_name_policy_password_variable}
  */
  readonly aaaSpecifyNamePolicyPasswordVariable?: string;
  /**
  * , Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Choices: `user`, `device`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#any_connect_eap_authentication_type SystemRemoteAccessFeature#any_connect_eap_authentication_type}
  */
  readonly anyConnectEapAuthenticationType?: string;
  /**
  * Enabled SSL VPN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#connection_type_ssl SystemRemoteAccessFeature#connection_type_ssl}
  */
  readonly connectionTypeSsl?: boolean | cdktf.IResolvable;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#description SystemRemoteAccessFeature#description}
  */
  readonly description?: string;
  /**
  * 
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#enable_certificate_list_check SystemRemoteAccessFeature#enable_certificate_list_check}
  */
  readonly enableCertificateListCheck?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#enable_certificate_list_check_variable SystemRemoteAccessFeature#enable_certificate_list_check_variable}
  */
  readonly enableCertificateListCheckVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#feature_profile_id SystemRemoteAccessFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Anti-DOS Threshold, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Range: `10`-`1000`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_anti_dos_threshold SystemRemoteAccessFeature#ikev2_anti_dos_threshold}
  */
  readonly ikev2AntiDosThreshold?: number;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_anti_dos_threshold_variable SystemRemoteAccessFeature#ikev2_anti_dos_threshold_variable}
  */
  readonly ikev2AntiDosThresholdVariable?: string;
  /**
  * , Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Choices: `EMAIL`, `FQDN`, `KEYID`, `IPv4 ADDRESS`, `IPv6 ADDRESS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_local_ike_identity_type SystemRemoteAccessFeature#ikev2_local_ike_identity_type}
  */
  readonly ikev2LocalIkeIdentityType?: string;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_local_ike_identity_type_variable SystemRemoteAccessFeature#ikev2_local_ike_identity_type_variable}
  */
  readonly ikev2LocalIkeIdentityTypeVariable?: string;
  /**
  * , Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_local_ike_identity_value SystemRemoteAccessFeature#ikev2_local_ike_identity_value}
  */
  readonly ikev2LocalIkeIdentityValue?: string;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_local_ike_identity_value_variable SystemRemoteAccessFeature#ikev2_local_ike_identity_value_variable}
  */
  readonly ikev2LocalIkeIdentityValueVariable?: string;
  /**
  * Security Association Lifetime in Seconds, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Range: `3600`-`86400`
  *   - Default value: `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_security_association_lifetime SystemRemoteAccessFeature#ikev2_security_association_lifetime}
  */
  readonly ikev2SecurityAssociationLifetime?: number;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ikev2_security_association_lifetime_variable SystemRemoteAccessFeature#ikev2_security_association_lifetime_variable}
  */
  readonly ikev2SecurityAssociationLifetimeVariable?: string;
  /**
  * security Association Lifetime, Attribute conditional on `ipsec_enable_anti_replay` being equal to `true`
  *   - Default value: `64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_anti_replay_window_size SystemRemoteAccessFeature#ipsec_anti_replay_window_size}
  */
  readonly ipsecAntiReplayWindowSize?: number;
  /**
  * Variable name, Attribute conditional on `ipsec_enable_anti_replay` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_anti_replay_window_size_variable SystemRemoteAccessFeature#ipsec_anti_replay_window_size_variable}
  */
  readonly ipsecAntiReplayWindowSizeVariable?: string;
  /**
  * Enable Anti-Replay, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_enable_anti_replay SystemRemoteAccessFeature#ipsec_enable_anti_replay}
  */
  readonly ipsecEnableAntiReplay?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_enable_anti_replay_variable SystemRemoteAccessFeature#ipsec_enable_anti_replay_variable}
  */
  readonly ipsecEnableAntiReplayVariable?: string;
  /**
  * security Association Lifetime, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_enable_perfect_foward_secrecy SystemRemoteAccessFeature#ipsec_enable_perfect_foward_secrecy}
  */
  readonly ipsecEnablePerfectFowardSecrecy?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_enable_perfect_foward_secrecy_variable SystemRemoteAccessFeature#ipsec_enable_perfect_foward_secrecy_variable}
  */
  readonly ipsecEnablePerfectFowardSecrecyVariable?: string;
  /**
  * Security Association Lifetime in Seconds, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Range: `3600`-`86400`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_security_association_lifetime SystemRemoteAccessFeature#ipsec_security_association_lifetime}
  */
  readonly ipsecSecurityAssociationLifetime?: number;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipsec_security_association_lifetime_variable SystemRemoteAccessFeature#ipsec_security_association_lifetime_variable}
  */
  readonly ipsecSecurityAssociationLifetimeVariable?: string;
  /**
  * IPv4 Pool Size
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipv4_pool_size SystemRemoteAccessFeature#ipv4_pool_size}
  */
  readonly ipv4PoolSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipv4_pool_size_variable SystemRemoteAccessFeature#ipv4_pool_size_variable}
  */
  readonly ipv4PoolSizeVariable?: string;
  /**
  * IPv6 Pool Size
  *   - Default value: `1024`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipv6_pool_size SystemRemoteAccessFeature#ipv6_pool_size}
  */
  readonly ipv6PoolSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#ipv6_pool_size_variable SystemRemoteAccessFeature#ipv6_pool_size_variable}
  */
  readonly ipv6PoolSizeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#name SystemRemoteAccessFeature#name}
  */
  readonly name: string;
  /**
  * PSK Pre Shared Key, Attribute conditional on `psk_authentication_type` being equal to `group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#psk_authentication_pre_shared_key SystemRemoteAccessFeature#psk_authentication_pre_shared_key}
  */
  readonly pskAuthenticationPreSharedKey?: string;
  /**
  * Variable name, Attribute conditional on `psk_authentication_type` being equal to `group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#psk_authentication_pre_shared_key_variable SystemRemoteAccessFeature#psk_authentication_pre_shared_key_variable}
  */
  readonly pskAuthenticationPreSharedKeyVariable?: string;
  /**
  * PSK Selection, Attribute conditional on `connection_type_ssl` being equal to `false`
  *   - Choices: `aaa`, `group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#psk_authentication_type SystemRemoteAccessFeature#psk_authentication_type}
  */
  readonly pskAuthenticationType?: string;
  /**
  * Variable name, Attribute conditional on `connection_type_ssl` being equal to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#psk_authentication_type_variable SystemRemoteAccessFeature#psk_authentication_type_variable}
  */
  readonly pskAuthenticationTypeVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#radius_group_name SystemRemoteAccessFeature#radius_group_name}
  */
  readonly radiusGroupName: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#radius_group_name_variable SystemRemoteAccessFeature#radius_group_name_variable}
  */
  readonly radiusGroupNameVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature sdwan_system_remote_access_feature}
*/
export class SystemRemoteAccessFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_remote_access_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRemoteAccessFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRemoteAccessFeature to import
  * @param importFromId The id of the existing SystemRemoteAccessFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRemoteAccessFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_remote_access_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_remote_access_feature sdwan_system_remote_access_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRemoteAccessFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemRemoteAccessFeatureConfig) {
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
    this._aaaDeriveNameFromPeerDomain = config.aaaDeriveNameFromPeerDomain;
    this._aaaDeriveNameFromPeerDomainVariable = config.aaaDeriveNameFromPeerDomainVariable;
    this._aaaDeriveNameFromPeerIdentity = config.aaaDeriveNameFromPeerIdentity;
    this._aaaDeriveNameFromPeerIdentityVariable = config.aaaDeriveNameFromPeerIdentityVariable;
    this._aaaEnableAccounting = config.aaaEnableAccounting;
    this._aaaEnableAccountingVariable = config.aaaEnableAccountingVariable;
    this._aaaSpecifyNamePolicyName = config.aaaSpecifyNamePolicyName;
    this._aaaSpecifyNamePolicyNameVariable = config.aaaSpecifyNamePolicyNameVariable;
    this._aaaSpecifyNamePolicyPassword = config.aaaSpecifyNamePolicyPassword;
    this._aaaSpecifyNamePolicyPasswordVariable = config.aaaSpecifyNamePolicyPasswordVariable;
    this._anyConnectEapAuthenticationType = config.anyConnectEapAuthenticationType;
    this._connectionTypeSsl = config.connectionTypeSsl;
    this._description = config.description;
    this._enableCertificateListCheck = config.enableCertificateListCheck;
    this._enableCertificateListCheckVariable = config.enableCertificateListCheckVariable;
    this._featureProfileId = config.featureProfileId;
    this._ikev2AntiDosThreshold = config.ikev2AntiDosThreshold;
    this._ikev2AntiDosThresholdVariable = config.ikev2AntiDosThresholdVariable;
    this._ikev2LocalIkeIdentityType = config.ikev2LocalIkeIdentityType;
    this._ikev2LocalIkeIdentityTypeVariable = config.ikev2LocalIkeIdentityTypeVariable;
    this._ikev2LocalIkeIdentityValue = config.ikev2LocalIkeIdentityValue;
    this._ikev2LocalIkeIdentityValueVariable = config.ikev2LocalIkeIdentityValueVariable;
    this._ikev2SecurityAssociationLifetime = config.ikev2SecurityAssociationLifetime;
    this._ikev2SecurityAssociationLifetimeVariable = config.ikev2SecurityAssociationLifetimeVariable;
    this._ipsecAntiReplayWindowSize = config.ipsecAntiReplayWindowSize;
    this._ipsecAntiReplayWindowSizeVariable = config.ipsecAntiReplayWindowSizeVariable;
    this._ipsecEnableAntiReplay = config.ipsecEnableAntiReplay;
    this._ipsecEnableAntiReplayVariable = config.ipsecEnableAntiReplayVariable;
    this._ipsecEnablePerfectFowardSecrecy = config.ipsecEnablePerfectFowardSecrecy;
    this._ipsecEnablePerfectFowardSecrecyVariable = config.ipsecEnablePerfectFowardSecrecyVariable;
    this._ipsecSecurityAssociationLifetime = config.ipsecSecurityAssociationLifetime;
    this._ipsecSecurityAssociationLifetimeVariable = config.ipsecSecurityAssociationLifetimeVariable;
    this._ipv4PoolSize = config.ipv4PoolSize;
    this._ipv4PoolSizeVariable = config.ipv4PoolSizeVariable;
    this._ipv6PoolSize = config.ipv6PoolSize;
    this._ipv6PoolSizeVariable = config.ipv6PoolSizeVariable;
    this._name = config.name;
    this._pskAuthenticationPreSharedKey = config.pskAuthenticationPreSharedKey;
    this._pskAuthenticationPreSharedKeyVariable = config.pskAuthenticationPreSharedKeyVariable;
    this._pskAuthenticationType = config.pskAuthenticationType;
    this._pskAuthenticationTypeVariable = config.pskAuthenticationTypeVariable;
    this._radiusGroupName = config.radiusGroupName;
    this._radiusGroupNameVariable = config.radiusGroupNameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_derive_name_from_peer_domain - computed: false, optional: true, required: false
  private _aaaDeriveNameFromPeerDomain?: string; 
  public get aaaDeriveNameFromPeerDomain() {
    return this.getStringAttribute('aaa_derive_name_from_peer_domain');
  }
  public set aaaDeriveNameFromPeerDomain(value: string) {
    this._aaaDeriveNameFromPeerDomain = value;
  }
  public resetAaaDeriveNameFromPeerDomain() {
    this._aaaDeriveNameFromPeerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDeriveNameFromPeerDomainInput() {
    return this._aaaDeriveNameFromPeerDomain;
  }

  // aaa_derive_name_from_peer_domain_variable - computed: false, optional: true, required: false
  private _aaaDeriveNameFromPeerDomainVariable?: string; 
  public get aaaDeriveNameFromPeerDomainVariable() {
    return this.getStringAttribute('aaa_derive_name_from_peer_domain_variable');
  }
  public set aaaDeriveNameFromPeerDomainVariable(value: string) {
    this._aaaDeriveNameFromPeerDomainVariable = value;
  }
  public resetAaaDeriveNameFromPeerDomainVariable() {
    this._aaaDeriveNameFromPeerDomainVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDeriveNameFromPeerDomainVariableInput() {
    return this._aaaDeriveNameFromPeerDomainVariable;
  }

  // aaa_derive_name_from_peer_identity - computed: false, optional: true, required: false
  private _aaaDeriveNameFromPeerIdentity?: string; 
  public get aaaDeriveNameFromPeerIdentity() {
    return this.getStringAttribute('aaa_derive_name_from_peer_identity');
  }
  public set aaaDeriveNameFromPeerIdentity(value: string) {
    this._aaaDeriveNameFromPeerIdentity = value;
  }
  public resetAaaDeriveNameFromPeerIdentity() {
    this._aaaDeriveNameFromPeerIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDeriveNameFromPeerIdentityInput() {
    return this._aaaDeriveNameFromPeerIdentity;
  }

  // aaa_derive_name_from_peer_identity_variable - computed: false, optional: true, required: false
  private _aaaDeriveNameFromPeerIdentityVariable?: string; 
  public get aaaDeriveNameFromPeerIdentityVariable() {
    return this.getStringAttribute('aaa_derive_name_from_peer_identity_variable');
  }
  public set aaaDeriveNameFromPeerIdentityVariable(value: string) {
    this._aaaDeriveNameFromPeerIdentityVariable = value;
  }
  public resetAaaDeriveNameFromPeerIdentityVariable() {
    this._aaaDeriveNameFromPeerIdentityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDeriveNameFromPeerIdentityVariableInput() {
    return this._aaaDeriveNameFromPeerIdentityVariable;
  }

  // aaa_enable_accounting - computed: false, optional: true, required: false
  private _aaaEnableAccounting?: boolean | cdktf.IResolvable; 
  public get aaaEnableAccounting() {
    return this.getBooleanAttribute('aaa_enable_accounting');
  }
  public set aaaEnableAccounting(value: boolean | cdktf.IResolvable) {
    this._aaaEnableAccounting = value;
  }
  public resetAaaEnableAccounting() {
    this._aaaEnableAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaEnableAccountingInput() {
    return this._aaaEnableAccounting;
  }

  // aaa_enable_accounting_variable - computed: false, optional: true, required: false
  private _aaaEnableAccountingVariable?: string; 
  public get aaaEnableAccountingVariable() {
    return this.getStringAttribute('aaa_enable_accounting_variable');
  }
  public set aaaEnableAccountingVariable(value: string) {
    this._aaaEnableAccountingVariable = value;
  }
  public resetAaaEnableAccountingVariable() {
    this._aaaEnableAccountingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaEnableAccountingVariableInput() {
    return this._aaaEnableAccountingVariable;
  }

  // aaa_specify_name_policy_name - computed: false, optional: true, required: false
  private _aaaSpecifyNamePolicyName?: string; 
  public get aaaSpecifyNamePolicyName() {
    return this.getStringAttribute('aaa_specify_name_policy_name');
  }
  public set aaaSpecifyNamePolicyName(value: string) {
    this._aaaSpecifyNamePolicyName = value;
  }
  public resetAaaSpecifyNamePolicyName() {
    this._aaaSpecifyNamePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaSpecifyNamePolicyNameInput() {
    return this._aaaSpecifyNamePolicyName;
  }

  // aaa_specify_name_policy_name_variable - computed: false, optional: true, required: false
  private _aaaSpecifyNamePolicyNameVariable?: string; 
  public get aaaSpecifyNamePolicyNameVariable() {
    return this.getStringAttribute('aaa_specify_name_policy_name_variable');
  }
  public set aaaSpecifyNamePolicyNameVariable(value: string) {
    this._aaaSpecifyNamePolicyNameVariable = value;
  }
  public resetAaaSpecifyNamePolicyNameVariable() {
    this._aaaSpecifyNamePolicyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaSpecifyNamePolicyNameVariableInput() {
    return this._aaaSpecifyNamePolicyNameVariable;
  }

  // aaa_specify_name_policy_password - computed: false, optional: true, required: false
  private _aaaSpecifyNamePolicyPassword?: string; 
  public get aaaSpecifyNamePolicyPassword() {
    return this.getStringAttribute('aaa_specify_name_policy_password');
  }
  public set aaaSpecifyNamePolicyPassword(value: string) {
    this._aaaSpecifyNamePolicyPassword = value;
  }
  public resetAaaSpecifyNamePolicyPassword() {
    this._aaaSpecifyNamePolicyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaSpecifyNamePolicyPasswordInput() {
    return this._aaaSpecifyNamePolicyPassword;
  }

  // aaa_specify_name_policy_password_variable - computed: false, optional: true, required: false
  private _aaaSpecifyNamePolicyPasswordVariable?: string; 
  public get aaaSpecifyNamePolicyPasswordVariable() {
    return this.getStringAttribute('aaa_specify_name_policy_password_variable');
  }
  public set aaaSpecifyNamePolicyPasswordVariable(value: string) {
    this._aaaSpecifyNamePolicyPasswordVariable = value;
  }
  public resetAaaSpecifyNamePolicyPasswordVariable() {
    this._aaaSpecifyNamePolicyPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaSpecifyNamePolicyPasswordVariableInput() {
    return this._aaaSpecifyNamePolicyPasswordVariable;
  }

  // any_connect_eap_authentication_type - computed: false, optional: true, required: false
  private _anyConnectEapAuthenticationType?: string; 
  public get anyConnectEapAuthenticationType() {
    return this.getStringAttribute('any_connect_eap_authentication_type');
  }
  public set anyConnectEapAuthenticationType(value: string) {
    this._anyConnectEapAuthenticationType = value;
  }
  public resetAnyConnectEapAuthenticationType() {
    this._anyConnectEapAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyConnectEapAuthenticationTypeInput() {
    return this._anyConnectEapAuthenticationType;
  }

  // connection_type_ssl - computed: false, optional: true, required: false
  private _connectionTypeSsl?: boolean | cdktf.IResolvable; 
  public get connectionTypeSsl() {
    return this.getBooleanAttribute('connection_type_ssl');
  }
  public set connectionTypeSsl(value: boolean | cdktf.IResolvable) {
    this._connectionTypeSsl = value;
  }
  public resetConnectionTypeSsl() {
    this._connectionTypeSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeSslInput() {
    return this._connectionTypeSsl;
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

  // enable_certificate_list_check - computed: false, optional: true, required: false
  private _enableCertificateListCheck?: boolean | cdktf.IResolvable; 
  public get enableCertificateListCheck() {
    return this.getBooleanAttribute('enable_certificate_list_check');
  }
  public set enableCertificateListCheck(value: boolean | cdktf.IResolvable) {
    this._enableCertificateListCheck = value;
  }
  public resetEnableCertificateListCheck() {
    this._enableCertificateListCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificateListCheckInput() {
    return this._enableCertificateListCheck;
  }

  // enable_certificate_list_check_variable - computed: false, optional: true, required: false
  private _enableCertificateListCheckVariable?: string; 
  public get enableCertificateListCheckVariable() {
    return this.getStringAttribute('enable_certificate_list_check_variable');
  }
  public set enableCertificateListCheckVariable(value: string) {
    this._enableCertificateListCheckVariable = value;
  }
  public resetEnableCertificateListCheckVariable() {
    this._enableCertificateListCheckVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificateListCheckVariableInput() {
    return this._enableCertificateListCheckVariable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ikev2_anti_dos_threshold - computed: false, optional: true, required: false
  private _ikev2AntiDosThreshold?: number; 
  public get ikev2AntiDosThreshold() {
    return this.getNumberAttribute('ikev2_anti_dos_threshold');
  }
  public set ikev2AntiDosThreshold(value: number) {
    this._ikev2AntiDosThreshold = value;
  }
  public resetIkev2AntiDosThreshold() {
    this._ikev2AntiDosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2AntiDosThresholdInput() {
    return this._ikev2AntiDosThreshold;
  }

  // ikev2_anti_dos_threshold_variable - computed: false, optional: true, required: false
  private _ikev2AntiDosThresholdVariable?: string; 
  public get ikev2AntiDosThresholdVariable() {
    return this.getStringAttribute('ikev2_anti_dos_threshold_variable');
  }
  public set ikev2AntiDosThresholdVariable(value: string) {
    this._ikev2AntiDosThresholdVariable = value;
  }
  public resetIkev2AntiDosThresholdVariable() {
    this._ikev2AntiDosThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2AntiDosThresholdVariableInput() {
    return this._ikev2AntiDosThresholdVariable;
  }

  // ikev2_local_ike_identity_type - computed: false, optional: true, required: false
  private _ikev2LocalIkeIdentityType?: string; 
  public get ikev2LocalIkeIdentityType() {
    return this.getStringAttribute('ikev2_local_ike_identity_type');
  }
  public set ikev2LocalIkeIdentityType(value: string) {
    this._ikev2LocalIkeIdentityType = value;
  }
  public resetIkev2LocalIkeIdentityType() {
    this._ikev2LocalIkeIdentityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2LocalIkeIdentityTypeInput() {
    return this._ikev2LocalIkeIdentityType;
  }

  // ikev2_local_ike_identity_type_variable - computed: false, optional: true, required: false
  private _ikev2LocalIkeIdentityTypeVariable?: string; 
  public get ikev2LocalIkeIdentityTypeVariable() {
    return this.getStringAttribute('ikev2_local_ike_identity_type_variable');
  }
  public set ikev2LocalIkeIdentityTypeVariable(value: string) {
    this._ikev2LocalIkeIdentityTypeVariable = value;
  }
  public resetIkev2LocalIkeIdentityTypeVariable() {
    this._ikev2LocalIkeIdentityTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2LocalIkeIdentityTypeVariableInput() {
    return this._ikev2LocalIkeIdentityTypeVariable;
  }

  // ikev2_local_ike_identity_value - computed: false, optional: true, required: false
  private _ikev2LocalIkeIdentityValue?: string; 
  public get ikev2LocalIkeIdentityValue() {
    return this.getStringAttribute('ikev2_local_ike_identity_value');
  }
  public set ikev2LocalIkeIdentityValue(value: string) {
    this._ikev2LocalIkeIdentityValue = value;
  }
  public resetIkev2LocalIkeIdentityValue() {
    this._ikev2LocalIkeIdentityValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2LocalIkeIdentityValueInput() {
    return this._ikev2LocalIkeIdentityValue;
  }

  // ikev2_local_ike_identity_value_variable - computed: false, optional: true, required: false
  private _ikev2LocalIkeIdentityValueVariable?: string; 
  public get ikev2LocalIkeIdentityValueVariable() {
    return this.getStringAttribute('ikev2_local_ike_identity_value_variable');
  }
  public set ikev2LocalIkeIdentityValueVariable(value: string) {
    this._ikev2LocalIkeIdentityValueVariable = value;
  }
  public resetIkev2LocalIkeIdentityValueVariable() {
    this._ikev2LocalIkeIdentityValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2LocalIkeIdentityValueVariableInput() {
    return this._ikev2LocalIkeIdentityValueVariable;
  }

  // ikev2_security_association_lifetime - computed: false, optional: true, required: false
  private _ikev2SecurityAssociationLifetime?: number; 
  public get ikev2SecurityAssociationLifetime() {
    return this.getNumberAttribute('ikev2_security_association_lifetime');
  }
  public set ikev2SecurityAssociationLifetime(value: number) {
    this._ikev2SecurityAssociationLifetime = value;
  }
  public resetIkev2SecurityAssociationLifetime() {
    this._ikev2SecurityAssociationLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2SecurityAssociationLifetimeInput() {
    return this._ikev2SecurityAssociationLifetime;
  }

  // ikev2_security_association_lifetime_variable - computed: false, optional: true, required: false
  private _ikev2SecurityAssociationLifetimeVariable?: string; 
  public get ikev2SecurityAssociationLifetimeVariable() {
    return this.getStringAttribute('ikev2_security_association_lifetime_variable');
  }
  public set ikev2SecurityAssociationLifetimeVariable(value: string) {
    this._ikev2SecurityAssociationLifetimeVariable = value;
  }
  public resetIkev2SecurityAssociationLifetimeVariable() {
    this._ikev2SecurityAssociationLifetimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2SecurityAssociationLifetimeVariableInput() {
    return this._ikev2SecurityAssociationLifetimeVariable;
  }

  // ipsec_anti_replay_window_size - computed: false, optional: true, required: false
  private _ipsecAntiReplayWindowSize?: number; 
  public get ipsecAntiReplayWindowSize() {
    return this.getNumberAttribute('ipsec_anti_replay_window_size');
  }
  public set ipsecAntiReplayWindowSize(value: number) {
    this._ipsecAntiReplayWindowSize = value;
  }
  public resetIpsecAntiReplayWindowSize() {
    this._ipsecAntiReplayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAntiReplayWindowSizeInput() {
    return this._ipsecAntiReplayWindowSize;
  }

  // ipsec_anti_replay_window_size_variable - computed: false, optional: true, required: false
  private _ipsecAntiReplayWindowSizeVariable?: string; 
  public get ipsecAntiReplayWindowSizeVariable() {
    return this.getStringAttribute('ipsec_anti_replay_window_size_variable');
  }
  public set ipsecAntiReplayWindowSizeVariable(value: string) {
    this._ipsecAntiReplayWindowSizeVariable = value;
  }
  public resetIpsecAntiReplayWindowSizeVariable() {
    this._ipsecAntiReplayWindowSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAntiReplayWindowSizeVariableInput() {
    return this._ipsecAntiReplayWindowSizeVariable;
  }

  // ipsec_enable_anti_replay - computed: false, optional: true, required: false
  private _ipsecEnableAntiReplay?: boolean | cdktf.IResolvable; 
  public get ipsecEnableAntiReplay() {
    return this.getBooleanAttribute('ipsec_enable_anti_replay');
  }
  public set ipsecEnableAntiReplay(value: boolean | cdktf.IResolvable) {
    this._ipsecEnableAntiReplay = value;
  }
  public resetIpsecEnableAntiReplay() {
    this._ipsecEnableAntiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEnableAntiReplayInput() {
    return this._ipsecEnableAntiReplay;
  }

  // ipsec_enable_anti_replay_variable - computed: false, optional: true, required: false
  private _ipsecEnableAntiReplayVariable?: string; 
  public get ipsecEnableAntiReplayVariable() {
    return this.getStringAttribute('ipsec_enable_anti_replay_variable');
  }
  public set ipsecEnableAntiReplayVariable(value: string) {
    this._ipsecEnableAntiReplayVariable = value;
  }
  public resetIpsecEnableAntiReplayVariable() {
    this._ipsecEnableAntiReplayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEnableAntiReplayVariableInput() {
    return this._ipsecEnableAntiReplayVariable;
  }

  // ipsec_enable_perfect_foward_secrecy - computed: false, optional: true, required: false
  private _ipsecEnablePerfectFowardSecrecy?: boolean | cdktf.IResolvable; 
  public get ipsecEnablePerfectFowardSecrecy() {
    return this.getBooleanAttribute('ipsec_enable_perfect_foward_secrecy');
  }
  public set ipsecEnablePerfectFowardSecrecy(value: boolean | cdktf.IResolvable) {
    this._ipsecEnablePerfectFowardSecrecy = value;
  }
  public resetIpsecEnablePerfectFowardSecrecy() {
    this._ipsecEnablePerfectFowardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEnablePerfectFowardSecrecyInput() {
    return this._ipsecEnablePerfectFowardSecrecy;
  }

  // ipsec_enable_perfect_foward_secrecy_variable - computed: false, optional: true, required: false
  private _ipsecEnablePerfectFowardSecrecyVariable?: string; 
  public get ipsecEnablePerfectFowardSecrecyVariable() {
    return this.getStringAttribute('ipsec_enable_perfect_foward_secrecy_variable');
  }
  public set ipsecEnablePerfectFowardSecrecyVariable(value: string) {
    this._ipsecEnablePerfectFowardSecrecyVariable = value;
  }
  public resetIpsecEnablePerfectFowardSecrecyVariable() {
    this._ipsecEnablePerfectFowardSecrecyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEnablePerfectFowardSecrecyVariableInput() {
    return this._ipsecEnablePerfectFowardSecrecyVariable;
  }

  // ipsec_security_association_lifetime - computed: false, optional: true, required: false
  private _ipsecSecurityAssociationLifetime?: number; 
  public get ipsecSecurityAssociationLifetime() {
    return this.getNumberAttribute('ipsec_security_association_lifetime');
  }
  public set ipsecSecurityAssociationLifetime(value: number) {
    this._ipsecSecurityAssociationLifetime = value;
  }
  public resetIpsecSecurityAssociationLifetime() {
    this._ipsecSecurityAssociationLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSecurityAssociationLifetimeInput() {
    return this._ipsecSecurityAssociationLifetime;
  }

  // ipsec_security_association_lifetime_variable - computed: false, optional: true, required: false
  private _ipsecSecurityAssociationLifetimeVariable?: string; 
  public get ipsecSecurityAssociationLifetimeVariable() {
    return this.getStringAttribute('ipsec_security_association_lifetime_variable');
  }
  public set ipsecSecurityAssociationLifetimeVariable(value: string) {
    this._ipsecSecurityAssociationLifetimeVariable = value;
  }
  public resetIpsecSecurityAssociationLifetimeVariable() {
    this._ipsecSecurityAssociationLifetimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSecurityAssociationLifetimeVariableInput() {
    return this._ipsecSecurityAssociationLifetimeVariable;
  }

  // ipv4_pool_size - computed: false, optional: true, required: false
  private _ipv4PoolSize?: number; 
  public get ipv4PoolSize() {
    return this.getNumberAttribute('ipv4_pool_size');
  }
  public set ipv4PoolSize(value: number) {
    this._ipv4PoolSize = value;
  }
  public resetIpv4PoolSize() {
    this._ipv4PoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PoolSizeInput() {
    return this._ipv4PoolSize;
  }

  // ipv4_pool_size_variable - computed: false, optional: true, required: false
  private _ipv4PoolSizeVariable?: string; 
  public get ipv4PoolSizeVariable() {
    return this.getStringAttribute('ipv4_pool_size_variable');
  }
  public set ipv4PoolSizeVariable(value: string) {
    this._ipv4PoolSizeVariable = value;
  }
  public resetIpv4PoolSizeVariable() {
    this._ipv4PoolSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PoolSizeVariableInput() {
    return this._ipv4PoolSizeVariable;
  }

  // ipv6_pool_size - computed: false, optional: true, required: false
  private _ipv6PoolSize?: number; 
  public get ipv6PoolSize() {
    return this.getNumberAttribute('ipv6_pool_size');
  }
  public set ipv6PoolSize(value: number) {
    this._ipv6PoolSize = value;
  }
  public resetIpv6PoolSize() {
    this._ipv6PoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolSizeInput() {
    return this._ipv6PoolSize;
  }

  // ipv6_pool_size_variable - computed: false, optional: true, required: false
  private _ipv6PoolSizeVariable?: string; 
  public get ipv6PoolSizeVariable() {
    return this.getStringAttribute('ipv6_pool_size_variable');
  }
  public set ipv6PoolSizeVariable(value: string) {
    this._ipv6PoolSizeVariable = value;
  }
  public resetIpv6PoolSizeVariable() {
    this._ipv6PoolSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolSizeVariableInput() {
    return this._ipv6PoolSizeVariable;
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

  // psk_authentication_pre_shared_key - computed: false, optional: true, required: false
  private _pskAuthenticationPreSharedKey?: string; 
  public get pskAuthenticationPreSharedKey() {
    return this.getStringAttribute('psk_authentication_pre_shared_key');
  }
  public set pskAuthenticationPreSharedKey(value: string) {
    this._pskAuthenticationPreSharedKey = value;
  }
  public resetPskAuthenticationPreSharedKey() {
    this._pskAuthenticationPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskAuthenticationPreSharedKeyInput() {
    return this._pskAuthenticationPreSharedKey;
  }

  // psk_authentication_pre_shared_key_variable - computed: false, optional: true, required: false
  private _pskAuthenticationPreSharedKeyVariable?: string; 
  public get pskAuthenticationPreSharedKeyVariable() {
    return this.getStringAttribute('psk_authentication_pre_shared_key_variable');
  }
  public set pskAuthenticationPreSharedKeyVariable(value: string) {
    this._pskAuthenticationPreSharedKeyVariable = value;
  }
  public resetPskAuthenticationPreSharedKeyVariable() {
    this._pskAuthenticationPreSharedKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskAuthenticationPreSharedKeyVariableInput() {
    return this._pskAuthenticationPreSharedKeyVariable;
  }

  // psk_authentication_type - computed: false, optional: true, required: false
  private _pskAuthenticationType?: string; 
  public get pskAuthenticationType() {
    return this.getStringAttribute('psk_authentication_type');
  }
  public set pskAuthenticationType(value: string) {
    this._pskAuthenticationType = value;
  }
  public resetPskAuthenticationType() {
    this._pskAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskAuthenticationTypeInput() {
    return this._pskAuthenticationType;
  }

  // psk_authentication_type_variable - computed: false, optional: true, required: false
  private _pskAuthenticationTypeVariable?: string; 
  public get pskAuthenticationTypeVariable() {
    return this.getStringAttribute('psk_authentication_type_variable');
  }
  public set pskAuthenticationTypeVariable(value: string) {
    this._pskAuthenticationTypeVariable = value;
  }
  public resetPskAuthenticationTypeVariable() {
    this._pskAuthenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskAuthenticationTypeVariableInput() {
    return this._pskAuthenticationTypeVariable;
  }

  // radius_group_name - computed: false, optional: false, required: true
  private _radiusGroupName?: string; 
  public get radiusGroupName() {
    return this.getStringAttribute('radius_group_name');
  }
  public set radiusGroupName(value: string) {
    this._radiusGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupNameInput() {
    return this._radiusGroupName;
  }

  // radius_group_name_variable - computed: false, optional: true, required: false
  private _radiusGroupNameVariable?: string; 
  public get radiusGroupNameVariable() {
    return this.getStringAttribute('radius_group_name_variable');
  }
  public set radiusGroupNameVariable(value: string) {
    this._radiusGroupNameVariable = value;
  }
  public resetRadiusGroupNameVariable() {
    this._radiusGroupNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupNameVariableInput() {
    return this._radiusGroupNameVariable;
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
      aaa_derive_name_from_peer_domain: cdktf.stringToTerraform(this._aaaDeriveNameFromPeerDomain),
      aaa_derive_name_from_peer_domain_variable: cdktf.stringToTerraform(this._aaaDeriveNameFromPeerDomainVariable),
      aaa_derive_name_from_peer_identity: cdktf.stringToTerraform(this._aaaDeriveNameFromPeerIdentity),
      aaa_derive_name_from_peer_identity_variable: cdktf.stringToTerraform(this._aaaDeriveNameFromPeerIdentityVariable),
      aaa_enable_accounting: cdktf.booleanToTerraform(this._aaaEnableAccounting),
      aaa_enable_accounting_variable: cdktf.stringToTerraform(this._aaaEnableAccountingVariable),
      aaa_specify_name_policy_name: cdktf.stringToTerraform(this._aaaSpecifyNamePolicyName),
      aaa_specify_name_policy_name_variable: cdktf.stringToTerraform(this._aaaSpecifyNamePolicyNameVariable),
      aaa_specify_name_policy_password: cdktf.stringToTerraform(this._aaaSpecifyNamePolicyPassword),
      aaa_specify_name_policy_password_variable: cdktf.stringToTerraform(this._aaaSpecifyNamePolicyPasswordVariable),
      any_connect_eap_authentication_type: cdktf.stringToTerraform(this._anyConnectEapAuthenticationType),
      connection_type_ssl: cdktf.booleanToTerraform(this._connectionTypeSsl),
      description: cdktf.stringToTerraform(this._description),
      enable_certificate_list_check: cdktf.booleanToTerraform(this._enableCertificateListCheck),
      enable_certificate_list_check_variable: cdktf.stringToTerraform(this._enableCertificateListCheckVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      ikev2_anti_dos_threshold: cdktf.numberToTerraform(this._ikev2AntiDosThreshold),
      ikev2_anti_dos_threshold_variable: cdktf.stringToTerraform(this._ikev2AntiDosThresholdVariable),
      ikev2_local_ike_identity_type: cdktf.stringToTerraform(this._ikev2LocalIkeIdentityType),
      ikev2_local_ike_identity_type_variable: cdktf.stringToTerraform(this._ikev2LocalIkeIdentityTypeVariable),
      ikev2_local_ike_identity_value: cdktf.stringToTerraform(this._ikev2LocalIkeIdentityValue),
      ikev2_local_ike_identity_value_variable: cdktf.stringToTerraform(this._ikev2LocalIkeIdentityValueVariable),
      ikev2_security_association_lifetime: cdktf.numberToTerraform(this._ikev2SecurityAssociationLifetime),
      ikev2_security_association_lifetime_variable: cdktf.stringToTerraform(this._ikev2SecurityAssociationLifetimeVariable),
      ipsec_anti_replay_window_size: cdktf.numberToTerraform(this._ipsecAntiReplayWindowSize),
      ipsec_anti_replay_window_size_variable: cdktf.stringToTerraform(this._ipsecAntiReplayWindowSizeVariable),
      ipsec_enable_anti_replay: cdktf.booleanToTerraform(this._ipsecEnableAntiReplay),
      ipsec_enable_anti_replay_variable: cdktf.stringToTerraform(this._ipsecEnableAntiReplayVariable),
      ipsec_enable_perfect_foward_secrecy: cdktf.booleanToTerraform(this._ipsecEnablePerfectFowardSecrecy),
      ipsec_enable_perfect_foward_secrecy_variable: cdktf.stringToTerraform(this._ipsecEnablePerfectFowardSecrecyVariable),
      ipsec_security_association_lifetime: cdktf.numberToTerraform(this._ipsecSecurityAssociationLifetime),
      ipsec_security_association_lifetime_variable: cdktf.stringToTerraform(this._ipsecSecurityAssociationLifetimeVariable),
      ipv4_pool_size: cdktf.numberToTerraform(this._ipv4PoolSize),
      ipv4_pool_size_variable: cdktf.stringToTerraform(this._ipv4PoolSizeVariable),
      ipv6_pool_size: cdktf.numberToTerraform(this._ipv6PoolSize),
      ipv6_pool_size_variable: cdktf.stringToTerraform(this._ipv6PoolSizeVariable),
      name: cdktf.stringToTerraform(this._name),
      psk_authentication_pre_shared_key: cdktf.stringToTerraform(this._pskAuthenticationPreSharedKey),
      psk_authentication_pre_shared_key_variable: cdktf.stringToTerraform(this._pskAuthenticationPreSharedKeyVariable),
      psk_authentication_type: cdktf.stringToTerraform(this._pskAuthenticationType),
      psk_authentication_type_variable: cdktf.stringToTerraform(this._pskAuthenticationTypeVariable),
      radius_group_name: cdktf.stringToTerraform(this._radiusGroupName),
      radius_group_name_variable: cdktf.stringToTerraform(this._radiusGroupNameVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_derive_name_from_peer_domain: {
        value: cdktf.stringToHclTerraform(this._aaaDeriveNameFromPeerDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_derive_name_from_peer_domain_variable: {
        value: cdktf.stringToHclTerraform(this._aaaDeriveNameFromPeerDomainVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_derive_name_from_peer_identity: {
        value: cdktf.stringToHclTerraform(this._aaaDeriveNameFromPeerIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_derive_name_from_peer_identity_variable: {
        value: cdktf.stringToHclTerraform(this._aaaDeriveNameFromPeerIdentityVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_enable_accounting: {
        value: cdktf.booleanToHclTerraform(this._aaaEnableAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aaa_enable_accounting_variable: {
        value: cdktf.stringToHclTerraform(this._aaaEnableAccountingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_specify_name_policy_name: {
        value: cdktf.stringToHclTerraform(this._aaaSpecifyNamePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_specify_name_policy_name_variable: {
        value: cdktf.stringToHclTerraform(this._aaaSpecifyNamePolicyNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_specify_name_policy_password: {
        value: cdktf.stringToHclTerraform(this._aaaSpecifyNamePolicyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_specify_name_policy_password_variable: {
        value: cdktf.stringToHclTerraform(this._aaaSpecifyNamePolicyPasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      any_connect_eap_authentication_type: {
        value: cdktf.stringToHclTerraform(this._anyConnectEapAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type_ssl: {
        value: cdktf.booleanToHclTerraform(this._connectionTypeSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_certificate_list_check: {
        value: cdktf.booleanToHclTerraform(this._enableCertificateListCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_certificate_list_check_variable: {
        value: cdktf.stringToHclTerraform(this._enableCertificateListCheckVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_anti_dos_threshold: {
        value: cdktf.numberToHclTerraform(this._ikev2AntiDosThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ikev2_anti_dos_threshold_variable: {
        value: cdktf.stringToHclTerraform(this._ikev2AntiDosThresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_local_ike_identity_type: {
        value: cdktf.stringToHclTerraform(this._ikev2LocalIkeIdentityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_local_ike_identity_type_variable: {
        value: cdktf.stringToHclTerraform(this._ikev2LocalIkeIdentityTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_local_ike_identity_value: {
        value: cdktf.stringToHclTerraform(this._ikev2LocalIkeIdentityValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_local_ike_identity_value_variable: {
        value: cdktf.stringToHclTerraform(this._ikev2LocalIkeIdentityValueVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ikev2_security_association_lifetime: {
        value: cdktf.numberToHclTerraform(this._ikev2SecurityAssociationLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ikev2_security_association_lifetime_variable: {
        value: cdktf.stringToHclTerraform(this._ikev2SecurityAssociationLifetimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_anti_replay_window_size: {
        value: cdktf.numberToHclTerraform(this._ipsecAntiReplayWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_anti_replay_window_size_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecAntiReplayWindowSizeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enable_anti_replay: {
        value: cdktf.booleanToHclTerraform(this._ipsecEnableAntiReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipsec_enable_anti_replay_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecEnableAntiReplayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enable_perfect_foward_secrecy: {
        value: cdktf.booleanToHclTerraform(this._ipsecEnablePerfectFowardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipsec_enable_perfect_foward_secrecy_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecEnablePerfectFowardSecrecyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_security_association_lifetime: {
        value: cdktf.numberToHclTerraform(this._ipsecSecurityAssociationLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_security_association_lifetime_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecSecurityAssociationLifetimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_pool_size: {
        value: cdktf.numberToHclTerraform(this._ipv4PoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_pool_size_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4PoolSizeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pool_size: {
        value: cdktf.numberToHclTerraform(this._ipv6PoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_pool_size_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6PoolSizeVariable),
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
      psk_authentication_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._pskAuthenticationPreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk_authentication_pre_shared_key_variable: {
        value: cdktf.stringToHclTerraform(this._pskAuthenticationPreSharedKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk_authentication_type: {
        value: cdktf.stringToHclTerraform(this._pskAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psk_authentication_type_variable: {
        value: cdktf.stringToHclTerraform(this._pskAuthenticationTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_group_name: {
        value: cdktf.stringToHclTerraform(this._radiusGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_group_name_variable: {
        value: cdktf.stringToHclTerraform(this._radiusGroupNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
