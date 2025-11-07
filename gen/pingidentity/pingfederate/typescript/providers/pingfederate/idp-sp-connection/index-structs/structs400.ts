import * as cdktf from 'cdktf';
import { IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToTerraform,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToHclTerraform,
IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceOutputReference,
IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToTerraform,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform,
IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceOutputReference,
IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToTerraform,
idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToHclTerraform,
IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap,
IdpSpConnectionSpBrowserSsoAdapterMappings,
idpSpConnectionSpBrowserSsoAdapterMappingsToTerraform,
idpSpConnectionSpBrowserSsoAdapterMappingsToHclTerraform,
IdpSpConnectionSpBrowserSsoAdapterMappingsList,
IdpSpConnectionSpBrowserSsoArtifact,
idpSpConnectionSpBrowserSsoArtifactToTerraform,
idpSpConnectionSpBrowserSsoArtifactToHclTerraform,
IdpSpConnectionSpBrowserSsoArtifactOutputReference,
IdpSpConnectionSpBrowserSsoAssertionLifetime,
idpSpConnectionSpBrowserSsoAssertionLifetimeToTerraform,
idpSpConnectionSpBrowserSsoAssertionLifetimeToHclTerraform,
IdpSpConnectionSpBrowserSsoAssertionLifetimeOutputReference,
IdpSpConnectionSpBrowserSsoAttributeContract,
idpSpConnectionSpBrowserSsoAttributeContractToTerraform,
idpSpConnectionSpBrowserSsoAttributeContractToHclTerraform,
IdpSpConnectionSpBrowserSsoAttributeContractOutputReference } from './structs0'
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binary_encoding IdpSpConnection#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#base_dn IdpSpConnection#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binary_attribute_settings IdpSpConnection#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#data_store_ref IdpSpConnection#data_store_ref}
  */
  readonly dataStoreRef: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#description IdpSpConnection#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#member_of_nested_group IdpSpConnection#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_attributes IdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_filter IdpSpConnection#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_scope IdpSpConnection#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef",
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _binaryAttributeSettings = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceDataStoreRef) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#custom_attribute_source IdpSpConnection#custom_attribute_source}
  */
  readonly customAttributeSource?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#jdbc_attribute_source IdpSpConnection#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#ldap_attribute_source IdpSpConnection#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources | cdktf.IResolvable | undefined) {
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
  private _customAttributeSource = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource) {
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
  private _jdbcAttributeSource = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource) {
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
  private _ldapAttributeSource = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSource) {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef | undefined) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_name IdpSpConnection#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#condition IdpSpConnection#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#error_result IdpSpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
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
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource",
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaSource) {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#error_result IdpSpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#expression IdpSpConnection#expression}
  */
  readonly expression: string;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
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

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#conditional_criteria IdpSpConnection#conditional_criteria}
  */
  readonly conditionalCriteria?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#expression_criteria IdpSpConnection#expression_criteria}
  */
  readonly expressionCriteria?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria | cdktf.IResolvable | undefined) {
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
  private _conditionalCriteria = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
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
  private _expressionCriteria = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
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
export interface IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings {
  /**
  * If set to true, SSO transaction will be aborted as a fail-safe when the data-store's attribute mappings fail to complete the attribute contract. Otherwise, the attribute contract with default values is used. By default, this value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#abort_sso_transaction_as_fail_safe IdpSpConnection#abort_sso_transaction_as_fail_safe}
  */
  readonly abortSsoTransactionAsFailSafe?: boolean | cdktf.IResolvable;
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_sources IdpSpConnection#attribute_sources}
  */
  readonly attributeSources?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources[] | cdktf.IResolvable;
  /**
  * Reference to the associated Authentication Policy Contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#authentication_policy_contract_ref IdpSpConnection#authentication_policy_contract_ref}
  */
  readonly authenticationPolicyContractRef: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#issuance_criteria IdpSpConnection#issuance_criteria}
  */
  readonly issuanceCriteria?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria;
  /**
  * Restricts this mapping to specific virtual entity IDs. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#restrict_virtual_entity_ids IdpSpConnection#restrict_virtual_entity_ids}
  */
  readonly restrictVirtualEntityIds?: boolean | cdktf.IResolvable;
  /**
  * The list of virtual server IDs that this mapping is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#restricted_virtual_entity_ids IdpSpConnection#restricted_virtual_entity_ids}
  */
  readonly restrictedVirtualEntityIds?: string[];
}

export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_sso_transaction_as_fail_safe: cdktf.booleanToTerraform(struct!.abortSsoTransactionAsFailSafe),
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToTerraform, false)(struct!.attributeSources),
    authentication_policy_contract_ref: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToTerraform(struct!.authenticationPolicyContractRef),
    issuance_criteria: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
    restrict_virtual_entity_ids: cdktf.booleanToTerraform(struct!.restrictVirtualEntityIds),
    restricted_virtual_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedVirtualEntityIds),
  }
}


