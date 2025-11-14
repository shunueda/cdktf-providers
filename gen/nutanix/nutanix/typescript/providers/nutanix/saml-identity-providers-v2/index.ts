// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIdentityProvidersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#custom_attributes SamlIdentityProvidersV2#custom_attributes}
  */
  readonly customAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#email_attribute SamlIdentityProvidersV2#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#entity_issuer SamlIdentityProvidersV2#entity_issuer}
  */
  readonly entityIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#ext_id SamlIdentityProvidersV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#groups_attribute SamlIdentityProvidersV2#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#groups_delim SamlIdentityProvidersV2#groups_delim}
  */
  readonly groupsDelim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#id SamlIdentityProvidersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#idp_metadata_url SamlIdentityProvidersV2#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#idp_metadata_xml SamlIdentityProvidersV2#idp_metadata_xml}
  */
  readonly idpMetadataXml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#is_signed_authn_req_enabled SamlIdentityProvidersV2#is_signed_authn_req_enabled}
  */
  readonly isSignedAuthnReqEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#name SamlIdentityProvidersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#username_attribute SamlIdentityProvidersV2#username_attribute}
  */
  readonly usernameAttribute?: string;
  /**
  * idp_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#idp_metadata SamlIdentityProvidersV2#idp_metadata}
  */
  readonly idpMetadata?: SamlIdentityProvidersV2IdpMetadata[] | cdktf.IResolvable;
}
export interface SamlIdentityProvidersV2IdpMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#certificate SamlIdentityProvidersV2#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#entity_id SamlIdentityProvidersV2#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#error_url SamlIdentityProvidersV2#error_url}
  */
  readonly errorUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#login_url SamlIdentityProvidersV2#login_url}
  */
  readonly loginUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#logout_url SamlIdentityProvidersV2#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#name_id_policy_format SamlIdentityProvidersV2#name_id_policy_format}
  */
  readonly nameIdPolicyFormat?: string;
}

export function samlIdentityProvidersV2IdpMetadataToTerraform(struct?: SamlIdentityProvidersV2IdpMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    error_url: cdktf.stringToTerraform(struct!.errorUrl),
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    name_id_policy_format: cdktf.stringToTerraform(struct!.nameIdPolicyFormat),
  }
}


