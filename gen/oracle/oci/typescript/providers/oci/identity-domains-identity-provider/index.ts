// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}
  */
  readonly assertionAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}
  */
  readonly authnRequestBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}
  */
  readonly encryptionCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}
  */
  readonly idpSsoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}
  */
  readonly includeSigningCertInSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}
  */
  readonly jitUserProvAttributeUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}
  */
  readonly jitUserProvCreateUserEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}
  */
  readonly jitUserProvEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}
  */
  readonly jitUserProvGroupAssertionAttributeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}
  */
  readonly jitUserProvGroupAssignmentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}
  */
  readonly jitUserProvGroupMappingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}
  */
  readonly jitUserProvGroupSamlAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}
  */
  readonly jitUserProvGroupStaticListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}
  */
  readonly jitUserProvIgnoreErrorOnAbsentGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}
  */
  readonly logoutBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}
  */
  readonly logoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}
  */
  readonly logoutRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}
  */
  readonly logoutResponseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}
  */
  readonly partnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}
  */
  readonly partnerProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}
  */
  readonly requestedAuthenticationContext?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}
  */
  readonly requireForceAuthn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}
  */
  readonly requiresEncryptedAssertion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}
  */
  readonly samlHoKrequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}
  */
  readonly serviceInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}
  */
  readonly shownOnLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}
  */
  readonly signatureHashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}
  */
  readonly signingCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}
  */
  readonly succinctId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}
  */
  readonly userMappingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}
  */
  readonly userMappingStoreAttribute?: string;
  /**
  * correlation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}
  */
  readonly correlationPolicy?: IdentityDomainsIdentityProviderCorrelationPolicy;
  /**
  * jit_user_prov_assigned_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}
  */
  readonly jitUserProvAssignedGroups?: IdentityDomainsIdentityProviderJitUserProvAssignedGroups[] | cdktf.IResolvable;
  /**
  * jit_user_prov_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}
  */
  readonly jitUserProvAttributes?: IdentityDomainsIdentityProviderJitUserProvAttributes;
  /**
  * jit_user_prov_group_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}
  */
  readonly jitUserProvGroupMappings?: IdentityDomainsIdentityProviderJitUserProvGroupMappings[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}
  */
  readonly tags?: IdentityDomainsIdentityProviderTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}
  */
  readonly timeouts?: IdentityDomainsIdentityProviderTimeouts;
  /**
  * urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;
  /**
  * urnietfparamsscimschemasoracleidcsextensionx509identity_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;
}
export interface IdentityDomainsIdentityProviderIdcsCreatedBy {
}

export function identityDomainsIdentityProviderIdcsCreatedByToTerraform(struct?: IdentityDomainsIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityProviderIdcsCreatedByToHclTerraform(struct?: IdentityDomainsIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityProviderIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsIdentityProviderIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityProviderIdcsCreatedByOutputReference {
    return new IdentityDomainsIdentityProviderIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderIdcsLastModifiedBy {
}

export function identityDomainsIdentityProviderIdcsLastModifiedByToTerraform(struct?: IdentityDomainsIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityProviderIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsIdentityProviderIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference {
    return new IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderMeta {
}

export function identityDomainsIdentityProviderMetaToTerraform(struct?: IdentityDomainsIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityProviderMetaToHclTerraform(struct?: IdentityDomainsIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityProviderMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsIdentityProviderMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityProviderMetaOutputReference {
    return new IdentityDomainsIdentityProviderMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderCorrelationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderCorrelationPolicyToTerraform(struct?: IdentityDomainsIdentityProviderCorrelationPolicyOutputReference | IdentityDomainsIdentityProviderCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderCorrelationPolicyToHclTerraform(struct?: IdentityDomainsIdentityProviderCorrelationPolicyOutputReference | IdentityDomainsIdentityProviderCorrelationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderCorrelationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentityProviderCorrelationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderCorrelationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IdentityDomainsIdentityProviderJitUserProvAssignedGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderJitUserProvAssignedGroupsToTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvAssignedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderJitUserProvAssignedGroupsToHclTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvAssignedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderJitUserProvAssignedGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderJitUserProvAssignedGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityProviderJitUserProvAssignedGroups[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference {
    return new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderJitUserProvAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderJitUserProvAttributesToTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference | IdentityDomainsIdentityProviderJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderJitUserProvAttributesToHclTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference | IdentityDomainsIdentityProviderJitUserProvAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentityProviderJitUserProvAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderJitUserProvAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IdentityDomainsIdentityProviderJitUserProvGroupMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}
  */
  readonly idpGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderJitUserProvGroupMappingsToTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_group: cdktf.stringToTerraform(struct!.idpGroup),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderJitUserProvGroupMappingsToHclTerraform(struct?: IdentityDomainsIdentityProviderJitUserProvGroupMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_group: {
      value: cdktf.stringToHclTerraform(struct!.idpGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderJitUserProvGroupMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpGroup = this._idpGroup;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderJitUserProvGroupMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpGroup = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpGroup = value.idpGroup;
      this._value = value.value;
    }
  }

  // idp_group - computed: false, optional: false, required: true
  private _idpGroup?: string; 
  public get idpGroup() {
    return this.getStringAttribute('idp_group');
  }
  public set idpGroup(value: string) {
    this._idpGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpGroupInput() {
    return this._idpGroup;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IdentityDomainsIdentityProviderJitUserProvGroupMappingsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityProviderJitUserProvGroupMappings[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference {
    return new IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderTagsToTerraform(struct?: IdentityDomainsIdentityProviderTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderTagsToHclTerraform(struct?: IdentityDomainsIdentityProviderTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IdentityDomainsIdentityProviderTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityProviderTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityProviderTagsOutputReference {
    return new IdentityDomainsIdentityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}
  */
  readonly update?: string;
}

export function identityDomainsIdentityProviderTimeoutsToTerraform(struct?: IdentityDomainsIdentityProviderTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsIdentityProviderTimeoutsToHclTerraform(struct?: IdentityDomainsIdentityProviderTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsIdentityProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsIdentityProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsIdentityProviderTimeouts | cdktf.IResolvable | undefined) {
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
export interface IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToHclTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference {
    return new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}
  */
  readonly accountLinkingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}
  */
  readonly adminScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#apple_dev_id IdentityDomainsIdentityProvider#apple_dev_id}
  */
  readonly appleDevId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#apple_key_id IdentityDomainsIdentityProvider#apple_key_id}
  */
  readonly appleKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}
  */
  readonly authzUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}
  */
  readonly autoRedirectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}
  */
  readonly clientCredentialInPayload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}
  */
  readonly clockSkewInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}
  */
  readonly jitProvGroupStaticListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}
  */
  readonly registrationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}
  */
  readonly serviceProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}
  */
  readonly socialJitProvisioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}
  */
  readonly status?: string;
  /**
  * jit_prov_assigned_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#jit_prov_assigned_groups IdentityDomainsIdentityProvider#jit_prov_assigned_groups}
  */
  readonly jitProvAssignedGroups?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable;
}

export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference | IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_url: cdktf.stringToTerraform(struct!.accessTokenUrl),
    account_linking_enabled: cdktf.booleanToTerraform(struct!.accountLinkingEnabled),
    admin_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminScope),
    apple_dev_id: cdktf.stringToTerraform(struct!.appleDevId),
    apple_key_id: cdktf.stringToTerraform(struct!.appleKeyId),
    authz_url: cdktf.stringToTerraform(struct!.authzUrl),
    auto_redirect_enabled: cdktf.booleanToTerraform(struct!.autoRedirectEnabled),
    client_credential_in_payload: cdktf.booleanToTerraform(struct!.clientCredentialInPayload),
    clock_skew_in_seconds: cdktf.numberToTerraform(struct!.clockSkewInSeconds),
    consumer_key: cdktf.stringToTerraform(struct!.consumerKey),
    consumer_secret: cdktf.stringToTerraform(struct!.consumerSecret),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
    id_attribute: cdktf.stringToTerraform(struct!.idAttribute),
    jit_prov_group_static_list_enabled: cdktf.booleanToTerraform(struct!.jitProvGroupStaticListEnabled),
    profile_url: cdktf.stringToTerraform(struct!.profileUrl),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    registration_enabled: cdktf.booleanToTerraform(struct!.registrationEnabled),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    service_provider_name: cdktf.stringToTerraform(struct!.serviceProviderName),
    social_jit_provisioning_enabled: cdktf.booleanToTerraform(struct!.socialJitProvisioningEnabled),
    status: cdktf.stringToTerraform(struct!.status),
    jit_prov_assigned_groups: cdktf.listMapper(identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToTerraform, true)(struct!.jitProvAssignedGroups),
  }
}