export function idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_sso_transaction_as_fail_safe: {
      value: cdktf.booleanToHclTerraform(struct!.abortSsoTransactionAsFailSafe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesList",
    },
    authentication_policy_contract_ref: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefToHclTerraform(struct!.authenticationPolicyContractRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef",
    },
    issuance_criteria: {
      value: idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria",
    },
    restrict_virtual_entity_ids: {
      value: cdktf.booleanToHclTerraform(struct!.restrictVirtualEntityIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_virtual_entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedVirtualEntityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortSsoTransactionAsFailSafe !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortSsoTransactionAsFailSafe = this._abortSsoTransactionAsFailSafe;
    }
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._authenticationPolicyContractRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPolicyContractRef = this._authenticationPolicyContractRef?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    if (this._restrictVirtualEntityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictVirtualEntityIds = this._restrictVirtualEntityIds;
    }
    if (this._restrictedVirtualEntityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedVirtualEntityIds = this._restrictedVirtualEntityIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortSsoTransactionAsFailSafe = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._authenticationPolicyContractRef.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
      this._restrictVirtualEntityIds = undefined;
      this._restrictedVirtualEntityIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortSsoTransactionAsFailSafe = value.abortSsoTransactionAsFailSafe;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._authenticationPolicyContractRef.internalValue = value.authenticationPolicyContractRef;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
      this._restrictVirtualEntityIds = value.restrictVirtualEntityIds;
      this._restrictedVirtualEntityIds = value.restrictedVirtualEntityIds;
    }
  }

  // abort_sso_transaction_as_fail_safe - computed: true, optional: true, required: false
  private _abortSsoTransactionAsFailSafe?: boolean | cdktf.IResolvable; 
  public get abortSsoTransactionAsFailSafe() {
    return this.getBooleanAttribute('abort_sso_transaction_as_fail_safe');
  }
  public set abortSsoTransactionAsFailSafe(value: boolean | cdktf.IResolvable) {
    this._abortSsoTransactionAsFailSafe = value;
  }
  public resetAbortSsoTransactionAsFailSafe() {
    this._abortSsoTransactionAsFailSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortSsoTransactionAsFailSafeInput() {
    return this._abortSsoTransactionAsFailSafe;
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: true
  private _attributeContractFulfillment = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // authentication_policy_contract_ref - computed: true, optional: false, required: true
  private _authenticationPolicyContractRef = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRefOutputReference(this, "authentication_policy_contract_ref");
  public get authenticationPolicyContractRef() {
    return this._authenticationPolicyContractRef;
  }
  public putAuthenticationPolicyContractRef(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAuthenticationPolicyContractRef) {
    this._authenticationPolicyContractRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyContractRefInput() {
    return this._authenticationPolicyContractRef.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }

  // restrict_virtual_entity_ids - computed: true, optional: true, required: false
  private _restrictVirtualEntityIds?: boolean | cdktf.IResolvable; 
  public get restrictVirtualEntityIds() {
    return this.getBooleanAttribute('restrict_virtual_entity_ids');
  }
  public set restrictVirtualEntityIds(value: boolean | cdktf.IResolvable) {
    this._restrictVirtualEntityIds = value;
  }
  public resetRestrictVirtualEntityIds() {
    this._restrictVirtualEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictVirtualEntityIdsInput() {
    return this._restrictVirtualEntityIds;
  }

  // restricted_virtual_entity_ids - computed: true, optional: true, required: false
  private _restrictedVirtualEntityIds?: string[]; 
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
  public set restrictedVirtualEntityIds(value: string[]) {
    this._restrictedVirtualEntityIds = value;
  }
  public resetRestrictedVirtualEntityIds() {
    this._restrictedVirtualEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVirtualEntityIdsInput() {
    return this._restrictedVirtualEntityIds;
  }
}

export class IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference {
    return new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoEncryptionPolicy {
  /**
  * Whether the outgoing SAML assertion will be encrypted. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#encrypt_assertion IdpSpConnection#encrypt_assertion}
  */
  readonly encryptAssertion?: boolean | cdktf.IResolvable;
  /**
  * Encrypt the name-identifier attribute in outbound SLO messages. This can be set if the name id is encrypted. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#encrypt_slo_subject_name_id IdpSpConnection#encrypt_slo_subject_name_id}
  */
  readonly encryptSloSubjectNameId?: boolean | cdktf.IResolvable;
  /**
  * The list of outgoing SAML assertion attributes that will be encrypted. The `encrypt_assertion` property takes precedence over this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#encrypted_attributes IdpSpConnection#encrypted_attributes}
  */
  readonly encryptedAttributes?: string[];
  /**
  * Allow the encryption of the name-identifier attribute for inbound SLO messages. This can be set if SP initiated SLO is enabled. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#slo_subject_name_id_encrypted IdpSpConnection#slo_subject_name_id_encrypted}
  */
  readonly sloSubjectNameIdEncrypted?: boolean | cdktf.IResolvable;
}

export function idpSpConnectionSpBrowserSsoEncryptionPolicyToTerraform(struct?: IdpSpConnectionSpBrowserSsoEncryptionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypt_assertion: cdktf.booleanToTerraform(struct!.encryptAssertion),
    encrypt_slo_subject_name_id: cdktf.booleanToTerraform(struct!.encryptSloSubjectNameId),
    encrypted_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encryptedAttributes),
    slo_subject_name_id_encrypted: cdktf.booleanToTerraform(struct!.sloSubjectNameIdEncrypted),
  }
}


export function idpSpConnectionSpBrowserSsoEncryptionPolicyToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoEncryptionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypt_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.encryptAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt_slo_subject_name_id: {
      value: cdktf.booleanToHclTerraform(struct!.encryptSloSubjectNameId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encryptedAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    slo_subject_name_id_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.sloSubjectNameIdEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoEncryptionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSsoEncryptionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptAssertion = this._encryptAssertion;
    }
    if (this._encryptSloSubjectNameId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptSloSubjectNameId = this._encryptSloSubjectNameId;
    }
    if (this._encryptedAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedAttributes = this._encryptedAttributes;
    }
    if (this._sloSubjectNameIdEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloSubjectNameIdEncrypted = this._sloSubjectNameIdEncrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoEncryptionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptAssertion = undefined;
      this._encryptSloSubjectNameId = undefined;
      this._encryptedAttributes = undefined;
      this._sloSubjectNameIdEncrypted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptAssertion = value.encryptAssertion;
      this._encryptSloSubjectNameId = value.encryptSloSubjectNameId;
      this._encryptedAttributes = value.encryptedAttributes;
      this._sloSubjectNameIdEncrypted = value.sloSubjectNameIdEncrypted;
    }
  }

  // encrypt_assertion - computed: true, optional: true, required: false
  private _encryptAssertion?: boolean | cdktf.IResolvable; 
  public get encryptAssertion() {
    return this.getBooleanAttribute('encrypt_assertion');
  }
  public set encryptAssertion(value: boolean | cdktf.IResolvable) {
    this._encryptAssertion = value;
  }
  public resetEncryptAssertion() {
    this._encryptAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAssertionInput() {
    return this._encryptAssertion;
  }

  // encrypt_slo_subject_name_id - computed: true, optional: true, required: false
  private _encryptSloSubjectNameId?: boolean | cdktf.IResolvable; 
  public get encryptSloSubjectNameId() {
    return this.getBooleanAttribute('encrypt_slo_subject_name_id');
  }
  public set encryptSloSubjectNameId(value: boolean | cdktf.IResolvable) {
    this._encryptSloSubjectNameId = value;
  }
  public resetEncryptSloSubjectNameId() {
    this._encryptSloSubjectNameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptSloSubjectNameIdInput() {
    return this._encryptSloSubjectNameId;
  }

  // encrypted_attributes - computed: true, optional: true, required: false
  private _encryptedAttributes?: string[]; 
  public get encryptedAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('encrypted_attributes'));
  }
  public set encryptedAttributes(value: string[]) {
    this._encryptedAttributes = value;
  }
  public resetEncryptedAttributes() {
    this._encryptedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedAttributesInput() {
    return this._encryptedAttributes;
  }

  // slo_subject_name_id_encrypted - computed: true, optional: true, required: false
  private _sloSubjectNameIdEncrypted?: boolean | cdktf.IResolvable; 
  public get sloSubjectNameIdEncrypted() {
    return this.getBooleanAttribute('slo_subject_name_id_encrypted');
  }
  public set sloSubjectNameIdEncrypted(value: boolean | cdktf.IResolvable) {
    this._sloSubjectNameIdEncrypted = value;
  }
  public resetSloSubjectNameIdEncrypted() {
    this._sloSubjectNameIdEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloSubjectNameIdEncryptedInput() {
    return this._sloSubjectNameIdEncrypted;
  }
}
export interface IdpSpConnectionSpBrowserSsoMessageCustomizations {
  /**
  * The context in which the customization will be applied. Depending on the connection type and protocol, this can either be `assertion`, `authn-response` or `authn-request`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#context_name IdpSpConnection#context_name}
  */
  readonly contextName?: string;
  /**
  * The OGNL expression that will be executed. Refer to the Admin Manual for a list of variables provided by PingFederate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#message_expression IdpSpConnection#message_expression}
  */
  readonly messageExpression?: string;
}

export function idpSpConnectionSpBrowserSsoMessageCustomizationsToTerraform(struct?: IdpSpConnectionSpBrowserSsoMessageCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_name: cdktf.stringToTerraform(struct!.contextName),
    message_expression: cdktf.stringToTerraform(struct!.messageExpression),
  }
}


export function idpSpConnectionSpBrowserSsoMessageCustomizationsToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoMessageCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expression: {
      value: cdktf.stringToHclTerraform(struct!.messageExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoMessageCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._messageExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpression = this._messageExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoMessageCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextName = undefined;
      this._messageExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextName = value.contextName;
      this._messageExpression = value.messageExpression;
    }
  }

  // context_name - computed: true, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // message_expression - computed: true, optional: true, required: false
  private _messageExpression?: string; 
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
  public set messageExpression(value: string) {
    this._messageExpression = value;
  }
  public resetMessageExpression() {
    this._messageExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpressionInput() {
    return this._messageExpression;
  }
}

export class IdpSpConnectionSpBrowserSsoMessageCustomizationsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoMessageCustomizations[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference {
    return new IdpSpConnectionSpBrowserSsoMessageCustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoSloServiceEndpoints {
  /**
  * The binding of this endpoint, if applicable - usually only required for SAML 2.0 endpoints. Options are `ARTIFACT`, `POST`, `REDIRECT`, `SOAP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binding IdpSpConnection#binding}
  */
  readonly binding?: string;
  /**
  * The absolute or relative URL to which logout responses are sent. A relative URL can be specified if a base URL for the connection has been defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#response_url IdpSpConnection#response_url}
  */
  readonly responseUrl?: string;
  /**
  * The absolute or relative URL of the endpoint. A relative URL can be specified if a base URL for the connection has been defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#url IdpSpConnection#url}
  */
  readonly url: string;
}

export function idpSpConnectionSpBrowserSsoSloServiceEndpointsToTerraform(struct?: IdpSpConnectionSpBrowserSsoSloServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    response_url: cdktf.stringToTerraform(struct!.responseUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function idpSpConnectionSpBrowserSsoSloServiceEndpointsToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoSloServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_url: {
      value: cdktf.stringToHclTerraform(struct!.responseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoSloServiceEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._responseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUrl = this._responseUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoSloServiceEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._responseUrl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._responseUrl = value.responseUrl;
      this._url = value.url;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // response_url - computed: true, optional: true, required: false
  private _responseUrl?: string; 
  public get responseUrl() {
    return this.getStringAttribute('response_url');
  }
  public set responseUrl(value: string) {
    this._responseUrl = value;
  }
  public resetResponseUrl() {
    this._responseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUrlInput() {
    return this._responseUrl;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class IdpSpConnectionSpBrowserSsoSloServiceEndpointsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoSloServiceEndpoints[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference {
    return new IdpSpConnectionSpBrowserSsoSloServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoSsoServiceEndpoints {
  /**
  * The binding of this endpoint, if applicable - usually only required for SAML 2.0 endpoints. Options are `ARTIFACT`, `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binding IdpSpConnection#binding}
  */
  readonly binding?: string;
  /**
  * The priority of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#index IdpSpConnection#index}
  */
  readonly index?: number;
  /**
  * Whether or not this endpoint is the default endpoint. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#is_default IdpSpConnection#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The absolute or relative URL of the endpoint. A relative URL can be specified if a base URL for the connection has been defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#url IdpSpConnection#url}
  */
  readonly url: string;
}

export function idpSpConnectionSpBrowserSsoSsoServiceEndpointsToTerraform(struct?: IdpSpConnectionSpBrowserSsoSsoServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    index: cdktf.numberToTerraform(struct!.index),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function idpSpConnectionSpBrowserSsoSsoServiceEndpointsToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoSsoServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoSsoServiceEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoSsoServiceEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._index = undefined;
      this._isDefault = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._index = value.index;
      this._isDefault = value.isDefault;
      this._url = value.url;
    }
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class IdpSpConnectionSpBrowserSsoSsoServiceEndpointsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoSsoServiceEndpoints[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference {
    return new IdpSpConnectionSpBrowserSsoSsoServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSsoUrlWhitelistEntries {
  /**
  * Allow Any Query/Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#allow_query_and_fragment IdpSpConnection#allow_query_and_fragment}
  */
  readonly allowQueryAndFragment?: boolean | cdktf.IResolvable;
  /**
  * Require HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#require_https IdpSpConnection#require_https}
  */
  readonly requireHttps?: boolean | cdktf.IResolvable;
  /**
  * Valid Domain Name (leading wildcard '*.' allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#valid_domain IdpSpConnection#valid_domain}
  */
  readonly validDomain?: string;
  /**
  * Valid Path (leave undefined to allow any path)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#valid_path IdpSpConnection#valid_path}
  */
  readonly validPath?: string;
}

export function idpSpConnectionSpBrowserSsoUrlWhitelistEntriesToTerraform(struct?: IdpSpConnectionSpBrowserSsoUrlWhitelistEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_query_and_fragment: cdktf.booleanToTerraform(struct!.allowQueryAndFragment),
    require_https: cdktf.booleanToTerraform(struct!.requireHttps),
    valid_domain: cdktf.stringToTerraform(struct!.validDomain),
    valid_path: cdktf.stringToTerraform(struct!.validPath),
  }
}


export function idpSpConnectionSpBrowserSsoUrlWhitelistEntriesToHclTerraform(struct?: IdpSpConnectionSpBrowserSsoUrlWhitelistEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_query_and_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.allowQueryAndFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_https: {
      value: cdktf.booleanToHclTerraform(struct!.requireHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_domain: {
      value: cdktf.stringToHclTerraform(struct!.validDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_path: {
      value: cdktf.stringToHclTerraform(struct!.validPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionSpBrowserSsoUrlWhitelistEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowQueryAndFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQueryAndFragment = this._allowQueryAndFragment;
    }
    if (this._requireHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHttps = this._requireHttps;
    }
    if (this._validDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.validDomain = this._validDomain;
    }
    if (this._validPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.validPath = this._validPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSsoUrlWhitelistEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = undefined;
      this._requireHttps = undefined;
      this._validDomain = undefined;
      this._validPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = value.allowQueryAndFragment;
      this._requireHttps = value.requireHttps;
      this._validDomain = value.validDomain;
      this._validPath = value.validPath;
    }
  }

  // allow_query_and_fragment - computed: false, optional: true, required: false
  private _allowQueryAndFragment?: boolean | cdktf.IResolvable; 
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }
  public set allowQueryAndFragment(value: boolean | cdktf.IResolvable) {
    this._allowQueryAndFragment = value;
  }
  public resetAllowQueryAndFragment() {
    this._allowQueryAndFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryAndFragmentInput() {
    return this._allowQueryAndFragment;
  }

  // require_https - computed: false, optional: true, required: false
  private _requireHttps?: boolean | cdktf.IResolvable; 
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }
  public set requireHttps(value: boolean | cdktf.IResolvable) {
    this._requireHttps = value;
  }
  public resetRequireHttps() {
    this._requireHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHttpsInput() {
    return this._requireHttps;
  }

  // valid_domain - computed: false, optional: true, required: false
  private _validDomain?: string; 
  public get validDomain() {
    return this.getStringAttribute('valid_domain');
  }
  public set validDomain(value: string) {
    this._validDomain = value;
  }
  public resetValidDomain() {
    this._validDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDomainInput() {
    return this._validDomain;
  }

  // valid_path - computed: false, optional: true, required: false
  private _validPath?: string; 
  public get validPath() {
    return this.getStringAttribute('valid_path');
  }
  public set validPath(value: string) {
    this._validPath = value;
  }
  public resetValidPath() {
    this._validPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPathInput() {
    return this._validPath;
  }
}

export class IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionSpBrowserSsoUrlWhitelistEntries[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference {
    return new IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionSpBrowserSso {
  /**
  * A list of adapters that map to outgoing assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#adapter_mappings IdpSpConnection#adapter_mappings}
  */
  readonly adapterMappings: IdpSpConnectionSpBrowserSsoAdapterMappings[] | cdktf.IResolvable;
  /**
  * Specify to always sign the SAML ArtifactResponse. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#always_sign_artifact_response IdpSpConnection#always_sign_artifact_response}
  */
  readonly alwaysSignArtifactResponse?: boolean | cdktf.IResolvable;
  /**
  * The settings for an Artifact binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#artifact IdpSpConnection#artifact}
  */
  readonly artifact?: IdpSpConnectionSpBrowserSsoArtifact;
  /**
  * The timeframe of validity before and after the issuance of the assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#assertion_lifetime IdpSpConnection#assertion_lifetime}
  */
  readonly assertionLifetime: IdpSpConnectionSpBrowserSsoAssertionLifetime;
  /**
  * A set of user attributes that the IdP sends in the SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract IdpSpConnection#attribute_contract}
  */
  readonly attributeContract: IdpSpConnectionSpBrowserSsoAttributeContract;
  /**
  * A list of authentication policy contracts that map to outgoing assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#authentication_policy_contract_assertion_mappings IdpSpConnection#authentication_policy_contract_assertion_mappings}
  */
  readonly authenticationPolicyContractAssertionMappings?: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings[] | cdktf.IResolvable;
  /**
  * Default Target URL for SAML1.x connections. This default URL represents the destination on the SP where the user will be directed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#default_target_url IdpSpConnection#default_target_url}
  */
  readonly defaultTargetUrl?: string;
  /**
  * The profiles that are enabled for browser-based SSO. SAML 2.0 supports all profiles whereas SAML 1.x IdP connections support both IdP and SP (non-standard) initiated SSO. This is required for SAMLx.x Connections. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#enabled_profiles IdpSpConnection#enabled_profiles}
  */
  readonly enabledProfiles?: string[];
  /**
  * Defines what to encrypt in the browser-based SSO profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#encryption_policy IdpSpConnection#encryption_policy}
  */
  readonly encryptionPolicy?: IdpSpConnectionSpBrowserSsoEncryptionPolicy;
  /**
  * The SAML bindings that are enabled for browser-based SSO. This is required for SAML 2.0 connections when the enabled profiles contain the SP-initiated SSO profile or either SLO profile. For SAML 1.x based connections, it is not used for SP Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#incoming_bindings IdpSpConnection#incoming_bindings}
  */
  readonly incomingBindings?: string[];
  /**
  * The message customizations for browser-based SSO. Depending on server settings, connection type, and protocol this may or may not be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#message_customizations IdpSpConnection#message_customizations}
  */
  readonly messageCustomizations?: IdpSpConnectionSpBrowserSsoMessageCustomizations[] | cdktf.IResolvable;
  /**
  * The browser-based SSO protocol to use. Options are `SAML20`, `WSFED`, `SAML11`, `SAML10`, `OIDC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#protocol IdpSpConnection#protocol}
  */
  readonly protocol: string;
  /**
  * Require AuthN requests to be signed when received via the POST or Redirect bindings. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#require_signed_authn_requests IdpSpConnection#require_signed_authn_requests}
  */
  readonly requireSignedAuthnRequests?: boolean | cdktf.IResolvable;
  /**
  * Always sign the SAML Assertion. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sign_assertions IdpSpConnection#sign_assertions}
  */
  readonly signAssertions?: boolean | cdktf.IResolvable;
  /**
  * Sign SAML Response as required by the associated binding and encryption policy. Applicable to SAML2.0 only and is defaulted to `true`. It can be set to `false` only on SAML2.0 connections when `sign_assertions` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sign_response_as_required IdpSpConnection#sign_response_as_required}
  */
  readonly signResponseAsRequired?: boolean | cdktf.IResolvable;
  /**
  * A list of possible endpoints to send SLO requests and responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#slo_service_endpoints IdpSpConnection#slo_service_endpoints}
  */
  readonly sloServiceEndpoints?: IdpSpConnectionSpBrowserSsoSloServiceEndpoints[] | cdktf.IResolvable;
  /**
  * Process in which users authenticated by the IdP are associated with user accounts local to the SP. Options are `PSEUDONYM`, `STANDARD`, `TRANSIENT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sp_saml_identity_mapping IdpSpConnection#sp_saml_identity_mapping}
  */
  readonly spSamlIdentityMapping?: string;
  /**
  * Process in which users authenticated by the IdP are associated with user accounts local to the SP for WS-Federation connection types. Options are `EMAIL_ADDRESS`, `USER_PRINCIPLE_NAME`, `COMMON_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sp_ws_fed_identity_mapping IdpSpConnection#sp_ws_fed_identity_mapping}
  */
  readonly spWsFedIdentityMapping?: string;
  /**
  * A list of possible endpoints to send assertions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#sso_service_endpoints IdpSpConnection#sso_service_endpoints}
  */
  readonly ssoServiceEndpoints: IdpSpConnectionSpBrowserSsoSsoServiceEndpoints[] | cdktf.IResolvable;
  /**
  * For WS-Federation connections, a whitelist of additional allowed domains and paths used to validate wreply for SLO, if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#url_whitelist_entries IdpSpConnection#url_whitelist_entries}
  */
  readonly urlWhitelistEntries?: IdpSpConnectionSpBrowserSsoUrlWhitelistEntries[] | cdktf.IResolvable;
  /**
  * The WS-Federation Token Type to use. Options are `SAML11`, `SAML20`, `JWT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#ws_fed_token_type IdpSpConnection#ws_fed_token_type}
  */
  readonly wsFedTokenType?: string;
  /**
  * The WS-Trust version for a WS-Federation connection. The default version is `WSTRUST12`. Options are `WSTRUST12`, `WSTRUST13`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#ws_trust_version IdpSpConnection#ws_trust_version}
  */
  readonly wsTrustVersion?: string;
}

export function idpSpConnectionSpBrowserSsoToTerraform(struct?: IdpSpConnectionSpBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_mappings: cdktf.listMapper(idpSpConnectionSpBrowserSsoAdapterMappingsToTerraform, false)(struct!.adapterMappings),
    always_sign_artifact_response: cdktf.booleanToTerraform(struct!.alwaysSignArtifactResponse),
    artifact: idpSpConnectionSpBrowserSsoArtifactToTerraform(struct!.artifact),
    assertion_lifetime: idpSpConnectionSpBrowserSsoAssertionLifetimeToTerraform(struct!.assertionLifetime),
    attribute_contract: idpSpConnectionSpBrowserSsoAttributeContractToTerraform(struct!.attributeContract),
    authentication_policy_contract_assertion_mappings: cdktf.listMapper(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToTerraform, false)(struct!.authenticationPolicyContractAssertionMappings),
    default_target_url: cdktf.stringToTerraform(struct!.defaultTargetUrl),
    enabled_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledProfiles),
    encryption_policy: idpSpConnectionSpBrowserSsoEncryptionPolicyToTerraform(struct!.encryptionPolicy),
    incoming_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incomingBindings),
    message_customizations: cdktf.listMapper(idpSpConnectionSpBrowserSsoMessageCustomizationsToTerraform, false)(struct!.messageCustomizations),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    require_signed_authn_requests: cdktf.booleanToTerraform(struct!.requireSignedAuthnRequests),
    sign_assertions: cdktf.booleanToTerraform(struct!.signAssertions),
    sign_response_as_required: cdktf.booleanToTerraform(struct!.signResponseAsRequired),
    slo_service_endpoints: cdktf.listMapper(idpSpConnectionSpBrowserSsoSloServiceEndpointsToTerraform, false)(struct!.sloServiceEndpoints),
    sp_saml_identity_mapping: cdktf.stringToTerraform(struct!.spSamlIdentityMapping),
    sp_ws_fed_identity_mapping: cdktf.stringToTerraform(struct!.spWsFedIdentityMapping),
    sso_service_endpoints: cdktf.listMapper(idpSpConnectionSpBrowserSsoSsoServiceEndpointsToTerraform, false)(struct!.ssoServiceEndpoints),
    url_whitelist_entries: cdktf.listMapper(idpSpConnectionSpBrowserSsoUrlWhitelistEntriesToTerraform, false)(struct!.urlWhitelistEntries),
    ws_fed_token_type: cdktf.stringToTerraform(struct!.wsFedTokenType),
    ws_trust_version: cdktf.stringToTerraform(struct!.wsTrustVersion),
  }
}


export function idpSpConnectionSpBrowserSsoToHclTerraform(struct?: IdpSpConnectionSpBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_mappings: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoAdapterMappingsToHclTerraform, false)(struct!.adapterMappings),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoAdapterMappingsList",
    },
    always_sign_artifact_response: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysSignArtifactResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    artifact: {
      value: idpSpConnectionSpBrowserSsoArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoArtifact",
    },
    assertion_lifetime: {
      value: idpSpConnectionSpBrowserSsoAssertionLifetimeToHclTerraform(struct!.assertionLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAssertionLifetime",
    },
    attribute_contract: {
      value: idpSpConnectionSpBrowserSsoAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoAttributeContract",
    },
    authentication_policy_contract_assertion_mappings: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsToHclTerraform, false)(struct!.authenticationPolicyContractAssertionMappings),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsList",
    },
    default_target_url: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledProfiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    encryption_policy: {
      value: idpSpConnectionSpBrowserSsoEncryptionPolicyToHclTerraform(struct!.encryptionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionSpBrowserSsoEncryptionPolicy",
    },
    incoming_bindings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incomingBindings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    message_customizations: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoMessageCustomizationsToHclTerraform, false)(struct!.messageCustomizations),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoMessageCustomizationsList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_signed_authn_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedAuthnRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_assertions: {
      value: cdktf.booleanToHclTerraform(struct!.signAssertions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_response_as_required: {
      value: cdktf.booleanToHclTerraform(struct!.signResponseAsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slo_service_endpoints: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoSloServiceEndpointsToHclTerraform, false)(struct!.sloServiceEndpoints),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoSloServiceEndpointsList",
    },
    sp_saml_identity_mapping: {
      value: cdktf.stringToHclTerraform(struct!.spSamlIdentityMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_ws_fed_identity_mapping: {
      value: cdktf.stringToHclTerraform(struct!.spWsFedIdentityMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_service_endpoints: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoSsoServiceEndpointsToHclTerraform, false)(struct!.ssoServiceEndpoints),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoSsoServiceEndpointsList",
    },
    url_whitelist_entries: {
      value: cdktf.listMapperHcl(idpSpConnectionSpBrowserSsoUrlWhitelistEntriesToHclTerraform, false)(struct!.urlWhitelistEntries),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesList",
    },
    ws_fed_token_type: {
      value: cdktf.stringToHclTerraform(struct!.wsFedTokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ws_trust_version: {
      value: cdktf.stringToHclTerraform(struct!.wsTrustVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionSpBrowserSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionSpBrowserSso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterMappings = this._adapterMappings?.internalValue;
    }
    if (this._alwaysSignArtifactResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysSignArtifactResponse = this._alwaysSignArtifactResponse;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._assertionLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionLifetime = this._assertionLifetime?.internalValue;
    }
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._authenticationPolicyContractAssertionMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPolicyContractAssertionMappings = this._authenticationPolicyContractAssertionMappings?.internalValue;
    }
    if (this._defaultTargetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetUrl = this._defaultTargetUrl;
    }
    if (this._enabledProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProfiles = this._enabledProfiles;
    }
    if (this._encryptionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionPolicy = this._encryptionPolicy?.internalValue;
    }
    if (this._incomingBindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingBindings = this._incomingBindings;
    }
    if (this._messageCustomizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCustomizations = this._messageCustomizations?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requireSignedAuthnRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedAuthnRequests = this._requireSignedAuthnRequests;
    }
    if (this._signAssertions !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAssertions = this._signAssertions;
    }
    if (this._signResponseAsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.signResponseAsRequired = this._signResponseAsRequired;
    }
    if (this._sloServiceEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloServiceEndpoints = this._sloServiceEndpoints?.internalValue;
    }
    if (this._spSamlIdentityMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSamlIdentityMapping = this._spSamlIdentityMapping;
    }
    if (this._spWsFedIdentityMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.spWsFedIdentityMapping = this._spWsFedIdentityMapping;
    }
    if (this._ssoServiceEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoServiceEndpoints = this._ssoServiceEndpoints?.internalValue;
    }
    if (this._urlWhitelistEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlWhitelistEntries = this._urlWhitelistEntries?.internalValue;
    }
    if (this._wsFedTokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsFedTokenType = this._wsFedTokenType;
    }
    if (this._wsTrustVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsTrustVersion = this._wsTrustVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionSpBrowserSso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterMappings.internalValue = undefined;
      this._alwaysSignArtifactResponse = undefined;
      this._artifact.internalValue = undefined;
      this._assertionLifetime.internalValue = undefined;
      this._attributeContract.internalValue = undefined;
      this._authenticationPolicyContractAssertionMappings.internalValue = undefined;
      this._defaultTargetUrl = undefined;
      this._enabledProfiles = undefined;
      this._encryptionPolicy.internalValue = undefined;
      this._incomingBindings = undefined;
      this._messageCustomizations.internalValue = undefined;
      this._protocol = undefined;
      this._requireSignedAuthnRequests = undefined;
      this._signAssertions = undefined;
      this._signResponseAsRequired = undefined;
      this._sloServiceEndpoints.internalValue = undefined;
      this._spSamlIdentityMapping = undefined;
      this._spWsFedIdentityMapping = undefined;
      this._ssoServiceEndpoints.internalValue = undefined;
      this._urlWhitelistEntries.internalValue = undefined;
      this._wsFedTokenType = undefined;
      this._wsTrustVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterMappings.internalValue = value.adapterMappings;
      this._alwaysSignArtifactResponse = value.alwaysSignArtifactResponse;
      this._artifact.internalValue = value.artifact;
      this._assertionLifetime.internalValue = value.assertionLifetime;
      this._attributeContract.internalValue = value.attributeContract;
      this._authenticationPolicyContractAssertionMappings.internalValue = value.authenticationPolicyContractAssertionMappings;
      this._defaultTargetUrl = value.defaultTargetUrl;
      this._enabledProfiles = value.enabledProfiles;
      this._encryptionPolicy.internalValue = value.encryptionPolicy;
      this._incomingBindings = value.incomingBindings;
      this._messageCustomizations.internalValue = value.messageCustomizations;
      this._protocol = value.protocol;
      this._requireSignedAuthnRequests = value.requireSignedAuthnRequests;
      this._signAssertions = value.signAssertions;
      this._signResponseAsRequired = value.signResponseAsRequired;
      this._sloServiceEndpoints.internalValue = value.sloServiceEndpoints;
      this._spSamlIdentityMapping = value.spSamlIdentityMapping;
      this._spWsFedIdentityMapping = value.spWsFedIdentityMapping;
      this._ssoServiceEndpoints.internalValue = value.ssoServiceEndpoints;
      this._urlWhitelistEntries.internalValue = value.urlWhitelistEntries;
      this._wsFedTokenType = value.wsFedTokenType;
      this._wsTrustVersion = value.wsTrustVersion;
    }
  }

  // adapter_mappings - computed: false, optional: false, required: true
  private _adapterMappings = new IdpSpConnectionSpBrowserSsoAdapterMappingsList(this, "adapter_mappings", true);
  public get adapterMappings() {
    return this._adapterMappings;
  }
  public putAdapterMappings(value: IdpSpConnectionSpBrowserSsoAdapterMappings[] | cdktf.IResolvable) {
    this._adapterMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterMappingsInput() {
    return this._adapterMappings.internalValue;
  }

  // always_sign_artifact_response - computed: true, optional: true, required: false
  private _alwaysSignArtifactResponse?: boolean | cdktf.IResolvable; 
  public get alwaysSignArtifactResponse() {
    return this.getBooleanAttribute('always_sign_artifact_response');
  }
  public set alwaysSignArtifactResponse(value: boolean | cdktf.IResolvable) {
    this._alwaysSignArtifactResponse = value;
  }
  public resetAlwaysSignArtifactResponse() {
    this._alwaysSignArtifactResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSignArtifactResponseInput() {
    return this._alwaysSignArtifactResponse;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new IdpSpConnectionSpBrowserSsoArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: IdpSpConnectionSpBrowserSsoArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // assertion_lifetime - computed: false, optional: false, required: true
  private _assertionLifetime = new IdpSpConnectionSpBrowserSsoAssertionLifetimeOutputReference(this, "assertion_lifetime");
  public get assertionLifetime() {
    return this._assertionLifetime;
  }
  public putAssertionLifetime(value: IdpSpConnectionSpBrowserSsoAssertionLifetime) {
    this._assertionLifetime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionLifetimeInput() {
    return this._assertionLifetime.internalValue;
  }

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new IdpSpConnectionSpBrowserSsoAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: IdpSpConnectionSpBrowserSsoAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // authentication_policy_contract_assertion_mappings - computed: true, optional: true, required: false
  private _authenticationPolicyContractAssertionMappings = new IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsList(this, "authentication_policy_contract_assertion_mappings", true);
  public get authenticationPolicyContractAssertionMappings() {
    return this._authenticationPolicyContractAssertionMappings;
  }
  public putAuthenticationPolicyContractAssertionMappings(value: IdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappings[] | cdktf.IResolvable) {
    this._authenticationPolicyContractAssertionMappings.internalValue = value;
  }
  public resetAuthenticationPolicyContractAssertionMappings() {
    this._authenticationPolicyContractAssertionMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyContractAssertionMappingsInput() {
    return this._authenticationPolicyContractAssertionMappings.internalValue;
  }

  // default_target_url - computed: false, optional: true, required: false
  private _defaultTargetUrl?: string; 
  public get defaultTargetUrl() {
    return this.getStringAttribute('default_target_url');
  }
  public set defaultTargetUrl(value: string) {
    this._defaultTargetUrl = value;
  }
  public resetDefaultTargetUrl() {
    this._defaultTargetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetUrlInput() {
    return this._defaultTargetUrl;
  }

  // enabled_profiles - computed: false, optional: true, required: false
  private _enabledProfiles?: string[]; 
  public get enabledProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_profiles'));
  }
  public set enabledProfiles(value: string[]) {
    this._enabledProfiles = value;
  }
  public resetEnabledProfiles() {
    this._enabledProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProfilesInput() {
    return this._enabledProfiles;
  }

  // encryption_policy - computed: false, optional: true, required: false
  private _encryptionPolicy = new IdpSpConnectionSpBrowserSsoEncryptionPolicyOutputReference(this, "encryption_policy");
  public get encryptionPolicy() {
    return this._encryptionPolicy;
  }
  public putEncryptionPolicy(value: IdpSpConnectionSpBrowserSsoEncryptionPolicy) {
    this._encryptionPolicy.internalValue = value;
  }
  public resetEncryptionPolicy() {
    this._encryptionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPolicyInput() {
    return this._encryptionPolicy.internalValue;
  }

  // incoming_bindings - computed: false, optional: true, required: false
  private _incomingBindings?: string[]; 
  public get incomingBindings() {
    return cdktf.Fn.tolist(this.getListAttribute('incoming_bindings'));
  }
  public set incomingBindings(value: string[]) {
    this._incomingBindings = value;
  }
  public resetIncomingBindings() {
    this._incomingBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingBindingsInput() {
    return this._incomingBindings;
  }

  // message_customizations - computed: true, optional: true, required: false
  private _messageCustomizations = new IdpSpConnectionSpBrowserSsoMessageCustomizationsList(this, "message_customizations", true);
  public get messageCustomizations() {
    return this._messageCustomizations;
  }
  public putMessageCustomizations(value: IdpSpConnectionSpBrowserSsoMessageCustomizations[] | cdktf.IResolvable) {
    this._messageCustomizations.internalValue = value;
  }
  public resetMessageCustomizations() {
    this._messageCustomizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCustomizationsInput() {
    return this._messageCustomizations.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // require_signed_authn_requests - computed: true, optional: true, required: false
  private _requireSignedAuthnRequests?: boolean | cdktf.IResolvable; 
  public get requireSignedAuthnRequests() {
    return this.getBooleanAttribute('require_signed_authn_requests');
  }
  public set requireSignedAuthnRequests(value: boolean | cdktf.IResolvable) {
    this._requireSignedAuthnRequests = value;
  }
  public resetRequireSignedAuthnRequests() {
    this._requireSignedAuthnRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedAuthnRequestsInput() {
    return this._requireSignedAuthnRequests;
  }

  // sign_assertions - computed: true, optional: true, required: false
  private _signAssertions?: boolean | cdktf.IResolvable; 
  public get signAssertions() {
    return this.getBooleanAttribute('sign_assertions');
  }
  public set signAssertions(value: boolean | cdktf.IResolvable) {
    this._signAssertions = value;
  }
  public resetSignAssertions() {
    this._signAssertions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAssertionsInput() {
    return this._signAssertions;
  }

  // sign_response_as_required - computed: true, optional: true, required: false
  private _signResponseAsRequired?: boolean | cdktf.IResolvable; 
  public get signResponseAsRequired() {
    return this.getBooleanAttribute('sign_response_as_required');
  }
  public set signResponseAsRequired(value: boolean | cdktf.IResolvable) {
    this._signResponseAsRequired = value;
  }
  public resetSignResponseAsRequired() {
    this._signResponseAsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signResponseAsRequiredInput() {
    return this._signResponseAsRequired;
  }

  // slo_service_endpoints - computed: true, optional: true, required: false
  private _sloServiceEndpoints = new IdpSpConnectionSpBrowserSsoSloServiceEndpointsList(this, "slo_service_endpoints", true);
  public get sloServiceEndpoints() {
    return this._sloServiceEndpoints;
  }
  public putSloServiceEndpoints(value: IdpSpConnectionSpBrowserSsoSloServiceEndpoints[] | cdktf.IResolvable) {
    this._sloServiceEndpoints.internalValue = value;
  }
  public resetSloServiceEndpoints() {
    this._sloServiceEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloServiceEndpointsInput() {
    return this._sloServiceEndpoints.internalValue;
  }

  // sp_saml_identity_mapping - computed: false, optional: true, required: false
  private _spSamlIdentityMapping?: string; 
  public get spSamlIdentityMapping() {
    return this.getStringAttribute('sp_saml_identity_mapping');
  }
  public set spSamlIdentityMapping(value: string) {
    this._spSamlIdentityMapping = value;
  }
  public resetSpSamlIdentityMapping() {
    this._spSamlIdentityMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSamlIdentityMappingInput() {
    return this._spSamlIdentityMapping;
  }

  // sp_ws_fed_identity_mapping - computed: false, optional: true, required: false
  private _spWsFedIdentityMapping?: string; 
  public get spWsFedIdentityMapping() {
    return this.getStringAttribute('sp_ws_fed_identity_mapping');
  }
  public set spWsFedIdentityMapping(value: string) {
    this._spWsFedIdentityMapping = value;
  }
  public resetSpWsFedIdentityMapping() {
    this._spWsFedIdentityMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spWsFedIdentityMappingInput() {
    return this._spWsFedIdentityMapping;
  }

  // sso_application_endpoint - computed: true, optional: false, required: false
  public get ssoApplicationEndpoint() {
    return this.getStringAttribute('sso_application_endpoint');
  }

  // sso_service_endpoints - computed: false, optional: false, required: true
  private _ssoServiceEndpoints = new IdpSpConnectionSpBrowserSsoSsoServiceEndpointsList(this, "sso_service_endpoints", true);
  public get ssoServiceEndpoints() {
    return this._ssoServiceEndpoints;
  }
  public putSsoServiceEndpoints(value: IdpSpConnectionSpBrowserSsoSsoServiceEndpoints[] | cdktf.IResolvable) {
    this._ssoServiceEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoServiceEndpointsInput() {
    return this._ssoServiceEndpoints.internalValue;
  }

  // url_whitelist_entries - computed: false, optional: true, required: false
  private _urlWhitelistEntries = new IdpSpConnectionSpBrowserSsoUrlWhitelistEntriesList(this, "url_whitelist_entries", true);
  public get urlWhitelistEntries() {
    return this._urlWhitelistEntries;
  }
  public putUrlWhitelistEntries(value: IdpSpConnectionSpBrowserSsoUrlWhitelistEntries[] | cdktf.IResolvable) {
    this._urlWhitelistEntries.internalValue = value;
  }
  public resetUrlWhitelistEntries() {
    this._urlWhitelistEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlWhitelistEntriesInput() {
    return this._urlWhitelistEntries.internalValue;
  }

  // ws_fed_token_type - computed: false, optional: true, required: false
  private _wsFedTokenType?: string; 
  public get wsFedTokenType() {
    return this.getStringAttribute('ws_fed_token_type');
  }
  public set wsFedTokenType(value: string) {
    this._wsFedTokenType = value;
  }
  public resetWsFedTokenType() {
    this._wsFedTokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsFedTokenTypeInput() {
    return this._wsFedTokenType;
  }

  // ws_trust_version - computed: true, optional: true, required: false
  private _wsTrustVersion?: string; 
  public get wsTrustVersion() {
    return this.getStringAttribute('ws_trust_version');
  }
  public set wsTrustVersion(value: string) {
    this._wsTrustVersion = value;
  }
  public resetWsTrustVersion() {
    this._wsTrustVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsTrustVersionInput() {
    return this._wsTrustVersion;
  }
}
export interface IdpSpConnectionWsTrustAttributeContractCoreAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#name IdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The attribute namespace.  This is required when the Default Token Type is SAML2.0 or SAML1.1 or SAML1.1 for Office 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#namespace IdpSpConnection#namespace}
  */
  readonly namespace?: string;
}

export function idpSpConnectionWsTrustAttributeContractCoreAttributesToTerraform(struct?: IdpSpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function idpSpConnectionWsTrustAttributeContractCoreAttributesToHclTerraform(struct?: IdpSpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class IdpSpConnectionWsTrustAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference {
    return new IdpSpConnectionWsTrustAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustAttributeContractExtendedAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#name IdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The attribute namespace.  This is required when the Default Token Type is SAML2.0 or SAML1.1 or SAML1.1 for Office 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#namespace IdpSpConnection#namespace}
  */
  readonly namespace?: string;
}

export function idpSpConnectionWsTrustAttributeContractExtendedAttributesToTerraform(struct?: IdpSpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function idpSpConnectionWsTrustAttributeContractExtendedAttributesToHclTerraform(struct?: IdpSpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class IdpSpConnectionWsTrustAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference {
    return new IdpSpConnectionWsTrustAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustAttributeContract {
  /**
  * A list of read-only assertion attributes that are automatically populated by PingFederate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#core_attributes IdpSpConnection#core_attributes}
  */
  readonly coreAttributes?: IdpSpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable;
  /**
  * A list of additional attributes that are added to the outgoing assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#extended_attributes IdpSpConnection#extended_attributes}
  */
  readonly extendedAttributes?: IdpSpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function idpSpConnectionWsTrustAttributeContractToTerraform(struct?: IdpSpConnectionWsTrustAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_attributes: cdktf.listMapper(idpSpConnectionWsTrustAttributeContractCoreAttributesToTerraform, false)(struct!.coreAttributes),
    extended_attributes: cdktf.listMapper(idpSpConnectionWsTrustAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function idpSpConnectionWsTrustAttributeContractToHclTerraform(struct?: IdpSpConnectionWsTrustAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_attributes: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustAttributeContractCoreAttributesToHclTerraform, false)(struct!.coreAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustAttributeContractCoreAttributesList",
    },
    extended_attributes: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustAttributeContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreAttributes = this._coreAttributes?.internalValue;
    }
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreAttributes.internalValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreAttributes.internalValue = value.coreAttributes;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: false, optional: true, required: false
  private _coreAttributes = new IdpSpConnectionWsTrustAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }
  public putCoreAttributes(value: IdpSpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable) {
    this._coreAttributes.internalValue = value;
  }
  public resetCoreAttributes() {
    this._coreAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAttributesInput() {
    return this._coreAttributes.internalValue;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new IdpSpConnectionWsTrustAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: IdpSpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface IdpSpConnectionWsTrustMessageCustomizations {
  /**
  * The context in which the customization will be applied. Depending on the connection type and protocol, this can either be `assertion`, `authn-response` or `authn-request`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#context_name IdpSpConnection#context_name}
  */
  readonly contextName?: string;
  /**
  * The OGNL expression that will be executed. Refer to the Admin Manual for a list of variables provided by PingFederate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#message_expression IdpSpConnection#message_expression}
  */
  readonly messageExpression?: string;
}

export function idpSpConnectionWsTrustMessageCustomizationsToTerraform(struct?: IdpSpConnectionWsTrustMessageCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_name: cdktf.stringToTerraform(struct!.contextName),
    message_expression: cdktf.stringToTerraform(struct!.messageExpression),
  }
}


export function idpSpConnectionWsTrustMessageCustomizationsToHclTerraform(struct?: IdpSpConnectionWsTrustMessageCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expression: {
      value: cdktf.stringToHclTerraform(struct!.messageExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustMessageCustomizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustMessageCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._messageExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpression = this._messageExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustMessageCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextName = undefined;
      this._messageExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextName = value.contextName;
      this._messageExpression = value.messageExpression;
    }
  }

  // context_name - computed: true, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // message_expression - computed: true, optional: true, required: false
  private _messageExpression?: string; 
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
  public set messageExpression(value: string) {
    this._messageExpression = value;
  }
  public resetMessageExpression() {
    this._messageExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpressionInput() {
    return this._messageExpression;
  }
}

export class IdpSpConnectionWsTrustMessageCustomizationsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustMessageCustomizations[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustMessageCustomizationsOutputReference {
    return new IdpSpConnectionWsTrustMessageCustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustRequestContractRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionWsTrustRequestContractRefToTerraform(struct?: IdpSpConnectionWsTrustRequestContractRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustRequestContractRefToHclTerraform(struct?: IdpSpConnectionWsTrustRequestContractRef | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustRequestContractRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustRequestContractRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustRequestContractRef | cdktf.IResolvable | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#name IdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#data_store_ref IdpSpConnection#data_store_ref}
  */
  readonly dataStoreRef: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#description IdpSpConnection#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#filter_fields IdpSpConnection#filter_fields}
  */
  readonly filterFields?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef) {
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
  private _filterFields = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#column_names IdpSpConnection#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#data_store_ref IdpSpConnection#data_store_ref}
  */
  readonly dataStoreRef: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#description IdpSpConnection#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#filter IdpSpConnection#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#schema IdpSpConnection#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#table IdpSpConnection#table}
  */
  readonly table: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binary_encoding IdpSpConnection#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#base_dn IdpSpConnection#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#binary_attribute_settings IdpSpConnection#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#data_store_ref IdpSpConnection#data_store_ref}
  */
  readonly dataStoreRef: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#description IdpSpConnection#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#member_of_nested_group IdpSpConnection#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_attributes IdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_filter IdpSpConnection#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#search_scope IdpSpConnection#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _binaryAttributeSettings = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#custom_attribute_source IdpSpConnection#custom_attribute_source}
  */
  readonly customAttributeSource?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#jdbc_attribute_source IdpSpConnection#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#ldap_attribute_source IdpSpConnection#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources | cdktf.IResolvable | undefined) {
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
  private _customAttributeSource = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesCustomAttributeSource) {
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
  private _jdbcAttributeSource = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesJdbcAttributeSource) {
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
  private _ldapAttributeSource = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesLdapAttributeSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef | cdktf.IResolvable | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#id IdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#type IdpSpConnection#type}
  */
  readonly type: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_name IdpSpConnection#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#condition IdpSpConnection#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#error_result IdpSpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#source IdpSpConnection#source}
  */
  readonly source: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#value IdpSpConnection#value}
  */
  readonly value: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
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
      value: idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource",
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
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
  private _source = new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaSource) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#error_result IdpSpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#expression IdpSpConnection#expression}
  */
  readonly expression: string;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
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

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#conditional_criteria IdpSpConnection#conditional_criteria}
  */
  readonly conditionalCriteria?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#expression_criteria IdpSpConnection#expression_criteria}
  */
  readonly expressionCriteria?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria | cdktf.IResolvable | undefined) {
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
  private _conditionalCriteria = new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
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
  private _expressionCriteria = new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
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
export interface IdpSpConnectionWsTrustTokenProcessorMappings {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract_fulfillment IdpSpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_sources IdpSpConnection#attribute_sources}
  */
  readonly attributeSources?: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources[] | cdktf.IResolvable;
  /**
  * Reference to the associated token processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#idp_token_processor_ref IdpSpConnection#idp_token_processor_ref}
  */
  readonly idpTokenProcessorRef: IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#issuance_criteria IdpSpConnection#issuance_criteria}
  */
  readonly issuanceCriteria?: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria;
  /**
  * The list of virtual server IDs that this mapping is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#restricted_virtual_entity_ids IdpSpConnection#restricted_virtual_entity_ids}
  */
  readonly restrictedVirtualEntityIds?: string[];
}

export function idpSpConnectionWsTrustTokenProcessorMappingsToTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToTerraform, false)(struct!.attributeSources),
    idp_token_processor_ref: idpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToTerraform(struct!.idpTokenProcessorRef),
    issuance_criteria: idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
    restricted_virtual_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedVirtualEntityIds),
  }
}


export function idpSpConnectionWsTrustTokenProcessorMappingsToHclTerraform(struct?: IdpSpConnectionWsTrustTokenProcessorMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesList",
    },
    idp_token_processor_ref: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefToHclTerraform(struct!.idpTokenProcessorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef",
    },
    issuance_criteria: {
      value: idpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria",
    },
    restricted_virtual_entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedVirtualEntityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustTokenProcessorMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSpConnectionWsTrustTokenProcessorMappings | cdktf.IResolvable | undefined {
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
    if (this._idpTokenProcessorRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpTokenProcessorRef = this._idpTokenProcessorRef?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    if (this._restrictedVirtualEntityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedVirtualEntityIds = this._restrictedVirtualEntityIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrustTokenProcessorMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._idpTokenProcessorRef.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
      this._restrictedVirtualEntityIds = undefined;
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
      this._idpTokenProcessorRef.internalValue = value.idpTokenProcessorRef;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
      this._restrictedVirtualEntityIds = value.restrictedVirtualEntityIds;
    }
  }

  // attribute_contract_fulfillment - computed: false, optional: false, required: true
  private _attributeContractFulfillment = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: IdpSpConnectionWsTrustTokenProcessorMappingsAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // idp_token_processor_ref - computed: false, optional: false, required: true
  private _idpTokenProcessorRef = new IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRefOutputReference(this, "idp_token_processor_ref");
  public get idpTokenProcessorRef() {
    return this._idpTokenProcessorRef;
  }
  public putIdpTokenProcessorRef(value: IdpSpConnectionWsTrustTokenProcessorMappingsIdpTokenProcessorRef) {
    this._idpTokenProcessorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTokenProcessorRefInput() {
    return this._idpTokenProcessorRef.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: IdpSpConnectionWsTrustTokenProcessorMappingsIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }

  // restricted_virtual_entity_ids - computed: true, optional: true, required: false
  private _restrictedVirtualEntityIds?: string[]; 
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
  public set restrictedVirtualEntityIds(value: string[]) {
    this._restrictedVirtualEntityIds = value;
  }
  public resetRestrictedVirtualEntityIds() {
    this._restrictedVirtualEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVirtualEntityIdsInput() {
    return this._restrictedVirtualEntityIds;
  }
}

export class IdpSpConnectionWsTrustTokenProcessorMappingsList extends cdktf.ComplexList {
  public internalValue? : IdpSpConnectionWsTrustTokenProcessorMappings[] | cdktf.IResolvable

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
  public get(index: number): IdpSpConnectionWsTrustTokenProcessorMappingsOutputReference {
    return new IdpSpConnectionWsTrustTokenProcessorMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSpConnectionWsTrust {
  /**
  * If the attribute contract cannot be fulfilled using data from the Request, abort the transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#abort_if_not_fulfilled_from_request IdpSpConnection#abort_if_not_fulfilled_from_request}
  */
  readonly abortIfNotFulfilledFromRequest?: boolean | cdktf.IResolvable;
  /**
  * A set of user attributes that this server will send in the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#attribute_contract IdpSpConnection#attribute_contract}
  */
  readonly attributeContract: IdpSpConnectionWsTrustAttributeContract;
  /**
  * The default token type when a web service client (WSC) does not specify in the token request which token type the STS should issue. Options are `SAML20`, `SAML11`, `SAML11_O365`. Defaults to `SAML20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#default_token_type IdpSpConnection#default_token_type}
  */
  readonly defaultTokenType?: string;
  /**
  * When selected, the STS encrypts the SAML 2.0 assertion. Applicable only to SAML 2.0 security token.  This option does not apply to OAuth assertion profiles. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#encrypt_saml2_assertion IdpSpConnection#encrypt_saml2_assertion}
  */
  readonly encryptSaml2Assertion?: boolean | cdktf.IResolvable;
  /**
  * When selected, the STS generates a symmetric key to be used in conjunction with the "Holder of Key" (HoK) designation for the assertion's Subject Confirmation Method.  This option does not apply to OAuth assertion profiles. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#generate_key IdpSpConnection#generate_key}
  */
  readonly generateKey?: boolean | cdktf.IResolvable;
  /**
  * The message customizations for WS-Trust. Depending on server settings, connection type, and protocol this may or may not be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#message_customizations IdpSpConnection#message_customizations}
  */
  readonly messageCustomizations?: IdpSpConnectionWsTrustMessageCustomizations[] | cdktf.IResolvable;
  /**
  * The amount of time after the SAML token was issued during which it is to be considered valid. The default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#minutes_after IdpSpConnection#minutes_after}
  */
  readonly minutesAfter?: number;
  /**
  * The amount of time before the SAML token was issued during which it is to be considered valid. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#minutes_before IdpSpConnection#minutes_before}
  */
  readonly minutesBefore?: number;
  /**
  * When selected, four additional token-type requests become available. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#oauth_assertion_profiles IdpSpConnection#oauth_assertion_profiles}
  */
  readonly oauthAssertionProfiles?: boolean | cdktf.IResolvable;
  /**
  * The partner service identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#partner_service_ids IdpSpConnection#partner_service_ids}
  */
  readonly partnerServiceIds: string[];
  /**
  * Request Contract to be used to map attribute values into the security token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#request_contract_ref IdpSpConnection#request_contract_ref}
  */
  readonly requestContractRef?: IdpSpConnectionWsTrustRequestContractRef;
  /**
  * A list of token processors to validate incoming tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_sp_connection#token_processor_mappings IdpSpConnection#token_processor_mappings}
  */
  readonly tokenProcessorMappings: IdpSpConnectionWsTrustTokenProcessorMappings[] | cdktf.IResolvable;
}

export function idpSpConnectionWsTrustToTerraform(struct?: IdpSpConnectionWsTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_if_not_fulfilled_from_request: cdktf.booleanToTerraform(struct!.abortIfNotFulfilledFromRequest),
    attribute_contract: idpSpConnectionWsTrustAttributeContractToTerraform(struct!.attributeContract),
    default_token_type: cdktf.stringToTerraform(struct!.defaultTokenType),
    encrypt_saml2_assertion: cdktf.booleanToTerraform(struct!.encryptSaml2Assertion),
    generate_key: cdktf.booleanToTerraform(struct!.generateKey),
    message_customizations: cdktf.listMapper(idpSpConnectionWsTrustMessageCustomizationsToTerraform, false)(struct!.messageCustomizations),
    minutes_after: cdktf.numberToTerraform(struct!.minutesAfter),
    minutes_before: cdktf.numberToTerraform(struct!.minutesBefore),
    oauth_assertion_profiles: cdktf.booleanToTerraform(struct!.oauthAssertionProfiles),
    partner_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.partnerServiceIds),
    request_contract_ref: idpSpConnectionWsTrustRequestContractRefToTerraform(struct!.requestContractRef),
    token_processor_mappings: cdktf.listMapper(idpSpConnectionWsTrustTokenProcessorMappingsToTerraform, false)(struct!.tokenProcessorMappings),
  }
}


export function idpSpConnectionWsTrustToHclTerraform(struct?: IdpSpConnectionWsTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_if_not_fulfilled_from_request: {
      value: cdktf.booleanToHclTerraform(struct!.abortIfNotFulfilledFromRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute_contract: {
      value: idpSpConnectionWsTrustAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustAttributeContract",
    },
    default_token_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultTokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_saml2_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.encryptSaml2Assertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_key: {
      value: cdktf.booleanToHclTerraform(struct!.generateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_customizations: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustMessageCustomizationsToHclTerraform, false)(struct!.messageCustomizations),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustMessageCustomizationsList",
    },
    minutes_after: {
      value: cdktf.numberToHclTerraform(struct!.minutesAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_before: {
      value: cdktf.numberToHclTerraform(struct!.minutesBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oauth_assertion_profiles: {
      value: cdktf.booleanToHclTerraform(struct!.oauthAssertionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partner_service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.partnerServiceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    request_contract_ref: {
      value: idpSpConnectionWsTrustRequestContractRefToHclTerraform(struct!.requestContractRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpSpConnectionWsTrustRequestContractRef",
    },
    token_processor_mappings: {
      value: cdktf.listMapperHcl(idpSpConnectionWsTrustTokenProcessorMappingsToHclTerraform, false)(struct!.tokenProcessorMappings),
      isBlock: true,
      type: "set",
      storageClassType: "IdpSpConnectionWsTrustTokenProcessorMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSpConnectionWsTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpSpConnectionWsTrust | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIfNotFulfilledFromRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIfNotFulfilledFromRequest = this._abortIfNotFulfilledFromRequest;
    }
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._defaultTokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTokenType = this._defaultTokenType;
    }
    if (this._encryptSaml2Assertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptSaml2Assertion = this._encryptSaml2Assertion;
    }
    if (this._generateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateKey = this._generateKey;
    }
    if (this._messageCustomizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCustomizations = this._messageCustomizations?.internalValue;
    }
    if (this._minutesAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesAfter = this._minutesAfter;
    }
    if (this._minutesBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesBefore = this._minutesBefore;
    }
    if (this._oauthAssertionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAssertionProfiles = this._oauthAssertionProfiles;
    }
    if (this._partnerServiceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerServiceIds = this._partnerServiceIds;
    }
    if (this._requestContractRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestContractRef = this._requestContractRef?.internalValue;
    }
    if (this._tokenProcessorMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProcessorMappings = this._tokenProcessorMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSpConnectionWsTrust | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIfNotFulfilledFromRequest = undefined;
      this._attributeContract.internalValue = undefined;
      this._defaultTokenType = undefined;
      this._encryptSaml2Assertion = undefined;
      this._generateKey = undefined;
      this._messageCustomizations.internalValue = undefined;
      this._minutesAfter = undefined;
      this._minutesBefore = undefined;
      this._oauthAssertionProfiles = undefined;
      this._partnerServiceIds = undefined;
      this._requestContractRef.internalValue = undefined;
      this._tokenProcessorMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIfNotFulfilledFromRequest = value.abortIfNotFulfilledFromRequest;
      this._attributeContract.internalValue = value.attributeContract;
      this._defaultTokenType = value.defaultTokenType;
      this._encryptSaml2Assertion = value.encryptSaml2Assertion;
      this._generateKey = value.generateKey;
      this._messageCustomizations.internalValue = value.messageCustomizations;
      this._minutesAfter = value.minutesAfter;
      this._minutesBefore = value.minutesBefore;
      this._oauthAssertionProfiles = value.oauthAssertionProfiles;
      this._partnerServiceIds = value.partnerServiceIds;
      this._requestContractRef.internalValue = value.requestContractRef;
      this._tokenProcessorMappings.internalValue = value.tokenProcessorMappings;
    }
  }

  // abort_if_not_fulfilled_from_request - computed: false, optional: true, required: false
  private _abortIfNotFulfilledFromRequest?: boolean | cdktf.IResolvable; 
  public get abortIfNotFulfilledFromRequest() {
    return this.getBooleanAttribute('abort_if_not_fulfilled_from_request');
  }
  public set abortIfNotFulfilledFromRequest(value: boolean | cdktf.IResolvable) {
    this._abortIfNotFulfilledFromRequest = value;
  }
  public resetAbortIfNotFulfilledFromRequest() {
    this._abortIfNotFulfilledFromRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIfNotFulfilledFromRequestInput() {
    return this._abortIfNotFulfilledFromRequest;
  }

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new IdpSpConnectionWsTrustAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: IdpSpConnectionWsTrustAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // default_token_type - computed: true, optional: true, required: false
  private _defaultTokenType?: string; 
  public get defaultTokenType() {
    return this.getStringAttribute('default_token_type');
  }
  public set defaultTokenType(value: string) {
    this._defaultTokenType = value;
  }
  public resetDefaultTokenType() {
    this._defaultTokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenTypeInput() {
    return this._defaultTokenType;
  }

  // encrypt_saml2_assertion - computed: true, optional: true, required: false
  private _encryptSaml2Assertion?: boolean | cdktf.IResolvable; 
  public get encryptSaml2Assertion() {
    return this.getBooleanAttribute('encrypt_saml2_assertion');
  }
  public set encryptSaml2Assertion(value: boolean | cdktf.IResolvable) {
    this._encryptSaml2Assertion = value;
  }
  public resetEncryptSaml2Assertion() {
    this._encryptSaml2Assertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptSaml2AssertionInput() {
    return this._encryptSaml2Assertion;
  }

  // generate_key - computed: true, optional: true, required: false
  private _generateKey?: boolean | cdktf.IResolvable; 
  public get generateKey() {
    return this.getBooleanAttribute('generate_key');
  }
  public set generateKey(value: boolean | cdktf.IResolvable) {
    this._generateKey = value;
  }
  public resetGenerateKey() {
    this._generateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateKeyInput() {
    return this._generateKey;
  }

  // message_customizations - computed: true, optional: true, required: false
  private _messageCustomizations = new IdpSpConnectionWsTrustMessageCustomizationsList(this, "message_customizations", true);
  public get messageCustomizations() {
    return this._messageCustomizations;
  }
  public putMessageCustomizations(value: IdpSpConnectionWsTrustMessageCustomizations[] | cdktf.IResolvable) {
    this._messageCustomizations.internalValue = value;
  }
  public resetMessageCustomizations() {
    this._messageCustomizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCustomizationsInput() {
    return this._messageCustomizations.internalValue;
  }

  // minutes_after - computed: true, optional: true, required: false
  private _minutesAfter?: number; 
  public get minutesAfter() {
    return this.getNumberAttribute('minutes_after');
  }
  public set minutesAfter(value: number) {
    this._minutesAfter = value;
  }
  public resetMinutesAfter() {
    this._minutesAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesAfterInput() {
    return this._minutesAfter;
  }

  // minutes_before - computed: true, optional: true, required: false
  private _minutesBefore?: number; 
  public get minutesBefore() {
    return this.getNumberAttribute('minutes_before');
  }
  public set minutesBefore(value: number) {
    this._minutesBefore = value;
  }
  public resetMinutesBefore() {
    this._minutesBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesBeforeInput() {
    return this._minutesBefore;
  }

  // oauth_assertion_profiles - computed: true, optional: true, required: false
  private _oauthAssertionProfiles?: boolean | cdktf.IResolvable; 
  public get oauthAssertionProfiles() {
    return this.getBooleanAttribute('oauth_assertion_profiles');
  }
  public set oauthAssertionProfiles(value: boolean | cdktf.IResolvable) {
    this._oauthAssertionProfiles = value;
  }
  public resetOauthAssertionProfiles() {
    this._oauthAssertionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAssertionProfilesInput() {
    return this._oauthAssertionProfiles;
  }

  // partner_service_ids - computed: false, optional: false, required: true
  private _partnerServiceIds?: string[]; 
  public get partnerServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('partner_service_ids'));
  }
  public set partnerServiceIds(value: string[]) {
    this._partnerServiceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServiceIdsInput() {
    return this._partnerServiceIds;
  }

  // request_contract_ref - computed: false, optional: true, required: false
  private _requestContractRef = new IdpSpConnectionWsTrustRequestContractRefOutputReference(this, "request_contract_ref");
  public get requestContractRef() {
    return this._requestContractRef;
  }
  public putRequestContractRef(value: IdpSpConnectionWsTrustRequestContractRef) {
    this._requestContractRef.internalValue = value;
  }
  public resetRequestContractRef() {
    this._requestContractRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestContractRefInput() {
    return this._requestContractRef.internalValue;
  }

  // token_processor_mappings - computed: false, optional: false, required: true
  private _tokenProcessorMappings = new IdpSpConnectionWsTrustTokenProcessorMappingsList(this, "token_processor_mappings", true);
  public get tokenProcessorMappings() {
    return this._tokenProcessorMappings;
  }
  public putTokenProcessorMappings(value: IdpSpConnectionWsTrustTokenProcessorMappings[] | cdktf.IResolvable) {
    this._tokenProcessorMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProcessorMappingsInput() {
    return this._tokenProcessorMappings.internalValue;
  }
}
