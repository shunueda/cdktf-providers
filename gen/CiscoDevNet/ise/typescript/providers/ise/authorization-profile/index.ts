// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access type
  *   - Choices: `ACCESS_ACCEPT`, `ACCESS_REJECT`
  *   - Default value: `ACCESS_ACCEPT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#access_type AuthorizationProfile#access_type}
  */
  readonly accessType?: string;
  /**
  * ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#acl AuthorizationProfile#acl}
  */
  readonly acl?: string;
  /**
  * List of advanced attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#advanced_attributes AuthorizationProfile#advanced_attributes}
  */
  readonly advancedAttributes?: AuthorizationProfileAdvancedAttributes[] | cdktf.IResolvable;
  /**
  * Agentless Posture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#agentless_posture AuthorizationProfile#agentless_posture}
  */
  readonly agentlessPosture?: boolean | cdktf.IResolvable;
  /**
  * Airespace ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#airespace_acl AuthorizationProfile#airespace_acl}
  */
  readonly airespaceAcl?: string;
  /**
  * Airespace IPv6 ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#airespace_ipv6_acl AuthorizationProfile#airespace_ipv6_acl}
  */
  readonly airespaceIpv6Acl?: string;
  /**
  * ASA VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#asa_vpn AuthorizationProfile#asa_vpn}
  */
  readonly asaVpn?: string;
  /**
  * Auto smart port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#auto_smart_port AuthorizationProfile#auto_smart_port}
  */
  readonly autoSmartPort?: string;
  /**
  * AVC profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#avc_profile AuthorizationProfile#avc_profile}
  */
  readonly avcProfile?: string;
  /**
  * DACL name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#dacl_name AuthorizationProfile#dacl_name}
  */
  readonly daclName?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#description AuthorizationProfile#description}
  */
  readonly description?: string;
  /**
  * Easy wired session candidate
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#easywired_session_candidate AuthorizationProfile#easywired_session_candidate}
  */
  readonly easywiredSessionCandidate?: boolean | cdktf.IResolvable;
  /**
  * Interface template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#interface_template AuthorizationProfile#interface_template}
  */
  readonly interfaceTemplate?: string;
  /**
  * IPv6 ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#ipv6_acl_filter AuthorizationProfile#ipv6_acl_filter}
  */
  readonly ipv6AclFilter?: string;
  /**
  * IPv6 DACL name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#ipv6_dacl_name AuthorizationProfile#ipv6_dacl_name}
  */
  readonly ipv6DaclName?: string;
  /**
  * MacSec policy
  *   - Choices: `MUST_SECURE`, `MUST_NOT_SECURE`, `SHOULD_SECURE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#mac_sec_policy AuthorizationProfile#mac_sec_policy}
  */
  readonly macSecPolicy?: string;
  /**
  * The name of the authorization profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#name AuthorizationProfile#name}
  */
  readonly name: string;
  /**
  * NEAT
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#neat AuthorizationProfile#neat}
  */
  readonly neat?: boolean | cdktf.IResolvable;
  /**
  * Value needs to be an existing Network Device Profile
  *   - Default value: `Cisco`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#profile_name AuthorizationProfile#profile_name}
  */
  readonly profileName?: string;
  /**
  * Maintain Connectivity During Reauthentication
  *   - Choices: `DEFAULT`, `RADIUS_REQUEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#reauthentication_connectivity AuthorizationProfile#reauthentication_connectivity}
  */
  readonly reauthenticationConnectivity?: string;
  /**
  * Reauthentication timer
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#reauthentication_timer AuthorizationProfile#reauthentication_timer}
  */
  readonly reauthenticationTimer?: number;
  /**
  * Service template
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#service_template AuthorizationProfile#service_template}
  */
  readonly serviceTemplate?: boolean | cdktf.IResolvable;
  /**
  * Track movement
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#track_movement AuthorizationProfile#track_movement}
  */
  readonly trackMovement?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#unique_identifier AuthorizationProfile#unique_identifier}
  */
  readonly uniqueIdentifier?: string;
  /**
  * Vlan name or ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#vlan_name_id AuthorizationProfile#vlan_name_id}
  */
  readonly vlanNameId?: string;
  /**
  * Vlan tag ID
  *   - Range: `0`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#vlan_tag_id AuthorizationProfile#vlan_tag_id}
  */
  readonly vlanTagId?: number;
  /**
  * Voice domain permission
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#voice_domain_permission AuthorizationProfile#voice_domain_permission}
  */
  readonly voiceDomainPermission?: boolean | cdktf.IResolvable;
  /**
  * Web authentication (local)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_auth AuthorizationProfile#web_auth}
  */
  readonly webAuth?: boolean | cdktf.IResolvable;
  /**
  * Web redirection ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_redirection_acl AuthorizationProfile#web_redirection_acl}
  */
  readonly webRedirectionAcl?: string;
  /**
  * This attribute is mandatory when `web_redirection_type` value is `CentralizedWebAuth`. For all other `web_redirection_type` values the field must be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_redirection_display_certificates_renewal_messages AuthorizationProfile#web_redirection_display_certificates_renewal_messages}
  */
  readonly webRedirectionDisplayCertificatesRenewalMessages?: boolean | cdktf.IResolvable;
  /**
  * A portal that exist in the DB and fits the `web_redirection_type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_redirection_portal_name AuthorizationProfile#web_redirection_portal_name}
  */
  readonly webRedirectionPortalName?: string;
  /**
  * IP, hostname or FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_redirection_static_ip_host_name_fqdn AuthorizationProfile#web_redirection_static_ip_host_name_fqdn}
  */
  readonly webRedirectionStaticIpHostNameFqdn?: string;
  /**
  * This type must fit the `web_redirection_portal_name`
  *   - Choices: `CentralizedWebAuth`, `HotSpot`, `NativeSupplicanProvisioning`, `ClientProvisioning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#web_redirection_type AuthorizationProfile#web_redirection_type}
  */
  readonly webRedirectionType?: string;
}
export interface AuthorizationProfileAdvancedAttributes {
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_left_dictionary_name AuthorizationProfile#attribute_left_dictionary_name}
  */
  readonly attributeLeftDictionaryName?: string;
  /**
  * Attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_left_name AuthorizationProfile#attribute_left_name}
  */
  readonly attributeLeftName?: string;
  /**
  * Dictionary name, only required when `attribute_right_value_type` is `AdvancedDictionaryAttribute`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_right_dictionary_name AuthorizationProfile#attribute_right_dictionary_name}
  */
  readonly attributeRightDictionaryName?: string;
  /**
  * Attribute name, only required when `attribute_right_value_type` is `AdvancedDictionaryAttribute`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_right_name AuthorizationProfile#attribute_right_name}
  */
  readonly attributeRightName?: string;
  /**
  * Attribute value, only required when `attribute_right_value_type` is `AttributeValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_right_value AuthorizationProfile#attribute_right_value}
  */
  readonly attributeRightValue?: string;
  /**
  * Advanced attribute value type
  *   - Choices: `AdvancedDictionaryAttribute`, `AttributeValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#attribute_right_value_type AuthorizationProfile#attribute_right_value_type}
  */
  readonly attributeRightValueType?: string;
}

