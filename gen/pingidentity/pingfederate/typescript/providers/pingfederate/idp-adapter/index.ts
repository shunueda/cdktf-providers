// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpAdapterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the plugin instance. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#adapter_id IdpAdapter#adapter_id}
  */
  readonly adapterId: string;
  /**
  * The list of attributes that the IdP adapter provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_contract IdpAdapter#attribute_contract}
  */
  readonly attributeContract?: IdpAdapterAttributeContract;
  /**
  * The attributes mapping from attribute sources to attribute targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_mapping IdpAdapter#attribute_mapping}
  */
  readonly attributeMapping: IdpAdapterAttributeMapping;
  /**
  * The fixed value that indicates how the user was authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#authn_ctx_class_ref IdpAdapter#authn_ctx_class_ref}
  */
  readonly authnCtxClassRef?: string;
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#configuration IdpAdapter#configuration}
  */
  readonly configuration: IdpAdapterConfiguration;
  /**
  * The plugin instance name. The name can be modified once the instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g. connection adapter overrides)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#parent_ref IdpAdapter#parent_ref}
  */
  readonly parentRef?: IdpAdapterParentRef;
  /**
  * Reference to the plugin descriptor for this instance. The plugin descriptor cannot be modified once the instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#plugin_descriptor_ref IdpAdapter#plugin_descriptor_ref}
  */
  readonly pluginDescriptorRef: IdpAdapterPluginDescriptorRef;
}
export interface IdpAdapterAttributeContractCoreAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#masked IdpAdapter#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * Specifies whether this attribute is used to construct a pseudonym for the SP. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#pseudonym IdpAdapter#pseudonym}
  */
  readonly pseudonym?: boolean | cdktf.IResolvable;
}

export function idpAdapterAttributeContractCoreAttributesToTerraform(struct?: IdpAdapterAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
    pseudonym: cdktf.booleanToTerraform(struct!.pseudonym),
  }
}


export function idpAdapterAttributeContractCoreAttributesToHclTerraform(struct?: IdpAdapterAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.booleanToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeContractCoreAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeContractCoreAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
      this._pseudonym = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
      this._pseudonym = value.pseudonym;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
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

  // pseudonym - computed: true, optional: true, required: false
  private _pseudonym?: boolean | cdktf.IResolvable; 
  public get pseudonym() {
    return this.getBooleanAttribute('pseudonym');
  }
  public set pseudonym(value: boolean | cdktf.IResolvable) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }
}

export class IdpAdapterAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeContractCoreAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeContractCoreAttributesOutputReference {
    return new IdpAdapterAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeContractCoreAttributesAll {
}

export function idpAdapterAttributeContractCoreAttributesAllToTerraform(struct?: IdpAdapterAttributeContractCoreAttributesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function idpAdapterAttributeContractCoreAttributesAllToHclTerraform(struct?: IdpAdapterAttributeContractCoreAttributesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdpAdapterAttributeContractCoreAttributesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeContractCoreAttributesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeContractCoreAttributesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getBooleanAttribute('pseudonym');
  }
}

export class IdpAdapterAttributeContractCoreAttributesAllList extends cdktf.ComplexList {

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
  public get(index: number): IdpAdapterAttributeContractCoreAttributesAllOutputReference {
    return new IdpAdapterAttributeContractCoreAttributesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeContractExtendedAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#masked IdpAdapter#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * Specifies whether this attribute is used to construct a pseudonym for the SP. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#pseudonym IdpAdapter#pseudonym}
  */
  readonly pseudonym?: boolean | cdktf.IResolvable;
}

export function idpAdapterAttributeContractExtendedAttributesToTerraform(struct?: IdpAdapterAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
    pseudonym: cdktf.booleanToTerraform(struct!.pseudonym),
  }
}


export function idpAdapterAttributeContractExtendedAttributesToHclTerraform(struct?: IdpAdapterAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.booleanToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
      this._pseudonym = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
      this._pseudonym = value.pseudonym;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
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

  // pseudonym - computed: true, optional: true, required: false
  private _pseudonym?: boolean | cdktf.IResolvable; 
  public get pseudonym() {
    return this.getBooleanAttribute('pseudonym');
  }
  public set pseudonym(value: boolean | cdktf.IResolvable) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }
}

