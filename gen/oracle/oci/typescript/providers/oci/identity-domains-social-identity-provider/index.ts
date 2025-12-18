// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsSocialIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#access_token_url IdentityDomainsSocialIdentityProvider#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#account_linking_enabled IdentityDomainsSocialIdentityProvider#account_linking_enabled}
  */
  readonly accountLinkingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#admin_scope IdentityDomainsSocialIdentityProvider#admin_scope}
  */
  readonly adminScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#apple_dev_id IdentityDomainsSocialIdentityProvider#apple_dev_id}
  */
  readonly appleDevId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#apple_key_id IdentityDomainsSocialIdentityProvider#apple_key_id}
  */
  readonly appleKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#authorization IdentityDomainsSocialIdentityProvider#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#authz_url IdentityDomainsSocialIdentityProvider#authz_url}
  */
  readonly authzUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#auto_redirect_enabled IdentityDomainsSocialIdentityProvider#auto_redirect_enabled}
  */
  readonly autoRedirectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#client_credential_in_payload IdentityDomainsSocialIdentityProvider#client_credential_in_payload}
  */
  readonly clientCredentialInPayload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#clock_skew_in_seconds IdentityDomainsSocialIdentityProvider#clock_skew_in_seconds}
  */
  readonly clockSkewInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#consumer_key IdentityDomainsSocialIdentityProvider#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#consumer_secret IdentityDomainsSocialIdentityProvider#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#description IdentityDomainsSocialIdentityProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#discovery_url IdentityDomainsSocialIdentityProvider#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#enabled IdentityDomainsSocialIdentityProvider#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#icon_url IdentityDomainsSocialIdentityProvider#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#id IdentityDomainsSocialIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#id_attribute IdentityDomainsSocialIdentityProvider#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#idcs_endpoint IdentityDomainsSocialIdentityProvider#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsSocialIdentityProvider#jit_prov_group_static_list_enabled}
  */
  readonly jitProvGroupStaticListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#name IdentityDomainsSocialIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#ocid IdentityDomainsSocialIdentityProvider#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#profile_url IdentityDomainsSocialIdentityProvider#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#redirect_url IdentityDomainsSocialIdentityProvider#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#refresh_token_url IdentityDomainsSocialIdentityProvider#refresh_token_url}
  */
  readonly refreshTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#registration_enabled IdentityDomainsSocialIdentityProvider#registration_enabled}
  */
  readonly registrationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#resource_type_schema_version IdentityDomainsSocialIdentityProvider#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#schemas IdentityDomainsSocialIdentityProvider#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#scope IdentityDomainsSocialIdentityProvider#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#service_provider_name IdentityDomainsSocialIdentityProvider#service_provider_name}
  */
  readonly serviceProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#show_on_login IdentityDomainsSocialIdentityProvider#show_on_login}
  */
  readonly showOnLogin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#social_jit_provisioning_enabled IdentityDomainsSocialIdentityProvider#social_jit_provisioning_enabled}
  */
  readonly socialJitProvisioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#status IdentityDomainsSocialIdentityProvider#status}
  */
  readonly status?: string;
  /**
  * jit_prov_assigned_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#jit_prov_assigned_groups IdentityDomainsSocialIdentityProvider#jit_prov_assigned_groups}
  */
  readonly jitProvAssignedGroups?: IdentityDomainsSocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable;
  /**
  * relay_idp_param_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#relay_idp_param_mappings IdentityDomainsSocialIdentityProvider#relay_idp_param_mappings}
  */
  readonly relayIdpParamMappings?: IdentityDomainsSocialIdentityProviderRelayIdpParamMappings[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#tags IdentityDomainsSocialIdentityProvider#tags}
  */
  readonly tags?: IdentityDomainsSocialIdentityProviderTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#timeouts IdentityDomainsSocialIdentityProvider#timeouts}
  */
  readonly timeouts?: IdentityDomainsSocialIdentityProviderTimeouts;
}
export interface IdentityDomainsSocialIdentityProviderIdcsCreatedBy {
}

