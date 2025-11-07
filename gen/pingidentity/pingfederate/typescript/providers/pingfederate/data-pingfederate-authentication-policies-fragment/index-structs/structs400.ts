import * as cdktf from 'cdktf';
import { DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItems,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsList,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionOutputReference,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionOutputReference,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionOutputReference,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionOutputReference,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionOutputReference,
DataPingfederateAuthenticationPoliciesFragmentRootNodeAction,
dataPingfederateAuthenticationPoliciesFragmentRootNodeActionToTerraform,
dataPingfederateAuthenticationPoliciesFragmentRootNodeActionToHclTerraform,
DataPingfederateAuthenticationPoliciesFragmentRootNodeActionOutputReference } from './structs0'
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules {
  /**
  * When all the rules fail, you may choose to default to the general success action or fail. Default to success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#fallback_to_success DataPingfederateAuthenticationPoliciesFragment#fallback_to_success}
  */
  readonly fallbackToSuccess?: boolean | cdktf.IResolvable;
  /**
  * The actual list of attribute rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#items DataPingfederateAuthenticationPoliciesFragment#items}
  */
  readonly items?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItems[] | cdktf.IResolvable;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to_success: cdktf.booleanToTerraform(struct!.fallbackToSuccess),
    items: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsToTerraform, false)(struct!.items),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_to_success: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    items: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackToSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToSuccess = this._fallbackToSuccess;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackToSuccess = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackToSuccess = value.fallbackToSuccess;
      this._items.internalValue = value.items;
    }
  }

  // fallback_to_success - computed: true, optional: true, required: false
  private _fallbackToSuccess?: boolean | cdktf.IResolvable; 
  public get fallbackToSuccess() {
    return this.getBooleanAttribute('fallback_to_success');
  }
  public set fallbackToSuccess(value: boolean | cdktf.IResolvable) {
    this._fallbackToSuccess = value;
  }
  public resetFallbackToSuccess() {
    this._fallbackToSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToSuccessInput() {
    return this._fallbackToSuccess;
  }

  // items - computed: true, optional: true, required: false
  private _items = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#name DataPingfederateAuthenticationPoliciesFragment#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter_fields DataPingfederateAuthenticationPoliciesFragment#filter_fields}
  */
  readonly filterFields?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFields = this._filterFields?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filterFields.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filterFields.internalValue = value.filterFields;
      this._id = value.id;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter_fields - computed: true, optional: true, required: false
  private _filterFields = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  public resetFilterFields() {
    this._filterFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#column_names DataPingfederateAuthenticationPoliciesFragment#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter DataPingfederateAuthenticationPoliciesFragment#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#schema DataPingfederateAuthenticationPoliciesFragment#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#table DataPingfederateAuthenticationPoliciesFragment#table}
  */
  readonly table: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._columnNames = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._columnNames = value.columnNames;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_encoding DataPingfederateAuthenticationPoliciesFragment#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryEncoding = this._binaryEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryEncoding = value.binaryEncoding;
    }
  }

  // binary_encoding - computed: true, optional: true, required: false
  private _binaryEncoding?: string; 
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
  public set binaryEncoding(value: string) {
    this._binaryEncoding = value;
  }
  public resetBinaryEncoding() {
    this._binaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryEncodingInput() {
    return this._binaryEncoding;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#base_dn DataPingfederateAuthenticationPoliciesFragment#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_attribute_settings DataPingfederateAuthenticationPoliciesFragment#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#member_of_nested_group DataPingfederateAuthenticationPoliciesFragment#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_attributes DataPingfederateAuthenticationPoliciesFragment#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_filter DataPingfederateAuthenticationPoliciesFragment#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_scope DataPingfederateAuthenticationPoliciesFragment#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of_nested_group: {
      value: cdktf.booleanToHclTerraform(struct!.memberOfNestedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._binaryAttributeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributeSettings = this._binaryAttributeSettings?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memberOfNestedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOfNestedGroup = this._memberOfNestedGroup;
    }
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._baseDn = undefined;
      this._binaryAttributeSettings.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._memberOfNestedGroup = undefined;
      this._searchAttributes = undefined;
      this._searchFilter = undefined;
      this._searchScope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._baseDn = value.baseDn;
      this._binaryAttributeSettings.internalValue = value.binaryAttributeSettings;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._id = value.id;
      this._memberOfNestedGroup = value.memberOfNestedGroup;
      this._searchAttributes = value.searchAttributes;
      this._searchFilter = value.searchFilter;
      this._searchScope = value.searchScope;
      this._type = value.type;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // binary_attribute_settings - computed: true, optional: true, required: false
  private _binaryAttributeSettings = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
    this._binaryAttributeSettings.internalValue = value;
  }
  public resetBinaryAttributeSettings() {
    this._binaryAttributeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributeSettingsInput() {
    return this._binaryAttributeSettings.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // member_of_nested_group - computed: true, optional: true, required: false
  private _memberOfNestedGroup?: boolean | cdktf.IResolvable; 
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }
  public set memberOfNestedGroup(value: boolean | cdktf.IResolvable) {
    this._memberOfNestedGroup = value;
  }
  public resetMemberOfNestedGroup() {
    this._memberOfNestedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfNestedGroupInput() {
    return this._memberOfNestedGroup;
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

  // search_filter - computed: true, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_scope - computed: true, optional: false, required: true
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#custom_attribute_source DataPingfederateAuthenticationPoliciesFragment#custom_attribute_source}
  */
  readonly customAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#jdbc_attribute_source DataPingfederateAuthenticationPoliciesFragment#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#ldap_attribute_source DataPingfederateAuthenticationPoliciesFragment#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeSource = this._customAttributeSource?.internalValue;
    }
    if (this._jdbcAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAttributeSource = this._jdbcAttributeSource?.internalValue;
    }
    if (this._ldapAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAttributeSource = this._ldapAttributeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = undefined;
      this._jdbcAttributeSource.internalValue = undefined;
      this._ldapAttributeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = value.customAttributeSource;
      this._jdbcAttributeSource.internalValue = value.jdbcAttributeSource;
      this._ldapAttributeSource.internalValue = value.ldapAttributeSource;
    }
  }

  // custom_attribute_source - computed: true, optional: true, required: false
  private _customAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesCustomAttributeSource) {
    this._customAttributeSource.internalValue = value;
  }
  public resetCustomAttributeSource() {
    this._customAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeSourceInput() {
    return this._customAttributeSource.internalValue;
  }

  // jdbc_attribute_source - computed: true, optional: true, required: false
  private _jdbcAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesJdbcAttributeSource) {
    this._jdbcAttributeSource.internalValue = value;
  }
  public resetJdbcAttributeSource() {
    this._jdbcAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAttributeSourceInput() {
    return this._jdbcAttributeSource.internalValue;
  }

  // ldap_attribute_source - computed: true, optional: true, required: false
  private _ldapAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesLdapAttributeSource) {
    this._ldapAttributeSource.internalValue = value;
  }
  public resetLdapAttributeSource() {
    this._ldapAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeSourceInput() {
    return this._ldapAttributeSource.internalValue;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_name DataPingfederateAuthenticationPoliciesFragment#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#condition DataPingfederateAuthenticationPoliciesFragment#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._condition = undefined;
      this._errorResult = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._condition = value.condition;
      this._errorResult = value.errorResult;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: false, required: true
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression DataPingfederateAuthenticationPoliciesFragment#expression}
  */
  readonly expression: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResult = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResult = value.errorResult;
      this._expression = value.expression;
    }
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // expression - computed: true, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#conditional_criteria DataPingfederateAuthenticationPoliciesFragment#conditional_criteria}
  */
  readonly conditionalCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression_criteria DataPingfederateAuthenticationPoliciesFragment#expression_criteria}
  */
  readonly expressionCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCriteria = this._conditionalCriteria?.internalValue;
    }
    if (this._expressionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCriteria = this._expressionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = undefined;
      this._expressionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = value.conditionalCriteria;
      this._expressionCriteria.internalValue = value.expressionCriteria;
    }
  }

  // conditional_criteria - computed: true, optional: true, required: false
  private _conditionalCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
    this._conditionalCriteria.internalValue = value;
  }
  public resetConditionalCriteria() {
    this._conditionalCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCriteriaInput() {
    return this._conditionalCriteria.internalValue;
  }

  // expression_criteria - computed: true, optional: true, required: false
  private _expressionCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
    this._expressionCriteria.internalValue = value;
  }
  public resetExpressionCriteria() {
    this._expressionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionCriteriaInput() {
    return this._expressionCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_sources DataPingfederateAuthenticationPoliciesFragment#attribute_sources}
  */
  readonly attributeSources?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#issuance_criteria DataPingfederateAuthenticationPoliciesFragment#issuance_criteria}
  */
  readonly issuanceCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesToTerraform, false)(struct!.attributeSources),
    issuance_criteria: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesList",
    },
    issuance_criteria: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction {
  /**
  * A collection of attribute rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_rules DataPingfederateAuthenticationPoliciesFragment#attribute_rules}
  */
  readonly attributeRules?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules;
  /**
  * The result context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#context DataPingfederateAuthenticationPoliciesFragment#context}
  */
  readonly context?: string;
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#fragment DataPingfederateAuthenticationPoliciesFragment#fragment}
  */
  readonly fragment: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment;
  /**
  * A list of mappings from attribute sources to attribute targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#fragment_mapping DataPingfederateAuthenticationPoliciesFragment#fragment_mapping}
  */
  readonly fragmentMapping?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_rules: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesToTerraform(struct!.attributeRules),
    context: cdktf.stringToTerraform(struct!.context),
    fragment: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentToTerraform(struct!.fragment),
    fragment_mapping: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingToTerraform(struct!.fragmentMapping),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_rules: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesToHclTerraform(struct!.attributeRules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fragment: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentToHclTerraform(struct!.fragment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment",
    },
    fragment_mapping: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingToHclTerraform(struct!.fragmentMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRules = this._attributeRules?.internalValue;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._fragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment?.internalValue;
    }
    if (this._fragmentMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentMapping = this._fragmentMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeRules.internalValue = undefined;
      this._context = undefined;
      this._fragment.internalValue = undefined;
      this._fragmentMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeRules.internalValue = value.attributeRules;
      this._context = value.context;
      this._fragment.internalValue = value.fragment;
      this._fragmentMapping.internalValue = value.fragmentMapping;
    }
  }

  // attribute_rules - computed: true, optional: true, required: false
  private _attributeRules = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRulesOutputReference(this, "attribute_rules");
  public get attributeRules() {
    return this._attributeRules;
  }
  public putAttributeRules(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionAttributeRules) {
    this._attributeRules.internalValue = value;
  }
  public resetAttributeRules() {
    this._attributeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRulesInput() {
    return this._attributeRules.internalValue;
  }

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // fragment - computed: true, optional: false, required: true
  private _fragment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentOutputReference(this, "fragment");
  public get fragment() {
    return this._fragment;
  }
  public putFragment(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragment) {
    this._fragment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment.internalValue;
  }

  // fragment_mapping - computed: true, optional: true, required: false
  private _fragmentMapping = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMappingOutputReference(this, "fragment_mapping");
  public get fragmentMapping() {
    return this._fragmentMapping;
  }
  public putFragmentMapping(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionFragmentMapping) {
    this._fragmentMapping.internalValue = value;
  }
  public resetFragmentMapping() {
    this._fragmentMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMappingInput() {
    return this._fragmentMapping.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#name DataPingfederateAuthenticationPoliciesFragment#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter_fields DataPingfederateAuthenticationPoliciesFragment#filter_fields}
  */
  readonly filterFields?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFields = this._filterFields?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filterFields.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filterFields.internalValue = value.filterFields;
      this._id = value.id;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter_fields - computed: true, optional: true, required: false
  private _filterFields = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  public resetFilterFields() {
    this._filterFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#column_names DataPingfederateAuthenticationPoliciesFragment#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter DataPingfederateAuthenticationPoliciesFragment#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#schema DataPingfederateAuthenticationPoliciesFragment#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#table DataPingfederateAuthenticationPoliciesFragment#table}
  */
  readonly table: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._columnNames = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._columnNames = value.columnNames;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_encoding DataPingfederateAuthenticationPoliciesFragment#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryEncoding = this._binaryEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryEncoding = value.binaryEncoding;
    }
  }

  // binary_encoding - computed: true, optional: true, required: false
  private _binaryEncoding?: string; 
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
  public set binaryEncoding(value: string) {
    this._binaryEncoding = value;
  }
  public resetBinaryEncoding() {
    this._binaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryEncodingInput() {
    return this._binaryEncoding;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#base_dn DataPingfederateAuthenticationPoliciesFragment#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_attribute_settings DataPingfederateAuthenticationPoliciesFragment#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#member_of_nested_group DataPingfederateAuthenticationPoliciesFragment#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_attributes DataPingfederateAuthenticationPoliciesFragment#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_filter DataPingfederateAuthenticationPoliciesFragment#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_scope DataPingfederateAuthenticationPoliciesFragment#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of_nested_group: {
      value: cdktf.booleanToHclTerraform(struct!.memberOfNestedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._binaryAttributeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributeSettings = this._binaryAttributeSettings?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memberOfNestedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOfNestedGroup = this._memberOfNestedGroup;
    }
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._baseDn = undefined;
      this._binaryAttributeSettings.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._memberOfNestedGroup = undefined;
      this._searchAttributes = undefined;
      this._searchFilter = undefined;
      this._searchScope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._baseDn = value.baseDn;
      this._binaryAttributeSettings.internalValue = value.binaryAttributeSettings;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._id = value.id;
      this._memberOfNestedGroup = value.memberOfNestedGroup;
      this._searchAttributes = value.searchAttributes;
      this._searchFilter = value.searchFilter;
      this._searchScope = value.searchScope;
      this._type = value.type;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // binary_attribute_settings - computed: true, optional: true, required: false
  private _binaryAttributeSettings = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
    this._binaryAttributeSettings.internalValue = value;
  }
  public resetBinaryAttributeSettings() {
    this._binaryAttributeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributeSettingsInput() {
    return this._binaryAttributeSettings.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // member_of_nested_group - computed: true, optional: true, required: false
  private _memberOfNestedGroup?: boolean | cdktf.IResolvable; 
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }
  public set memberOfNestedGroup(value: boolean | cdktf.IResolvable) {
    this._memberOfNestedGroup = value;
  }
  public resetMemberOfNestedGroup() {
    this._memberOfNestedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfNestedGroupInput() {
    return this._memberOfNestedGroup;
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

  // search_filter - computed: true, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_scope - computed: true, optional: false, required: true
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#custom_attribute_source DataPingfederateAuthenticationPoliciesFragment#custom_attribute_source}
  */
  readonly customAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#jdbc_attribute_source DataPingfederateAuthenticationPoliciesFragment#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#ldap_attribute_source DataPingfederateAuthenticationPoliciesFragment#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeSource = this._customAttributeSource?.internalValue;
    }
    if (this._jdbcAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAttributeSource = this._jdbcAttributeSource?.internalValue;
    }
    if (this._ldapAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAttributeSource = this._ldapAttributeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = undefined;
      this._jdbcAttributeSource.internalValue = undefined;
      this._ldapAttributeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = value.customAttributeSource;
      this._jdbcAttributeSource.internalValue = value.jdbcAttributeSource;
      this._ldapAttributeSource.internalValue = value.ldapAttributeSource;
    }
  }

  // custom_attribute_source - computed: true, optional: true, required: false
  private _customAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesCustomAttributeSource) {
    this._customAttributeSource.internalValue = value;
  }
  public resetCustomAttributeSource() {
    this._customAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeSourceInput() {
    return this._customAttributeSource.internalValue;
  }

  // jdbc_attribute_source - computed: true, optional: true, required: false
  private _jdbcAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesJdbcAttributeSource) {
    this._jdbcAttributeSource.internalValue = value;
  }
  public resetJdbcAttributeSource() {
    this._jdbcAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAttributeSourceInput() {
    return this._jdbcAttributeSource.internalValue;
  }

  // ldap_attribute_source - computed: true, optional: true, required: false
  private _ldapAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesLdapAttributeSource) {
    this._ldapAttributeSource.internalValue = value;
  }
  public resetLdapAttributeSource() {
    this._ldapAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeSourceInput() {
    return this._ldapAttributeSource.internalValue;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_name DataPingfederateAuthenticationPoliciesFragment#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#condition DataPingfederateAuthenticationPoliciesFragment#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._condition = undefined;
      this._errorResult = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._condition = value.condition;
      this._errorResult = value.errorResult;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: false, required: true
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression DataPingfederateAuthenticationPoliciesFragment#expression}
  */
  readonly expression: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResult = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResult = value.errorResult;
      this._expression = value.expression;
    }
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // expression - computed: true, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#conditional_criteria DataPingfederateAuthenticationPoliciesFragment#conditional_criteria}
  */
  readonly conditionalCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression_criteria DataPingfederateAuthenticationPoliciesFragment#expression_criteria}
  */
  readonly expressionCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCriteria = this._conditionalCriteria?.internalValue;
    }
    if (this._expressionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCriteria = this._expressionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = undefined;
      this._expressionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = value.conditionalCriteria;
      this._expressionCriteria.internalValue = value.expressionCriteria;
    }
  }

  // conditional_criteria - computed: true, optional: true, required: false
  private _conditionalCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
    this._conditionalCriteria.internalValue = value;
  }
  public resetConditionalCriteria() {
    this._conditionalCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCriteriaInput() {
    return this._conditionalCriteria.internalValue;
  }

  // expression_criteria - computed: true, optional: true, required: false
  private _expressionCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
    this._expressionCriteria.internalValue = value;
  }
  public resetExpressionCriteria() {
    this._expressionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionCriteriaInput() {
    return this._expressionCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_sources DataPingfederateAuthenticationPoliciesFragment#attribute_sources}
  */
  readonly attributeSources?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#issuance_criteria DataPingfederateAuthenticationPoliciesFragment#issuance_criteria}
  */
  readonly issuanceCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesToTerraform, false)(struct!.attributeSources),
    issuance_criteria: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesList",
    },
    issuance_criteria: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: true
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#name DataPingfederateAuthenticationPoliciesFragment#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter_fields DataPingfederateAuthenticationPoliciesFragment#filter_fields}
  */
  readonly filterFields?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFields = this._filterFields?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filterFields.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filterFields.internalValue = value.filterFields;
      this._id = value.id;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter_fields - computed: true, optional: true, required: false
  private _filterFields = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  public resetFilterFields() {
    this._filterFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#column_names DataPingfederateAuthenticationPoliciesFragment#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#filter DataPingfederateAuthenticationPoliciesFragment#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#schema DataPingfederateAuthenticationPoliciesFragment#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#table DataPingfederateAuthenticationPoliciesFragment#table}
  */
  readonly table: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._columnNames = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._columnNames = value.columnNames;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_encoding DataPingfederateAuthenticationPoliciesFragment#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryEncoding = this._binaryEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryEncoding = value.binaryEncoding;
    }
  }

  // binary_encoding - computed: true, optional: true, required: false
  private _binaryEncoding?: string; 
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
  public set binaryEncoding(value: string) {
    this._binaryEncoding = value;
  }
  public resetBinaryEncoding() {
    this._binaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryEncodingInput() {
    return this._binaryEncoding;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#base_dn DataPingfederateAuthenticationPoliciesFragment#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#binary_attribute_settings DataPingfederateAuthenticationPoliciesFragment#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#data_store_ref DataPingfederateAuthenticationPoliciesFragment#data_store_ref}
  */
  readonly dataStoreRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#description DataPingfederateAuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#member_of_nested_group DataPingfederateAuthenticationPoliciesFragment#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_attributes DataPingfederateAuthenticationPoliciesFragment#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_filter DataPingfederateAuthenticationPoliciesFragment#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#search_scope DataPingfederateAuthenticationPoliciesFragment#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of_nested_group: {
      value: cdktf.booleanToHclTerraform(struct!.memberOfNestedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._binaryAttributeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributeSettings = this._binaryAttributeSettings?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memberOfNestedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOfNestedGroup = this._memberOfNestedGroup;
    }
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._baseDn = undefined;
      this._binaryAttributeSettings.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._memberOfNestedGroup = undefined;
      this._searchAttributes = undefined;
      this._searchFilter = undefined;
      this._searchScope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._baseDn = value.baseDn;
      this._binaryAttributeSettings.internalValue = value.binaryAttributeSettings;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._id = value.id;
      this._memberOfNestedGroup = value.memberOfNestedGroup;
      this._searchAttributes = value.searchAttributes;
      this._searchFilter = value.searchFilter;
      this._searchScope = value.searchScope;
      this._type = value.type;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // binary_attribute_settings - computed: true, optional: true, required: false
  private _binaryAttributeSettings = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
    this._binaryAttributeSettings.internalValue = value;
  }
  public resetBinaryAttributeSettings() {
    this._binaryAttributeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributeSettingsInput() {
    return this._binaryAttributeSettings.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
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

  // member_of_nested_group - computed: true, optional: true, required: false
  private _memberOfNestedGroup?: boolean | cdktf.IResolvable; 
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }
  public set memberOfNestedGroup(value: boolean | cdktf.IResolvable) {
    this._memberOfNestedGroup = value;
  }
  public resetMemberOfNestedGroup() {
    this._memberOfNestedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfNestedGroupInput() {
    return this._memberOfNestedGroup;
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

  // search_filter - computed: true, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_scope - computed: true, optional: false, required: true
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#custom_attribute_source DataPingfederateAuthenticationPoliciesFragment#custom_attribute_source}
  */
  readonly customAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#jdbc_attribute_source DataPingfederateAuthenticationPoliciesFragment#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#ldap_attribute_source DataPingfederateAuthenticationPoliciesFragment#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeSource = this._customAttributeSource?.internalValue;
    }
    if (this._jdbcAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAttributeSource = this._jdbcAttributeSource?.internalValue;
    }
    if (this._ldapAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAttributeSource = this._ldapAttributeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = undefined;
      this._jdbcAttributeSource.internalValue = undefined;
      this._ldapAttributeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = value.customAttributeSource;
      this._jdbcAttributeSource.internalValue = value.jdbcAttributeSource;
      this._ldapAttributeSource.internalValue = value.ldapAttributeSource;
    }
  }

  // custom_attribute_source - computed: true, optional: true, required: false
  private _customAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesCustomAttributeSource) {
    this._customAttributeSource.internalValue = value;
  }
  public resetCustomAttributeSource() {
    this._customAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeSourceInput() {
    return this._customAttributeSource.internalValue;
  }

  // jdbc_attribute_source - computed: true, optional: true, required: false
  private _jdbcAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesJdbcAttributeSource) {
    this._jdbcAttributeSource.internalValue = value;
  }
  public resetJdbcAttributeSource() {
    this._jdbcAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAttributeSourceInput() {
    return this._jdbcAttributeSource.internalValue;
  }

  // ldap_attribute_source - computed: true, optional: true, required: false
  private _ldapAttributeSource = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesLdapAttributeSource) {
    this._ldapAttributeSource.internalValue = value;
  }
  public resetLdapAttributeSource() {
    this._ldapAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeSourceInput() {
    return this._ldapAttributeSource.internalValue;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#id DataPingfederateAuthenticationPoliciesFragment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#type DataPingfederateAuthenticationPoliciesFragment#type}
  */
  readonly type: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
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
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_name DataPingfederateAuthenticationPoliciesFragment#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#condition DataPingfederateAuthenticationPoliciesFragment#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#source DataPingfederateAuthenticationPoliciesFragment#source}
  */
  readonly source: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#value DataPingfederateAuthenticationPoliciesFragment#value}
  */
  readonly value: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._condition = undefined;
      this._errorResult = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._condition = value.condition;
      this._errorResult = value.errorResult;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // source - computed: true, optional: false, required: true
  private _source = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: false, required: true
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

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#error_result DataPingfederateAuthenticationPoliciesFragment#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression DataPingfederateAuthenticationPoliciesFragment#expression}
  */
  readonly expression: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResult = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResult = value.errorResult;
      this._expression = value.expression;
    }
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // expression - computed: true, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#conditional_criteria DataPingfederateAuthenticationPoliciesFragment#conditional_criteria}
  */
  readonly conditionalCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#expression_criteria DataPingfederateAuthenticationPoliciesFragment#expression_criteria}
  */
  readonly expressionCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCriteria = this._conditionalCriteria?.internalValue;
    }
    if (this._expressionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCriteria = this._expressionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = undefined;
      this._expressionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = value.conditionalCriteria;
      this._expressionCriteria.internalValue = value.expressionCriteria;
    }
  }

  // conditional_criteria - computed: true, optional: true, required: false
  private _conditionalCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
    this._conditionalCriteria.internalValue = value;
  }
  public resetConditionalCriteria() {
    this._conditionalCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCriteriaInput() {
    return this._conditionalCriteria.internalValue;
  }

  // expression_criteria - computed: true, optional: true, required: false
  private _expressionCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
    this._expressionCriteria.internalValue = value;
  }
  public resetExpressionCriteria() {
    this._expressionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionCriteriaInput() {
    return this._expressionCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_contract_fulfillment DataPingfederateAuthenticationPoliciesFragment#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#attribute_sources DataPingfederateAuthenticationPoliciesFragment#attribute_sources}
  */
  readonly attributeSources?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#issuance_criteria DataPingfederateAuthenticationPoliciesFragment#issuance_criteria}
  */
  readonly issuanceCriteria?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesToTerraform, false)(struct!.attributeSources),
    issuance_criteria: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesList",
    },
    issuance_criteria: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: true
  private _attributeContractFulfillment = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction {
  /**
  * The result context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#context DataPingfederateAuthenticationPoliciesFragment#context}
  */
  readonly context?: string;
  /**
  * A list of mappings from attribute sources to attribute targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#inbound_mapping DataPingfederateAuthenticationPoliciesFragment#inbound_mapping}
  */
  readonly inboundMapping?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping;
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#local_identity_ref DataPingfederateAuthenticationPoliciesFragment#local_identity_ref}
  */
  readonly localIdentityRef: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef;
  /**
  * A list of mappings from attribute sources to attribute targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#outbound_attribute_mapping DataPingfederateAuthenticationPoliciesFragment#outbound_attribute_mapping}
  */
  readonly outboundAttributeMapping: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    inbound_mapping: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingToTerraform(struct!.inboundMapping),
    local_identity_ref: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefToTerraform(struct!.localIdentityRef),
    outbound_attribute_mapping: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingToTerraform(struct!.outboundAttributeMapping),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_mapping: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingToHclTerraform(struct!.inboundMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping",
    },
    local_identity_ref: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefToHclTerraform(struct!.localIdentityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef",
    },
    outbound_attribute_mapping: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingToHclTerraform(struct!.outboundAttributeMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._inboundMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundMapping = this._inboundMapping?.internalValue;
    }
    if (this._localIdentityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIdentityRef = this._localIdentityRef?.internalValue;
    }
    if (this._outboundAttributeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAttributeMapping = this._outboundAttributeMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._inboundMapping.internalValue = undefined;
      this._localIdentityRef.internalValue = undefined;
      this._outboundAttributeMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._inboundMapping.internalValue = value.inboundMapping;
      this._localIdentityRef.internalValue = value.localIdentityRef;
      this._outboundAttributeMapping.internalValue = value.outboundAttributeMapping;
    }
  }

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // inbound_mapping - computed: true, optional: true, required: false
  private _inboundMapping = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMappingOutputReference(this, "inbound_mapping");
  public get inboundMapping() {
    return this._inboundMapping;
  }
  public putInboundMapping(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionInboundMapping) {
    this._inboundMapping.internalValue = value;
  }
  public resetInboundMapping() {
    this._inboundMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundMappingInput() {
    return this._inboundMapping.internalValue;
  }

  // local_identity_ref - computed: true, optional: false, required: true
  private _localIdentityRef = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRefOutputReference(this, "local_identity_ref");
  public get localIdentityRef() {
    return this._localIdentityRef;
  }
  public putLocalIdentityRef(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionLocalIdentityRef) {
    this._localIdentityRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdentityRefInput() {
    return this._localIdentityRef.internalValue;
  }

  // outbound_attribute_mapping - computed: true, optional: false, required: true
  private _outboundAttributeMapping = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMappingOutputReference(this, "outbound_attribute_mapping");
  public get outboundAttributeMapping() {
    return this._outboundAttributeMapping;
  }
  public putOutboundAttributeMapping(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutboundAttributeMapping) {
    this._outboundAttributeMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAttributeMappingInput() {
    return this._outboundAttributeMapping.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction {
  /**
  * The result context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#context DataPingfederateAuthenticationPoliciesFragment#context}
  */
  readonly context?: string;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
    }
  }

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction {
  /**
  * An authentication policy contract selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#apc_mapping_policy_action DataPingfederateAuthenticationPoliciesFragment#apc_mapping_policy_action}
  */
  readonly apcMappingPolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyAction;
  /**
  * An authentication selector selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#authn_selector_policy_action DataPingfederateAuthenticationPoliciesFragment#authn_selector_policy_action}
  */
  readonly authnSelectorPolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyAction;
  /**
  * An authentication source (IdP adapter or IdP connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#authn_source_policy_action DataPingfederateAuthenticationPoliciesFragment#authn_source_policy_action}
  */
  readonly authnSourcePolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyAction;
  /**
  * The continue selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#continue_policy_action DataPingfederateAuthenticationPoliciesFragment#continue_policy_action}
  */
  readonly continuePolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyAction;
  /**
  * The done selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#done_policy_action DataPingfederateAuthenticationPoliciesFragment#done_policy_action}
  */
  readonly donePolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyAction;
  /**
  * A authentication policy fragment selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#fragment_policy_action DataPingfederateAuthenticationPoliciesFragment#fragment_policy_action}
  */
  readonly fragmentPolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction;
  /**
  * A local identity profile selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#local_identity_mapping_policy_action DataPingfederateAuthenticationPoliciesFragment#local_identity_mapping_policy_action}
  */
  readonly localIdentityMappingPolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction;
  /**
  * The restart selection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#restart_policy_action DataPingfederateAuthenticationPoliciesFragment#restart_policy_action}
  */
  readonly restartPolicyAction?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apc_mapping_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionToTerraform(struct!.apcMappingPolicyAction),
    authn_selector_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionToTerraform(struct!.authnSelectorPolicyAction),
    authn_source_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionToTerraform(struct!.authnSourcePolicyAction),
    continue_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionToTerraform(struct!.continuePolicyAction),
    done_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionToTerraform(struct!.donePolicyAction),
    fragment_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionToTerraform(struct!.fragmentPolicyAction),
    local_identity_mapping_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionToTerraform(struct!.localIdentityMappingPolicyAction),
    restart_policy_action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionToTerraform(struct!.restartPolicyAction),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apc_mapping_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionToHclTerraform(struct!.apcMappingPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyAction",
    },
    authn_selector_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionToHclTerraform(struct!.authnSelectorPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyAction",
    },
    authn_source_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionToHclTerraform(struct!.authnSourcePolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyAction",
    },
    continue_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionToHclTerraform(struct!.continuePolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyAction",
    },
    done_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionToHclTerraform(struct!.donePolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyAction",
    },
    fragment_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionToHclTerraform(struct!.fragmentPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction",
    },
    local_identity_mapping_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionToHclTerraform(struct!.localIdentityMappingPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction",
    },
    restart_policy_action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionToHclTerraform(struct!.restartPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apcMappingPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcMappingPolicyAction = this._apcMappingPolicyAction?.internalValue;
    }
    if (this._authnSelectorPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnSelectorPolicyAction = this._authnSelectorPolicyAction?.internalValue;
    }
    if (this._authnSourcePolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnSourcePolicyAction = this._authnSourcePolicyAction?.internalValue;
    }
    if (this._continuePolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuePolicyAction = this._continuePolicyAction?.internalValue;
    }
    if (this._donePolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.donePolicyAction = this._donePolicyAction?.internalValue;
    }
    if (this._fragmentPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentPolicyAction = this._fragmentPolicyAction?.internalValue;
    }
    if (this._localIdentityMappingPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIdentityMappingPolicyAction = this._localIdentityMappingPolicyAction?.internalValue;
    }
    if (this._restartPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicyAction = this._restartPolicyAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apcMappingPolicyAction.internalValue = undefined;
      this._authnSelectorPolicyAction.internalValue = undefined;
      this._authnSourcePolicyAction.internalValue = undefined;
      this._continuePolicyAction.internalValue = undefined;
      this._donePolicyAction.internalValue = undefined;
      this._fragmentPolicyAction.internalValue = undefined;
      this._localIdentityMappingPolicyAction.internalValue = undefined;
      this._restartPolicyAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apcMappingPolicyAction.internalValue = value.apcMappingPolicyAction;
      this._authnSelectorPolicyAction.internalValue = value.authnSelectorPolicyAction;
      this._authnSourcePolicyAction.internalValue = value.authnSourcePolicyAction;
      this._continuePolicyAction.internalValue = value.continuePolicyAction;
      this._donePolicyAction.internalValue = value.donePolicyAction;
      this._fragmentPolicyAction.internalValue = value.fragmentPolicyAction;
      this._localIdentityMappingPolicyAction.internalValue = value.localIdentityMappingPolicyAction;
      this._restartPolicyAction.internalValue = value.restartPolicyAction;
    }
  }

  // apc_mapping_policy_action - computed: true, optional: true, required: false
  private _apcMappingPolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyActionOutputReference(this, "apc_mapping_policy_action");
  public get apcMappingPolicyAction() {
    return this._apcMappingPolicyAction;
  }
  public putApcMappingPolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionApcMappingPolicyAction) {
    this._apcMappingPolicyAction.internalValue = value;
  }
  public resetApcMappingPolicyAction() {
    this._apcMappingPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcMappingPolicyActionInput() {
    return this._apcMappingPolicyAction.internalValue;
  }

  // authn_selector_policy_action - computed: true, optional: true, required: false
  private _authnSelectorPolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyActionOutputReference(this, "authn_selector_policy_action");
  public get authnSelectorPolicyAction() {
    return this._authnSelectorPolicyAction;
  }
  public putAuthnSelectorPolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSelectorPolicyAction) {
    this._authnSelectorPolicyAction.internalValue = value;
  }
  public resetAuthnSelectorPolicyAction() {
    this._authnSelectorPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnSelectorPolicyActionInput() {
    return this._authnSelectorPolicyAction.internalValue;
  }

  // authn_source_policy_action - computed: true, optional: true, required: false
  private _authnSourcePolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyActionOutputReference(this, "authn_source_policy_action");
  public get authnSourcePolicyAction() {
    return this._authnSourcePolicyAction;
  }
  public putAuthnSourcePolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionAuthnSourcePolicyAction) {
    this._authnSourcePolicyAction.internalValue = value;
  }
  public resetAuthnSourcePolicyAction() {
    this._authnSourcePolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnSourcePolicyActionInput() {
    return this._authnSourcePolicyAction.internalValue;
  }

  // continue_policy_action - computed: true, optional: true, required: false
  private _continuePolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyActionOutputReference(this, "continue_policy_action");
  public get continuePolicyAction() {
    return this._continuePolicyAction;
  }
  public putContinuePolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionContinuePolicyAction) {
    this._continuePolicyAction.internalValue = value;
  }
  public resetContinuePolicyAction() {
    this._continuePolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuePolicyActionInput() {
    return this._continuePolicyAction.internalValue;
  }

  // done_policy_action - computed: true, optional: true, required: false
  private _donePolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyActionOutputReference(this, "done_policy_action");
  public get donePolicyAction() {
    return this._donePolicyAction;
  }
  public putDonePolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionDonePolicyAction) {
    this._donePolicyAction.internalValue = value;
  }
  public resetDonePolicyAction() {
    this._donePolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get donePolicyActionInput() {
    return this._donePolicyAction.internalValue;
  }

  // fragment_policy_action - computed: true, optional: true, required: false
  private _fragmentPolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyActionOutputReference(this, "fragment_policy_action");
  public get fragmentPolicyAction() {
    return this._fragmentPolicyAction;
  }
  public putFragmentPolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionFragmentPolicyAction) {
    this._fragmentPolicyAction.internalValue = value;
  }
  public resetFragmentPolicyAction() {
    this._fragmentPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentPolicyActionInput() {
    return this._fragmentPolicyAction.internalValue;
  }

  // local_identity_mapping_policy_action - computed: true, optional: true, required: false
  private _localIdentityMappingPolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyActionOutputReference(this, "local_identity_mapping_policy_action");
  public get localIdentityMappingPolicyAction() {
    return this._localIdentityMappingPolicyAction;
  }
  public putLocalIdentityMappingPolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionLocalIdentityMappingPolicyAction) {
    this._localIdentityMappingPolicyAction.internalValue = value;
  }
  public resetLocalIdentityMappingPolicyAction() {
    this._localIdentityMappingPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdentityMappingPolicyActionInput() {
    return this._localIdentityMappingPolicyAction.internalValue;
  }

  // restart_policy_action - computed: true, optional: true, required: false
  private _restartPolicyAction = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyActionOutputReference(this, "restart_policy_action");
  public get restartPolicyAction() {
    return this._restartPolicyAction;
  }
  public putRestartPolicyAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionRestartPolicyAction) {
    this._restartPolicyAction.internalValue = value;
  }
  public resetRestartPolicyAction() {
    this._restartPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyActionInput() {
    return this._restartPolicyAction.internalValue;
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren {
  /**
  * The result action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#action DataPingfederateAuthenticationPoliciesFragment#action}
  */
  readonly action?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionToTerraform(struct!.action),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // children - computed: true, optional: false, required: false
  private _children = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateAuthenticationPoliciesFragmentRootNodeChildren[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenOutputReference {
    return new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateAuthenticationPoliciesFragmentRootNode {
  /**
  * The result action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#action DataPingfederateAuthenticationPoliciesFragment#action}
  */
  readonly action?: DataPingfederateAuthenticationPoliciesFragmentRootNodeAction;
}

export function dataPingfederateAuthenticationPoliciesFragmentRootNodeToTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPingfederateAuthenticationPoliciesFragmentRootNodeActionToTerraform(struct!.action),
  }
}


export function dataPingfederateAuthenticationPoliciesFragmentRootNodeToHclTerraform(struct?: DataPingfederateAuthenticationPoliciesFragmentRootNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPingfederateAuthenticationPoliciesFragmentRootNodeActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateAuthenticationPoliciesFragmentRootNodeAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateAuthenticationPoliciesFragmentRootNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationPoliciesFragmentRootNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationPoliciesFragmentRootNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action = new DataPingfederateAuthenticationPoliciesFragmentRootNodeActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPingfederateAuthenticationPoliciesFragmentRootNodeAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // children - computed: true, optional: false, required: false
  private _children = new DataPingfederateAuthenticationPoliciesFragmentRootNodeChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }
}