export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToHclTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference | IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_url: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_linking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.accountLinkingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    apple_dev_id: {
      value: cdktf.stringToHclTerraform(struct!.appleDevId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apple_key_id: {
      value: cdktf.stringToHclTerraform(struct!.appleKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authz_url: {
      value: cdktf.stringToHclTerraform(struct!.authzUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_redirect_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoRedirectEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_credential_in_payload: {
      value: cdktf.booleanToHclTerraform(struct!.clientCredentialInPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clock_skew_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.clockSkewInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_key: {
      value: cdktf.stringToHclTerraform(struct!.consumerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_secret: {
      value: cdktf.stringToHclTerraform(struct!.consumerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_attribute: {
      value: cdktf.stringToHclTerraform(struct!.idAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jit_prov_group_static_list_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.jitProvGroupStaticListEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_url: {
      value: cdktf.stringToHclTerraform(struct!.profileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.registrationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    social_jit_provisioning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.socialJitProvisioningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jit_prov_assigned_groups: {
      value: cdktf.listMapperHcl(identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsToHclTerraform, true)(struct!.jitProvAssignedGroups),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUrl = this._accessTokenUrl;
    }
    if (this._accountLinkingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountLinkingEnabled = this._accountLinkingEnabled;
    }
    if (this._adminScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminScope = this._adminScope;
    }
    if (this._appleDevId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appleDevId = this._appleDevId;
    }
    if (this._appleKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appleKeyId = this._appleKeyId;
    }
    if (this._authzUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzUrl = this._authzUrl;
    }
    if (this._autoRedirectEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRedirectEnabled = this._autoRedirectEnabled;
    }
    if (this._clientCredentialInPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialInPayload = this._clientCredentialInPayload;
    }
    if (this._clockSkewInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSkewInSeconds = this._clockSkewInSeconds;
    }
    if (this._consumerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey;
    }
    if (this._consumerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSecret = this._consumerSecret;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._idAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.idAttribute = this._idAttribute;
    }
    if (this._jitProvGroupStaticListEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitProvGroupStaticListEnabled = this._jitProvGroupStaticListEnabled;
    }
    if (this._profileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileUrl = this._profileUrl;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._registrationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationEnabled = this._registrationEnabled;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderName = this._serviceProviderName;
    }
    if (this._socialJitProvisioningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.socialJitProvisioningEnabled = this._socialJitProvisioningEnabled;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._jitProvAssignedGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitProvAssignedGroups = this._jitProvAssignedGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenUrl = undefined;
      this._accountLinkingEnabled = undefined;
      this._adminScope = undefined;
      this._appleDevId = undefined;
      this._appleKeyId = undefined;
      this._authzUrl = undefined;
      this._autoRedirectEnabled = undefined;
      this._clientCredentialInPayload = undefined;
      this._clockSkewInSeconds = undefined;
      this._consumerKey = undefined;
      this._consumerSecret = undefined;
      this._discoveryUrl = undefined;
      this._idAttribute = undefined;
      this._jitProvGroupStaticListEnabled = undefined;
      this._profileUrl = undefined;
      this._redirectUrl = undefined;
      this._registrationEnabled = undefined;
      this._scope = undefined;
      this._serviceProviderName = undefined;
      this._socialJitProvisioningEnabled = undefined;
      this._status = undefined;
      this._jitProvAssignedGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenUrl = value.accessTokenUrl;
      this._accountLinkingEnabled = value.accountLinkingEnabled;
      this._adminScope = value.adminScope;
      this._appleDevId = value.appleDevId;
      this._appleKeyId = value.appleKeyId;
      this._authzUrl = value.authzUrl;
      this._autoRedirectEnabled = value.autoRedirectEnabled;
      this._clientCredentialInPayload = value.clientCredentialInPayload;
      this._clockSkewInSeconds = value.clockSkewInSeconds;
      this._consumerKey = value.consumerKey;
      this._consumerSecret = value.consumerSecret;
      this._discoveryUrl = value.discoveryUrl;
      this._idAttribute = value.idAttribute;
      this._jitProvGroupStaticListEnabled = value.jitProvGroupStaticListEnabled;
      this._profileUrl = value.profileUrl;
      this._redirectUrl = value.redirectUrl;
      this._registrationEnabled = value.registrationEnabled;
      this._scope = value.scope;
      this._serviceProviderName = value.serviceProviderName;
      this._socialJitProvisioningEnabled = value.socialJitProvisioningEnabled;
      this._status = value.status;
      this._jitProvAssignedGroups.internalValue = value.jitProvAssignedGroups;
    }
  }

  // access_token_url - computed: true, optional: true, required: false
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  public resetAccessTokenUrl() {
    this._accessTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // account_linking_enabled - computed: false, optional: false, required: true
  private _accountLinkingEnabled?: boolean | cdktf.IResolvable; 
  public get accountLinkingEnabled() {
    return this.getBooleanAttribute('account_linking_enabled');
  }
  public set accountLinkingEnabled(value: boolean | cdktf.IResolvable) {
    this._accountLinkingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkingEnabledInput() {
    return this._accountLinkingEnabled;
  }

  // admin_scope - computed: true, optional: true, required: false
  private _adminScope?: string[]; 
  public get adminScope() {
    return this.getListAttribute('admin_scope');
  }
  public set adminScope(value: string[]) {
    this._adminScope = value;
  }
  public resetAdminScope() {
    this._adminScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScopeInput() {
    return this._adminScope;
  }

  // apple_dev_id - computed: true, optional: true, required: false
  private _appleDevId?: string; 
  public get appleDevId() {
    return this.getStringAttribute('apple_dev_id');
  }
  public set appleDevId(value: string) {
    this._appleDevId = value;
  }
  public resetAppleDevId() {
    this._appleDevId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleDevIdInput() {
    return this._appleDevId;
  }

  // apple_key_id - computed: true, optional: true, required: false
  private _appleKeyId?: string; 
  public get appleKeyId() {
    return this.getStringAttribute('apple_key_id');
  }
  public set appleKeyId(value: string) {
    this._appleKeyId = value;
  }
  public resetAppleKeyId() {
    this._appleKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleKeyIdInput() {
    return this._appleKeyId;
  }

  // authz_url - computed: true, optional: true, required: false
  private _authzUrl?: string; 
  public get authzUrl() {
    return this.getStringAttribute('authz_url');
  }
  public set authzUrl(value: string) {
    this._authzUrl = value;
  }
  public resetAuthzUrl() {
    this._authzUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzUrlInput() {
    return this._authzUrl;
  }

  // auto_redirect_enabled - computed: true, optional: true, required: false
  private _autoRedirectEnabled?: boolean | cdktf.IResolvable; 
  public get autoRedirectEnabled() {
    return this.getBooleanAttribute('auto_redirect_enabled');
  }
  public set autoRedirectEnabled(value: boolean | cdktf.IResolvable) {
    this._autoRedirectEnabled = value;
  }
  public resetAutoRedirectEnabled() {
    this._autoRedirectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectEnabledInput() {
    return this._autoRedirectEnabled;
  }

  // client_credential_in_payload - computed: true, optional: true, required: false
  private _clientCredentialInPayload?: boolean | cdktf.IResolvable; 
  public get clientCredentialInPayload() {
    return this.getBooleanAttribute('client_credential_in_payload');
  }
  public set clientCredentialInPayload(value: boolean | cdktf.IResolvable) {
    this._clientCredentialInPayload = value;
  }
  public resetClientCredentialInPayload() {
    this._clientCredentialInPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialInPayloadInput() {
    return this._clientCredentialInPayload;
  }

  // clock_skew_in_seconds - computed: true, optional: true, required: false
  private _clockSkewInSeconds?: number; 
  public get clockSkewInSeconds() {
    return this.getNumberAttribute('clock_skew_in_seconds');
  }
  public set clockSkewInSeconds(value: number) {
    this._clockSkewInSeconds = value;
  }
  public resetClockSkewInSeconds() {
    this._clockSkewInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInSecondsInput() {
    return this._clockSkewInSeconds;
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // id_attribute - computed: true, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }
  public set idAttribute(value: string) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // jit_prov_group_static_list_enabled - computed: true, optional: true, required: false
  private _jitProvGroupStaticListEnabled?: boolean | cdktf.IResolvable; 
  public get jitProvGroupStaticListEnabled() {
    return this.getBooleanAttribute('jit_prov_group_static_list_enabled');
  }
  public set jitProvGroupStaticListEnabled(value: boolean | cdktf.IResolvable) {
    this._jitProvGroupStaticListEnabled = value;
  }
  public resetJitProvGroupStaticListEnabled() {
    this._jitProvGroupStaticListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitProvGroupStaticListEnabledInput() {
    return this._jitProvGroupStaticListEnabled;
  }

  // profile_url - computed: true, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
  }

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // registration_enabled - computed: false, optional: false, required: true
  private _registrationEnabled?: boolean | cdktf.IResolvable; 
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }
  public set registrationEnabled(value: boolean | cdktf.IResolvable) {
    this._registrationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationEnabledInput() {
    return this._registrationEnabled;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_provider_name - computed: false, optional: false, required: true
  private _serviceProviderName?: string; 
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName;
  }

  // social_jit_provisioning_enabled - computed: true, optional: true, required: false
  private _socialJitProvisioningEnabled?: boolean | cdktf.IResolvable; 
  public get socialJitProvisioningEnabled() {
    return this.getBooleanAttribute('social_jit_provisioning_enabled');
  }
  public set socialJitProvisioningEnabled(value: boolean | cdktf.IResolvable) {
    this._socialJitProvisioningEnabled = value;
  }
  public resetSocialJitProvisioningEnabled() {
    this._socialJitProvisioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socialJitProvisioningEnabledInput() {
    return this._socialJitProvisioningEnabled;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // jit_prov_assigned_groups - computed: false, optional: true, required: false
  private _jitProvAssignedGroups = new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(this, "jit_prov_assigned_groups", false);
  public get jitProvAssignedGroups() {
    return this._jitProvAssignedGroups;
  }
  public putJitProvAssignedGroups(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable) {
    this._jitProvAssignedGroups.internalValue = value;
  }
  public resetJitProvAssignedGroups() {
    this._jitProvAssignedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitProvAssignedGroupsInput() {
    return this._jitProvAssignedGroups.internalValue;
  }
}
export interface IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}
  */
  readonly certMatchAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}
  */
  readonly crlCheckOnOcspFailureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}
  */
  readonly crlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}
  */
  readonly crlLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}
  */
  readonly crlReloadDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}
  */
  readonly ekuValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}
  */
  readonly ekuValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}
  */
  readonly ocspAllowUnknownResponseStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}
  */
  readonly ocspEnableSignedResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}
  */
  readonly ocspEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}
  */
  readonly ocspResponderUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}
  */
  readonly ocspRevalidateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}
  */
  readonly ocspServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}
  */
  readonly ocspTrustCertChain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}
  */
  readonly otherCertMatchAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}
  */
  readonly signingCertificateChain: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}
  */
  readonly userMatchAttribute: string;
}

export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference | IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_match_attribute: cdktf.stringToTerraform(struct!.certMatchAttribute),
    crl_check_on_ocsp_failure_enabled: cdktf.booleanToTerraform(struct!.crlCheckOnOcspFailureEnabled),
    crl_enabled: cdktf.booleanToTerraform(struct!.crlEnabled),
    crl_location: cdktf.stringToTerraform(struct!.crlLocation),
    crl_reload_duration: cdktf.numberToTerraform(struct!.crlReloadDuration),
    eku_validation_enabled: cdktf.booleanToTerraform(struct!.ekuValidationEnabled),
    eku_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ekuValues),
    ocsp_allow_unknown_response_status: cdktf.booleanToTerraform(struct!.ocspAllowUnknownResponseStatus),
    ocsp_enable_signed_response: cdktf.booleanToTerraform(struct!.ocspEnableSignedResponse),
    ocsp_enabled: cdktf.booleanToTerraform(struct!.ocspEnabled),
    ocsp_responder_url: cdktf.stringToTerraform(struct!.ocspResponderUrl),
    ocsp_revalidate_time: cdktf.numberToTerraform(struct!.ocspRevalidateTime),
    ocsp_server_name: cdktf.stringToTerraform(struct!.ocspServerName),
    ocsp_trust_cert_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ocspTrustCertChain),
    other_cert_match_attribute: cdktf.stringToTerraform(struct!.otherCertMatchAttribute),
    signing_certificate_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingCertificateChain),
    user_match_attribute: cdktf.stringToTerraform(struct!.userMatchAttribute),
  }
}


export function identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToHclTerraform(struct?: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference | IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_match_attribute: {
      value: cdktf.stringToHclTerraform(struct!.certMatchAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_check_on_ocsp_failure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crlCheckOnOcspFailureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_location: {
      value: cdktf.stringToHclTerraform(struct!.crlLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_reload_duration: {
      value: cdktf.numberToHclTerraform(struct!.crlReloadDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eku_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ekuValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eku_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ekuValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ocsp_allow_unknown_response_status: {
      value: cdktf.booleanToHclTerraform(struct!.ocspAllowUnknownResponseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_enable_signed_response: {
      value: cdktf.booleanToHclTerraform(struct!.ocspEnableSignedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ocspEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_responder_url: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_revalidate_time: {
      value: cdktf.numberToHclTerraform(struct!.ocspRevalidateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_server_name: {
      value: cdktf.stringToHclTerraform(struct!.ocspServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_trust_cert_chain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ocspTrustCertChain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    other_cert_match_attribute: {
      value: cdktf.stringToHclTerraform(struct!.otherCertMatchAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_certificate_chain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signingCertificateChain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_match_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userMatchAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certMatchAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.certMatchAttribute = this._certMatchAttribute;
    }
    if (this._crlCheckOnOcspFailureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlCheckOnOcspFailureEnabled = this._crlCheckOnOcspFailureEnabled;
    }
    if (this._crlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlEnabled = this._crlEnabled;
    }
    if (this._crlLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlLocation = this._crlLocation;
    }
    if (this._crlReloadDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlReloadDuration = this._crlReloadDuration;
    }
    if (this._ekuValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekuValidationEnabled = this._ekuValidationEnabled;
    }
    if (this._ekuValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekuValues = this._ekuValues;
    }
    if (this._ocspAllowUnknownResponseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspAllowUnknownResponseStatus = this._ocspAllowUnknownResponseStatus;
    }
    if (this._ocspEnableSignedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspEnableSignedResponse = this._ocspEnableSignedResponse;
    }
    if (this._ocspEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspEnabled = this._ocspEnabled;
    }
    if (this._ocspResponderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponderUrl = this._ocspResponderUrl;
    }
    if (this._ocspRevalidateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspRevalidateTime = this._ocspRevalidateTime;
    }
    if (this._ocspServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspServerName = this._ocspServerName;
    }
    if (this._ocspTrustCertChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspTrustCertChain = this._ocspTrustCertChain;
    }
    if (this._otherCertMatchAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCertMatchAttribute = this._otherCertMatchAttribute;
    }
    if (this._signingCertificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCertificateChain = this._signingCertificateChain;
    }
    if (this._userMatchAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMatchAttribute = this._userMatchAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certMatchAttribute = undefined;
      this._crlCheckOnOcspFailureEnabled = undefined;
      this._crlEnabled = undefined;
      this._crlLocation = undefined;
      this._crlReloadDuration = undefined;
      this._ekuValidationEnabled = undefined;
      this._ekuValues = undefined;
      this._ocspAllowUnknownResponseStatus = undefined;
      this._ocspEnableSignedResponse = undefined;
      this._ocspEnabled = undefined;
      this._ocspResponderUrl = undefined;
      this._ocspRevalidateTime = undefined;
      this._ocspServerName = undefined;
      this._ocspTrustCertChain = undefined;
      this._otherCertMatchAttribute = undefined;
      this._signingCertificateChain = undefined;
      this._userMatchAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certMatchAttribute = value.certMatchAttribute;
      this._crlCheckOnOcspFailureEnabled = value.crlCheckOnOcspFailureEnabled;
      this._crlEnabled = value.crlEnabled;
      this._crlLocation = value.crlLocation;
      this._crlReloadDuration = value.crlReloadDuration;
      this._ekuValidationEnabled = value.ekuValidationEnabled;
      this._ekuValues = value.ekuValues;
      this._ocspAllowUnknownResponseStatus = value.ocspAllowUnknownResponseStatus;
      this._ocspEnableSignedResponse = value.ocspEnableSignedResponse;
      this._ocspEnabled = value.ocspEnabled;
      this._ocspResponderUrl = value.ocspResponderUrl;
      this._ocspRevalidateTime = value.ocspRevalidateTime;
      this._ocspServerName = value.ocspServerName;
      this._ocspTrustCertChain = value.ocspTrustCertChain;
      this._otherCertMatchAttribute = value.otherCertMatchAttribute;
      this._signingCertificateChain = value.signingCertificateChain;
      this._userMatchAttribute = value.userMatchAttribute;
    }
  }

  // cert_match_attribute - computed: false, optional: false, required: true
  private _certMatchAttribute?: string; 
  public get certMatchAttribute() {
    return this.getStringAttribute('cert_match_attribute');
  }
  public set certMatchAttribute(value: string) {
    this._certMatchAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certMatchAttributeInput() {
    return this._certMatchAttribute;
  }

  // crl_check_on_ocsp_failure_enabled - computed: true, optional: true, required: false
  private _crlCheckOnOcspFailureEnabled?: boolean | cdktf.IResolvable; 
  public get crlCheckOnOcspFailureEnabled() {
    return this.getBooleanAttribute('crl_check_on_ocsp_failure_enabled');
  }
  public set crlCheckOnOcspFailureEnabled(value: boolean | cdktf.IResolvable) {
    this._crlCheckOnOcspFailureEnabled = value;
  }
  public resetCrlCheckOnOcspFailureEnabled() {
    this._crlCheckOnOcspFailureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCheckOnOcspFailureEnabledInput() {
    return this._crlCheckOnOcspFailureEnabled;
  }

  // crl_enabled - computed: true, optional: true, required: false
  private _crlEnabled?: boolean | cdktf.IResolvable; 
  public get crlEnabled() {
    return this.getBooleanAttribute('crl_enabled');
  }
  public set crlEnabled(value: boolean | cdktf.IResolvable) {
    this._crlEnabled = value;
  }
  public resetCrlEnabled() {
    this._crlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlEnabledInput() {
    return this._crlEnabled;
  }

  // crl_location - computed: true, optional: true, required: false
  private _crlLocation?: string; 
  public get crlLocation() {
    return this.getStringAttribute('crl_location');
  }
  public set crlLocation(value: string) {
    this._crlLocation = value;
  }
  public resetCrlLocation() {
    this._crlLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlLocationInput() {
    return this._crlLocation;
  }

  // crl_reload_duration - computed: true, optional: true, required: false
  private _crlReloadDuration?: number; 
  public get crlReloadDuration() {
    return this.getNumberAttribute('crl_reload_duration');
  }
  public set crlReloadDuration(value: number) {
    this._crlReloadDuration = value;
  }
  public resetCrlReloadDuration() {
    this._crlReloadDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlReloadDurationInput() {
    return this._crlReloadDuration;
  }

  // eku_validation_enabled - computed: true, optional: true, required: false
  private _ekuValidationEnabled?: boolean | cdktf.IResolvable; 
  public get ekuValidationEnabled() {
    return this.getBooleanAttribute('eku_validation_enabled');
  }
  public set ekuValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._ekuValidationEnabled = value;
  }
  public resetEkuValidationEnabled() {
    this._ekuValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekuValidationEnabledInput() {
    return this._ekuValidationEnabled;
  }

  // eku_values - computed: true, optional: true, required: false
  private _ekuValues?: string[]; 
  public get ekuValues() {
    return this.getListAttribute('eku_values');
  }
  public set ekuValues(value: string[]) {
    this._ekuValues = value;
  }
  public resetEkuValues() {
    this._ekuValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekuValuesInput() {
    return this._ekuValues;
  }

  // ocsp_allow_unknown_response_status - computed: true, optional: true, required: false
  private _ocspAllowUnknownResponseStatus?: boolean | cdktf.IResolvable; 
  public get ocspAllowUnknownResponseStatus() {
    return this.getBooleanAttribute('ocsp_allow_unknown_response_status');
  }
  public set ocspAllowUnknownResponseStatus(value: boolean | cdktf.IResolvable) {
    this._ocspAllowUnknownResponseStatus = value;
  }
  public resetOcspAllowUnknownResponseStatus() {
    this._ocspAllowUnknownResponseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspAllowUnknownResponseStatusInput() {
    return this._ocspAllowUnknownResponseStatus;
  }

  // ocsp_enable_signed_response - computed: true, optional: true, required: false
  private _ocspEnableSignedResponse?: boolean | cdktf.IResolvable; 
  public get ocspEnableSignedResponse() {
    return this.getBooleanAttribute('ocsp_enable_signed_response');
  }
  public set ocspEnableSignedResponse(value: boolean | cdktf.IResolvable) {
    this._ocspEnableSignedResponse = value;
  }
  public resetOcspEnableSignedResponse() {
    this._ocspEnableSignedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspEnableSignedResponseInput() {
    return this._ocspEnableSignedResponse;
  }

  // ocsp_enabled - computed: true, optional: true, required: false
  private _ocspEnabled?: boolean | cdktf.IResolvable; 
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }
  public set ocspEnabled(value: boolean | cdktf.IResolvable) {
    this._ocspEnabled = value;
  }
  public resetOcspEnabled() {
    this._ocspEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspEnabledInput() {
    return this._ocspEnabled;
  }

  // ocsp_responder_url - computed: true, optional: true, required: false
  private _ocspResponderUrl?: string; 
  public get ocspResponderUrl() {
    return this.getStringAttribute('ocsp_responder_url');
  }
  public set ocspResponderUrl(value: string) {
    this._ocspResponderUrl = value;
  }
  public resetOcspResponderUrl() {
    this._ocspResponderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderUrlInput() {
    return this._ocspResponderUrl;
  }

  // ocsp_revalidate_time - computed: true, optional: true, required: false
  private _ocspRevalidateTime?: number; 
  public get ocspRevalidateTime() {
    return this.getNumberAttribute('ocsp_revalidate_time');
  }
  public set ocspRevalidateTime(value: number) {
    this._ocspRevalidateTime = value;
  }
  public resetOcspRevalidateTime() {
    this._ocspRevalidateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspRevalidateTimeInput() {
    return this._ocspRevalidateTime;
  }

  // ocsp_server_name - computed: true, optional: true, required: false
  private _ocspServerName?: string; 
  public get ocspServerName() {
    return this.getStringAttribute('ocsp_server_name');
  }
  public set ocspServerName(value: string) {
    this._ocspServerName = value;
  }
  public resetOcspServerName() {
    this._ocspServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspServerNameInput() {
    return this._ocspServerName;
  }

  // ocsp_trust_cert_chain - computed: true, optional: true, required: false
  private _ocspTrustCertChain?: string[]; 
  public get ocspTrustCertChain() {
    return this.getListAttribute('ocsp_trust_cert_chain');
  }
  public set ocspTrustCertChain(value: string[]) {
    this._ocspTrustCertChain = value;
  }
  public resetOcspTrustCertChain() {
    this._ocspTrustCertChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspTrustCertChainInput() {
    return this._ocspTrustCertChain;
  }

  // other_cert_match_attribute - computed: true, optional: true, required: false
  private _otherCertMatchAttribute?: string; 
  public get otherCertMatchAttribute() {
    return this.getStringAttribute('other_cert_match_attribute');
  }
  public set otherCertMatchAttribute(value: string) {
    this._otherCertMatchAttribute = value;
  }
  public resetOtherCertMatchAttribute() {
    this._otherCertMatchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCertMatchAttributeInput() {
    return this._otherCertMatchAttribute;
  }

  // signing_certificate_chain - computed: false, optional: false, required: true
  private _signingCertificateChain?: string[]; 
  public get signingCertificateChain() {
    return this.getListAttribute('signing_certificate_chain');
  }
  public set signingCertificateChain(value: string[]) {
    this._signingCertificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertificateChainInput() {
    return this._signingCertificateChain;
  }

  // user_match_attribute - computed: false, optional: false, required: true
  private _userMatchAttribute?: string; 
  public get userMatchAttribute() {
    return this.getStringAttribute('user_match_attribute');
  }
  public set userMatchAttribute(value: string) {
    this._userMatchAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchAttributeInput() {
    return this._userMatchAttribute;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider oci_identity_domains_identity_provider}
*/
export class IdentityDomainsIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsIdentityProvider to import
  * @param importFromId The id of the existing IdentityDomainsIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_identity_provider oci_identity_domains_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assertionAttribute = config.assertionAttribute;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authnRequestBinding = config.authnRequestBinding;
    this._authorization = config.authorization;
    this._description = config.description;
    this._enabled = config.enabled;
    this._encryptionCertificate = config.encryptionCertificate;
    this._externalId = config.externalId;
    this._iconUrl = config.iconUrl;
    this._idcsEndpoint = config.idcsEndpoint;
    this._idpSsoUrl = config.idpSsoUrl;
    this._includeSigningCertInSignature = config.includeSigningCertInSignature;
    this._jitUserProvAttributeUpdateEnabled = config.jitUserProvAttributeUpdateEnabled;
    this._jitUserProvCreateUserEnabled = config.jitUserProvCreateUserEnabled;
    this._jitUserProvEnabled = config.jitUserProvEnabled;
    this._jitUserProvGroupAssertionAttributeEnabled = config.jitUserProvGroupAssertionAttributeEnabled;
    this._jitUserProvGroupAssignmentMethod = config.jitUserProvGroupAssignmentMethod;
    this._jitUserProvGroupMappingMode = config.jitUserProvGroupMappingMode;
    this._jitUserProvGroupSamlAttributeName = config.jitUserProvGroupSamlAttributeName;
    this._jitUserProvGroupStaticListEnabled = config.jitUserProvGroupStaticListEnabled;
    this._jitUserProvIgnoreErrorOnAbsentGroups = config.jitUserProvIgnoreErrorOnAbsentGroups;
    this._logoutBinding = config.logoutBinding;
    this._logoutEnabled = config.logoutEnabled;
    this._logoutRequestUrl = config.logoutRequestUrl;
    this._logoutResponseUrl = config.logoutResponseUrl;
    this._metadata = config.metadata;
    this._nameIdFormat = config.nameIdFormat;
    this._ocid = config.ocid;
    this._partnerName = config.partnerName;
    this._partnerProviderId = config.partnerProviderId;
    this._requestedAuthenticationContext = config.requestedAuthenticationContext;
    this._requireForceAuthn = config.requireForceAuthn;
    this._requiresEncryptedAssertion = config.requiresEncryptedAssertion;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._samlHoKrequired = config.samlHoKrequired;
    this._schemas = config.schemas;
    this._serviceInstanceIdentifier = config.serviceInstanceIdentifier;
    this._shownOnLoginPage = config.shownOnLoginPage;
    this._signatureHashAlgorithm = config.signatureHashAlgorithm;
    this._signingCertificate = config.signingCertificate;
    this._succinctId = config.succinctId;
    this._type = config.type;
    this._userMappingMethod = config.userMappingMethod;
    this._userMappingStoreAttribute = config.userMappingStoreAttribute;
    this._correlationPolicy.internalValue = config.correlationPolicy;
    this._jitUserProvAssignedGroups.internalValue = config.jitUserProvAssignedGroups;
    this._jitUserProvAttributes.internalValue = config.jitUserProvAttributes;
    this._jitUserProvGroupMappings.internalValue = config.jitUserProvGroupMappings;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue = config.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;
    this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue = config.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_attribute - computed: true, optional: true, required: false
  private _assertionAttribute?: string; 
  public get assertionAttribute() {
    return this.getStringAttribute('assertion_attribute');
  }
  public set assertionAttribute(value: string) {
    this._assertionAttribute = value;
  }
  public resetAssertionAttribute() {
    this._assertionAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributeInput() {
    return this._assertionAttribute;
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authn_request_binding - computed: true, optional: true, required: false
  private _authnRequestBinding?: string; 
  public get authnRequestBinding() {
    return this.getStringAttribute('authn_request_binding');
  }
  public set authnRequestBinding(value: string) {
    this._authnRequestBinding = value;
  }
  public resetAuthnRequestBinding() {
    this._authnRequestBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnRequestBindingInput() {
    return this._authnRequestBinding;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: true, required: false
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

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_certificate - computed: true, optional: true, required: false
  private _encryptionCertificate?: string; 
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }
  public set encryptionCertificate(value: string) {
    this._encryptionCertificate = value;
  }
  public resetEncryptionCertificate() {
    this._encryptionCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionCertificateInput() {
    return this._encryptionCertificate;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // icon_url - computed: true, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsIdentityProviderIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsIdentityProviderIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // idp_sso_url - computed: true, optional: true, required: false
  private _idpSsoUrl?: string; 
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }
  public set idpSsoUrl(value: string) {
    this._idpSsoUrl = value;
  }
  public resetIdpSsoUrl() {
    this._idpSsoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSsoUrlInput() {
    return this._idpSsoUrl;
  }

  // include_signing_cert_in_signature - computed: true, optional: true, required: false
  private _includeSigningCertInSignature?: boolean | cdktf.IResolvable; 
  public get includeSigningCertInSignature() {
    return this.getBooleanAttribute('include_signing_cert_in_signature');
  }
  public set includeSigningCertInSignature(value: boolean | cdktf.IResolvable) {
    this._includeSigningCertInSignature = value;
  }
  public resetIncludeSigningCertInSignature() {
    this._includeSigningCertInSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSigningCertInSignatureInput() {
    return this._includeSigningCertInSignature;
  }

  // jit_user_prov_attribute_update_enabled - computed: true, optional: true, required: false
  private _jitUserProvAttributeUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get jitUserProvAttributeUpdateEnabled() {
    return this.getBooleanAttribute('jit_user_prov_attribute_update_enabled');
  }
  public set jitUserProvAttributeUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._jitUserProvAttributeUpdateEnabled = value;
  }
  public resetJitUserProvAttributeUpdateEnabled() {
    this._jitUserProvAttributeUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvAttributeUpdateEnabledInput() {
    return this._jitUserProvAttributeUpdateEnabled;
  }

  // jit_user_prov_create_user_enabled - computed: true, optional: true, required: false
  private _jitUserProvCreateUserEnabled?: boolean | cdktf.IResolvable; 
  public get jitUserProvCreateUserEnabled() {
    return this.getBooleanAttribute('jit_user_prov_create_user_enabled');
  }
  public set jitUserProvCreateUserEnabled(value: boolean | cdktf.IResolvable) {
    this._jitUserProvCreateUserEnabled = value;
  }
  public resetJitUserProvCreateUserEnabled() {
    this._jitUserProvCreateUserEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvCreateUserEnabledInput() {
    return this._jitUserProvCreateUserEnabled;
  }

  // jit_user_prov_enabled - computed: true, optional: true, required: false
  private _jitUserProvEnabled?: boolean | cdktf.IResolvable; 
  public get jitUserProvEnabled() {
    return this.getBooleanAttribute('jit_user_prov_enabled');
  }
  public set jitUserProvEnabled(value: boolean | cdktf.IResolvable) {
    this._jitUserProvEnabled = value;
  }
  public resetJitUserProvEnabled() {
    this._jitUserProvEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvEnabledInput() {
    return this._jitUserProvEnabled;
  }

  // jit_user_prov_group_assertion_attribute_enabled - computed: true, optional: true, required: false
  private _jitUserProvGroupAssertionAttributeEnabled?: boolean | cdktf.IResolvable; 
  public get jitUserProvGroupAssertionAttributeEnabled() {
    return this.getBooleanAttribute('jit_user_prov_group_assertion_attribute_enabled');
  }
  public set jitUserProvGroupAssertionAttributeEnabled(value: boolean | cdktf.IResolvable) {
    this._jitUserProvGroupAssertionAttributeEnabled = value;
  }
  public resetJitUserProvGroupAssertionAttributeEnabled() {
    this._jitUserProvGroupAssertionAttributeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupAssertionAttributeEnabledInput() {
    return this._jitUserProvGroupAssertionAttributeEnabled;
  }

  // jit_user_prov_group_assignment_method - computed: true, optional: true, required: false
  private _jitUserProvGroupAssignmentMethod?: string; 
  public get jitUserProvGroupAssignmentMethod() {
    return this.getStringAttribute('jit_user_prov_group_assignment_method');
  }
  public set jitUserProvGroupAssignmentMethod(value: string) {
    this._jitUserProvGroupAssignmentMethod = value;
  }
  public resetJitUserProvGroupAssignmentMethod() {
    this._jitUserProvGroupAssignmentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupAssignmentMethodInput() {
    return this._jitUserProvGroupAssignmentMethod;
  }

  // jit_user_prov_group_mapping_mode - computed: true, optional: true, required: false
  private _jitUserProvGroupMappingMode?: string; 
  public get jitUserProvGroupMappingMode() {
    return this.getStringAttribute('jit_user_prov_group_mapping_mode');
  }
  public set jitUserProvGroupMappingMode(value: string) {
    this._jitUserProvGroupMappingMode = value;
  }
  public resetJitUserProvGroupMappingMode() {
    this._jitUserProvGroupMappingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupMappingModeInput() {
    return this._jitUserProvGroupMappingMode;
  }

  // jit_user_prov_group_saml_attribute_name - computed: true, optional: true, required: false
  private _jitUserProvGroupSamlAttributeName?: string; 
  public get jitUserProvGroupSamlAttributeName() {
    return this.getStringAttribute('jit_user_prov_group_saml_attribute_name');
  }
  public set jitUserProvGroupSamlAttributeName(value: string) {
    this._jitUserProvGroupSamlAttributeName = value;
  }
  public resetJitUserProvGroupSamlAttributeName() {
    this._jitUserProvGroupSamlAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupSamlAttributeNameInput() {
    return this._jitUserProvGroupSamlAttributeName;
  }

  // jit_user_prov_group_static_list_enabled - computed: true, optional: true, required: false
  private _jitUserProvGroupStaticListEnabled?: boolean | cdktf.IResolvable; 
  public get jitUserProvGroupStaticListEnabled() {
    return this.getBooleanAttribute('jit_user_prov_group_static_list_enabled');
  }
  public set jitUserProvGroupStaticListEnabled(value: boolean | cdktf.IResolvable) {
    this._jitUserProvGroupStaticListEnabled = value;
  }
  public resetJitUserProvGroupStaticListEnabled() {
    this._jitUserProvGroupStaticListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupStaticListEnabledInput() {
    return this._jitUserProvGroupStaticListEnabled;
  }

  // jit_user_prov_ignore_error_on_absent_groups - computed: true, optional: true, required: false
  private _jitUserProvIgnoreErrorOnAbsentGroups?: boolean | cdktf.IResolvable; 
  public get jitUserProvIgnoreErrorOnAbsentGroups() {
    return this.getBooleanAttribute('jit_user_prov_ignore_error_on_absent_groups');
  }
  public set jitUserProvIgnoreErrorOnAbsentGroups(value: boolean | cdktf.IResolvable) {
    this._jitUserProvIgnoreErrorOnAbsentGroups = value;
  }
  public resetJitUserProvIgnoreErrorOnAbsentGroups() {
    this._jitUserProvIgnoreErrorOnAbsentGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvIgnoreErrorOnAbsentGroupsInput() {
    return this._jitUserProvIgnoreErrorOnAbsentGroups;
  }

  // last_notification_sent_time - computed: true, optional: false, required: false
  public get lastNotificationSentTime() {
    return this.getStringAttribute('last_notification_sent_time');
  }

  // logout_binding - computed: true, optional: true, required: false
  private _logoutBinding?: string; 
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }
  public set logoutBinding(value: string) {
    this._logoutBinding = value;
  }
  public resetLogoutBinding() {
    this._logoutBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutBindingInput() {
    return this._logoutBinding;
  }

  // logout_enabled - computed: true, optional: true, required: false
  private _logoutEnabled?: boolean | cdktf.IResolvable; 
  public get logoutEnabled() {
    return this.getBooleanAttribute('logout_enabled');
  }
  public set logoutEnabled(value: boolean | cdktf.IResolvable) {
    this._logoutEnabled = value;
  }
  public resetLogoutEnabled() {
    this._logoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEnabledInput() {
    return this._logoutEnabled;
  }

  // logout_request_url - computed: true, optional: true, required: false
  private _logoutRequestUrl?: string; 
  public get logoutRequestUrl() {
    return this.getStringAttribute('logout_request_url');
  }
  public set logoutRequestUrl(value: string) {
    this._logoutRequestUrl = value;
  }
  public resetLogoutRequestUrl() {
    this._logoutRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRequestUrlInput() {
    return this._logoutRequestUrl;
  }

  // logout_response_url - computed: true, optional: true, required: false
  private _logoutResponseUrl?: string; 
  public get logoutResponseUrl() {
    return this.getStringAttribute('logout_response_url');
  }
  public set logoutResponseUrl(value: string) {
    this._logoutResponseUrl = value;
  }
  public resetLogoutResponseUrl() {
    this._logoutResponseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutResponseUrlInput() {
    return this._logoutResponseUrl;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsIdentityProviderMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name_id_format - computed: true, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // partner_name - computed: false, optional: false, required: true
  private _partnerName?: string; 
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }
  public set partnerName(value: string) {
    this._partnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerNameInput() {
    return this._partnerName;
  }

  // partner_provider_id - computed: true, optional: true, required: false
  private _partnerProviderId?: string; 
  public get partnerProviderId() {
    return this.getStringAttribute('partner_provider_id');
  }
  public set partnerProviderId(value: string) {
    this._partnerProviderId = value;
  }
  public resetPartnerProviderId() {
    this._partnerProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerProviderIdInput() {
    return this._partnerProviderId;
  }

  // requested_authentication_context - computed: true, optional: true, required: false
  private _requestedAuthenticationContext?: string[]; 
  public get requestedAuthenticationContext() {
    return this.getListAttribute('requested_authentication_context');
  }
  public set requestedAuthenticationContext(value: string[]) {
    this._requestedAuthenticationContext = value;
  }
  public resetRequestedAuthenticationContext() {
    this._requestedAuthenticationContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedAuthenticationContextInput() {
    return this._requestedAuthenticationContext;
  }

  // require_force_authn - computed: true, optional: true, required: false
  private _requireForceAuthn?: boolean | cdktf.IResolvable; 
  public get requireForceAuthn() {
    return this.getBooleanAttribute('require_force_authn');
  }
  public set requireForceAuthn(value: boolean | cdktf.IResolvable) {
    this._requireForceAuthn = value;
  }
  public resetRequireForceAuthn() {
    this._requireForceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireForceAuthnInput() {
    return this._requireForceAuthn;
  }

  // requires_encrypted_assertion - computed: true, optional: true, required: false
  private _requiresEncryptedAssertion?: boolean | cdktf.IResolvable; 
  public get requiresEncryptedAssertion() {
    return this.getBooleanAttribute('requires_encrypted_assertion');
  }
  public set requiresEncryptedAssertion(value: boolean | cdktf.IResolvable) {
    this._requiresEncryptedAssertion = value;
  }
  public resetRequiresEncryptedAssertion() {
    this._requiresEncryptedAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresEncryptedAssertionInput() {
    return this._requiresEncryptedAssertion;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // saml_ho_krequired - computed: true, optional: true, required: false
  private _samlHoKrequired?: boolean | cdktf.IResolvable; 
  public get samlHoKrequired() {
    return this.getBooleanAttribute('saml_ho_krequired');
  }
  public set samlHoKrequired(value: boolean | cdktf.IResolvable) {
    this._samlHoKrequired = value;
  }
  public resetSamlHoKrequired() {
    this._samlHoKrequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlHoKrequiredInput() {
    return this._samlHoKrequired;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // service_instance_identifier - computed: true, optional: true, required: false
  private _serviceInstanceIdentifier?: string; 
  public get serviceInstanceIdentifier() {
    return this.getStringAttribute('service_instance_identifier');
  }
  public set serviceInstanceIdentifier(value: string) {
    this._serviceInstanceIdentifier = value;
  }
  public resetServiceInstanceIdentifier() {
    this._serviceInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdentifierInput() {
    return this._serviceInstanceIdentifier;
  }

  // shown_on_login_page - computed: true, optional: true, required: false
  private _shownOnLoginPage?: boolean | cdktf.IResolvable; 
  public get shownOnLoginPage() {
    return this.getBooleanAttribute('shown_on_login_page');
  }
  public set shownOnLoginPage(value: boolean | cdktf.IResolvable) {
    this._shownOnLoginPage = value;
  }
  public resetShownOnLoginPage() {
    this._shownOnLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shownOnLoginPageInput() {
    return this._shownOnLoginPage;
  }

  // signature_hash_algorithm - computed: true, optional: true, required: false
  private _signatureHashAlgorithm?: string; 
  public get signatureHashAlgorithm() {
    return this.getStringAttribute('signature_hash_algorithm');
  }
  public set signatureHashAlgorithm(value: string) {
    this._signatureHashAlgorithm = value;
  }
  public resetSignatureHashAlgorithm() {
    this._signatureHashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHashAlgorithmInput() {
    return this._signatureHashAlgorithm;
  }

  // signing_certificate - computed: true, optional: true, required: false
  private _signingCertificate?: string; 
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }
  public set signingCertificate(value: string) {
    this._signingCertificate = value;
  }
  public resetSigningCertificate() {
    this._signingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertificateInput() {
    return this._signingCertificate;
  }

  // succinct_id - computed: true, optional: true, required: false
  private _succinctId?: string; 
  public get succinctId() {
    return this.getStringAttribute('succinct_id');
  }
  public set succinctId(value: string) {
    this._succinctId = value;
  }
  public resetSuccinctId() {
    this._succinctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get succinctIdInput() {
    return this._succinctId;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // tenant_provider_id - computed: true, optional: false, required: false
  public get tenantProviderId() {
    return this.getStringAttribute('tenant_provider_id');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_mapping_method - computed: true, optional: true, required: false
  private _userMappingMethod?: string; 
  public get userMappingMethod() {
    return this.getStringAttribute('user_mapping_method');
  }
  public set userMappingMethod(value: string) {
    this._userMappingMethod = value;
  }
  public resetUserMappingMethod() {
    this._userMappingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingMethodInput() {
    return this._userMappingMethod;
  }

  // user_mapping_store_attribute - computed: true, optional: true, required: false
  private _userMappingStoreAttribute?: string; 
  public get userMappingStoreAttribute() {
    return this.getStringAttribute('user_mapping_store_attribute');
  }
  public set userMappingStoreAttribute(value: string) {
    this._userMappingStoreAttribute = value;
  }
  public resetUserMappingStoreAttribute() {
    this._userMappingStoreAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMappingStoreAttributeInput() {
    return this._userMappingStoreAttribute;
  }

  // correlation_policy - computed: false, optional: true, required: false
  private _correlationPolicy = new IdentityDomainsIdentityProviderCorrelationPolicyOutputReference(this, "correlation_policy");
  public get correlationPolicy() {
    return this._correlationPolicy;
  }
  public putCorrelationPolicy(value: IdentityDomainsIdentityProviderCorrelationPolicy) {
    this._correlationPolicy.internalValue = value;
  }
  public resetCorrelationPolicy() {
    this._correlationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationPolicyInput() {
    return this._correlationPolicy.internalValue;
  }

  // jit_user_prov_assigned_groups - computed: false, optional: true, required: false
  private _jitUserProvAssignedGroups = new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(this, "jit_user_prov_assigned_groups", false);
  public get jitUserProvAssignedGroups() {
    return this._jitUserProvAssignedGroups;
  }
  public putJitUserProvAssignedGroups(value: IdentityDomainsIdentityProviderJitUserProvAssignedGroups[] | cdktf.IResolvable) {
    this._jitUserProvAssignedGroups.internalValue = value;
  }
  public resetJitUserProvAssignedGroups() {
    this._jitUserProvAssignedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvAssignedGroupsInput() {
    return this._jitUserProvAssignedGroups.internalValue;
  }

  // jit_user_prov_attributes - computed: false, optional: true, required: false
  private _jitUserProvAttributes = new IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(this, "jit_user_prov_attributes");
  public get jitUserProvAttributes() {
    return this._jitUserProvAttributes;
  }
  public putJitUserProvAttributes(value: IdentityDomainsIdentityProviderJitUserProvAttributes) {
    this._jitUserProvAttributes.internalValue = value;
  }
  public resetJitUserProvAttributes() {
    this._jitUserProvAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvAttributesInput() {
    return this._jitUserProvAttributes.internalValue;
  }

  // jit_user_prov_group_mappings - computed: false, optional: true, required: false
  private _jitUserProvGroupMappings = new IdentityDomainsIdentityProviderJitUserProvGroupMappingsList(this, "jit_user_prov_group_mappings", false);
  public get jitUserProvGroupMappings() {
    return this._jitUserProvGroupMappings;
  }
  public putJitUserProvGroupMappings(value: IdentityDomainsIdentityProviderJitUserProvGroupMappings[] | cdktf.IResolvable) {
    this._jitUserProvGroupMappings.internalValue = value;
  }
  public resetJitUserProvGroupMappings() {
    this._jitUserProvGroupMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitUserProvGroupMappingsInput() {
    return this._jitUserProvGroupMappings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsIdentityProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsIdentityProviderTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsIdentityProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsIdentityProviderTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider");
  public get urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider) {
    this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider() {
    this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionx509identity_provider - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionx509identity_provider");
  public get urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider() {
    return this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(value: IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider) {
    this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider() {
    this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assertion_attribute: cdktf.stringToTerraform(this._assertionAttribute),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authn_request_binding: cdktf.stringToTerraform(this._authnRequestBinding),
      authorization: cdktf.stringToTerraform(this._authorization),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_certificate: cdktf.stringToTerraform(this._encryptionCertificate),
      external_id: cdktf.stringToTerraform(this._externalId),
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      idp_sso_url: cdktf.stringToTerraform(this._idpSsoUrl),
      include_signing_cert_in_signature: cdktf.booleanToTerraform(this._includeSigningCertInSignature),
      jit_user_prov_attribute_update_enabled: cdktf.booleanToTerraform(this._jitUserProvAttributeUpdateEnabled),
      jit_user_prov_create_user_enabled: cdktf.booleanToTerraform(this._jitUserProvCreateUserEnabled),
      jit_user_prov_enabled: cdktf.booleanToTerraform(this._jitUserProvEnabled),
      jit_user_prov_group_assertion_attribute_enabled: cdktf.booleanToTerraform(this._jitUserProvGroupAssertionAttributeEnabled),
      jit_user_prov_group_assignment_method: cdktf.stringToTerraform(this._jitUserProvGroupAssignmentMethod),
      jit_user_prov_group_mapping_mode: cdktf.stringToTerraform(this._jitUserProvGroupMappingMode),
      jit_user_prov_group_saml_attribute_name: cdktf.stringToTerraform(this._jitUserProvGroupSamlAttributeName),
      jit_user_prov_group_static_list_enabled: cdktf.booleanToTerraform(this._jitUserProvGroupStaticListEnabled),
      jit_user_prov_ignore_error_on_absent_groups: cdktf.booleanToTerraform(this._jitUserProvIgnoreErrorOnAbsentGroups),
      logout_binding: cdktf.stringToTerraform(this._logoutBinding),
      logout_enabled: cdktf.booleanToTerraform(this._logoutEnabled),
      logout_request_url: cdktf.stringToTerraform(this._logoutRequestUrl),
      logout_response_url: cdktf.stringToTerraform(this._logoutResponseUrl),
      metadata: cdktf.stringToTerraform(this._metadata),
      name_id_format: cdktf.stringToTerraform(this._nameIdFormat),
      ocid: cdktf.stringToTerraform(this._ocid),
      partner_name: cdktf.stringToTerraform(this._partnerName),
      partner_provider_id: cdktf.stringToTerraform(this._partnerProviderId),
      requested_authentication_context: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestedAuthenticationContext),
      require_force_authn: cdktf.booleanToTerraform(this._requireForceAuthn),
      requires_encrypted_assertion: cdktf.booleanToTerraform(this._requiresEncryptedAssertion),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      saml_ho_krequired: cdktf.booleanToTerraform(this._samlHoKrequired),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      service_instance_identifier: cdktf.stringToTerraform(this._serviceInstanceIdentifier),
      shown_on_login_page: cdktf.booleanToTerraform(this._shownOnLoginPage),
      signature_hash_algorithm: cdktf.stringToTerraform(this._signatureHashAlgorithm),
      signing_certificate: cdktf.stringToTerraform(this._signingCertificate),
      succinct_id: cdktf.stringToTerraform(this._succinctId),
      type: cdktf.stringToTerraform(this._type),
      user_mapping_method: cdktf.stringToTerraform(this._userMappingMethod),
      user_mapping_store_attribute: cdktf.stringToTerraform(this._userMappingStoreAttribute),
      correlation_policy: identityDomainsIdentityProviderCorrelationPolicyToTerraform(this._correlationPolicy.internalValue),
      jit_user_prov_assigned_groups: cdktf.listMapper(identityDomainsIdentityProviderJitUserProvAssignedGroupsToTerraform, true)(this._jitUserProvAssignedGroups.internalValue),
      jit_user_prov_attributes: identityDomainsIdentityProviderJitUserProvAttributesToTerraform(this._jitUserProvAttributes.internalValue),
      jit_user_prov_group_mappings: cdktf.listMapper(identityDomainsIdentityProviderJitUserProvGroupMappingsToTerraform, true)(this._jitUserProvGroupMappings.internalValue),
      tags: cdktf.listMapper(identityDomainsIdentityProviderTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsIdentityProviderTimeoutsToTerraform(this._timeouts.internalValue),
      urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToTerraform(this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue),
      urnietfparamsscimschemasoracleidcsextensionx509identity_provider: identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToTerraform(this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assertion_attribute: {
        value: cdktf.stringToHclTerraform(this._assertionAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn_request_binding: {
        value: cdktf.stringToHclTerraform(this._authnRequestBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_certificate: {
        value: cdktf.stringToHclTerraform(this._encryptionCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_url: {
        value: cdktf.stringToHclTerraform(this._iconUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_sso_url: {
        value: cdktf.stringToHclTerraform(this._idpSsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_signing_cert_in_signature: {
        value: cdktf.booleanToHclTerraform(this._includeSigningCertInSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_attribute_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvAttributeUpdateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_create_user_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvCreateUserEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_group_assertion_attribute_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvGroupAssertionAttributeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_group_assignment_method: {
        value: cdktf.stringToHclTerraform(this._jitUserProvGroupAssignmentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_user_prov_group_mapping_mode: {
        value: cdktf.stringToHclTerraform(this._jitUserProvGroupMappingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_user_prov_group_saml_attribute_name: {
        value: cdktf.stringToHclTerraform(this._jitUserProvGroupSamlAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_user_prov_group_static_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvGroupStaticListEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jit_user_prov_ignore_error_on_absent_groups: {
        value: cdktf.booleanToHclTerraform(this._jitUserProvIgnoreErrorOnAbsentGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_binding: {
        value: cdktf.stringToHclTerraform(this._logoutBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_enabled: {
        value: cdktf.booleanToHclTerraform(this._logoutEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_request_url: {
        value: cdktf.stringToHclTerraform(this._logoutRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_response_url: {
        value: cdktf.stringToHclTerraform(this._logoutResponseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_id_format: {
        value: cdktf.stringToHclTerraform(this._nameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_name: {
        value: cdktf.stringToHclTerraform(this._partnerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_provider_id: {
        value: cdktf.stringToHclTerraform(this._partnerProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_authentication_context: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestedAuthenticationContext),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      require_force_authn: {
        value: cdktf.booleanToHclTerraform(this._requireForceAuthn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      requires_encrypted_assertion: {
        value: cdktf.booleanToHclTerraform(this._requiresEncryptedAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_ho_krequired: {
        value: cdktf.booleanToHclTerraform(this._samlHoKrequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_instance_identifier: {
        value: cdktf.stringToHclTerraform(this._serviceInstanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shown_on_login_page: {
        value: cdktf.booleanToHclTerraform(this._shownOnLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signature_hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureHashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_certificate: {
        value: cdktf.stringToHclTerraform(this._signingCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      succinct_id: {
        value: cdktf.stringToHclTerraform(this._succinctId),
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
      user_mapping_method: {
        value: cdktf.stringToHclTerraform(this._userMappingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_mapping_store_attribute: {
        value: cdktf.stringToHclTerraform(this._userMappingStoreAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      correlation_policy: {
        value: identityDomainsIdentityProviderCorrelationPolicyToHclTerraform(this._correlationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderCorrelationPolicyList",
      },
      jit_user_prov_assigned_groups: {
        value: cdktf.listMapperHcl(identityDomainsIdentityProviderJitUserProvAssignedGroupsToHclTerraform, true)(this._jitUserProvAssignedGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList",
      },
      jit_user_prov_attributes: {
        value: identityDomainsIdentityProviderJitUserProvAttributesToHclTerraform(this._jitUserProvAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderJitUserProvAttributesList",
      },
      jit_user_prov_group_mappings: {
        value: cdktf.listMapperHcl(identityDomainsIdentityProviderJitUserProvGroupMappingsToHclTerraform, true)(this._jitUserProvGroupMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderJitUserProvGroupMappingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsIdentityProviderTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderTagsList",
      },
      timeouts: {
        value: identityDomainsIdentityProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsIdentityProviderTimeouts",
      },
      urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: {
        value: identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList",
      },
      urnietfparamsscimschemasoracleidcsextensionx509identity_provider: {
        value: identityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
