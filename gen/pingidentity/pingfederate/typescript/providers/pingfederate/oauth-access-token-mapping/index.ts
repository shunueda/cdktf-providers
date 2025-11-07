// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthAccessTokenMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the access token manager this mapping is associated with. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#access_token_manager_ref OauthAccessTokenMapping#access_token_manager_ref}
  */
  readonly accessTokenManagerRef: OauthAccessTokenMappingAccessTokenManagerRef;
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_contract_fulfillment OauthAccessTokenMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: OauthAccessTokenMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_sources OauthAccessTokenMapping#attribute_sources}
  */
  readonly attributeSources?: OauthAccessTokenMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * The context of the OAuth Access Token Mapping. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#context OauthAccessTokenMapping#context}
  */
  readonly context: OauthAccessTokenMappingContext;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#issuance_criteria OauthAccessTokenMapping#issuance_criteria}
  */
  readonly issuanceCriteria?: OauthAccessTokenMappingIssuanceCriteria;
}
export interface OauthAccessTokenMappingAccessTokenManagerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenMappingAccessTokenManagerRefToTerraform(struct?: OauthAccessTokenMappingAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingAccessTokenManagerRefToHclTerraform(struct?: OauthAccessTokenMappingAccessTokenManagerRef | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAccessTokenManagerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingAccessTokenManagerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
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
export interface OauthAccessTokenMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingAttributeContractFulfillmentSourceToTerraform(struct?: OauthAccessTokenMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
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
export interface OauthAccessTokenMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#source OauthAccessTokenMapping#source}
  */
  readonly source: OauthAccessTokenMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value?: string;
}

export function oauthAccessTokenMappingAttributeContractFulfillmentToTerraform(struct?: OauthAccessTokenMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: oauthAccessTokenMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingAttributeContractFulfillmentToHclTerraform(struct?: OauthAccessTokenMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: oauthAccessTokenMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeContractFulfillmentSource",
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

export class OauthAccessTokenMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new OauthAccessTokenMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OauthAccessTokenMappingAttributeContractFulfillmentSource) {
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

export class OauthAccessTokenMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthAccessTokenMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): OauthAccessTokenMappingAttributeContractFulfillmentOutputReference {
    return new OauthAccessTokenMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#source OauthAccessTokenMapping#source}
  */
  readonly source: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value?: string;
}

export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#name OauthAccessTokenMapping#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value?: string;
}

export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_contract_fulfillment OauthAccessTokenMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#data_store_ref OauthAccessTokenMapping#data_store_ref}
  */
  readonly dataStoreRef: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#description OauthAccessTokenMapping#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#filter_fields OauthAccessTokenMapping#filter_fields}
  */
  readonly filterFields?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
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

export class OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
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
  private _filterFields = new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
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
export interface OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
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

export class OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#source OauthAccessTokenMapping#source}
  */
  readonly source: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value?: string;
}

export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
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

export class OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
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

export class OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_contract_fulfillment OauthAccessTokenMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#column_names OauthAccessTokenMapping#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#data_store_ref OauthAccessTokenMapping#data_store_ref}
  */
  readonly dataStoreRef: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#description OauthAccessTokenMapping#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#filter OauthAccessTokenMapping#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#schema OauthAccessTokenMapping#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#table OauthAccessTokenMapping#table}
  */
  readonly table: string;
}

export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
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

export class OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
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
export interface OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#source OauthAccessTokenMapping#source}
  */
  readonly source: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value?: string;
}

export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#binary_encoding OauthAccessTokenMapping#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface OauthAccessTokenMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_contract_fulfillment OauthAccessTokenMapping#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#base_dn OauthAccessTokenMapping#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#binary_attribute_settings OauthAccessTokenMapping#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#data_store_ref OauthAccessTokenMapping#data_store_ref}
  */
  readonly dataStoreRef: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#description OauthAccessTokenMapping#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#member_of_nested_group OauthAccessTokenMapping#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#search_attributes OauthAccessTokenMapping#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#search_filter OauthAccessTokenMapping#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#search_scope OauthAccessTokenMapping#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
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