export function samlIdentityProvidersV2IdpMetadataToHclTerraform(struct?: SamlIdentityProvidersV2IdpMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_url: {
      value: cdktf.stringToHclTerraform(struct!.errorUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_url: {
      value: cdktf.stringToHclTerraform(struct!.loginUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_policy_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdPolicyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlIdentityProvidersV2IdpMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SamlIdentityProvidersV2IdpMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._errorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorUrl = this._errorUrl;
    }
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._nameIdPolicyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdPolicyFormat = this._nameIdPolicyFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlIdentityProvidersV2IdpMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._entityId = undefined;
      this._errorUrl = undefined;
      this._loginUrl = undefined;
      this._logoutUrl = undefined;
      this._nameIdPolicyFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._entityId = value.entityId;
      this._errorUrl = value.errorUrl;
      this._loginUrl = value.loginUrl;
      this._logoutUrl = value.logoutUrl;
      this._nameIdPolicyFormat = value.nameIdPolicyFormat;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // error_url - computed: true, optional: true, required: false
  private _errorUrl?: string; 
  public get errorUrl() {
    return this.getStringAttribute('error_url');
  }
  public set errorUrl(value: string) {
    this._errorUrl = value;
  }
  public resetErrorUrl() {
    this._errorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorUrlInput() {
    return this._errorUrl;
  }

  // login_url - computed: false, optional: false, required: true
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // logout_url - computed: true, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // name_id_policy_format - computed: true, optional: true, required: false
  private _nameIdPolicyFormat?: string; 
  public get nameIdPolicyFormat() {
    return this.getStringAttribute('name_id_policy_format');
  }
  public set nameIdPolicyFormat(value: string) {
    this._nameIdPolicyFormat = value;
  }
  public resetNameIdPolicyFormat() {
    this._nameIdPolicyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdPolicyFormatInput() {
    return this._nameIdPolicyFormat;
  }
}

export class SamlIdentityProvidersV2IdpMetadataList extends cdktf.ComplexList {
  public internalValue? : SamlIdentityProvidersV2IdpMetadata[] | cdktf.IResolvable

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
  public get(index: number): SamlIdentityProvidersV2IdpMetadataOutputReference {
    return new SamlIdentityProvidersV2IdpMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2 nutanix_saml_identity_providers_v2}
*/
export class SamlIdentityProvidersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_saml_identity_providers_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlIdentityProvidersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlIdentityProvidersV2 to import
  * @param importFromId The id of the existing SamlIdentityProvidersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlIdentityProvidersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_saml_identity_providers_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/saml_identity_providers_v2 nutanix_saml_identity_providers_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdentityProvidersV2Config
  */
  public constructor(scope: Construct, id: string, config: SamlIdentityProvidersV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_saml_identity_providers_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customAttributes = config.customAttributes;
    this._emailAttribute = config.emailAttribute;
    this._entityIssuer = config.entityIssuer;
    this._extId = config.extId;
    this._groupsAttribute = config.groupsAttribute;
    this._groupsDelim = config.groupsDelim;
    this._id = config.id;
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._idpMetadataXml = config.idpMetadataXml;
    this._isSignedAuthnReqEnabled = config.isSignedAuthnReqEnabled;
    this._name = config.name;
    this._usernameAttribute = config.usernameAttribute;
    this._idpMetadata.internalValue = config.idpMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // custom_attributes - computed: true, optional: true, required: false
  private _customAttributes?: string[]; 
  public get customAttributes() {
    return this.getListAttribute('custom_attributes');
  }
  public set customAttributes(value: string[]) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // email_attribute - computed: true, optional: true, required: false
  private _emailAttribute?: string; 
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }
  public set emailAttribute(value: string) {
    this._emailAttribute = value;
  }
  public resetEmailAttribute() {
    this._emailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeInput() {
    return this._emailAttribute;
  }

  // entity_issuer - computed: true, optional: true, required: false
  private _entityIssuer?: string; 
  public get entityIssuer() {
    return this.getStringAttribute('entity_issuer');
  }
  public set entityIssuer(value: string) {
    this._entityIssuer = value;
  }
  public resetEntityIssuer() {
    this._entityIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIssuerInput() {
    return this._entityIssuer;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // groups_attribute - computed: true, optional: true, required: false
  private _groupsAttribute?: string; 
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }
  public set groupsAttribute(value: string) {
    this._groupsAttribute = value;
  }
  public resetGroupsAttribute() {
    this._groupsAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAttributeInput() {
    return this._groupsAttribute;
  }

  // groups_delim - computed: true, optional: true, required: false
  private _groupsDelim?: string; 
  public get groupsDelim() {
    return this.getStringAttribute('groups_delim');
  }
  public set groupsDelim(value: string) {
    this._groupsDelim = value;
  }
  public resetGroupsDelim() {
    this._groupsDelim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsDelimInput() {
    return this._groupsDelim;
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

  // idp_metadata_url - computed: true, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_metadata_xml - computed: true, optional: true, required: false
  private _idpMetadataXml?: string; 
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
  public set idpMetadataXml(value: string) {
    this._idpMetadataXml = value;
  }
  public resetIdpMetadataXml() {
    this._idpMetadataXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlInput() {
    return this._idpMetadataXml;
  }

  // is_signed_authn_req_enabled - computed: true, optional: true, required: false
  private _isSignedAuthnReqEnabled?: boolean | cdktf.IResolvable; 
  public get isSignedAuthnReqEnabled() {
    return this.getBooleanAttribute('is_signed_authn_req_enabled');
  }
  public set isSignedAuthnReqEnabled(value: boolean | cdktf.IResolvable) {
    this._isSignedAuthnReqEnabled = value;
  }
  public resetIsSignedAuthnReqEnabled() {
    this._isSignedAuthnReqEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSignedAuthnReqEnabledInput() {
    return this._isSignedAuthnReqEnabled;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // username_attribute - computed: true, optional: true, required: false
  private _usernameAttribute?: string; 
  public get usernameAttribute() {
    return this.getStringAttribute('username_attribute');
  }
  public set usernameAttribute(value: string) {
    this._usernameAttribute = value;
  }
  public resetUsernameAttribute() {
    this._usernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributeInput() {
    return this._usernameAttribute;
  }

  // idp_metadata - computed: false, optional: true, required: false
  private _idpMetadata = new SamlIdentityProvidersV2IdpMetadataList(this, "idp_metadata", false);
  public get idpMetadata() {
    return this._idpMetadata;
  }
  public putIdpMetadata(value: SamlIdentityProvidersV2IdpMetadata[] | cdktf.IResolvable) {
    this._idpMetadata.internalValue = value;
  }
  public resetIdpMetadata() {
    this._idpMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customAttributes),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      entity_issuer: cdktf.stringToTerraform(this._entityIssuer),
      ext_id: cdktf.stringToTerraform(this._extId),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      groups_delim: cdktf.stringToTerraform(this._groupsDelim),
      id: cdktf.stringToTerraform(this._id),
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      idp_metadata_xml: cdktf.stringToTerraform(this._idpMetadataXml),
      is_signed_authn_req_enabled: cdktf.booleanToTerraform(this._isSignedAuthnReqEnabled),
      name: cdktf.stringToTerraform(this._name),
      username_attribute: cdktf.stringToTerraform(this._usernameAttribute),
      idp_metadata: cdktf.listMapper(samlIdentityProvidersV2IdpMetadataToTerraform, true)(this._idpMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_issuer: {
        value: cdktf.stringToHclTerraform(this._entityIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_attribute: {
        value: cdktf.stringToHclTerraform(this._groupsAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_delim: {
        value: cdktf.stringToHclTerraform(this._groupsDelim),
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
      idp_metadata_url: {
        value: cdktf.stringToHclTerraform(this._idpMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_xml: {
        value: cdktf.stringToHclTerraform(this._idpMetadataXml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_signed_authn_req_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSignedAuthnReqEnabled),
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
      username_attribute: {
        value: cdktf.stringToHclTerraform(this._usernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata: {
        value: cdktf.listMapperHcl(samlIdentityProvidersV2IdpMetadataToHclTerraform, true)(this._idpMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SamlIdentityProvidersV2IdpMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
