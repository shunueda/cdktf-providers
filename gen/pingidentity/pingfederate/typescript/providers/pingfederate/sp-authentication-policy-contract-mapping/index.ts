// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpAuthenticationPolicyContractMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_contract_fulfillment SpAuthenticationPolicyContractMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: SpAuthenticationPolicyContractMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_sources SpAuthenticationPolicyContractMapping#attribute_sources}
  */
  readonly attributeSources?: SpAuthenticationPolicyContractMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * Default target URL for this APC-to-adapter mapping configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#default_target_resource SpAuthenticationPolicyContractMapping#default_target_resource}
  */
  readonly defaultTargetResource?: string;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#issuance_criteria SpAuthenticationPolicyContractMapping#issuance_criteria}
  */
  readonly issuanceCriteria?: SpAuthenticationPolicyContractMappingIssuanceCriteria;
  /**
  * The license connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#license_connection_group_assignment SpAuthenticationPolicyContractMapping#license_connection_group_assignment}
  */
  readonly licenseConnectionGroupAssignment?: string;
  /**
  * The id of the Authentication Policy Contract. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source_id SpAuthenticationPolicyContractMapping#source_id}
  */
  readonly sourceId: string;
  /**
  * The id of the SP Adapter. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#target_id SpAuthenticationPolicyContractMapping#target_id}
  */
  readonly targetId: string;
}
export interface SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
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

export class SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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
}
export interface SpAuthenticationPolicyContractMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source SpAuthenticationPolicyContractMapping#source}
  */
  readonly source: SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value?: string;
}

export function spAuthenticationPolicyContractMappingAttributeContractFulfillmentToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingAttributeContractFulfillmentToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource",
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

export class SpAuthenticationPolicyContractMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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

  // source - computed: false, optional: false, required: true
  private _source = new SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpAuthenticationPolicyContractMappingAttributeContractFulfillmentSource) {
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

export class SpAuthenticationPolicyContractMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpAuthenticationPolicyContractMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): SpAuthenticationPolicyContractMappingAttributeContractFulfillmentOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source SpAuthenticationPolicyContractMapping#source}
  */
  readonly source: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#name SpAuthenticationPolicyContractMapping#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_contract_fulfillment SpAuthenticationPolicyContractMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#data_store_ref SpAuthenticationPolicyContractMapping#data_store_ref}
  */
  readonly dataStoreRef: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#description SpAuthenticationPolicyContractMapping#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#filter_fields SpAuthenticationPolicyContractMapping#filter_fields}
  */
  readonly filterFields?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
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
  private _filterFields = new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source SpAuthenticationPolicyContractMapping#source}
  */
  readonly source: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_contract_fulfillment SpAuthenticationPolicyContractMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#column_names SpAuthenticationPolicyContractMapping#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#data_store_ref SpAuthenticationPolicyContractMapping#data_store_ref}
  */
  readonly dataStoreRef: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#description SpAuthenticationPolicyContractMapping#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#filter SpAuthenticationPolicyContractMapping#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#schema SpAuthenticationPolicyContractMapping#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#table SpAuthenticationPolicyContractMapping#table}
  */
  readonly table: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source SpAuthenticationPolicyContractMapping#source}
  */
  readonly source: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#binary_encoding SpAuthenticationPolicyContractMapping#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_contract_fulfillment SpAuthenticationPolicyContractMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#base_dn SpAuthenticationPolicyContractMapping#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#binary_attribute_settings SpAuthenticationPolicyContractMapping#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#data_store_ref SpAuthenticationPolicyContractMapping#data_store_ref}
  */
  readonly dataStoreRef: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#description SpAuthenticationPolicyContractMapping#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#member_of_nested_group SpAuthenticationPolicyContractMapping#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#search_attributes SpAuthenticationPolicyContractMapping#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#search_filter SpAuthenticationPolicyContractMapping#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#search_scope SpAuthenticationPolicyContractMapping#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _binaryAttributeSettings = new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
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
  private _dataStoreRef = new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
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
export interface SpAuthenticationPolicyContractMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#custom_attribute_source SpAuthenticationPolicyContractMapping#custom_attribute_source}
  */
  readonly customAttributeSource?: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#jdbc_attribute_source SpAuthenticationPolicyContractMapping#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#ldap_attribute_source SpAuthenticationPolicyContractMapping#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource;
}

export function spAuthenticationPolicyContractMappingAttributeSourcesToTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function spAuthenticationPolicyContractMappingAttributeSourcesToHclTerraform(struct?: SpAuthenticationPolicyContractMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: spAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpAuthenticationPolicyContractMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingAttributeSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingAttributeSources | cdktf.IResolvable | undefined) {
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
  private _customAttributeSource = new SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesCustomAttributeSource) {
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
  private _jdbcAttributeSource = new SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesJdbcAttributeSource) {
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
  private _ldapAttributeSource = new SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: SpAuthenticationPolicyContractMappingAttributeSourcesLdapAttributeSource) {
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

export class SpAuthenticationPolicyContractMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : SpAuthenticationPolicyContractMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): SpAuthenticationPolicyContractMappingAttributeSourcesOutputReference {
    return new SpAuthenticationPolicyContractMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#id SpAuthenticationPolicyContractMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#type SpAuthenticationPolicyContractMapping#type}
  */
  readonly type: string;
}

export function spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource): any {
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

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#attribute_name SpAuthenticationPolicyContractMapping#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#condition SpAuthenticationPolicyContractMapping#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#error_result SpAuthenticationPolicyContractMapping#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#source SpAuthenticationPolicyContractMapping#source}
  */
  readonly source: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#value SpAuthenticationPolicyContractMapping#value}
  */
  readonly value: string;
}