export class OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _binaryAttributeSettings = new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
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
  private _dataStoreRef = new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
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
export interface OauthAccessTokenMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#custom_attribute_source OauthAccessTokenMapping#custom_attribute_source}
  */
  readonly customAttributeSource?: OauthAccessTokenMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#jdbc_attribute_source OauthAccessTokenMapping#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#ldap_attribute_source OauthAccessTokenMapping#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: OauthAccessTokenMappingAttributeSourcesLdapAttributeSource;
}

export function oauthAccessTokenMappingAttributeSourcesToTerraform(struct?: OauthAccessTokenMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function oauthAccessTokenMappingAttributeSourcesToHclTerraform(struct?: OauthAccessTokenMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: oauthAccessTokenMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: oauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: oauthAccessTokenMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthAccessTokenMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingAttributeSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingAttributeSources | cdktf.IResolvable | undefined) {
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
  private _customAttributeSource = new OauthAccessTokenMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: OauthAccessTokenMappingAttributeSourcesCustomAttributeSource) {
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
  private _jdbcAttributeSource = new OauthAccessTokenMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: OauthAccessTokenMappingAttributeSourcesJdbcAttributeSource) {
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
  private _ldapAttributeSource = new OauthAccessTokenMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: OauthAccessTokenMappingAttributeSourcesLdapAttributeSource) {
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

export class OauthAccessTokenMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : OauthAccessTokenMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): OauthAccessTokenMappingAttributeSourcesOutputReference {
    return new OauthAccessTokenMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthAccessTokenMappingContextContextRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenMappingContextContextRefToTerraform(struct?: OauthAccessTokenMappingContextContextRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenMappingContextContextRefToHclTerraform(struct?: OauthAccessTokenMappingContextContextRef | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingContextContextRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingContextContextRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingContextContextRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
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
export interface OauthAccessTokenMappingContext {
  /**
  * Reference to the associated Access Token Mapping Context instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#context_ref OauthAccessTokenMapping#context_ref}
  */
  readonly contextRef?: OauthAccessTokenMappingContextContextRef;
  /**
  * The Access Token Mapping Context type. Options are `DEFAULT`, `PCV`, `IDP_CONNECTION`, `IDP_ADAPTER`, `AUTHENTICATION_POLICY_CONTRACT`, `CLIENT_CREDENTIALS`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingContextToTerraform(struct?: OauthAccessTokenMappingContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_ref: oauthAccessTokenMappingContextContextRefToTerraform(struct!.contextRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingContextToHclTerraform(struct?: OauthAccessTokenMappingContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_ref: {
      value: oauthAccessTokenMappingContextContextRefToHclTerraform(struct!.contextRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingContextContextRef",
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

export class OauthAccessTokenMappingContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextRef = this._contextRef?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthAccessTokenMappingContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextRef.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextRef.internalValue = value.contextRef;
      this._type = value.type;
    }
  }

  // context_ref - computed: false, optional: true, required: false
  private _contextRef = new OauthAccessTokenMappingContextContextRefOutputReference(this, "context_ref");
  public get contextRef() {
    return this._contextRef;
  }
  public putContextRef(value: OauthAccessTokenMappingContextContextRef) {
    this._contextRef.internalValue = value;
  }
  public resetContextRef() {
    this._contextRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRefInput() {
    return this._contextRef.internalValue;
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
export interface OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#id OauthAccessTokenMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#type OauthAccessTokenMapping#type}
  */
  readonly type: string;
}

export function oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource): any {
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

export class OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#attribute_name OauthAccessTokenMapping#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#condition OauthAccessTokenMapping#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#error_result OauthAccessTokenMapping#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#source OauthAccessTokenMapping#source}
  */
  readonly source: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#value OauthAccessTokenMapping#value}
  */
  readonly value: string;
}

export function oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
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
      value: oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
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
  private _source = new OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaSource) {
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

export class OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#error_result OauthAccessTokenMapping#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#expression OauthAccessTokenMapping#expression}
  */
  readonly expression: string;
}

export function oauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function oauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
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

export class OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
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

export class OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthAccessTokenMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#conditional_criteria OauthAccessTokenMapping#conditional_criteria}
  */
  readonly conditionalCriteria?: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#expression_criteria OauthAccessTokenMapping#expression_criteria}
  */
  readonly expressionCriteria?: OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function oauthAccessTokenMappingIssuanceCriteriaToTerraform(struct?: OauthAccessTokenMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(oauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function oauthAccessTokenMappingIssuanceCriteriaToHclTerraform(struct?: OauthAccessTokenMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(oauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(oauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthAccessTokenMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenMappingIssuanceCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
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
  private _conditionalCriteria = new OauthAccessTokenMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: OauthAccessTokenMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
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
  private _expressionCriteria = new OauthAccessTokenMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: OauthAccessTokenMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping pingfederate_oauth_access_token_mapping}
*/
export class OauthAccessTokenMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_access_token_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthAccessTokenMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthAccessTokenMapping to import
  * @param importFromId The id of the existing OauthAccessTokenMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthAccessTokenMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_access_token_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_mapping pingfederate_oauth_access_token_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthAccessTokenMappingConfig
  */
  public constructor(scope: Construct, id: string, config: OauthAccessTokenMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_access_token_mapping',
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
    this._accessTokenManagerRef.internalValue = config.accessTokenManagerRef;
    this._attributeContractFulfillment.internalValue = config.attributeContractFulfillment;
    this._attributeSources.internalValue = config.attributeSources;
    this._context.internalValue = config.context;
    this._issuanceCriteria.internalValue = config.issuanceCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_manager_ref - computed: false, optional: false, required: true
  private _accessTokenManagerRef = new OauthAccessTokenMappingAccessTokenManagerRefOutputReference(this, "access_token_manager_ref");
  public get accessTokenManagerRef() {
    return this._accessTokenManagerRef;
  }
  public putAccessTokenManagerRef(value: OauthAccessTokenMappingAccessTokenManagerRef) {
    this._accessTokenManagerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenManagerRefInput() {
    return this._accessTokenManagerRef.internalValue;
  }

  // attribute_contract_fulfillment - computed: false, optional: false, required: true
  private _attributeContractFulfillment = new OauthAccessTokenMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: OauthAccessTokenMappingAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new OauthAccessTokenMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: OauthAccessTokenMappingAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // context - computed: false, optional: false, required: true
  private _context = new OauthAccessTokenMappingContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: OauthAccessTokenMappingContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new OauthAccessTokenMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: OauthAccessTokenMappingIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }

  // mapping_id - computed: true, optional: false, required: false
  public get mappingId() {
    return this.getStringAttribute('mapping_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_manager_ref: oauthAccessTokenMappingAccessTokenManagerRefToTerraform(this._accessTokenManagerRef.internalValue),
      attribute_contract_fulfillment: cdktf.hashMapper(oauthAccessTokenMappingAttributeContractFulfillmentToTerraform)(this._attributeContractFulfillment.internalValue),
      attribute_sources: cdktf.listMapper(oauthAccessTokenMappingAttributeSourcesToTerraform, false)(this._attributeSources.internalValue),
      context: oauthAccessTokenMappingContextToTerraform(this._context.internalValue),
      issuance_criteria: oauthAccessTokenMappingIssuanceCriteriaToTerraform(this._issuanceCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_manager_ref: {
        value: oauthAccessTokenMappingAccessTokenManagerRefToHclTerraform(this._accessTokenManagerRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthAccessTokenMappingAccessTokenManagerRef",
      },
      attribute_contract_fulfillment: {
        value: cdktf.hashMapperHcl(oauthAccessTokenMappingAttributeContractFulfillmentToHclTerraform)(this._attributeContractFulfillment.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OauthAccessTokenMappingAttributeContractFulfillmentMap",
      },
      attribute_sources: {
        value: cdktf.listMapperHcl(oauthAccessTokenMappingAttributeSourcesToHclTerraform, false)(this._attributeSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthAccessTokenMappingAttributeSourcesList",
      },
      context: {
        value: oauthAccessTokenMappingContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthAccessTokenMappingContext",
      },
      issuance_criteria: {
        value: oauthAccessTokenMappingIssuanceCriteriaToHclTerraform(this._issuanceCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthAccessTokenMappingIssuanceCriteria",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
