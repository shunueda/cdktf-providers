// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsIdentityPropagationTrustConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}
  */
  readonly allowImpersonation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}
  */
  readonly clientClaimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}
  */
  readonly clientClaimValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}
  */
  readonly clockSkewSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}
  */
  readonly oauthClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}
  */
  readonly publicCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}
  */
  readonly publicKeyEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}
  */
  readonly subjectClaimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}
  */
  readonly subjectMappingAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}
  */
  readonly subjectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}
  */
  readonly type: string;
  /**
  * impersonation_service_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#impersonation_service_users IdentityDomainsIdentityPropagationTrust#impersonation_service_users}
  */
  readonly impersonationServiceUsers?: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[] | cdktf.IResolvable;
  /**
  * keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#keytab IdentityDomainsIdentityPropagationTrust#keytab}
  */
  readonly keytab?: IdentityDomainsIdentityPropagationTrustKeytab;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#tags IdentityDomainsIdentityPropagationTrust#tags}
  */
  readonly tags?: IdentityDomainsIdentityPropagationTrustTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#timeouts IdentityDomainsIdentityPropagationTrust#timeouts}
  */
  readonly timeouts?: IdentityDomainsIdentityPropagationTrustTimeouts;
}
export interface IdentityDomainsIdentityPropagationTrustIdcsCreatedBy {
}