export function spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
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
      value: spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
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
  private _source = new SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaSource) {
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

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#error_result SpAuthenticationPolicyContractMapping#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#expression SpAuthenticationPolicyContractMapping#expression}
  */
  readonly expression: string;
}

export function spAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function spAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
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

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
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

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpAuthenticationPolicyContractMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#conditional_criteria SpAuthenticationPolicyContractMapping#conditional_criteria}
  */
  readonly conditionalCriteria?: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#expression_criteria SpAuthenticationPolicyContractMapping#expression_criteria}
  */
  readonly expressionCriteria?: SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function spAuthenticationPolicyContractMappingIssuanceCriteriaToTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(spAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function spAuthenticationPolicyContractMappingIssuanceCriteriaToHclTerraform(struct?: SpAuthenticationPolicyContractMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(spAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(spAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpAuthenticationPolicyContractMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpAuthenticationPolicyContractMappingIssuanceCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpAuthenticationPolicyContractMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
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
  private _conditionalCriteria = new SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
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
  private _expressionCriteria = new SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: SpAuthenticationPolicyContractMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping pingfederate_sp_authentication_policy_contract_mapping}
*/
export class SpAuthenticationPolicyContractMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_sp_authentication_policy_contract_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpAuthenticationPolicyContractMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpAuthenticationPolicyContractMapping to import
  * @param importFromId The id of the existing SpAuthenticationPolicyContractMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpAuthenticationPolicyContractMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_sp_authentication_policy_contract_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_authentication_policy_contract_mapping pingfederate_sp_authentication_policy_contract_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpAuthenticationPolicyContractMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SpAuthenticationPolicyContractMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_sp_authentication_policy_contract_mapping',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeContractFulfillment.internalValue = config.attributeContractFulfillment;
    this._attributeSources.internalValue = config.attributeSources;
    this._defaultTargetResource = config.defaultTargetResource;
    this._issuanceCriteria.internalValue = config.issuanceCriteria;
    this._licenseConnectionGroupAssignment = config.licenseConnectionGroupAssignment;
    this._sourceId = config.sourceId;
    this._targetId = config.targetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_contract_fulfillment - computed: false, optional: false, required: true
  private _attributeContractFulfillment = new SpAuthenticationPolicyContractMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpAuthenticationPolicyContractMappingAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new SpAuthenticationPolicyContractMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: SpAuthenticationPolicyContractMappingAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // default_target_resource - computed: false, optional: true, required: false
  private _defaultTargetResource?: string; 
  public get defaultTargetResource() {
    return this.getStringAttribute('default_target_resource');
  }
  public set defaultTargetResource(value: string) {
    this._defaultTargetResource = value;
  }
  public resetDefaultTargetResource() {
    this._defaultTargetResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetResourceInput() {
    return this._defaultTargetResource;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new SpAuthenticationPolicyContractMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: SpAuthenticationPolicyContractMappingIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }

  // license_connection_group_assignment - computed: false, optional: true, required: false
  private _licenseConnectionGroupAssignment?: string; 
  public get licenseConnectionGroupAssignment() {
    return this.getStringAttribute('license_connection_group_assignment');
  }
  public set licenseConnectionGroupAssignment(value: string) {
    this._licenseConnectionGroupAssignment = value;
  }
  public resetLicenseConnectionGroupAssignment() {
    this._licenseConnectionGroupAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConnectionGroupAssignmentInput() {
    return this._licenseConnectionGroupAssignment;
  }

  // mapping_id - computed: true, optional: false, required: false
  public get mappingId() {
    return this.getStringAttribute('mapping_id');
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_contract_fulfillment: cdktf.hashMapper(spAuthenticationPolicyContractMappingAttributeContractFulfillmentToTerraform)(this._attributeContractFulfillment.internalValue),
      attribute_sources: cdktf.listMapper(spAuthenticationPolicyContractMappingAttributeSourcesToTerraform, false)(this._attributeSources.internalValue),
      default_target_resource: cdktf.stringToTerraform(this._defaultTargetResource),
      issuance_criteria: spAuthenticationPolicyContractMappingIssuanceCriteriaToTerraform(this._issuanceCriteria.internalValue),
      license_connection_group_assignment: cdktf.stringToTerraform(this._licenseConnectionGroupAssignment),
      source_id: cdktf.stringToTerraform(this._sourceId),
      target_id: cdktf.stringToTerraform(this._targetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_contract_fulfillment: {
        value: cdktf.hashMapperHcl(spAuthenticationPolicyContractMappingAttributeContractFulfillmentToHclTerraform)(this._attributeContractFulfillment.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SpAuthenticationPolicyContractMappingAttributeContractFulfillmentMap",
      },
      attribute_sources: {
        value: cdktf.listMapperHcl(spAuthenticationPolicyContractMappingAttributeSourcesToHclTerraform, false)(this._attributeSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SpAuthenticationPolicyContractMappingAttributeSourcesList",
      },
      default_target_resource: {
        value: cdktf.stringToHclTerraform(this._defaultTargetResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuance_criteria: {
        value: spAuthenticationPolicyContractMappingIssuanceCriteriaToHclTerraform(this._issuanceCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpAuthenticationPolicyContractMappingIssuanceCriteria",
      },
      license_connection_group_assignment: {
        value: cdktf.stringToHclTerraform(this._licenseConnectionGroupAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
