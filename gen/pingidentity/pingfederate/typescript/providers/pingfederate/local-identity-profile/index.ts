// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalIdentityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The reference to the authentication policy contract to use for this local identity profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#apc_id LocalIdentityProfile#apc_id}
  */
  readonly apcId: LocalIdentityProfileApcId;
  /**
  * The attribute update policy for authentication sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#auth_source_update_policy LocalIdentityProfile#auth_source_update_policy}
  */
  readonly authSourceUpdatePolicy?: LocalIdentityProfileAuthSourceUpdatePolicy;
  /**
  * The local identity authentication sources. Sources are unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#auth_sources LocalIdentityProfile#auth_sources}
  */
  readonly authSources?: LocalIdentityProfileAuthSources[] | cdktf.IResolvable;
  /**
  * The local identity profile data store configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#data_store_config LocalIdentityProfile#data_store_config}
  */
  readonly dataStoreConfig?: LocalIdentityProfileDataStoreConfig;
  /**
  * The local identity email verification configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_config LocalIdentityProfile#email_verification_config}
  */
  readonly emailVerificationConfig?: LocalIdentityProfileEmailVerificationConfig;
  /**
  * The local identity profile field configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#field_config LocalIdentityProfile#field_config}
  */
  readonly fieldConfig?: LocalIdentityProfileFieldConfig;
  /**
  * The local identity profile name. Name is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#name LocalIdentityProfile#name}
  */
  readonly name: string;
  /**
  * The local identity profile management configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#profile_config LocalIdentityProfile#profile_config}
  */
  readonly profileConfig?: LocalIdentityProfileProfileConfig;
  /**
  * Whether the profile configuration is enabled or not. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#profile_enabled LocalIdentityProfile#profile_enabled}
  */
  readonly profileEnabled?: boolean | cdktf.IResolvable;
  /**
  * The persistent, unique ID for the local identity profile. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#profile_id LocalIdentityProfile#profile_id}
  */
  readonly profileId?: string;
  /**
  * The local identity profile registration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#registration_config LocalIdentityProfile#registration_config}
  */
  readonly registrationConfig?: LocalIdentityProfileRegistrationConfig;
  /**
  * Whether the registration configuration is enabled or not. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#registration_enabled LocalIdentityProfile#registration_enabled}
  */
  readonly registrationEnabled?: boolean | cdktf.IResolvable;
}
export interface LocalIdentityProfileApcId {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function localIdentityProfileApcIdToTerraform(struct?: LocalIdentityProfileApcId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function localIdentityProfileApcIdToHclTerraform(struct?: LocalIdentityProfileApcId | cdktf.IResolvable): any {
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

export class LocalIdentityProfileApcIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileApcId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalIdentityProfileApcId | cdktf.IResolvable | undefined) {
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
export interface LocalIdentityProfileAuthSourceUpdatePolicy {
  /**
  * Whether or not to keep attributes after user disconnects. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#retain_attributes LocalIdentityProfile#retain_attributes}
  */
  readonly retainAttributes?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to store attributes that came from authentication sources. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#store_attributes LocalIdentityProfile#store_attributes}
  */
  readonly storeAttributes?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to update attributes when users authenticate. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#update_attributes LocalIdentityProfile#update_attributes}
  */
  readonly updateAttributes?: boolean | cdktf.IResolvable;
  /**
  * The minimum number of days between updates. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#update_interval LocalIdentityProfile#update_interval}
  */
  readonly updateInterval?: number;
}

export function localIdentityProfileAuthSourceUpdatePolicyToTerraform(struct?: LocalIdentityProfileAuthSourceUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_attributes: cdktf.booleanToTerraform(struct!.retainAttributes),
    store_attributes: cdktf.booleanToTerraform(struct!.storeAttributes),
    update_attributes: cdktf.booleanToTerraform(struct!.updateAttributes),
    update_interval: cdktf.numberToTerraform(struct!.updateInterval),
  }
}


export function localIdentityProfileAuthSourceUpdatePolicyToHclTerraform(struct?: LocalIdentityProfileAuthSourceUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.retainAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.storeAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.updateAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_interval: {
      value: cdktf.numberToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileAuthSourceUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileAuthSourceUpdatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAttributes = this._retainAttributes;
    }
    if (this._storeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAttributes = this._storeAttributes;
    }
    if (this._updateAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAttributes = this._updateAttributes;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileAuthSourceUpdatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainAttributes = undefined;
      this._storeAttributes = undefined;
      this._updateAttributes = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainAttributes = value.retainAttributes;
      this._storeAttributes = value.storeAttributes;
      this._updateAttributes = value.updateAttributes;
      this._updateInterval = value.updateInterval;
    }
  }

  // retain_attributes - computed: true, optional: true, required: false
  private _retainAttributes?: boolean | cdktf.IResolvable; 
  public get retainAttributes() {
    return this.getBooleanAttribute('retain_attributes');
  }
  public set retainAttributes(value: boolean | cdktf.IResolvable) {
    this._retainAttributes = value;
  }
  public resetRetainAttributes() {
    this._retainAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAttributesInput() {
    return this._retainAttributes;
  }

  // store_attributes - computed: true, optional: true, required: false
  private _storeAttributes?: boolean | cdktf.IResolvable; 
  public get storeAttributes() {
    return this.getBooleanAttribute('store_attributes');
  }
  public set storeAttributes(value: boolean | cdktf.IResolvable) {
    this._storeAttributes = value;
  }
  public resetStoreAttributes() {
    this._storeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAttributesInput() {
    return this._storeAttributes;
  }

  // update_attributes - computed: true, optional: true, required: false
  private _updateAttributes?: boolean | cdktf.IResolvable; 
  public get updateAttributes() {
    return this.getBooleanAttribute('update_attributes');
  }
  public set updateAttributes(value: boolean | cdktf.IResolvable) {
    this._updateAttributes = value;
  }
  public resetUpdateAttributes() {
    this._updateAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAttributesInput() {
    return this._updateAttributes;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}
export interface LocalIdentityProfileAuthSources {
  /**
  * The persistent, unique ID for the local identity authentication source. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The local identity authentication source. Source is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#source LocalIdentityProfile#source}
  */
  readonly source: string;
}

export function localIdentityProfileAuthSourcesToTerraform(struct?: LocalIdentityProfileAuthSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function localIdentityProfileAuthSourcesToHclTerraform(struct?: LocalIdentityProfileAuthSources | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileAuthSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalIdentityProfileAuthSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileAuthSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._source = value.source;
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

  // source - computed: true, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class LocalIdentityProfileAuthSourcesList extends cdktf.ComplexList {
  public internalValue? : LocalIdentityProfileAuthSources[] | cdktf.IResolvable

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
  public get(index: number): LocalIdentityProfileAuthSourcesOutputReference {
    return new LocalIdentityProfileAuthSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LocalIdentityProfileDataStoreConfigDataStoreMapping {
  /**
  * The data store attribute metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#metadata LocalIdentityProfile#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The data store attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#name LocalIdentityProfile#name}
  */
  readonly name: string;
  /**
  * The data store attribute type. Supported values are `LDAP`, `PING_ONE_LDAP_GATEWAY`, `JDBC`, and `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#type LocalIdentityProfile#type}
  */
  readonly type: string;
}

export function localIdentityProfileDataStoreConfigDataStoreMappingToTerraform(struct?: LocalIdentityProfileDataStoreConfigDataStoreMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function localIdentityProfileDataStoreConfigDataStoreMappingToHclTerraform(struct?: LocalIdentityProfileDataStoreConfigDataStoreMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class LocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalIdentityProfileDataStoreConfigDataStoreMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileDataStoreConfigDataStoreMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

export class LocalIdentityProfileDataStoreConfigDataStoreMappingMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: LocalIdentityProfileDataStoreConfigDataStoreMapping } | cdktf.IResolvable

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
  public get(key: string): LocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference {
    return new LocalIdentityProfileDataStoreConfigDataStoreMappingOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface LocalIdentityProfileDataStoreConfigDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function localIdentityProfileDataStoreConfigDataStoreRefToTerraform(struct?: LocalIdentityProfileDataStoreConfigDataStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function localIdentityProfileDataStoreConfigDataStoreRefToHclTerraform(struct?: LocalIdentityProfileDataStoreConfigDataStoreRef | cdktf.IResolvable): any {
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

export class LocalIdentityProfileDataStoreConfigDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileDataStoreConfigDataStoreRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalIdentityProfileDataStoreConfigDataStoreRef | cdktf.IResolvable | undefined) {
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
export interface LocalIdentityProfileDataStoreConfig {
  /**
  * The Auxiliary Object Classes used by the new objects stored in the LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#auxiliary_object_classes LocalIdentityProfile#auxiliary_object_classes}
  */
  readonly auxiliaryObjectClasses?: string[];
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#base_dn LocalIdentityProfile#base_dn}
  */
  readonly baseDn: string;
  /**
  * The Relative DN Pattern that will be used to create objects in the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#create_pattern LocalIdentityProfile#create_pattern}
  */
  readonly createPattern?: string;
  /**
  * The data store mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#data_store_mapping LocalIdentityProfile#data_store_mapping}
  */
  readonly dataStoreMapping: { [key: string]: LocalIdentityProfileDataStoreConfigDataStoreMapping } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#data_store_ref LocalIdentityProfile#data_store_ref}
  */
  readonly dataStoreRef: LocalIdentityProfileDataStoreConfigDataStoreRef;
  /**
  * The Object Class used by the new objects stored in the LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#object_class LocalIdentityProfile#object_class}
  */
  readonly objectClass?: string;
  /**
  * The data store config type. Supported values are `LDAP`, `PING_ONE_LDAP_GATEWAY`, `JDBC`, and `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#type LocalIdentityProfile#type}
  */
  readonly type: string;
}

export function localIdentityProfileDataStoreConfigToTerraform(struct?: LocalIdentityProfileDataStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auxiliary_object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.auxiliaryObjectClasses),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    create_pattern: cdktf.stringToTerraform(struct!.createPattern),
    data_store_mapping: cdktf.hashMapper(localIdentityProfileDataStoreConfigDataStoreMappingToTerraform)(struct!.dataStoreMapping),
    data_store_ref: localIdentityProfileDataStoreConfigDataStoreRefToTerraform(struct!.dataStoreRef),
    object_class: cdktf.stringToTerraform(struct!.objectClass),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function localIdentityProfileDataStoreConfigToHclTerraform(struct?: LocalIdentityProfileDataStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auxiliary_object_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.auxiliaryObjectClasses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_pattern: {
      value: cdktf.stringToHclTerraform(struct!.createPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_mapping: {
      value: cdktf.hashMapperHcl(localIdentityProfileDataStoreConfigDataStoreMappingToHclTerraform)(struct!.dataStoreMapping),
      isBlock: true,
      type: "map",
      storageClassType: "LocalIdentityProfileDataStoreConfigDataStoreMappingMap",
    },
    data_store_ref: {
      value: localIdentityProfileDataStoreConfigDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "LocalIdentityProfileDataStoreConfigDataStoreRef",
    },
    object_class: {
      value: cdktf.stringToHclTerraform(struct!.objectClass),
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

export class LocalIdentityProfileDataStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileDataStoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auxiliaryObjectClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryObjectClasses = this._auxiliaryObjectClasses;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._createPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPattern = this._createPattern;
    }
    if (this._dataStoreMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreMapping = this._dataStoreMapping?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._objectClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectClass = this._objectClass;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileDataStoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auxiliaryObjectClasses = undefined;
      this._baseDn = undefined;
      this._createPattern = undefined;
      this._dataStoreMapping.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._objectClass = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auxiliaryObjectClasses = value.auxiliaryObjectClasses;
      this._baseDn = value.baseDn;
      this._createPattern = value.createPattern;
      this._dataStoreMapping.internalValue = value.dataStoreMapping;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._objectClass = value.objectClass;
      this._type = value.type;
    }
  }

  // auxiliary_object_classes - computed: false, optional: true, required: false
  private _auxiliaryObjectClasses?: string[]; 
  public get auxiliaryObjectClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_object_classes'));
  }
  public set auxiliaryObjectClasses(value: string[]) {
    this._auxiliaryObjectClasses = value;
  }
  public resetAuxiliaryObjectClasses() {
    this._auxiliaryObjectClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryObjectClassesInput() {
    return this._auxiliaryObjectClasses;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // create_pattern - computed: true, optional: true, required: false
  private _createPattern?: string; 
  public get createPattern() {
    return this.getStringAttribute('create_pattern');
  }
  public set createPattern(value: string) {
    this._createPattern = value;
  }
  public resetCreatePattern() {
    this._createPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPatternInput() {
    return this._createPattern;
  }

  // data_store_mapping - computed: false, optional: false, required: true
  private _dataStoreMapping = new LocalIdentityProfileDataStoreConfigDataStoreMappingMap(this, "data_store_mapping");
  public get dataStoreMapping() {
    return this._dataStoreMapping;
  }
  public putDataStoreMapping(value: { [key: string]: LocalIdentityProfileDataStoreConfigDataStoreMapping } | cdktf.IResolvable) {
    this._dataStoreMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreMappingInput() {
    return this._dataStoreMapping.internalValue;
  }

  // data_store_ref - computed: false, optional: false, required: true
  private _dataStoreRef = new LocalIdentityProfileDataStoreConfigDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: LocalIdentityProfileDataStoreConfigDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // object_class - computed: true, optional: true, required: false
  private _objectClass?: string; 
  public get objectClass() {
    return this.getStringAttribute('object_class');
  }
  public set objectClass(value: string) {
    this._objectClass = value;
  }
  public resetObjectClass() {
    this._objectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassInput() {
    return this._objectClass;
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
export interface LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function localIdentityProfileEmailVerificationConfigNotificationPublisherRefToTerraform(struct?: LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function localIdentityProfileEmailVerificationConfigNotificationPublisherRefToHclTerraform(struct?: LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | cdktf.IResolvable): any {
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

export class LocalIdentityProfileEmailVerificationConfigNotificationPublisherRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef | cdktf.IResolvable | undefined) {
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
export interface LocalIdentityProfileEmailVerificationConfig {
  /**
  * The allowed character set used to generate the OTP. The default is `23456789BCDFGHJKMNPQRSTVWXZbcdfghjkmnpqrstvwxz`. Note: Only applicable if `email_verification_type` is `OTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#allowed_otp_character_set LocalIdentityProfile#allowed_otp_character_set}
  */
  readonly allowedOtpCharacterSet?: string;
  /**
  * Whether the email ownership verification is enabled. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_enabled LocalIdentityProfile#email_verification_enabled}
  */
  readonly emailVerificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The template name for email verification error. The default is `local.identity.email.verification.error.html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_error_template_name LocalIdentityProfile#email_verification_error_template_name}
  */
  readonly emailVerificationErrorTemplateName?: string;
  /**
  * The template name for email verification OTP verification. The default is `local.identity.email.verification.otp.html`. Note: Only applicable if `email_verification_type` is `OTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_otp_template_name LocalIdentityProfile#email_verification_otp_template_name}
  */
  readonly emailVerificationOtpTemplateName?: string;
  /**
  * The template name for email verification sent. The default is `local.identity.email.verification.sent.html`. Note:Only applicable if `email_verification_type` is `OTL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_sent_template_name LocalIdentityProfile#email_verification_sent_template_name}
  */
  readonly emailVerificationSentTemplateName?: string;
  /**
  * The template name for email verification success. The default is `local.identity.email.verification.success.html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_success_template_name LocalIdentityProfile#email_verification_success_template_name}
  */
  readonly emailVerificationSuccessTemplateName?: string;
  /**
  * Email Verification Type. Supported values are `OTP` and `OTL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#email_verification_type LocalIdentityProfile#email_verification_type}
  */
  readonly emailVerificationType?: string;
  /**
  * Field used for email ownership verification. Note: Not required when `email_verification_enabled` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#field_for_email_to_verify LocalIdentityProfile#field_for_email_to_verify}
  */
  readonly fieldForEmailToVerify?: string;
  /**
  * Field used for storing email verification status. Note: Not required when `email_verification_enabled` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#field_storing_verification_status LocalIdentityProfile#field_storing_verification_status}
  */
  readonly fieldStoringVerificationStatus?: string;
  /**
  * Reference to the associated notification publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#notification_publisher_ref LocalIdentityProfile#notification_publisher_ref}
  */
  readonly notificationPublisherRef?: LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef;
  /**
  * Field used OTL time to live. The default is `1440`. Note: Only applicable if `email_verification_type` is `OTL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#otl_time_to_live LocalIdentityProfile#otl_time_to_live}
  */
  readonly otlTimeToLive?: number;
  /**
  * The OTP length generated for email verification. The default is `8`. Note: Only applicable if `email_verification_type` is `OTP`. The value must be between `5` and `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#otp_length LocalIdentityProfile#otp_length}
  */
  readonly otpLength?: number;
  /**
  * The number of OTP retry attempts for email verification. The default is `3`. Note: Only applicable if `email_verification_type` is `OTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#otp_retry_attempts LocalIdentityProfile#otp_retry_attempts}
  */
  readonly otpRetryAttempts?: number;
  /**
  * Field used OTP time to live. The default is `15`. Note: Only applicable if `email_verification_type` is `OTP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#otp_time_to_live LocalIdentityProfile#otp_time_to_live}
  */
  readonly otpTimeToLive?: number;
  /**
  * Whether the user must verify their email address before they can complete a single sign-on transaction. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#require_verified_email LocalIdentityProfile#require_verified_email}
  */
  readonly requireVerifiedEmail?: boolean | cdktf.IResolvable;
  /**
  * The template to render when the user must verify their email address before they can complete a single sign-on transaction. The default is `local.identity.email.verification.required.html`. Note: Only applicable if `email_verification_type` is OTL and `require_verified_email` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#require_verified_email_template_name LocalIdentityProfile#require_verified_email_template_name}
  */
  readonly requireVerifiedEmailTemplateName?: string;
  /**
  * The template name for verify email. The default is `message-template-email-ownership-verification.html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#verify_email_template_name LocalIdentityProfile#verify_email_template_name}
  */
  readonly verifyEmailTemplateName?: string;
}

export function localIdentityProfileEmailVerificationConfigToTerraform(struct?: LocalIdentityProfileEmailVerificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_otp_character_set: cdktf.stringToTerraform(struct!.allowedOtpCharacterSet),
    email_verification_enabled: cdktf.booleanToTerraform(struct!.emailVerificationEnabled),
    email_verification_error_template_name: cdktf.stringToTerraform(struct!.emailVerificationErrorTemplateName),
    email_verification_otp_template_name: cdktf.stringToTerraform(struct!.emailVerificationOtpTemplateName),
    email_verification_sent_template_name: cdktf.stringToTerraform(struct!.emailVerificationSentTemplateName),
    email_verification_success_template_name: cdktf.stringToTerraform(struct!.emailVerificationSuccessTemplateName),
    email_verification_type: cdktf.stringToTerraform(struct!.emailVerificationType),
    field_for_email_to_verify: cdktf.stringToTerraform(struct!.fieldForEmailToVerify),
    field_storing_verification_status: cdktf.stringToTerraform(struct!.fieldStoringVerificationStatus),
    notification_publisher_ref: localIdentityProfileEmailVerificationConfigNotificationPublisherRefToTerraform(struct!.notificationPublisherRef),
    otl_time_to_live: cdktf.numberToTerraform(struct!.otlTimeToLive),
    otp_length: cdktf.numberToTerraform(struct!.otpLength),
    otp_retry_attempts: cdktf.numberToTerraform(struct!.otpRetryAttempts),
    otp_time_to_live: cdktf.numberToTerraform(struct!.otpTimeToLive),
    require_verified_email: cdktf.booleanToTerraform(struct!.requireVerifiedEmail),
    require_verified_email_template_name: cdktf.stringToTerraform(struct!.requireVerifiedEmailTemplateName),
    verify_email_template_name: cdktf.stringToTerraform(struct!.verifyEmailTemplateName),
  }
}


export function localIdentityProfileEmailVerificationConfigToHclTerraform(struct?: LocalIdentityProfileEmailVerificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_otp_character_set: {
      value: cdktf.stringToHclTerraform(struct!.allowedOtpCharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.emailVerificationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_verification_error_template_name: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationErrorTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_otp_template_name: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationOtpTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_sent_template_name: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationSentTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_success_template_name: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationSuccessTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_type: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_for_email_to_verify: {
      value: cdktf.stringToHclTerraform(struct!.fieldForEmailToVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_storing_verification_status: {
      value: cdktf.stringToHclTerraform(struct!.fieldStoringVerificationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_publisher_ref: {
      value: localIdentityProfileEmailVerificationConfigNotificationPublisherRefToHclTerraform(struct!.notificationPublisherRef),
      isBlock: true,
      type: "struct",
      storageClassType: "LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef",
    },
    otl_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.otlTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_length: {
      value: cdktf.numberToHclTerraform(struct!.otpLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.otpRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.otpTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_verified_email: {
      value: cdktf.booleanToHclTerraform(struct!.requireVerifiedEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_verified_email_template_name: {
      value: cdktf.stringToHclTerraform(struct!.requireVerifiedEmailTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_email_template_name: {
      value: cdktf.stringToHclTerraform(struct!.verifyEmailTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileEmailVerificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileEmailVerificationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOtpCharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOtpCharacterSet = this._allowedOtpCharacterSet;
    }
    if (this._emailVerificationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationEnabled = this._emailVerificationEnabled;
    }
    if (this._emailVerificationErrorTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationErrorTemplateName = this._emailVerificationErrorTemplateName;
    }
    if (this._emailVerificationOtpTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationOtpTemplateName = this._emailVerificationOtpTemplateName;
    }
    if (this._emailVerificationSentTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationSentTemplateName = this._emailVerificationSentTemplateName;
    }
    if (this._emailVerificationSuccessTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationSuccessTemplateName = this._emailVerificationSuccessTemplateName;
    }
    if (this._emailVerificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationType = this._emailVerificationType;
    }
    if (this._fieldForEmailToVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldForEmailToVerify = this._fieldForEmailToVerify;
    }
    if (this._fieldStoringVerificationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldStoringVerificationStatus = this._fieldStoringVerificationStatus;
    }
    if (this._notificationPublisherRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPublisherRef = this._notificationPublisherRef?.internalValue;
    }
    if (this._otlTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.otlTimeToLive = this._otlTimeToLive;
    }
    if (this._otpLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLength = this._otpLength;
    }
    if (this._otpRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpRetryAttempts = this._otpRetryAttempts;
    }
    if (this._otpTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpTimeToLive = this._otpTimeToLive;
    }
    if (this._requireVerifiedEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireVerifiedEmail = this._requireVerifiedEmail;
    }
    if (this._requireVerifiedEmailTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireVerifiedEmailTemplateName = this._requireVerifiedEmailTemplateName;
    }
    if (this._verifyEmailTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyEmailTemplateName = this._verifyEmailTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileEmailVerificationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOtpCharacterSet = undefined;
      this._emailVerificationEnabled = undefined;
      this._emailVerificationErrorTemplateName = undefined;
      this._emailVerificationOtpTemplateName = undefined;
      this._emailVerificationSentTemplateName = undefined;
      this._emailVerificationSuccessTemplateName = undefined;
      this._emailVerificationType = undefined;
      this._fieldForEmailToVerify = undefined;
      this._fieldStoringVerificationStatus = undefined;
      this._notificationPublisherRef.internalValue = undefined;
      this._otlTimeToLive = undefined;
      this._otpLength = undefined;
      this._otpRetryAttempts = undefined;
      this._otpTimeToLive = undefined;
      this._requireVerifiedEmail = undefined;
      this._requireVerifiedEmailTemplateName = undefined;
      this._verifyEmailTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOtpCharacterSet = value.allowedOtpCharacterSet;
      this._emailVerificationEnabled = value.emailVerificationEnabled;
      this._emailVerificationErrorTemplateName = value.emailVerificationErrorTemplateName;
      this._emailVerificationOtpTemplateName = value.emailVerificationOtpTemplateName;
      this._emailVerificationSentTemplateName = value.emailVerificationSentTemplateName;
      this._emailVerificationSuccessTemplateName = value.emailVerificationSuccessTemplateName;
      this._emailVerificationType = value.emailVerificationType;
      this._fieldForEmailToVerify = value.fieldForEmailToVerify;
      this._fieldStoringVerificationStatus = value.fieldStoringVerificationStatus;
      this._notificationPublisherRef.internalValue = value.notificationPublisherRef;
      this._otlTimeToLive = value.otlTimeToLive;
      this._otpLength = value.otpLength;
      this._otpRetryAttempts = value.otpRetryAttempts;
      this._otpTimeToLive = value.otpTimeToLive;
      this._requireVerifiedEmail = value.requireVerifiedEmail;
      this._requireVerifiedEmailTemplateName = value.requireVerifiedEmailTemplateName;
      this._verifyEmailTemplateName = value.verifyEmailTemplateName;
    }
  }

  // allowed_otp_character_set - computed: true, optional: true, required: false
  private _allowedOtpCharacterSet?: string; 
  public get allowedOtpCharacterSet() {
    return this.getStringAttribute('allowed_otp_character_set');
  }
  public set allowedOtpCharacterSet(value: string) {
    this._allowedOtpCharacterSet = value;
  }
  public resetAllowedOtpCharacterSet() {
    this._allowedOtpCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOtpCharacterSetInput() {
    return this._allowedOtpCharacterSet;
  }

  // email_verification_enabled - computed: true, optional: true, required: false
  private _emailVerificationEnabled?: boolean | cdktf.IResolvable; 
  public get emailVerificationEnabled() {
    return this.getBooleanAttribute('email_verification_enabled');
  }
  public set emailVerificationEnabled(value: boolean | cdktf.IResolvable) {
    this._emailVerificationEnabled = value;
  }
  public resetEmailVerificationEnabled() {
    this._emailVerificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationEnabledInput() {
    return this._emailVerificationEnabled;
  }

  // email_verification_error_template_name - computed: true, optional: true, required: false
  private _emailVerificationErrorTemplateName?: string; 
  public get emailVerificationErrorTemplateName() {
    return this.getStringAttribute('email_verification_error_template_name');
  }
  public set emailVerificationErrorTemplateName(value: string) {
    this._emailVerificationErrorTemplateName = value;
  }
  public resetEmailVerificationErrorTemplateName() {
    this._emailVerificationErrorTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationErrorTemplateNameInput() {
    return this._emailVerificationErrorTemplateName;
  }

  // email_verification_otp_template_name - computed: true, optional: true, required: false
  private _emailVerificationOtpTemplateName?: string; 
  public get emailVerificationOtpTemplateName() {
    return this.getStringAttribute('email_verification_otp_template_name');
  }
  public set emailVerificationOtpTemplateName(value: string) {
    this._emailVerificationOtpTemplateName = value;
  }
  public resetEmailVerificationOtpTemplateName() {
    this._emailVerificationOtpTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationOtpTemplateNameInput() {
    return this._emailVerificationOtpTemplateName;
  }

  // email_verification_sent_template_name - computed: true, optional: true, required: false
  private _emailVerificationSentTemplateName?: string; 
  public get emailVerificationSentTemplateName() {
    return this.getStringAttribute('email_verification_sent_template_name');
  }
  public set emailVerificationSentTemplateName(value: string) {
    this._emailVerificationSentTemplateName = value;
  }
  public resetEmailVerificationSentTemplateName() {
    this._emailVerificationSentTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationSentTemplateNameInput() {
    return this._emailVerificationSentTemplateName;
  }

  // email_verification_success_template_name - computed: true, optional: true, required: false
  private _emailVerificationSuccessTemplateName?: string; 
  public get emailVerificationSuccessTemplateName() {
    return this.getStringAttribute('email_verification_success_template_name');
  }
  public set emailVerificationSuccessTemplateName(value: string) {
    this._emailVerificationSuccessTemplateName = value;
  }
  public resetEmailVerificationSuccessTemplateName() {
    this._emailVerificationSuccessTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationSuccessTemplateNameInput() {
    return this._emailVerificationSuccessTemplateName;
  }

  // email_verification_type - computed: true, optional: true, required: false
  private _emailVerificationType?: string; 
  public get emailVerificationType() {
    return this.getStringAttribute('email_verification_type');
  }
  public set emailVerificationType(value: string) {
    this._emailVerificationType = value;
  }
  public resetEmailVerificationType() {
    this._emailVerificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationTypeInput() {
    return this._emailVerificationType;
  }

  // field_for_email_to_verify - computed: true, optional: true, required: false
  private _fieldForEmailToVerify?: string; 
  public get fieldForEmailToVerify() {
    return this.getStringAttribute('field_for_email_to_verify');
  }
  public set fieldForEmailToVerify(value: string) {
    this._fieldForEmailToVerify = value;
  }
  public resetFieldForEmailToVerify() {
    this._fieldForEmailToVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldForEmailToVerifyInput() {
    return this._fieldForEmailToVerify;
  }

  // field_storing_verification_status - computed: true, optional: true, required: false
  private _fieldStoringVerificationStatus?: string; 
  public get fieldStoringVerificationStatus() {
    return this.getStringAttribute('field_storing_verification_status');
  }
  public set fieldStoringVerificationStatus(value: string) {
    this._fieldStoringVerificationStatus = value;
  }
  public resetFieldStoringVerificationStatus() {
    this._fieldStoringVerificationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldStoringVerificationStatusInput() {
    return this._fieldStoringVerificationStatus;
  }

  // notification_publisher_ref - computed: true, optional: true, required: false
  private _notificationPublisherRef = new LocalIdentityProfileEmailVerificationConfigNotificationPublisherRefOutputReference(this, "notification_publisher_ref");
  public get notificationPublisherRef() {
    return this._notificationPublisherRef;
  }
  public putNotificationPublisherRef(value: LocalIdentityProfileEmailVerificationConfigNotificationPublisherRef) {
    this._notificationPublisherRef.internalValue = value;
  }
  public resetNotificationPublisherRef() {
    this._notificationPublisherRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPublisherRefInput() {
    return this._notificationPublisherRef.internalValue;
  }

  // otl_time_to_live - computed: true, optional: true, required: false
  private _otlTimeToLive?: number; 
  public get otlTimeToLive() {
    return this.getNumberAttribute('otl_time_to_live');
  }
  public set otlTimeToLive(value: number) {
    this._otlTimeToLive = value;
  }
  public resetOtlTimeToLive() {
    this._otlTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otlTimeToLiveInput() {
    return this._otlTimeToLive;
  }

  // otp_length - computed: true, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }

  // otp_retry_attempts - computed: true, optional: true, required: false
  private _otpRetryAttempts?: number; 
  public get otpRetryAttempts() {
    return this.getNumberAttribute('otp_retry_attempts');
  }
  public set otpRetryAttempts(value: number) {
    this._otpRetryAttempts = value;
  }
  public resetOtpRetryAttempts() {
    this._otpRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpRetryAttemptsInput() {
    return this._otpRetryAttempts;
  }

  // otp_time_to_live - computed: true, optional: true, required: false
  private _otpTimeToLive?: number; 
  public get otpTimeToLive() {
    return this.getNumberAttribute('otp_time_to_live');
  }
  public set otpTimeToLive(value: number) {
    this._otpTimeToLive = value;
  }
  public resetOtpTimeToLive() {
    this._otpTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpTimeToLiveInput() {
    return this._otpTimeToLive;
  }

  // require_verified_email - computed: true, optional: true, required: false
  private _requireVerifiedEmail?: boolean | cdktf.IResolvable; 
  public get requireVerifiedEmail() {
    return this.getBooleanAttribute('require_verified_email');
  }
  public set requireVerifiedEmail(value: boolean | cdktf.IResolvable) {
    this._requireVerifiedEmail = value;
  }
  public resetRequireVerifiedEmail() {
    this._requireVerifiedEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireVerifiedEmailInput() {
    return this._requireVerifiedEmail;
  }

  // require_verified_email_template_name - computed: true, optional: true, required: false
  private _requireVerifiedEmailTemplateName?: string; 
  public get requireVerifiedEmailTemplateName() {
    return this.getStringAttribute('require_verified_email_template_name');
  }
  public set requireVerifiedEmailTemplateName(value: string) {
    this._requireVerifiedEmailTemplateName = value;
  }
  public resetRequireVerifiedEmailTemplateName() {
    this._requireVerifiedEmailTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireVerifiedEmailTemplateNameInput() {
    return this._requireVerifiedEmailTemplateName;
  }

  // verify_email_template_name - computed: true, optional: true, required: false
  private _verifyEmailTemplateName?: string; 
  public get verifyEmailTemplateName() {
    return this.getStringAttribute('verify_email_template_name');
  }
  public set verifyEmailTemplateName(value: string) {
    this._verifyEmailTemplateName = value;
  }
  public resetVerifyEmailTemplateName() {
    this._verifyEmailTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailTemplateNameInput() {
    return this._verifyEmailTemplateName;
  }
}
export interface LocalIdentityProfileFieldConfigFields {
  /**
  * Attributes of the local identity field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#attributes LocalIdentityProfile#attributes}
  */
  readonly attributes?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * The default value for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#default_value LocalIdentityProfile#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Id of the local identity field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Label of the local identity field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#label LocalIdentityProfile#label}
  */
  readonly label: string;
  /**
  * The list of options for this selection field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#options LocalIdentityProfile#options}
  */
  readonly options?: string[];
  /**
  * Whether this is a profile page field or not. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#profile_page_field LocalIdentityProfile#profile_page_field}
  */
  readonly profilePageField?: boolean | cdktf.IResolvable;
  /**
  * Whether this is a registration page field or not. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#registration_page_field LocalIdentityProfile#registration_page_field}
  */
  readonly registrationPageField?: boolean | cdktf.IResolvable;
  /**
  * The type of the local identity field. Supported values are `CHECKBOX`, `CHECKBOX_GROUP`, `DATE`, `DROP_DOWN`, `EMAIL`, `PHONE`, `TEXT`, and `HIDDEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#type LocalIdentityProfile#type}
  */
  readonly type: string;
}

export function localIdentityProfileFieldConfigFieldsToTerraform(struct?: LocalIdentityProfileFieldConfigFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.attributes),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    profile_page_field: cdktf.booleanToTerraform(struct!.profilePageField),
    registration_page_field: cdktf.booleanToTerraform(struct!.registrationPageField),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function localIdentityProfileFieldConfigFieldsToHclTerraform(struct?: LocalIdentityProfileFieldConfigFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    profile_page_field: {
      value: cdktf.booleanToHclTerraform(struct!.profilePageField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration_page_field: {
      value: cdktf.booleanToHclTerraform(struct!.registrationPageField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class LocalIdentityProfileFieldConfigFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalIdentityProfileFieldConfigFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._profilePageField !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilePageField = this._profilePageField;
    }
    if (this._registrationPageField !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationPageField = this._registrationPageField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileFieldConfigFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._defaultValue = undefined;
      this._id = undefined;
      this._label = undefined;
      this._options = undefined;
      this._profilePageField = undefined;
      this._registrationPageField = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._defaultValue = value.defaultValue;
      this._id = value.id;
      this._label = value.label;
      this._options = value.options;
      this._profilePageField = value.profilePageField;
      this._registrationPageField = value.registrationPageField;
      this._type = value.type;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get attributes() {
    return this.getBooleanMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // profile_page_field - computed: true, optional: true, required: false
  private _profilePageField?: boolean | cdktf.IResolvable; 
  public get profilePageField() {
    return this.getBooleanAttribute('profile_page_field');
  }
  public set profilePageField(value: boolean | cdktf.IResolvable) {
    this._profilePageField = value;
  }
  public resetProfilePageField() {
    this._profilePageField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePageFieldInput() {
    return this._profilePageField;
  }

  // registration_page_field - computed: true, optional: true, required: false
  private _registrationPageField?: boolean | cdktf.IResolvable; 
  public get registrationPageField() {
    return this.getBooleanAttribute('registration_page_field');
  }
  public set registrationPageField(value: boolean | cdktf.IResolvable) {
    this._registrationPageField = value;
  }
  public resetRegistrationPageField() {
    this._registrationPageField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPageFieldInput() {
    return this._registrationPageField;
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

export class LocalIdentityProfileFieldConfigFieldsList extends cdktf.ComplexList {
  public internalValue? : LocalIdentityProfileFieldConfigFields[] | cdktf.IResolvable

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
  public get(index: number): LocalIdentityProfileFieldConfigFieldsOutputReference {
    return new LocalIdentityProfileFieldConfigFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LocalIdentityProfileFieldConfig {
  /**
  * The field configuration for the local identity profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#fields LocalIdentityProfile#fields}
  */
  readonly fields?: LocalIdentityProfileFieldConfigFields[] | cdktf.IResolvable;
  /**
  * Strip leading/trailing spaces from unique ID field. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#strip_space_from_unique_field LocalIdentityProfile#strip_space_from_unique_field}
  */
  readonly stripSpaceFromUniqueField?: boolean | cdktf.IResolvable;
}

export function localIdentityProfileFieldConfigToTerraform(struct?: LocalIdentityProfileFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(localIdentityProfileFieldConfigFieldsToTerraform, false)(struct!.fields),
    strip_space_from_unique_field: cdktf.booleanToTerraform(struct!.stripSpaceFromUniqueField),
  }
}


export function localIdentityProfileFieldConfigToHclTerraform(struct?: LocalIdentityProfileFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(localIdentityProfileFieldConfigFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "LocalIdentityProfileFieldConfigFieldsList",
    },
    strip_space_from_unique_field: {
      value: cdktf.booleanToHclTerraform(struct!.stripSpaceFromUniqueField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileFieldConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._stripSpaceFromUniqueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripSpaceFromUniqueField = this._stripSpaceFromUniqueField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileFieldConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._stripSpaceFromUniqueField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._stripSpaceFromUniqueField = value.stripSpaceFromUniqueField;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new LocalIdentityProfileFieldConfigFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: LocalIdentityProfileFieldConfigFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // strip_space_from_unique_field - computed: true, optional: true, required: false
  private _stripSpaceFromUniqueField?: boolean | cdktf.IResolvable; 
  public get stripSpaceFromUniqueField() {
    return this.getBooleanAttribute('strip_space_from_unique_field');
  }
  public set stripSpaceFromUniqueField(value: boolean | cdktf.IResolvable) {
    this._stripSpaceFromUniqueField = value;
  }
  public resetStripSpaceFromUniqueField() {
    this._stripSpaceFromUniqueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripSpaceFromUniqueFieldInput() {
    return this._stripSpaceFromUniqueField;
  }
}
export interface LocalIdentityProfileProfileConfig {
  /**
  * Whether the end user is allowed to use delete functionality. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#delete_identity_enabled LocalIdentityProfile#delete_identity_enabled}
  */
  readonly deleteIdentityEnabled?: boolean | cdktf.IResolvable;
  /**
  * The template name for end-user profile management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#template_name LocalIdentityProfile#template_name}
  */
  readonly templateName: string;
}

export function localIdentityProfileProfileConfigToTerraform(struct?: LocalIdentityProfileProfileConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_identity_enabled: cdktf.booleanToTerraform(struct!.deleteIdentityEnabled),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function localIdentityProfileProfileConfigToHclTerraform(struct?: LocalIdentityProfileProfileConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_identity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.deleteIdentityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileProfileConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteIdentityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteIdentityEnabled = this._deleteIdentityEnabled;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileProfileConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteIdentityEnabled = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteIdentityEnabled = value.deleteIdentityEnabled;
      this._templateName = value.templateName;
    }
  }

  // delete_identity_enabled - computed: true, optional: true, required: false
  private _deleteIdentityEnabled?: boolean | cdktf.IResolvable; 
  public get deleteIdentityEnabled() {
    return this.getBooleanAttribute('delete_identity_enabled');
  }
  public set deleteIdentityEnabled(value: boolean | cdktf.IResolvable) {
    this._deleteIdentityEnabled = value;
  }
  public resetDeleteIdentityEnabled() {
    this._deleteIdentityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteIdentityEnabledInput() {
    return this._deleteIdentityEnabled;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}
export interface LocalIdentityProfileRegistrationConfigCaptchaProviderRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function localIdentityProfileRegistrationConfigCaptchaProviderRefToTerraform(struct?: LocalIdentityProfileRegistrationConfigCaptchaProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function localIdentityProfileRegistrationConfigCaptchaProviderRefToHclTerraform(struct?: LocalIdentityProfileRegistrationConfigCaptchaProviderRef | cdktf.IResolvable): any {
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

export class LocalIdentityProfileRegistrationConfigCaptchaProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileRegistrationConfigCaptchaProviderRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalIdentityProfileRegistrationConfigCaptchaProviderRef | cdktf.IResolvable | undefined) {
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
export interface LocalIdentityProfileRegistrationConfigRegistrationWorkflow {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#id LocalIdentityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function localIdentityProfileRegistrationConfigRegistrationWorkflowToTerraform(struct?: LocalIdentityProfileRegistrationConfigRegistrationWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function localIdentityProfileRegistrationConfigRegistrationWorkflowToHclTerraform(struct?: LocalIdentityProfileRegistrationConfigRegistrationWorkflow | cdktf.IResolvable): any {
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

export class LocalIdentityProfileRegistrationConfigRegistrationWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileRegistrationConfigRegistrationWorkflow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LocalIdentityProfileRegistrationConfigRegistrationWorkflow | cdktf.IResolvable | undefined) {
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
export interface LocalIdentityProfileRegistrationConfig {
  /**
  * Whether CAPTCHA is enabled or not in the registration configuration. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#captcha_enabled LocalIdentityProfile#captcha_enabled}
  */
  readonly captchaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Reference to the associated CAPTCHA provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#captcha_provider_ref LocalIdentityProfile#captcha_provider_ref}
  */
  readonly captchaProviderRef?: LocalIdentityProfileRegistrationConfigCaptchaProviderRef;
  /**
  * Whether to create an Authentication Session when registering a local account. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#create_authn_session_after_registration LocalIdentityProfile#create_authn_session_after_registration}
  */
  readonly createAuthnSessionAfterRegistration?: boolean | cdktf.IResolvable;
  /**
  * This setting indicates whether PingFederate should execute the workflow before or after account creation. The default is to run the registration workflow after account creation. Supported values are `BEFORE_ACCOUNT_CREATION` and `AFTER_ACCOUNT_CREATION`. Requires that `registration_workflow` is also set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#execute_workflow LocalIdentityProfile#execute_workflow}
  */
  readonly executeWorkflow?: string;
  /**
  * The policy fragment to be executed as part of the registration workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#registration_workflow LocalIdentityProfile#registration_workflow}
  */
  readonly registrationWorkflow?: LocalIdentityProfileRegistrationConfigRegistrationWorkflow;
  /**
  * The template name for the registration configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#template_name LocalIdentityProfile#template_name}
  */
  readonly templateName: string;
  /**
  * Allows users to indicate whether their device is shared or private. In this mode, PingFederate Authentication Sessions will not be stored unless the user indicates the device is private. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#this_is_my_device_enabled LocalIdentityProfile#this_is_my_device_enabled}
  */
  readonly thisIsMyDeviceEnabled?: boolean | cdktf.IResolvable;
  /**
  * When creating an Authentication Session after registering a local account, PingFederate will pass the Unique ID field's value as the username. If the Unique ID value is not the username, then override which field's value will be used as the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#username_field LocalIdentityProfile#username_field}
  */
  readonly usernameField?: string;
}

export function localIdentityProfileRegistrationConfigToTerraform(struct?: LocalIdentityProfileRegistrationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    captcha_enabled: cdktf.booleanToTerraform(struct!.captchaEnabled),
    captcha_provider_ref: localIdentityProfileRegistrationConfigCaptchaProviderRefToTerraform(struct!.captchaProviderRef),
    create_authn_session_after_registration: cdktf.booleanToTerraform(struct!.createAuthnSessionAfterRegistration),
    execute_workflow: cdktf.stringToTerraform(struct!.executeWorkflow),
    registration_workflow: localIdentityProfileRegistrationConfigRegistrationWorkflowToTerraform(struct!.registrationWorkflow),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    this_is_my_device_enabled: cdktf.booleanToTerraform(struct!.thisIsMyDeviceEnabled),
    username_field: cdktf.stringToTerraform(struct!.usernameField),
  }
}


export function localIdentityProfileRegistrationConfigToHclTerraform(struct?: LocalIdentityProfileRegistrationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    captcha_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.captchaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_provider_ref: {
      value: localIdentityProfileRegistrationConfigCaptchaProviderRefToHclTerraform(struct!.captchaProviderRef),
      isBlock: true,
      type: "struct",
      storageClassType: "LocalIdentityProfileRegistrationConfigCaptchaProviderRef",
    },
    create_authn_session_after_registration: {
      value: cdktf.booleanToHclTerraform(struct!.createAuthnSessionAfterRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_workflow: {
      value: cdktf.stringToHclTerraform(struct!.executeWorkflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_workflow: {
      value: localIdentityProfileRegistrationConfigRegistrationWorkflowToHclTerraform(struct!.registrationWorkflow),
      isBlock: true,
      type: "struct",
      storageClassType: "LocalIdentityProfileRegistrationConfigRegistrationWorkflow",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    this_is_my_device_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.thisIsMyDeviceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username_field: {
      value: cdktf.stringToHclTerraform(struct!.usernameField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalIdentityProfileRegistrationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LocalIdentityProfileRegistrationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captchaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaEnabled = this._captchaEnabled;
    }
    if (this._captchaProviderRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaProviderRef = this._captchaProviderRef?.internalValue;
    }
    if (this._createAuthnSessionAfterRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAuthnSessionAfterRegistration = this._createAuthnSessionAfterRegistration;
    }
    if (this._executeWorkflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeWorkflow = this._executeWorkflow;
    }
    if (this._registrationWorkflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationWorkflow = this._registrationWorkflow?.internalValue;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._thisIsMyDeviceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.thisIsMyDeviceEnabled = this._thisIsMyDeviceEnabled;
    }
    if (this._usernameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameField = this._usernameField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalIdentityProfileRegistrationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captchaEnabled = undefined;
      this._captchaProviderRef.internalValue = undefined;
      this._createAuthnSessionAfterRegistration = undefined;
      this._executeWorkflow = undefined;
      this._registrationWorkflow.internalValue = undefined;
      this._templateName = undefined;
      this._thisIsMyDeviceEnabled = undefined;
      this._usernameField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captchaEnabled = value.captchaEnabled;
      this._captchaProviderRef.internalValue = value.captchaProviderRef;
      this._createAuthnSessionAfterRegistration = value.createAuthnSessionAfterRegistration;
      this._executeWorkflow = value.executeWorkflow;
      this._registrationWorkflow.internalValue = value.registrationWorkflow;
      this._templateName = value.templateName;
      this._thisIsMyDeviceEnabled = value.thisIsMyDeviceEnabled;
      this._usernameField = value.usernameField;
    }
  }

  // captcha_enabled - computed: true, optional: true, required: false
  private _captchaEnabled?: boolean | cdktf.IResolvable; 
  public get captchaEnabled() {
    return this.getBooleanAttribute('captcha_enabled');
  }
  public set captchaEnabled(value: boolean | cdktf.IResolvable) {
    this._captchaEnabled = value;
  }
  public resetCaptchaEnabled() {
    this._captchaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaEnabledInput() {
    return this._captchaEnabled;
  }

  // captcha_provider_ref - computed: false, optional: true, required: false
  private _captchaProviderRef = new LocalIdentityProfileRegistrationConfigCaptchaProviderRefOutputReference(this, "captcha_provider_ref");
  public get captchaProviderRef() {
    return this._captchaProviderRef;
  }
  public putCaptchaProviderRef(value: LocalIdentityProfileRegistrationConfigCaptchaProviderRef) {
    this._captchaProviderRef.internalValue = value;
  }
  public resetCaptchaProviderRef() {
    this._captchaProviderRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaProviderRefInput() {
    return this._captchaProviderRef.internalValue;
  }

  // create_authn_session_after_registration - computed: true, optional: true, required: false
  private _createAuthnSessionAfterRegistration?: boolean | cdktf.IResolvable; 
  public get createAuthnSessionAfterRegistration() {
    return this.getBooleanAttribute('create_authn_session_after_registration');
  }
  public set createAuthnSessionAfterRegistration(value: boolean | cdktf.IResolvable) {
    this._createAuthnSessionAfterRegistration = value;
  }
  public resetCreateAuthnSessionAfterRegistration() {
    this._createAuthnSessionAfterRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAuthnSessionAfterRegistrationInput() {
    return this._createAuthnSessionAfterRegistration;
  }

  // execute_workflow - computed: false, optional: true, required: false
  private _executeWorkflow?: string; 
  public get executeWorkflow() {
    return this.getStringAttribute('execute_workflow');
  }
  public set executeWorkflow(value: string) {
    this._executeWorkflow = value;
  }
  public resetExecuteWorkflow() {
    this._executeWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeWorkflowInput() {
    return this._executeWorkflow;
  }

  // registration_workflow - computed: false, optional: true, required: false
  private _registrationWorkflow = new LocalIdentityProfileRegistrationConfigRegistrationWorkflowOutputReference(this, "registration_workflow");
  public get registrationWorkflow() {
    return this._registrationWorkflow;
  }
  public putRegistrationWorkflow(value: LocalIdentityProfileRegistrationConfigRegistrationWorkflow) {
    this._registrationWorkflow.internalValue = value;
  }
  public resetRegistrationWorkflow() {
    this._registrationWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationWorkflowInput() {
    return this._registrationWorkflow.internalValue;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // this_is_my_device_enabled - computed: true, optional: true, required: false
  private _thisIsMyDeviceEnabled?: boolean | cdktf.IResolvable; 
  public get thisIsMyDeviceEnabled() {
    return this.getBooleanAttribute('this_is_my_device_enabled');
  }
  public set thisIsMyDeviceEnabled(value: boolean | cdktf.IResolvable) {
    this._thisIsMyDeviceEnabled = value;
  }
  public resetThisIsMyDeviceEnabled() {
    this._thisIsMyDeviceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thisIsMyDeviceEnabledInput() {
    return this._thisIsMyDeviceEnabled;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField?: string; 
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
  public set usernameField(value: string) {
    this._usernameField = value;
  }
  public resetUsernameField() {
    this._usernameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile pingfederate_local_identity_profile}
*/
export class LocalIdentityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_local_identity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalIdentityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalIdentityProfile to import
  * @param importFromId The id of the existing LocalIdentityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalIdentityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_local_identity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/local_identity_profile pingfederate_local_identity_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalIdentityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LocalIdentityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_local_identity_profile',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apcId.internalValue = config.apcId;
    this._authSourceUpdatePolicy.internalValue = config.authSourceUpdatePolicy;
    this._authSources.internalValue = config.authSources;
    this._dataStoreConfig.internalValue = config.dataStoreConfig;
    this._emailVerificationConfig.internalValue = config.emailVerificationConfig;
    this._fieldConfig.internalValue = config.fieldConfig;
    this._name = config.name;
    this._profileConfig.internalValue = config.profileConfig;
    this._profileEnabled = config.profileEnabled;
    this._profileId = config.profileId;
    this._registrationConfig.internalValue = config.registrationConfig;
    this._registrationEnabled = config.registrationEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apc_id - computed: false, optional: false, required: true
  private _apcId = new LocalIdentityProfileApcIdOutputReference(this, "apc_id");
  public get apcId() {
    return this._apcId;
  }
  public putApcId(value: LocalIdentityProfileApcId) {
    this._apcId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apcIdInput() {
    return this._apcId.internalValue;
  }

  // auth_source_update_policy - computed: true, optional: true, required: false
  private _authSourceUpdatePolicy = new LocalIdentityProfileAuthSourceUpdatePolicyOutputReference(this, "auth_source_update_policy");
  public get authSourceUpdatePolicy() {
    return this._authSourceUpdatePolicy;
  }
  public putAuthSourceUpdatePolicy(value: LocalIdentityProfileAuthSourceUpdatePolicy) {
    this._authSourceUpdatePolicy.internalValue = value;
  }
  public resetAuthSourceUpdatePolicy() {
    this._authSourceUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceUpdatePolicyInput() {
    return this._authSourceUpdatePolicy.internalValue;
  }

  // auth_sources - computed: true, optional: true, required: false
  private _authSources = new LocalIdentityProfileAuthSourcesList(this, "auth_sources", true);
  public get authSources() {
    return this._authSources;
  }
  public putAuthSources(value: LocalIdentityProfileAuthSources[] | cdktf.IResolvable) {
    this._authSources.internalValue = value;
  }
  public resetAuthSources() {
    this._authSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourcesInput() {
    return this._authSources.internalValue;
  }

  // data_store_config - computed: false, optional: true, required: false
  private _dataStoreConfig = new LocalIdentityProfileDataStoreConfigOutputReference(this, "data_store_config");
  public get dataStoreConfig() {
    return this._dataStoreConfig;
  }
  public putDataStoreConfig(value: LocalIdentityProfileDataStoreConfig) {
    this._dataStoreConfig.internalValue = value;
  }
  public resetDataStoreConfig() {
    this._dataStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreConfigInput() {
    return this._dataStoreConfig.internalValue;
  }

  // email_verification_config - computed: true, optional: true, required: false
  private _emailVerificationConfig = new LocalIdentityProfileEmailVerificationConfigOutputReference(this, "email_verification_config");
  public get emailVerificationConfig() {
    return this._emailVerificationConfig;
  }
  public putEmailVerificationConfig(value: LocalIdentityProfileEmailVerificationConfig) {
    this._emailVerificationConfig.internalValue = value;
  }
  public resetEmailVerificationConfig() {
    this._emailVerificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationConfigInput() {
    return this._emailVerificationConfig.internalValue;
  }

  // field_config - computed: false, optional: true, required: false
  private _fieldConfig = new LocalIdentityProfileFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: LocalIdentityProfileFieldConfig) {
    this._fieldConfig.internalValue = value;
  }
  public resetFieldConfig() {
    this._fieldConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldConfigInput() {
    return this._fieldConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // profile_config - computed: false, optional: true, required: false
  private _profileConfig = new LocalIdentityProfileProfileConfigOutputReference(this, "profile_config");
  public get profileConfig() {
    return this._profileConfig;
  }
  public putProfileConfig(value: LocalIdentityProfileProfileConfig) {
    this._profileConfig.internalValue = value;
  }
  public resetProfileConfig() {
    this._profileConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileConfigInput() {
    return this._profileConfig.internalValue;
  }

  // profile_enabled - computed: true, optional: true, required: false
  private _profileEnabled?: boolean | cdktf.IResolvable; 
  public get profileEnabled() {
    return this.getBooleanAttribute('profile_enabled');
  }
  public set profileEnabled(value: boolean | cdktf.IResolvable) {
    this._profileEnabled = value;
  }
  public resetProfileEnabled() {
    this._profileEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEnabledInput() {
    return this._profileEnabled;
  }

  // profile_id - computed: true, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // registration_config - computed: false, optional: true, required: false
  private _registrationConfig = new LocalIdentityProfileRegistrationConfigOutputReference(this, "registration_config");
  public get registrationConfig() {
    return this._registrationConfig;
  }
  public putRegistrationConfig(value: LocalIdentityProfileRegistrationConfig) {
    this._registrationConfig.internalValue = value;
  }
  public resetRegistrationConfig() {
    this._registrationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigInput() {
    return this._registrationConfig.internalValue;
  }

  // registration_enabled - computed: true, optional: true, required: false
  private _registrationEnabled?: boolean | cdktf.IResolvable; 
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }
  public set registrationEnabled(value: boolean | cdktf.IResolvable) {
    this._registrationEnabled = value;
  }
  public resetRegistrationEnabled() {
    this._registrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationEnabledInput() {
    return this._registrationEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apc_id: localIdentityProfileApcIdToTerraform(this._apcId.internalValue),
      auth_source_update_policy: localIdentityProfileAuthSourceUpdatePolicyToTerraform(this._authSourceUpdatePolicy.internalValue),
      auth_sources: cdktf.listMapper(localIdentityProfileAuthSourcesToTerraform, false)(this._authSources.internalValue),
      data_store_config: localIdentityProfileDataStoreConfigToTerraform(this._dataStoreConfig.internalValue),
      email_verification_config: localIdentityProfileEmailVerificationConfigToTerraform(this._emailVerificationConfig.internalValue),
      field_config: localIdentityProfileFieldConfigToTerraform(this._fieldConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      profile_config: localIdentityProfileProfileConfigToTerraform(this._profileConfig.internalValue),
      profile_enabled: cdktf.booleanToTerraform(this._profileEnabled),
      profile_id: cdktf.stringToTerraform(this._profileId),
      registration_config: localIdentityProfileRegistrationConfigToTerraform(this._registrationConfig.internalValue),
      registration_enabled: cdktf.booleanToTerraform(this._registrationEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apc_id: {
        value: localIdentityProfileApcIdToHclTerraform(this._apcId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileApcId",
      },
      auth_source_update_policy: {
        value: localIdentityProfileAuthSourceUpdatePolicyToHclTerraform(this._authSourceUpdatePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileAuthSourceUpdatePolicy",
      },
      auth_sources: {
        value: cdktf.listMapperHcl(localIdentityProfileAuthSourcesToHclTerraform, false)(this._authSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocalIdentityProfileAuthSourcesList",
      },
      data_store_config: {
        value: localIdentityProfileDataStoreConfigToHclTerraform(this._dataStoreConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileDataStoreConfig",
      },
      email_verification_config: {
        value: localIdentityProfileEmailVerificationConfigToHclTerraform(this._emailVerificationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileEmailVerificationConfig",
      },
      field_config: {
        value: localIdentityProfileFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileFieldConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_config: {
        value: localIdentityProfileProfileConfigToHclTerraform(this._profileConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileProfileConfig",
      },
      profile_enabled: {
        value: cdktf.booleanToHclTerraform(this._profileEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_config: {
        value: localIdentityProfileRegistrationConfigToHclTerraform(this._registrationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LocalIdentityProfileRegistrationConfig",
      },
      registration_enabled: {
        value: cdktf.booleanToHclTerraform(this._registrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
