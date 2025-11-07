import * as cdktf from 'cdktf';
import { DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap,
DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap,
DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceOutputReference,
DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceOutputReference,
DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap,
DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsList,
DataPingfederateIdpSpConnectionSpBrowserSsoArtifactOutputReference,
DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetimeOutputReference,
DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractOutputReference } from './structs0'
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#search_attributes DataPingfederateIdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAttributes = value.searchAttributes;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_of_nested_group - computed: true, optional: false, required: false
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_sso_transaction_as_fail_safe - computed: true, optional: false, required: false
  public get abortSsoTransactionAsFailSafe() {
    return this.getBooleanAttribute('abort_sso_transaction_as_fail_safe');
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // authentication_policy_contract_ref - computed: true, optional: false, required: false
  private _authenticationPolicyContractRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefOutputReference(this, "authentication_policy_contract_ref");
  public get authenticationPolicyContractRef() {
    return this._authenticationPolicyContractRef;
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }

  // restrict_virtual_entity_ids - computed: true, optional: false, required: false
  public get restrictVirtualEntityIds() {
    return this.getBooleanAttribute('restrict_virtual_entity_ids');
  }

  // restricted_virtual_entity_ids - computed: true, optional: false, required: false
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicy {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicyToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicyToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypt_assertion - computed: true, optional: false, required: false
  public get encryptAssertion() {
    return this.getBooleanAttribute('encrypt_assertion');
  }

  // encrypt_slo_subject_name_id - computed: true, optional: false, required: false
  public get encryptSloSubjectNameId() {
    return this.getBooleanAttribute('encrypt_slo_subject_name_id');
  }

  // encrypted_attributes - computed: true, optional: false, required: false
  public get encryptedAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('encrypted_attributes'));
  }

  // slo_subject_name_id_encrypted - computed: true, optional: false, required: false
  public get sloSubjectNameIdEncrypted() {
    return this.getBooleanAttribute('slo_subject_name_id_encrypted');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizations {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context_name - computed: true, optional: false, required: false
  public get contextName() {
    return this.getStringAttribute('context_name');
  }

  // message_expression - computed: true, optional: false, required: false
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpoints {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // response_url - computed: true, optional: false, required: false
  public get responseUrl() {
    return this.getStringAttribute('response_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpoints {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntries {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_query_and_fragment - computed: true, optional: false, required: false
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }

  // require_https - computed: true, optional: false, required: false
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }

  // valid_domain - computed: true, optional: false, required: false
  public get validDomain() {
    return this.getStringAttribute('valid_domain');
  }

  // valid_path - computed: true, optional: false, required: false
  public get validPath() {
    return this.getStringAttribute('valid_path');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSso {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter_mappings - computed: true, optional: false, required: false
  private _adapterMappings = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsList(this, "adapter_mappings", true);
  public get adapterMappings() {
    return this._adapterMappings;
  }

  // always_sign_artifact_response - computed: true, optional: false, required: false
  public get alwaysSignArtifactResponse() {
    return this.getBooleanAttribute('always_sign_artifact_response');
  }

  // artifact - computed: true, optional: false, required: false
  private _artifact = new DataPingfederateIdpSpConnectionSpBrowserSsoArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }

  // assertion_lifetime - computed: true, optional: false, required: false
  private _assertionLifetime = new DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetimeOutputReference(this, "assertion_lifetime");
  public get assertionLifetime() {
    return this._assertionLifetime;
  }

  // attribute_contract - computed: true, optional: false, required: false
  private _attributeContract = new DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }

  // authentication_policy_contract_assertion_mappings - computed: true, optional: false, required: false
  private _authenticationPolicyContractAssertionMappings = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsList(this, "authentication_policy_contract_assertion_mappings", true);
  public get authenticationPolicyContractAssertionMappings() {
    return this._authenticationPolicyContractAssertionMappings;
  }

  // default_target_url - computed: true, optional: false, required: false
  public get defaultTargetUrl() {
    return this.getStringAttribute('default_target_url');
  }

  // enabled_profiles - computed: true, optional: false, required: false
  public get enabledProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_profiles'));
  }

  // encryption_policy - computed: true, optional: false, required: false
  private _encryptionPolicy = new DataPingfederateIdpSpConnectionSpBrowserSsoEncryptionPolicyOutputReference(this, "encryption_policy");
  public get encryptionPolicy() {
    return this._encryptionPolicy;
  }

  // incoming_bindings - computed: true, optional: false, required: false
  public get incomingBindings() {
    return cdktf.Fn.tolist(this.getListAttribute('incoming_bindings'));
  }

  // message_customizations - computed: true, optional: false, required: false
  private _messageCustomizations = new DataPingfederateIdpSpConnectionSpBrowserSsoMessageCustomizationsList(this, "message_customizations", true);
  public get messageCustomizations() {
    return this._messageCustomizations;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // require_signed_authn_requests - computed: true, optional: false, required: false
  public get requireSignedAuthnRequests() {
    return this.getBooleanAttribute('require_signed_authn_requests');
  }

  // sign_assertions - computed: true, optional: false, required: false
  public get signAssertions() {
    return this.getBooleanAttribute('sign_assertions');
  }

  // sign_response_as_required - computed: true, optional: false, required: false
  public get signResponseAsRequired() {
    return this.getBooleanAttribute('sign_response_as_required');
  }

  // slo_service_endpoints - computed: true, optional: false, required: false
  private _sloServiceEndpoints = new DataPingfederateIdpSpConnectionSpBrowserSsoSloServiceEndpointsList(this, "slo_service_endpoints", true);
  public get sloServiceEndpoints() {
    return this._sloServiceEndpoints;
  }

  // sp_saml_identity_mapping - computed: true, optional: false, required: false
  public get spSamlIdentityMapping() {
    return this.getStringAttribute('sp_saml_identity_mapping');
  }

  // sp_ws_fed_identity_mapping - computed: true, optional: false, required: false
  public get spWsFedIdentityMapping() {
    return this.getStringAttribute('sp_ws_fed_identity_mapping');
  }

  // sso_application_endpoint - computed: true, optional: false, required: false
  public get ssoApplicationEndpoint() {
    return this.getStringAttribute('sso_application_endpoint');
  }

  // sso_service_endpoints - computed: true, optional: false, required: false
  private _ssoServiceEndpoints = new DataPingfederateIdpSpConnectionSpBrowserSsoSsoServiceEndpointsList(this, "sso_service_endpoints", true);
  public get ssoServiceEndpoints() {
    return this._ssoServiceEndpoints;
  }

  // url_whitelist_entries - computed: true, optional: false, required: false
  private _urlWhitelistEntries = new DataPingfederateIdpSpConnectionSpBrowserSsoUrlWhitelistEntriesList(this, "url_whitelist_entries", true);
  public get urlWhitelistEntries() {
    return this._urlWhitelistEntries;
  }

  // ws_fed_token_type - computed: true, optional: false, required: false
  public get wsFedTokenType() {
    return this.getStringAttribute('ws_fed_token_type');
  }

  // ws_trust_version - computed: true, optional: false, required: false
  public get wsTrustVersion() {
    return this.getStringAttribute('ws_trust_version');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributes {
}

export function dataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributes {
}

export function dataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustAttributeContract {
}

export function dataPingfederateIdpSpConnectionWsTrustAttributeContractToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustAttributeContractToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustAttributeContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustAttributeContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateIdpSpConnectionWsTrustAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: false, required: false
  private _extendedAttributes = new DataPingfederateIdpSpConnectionWsTrustAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustMessageCustomizations {
}

export function dataPingfederateIdpSpConnectionWsTrustMessageCustomizationsToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustMessageCustomizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustMessageCustomizationsToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustMessageCustomizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustMessageCustomizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustMessageCustomizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustMessageCustomizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context_name - computed: true, optional: false, required: false
  public get contextName() {
    return this.getStringAttribute('context_name');
  }

  // message_expression - computed: true, optional: false, required: false
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustMessageCustomizationsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustMessageCustomizationsOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustMessageCustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustRequestContractRef {
}

export function dataPingfederateIdpSpConnectionWsTrustRequestContractRefToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustRequestContractRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustRequestContractRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustRequestContractRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustRequestContractRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustRequestContractRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustRequestContractRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_encoding - computed: true, optional: false, required: false
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#search_attributes DataPingfederateIdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAttributes = value.searchAttributes;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_of_nested_group - computed: true, optional: false, required: false
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappings {
}

export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // idp_token_processor_ref - computed: true, optional: false, required: false
  private _idpTokenProcessorRef = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefOutputReference(this, "idp_token_processor_ref");
  public get idpTokenProcessorRef() {
    return this._idpTokenProcessorRef;
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }

  // restricted_virtual_entity_ids - computed: true, optional: false, required: false
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
}

export class DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsOutputReference {
    return new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionWsTrust {
}

export function dataPingfederateIdpSpConnectionWsTrustToTerraform(struct?: DataPingfederateIdpSpConnectionWsTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionWsTrustToHclTerraform(struct?: DataPingfederateIdpSpConnectionWsTrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionWsTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionWsTrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionWsTrust | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_if_not_fulfilled_from_request - computed: true, optional: false, required: false
  public get abortIfNotFulfilledFromRequest() {
    return this.getBooleanAttribute('abort_if_not_fulfilled_from_request');
  }

  // attribute_contract - computed: true, optional: false, required: false
  private _attributeContract = new DataPingfederateIdpSpConnectionWsTrustAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }

  // default_token_type - computed: true, optional: false, required: false
  public get defaultTokenType() {
    return this.getStringAttribute('default_token_type');
  }

  // encrypt_saml2_assertion - computed: true, optional: false, required: false
  public get encryptSaml2Assertion() {
    return this.getBooleanAttribute('encrypt_saml2_assertion');
  }

  // generate_key - computed: true, optional: false, required: false
  public get generateKey() {
    return this.getBooleanAttribute('generate_key');
  }

  // message_customizations - computed: true, optional: false, required: false
  private _messageCustomizations = new DataPingfederateIdpSpConnectionWsTrustMessageCustomizationsList(this, "message_customizations", true);
  public get messageCustomizations() {
    return this._messageCustomizations;
  }

  // minutes_after - computed: true, optional: false, required: false
  public get minutesAfter() {
    return this.getNumberAttribute('minutes_after');
  }

  // minutes_before - computed: true, optional: false, required: false
  public get minutesBefore() {
    return this.getNumberAttribute('minutes_before');
  }

  // oauth_assertion_profiles - computed: true, optional: false, required: false
  public get oauthAssertionProfiles() {
    return this.getBooleanAttribute('oauth_assertion_profiles');
  }

  // partner_service_ids - computed: true, optional: false, required: false
  public get partnerServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('partner_service_ids'));
  }

  // request_contract_ref - computed: true, optional: false, required: false
  private _requestContractRef = new DataPingfederateIdpSpConnectionWsTrustRequestContractRefOutputReference(this, "request_contract_ref");
  public get requestContractRef() {
    return this._requestContractRef;
  }

  // token_processor_mappings - computed: true, optional: false, required: false
  private _tokenProcessorMappings = new DataPingfederateIdpSpConnectionWsTrustTokenProcessorMappingsList(this, "token_processor_mappings", true);
  public get tokenProcessorMappings() {
    return this._tokenProcessorMappings;
  }
}
