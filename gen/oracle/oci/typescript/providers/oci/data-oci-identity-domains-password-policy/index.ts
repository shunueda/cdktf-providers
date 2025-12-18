// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#attribute_sets DataOciIdentityDomainsPasswordPolicy#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#attributes DataOciIdentityDomainsPasswordPolicy#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#authorization DataOciIdentityDomainsPasswordPolicy#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#idcs_endpoint DataOciIdentityDomainsPasswordPolicy#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#password_policy_id DataOciIdentityDomainsPasswordPolicy#password_policy_id}
  */
  readonly passwordPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#resource_type_schema_version DataOciIdentityDomainsPasswordPolicy#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
}
export interface DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules {
}

export function dataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsPasswordPolicyGroups {
}

export function dataOciIdentityDomainsPasswordPolicyGroupsToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyGroupsToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyGroups | undefined) {
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsPasswordPolicyGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyGroupsOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy {
}

export function dataOciIdentityDomainsPasswordPolicyIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsPasswordPolicyMeta {
}

export function dataOciIdentityDomainsPasswordPolicyMetaToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyMetaToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyMeta | undefined) {
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

export class DataOciIdentityDomainsPasswordPolicyMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyMetaOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsPasswordPolicyTags {
}

export function dataOciIdentityDomainsPasswordPolicyTagsToTerraform(struct?: DataOciIdentityDomainsPasswordPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsPasswordPolicyTagsToHclTerraform(struct?: DataOciIdentityDomainsPasswordPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsPasswordPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsPasswordPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsPasswordPolicyTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsPasswordPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsPasswordPolicyTagsOutputReference {
    return new DataOciIdentityDomainsPasswordPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy oci_identity_domains_password_policy}
*/
export class DataOciIdentityDomainsPasswordPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicy to import
  * @param importFromId The id of the existing DataOciIdentityDomainsPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_password_policy oci_identity_domains_password_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsPasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsPasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_password_policy',
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
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._idcsEndpoint = config.idcsEndpoint;
    this._passwordPolicyId = config.passwordPolicyId;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_chars - computed: true, optional: false, required: false
  public get allowedChars() {
    return this.getStringAttribute('allowed_chars');
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

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // configured_password_policy_rules - computed: true, optional: false, required: false
  private _configuredPasswordPolicyRules = new DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(this, "configured_password_policy_rules", false);
  public get configuredPasswordPolicyRules() {
    return this._configuredPasswordPolicyRules;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dictionary_delimiter - computed: true, optional: false, required: false
  public get dictionaryDelimiter() {
    return this.getStringAttribute('dictionary_delimiter');
  }

  // dictionary_location - computed: true, optional: false, required: false
  public get dictionaryLocation() {
    return this.getStringAttribute('dictionary_location');
  }

  // dictionary_word_disallowed - computed: true, optional: false, required: false
  public get dictionaryWordDisallowed() {
    return this.getBooleanAttribute('dictionary_word_disallowed');
  }

  // disallowed_chars - computed: true, optional: false, required: false
  public get disallowedChars() {
    return this.getStringAttribute('disallowed_chars');
  }

  // disallowed_substrings - computed: true, optional: false, required: false
  public get disallowedSubstrings() {
    return this.getListAttribute('disallowed_substrings');
  }

  // disallowed_user_attribute_values - computed: true, optional: false, required: false
  public get disallowedUserAttributeValues() {
    return this.getListAttribute('disallowed_user_attribute_values');
  }

  // distinct_characters - computed: true, optional: false, required: false
  public get distinctCharacters() {
    return this.getNumberAttribute('distinct_characters');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // first_name_disallowed - computed: true, optional: false, required: false
  public get firstNameDisallowed() {
    return this.getBooleanAttribute('first_name_disallowed');
  }

  // force_password_reset - computed: true, optional: false, required: false
  public get forcePasswordReset() {
    return this.getBooleanAttribute('force_password_reset');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOciIdentityDomainsPasswordPolicyGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList(this, "idcs_created_by", false);
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
  private _idcsLastModifiedBy = new DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // last_name_disallowed - computed: true, optional: false, required: false
  public get lastNameDisallowed() {
    return this.getBooleanAttribute('last_name_disallowed');
  }

  // lockout_duration - computed: true, optional: false, required: false
  public get lockoutDuration() {
    return this.getNumberAttribute('lockout_duration');
  }

  // max_incorrect_attempts - computed: true, optional: false, required: false
  public get maxIncorrectAttempts() {
    return this.getNumberAttribute('max_incorrect_attempts');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // max_repeated_chars - computed: true, optional: false, required: false
  public get maxRepeatedChars() {
    return this.getNumberAttribute('max_repeated_chars');
  }

  // max_special_chars - computed: true, optional: false, required: false
  public get maxSpecialChars() {
    return this.getNumberAttribute('max_special_chars');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsPasswordPolicyMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // min_alpha_numerals - computed: true, optional: false, required: false
  public get minAlphaNumerals() {
    return this.getNumberAttribute('min_alpha_numerals');
  }

  // min_alphas - computed: true, optional: false, required: false
  public get minAlphas() {
    return this.getNumberAttribute('min_alphas');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // min_lower_case - computed: true, optional: false, required: false
  public get minLowerCase() {
    return this.getNumberAttribute('min_lower_case');
  }

  // min_numerals - computed: true, optional: false, required: false
  public get minNumerals() {
    return this.getNumberAttribute('min_numerals');
  }

  // min_password_age - computed: true, optional: false, required: false
  public get minPasswordAge() {
    return this.getNumberAttribute('min_password_age');
  }

  // min_special_chars - computed: true, optional: false, required: false
  public get minSpecialChars() {
    return this.getNumberAttribute('min_special_chars');
  }

  // min_unique_chars - computed: true, optional: false, required: false
  public get minUniqueChars() {
    return this.getNumberAttribute('min_unique_chars');
  }

  // min_upper_case - computed: true, optional: false, required: false
  public get minUpperCase() {
    return this.getNumberAttribute('min_upper_case');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_passwords_in_history - computed: true, optional: false, required: false
  public get numPasswordsInHistory() {
    return this.getNumberAttribute('num_passwords_in_history');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // password_expire_warning - computed: true, optional: false, required: false
  public get passwordExpireWarning() {
    return this.getNumberAttribute('password_expire_warning');
  }

  // password_expires_after - computed: true, optional: false, required: false
  public get passwordExpiresAfter() {
    return this.getNumberAttribute('password_expires_after');
  }

  // password_policy_id - computed: false, optional: false, required: true
  private _passwordPolicyId?: string; 
  public get passwordPolicyId() {
    return this.getStringAttribute('password_policy_id');
  }
  public set passwordPolicyId(value: string) {
    this._passwordPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyIdInput() {
    return this._passwordPolicyId;
  }

  // password_strength - computed: true, optional: false, required: false
  public get passwordStrength() {
    return this.getStringAttribute('password_strength');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // required_chars - computed: true, optional: false, required: false
  public get requiredChars() {
    return this.getStringAttribute('required_chars');
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

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // starts_with_alphabet - computed: true, optional: false, required: false
  public get startsWithAlphabet() {
    return this.getBooleanAttribute('starts_with_alphabet');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsPasswordPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // user_name_disallowed - computed: true, optional: false, required: false
  public get userNameDisallowed() {
    return this.getBooleanAttribute('user_name_disallowed');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      password_policy_id: cdktf.stringToTerraform(this._passwordPolicyId),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy_id: {
        value: cdktf.stringToHclTerraform(this._passwordPolicyId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