export class IdpAdapterAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeContractExtendedAttributesOutputReference {
    return new IdpAdapterAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeContract {
  /**
  * A list of IdP adapter attributes that correspond to the attributes exposed by the IdP adapter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#core_attributes IdpAdapter#core_attributes}
  */
  readonly coreAttributes: IdpAdapterAttributeContractCoreAttributes[] | cdktf.IResolvable;
  /**
  * A list of additional attributes that can be returned by the IdP adapter. The extended attributes are only used if the adapter supports them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#extended_attributes IdpAdapter#extended_attributes}
  */
  readonly extendedAttributes?: IdpAdapterAttributeContractExtendedAttributes[] | cdktf.IResolvable;
  /**
  * Whether or not all OGNL expressions used to fulfill an outgoing assertion contract should be masked in the logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#mask_ognl_values IdpAdapter#mask_ognl_values}
  */
  readonly maskOgnlValues?: boolean | cdktf.IResolvable;
  /**
  * The attribute to use for uniquely identify a user's authentication sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#unique_user_key_attribute IdpAdapter#unique_user_key_attribute}
  */
  readonly uniqueUserKeyAttribute?: string;
}

export function idpAdapterAttributeContractToTerraform(struct?: IdpAdapterAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_attributes: cdktf.listMapper(idpAdapterAttributeContractCoreAttributesToTerraform, false)(struct!.coreAttributes),
    extended_attributes: cdktf.listMapper(idpAdapterAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
    mask_ognl_values: cdktf.booleanToTerraform(struct!.maskOgnlValues),
    unique_user_key_attribute: cdktf.stringToTerraform(struct!.uniqueUserKeyAttribute),
  }
}


export function idpAdapterAttributeContractToHclTerraform(struct?: IdpAdapterAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_attributes: {
      value: cdktf.listMapperHcl(idpAdapterAttributeContractCoreAttributesToHclTerraform, false)(struct!.coreAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeContractCoreAttributesList",
    },
    extended_attributes: {
      value: cdktf.listMapperHcl(idpAdapterAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeContractExtendedAttributesList",
    },
    mask_ognl_values: {
      value: cdktf.booleanToHclTerraform(struct!.maskOgnlValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_user_key_attribute: {
      value: cdktf.stringToHclTerraform(struct!.uniqueUserKeyAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeContract | cdktf.IResolvable | undefined {
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
    if (this._maskOgnlValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskOgnlValues = this._maskOgnlValues;
    }
    if (this._uniqueUserKeyAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueUserKeyAttribute = this._uniqueUserKeyAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreAttributes.internalValue = undefined;
      this._extendedAttributes.internalValue = undefined;
      this._maskOgnlValues = undefined;
      this._uniqueUserKeyAttribute = undefined;
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
      this._maskOgnlValues = value.maskOgnlValues;
      this._uniqueUserKeyAttribute = value.uniqueUserKeyAttribute;
    }
  }

  // core_attributes - computed: false, optional: false, required: true
  private _coreAttributes = new IdpAdapterAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }
  public putCoreAttributes(value: IdpAdapterAttributeContractCoreAttributes[] | cdktf.IResolvable) {
    this._coreAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAttributesInput() {
    return this._coreAttributes.internalValue;
  }

  // core_attributes_all - computed: true, optional: false, required: false
  private _coreAttributesAll = new IdpAdapterAttributeContractCoreAttributesAllList(this, "core_attributes_all", true);
  public get coreAttributesAll() {
    return this._coreAttributesAll;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new IdpAdapterAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: IdpAdapterAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }

  // mask_ognl_values - computed: true, optional: true, required: false
  private _maskOgnlValues?: boolean | cdktf.IResolvable; 
  public get maskOgnlValues() {
    return this.getBooleanAttribute('mask_ognl_values');
  }
  public set maskOgnlValues(value: boolean | cdktf.IResolvable) {
    this._maskOgnlValues = value;
  }
  public resetMaskOgnlValues() {
    this._maskOgnlValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskOgnlValuesInput() {
    return this._maskOgnlValues;
  }

  // unique_user_key_attribute - computed: false, optional: true, required: false
  private _uniqueUserKeyAttribute?: string; 
  public get uniqueUserKeyAttribute() {
    return this.getStringAttribute('unique_user_key_attribute');
  }
  public set uniqueUserKeyAttribute(value: string) {
    this._uniqueUserKeyAttribute = value;
  }
  public resetUniqueUserKeyAttribute() {
    this._uniqueUserKeyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueUserKeyAttributeInput() {
    return this._uniqueUserKeyAttribute;
  }
}
export interface IdpAdapterAttributeMappingAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type?: string;
}

export function idpAdapterAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable): any {
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

export class IdpAdapterAttributeMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#source IdpAdapter#source}
  */
  readonly source?: IdpAdapterAttributeMappingAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterAttributeMappingAttributeContractFulfillmentToTerraform(struct?: IdpAdapterAttributeMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpAdapterAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingAttributeContractFulfillmentToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpAdapterAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeContractFulfillmentSource",
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

export class IdpAdapterAttributeMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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

  // source - computed: true, optional: true, required: false
  private _source = new IdpAdapterAttributeMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpAdapterAttributeMappingAttributeContractFulfillmentSource) {
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

export class IdpAdapterAttributeMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpAdapterAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpAdapterAttributeMappingAttributeContractFulfillmentOutputReference {
    return new IdpAdapterAttributeMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type: string;
}

export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#source IdpAdapter#source}
  */
  readonly source: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_contract_fulfillment IdpAdapter#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#data_store_ref IdpAdapter#data_store_ref}
  */
  readonly dataStoreRef: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#description IdpAdapter#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#filter_fields IdpAdapter#filter_fields}
  */
  readonly filterFields?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList",
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

export class IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef) {
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
  private _filterFields = new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type: string;
}

export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#source IdpAdapter#source}
  */
  readonly source: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_contract_fulfillment IdpAdapter#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#column_names IdpAdapter#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#data_store_ref IdpAdapter#data_store_ref}
  */
  readonly dataStoreRef: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#description IdpAdapter#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#filter IdpAdapter#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#schema IdpAdapter#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#table IdpAdapter#table}
  */
  readonly table: string;
}

export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef",
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

export class IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type: string;
}

export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#source IdpAdapter#source}
  */
  readonly source: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
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
  private _source = new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

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
  public get(key: string): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#binary_encoding IdpAdapter#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

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
  public get(key: string): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_contract_fulfillment IdpAdapter#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#base_dn IdpAdapter#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#binary_attribute_settings IdpAdapter#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#data_store_ref IdpAdapter#data_store_ref}
  */
  readonly dataStoreRef: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#description IdpAdapter#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#member_of_nested_group IdpAdapter#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#search_attributes IdpAdapter#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#search_filter IdpAdapter#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#search_scope IdpAdapter#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type: string;
}

export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef",
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

export class IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _binaryAttributeSettings = new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
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
  private _dataStoreRef = new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef) {
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
export interface IdpAdapterAttributeMappingAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#custom_attribute_source IdpAdapter#custom_attribute_source}
  */
  readonly customAttributeSource?: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#jdbc_attribute_source IdpAdapter#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#ldap_attribute_source IdpAdapter#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource;
}

export function idpAdapterAttributeMappingAttributeSourcesToTerraform(struct?: IdpAdapterAttributeMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function idpAdapterAttributeMappingAttributeSourcesToHclTerraform(struct?: IdpAdapterAttributeMappingAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: idpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: idpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: idpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingAttributeSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingAttributeSources | cdktf.IResolvable | undefined) {
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
  private _customAttributeSource = new IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: IdpAdapterAttributeMappingAttributeSourcesCustomAttributeSource) {
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
  private _jdbcAttributeSource = new IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: IdpAdapterAttributeMappingAttributeSourcesJdbcAttributeSource) {
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
  private _ldapAttributeSource = new IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: IdpAdapterAttributeMappingAttributeSourcesLdapAttributeSource) {
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

export class IdpAdapterAttributeMappingAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeMappingAttributeSources[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeMappingAttributeSourcesOutputReference {
    return new IdpAdapterAttributeMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#type IdpAdapter#type}
  */
  readonly type: string;
}

export function idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
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

export class IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_name IdpAdapter#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#condition IdpAdapter#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#error_result IdpAdapter#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#source IdpAdapter#source}
  */
  readonly source: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value: string;
}

export function idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
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
      value: idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource",
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

export class IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
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
  private _source = new IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaSource) {
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

export class IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#error_result IdpAdapter#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#expression IdpAdapter#expression}
  */
  readonly expression: string;
}

export function idpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function idpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
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

export class IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
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

export class IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterAttributeMappingIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#conditional_criteria IdpAdapter#conditional_criteria}
  */
  readonly conditionalCriteria?: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#expression_criteria IdpAdapter#expression_criteria}
  */
  readonly expressionCriteria?: IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function idpAdapterAttributeMappingIssuanceCriteriaToTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(idpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function idpAdapterAttributeMappingIssuanceCriteriaToHclTerraform(struct?: IdpAdapterAttributeMappingIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(idpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(idpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMappingIssuanceCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMappingIssuanceCriteria | cdktf.IResolvable | undefined) {
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
  private _conditionalCriteria = new IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: IdpAdapterAttributeMappingIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
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
  private _expressionCriteria = new IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: IdpAdapterAttributeMappingIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
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
export interface IdpAdapterAttributeMapping {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_contract_fulfillment IdpAdapter#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: IdpAdapterAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#attribute_sources IdpAdapter#attribute_sources}
  */
  readonly attributeSources?: IdpAdapterAttributeMappingAttributeSources[] | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#issuance_criteria IdpAdapter#issuance_criteria}
  */
  readonly issuanceCriteria?: IdpAdapterAttributeMappingIssuanceCriteria;
}

export function idpAdapterAttributeMappingToTerraform(struct?: IdpAdapterAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(idpAdapterAttributeMappingAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(idpAdapterAttributeMappingAttributeSourcesToTerraform, false)(struct!.attributeSources),
    issuance_criteria: idpAdapterAttributeMappingIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
  }
}


export function idpAdapterAttributeMappingToHclTerraform(struct?: IdpAdapterAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(idpAdapterAttributeMappingAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "IdpAdapterAttributeMappingAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(idpAdapterAttributeMappingAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterAttributeMappingAttributeSourcesList",
    },
    issuance_criteria: {
      value: idpAdapterAttributeMappingIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "IdpAdapterAttributeMappingIssuanceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterAttributeMapping | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterAttributeMapping | cdktf.IResolvable | undefined) {
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
  private _attributeContractFulfillment = new IdpAdapterAttributeMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: IdpAdapterAttributeMappingAttributeContractFulfillment } | cdktf.IResolvable) {
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
  private _attributeSources = new IdpAdapterAttributeMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: IdpAdapterAttributeMappingAttributeSources[] | cdktf.IResolvable) {
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
  private _issuanceCriteria = new IdpAdapterAttributeMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: IdpAdapterAttributeMappingIssuanceCriteria) {
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
export interface IdpAdapterConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value: string;
}

export function idpAdapterConfigurationFieldsToTerraform(struct?: IdpAdapterConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationFieldsToHclTerraform(struct?: IdpAdapterConfigurationFields | cdktf.IResolvable): any {
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

export class IdpAdapterConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterConfigurationFields | cdktf.IResolvable | undefined) {
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

export class IdpAdapterConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationFieldsOutputReference {
    return new IdpAdapterConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value: string;
}

export function idpAdapterConfigurationFieldsAllToTerraform(struct?: IdpAdapterConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationFieldsAllToHclTerraform(struct?: IdpAdapterConfigurationFieldsAll): any {
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

export class IdpAdapterConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationFieldsAll | undefined {
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

  public set internalValue(value: IdpAdapterConfigurationFieldsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class IdpAdapterConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationFieldsAll[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationFieldsAllOutputReference {
    return new IdpAdapterConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#encrypted_value IdpAdapter#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterConfigurationSensitiveFieldsToTerraform(struct?: IdpAdapterConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationSensitiveFieldsToHclTerraform(struct?: IdpAdapterConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class IdpAdapterConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
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

  public set internalValue(value: IdpAdapterConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
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
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
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

export class IdpAdapterConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationSensitiveFieldsOutputReference {
    return new IdpAdapterConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value: string;
}

export function idpAdapterConfigurationTablesRowsFieldsToTerraform(struct?: IdpAdapterConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationTablesRowsFieldsToHclTerraform(struct?: IdpAdapterConfigurationTablesRowsFields | cdktf.IResolvable): any {
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

export class IdpAdapterConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
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

export class IdpAdapterConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesRowsFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesRowsFieldsOutputReference {
    return new IdpAdapterConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#encrypted_value IdpAdapter#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value?: string;
}

export function idpAdapterConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: IdpAdapterConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: IdpAdapterConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class IdpAdapterConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
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

  public set internalValue(value: IdpAdapterConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
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
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
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

export class IdpAdapterConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new IdpAdapterConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#default_row IdpAdapter#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#fields IdpAdapter#fields}
  */
  readonly fields?: IdpAdapterConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#sensitive_fields IdpAdapter#sensitive_fields}
  */
  readonly sensitiveFields?: IdpAdapterConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function idpAdapterConfigurationTablesRowsToTerraform(struct?: IdpAdapterConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(idpAdapterConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(idpAdapterConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function idpAdapterConfigurationTablesRowsToHclTerraform(struct?: IdpAdapterConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterConfigurationTablesRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new IdpAdapterConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdpAdapterConfigurationTablesRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new IdpAdapterConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: IdpAdapterConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }
}

export class IdpAdapterConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesRows[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesRowsOutputReference {
    return new IdpAdapterConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#rows IdpAdapter#rows}
  */
  readonly rows?: IdpAdapterConfigurationTablesRows[] | cdktf.IResolvable;
}

export function idpAdapterConfigurationTablesToTerraform(struct?: IdpAdapterConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(idpAdapterConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function idpAdapterConfigurationTablesToHclTerraform(struct?: IdpAdapterConfigurationTables | cdktf.IResolvable): any {
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
    rows: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "IdpAdapterConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterConfigurationTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rows.internalValue = value.rows;
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

  // rows - computed: true, optional: true, required: false
  private _rows = new IdpAdapterConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: IdpAdapterConfigurationTablesRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class IdpAdapterConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTables[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesOutputReference {
    return new IdpAdapterConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#value IdpAdapter#value}
  */
  readonly value: string;
}

export function idpAdapterConfigurationTablesAllRowsFieldsToTerraform(struct?: IdpAdapterConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function idpAdapterConfigurationTablesAllRowsFieldsToHclTerraform(struct?: IdpAdapterConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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

export class IdpAdapterConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
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

export class IdpAdapterConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesAllRowsFields[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesAllRowsFieldsOutputReference {
    return new IdpAdapterConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#default_row IdpAdapter#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#fields IdpAdapter#fields}
  */
  readonly fields?: IdpAdapterConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function idpAdapterConfigurationTablesAllRowsToTerraform(struct?: IdpAdapterConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(idpAdapterConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function idpAdapterConfigurationTablesAllRowsToHclTerraform(struct?: IdpAdapterConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesAllRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new IdpAdapterConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdpAdapterConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class IdpAdapterConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesAllRows[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesAllRowsOutputReference {
    return new IdpAdapterConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#name IdpAdapter#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#rows IdpAdapter#rows}
  */
  readonly rows?: IdpAdapterConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function idpAdapterConfigurationTablesAllToTerraform(struct?: IdpAdapterConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(idpAdapterConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function idpAdapterConfigurationTablesAllToHclTerraform(struct?: IdpAdapterConfigurationTablesAll): any {
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
    rows: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "IdpAdapterConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpAdapterConfigurationTablesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterConfigurationTablesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._rows.internalValue = value.rows;
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

  // rows - computed: true, optional: true, required: false
  private _rows = new IdpAdapterConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: IdpAdapterConfigurationTablesAllRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class IdpAdapterConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : IdpAdapterConfigurationTablesAll[] | cdktf.IResolvable

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
  public get(index: number): IdpAdapterConfigurationTablesAllOutputReference {
    return new IdpAdapterConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpAdapterConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#fields IdpAdapter#fields}
  */
  readonly fields?: IdpAdapterConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#sensitive_fields IdpAdapter#sensitive_fields}
  */
  readonly sensitiveFields?: IdpAdapterConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#tables IdpAdapter#tables}
  */
  readonly tables?: IdpAdapterConfigurationTables[] | cdktf.IResolvable;
}

export function idpAdapterConfigurationToTerraform(struct?: IdpAdapterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(idpAdapterConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(idpAdapterConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(idpAdapterConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function idpAdapterConfigurationToHclTerraform(struct?: IdpAdapterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdpAdapterConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(idpAdapterConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "IdpAdapterConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpAdapterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpAdapterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
      this._tables.internalValue = value.tables;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new IdpAdapterConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdpAdapterConfigurationFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // fields_all - computed: true, optional: false, required: false
  private _fieldsAll = new IdpAdapterConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new IdpAdapterConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: IdpAdapterConfigurationSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }

  // tables - computed: true, optional: true, required: false
  private _tables = new IdpAdapterConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: IdpAdapterConfigurationTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // tables_all - computed: true, optional: false, required: false
  private _tablesAll = new IdpAdapterConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface IdpAdapterParentRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpAdapterParentRefToTerraform(struct?: IdpAdapterParentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterParentRefToHclTerraform(struct?: IdpAdapterParentRef | cdktf.IResolvable): any {
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

export class IdpAdapterParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterParentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterParentRef | cdktf.IResolvable | undefined) {
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
export interface IdpAdapterPluginDescriptorRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#id IdpAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function idpAdapterPluginDescriptorRefToTerraform(struct?: IdpAdapterPluginDescriptorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function idpAdapterPluginDescriptorRefToHclTerraform(struct?: IdpAdapterPluginDescriptorRef | cdktf.IResolvable): any {
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

export class IdpAdapterPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdpAdapterPluginDescriptorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdpAdapterPluginDescriptorRef | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter pingfederate_idp_adapter}
*/
export class IdpAdapter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_idp_adapter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpAdapter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpAdapter to import
  * @param importFromId The id of the existing IdpAdapter that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpAdapter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_idp_adapter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/idp_adapter pingfederate_idp_adapter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpAdapterConfig
  */
  public constructor(scope: Construct, id: string, config: IdpAdapterConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_idp_adapter',
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
    this._adapterId = config.adapterId;
    this._attributeContract.internalValue = config.attributeContract;
    this._attributeMapping.internalValue = config.attributeMapping;
    this._authnCtxClassRef = config.authnCtxClassRef;
    this._configuration.internalValue = config.configuration;
    this._name = config.name;
    this._parentRef.internalValue = config.parentRef;
    this._pluginDescriptorRef.internalValue = config.pluginDescriptorRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_id - computed: false, optional: false, required: true
  private _adapterId?: string; 
  public get adapterId() {
    return this.getStringAttribute('adapter_id');
  }
  public set adapterId(value: string) {
    this._adapterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterIdInput() {
    return this._adapterId;
  }

  // attribute_contract - computed: false, optional: true, required: false
  private _attributeContract = new IdpAdapterAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: IdpAdapterAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  public resetAttributeContract() {
    this._attributeContract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // attribute_mapping - computed: false, optional: false, required: true
  private _attributeMapping = new IdpAdapterAttributeMappingOutputReference(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }
  public putAttributeMapping(value: IdpAdapterAttributeMapping) {
    this._attributeMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping.internalValue;
  }

  // authn_ctx_class_ref - computed: false, optional: true, required: false
  private _authnCtxClassRef?: string; 
  public get authnCtxClassRef() {
    return this.getStringAttribute('authn_ctx_class_ref');
  }
  public set authnCtxClassRef(value: string) {
    this._authnCtxClassRef = value;
  }
  public resetAuthnCtxClassRef() {
    this._authnCtxClassRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnCtxClassRefInput() {
    return this._authnCtxClassRef;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new IdpAdapterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: IdpAdapterConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new IdpAdapterParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: IdpAdapterParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }

  // plugin_descriptor_ref - computed: false, optional: false, required: true
  private _pluginDescriptorRef = new IdpAdapterPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
  public putPluginDescriptorRef(value: IdpAdapterPluginDescriptorRef) {
    this._pluginDescriptorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDescriptorRefInput() {
    return this._pluginDescriptorRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adapter_id: cdktf.stringToTerraform(this._adapterId),
      attribute_contract: idpAdapterAttributeContractToTerraform(this._attributeContract.internalValue),
      attribute_mapping: idpAdapterAttributeMappingToTerraform(this._attributeMapping.internalValue),
      authn_ctx_class_ref: cdktf.stringToTerraform(this._authnCtxClassRef),
      configuration: idpAdapterConfigurationToTerraform(this._configuration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      parent_ref: idpAdapterParentRefToTerraform(this._parentRef.internalValue),
      plugin_descriptor_ref: idpAdapterPluginDescriptorRefToTerraform(this._pluginDescriptorRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adapter_id: {
        value: cdktf.stringToHclTerraform(this._adapterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_contract: {
        value: idpAdapterAttributeContractToHclTerraform(this._attributeContract.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpAdapterAttributeContract",
      },
      attribute_mapping: {
        value: idpAdapterAttributeMappingToHclTerraform(this._attributeMapping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpAdapterAttributeMapping",
      },
      authn_ctx_class_ref: {
        value: cdktf.stringToHclTerraform(this._authnCtxClassRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: idpAdapterConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpAdapterConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: idpAdapterParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpAdapterParentRef",
      },
      plugin_descriptor_ref: {
        value: idpAdapterPluginDescriptorRefToHclTerraform(this._pluginDescriptorRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdpAdapterPluginDescriptorRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
