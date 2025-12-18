// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}
  */
  readonly areCertificateExtensionsRestricted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}
  */
  readonly isAutoIncludeAltName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}
  */
  readonly isExpiredCertificateBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}
  */
  readonly isOutOfCapacityBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}
  */
  readonly isRevocationStatusTimeoutBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}
  */
  readonly isUnknownRevocationStatusBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}
  */
  readonly isUnsupportedCipherBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}
  */
  readonly isUnsupportedVersionBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}
  */
  readonly isUntrustedIssuerBlocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}
  */
  readonly timeouts?: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts;
}
export interface NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}
  */
  readonly update?: string;
}

export function networkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function networkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}
*/
export class NetworkFirewallNetworkFirewallPolicyDecryptionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_decryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import
  * @param importFromId The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_decryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_decryption_profile',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areCertificateExtensionsRestricted = config.areCertificateExtensionsRestricted;
    this._id = config.id;
    this._isAutoIncludeAltName = config.isAutoIncludeAltName;
    this._isExpiredCertificateBlocked = config.isExpiredCertificateBlocked;
    this._isOutOfCapacityBlocked = config.isOutOfCapacityBlocked;
    this._isRevocationStatusTimeoutBlocked = config.isRevocationStatusTimeoutBlocked;
    this._isUnknownRevocationStatusBlocked = config.isUnknownRevocationStatusBlocked;
    this._isUnsupportedCipherBlocked = config.isUnsupportedCipherBlocked;
    this._isUnsupportedVersionBlocked = config.isUnsupportedVersionBlocked;
    this._isUntrustedIssuerBlocked = config.isUntrustedIssuerBlocked;
    this._name = config.name;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_certificate_extensions_restricted - computed: true, optional: true, required: false
  private _areCertificateExtensionsRestricted?: boolean | cdktf.IResolvable; 
  public get areCertificateExtensionsRestricted() {
    return this.getBooleanAttribute('are_certificate_extensions_restricted');
  }
  public set areCertificateExtensionsRestricted(value: boolean | cdktf.IResolvable) {
    this._areCertificateExtensionsRestricted = value;
  }
  public resetAreCertificateExtensionsRestricted() {
    this._areCertificateExtensionsRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areCertificateExtensionsRestrictedInput() {
    return this._areCertificateExtensionsRestricted;
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

  // is_auto_include_alt_name - computed: true, optional: true, required: false
  private _isAutoIncludeAltName?: boolean | cdktf.IResolvable; 
  public get isAutoIncludeAltName() {
    return this.getBooleanAttribute('is_auto_include_alt_name');
  }
  public set isAutoIncludeAltName(value: boolean | cdktf.IResolvable) {
    this._isAutoIncludeAltName = value;
  }
  public resetIsAutoIncludeAltName() {
    this._isAutoIncludeAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoIncludeAltNameInput() {
    return this._isAutoIncludeAltName;
  }

  // is_expired_certificate_blocked - computed: true, optional: true, required: false
  private _isExpiredCertificateBlocked?: boolean | cdktf.IResolvable; 
  public get isExpiredCertificateBlocked() {
    return this.getBooleanAttribute('is_expired_certificate_blocked');
  }
  public set isExpiredCertificateBlocked(value: boolean | cdktf.IResolvable) {
    this._isExpiredCertificateBlocked = value;
  }
  public resetIsExpiredCertificateBlocked() {
    this._isExpiredCertificateBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExpiredCertificateBlockedInput() {
    return this._isExpiredCertificateBlocked;
  }

  // is_out_of_capacity_blocked - computed: true, optional: true, required: false
  private _isOutOfCapacityBlocked?: boolean | cdktf.IResolvable; 
  public get isOutOfCapacityBlocked() {
    return this.getBooleanAttribute('is_out_of_capacity_blocked');
  }
  public set isOutOfCapacityBlocked(value: boolean | cdktf.IResolvable) {
    this._isOutOfCapacityBlocked = value;
  }
  public resetIsOutOfCapacityBlocked() {
    this._isOutOfCapacityBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutOfCapacityBlockedInput() {
    return this._isOutOfCapacityBlocked;
  }

  // is_revocation_status_timeout_blocked - computed: true, optional: true, required: false
  private _isRevocationStatusTimeoutBlocked?: boolean | cdktf.IResolvable; 
  public get isRevocationStatusTimeoutBlocked() {
    return this.getBooleanAttribute('is_revocation_status_timeout_blocked');
  }
  public set isRevocationStatusTimeoutBlocked(value: boolean | cdktf.IResolvable) {
    this._isRevocationStatusTimeoutBlocked = value;
  }
  public resetIsRevocationStatusTimeoutBlocked() {
    this._isRevocationStatusTimeoutBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRevocationStatusTimeoutBlockedInput() {
    return this._isRevocationStatusTimeoutBlocked;
  }

  // is_unknown_revocation_status_blocked - computed: true, optional: true, required: false
  private _isUnknownRevocationStatusBlocked?: boolean | cdktf.IResolvable; 
  public get isUnknownRevocationStatusBlocked() {
    return this.getBooleanAttribute('is_unknown_revocation_status_blocked');
  }
  public set isUnknownRevocationStatusBlocked(value: boolean | cdktf.IResolvable) {
    this._isUnknownRevocationStatusBlocked = value;
  }
  public resetIsUnknownRevocationStatusBlocked() {
    this._isUnknownRevocationStatusBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnknownRevocationStatusBlockedInput() {
    return this._isUnknownRevocationStatusBlocked;
  }

  // is_unsupported_cipher_blocked - computed: true, optional: true, required: false
  private _isUnsupportedCipherBlocked?: boolean | cdktf.IResolvable; 
  public get isUnsupportedCipherBlocked() {
    return this.getBooleanAttribute('is_unsupported_cipher_blocked');
  }
  public set isUnsupportedCipherBlocked(value: boolean | cdktf.IResolvable) {
    this._isUnsupportedCipherBlocked = value;
  }
  public resetIsUnsupportedCipherBlocked() {
    this._isUnsupportedCipherBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnsupportedCipherBlockedInput() {
    return this._isUnsupportedCipherBlocked;
  }

  // is_unsupported_version_blocked - computed: true, optional: true, required: false
  private _isUnsupportedVersionBlocked?: boolean | cdktf.IResolvable; 
  public get isUnsupportedVersionBlocked() {
    return this.getBooleanAttribute('is_unsupported_version_blocked');
  }
  public set isUnsupportedVersionBlocked(value: boolean | cdktf.IResolvable) {
    this._isUnsupportedVersionBlocked = value;
  }
  public resetIsUnsupportedVersionBlocked() {
    this._isUnsupportedVersionBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnsupportedVersionBlockedInput() {
    return this._isUnsupportedVersionBlocked;
  }

  // is_untrusted_issuer_blocked - computed: true, optional: true, required: false
  private _isUntrustedIssuerBlocked?: boolean | cdktf.IResolvable; 
  public get isUntrustedIssuerBlocked() {
    return this.getBooleanAttribute('is_untrusted_issuer_blocked');
  }
  public set isUntrustedIssuerBlocked(value: boolean | cdktf.IResolvable) {
    this._isUntrustedIssuerBlocked = value;
  }
  public resetIsUntrustedIssuerBlocked() {
    this._isUntrustedIssuerBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUntrustedIssuerBlockedInput() {
    return this._isUntrustedIssuerBlocked;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_certificate_extensions_restricted: cdktf.booleanToTerraform(this._areCertificateExtensionsRestricted),
      id: cdktf.stringToTerraform(this._id),
      is_auto_include_alt_name: cdktf.booleanToTerraform(this._isAutoIncludeAltName),
      is_expired_certificate_blocked: cdktf.booleanToTerraform(this._isExpiredCertificateBlocked),
      is_out_of_capacity_blocked: cdktf.booleanToTerraform(this._isOutOfCapacityBlocked),
      is_revocation_status_timeout_blocked: cdktf.booleanToTerraform(this._isRevocationStatusTimeoutBlocked),
      is_unknown_revocation_status_blocked: cdktf.booleanToTerraform(this._isUnknownRevocationStatusBlocked),
      is_unsupported_cipher_blocked: cdktf.booleanToTerraform(this._isUnsupportedCipherBlocked),
      is_unsupported_version_blocked: cdktf.booleanToTerraform(this._isUnsupportedVersionBlocked),
      is_untrusted_issuer_blocked: cdktf.booleanToTerraform(this._isUntrustedIssuerBlocked),
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: networkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_certificate_extensions_restricted: {
        value: cdktf.booleanToHclTerraform(this._areCertificateExtensionsRestricted),
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
      is_auto_include_alt_name: {
        value: cdktf.booleanToHclTerraform(this._isAutoIncludeAltName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_expired_certificate_blocked: {
        value: cdktf.booleanToHclTerraform(this._isExpiredCertificateBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_out_of_capacity_blocked: {
        value: cdktf.booleanToHclTerraform(this._isOutOfCapacityBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_revocation_status_timeout_blocked: {
        value: cdktf.booleanToHclTerraform(this._isRevocationStatusTimeoutBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unknown_revocation_status_blocked: {
        value: cdktf.booleanToHclTerraform(this._isUnknownRevocationStatusBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unsupported_cipher_blocked: {
        value: cdktf.booleanToHclTerraform(this._isUnsupportedCipherBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unsupported_version_blocked: {
        value: cdktf.booleanToHclTerraform(this._isUnsupportedVersionBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_untrusted_issuer_blocked: {
        value: cdktf.booleanToHclTerraform(this._isUntrustedIssuerBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