export function authorizationProfileAdvancedAttributesToTerraform(struct?: AuthorizationProfileAdvancedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_left_dictionary_name: cdktf.stringToTerraform(struct!.attributeLeftDictionaryName),
    attribute_left_name: cdktf.stringToTerraform(struct!.attributeLeftName),
    attribute_right_dictionary_name: cdktf.stringToTerraform(struct!.attributeRightDictionaryName),
    attribute_right_name: cdktf.stringToTerraform(struct!.attributeRightName),
    attribute_right_value: cdktf.stringToTerraform(struct!.attributeRightValue),
    attribute_right_value_type: cdktf.stringToTerraform(struct!.attributeRightValueType),
  }
}


export function authorizationProfileAdvancedAttributesToHclTerraform(struct?: AuthorizationProfileAdvancedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_left_dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeLeftDictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_left_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeLeftName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_right_dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeRightDictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_right_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeRightName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_right_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeRightValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_right_value_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeRightValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizationProfileAdvancedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AuthorizationProfileAdvancedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeLeftDictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeLeftDictionaryName = this._attributeLeftDictionaryName;
    }
    if (this._attributeLeftName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeLeftName = this._attributeLeftName;
    }
    if (this._attributeRightDictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRightDictionaryName = this._attributeRightDictionaryName;
    }
    if (this._attributeRightName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRightName = this._attributeRightName;
    }
    if (this._attributeRightValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRightValue = this._attributeRightValue;
    }
    if (this._attributeRightValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRightValueType = this._attributeRightValueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizationProfileAdvancedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeLeftDictionaryName = undefined;
      this._attributeLeftName = undefined;
      this._attributeRightDictionaryName = undefined;
      this._attributeRightName = undefined;
      this._attributeRightValue = undefined;
      this._attributeRightValueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeLeftDictionaryName = value.attributeLeftDictionaryName;
      this._attributeLeftName = value.attributeLeftName;
      this._attributeRightDictionaryName = value.attributeRightDictionaryName;
      this._attributeRightName = value.attributeRightName;
      this._attributeRightValue = value.attributeRightValue;
      this._attributeRightValueType = value.attributeRightValueType;
    }
  }

  // attribute_left_dictionary_name - computed: false, optional: true, required: false
  private _attributeLeftDictionaryName?: string; 
  public get attributeLeftDictionaryName() {
    return this.getStringAttribute('attribute_left_dictionary_name');
  }
  public set attributeLeftDictionaryName(value: string) {
    this._attributeLeftDictionaryName = value;
  }
  public resetAttributeLeftDictionaryName() {
    this._attributeLeftDictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeLeftDictionaryNameInput() {
    return this._attributeLeftDictionaryName;
  }

  // attribute_left_name - computed: false, optional: true, required: false
  private _attributeLeftName?: string; 
  public get attributeLeftName() {
    return this.getStringAttribute('attribute_left_name');
  }
  public set attributeLeftName(value: string) {
    this._attributeLeftName = value;
  }
  public resetAttributeLeftName() {
    this._attributeLeftName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeLeftNameInput() {
    return this._attributeLeftName;
  }

  // attribute_right_dictionary_name - computed: false, optional: true, required: false
  private _attributeRightDictionaryName?: string; 
  public get attributeRightDictionaryName() {
    return this.getStringAttribute('attribute_right_dictionary_name');
  }
  public set attributeRightDictionaryName(value: string) {
    this._attributeRightDictionaryName = value;
  }
  public resetAttributeRightDictionaryName() {
    this._attributeRightDictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRightDictionaryNameInput() {
    return this._attributeRightDictionaryName;
  }

  // attribute_right_name - computed: false, optional: true, required: false
  private _attributeRightName?: string; 
  public get attributeRightName() {
    return this.getStringAttribute('attribute_right_name');
  }
  public set attributeRightName(value: string) {
    this._attributeRightName = value;
  }
  public resetAttributeRightName() {
    this._attributeRightName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRightNameInput() {
    return this._attributeRightName;
  }

  // attribute_right_value - computed: false, optional: true, required: false
  private _attributeRightValue?: string; 
  public get attributeRightValue() {
    return this.getStringAttribute('attribute_right_value');
  }
  public set attributeRightValue(value: string) {
    this._attributeRightValue = value;
  }
  public resetAttributeRightValue() {
    this._attributeRightValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRightValueInput() {
    return this._attributeRightValue;
  }

  // attribute_right_value_type - computed: false, optional: true, required: false
  private _attributeRightValueType?: string; 
  public get attributeRightValueType() {
    return this.getStringAttribute('attribute_right_value_type');
  }
  public set attributeRightValueType(value: string) {
    this._attributeRightValueType = value;
  }
  public resetAttributeRightValueType() {
    this._attributeRightValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRightValueTypeInput() {
    return this._attributeRightValueType;
  }
}

export class AuthorizationProfileAdvancedAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthorizationProfileAdvancedAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AuthorizationProfileAdvancedAttributesOutputReference {
    return new AuthorizationProfileAdvancedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile ise_authorization_profile}
*/
export class AuthorizationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_authorization_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizationProfile to import
  * @param importFromId The id of the existing AuthorizationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_authorization_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/authorization_profile ise_authorization_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_authorization_profile',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._acl = config.acl;
    this._advancedAttributes.internalValue = config.advancedAttributes;
    this._agentlessPosture = config.agentlessPosture;
    this._airespaceAcl = config.airespaceAcl;
    this._airespaceIpv6Acl = config.airespaceIpv6Acl;
    this._asaVpn = config.asaVpn;
    this._autoSmartPort = config.autoSmartPort;
    this._avcProfile = config.avcProfile;
    this._daclName = config.daclName;
    this._description = config.description;
    this._easywiredSessionCandidate = config.easywiredSessionCandidate;
    this._interfaceTemplate = config.interfaceTemplate;
    this._ipv6AclFilter = config.ipv6AclFilter;
    this._ipv6DaclName = config.ipv6DaclName;
    this._macSecPolicy = config.macSecPolicy;
    this._name = config.name;
    this._neat = config.neat;
    this._profileName = config.profileName;
    this._reauthenticationConnectivity = config.reauthenticationConnectivity;
    this._reauthenticationTimer = config.reauthenticationTimer;
    this._serviceTemplate = config.serviceTemplate;
    this._trackMovement = config.trackMovement;
    this._uniqueIdentifier = config.uniqueIdentifier;
    this._vlanNameId = config.vlanNameId;
    this._vlanTagId = config.vlanTagId;
    this._voiceDomainPermission = config.voiceDomainPermission;
    this._webAuth = config.webAuth;
    this._webRedirectionAcl = config.webRedirectionAcl;
    this._webRedirectionDisplayCertificatesRenewalMessages = config.webRedirectionDisplayCertificatesRenewalMessages;
    this._webRedirectionPortalName = config.webRedirectionPortalName;
    this._webRedirectionStaticIpHostNameFqdn = config.webRedirectionStaticIpHostNameFqdn;
    this._webRedirectionType = config.webRedirectionType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // advanced_attributes - computed: false, optional: true, required: false
  private _advancedAttributes = new AuthorizationProfileAdvancedAttributesList(this, "advanced_attributes", false);
  public get advancedAttributes() {
    return this._advancedAttributes;
  }
  public putAdvancedAttributes(value: AuthorizationProfileAdvancedAttributes[] | cdktf.IResolvable) {
    this._advancedAttributes.internalValue = value;
  }
  public resetAdvancedAttributes() {
    this._advancedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAttributesInput() {
    return this._advancedAttributes.internalValue;
  }

  // agentless_posture - computed: false, optional: true, required: false
  private _agentlessPosture?: boolean | cdktf.IResolvable; 
  public get agentlessPosture() {
    return this.getBooleanAttribute('agentless_posture');
  }
  public set agentlessPosture(value: boolean | cdktf.IResolvable) {
    this._agentlessPosture = value;
  }
  public resetAgentlessPosture() {
    this._agentlessPosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessPostureInput() {
    return this._agentlessPosture;
  }

  // airespace_acl - computed: false, optional: true, required: false
  private _airespaceAcl?: string; 
  public get airespaceAcl() {
    return this.getStringAttribute('airespace_acl');
  }
  public set airespaceAcl(value: string) {
    this._airespaceAcl = value;
  }
  public resetAirespaceAcl() {
    this._airespaceAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airespaceAclInput() {
    return this._airespaceAcl;
  }

  // airespace_ipv6_acl - computed: false, optional: true, required: false
  private _airespaceIpv6Acl?: string; 
  public get airespaceIpv6Acl() {
    return this.getStringAttribute('airespace_ipv6_acl');
  }
  public set airespaceIpv6Acl(value: string) {
    this._airespaceIpv6Acl = value;
  }
  public resetAirespaceIpv6Acl() {
    this._airespaceIpv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airespaceIpv6AclInput() {
    return this._airespaceIpv6Acl;
  }

  // asa_vpn - computed: false, optional: true, required: false
  private _asaVpn?: string; 
  public get asaVpn() {
    return this.getStringAttribute('asa_vpn');
  }
  public set asaVpn(value: string) {
    this._asaVpn = value;
  }
  public resetAsaVpn() {
    this._asaVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asaVpnInput() {
    return this._asaVpn;
  }

  // auto_smart_port - computed: false, optional: true, required: false
  private _autoSmartPort?: string; 
  public get autoSmartPort() {
    return this.getStringAttribute('auto_smart_port');
  }
  public set autoSmartPort(value: string) {
    this._autoSmartPort = value;
  }
  public resetAutoSmartPort() {
    this._autoSmartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSmartPortInput() {
    return this._autoSmartPort;
  }

  // avc_profile - computed: false, optional: true, required: false
  private _avcProfile?: string; 
  public get avcProfile() {
    return this.getStringAttribute('avc_profile');
  }
  public set avcProfile(value: string) {
    this._avcProfile = value;
  }
  public resetAvcProfile() {
    this._avcProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avcProfileInput() {
    return this._avcProfile;
  }

  // dacl_name - computed: false, optional: true, required: false
  private _daclName?: string; 
  public get daclName() {
    return this.getStringAttribute('dacl_name');
  }
  public set daclName(value: string) {
    this._daclName = value;
  }
  public resetDaclName() {
    this._daclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daclNameInput() {
    return this._daclName;
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

  // easywired_session_candidate - computed: true, optional: true, required: false
  private _easywiredSessionCandidate?: boolean | cdktf.IResolvable; 
  public get easywiredSessionCandidate() {
    return this.getBooleanAttribute('easywired_session_candidate');
  }
  public set easywiredSessionCandidate(value: boolean | cdktf.IResolvable) {
    this._easywiredSessionCandidate = value;
  }
  public resetEasywiredSessionCandidate() {
    this._easywiredSessionCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get easywiredSessionCandidateInput() {
    return this._easywiredSessionCandidate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_template - computed: false, optional: true, required: false
  private _interfaceTemplate?: string; 
  public get interfaceTemplate() {
    return this.getStringAttribute('interface_template');
  }
  public set interfaceTemplate(value: string) {
    this._interfaceTemplate = value;
  }
  public resetInterfaceTemplate() {
    this._interfaceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTemplateInput() {
    return this._interfaceTemplate;
  }

  // ipv6_acl_filter - computed: false, optional: true, required: false
  private _ipv6AclFilter?: string; 
  public get ipv6AclFilter() {
    return this.getStringAttribute('ipv6_acl_filter');
  }
  public set ipv6AclFilter(value: string) {
    this._ipv6AclFilter = value;
  }
  public resetIpv6AclFilter() {
    this._ipv6AclFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclFilterInput() {
    return this._ipv6AclFilter;
  }

  // ipv6_dacl_name - computed: false, optional: true, required: false
  private _ipv6DaclName?: string; 
  public get ipv6DaclName() {
    return this.getStringAttribute('ipv6_dacl_name');
  }
  public set ipv6DaclName(value: string) {
    this._ipv6DaclName = value;
  }
  public resetIpv6DaclName() {
    this._ipv6DaclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DaclNameInput() {
    return this._ipv6DaclName;
  }

  // mac_sec_policy - computed: false, optional: true, required: false
  private _macSecPolicy?: string; 
  public get macSecPolicy() {
    return this.getStringAttribute('mac_sec_policy');
  }
  public set macSecPolicy(value: string) {
    this._macSecPolicy = value;
  }
  public resetMacSecPolicy() {
    this._macSecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macSecPolicyInput() {
    return this._macSecPolicy;
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

  // neat - computed: true, optional: true, required: false
  private _neat?: boolean | cdktf.IResolvable; 
  public get neat() {
    return this.getBooleanAttribute('neat');
  }
  public set neat(value: boolean | cdktf.IResolvable) {
    this._neat = value;
  }
  public resetNeat() {
    this._neat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neatInput() {
    return this._neat;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // reauthentication_connectivity - computed: false, optional: true, required: false
  private _reauthenticationConnectivity?: string; 
  public get reauthenticationConnectivity() {
    return this.getStringAttribute('reauthentication_connectivity');
  }
  public set reauthenticationConnectivity(value: string) {
    this._reauthenticationConnectivity = value;
  }
  public resetReauthenticationConnectivity() {
    this._reauthenticationConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticationConnectivityInput() {
    return this._reauthenticationConnectivity;
  }

  // reauthentication_timer - computed: false, optional: true, required: false
  private _reauthenticationTimer?: number; 
  public get reauthenticationTimer() {
    return this.getNumberAttribute('reauthentication_timer');
  }
  public set reauthenticationTimer(value: number) {
    this._reauthenticationTimer = value;
  }
  public resetReauthenticationTimer() {
    this._reauthenticationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticationTimerInput() {
    return this._reauthenticationTimer;
  }

  // service_template - computed: true, optional: true, required: false
  private _serviceTemplate?: boolean | cdktf.IResolvable; 
  public get serviceTemplate() {
    return this.getBooleanAttribute('service_template');
  }
  public set serviceTemplate(value: boolean | cdktf.IResolvable) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // track_movement - computed: true, optional: true, required: false
  private _trackMovement?: boolean | cdktf.IResolvable; 
  public get trackMovement() {
    return this.getBooleanAttribute('track_movement');
  }
  public set trackMovement(value: boolean | cdktf.IResolvable) {
    this._trackMovement = value;
  }
  public resetTrackMovement() {
    this._trackMovement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackMovementInput() {
    return this._trackMovement;
  }

  // unique_identifier - computed: false, optional: true, required: false
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  public resetUniqueIdentifier() {
    this._uniqueIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentifierInput() {
    return this._uniqueIdentifier;
  }

  // vlan_name_id - computed: false, optional: true, required: false
  private _vlanNameId?: string; 
  public get vlanNameId() {
    return this.getStringAttribute('vlan_name_id');
  }
  public set vlanNameId(value: string) {
    this._vlanNameId = value;
  }
  public resetVlanNameId() {
    this._vlanNameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameIdInput() {
    return this._vlanNameId;
  }

  // vlan_tag_id - computed: false, optional: true, required: false
  private _vlanTagId?: number; 
  public get vlanTagId() {
    return this.getNumberAttribute('vlan_tag_id');
  }
  public set vlanTagId(value: number) {
    this._vlanTagId = value;
  }
  public resetVlanTagId() {
    this._vlanTagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagIdInput() {
    return this._vlanTagId;
  }

  // voice_domain_permission - computed: true, optional: true, required: false
  private _voiceDomainPermission?: boolean | cdktf.IResolvable; 
  public get voiceDomainPermission() {
    return this.getBooleanAttribute('voice_domain_permission');
  }
  public set voiceDomainPermission(value: boolean | cdktf.IResolvable) {
    this._voiceDomainPermission = value;
  }
  public resetVoiceDomainPermission() {
    this._voiceDomainPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceDomainPermissionInput() {
    return this._voiceDomainPermission;
  }

  // web_auth - computed: true, optional: true, required: false
  private _webAuth?: boolean | cdktf.IResolvable; 
  public get webAuth() {
    return this.getBooleanAttribute('web_auth');
  }
  public set webAuth(value: boolean | cdktf.IResolvable) {
    this._webAuth = value;
  }
  public resetWebAuth() {
    this._webAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthInput() {
    return this._webAuth;
  }

  // web_redirection_acl - computed: false, optional: true, required: false
  private _webRedirectionAcl?: string; 
  public get webRedirectionAcl() {
    return this.getStringAttribute('web_redirection_acl');
  }
  public set webRedirectionAcl(value: string) {
    this._webRedirectionAcl = value;
  }
  public resetWebRedirectionAcl() {
    this._webRedirectionAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRedirectionAclInput() {
    return this._webRedirectionAcl;
  }

  // web_redirection_display_certificates_renewal_messages - computed: false, optional: true, required: false
  private _webRedirectionDisplayCertificatesRenewalMessages?: boolean | cdktf.IResolvable; 
  public get webRedirectionDisplayCertificatesRenewalMessages() {
    return this.getBooleanAttribute('web_redirection_display_certificates_renewal_messages');
  }
  public set webRedirectionDisplayCertificatesRenewalMessages(value: boolean | cdktf.IResolvable) {
    this._webRedirectionDisplayCertificatesRenewalMessages = value;
  }
  public resetWebRedirectionDisplayCertificatesRenewalMessages() {
    this._webRedirectionDisplayCertificatesRenewalMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRedirectionDisplayCertificatesRenewalMessagesInput() {
    return this._webRedirectionDisplayCertificatesRenewalMessages;
  }

  // web_redirection_portal_name - computed: false, optional: true, required: false
  private _webRedirectionPortalName?: string; 
  public get webRedirectionPortalName() {
    return this.getStringAttribute('web_redirection_portal_name');
  }
  public set webRedirectionPortalName(value: string) {
    this._webRedirectionPortalName = value;
  }
  public resetWebRedirectionPortalName() {
    this._webRedirectionPortalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRedirectionPortalNameInput() {
    return this._webRedirectionPortalName;
  }

  // web_redirection_static_ip_host_name_fqdn - computed: false, optional: true, required: false
  private _webRedirectionStaticIpHostNameFqdn?: string; 
  public get webRedirectionStaticIpHostNameFqdn() {
    return this.getStringAttribute('web_redirection_static_ip_host_name_fqdn');
  }
  public set webRedirectionStaticIpHostNameFqdn(value: string) {
    this._webRedirectionStaticIpHostNameFqdn = value;
  }
  public resetWebRedirectionStaticIpHostNameFqdn() {
    this._webRedirectionStaticIpHostNameFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRedirectionStaticIpHostNameFqdnInput() {
    return this._webRedirectionStaticIpHostNameFqdn;
  }

  // web_redirection_type - computed: false, optional: true, required: false
  private _webRedirectionType?: string; 
  public get webRedirectionType() {
    return this.getStringAttribute('web_redirection_type');
  }
  public set webRedirectionType(value: string) {
    this._webRedirectionType = value;
  }
  public resetWebRedirectionType() {
    this._webRedirectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRedirectionTypeInput() {
    return this._webRedirectionType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      acl: cdktf.stringToTerraform(this._acl),
      advanced_attributes: cdktf.listMapper(authorizationProfileAdvancedAttributesToTerraform, false)(this._advancedAttributes.internalValue),
      agentless_posture: cdktf.booleanToTerraform(this._agentlessPosture),
      airespace_acl: cdktf.stringToTerraform(this._airespaceAcl),
      airespace_ipv6_acl: cdktf.stringToTerraform(this._airespaceIpv6Acl),
      asa_vpn: cdktf.stringToTerraform(this._asaVpn),
      auto_smart_port: cdktf.stringToTerraform(this._autoSmartPort),
      avc_profile: cdktf.stringToTerraform(this._avcProfile),
      dacl_name: cdktf.stringToTerraform(this._daclName),
      description: cdktf.stringToTerraform(this._description),
      easywired_session_candidate: cdktf.booleanToTerraform(this._easywiredSessionCandidate),
      interface_template: cdktf.stringToTerraform(this._interfaceTemplate),
      ipv6_acl_filter: cdktf.stringToTerraform(this._ipv6AclFilter),
      ipv6_dacl_name: cdktf.stringToTerraform(this._ipv6DaclName),
      mac_sec_policy: cdktf.stringToTerraform(this._macSecPolicy),
      name: cdktf.stringToTerraform(this._name),
      neat: cdktf.booleanToTerraform(this._neat),
      profile_name: cdktf.stringToTerraform(this._profileName),
      reauthentication_connectivity: cdktf.stringToTerraform(this._reauthenticationConnectivity),
      reauthentication_timer: cdktf.numberToTerraform(this._reauthenticationTimer),
      service_template: cdktf.booleanToTerraform(this._serviceTemplate),
      track_movement: cdktf.booleanToTerraform(this._trackMovement),
      unique_identifier: cdktf.stringToTerraform(this._uniqueIdentifier),
      vlan_name_id: cdktf.stringToTerraform(this._vlanNameId),
      vlan_tag_id: cdktf.numberToTerraform(this._vlanTagId),
      voice_domain_permission: cdktf.booleanToTerraform(this._voiceDomainPermission),
      web_auth: cdktf.booleanToTerraform(this._webAuth),
      web_redirection_acl: cdktf.stringToTerraform(this._webRedirectionAcl),
      web_redirection_display_certificates_renewal_messages: cdktf.booleanToTerraform(this._webRedirectionDisplayCertificatesRenewalMessages),
      web_redirection_portal_name: cdktf.stringToTerraform(this._webRedirectionPortalName),
      web_redirection_static_ip_host_name_fqdn: cdktf.stringToTerraform(this._webRedirectionStaticIpHostNameFqdn),
      web_redirection_type: cdktf.stringToTerraform(this._webRedirectionType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_attributes: {
        value: cdktf.listMapperHcl(authorizationProfileAdvancedAttributesToHclTerraform, false)(this._advancedAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthorizationProfileAdvancedAttributesList",
      },
      agentless_posture: {
        value: cdktf.booleanToHclTerraform(this._agentlessPosture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      airespace_acl: {
        value: cdktf.stringToHclTerraform(this._airespaceAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      airespace_ipv6_acl: {
        value: cdktf.stringToHclTerraform(this._airespaceIpv6Acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asa_vpn: {
        value: cdktf.stringToHclTerraform(this._asaVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_smart_port: {
        value: cdktf.stringToHclTerraform(this._autoSmartPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avc_profile: {
        value: cdktf.stringToHclTerraform(this._avcProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dacl_name: {
        value: cdktf.stringToHclTerraform(this._daclName),
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
      easywired_session_candidate: {
        value: cdktf.booleanToHclTerraform(this._easywiredSessionCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_template: {
        value: cdktf.stringToHclTerraform(this._interfaceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_acl_filter: {
        value: cdktf.stringToHclTerraform(this._ipv6AclFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dacl_name: {
        value: cdktf.stringToHclTerraform(this._ipv6DaclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_sec_policy: {
        value: cdktf.stringToHclTerraform(this._macSecPolicy),
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
      neat: {
        value: cdktf.booleanToHclTerraform(this._neat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauthentication_connectivity: {
        value: cdktf.stringToHclTerraform(this._reauthenticationConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauthentication_timer: {
        value: cdktf.numberToHclTerraform(this._reauthenticationTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_template: {
        value: cdktf.booleanToHclTerraform(this._serviceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_movement: {
        value: cdktf.booleanToHclTerraform(this._trackMovement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_identifier: {
        value: cdktf.stringToHclTerraform(this._uniqueIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_name_id: {
        value: cdktf.stringToHclTerraform(this._vlanNameId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tag_id: {
        value: cdktf.numberToHclTerraform(this._vlanTagId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      voice_domain_permission: {
        value: cdktf.booleanToHclTerraform(this._voiceDomainPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_auth: {
        value: cdktf.booleanToHclTerraform(this._webAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_redirection_acl: {
        value: cdktf.stringToHclTerraform(this._webRedirectionAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_redirection_display_certificates_renewal_messages: {
        value: cdktf.booleanToHclTerraform(this._webRedirectionDisplayCertificatesRenewalMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_redirection_portal_name: {
        value: cdktf.stringToHclTerraform(this._webRedirectionPortalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_redirection_static_ip_host_name_fqdn: {
        value: cdktf.stringToHclTerraform(this._webRedirectionStaticIpHostNameFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_redirection_type: {
        value: cdktf.stringToHclTerraform(this._webRedirectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