export function identityDomainsIdentityPropagationTrustIdcsCreatedByToTerraform(struct?: IdentityDomainsIdentityPropagationTrustIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityPropagationTrustIdcsCreatedByToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityPropagationTrustIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustIdcsCreatedBy | undefined) {
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

export class IdentityDomainsIdentityPropagationTrustIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference {
    return new IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy {
}

export function identityDomainsIdentityPropagationTrustIdcsLastModifiedByToTerraform(struct?: IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityPropagationTrustIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy | undefined) {
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

export class IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference {
    return new IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityPropagationTrustMeta {
}

export function identityDomainsIdentityPropagationTrustMetaToTerraform(struct?: IdentityDomainsIdentityPropagationTrustMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentityPropagationTrustMetaToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentityPropagationTrustMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityPropagationTrustMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustMeta | undefined) {
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

export class IdentityDomainsIdentityPropagationTrustMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentityPropagationTrustMetaOutputReference {
    return new IdentityDomainsIdentityPropagationTrustMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityPropagationTrustImpersonationServiceUsersToTerraform(struct?: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocid: cdktf.stringToTerraform(struct!.ocid),
    rule: cdktf.stringToTerraform(struct!.rule),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityPropagationTrustImpersonationServiceUsersToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocid: {
      value: cdktf.stringToHclTerraform(struct!.ocid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
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

export class IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocid = this._ocid;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocid = undefined;
      this._rule = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocid = value.ocid;
      this._rule = value.rule;
      this._value = value.value;
    }
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
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

export class IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference {
    return new IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityPropagationTrustKeytab {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}
  */
  readonly secretOcid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}
  */
  readonly secretVersion?: number;
}

export function identityDomainsIdentityPropagationTrustKeytabToTerraform(struct?: IdentityDomainsIdentityPropagationTrustKeytabOutputReference | IdentityDomainsIdentityPropagationTrustKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ocid: cdktf.stringToTerraform(struct!.secretOcid),
    secret_version: cdktf.numberToTerraform(struct!.secretVersion),
  }
}


export function identityDomainsIdentityPropagationTrustKeytabToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustKeytabOutputReference | IdentityDomainsIdentityPropagationTrustKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ocid: {
      value: cdktf.stringToHclTerraform(struct!.secretOcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.numberToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentityPropagationTrustKeytabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentityPropagationTrustKeytab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretOcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOcid = this._secretOcid;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustKeytab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretOcid = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretOcid = value.secretOcid;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_ocid - computed: false, optional: false, required: true
  private _secretOcid?: string; 
  public get secretOcid() {
    return this.getStringAttribute('secret_ocid');
  }
  public set secretOcid(value: string) {
    this._secretOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOcidInput() {
    return this._secretOcid;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: number; 
  public get secretVersion() {
    return this.getNumberAttribute('secret_version');
  }
  public set secretVersion(value: number) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IdentityDomainsIdentityPropagationTrustTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}
  */
  readonly value: string;
}

export function identityDomainsIdentityPropagationTrustTagsToTerraform(struct?: IdentityDomainsIdentityPropagationTrustTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentityPropagationTrustTagsToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustTags | cdktf.IResolvable): any {
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

export class IdentityDomainsIdentityPropagationTrustTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentityPropagationTrustTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustTags | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsIdentityPropagationTrustTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentityPropagationTrustTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentityPropagationTrustTagsOutputReference {
    return new IdentityDomainsIdentityPropagationTrustTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentityPropagationTrustTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}
  */
  readonly update?: string;
}

export function identityDomainsIdentityPropagationTrustTimeoutsToTerraform(struct?: IdentityDomainsIdentityPropagationTrustTimeouts | cdktf.IResolvable): any {
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


export function identityDomainsIdentityPropagationTrustTimeoutsToHclTerraform(struct?: IdentityDomainsIdentityPropagationTrustTimeouts | cdktf.IResolvable): any {
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

export class IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsIdentityPropagationTrustTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsIdentityPropagationTrustTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust}
*/
export class IdentityDomainsIdentityPropagationTrust extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_propagation_trust";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsIdentityPropagationTrust to import
  * @param importFromId The id of the existing IdentityDomainsIdentityPropagationTrust that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsIdentityPropagationTrust to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_propagation_trust", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsIdentityPropagationTrustConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsIdentityPropagationTrustConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_propagation_trust',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._active = config.active;
    this._allowImpersonation = config.allowImpersonation;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._clientClaimName = config.clientClaimName;
    this._clientClaimValues = config.clientClaimValues;
    this._clockSkewSeconds = config.clockSkewSeconds;
    this._description = config.description;
    this._idcsEndpoint = config.idcsEndpoint;
    this._issuer = config.issuer;
    this._name = config.name;
    this._oauthClients = config.oauthClients;
    this._ocid = config.ocid;
    this._publicCertificate = config.publicCertificate;
    this._publicKeyEndpoint = config.publicKeyEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._subjectClaimName = config.subjectClaimName;
    this._subjectMappingAttribute = config.subjectMappingAttribute;
    this._subjectType = config.subjectType;
    this._type = config.type;
    this._impersonationServiceUsers.internalValue = config.impersonationServiceUsers;
    this._keytab.internalValue = config.keytab;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // allow_impersonation - computed: true, optional: true, required: false
  private _allowImpersonation?: boolean | cdktf.IResolvable; 
  public get allowImpersonation() {
    return this.getBooleanAttribute('allow_impersonation');
  }
  public set allowImpersonation(value: boolean | cdktf.IResolvable) {
    this._allowImpersonation = value;
  }
  public resetAllowImpersonation() {
    this._allowImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowImpersonationInput() {
    return this._allowImpersonation;
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

  // client_claim_name - computed: true, optional: true, required: false
  private _clientClaimName?: string; 
  public get clientClaimName() {
    return this.getStringAttribute('client_claim_name');
  }
  public set clientClaimName(value: string) {
    this._clientClaimName = value;
  }
  public resetClientClaimName() {
    this._clientClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientClaimNameInput() {
    return this._clientClaimName;
  }

  // client_claim_values - computed: true, optional: true, required: false
  private _clientClaimValues?: string[]; 
  public get clientClaimValues() {
    return cdktf.Fn.tolist(this.getListAttribute('client_claim_values'));
  }
  public set clientClaimValues(value: string[]) {
    this._clientClaimValues = value;
  }
  public resetClientClaimValues() {
    this._clientClaimValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientClaimValuesInput() {
    return this._clientClaimValues;
  }

  // clock_skew_seconds - computed: true, optional: true, required: false
  private _clockSkewSeconds?: number; 
  public get clockSkewSeconds() {
    return this.getNumberAttribute('clock_skew_seconds');
  }
  public set clockSkewSeconds(value: number) {
    this._clockSkewSeconds = value;
  }
  public resetClockSkewSeconds() {
    this._clockSkewSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewSecondsInput() {
    return this._clockSkewSeconds;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsIdentityPropagationTrustIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsIdentityPropagationTrustMetaList(this, "meta", false);
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

  // oauth_clients - computed: true, optional: true, required: false
  private _oauthClients?: string[]; 
  public get oauthClients() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_clients'));
  }
  public set oauthClients(value: string[]) {
    this._oauthClients = value;
  }
  public resetOauthClients() {
    this._oauthClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientsInput() {
    return this._oauthClients;
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

  // public_certificate - computed: true, optional: true, required: false
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  public resetPublicCertificate() {
    this._publicCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // public_key_endpoint - computed: true, optional: true, required: false
  private _publicKeyEndpoint?: string; 
  public get publicKeyEndpoint() {
    return this.getStringAttribute('public_key_endpoint');
  }
  public set publicKeyEndpoint(value: string) {
    this._publicKeyEndpoint = value;
  }
  public resetPublicKeyEndpoint() {
    this._publicKeyEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyEndpointInput() {
    return this._publicKeyEndpoint;
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

  // subject_claim_name - computed: true, optional: true, required: false
  private _subjectClaimName?: string; 
  public get subjectClaimName() {
    return this.getStringAttribute('subject_claim_name');
  }
  public set subjectClaimName(value: string) {
    this._subjectClaimName = value;
  }
  public resetSubjectClaimName() {
    this._subjectClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectClaimNameInput() {
    return this._subjectClaimName;
  }

  // subject_mapping_attribute - computed: true, optional: true, required: false
  private _subjectMappingAttribute?: string; 
  public get subjectMappingAttribute() {
    return this.getStringAttribute('subject_mapping_attribute');
  }
  public set subjectMappingAttribute(value: string) {
    this._subjectMappingAttribute = value;
  }
  public resetSubjectMappingAttribute() {
    this._subjectMappingAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMappingAttributeInput() {
    return this._subjectMappingAttribute;
  }

  // subject_type - computed: true, optional: true, required: false
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  public resetSubjectType() {
    this._subjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
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

  // impersonation_service_users - computed: false, optional: true, required: false
  private _impersonationServiceUsers = new IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList(this, "impersonation_service_users", true);
  public get impersonationServiceUsers() {
    return this._impersonationServiceUsers;
  }
  public putImpersonationServiceUsers(value: IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers[] | cdktf.IResolvable) {
    this._impersonationServiceUsers.internalValue = value;
  }
  public resetImpersonationServiceUsers() {
    this._impersonationServiceUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonationServiceUsersInput() {
    return this._impersonationServiceUsers.internalValue;
  }

  // keytab - computed: false, optional: true, required: false
  private _keytab = new IdentityDomainsIdentityPropagationTrustKeytabOutputReference(this, "keytab");
  public get keytab() {
    return this._keytab;
  }
  public putKeytab(value: IdentityDomainsIdentityPropagationTrustKeytab) {
    this._keytab.internalValue = value;
  }
  public resetKeytab() {
    this._keytab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsIdentityPropagationTrustTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsIdentityPropagationTrustTags[] | cdktf.IResolvable) {
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
  private _timeouts = new IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsIdentityPropagationTrustTimeouts) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      active: cdktf.booleanToTerraform(this._active),
      allow_impersonation: cdktf.booleanToTerraform(this._allowImpersonation),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      client_claim_name: cdktf.stringToTerraform(this._clientClaimName),
      client_claim_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientClaimValues),
      clock_skew_seconds: cdktf.numberToTerraform(this._clockSkewSeconds),
      description: cdktf.stringToTerraform(this._description),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      oauth_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthClients),
      ocid: cdktf.stringToTerraform(this._ocid),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      public_key_endpoint: cdktf.stringToTerraform(this._publicKeyEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      subject_claim_name: cdktf.stringToTerraform(this._subjectClaimName),
      subject_mapping_attribute: cdktf.stringToTerraform(this._subjectMappingAttribute),
      subject_type: cdktf.stringToTerraform(this._subjectType),
      type: cdktf.stringToTerraform(this._type),
      impersonation_service_users: cdktf.listMapper(identityDomainsIdentityPropagationTrustImpersonationServiceUsersToTerraform, true)(this._impersonationServiceUsers.internalValue),
      keytab: identityDomainsIdentityPropagationTrustKeytabToTerraform(this._keytab.internalValue),
      tags: cdktf.listMapper(identityDomainsIdentityPropagationTrustTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsIdentityPropagationTrustTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_impersonation: {
        value: cdktf.booleanToHclTerraform(this._allowImpersonation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_claim_name: {
        value: cdktf.stringToHclTerraform(this._clientClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_claim_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientClaimValues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      clock_skew_seconds: {
        value: cdktf.numberToHclTerraform(this._clockSkewSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      oauth_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthClients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_endpoint: {
        value: cdktf.stringToHclTerraform(this._publicKeyEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      subject_claim_name: {
        value: cdktf.stringToHclTerraform(this._subjectClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._subjectMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_type: {
        value: cdktf.stringToHclTerraform(this._subjectType),
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
      impersonation_service_users: {
        value: cdktf.listMapperHcl(identityDomainsIdentityPropagationTrustImpersonationServiceUsersToHclTerraform, true)(this._impersonationServiceUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList",
      },
      keytab: {
        value: identityDomainsIdentityPropagationTrustKeytabToHclTerraform(this._keytab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityPropagationTrustKeytabList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsIdentityPropagationTrustTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentityPropagationTrustTagsList",
      },
      timeouts: {
        value: identityDomainsIdentityPropagationTrustTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsIdentityPropagationTrustTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
