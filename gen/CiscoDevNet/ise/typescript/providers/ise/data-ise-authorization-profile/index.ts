// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseAuthorizationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile#id DataIseAuthorizationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the authorization profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile#name DataIseAuthorizationProfile#name}
  */
  readonly name?: string;
}
export interface DataIseAuthorizationProfileAdvancedAttributes {
}

export function dataIseAuthorizationProfileAdvancedAttributesToTerraform(struct?: DataIseAuthorizationProfileAdvancedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseAuthorizationProfileAdvancedAttributesToHclTerraform(struct?: DataIseAuthorizationProfileAdvancedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseAuthorizationProfileAdvancedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIseAuthorizationProfileAdvancedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseAuthorizationProfileAdvancedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_left_dictionary_name - computed: true, optional: false, required: false
  public get attributeLeftDictionaryName() {
    return this.getStringAttribute('attribute_left_dictionary_name');
  }

  // attribute_left_name - computed: true, optional: false, required: false
  public get attributeLeftName() {
    return this.getStringAttribute('attribute_left_name');
  }

  // attribute_right_dictionary_name - computed: true, optional: false, required: false
  public get attributeRightDictionaryName() {
    return this.getStringAttribute('attribute_right_dictionary_name');
  }

  // attribute_right_name - computed: true, optional: false, required: false
  public get attributeRightName() {
    return this.getStringAttribute('attribute_right_name');
  }

  // attribute_right_value - computed: true, optional: false, required: false
  public get attributeRightValue() {
    return this.getStringAttribute('attribute_right_value');
  }

  // attribute_right_value_type - computed: true, optional: false, required: false
  public get attributeRightValueType() {
    return this.getStringAttribute('attribute_right_value_type');
  }
}

export class DataIseAuthorizationProfileAdvancedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataIseAuthorizationProfileAdvancedAttributesOutputReference {
    return new DataIseAuthorizationProfileAdvancedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile ise_authorization_profile}
*/
export class DataIseAuthorizationProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_authorization_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseAuthorizationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseAuthorizationProfile to import
  * @param importFromId The id of the existing DataIseAuthorizationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseAuthorizationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_authorization_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/data-sources/authorization_profile ise_authorization_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseAuthorizationProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseAuthorizationProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_authorization_profile',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
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

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // advanced_attributes - computed: true, optional: false, required: false
  private _advancedAttributes = new DataIseAuthorizationProfileAdvancedAttributesList(this, "advanced_attributes", false);
  public get advancedAttributes() {
    return this._advancedAttributes;
  }

  // agentless_posture - computed: true, optional: false, required: false
  public get agentlessPosture() {
    return this.getBooleanAttribute('agentless_posture');
  }

  // airespace_acl - computed: true, optional: false, required: false
  public get airespaceAcl() {
    return this.getStringAttribute('airespace_acl');
  }

  // airespace_ipv6_acl - computed: true, optional: false, required: false
  public get airespaceIpv6Acl() {
    return this.getStringAttribute('airespace_ipv6_acl');
  }

  // asa_vpn - computed: true, optional: false, required: false
  public get asaVpn() {
    return this.getStringAttribute('asa_vpn');
  }

  // auto_smart_port - computed: true, optional: false, required: false
  public get autoSmartPort() {
    return this.getStringAttribute('auto_smart_port');
  }

  // avc_profile - computed: true, optional: false, required: false
  public get avcProfile() {
    return this.getStringAttribute('avc_profile');
  }

  // dacl_name - computed: true, optional: false, required: false
  public get daclName() {
    return this.getStringAttribute('dacl_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // easywired_session_candidate - computed: true, optional: false, required: false
  public get easywiredSessionCandidate() {
    return this.getBooleanAttribute('easywired_session_candidate');
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

  // interface_template - computed: true, optional: false, required: false
  public get interfaceTemplate() {
    return this.getStringAttribute('interface_template');
  }

  // ipv6_acl_filter - computed: true, optional: false, required: false
  public get ipv6AclFilter() {
    return this.getStringAttribute('ipv6_acl_filter');
  }

  // ipv6_dacl_name - computed: true, optional: false, required: false
  public get ipv6DaclName() {
    return this.getStringAttribute('ipv6_dacl_name');
  }

  // mac_sec_policy - computed: true, optional: false, required: false
  public get macSecPolicy() {
    return this.getStringAttribute('mac_sec_policy');
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

  // neat - computed: true, optional: false, required: false
  public get neat() {
    return this.getBooleanAttribute('neat');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // reauthentication_connectivity - computed: true, optional: false, required: false
  public get reauthenticationConnectivity() {
    return this.getStringAttribute('reauthentication_connectivity');
  }

  // reauthentication_timer - computed: true, optional: false, required: false
  public get reauthenticationTimer() {
    return this.getNumberAttribute('reauthentication_timer');
  }

  // service_template - computed: true, optional: false, required: false
  public get serviceTemplate() {
    return this.getBooleanAttribute('service_template');
  }

  // track_movement - computed: true, optional: false, required: false
  public get trackMovement() {
    return this.getBooleanAttribute('track_movement');
  }

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // vlan_name_id - computed: true, optional: false, required: false
  public get vlanNameId() {
    return this.getStringAttribute('vlan_name_id');
  }

  // vlan_tag_id - computed: true, optional: false, required: false
  public get vlanTagId() {
    return this.getNumberAttribute('vlan_tag_id');
  }

  // voice_domain_permission - computed: true, optional: false, required: false
  public get voiceDomainPermission() {
    return this.getBooleanAttribute('voice_domain_permission');
  }

  // web_auth - computed: true, optional: false, required: false
  public get webAuth() {
    return this.getBooleanAttribute('web_auth');
  }

  // web_redirection_acl - computed: true, optional: false, required: false
  public get webRedirectionAcl() {
    return this.getStringAttribute('web_redirection_acl');
  }

  // web_redirection_display_certificates_renewal_messages - computed: true, optional: false, required: false
  public get webRedirectionDisplayCertificatesRenewalMessages() {
    return this.getBooleanAttribute('web_redirection_display_certificates_renewal_messages');
  }

  // web_redirection_portal_name - computed: true, optional: false, required: false
  public get webRedirectionPortalName() {
    return this.getStringAttribute('web_redirection_portal_name');
  }

  // web_redirection_static_ip_host_name_fqdn - computed: true, optional: false, required: false
  public get webRedirectionStaticIpHostNameFqdn() {
    return this.getStringAttribute('web_redirection_static_ip_host_name_fqdn');
  }

  // web_redirection_type - computed: true, optional: false, required: false
  public get webRedirectionType() {
    return this.getStringAttribute('web_redirection_type');
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