export function identityDomainsSocialIdentityProviderIdcsCreatedByToTerraform(struct?: IdentityDomainsSocialIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSocialIdentityProviderIdcsCreatedByToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSocialIdentityProviderIdcsCreatedBy | undefined) {
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

export class IdentityDomainsSocialIdentityProviderIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference {
    return new IdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy {
}

export function identityDomainsSocialIdentityProviderIdcsLastModifiedByToTerraform(struct?: IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSocialIdentityProviderIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSocialIdentityProviderIdcsLastModifiedBy | undefined) {
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

export class IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference {
    return new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderMeta {
}

export function identityDomainsSocialIdentityProviderMetaToTerraform(struct?: IdentityDomainsSocialIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsSocialIdentityProviderMetaToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsSocialIdentityProviderMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSocialIdentityProviderMeta | undefined) {
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

export class IdentityDomainsSocialIdentityProviderMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsSocialIdentityProviderMetaOutputReference {
    return new IdentityDomainsSocialIdentityProviderMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderJitProvAssignedGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsSocialIdentityProviderJitProvAssignedGroupsToTerraform(struct?: IdentityDomainsSocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSocialIdentityProviderJitProvAssignedGroupsToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable): any {
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

export class IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsSocialIdentityProviderJitProvAssignedGroups | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference {
    return new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderRelayIdpParamMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#relay_param_key IdentityDomainsSocialIdentityProvider#relay_param_key}
  */
  readonly relayParamKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#relay_param_value IdentityDomainsSocialIdentityProvider#relay_param_value}
  */
  readonly relayParamValue?: string;
}

export function identityDomainsSocialIdentityProviderRelayIdpParamMappingsToTerraform(struct?: IdentityDomainsSocialIdentityProviderRelayIdpParamMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relay_param_key: cdktf.stringToTerraform(struct!.relayParamKey),
    relay_param_value: cdktf.stringToTerraform(struct!.relayParamValue),
  }
}


export function identityDomainsSocialIdentityProviderRelayIdpParamMappingsToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderRelayIdpParamMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relay_param_key: {
      value: cdktf.stringToHclTerraform(struct!.relayParamKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay_param_value: {
      value: cdktf.stringToHclTerraform(struct!.relayParamValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderRelayIdpParamMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relayParamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayParamKey = this._relayParamKey;
    }
    if (this._relayParamValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayParamValue = this._relayParamValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsSocialIdentityProviderRelayIdpParamMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._relayParamKey = undefined;
      this._relayParamValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._relayParamKey = value.relayParamKey;
      this._relayParamValue = value.relayParamValue;
    }
  }

  // relay_param_key - computed: false, optional: false, required: true
  private _relayParamKey?: string; 
  public get relayParamKey() {
    return this.getStringAttribute('relay_param_key');
  }
  public set relayParamKey(value: string) {
    this._relayParamKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayParamKeyInput() {
    return this._relayParamKey;
  }

  // relay_param_value - computed: true, optional: true, required: false
  private _relayParamValue?: string; 
  public get relayParamValue() {
    return this.getStringAttribute('relay_param_value');
  }
  public set relayParamValue(value: string) {
    this._relayParamValue = value;
  }
  public resetRelayParamValue() {
    this._relayParamValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayParamValueInput() {
    return this._relayParamValue;
  }
}

export class IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSocialIdentityProviderRelayIdpParamMappings[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference {
    return new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#key IdentityDomainsSocialIdentityProvider#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#value IdentityDomainsSocialIdentityProvider#value}
  */
  readonly value: string;
}

export function identityDomainsSocialIdentityProviderTagsToTerraform(struct?: IdentityDomainsSocialIdentityProviderTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsSocialIdentityProviderTagsToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderTags | cdktf.IResolvable): any {
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

export class IdentityDomainsSocialIdentityProviderTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsSocialIdentityProviderTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsSocialIdentityProviderTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsSocialIdentityProviderTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsSocialIdentityProviderTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsSocialIdentityProviderTagsOutputReference {
    return new IdentityDomainsSocialIdentityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsSocialIdentityProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#create IdentityDomainsSocialIdentityProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#delete IdentityDomainsSocialIdentityProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#update IdentityDomainsSocialIdentityProvider#update}
  */
  readonly update?: string;
}

export function identityDomainsSocialIdentityProviderTimeoutsToTerraform(struct?: IdentityDomainsSocialIdentityProviderTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsSocialIdentityProviderTimeoutsToHclTerraform(struct?: IdentityDomainsSocialIdentityProviderTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsSocialIdentityProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsSocialIdentityProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsSocialIdentityProviderTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider}
*/
export class IdentityDomainsSocialIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_social_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsSocialIdentityProvider to import
  * @param importFromId The id of the existing IdentityDomainsSocialIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsSocialIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_social_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsSocialIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsSocialIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_social_identity_provider',
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
    this._accessTokenUrl = config.accessTokenUrl;
    this._accountLinkingEnabled = config.accountLinkingEnabled;
    this._adminScope = config.adminScope;
    this._appleDevId = config.appleDevId;
    this._appleKeyId = config.appleKeyId;
    this._authorization = config.authorization;
    this._authzUrl = config.authzUrl;
    this._autoRedirectEnabled = config.autoRedirectEnabled;
    this._clientCredentialInPayload = config.clientCredentialInPayload;
    this._clockSkewInSeconds = config.clockSkewInSeconds;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._description = config.description;
    this._discoveryUrl = config.discoveryUrl;
    this._enabled = config.enabled;
    this._iconUrl = config.iconUrl;
    this._id = config.id;
    this._idAttribute = config.idAttribute;
    this._idcsEndpoint = config.idcsEndpoint;
    this._jitProvGroupStaticListEnabled = config.jitProvGroupStaticListEnabled;
    this._name = config.name;
    this._ocid = config.ocid;
    this._profileUrl = config.profileUrl;
    this._redirectUrl = config.redirectUrl;
    this._refreshTokenUrl = config.refreshTokenUrl;
    this._registrationEnabled = config.registrationEnabled;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._scope = config.scope;
    this._serviceProviderName = config.serviceProviderName;
    this._showOnLogin = config.showOnLogin;
    this._socialJitProvisioningEnabled = config.socialJitProvisioningEnabled;
    this._status = config.status;
    this._jitProvAssignedGroups.internalValue = config.jitProvAssignedGroups;
    this._relayIdpParamMappings.internalValue = config.relayIdpParamMappings;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
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

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsSocialIdentityProviderIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new IdentityDomainsSocialIdentityProviderIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsSocialIdentityProviderMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
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

  // refresh_token_url - computed: true, optional: true, required: false
  private _refreshTokenUrl?: string; 
  public get refreshTokenUrl() {
    return this.getStringAttribute('refresh_token_url');
  }
  public set refreshTokenUrl(value: string) {
    this._refreshTokenUrl = value;
  }
  public resetRefreshTokenUrl() {
    this._refreshTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenUrlInput() {
    return this._refreshTokenUrl;
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

  // show_on_login - computed: false, optional: false, required: true
  private _showOnLogin?: boolean | cdktf.IResolvable; 
  public get showOnLogin() {
    return this.getBooleanAttribute('show_on_login');
  }
  public set showOnLogin(value: boolean | cdktf.IResolvable) {
    this._showOnLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnLoginInput() {
    return this._showOnLogin;
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

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // jit_prov_assigned_groups - computed: false, optional: true, required: false
  private _jitProvAssignedGroups = new IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList(this, "jit_prov_assigned_groups", false);
  public get jitProvAssignedGroups() {
    return this._jitProvAssignedGroups;
  }
  public putJitProvAssignedGroups(value: IdentityDomainsSocialIdentityProviderJitProvAssignedGroups[] | cdktf.IResolvable) {
    this._jitProvAssignedGroups.internalValue = value;
  }
  public resetJitProvAssignedGroups() {
    this._jitProvAssignedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitProvAssignedGroupsInput() {
    return this._jitProvAssignedGroups.internalValue;
  }

  // relay_idp_param_mappings - computed: false, optional: true, required: false
  private _relayIdpParamMappings = new IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList(this, "relay_idp_param_mappings", false);
  public get relayIdpParamMappings() {
    return this._relayIdpParamMappings;
  }
  public putRelayIdpParamMappings(value: IdentityDomainsSocialIdentityProviderRelayIdpParamMappings[] | cdktf.IResolvable) {
    this._relayIdpParamMappings.internalValue = value;
  }
  public resetRelayIdpParamMappings() {
    this._relayIdpParamMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayIdpParamMappingsInput() {
    return this._relayIdpParamMappings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsSocialIdentityProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsSocialIdentityProviderTags[] | cdktf.IResolvable) {
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
  private _timeouts = new IdentityDomainsSocialIdentityProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsSocialIdentityProviderTimeouts) {
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
      access_token_url: cdktf.stringToTerraform(this._accessTokenUrl),
      account_linking_enabled: cdktf.booleanToTerraform(this._accountLinkingEnabled),
      admin_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminScope),
      apple_dev_id: cdktf.stringToTerraform(this._appleDevId),
      apple_key_id: cdktf.stringToTerraform(this._appleKeyId),
      authorization: cdktf.stringToTerraform(this._authorization),
      authz_url: cdktf.stringToTerraform(this._authzUrl),
      auto_redirect_enabled: cdktf.booleanToTerraform(this._autoRedirectEnabled),
      client_credential_in_payload: cdktf.booleanToTerraform(this._clientCredentialInPayload),
      clock_skew_in_seconds: cdktf.numberToTerraform(this._clockSkewInSeconds),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      description: cdktf.stringToTerraform(this._description),
      discovery_url: cdktf.stringToTerraform(this._discoveryUrl),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      id: cdktf.stringToTerraform(this._id),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      jit_prov_group_static_list_enabled: cdktf.booleanToTerraform(this._jitProvGroupStaticListEnabled),
      name: cdktf.stringToTerraform(this._name),
      ocid: cdktf.stringToTerraform(this._ocid),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      refresh_token_url: cdktf.stringToTerraform(this._refreshTokenUrl),
      registration_enabled: cdktf.booleanToTerraform(this._registrationEnabled),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      service_provider_name: cdktf.stringToTerraform(this._serviceProviderName),
      show_on_login: cdktf.booleanToTerraform(this._showOnLogin),
      social_jit_provisioning_enabled: cdktf.booleanToTerraform(this._socialJitProvisioningEnabled),
      status: cdktf.stringToTerraform(this._status),
      jit_prov_assigned_groups: cdktf.listMapper(identityDomainsSocialIdentityProviderJitProvAssignedGroupsToTerraform, true)(this._jitProvAssignedGroups.internalValue),
      relay_idp_param_mappings: cdktf.listMapper(identityDomainsSocialIdentityProviderRelayIdpParamMappingsToTerraform, true)(this._relayIdpParamMappings.internalValue),
      tags: cdktf.listMapper(identityDomainsSocialIdentityProviderTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsSocialIdentityProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_url: {
        value: cdktf.stringToHclTerraform(this._accessTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_linking_enabled: {
        value: cdktf.booleanToHclTerraform(this._accountLinkingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminScope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      apple_dev_id: {
        value: cdktf.stringToHclTerraform(this._appleDevId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apple_key_id: {
        value: cdktf.stringToHclTerraform(this._appleKeyId),
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
      authz_url: {
        value: cdktf.stringToHclTerraform(this._authzUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_redirect_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoRedirectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_credential_in_payload: {
        value: cdktf.booleanToHclTerraform(this._clientCredentialInPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clock_skew_in_seconds: {
        value: cdktf.numberToHclTerraform(this._clockSkewInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
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
      discovery_url: {
        value: cdktf.stringToHclTerraform(this._discoveryUrl),
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
      icon_url: {
        value: cdktf.stringToHclTerraform(this._iconUrl),
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
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
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
      jit_prov_group_static_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._jitProvGroupStaticListEnabled),
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
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_url: {
        value: cdktf.stringToHclTerraform(this._profileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_url: {
        value: cdktf.stringToHclTerraform(this._refreshTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_enabled: {
        value: cdktf.booleanToHclTerraform(this._registrationEnabled),
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
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_provider_name: {
        value: cdktf.stringToHclTerraform(this._serviceProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_on_login: {
        value: cdktf.booleanToHclTerraform(this._showOnLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      social_jit_provisioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._socialJitProvisioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jit_prov_assigned_groups: {
        value: cdktf.listMapperHcl(identityDomainsSocialIdentityProviderJitProvAssignedGroupsToHclTerraform, true)(this._jitProvAssignedGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList",
      },
      relay_idp_param_mappings: {
        value: cdktf.listMapperHcl(identityDomainsSocialIdentityProviderRelayIdpParamMappingsToHclTerraform, true)(this._relayIdpParamMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsSocialIdentityProviderTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsSocialIdentityProviderTagsList",
      },
      timeouts: {
        value: identityDomainsSocialIdentityProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsSocialIdentityProviderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
