// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityStoreProvisionerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of attributes exposed by an identity store provisioner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#attribute_contract IdentityStoreProvisioner#attribute_contract}
  */
  readonly attributeContract: IdentityStoreProvisionerAttributeContract;
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#configuration IdentityStoreProvisioner#configuration}
  */
  readonly configuration: IdentityStoreProvisionerConfiguration;
  /**
  * A set of group attributes exposed by an identity store provisioner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#group_attribute_contract IdentityStoreProvisioner#group_attribute_contract}
  */
  readonly groupAttributeContract: IdentityStoreProvisionerGroupAttributeContract;
  /**
  * The plugin instance name. The name can be modified once the instance is created.<br>Note: Ignored when specifying a connection's adapter override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g. connection adapter overrides)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#parent_ref IdentityStoreProvisioner#parent_ref}
  */
  readonly parentRef?: IdentityStoreProvisionerParentRef;
  /**
  * Reference to the plugin descriptor for this instance. The plugin descriptor cannot be modified once the instance is created. Note: Ignored when specifying a connection's adapter override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#plugin_descriptor_ref IdentityStoreProvisioner#plugin_descriptor_ref}
  */
  readonly pluginDescriptorRef: IdentityStoreProvisionerPluginDescriptorRef;
  /**
  * The ID of the plugin instance. The ID cannot be modified once the instance is created.<br>Note: Ignored when specifying a connection's adapter override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#provisioner_id IdentityStoreProvisioner#provisioner_id}
  */
  readonly provisionerId: string;
}
export interface IdentityStoreProvisionerAttributeContractCoreAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerAttributeContractCoreAttributesToTerraform(struct?: IdentityStoreProvisionerAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerAttributeContractCoreAttributesToHclTerraform(struct?: IdentityStoreProvisionerAttributeContractCoreAttributes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerAttributeContractCoreAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerAttributeContractCoreAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerAttributeContractCoreAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerAttributeContractCoreAttributesOutputReference {
    return new IdentityStoreProvisionerAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerAttributeContractCoreAttributesAll {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerAttributeContractCoreAttributesAllToTerraform(struct?: IdentityStoreProvisionerAttributeContractCoreAttributesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerAttributeContractCoreAttributesAllToHclTerraform(struct?: IdentityStoreProvisionerAttributeContractCoreAttributesAll): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerAttributeContractCoreAttributesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerAttributeContractCoreAttributesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerAttributeContractCoreAttributesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerAttributeContractCoreAttributesAllList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerAttributeContractCoreAttributesAll[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerAttributeContractCoreAttributesAllOutputReference {
    return new IdentityStoreProvisionerAttributeContractCoreAttributesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerAttributeContractExtendedAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerAttributeContractExtendedAttributesToTerraform(struct?: IdentityStoreProvisionerAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerAttributeContractExtendedAttributesToHclTerraform(struct?: IdentityStoreProvisionerAttributeContractExtendedAttributes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerAttributeContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerAttributeContractExtendedAttributesOutputReference {
    return new IdentityStoreProvisionerAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerAttributeContract {
  /**
  * A list of identity store provisioner attributes that correspond to the attributes exposed by the identity store provisioner type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#core_attributes IdentityStoreProvisioner#core_attributes}
  */
  readonly coreAttributes: IdentityStoreProvisionerAttributeContractCoreAttributes[] | cdktf.IResolvable;
  /**
  * A list of additional attributes that can be returned by the identity store provisioner. The extended attributes are only used if the provisioner supports them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#extended_attributes IdentityStoreProvisioner#extended_attributes}
  */
  readonly extendedAttributes?: IdentityStoreProvisionerAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function identityStoreProvisionerAttributeContractToTerraform(struct?: IdentityStoreProvisionerAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_attributes: cdktf.listMapper(identityStoreProvisionerAttributeContractCoreAttributesToTerraform, false)(struct!.coreAttributes),
    extended_attributes: cdktf.listMapper(identityStoreProvisionerAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function identityStoreProvisionerAttributeContractToHclTerraform(struct?: IdentityStoreProvisionerAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_attributes: {
      value: cdktf.listMapperHcl(identityStoreProvisionerAttributeContractCoreAttributesToHclTerraform, false)(struct!.coreAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerAttributeContractCoreAttributesList",
    },
    extended_attributes: {
      value: cdktf.listMapperHcl(identityStoreProvisionerAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStoreProvisionerAttributeContract | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerAttributeContract | cdktf.IResolvable | undefined) {
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

  // core_attributes - computed: false, optional: false, required: true
  private _coreAttributes = new IdentityStoreProvisionerAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }
  public putCoreAttributes(value: IdentityStoreProvisionerAttributeContractCoreAttributes[] | cdktf.IResolvable) {
    this._coreAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAttributesInput() {
    return this._coreAttributes.internalValue;
  }

  // core_attributes_all - computed: true, optional: false, required: false
  private _coreAttributesAll = new IdentityStoreProvisionerAttributeContractCoreAttributesAllList(this, "core_attributes_all", true);
  public get coreAttributesAll() {
    return this._coreAttributesAll;
  }

  // extended_attributes - computed: false, optional: true, required: false
  private _extendedAttributes = new IdentityStoreProvisionerAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: IdentityStoreProvisionerAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
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
export interface IdentityStoreProvisionerConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value: string;
}

export function identityStoreProvisionerConfigurationFieldsToTerraform(struct?: IdentityStoreProvisionerConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityStoreProvisionerConfigurationFieldsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationFields | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationFields | cdktf.IResolvable | undefined) {
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

export class IdentityStoreProvisionerConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationFields[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationFieldsOutputReference {
    return new IdentityStoreProvisionerConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value: string;
}

export function identityStoreProvisionerConfigurationFieldsAllToTerraform(struct?: IdentityStoreProvisionerConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityStoreProvisionerConfigurationFieldsAllToHclTerraform(struct?: IdentityStoreProvisionerConfigurationFieldsAll): any {
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

export class IdentityStoreProvisionerConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationFieldsAll | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationFieldsAll | undefined) {
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

export class IdentityStoreProvisionerConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationFieldsAll[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationFieldsAllOutputReference {
    return new IdentityStoreProvisionerConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#encrypted_value IdentityStoreProvisioner#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value?: string;
}

export function identityStoreProvisionerConfigurationSensitiveFieldsToTerraform(struct?: IdentityStoreProvisionerConfigurationSensitiveFields | cdktf.IResolvable): any {
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


export function identityStoreProvisionerConfigurationSensitiveFieldsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationSensitiveFields | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
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

export class IdentityStoreProvisionerConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationSensitiveFieldsOutputReference {
    return new IdentityStoreProvisionerConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value: string;
}

export function identityStoreProvisionerConfigurationTablesRowsFieldsToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityStoreProvisionerConfigurationTablesRowsFieldsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRowsFields | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
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

export class IdentityStoreProvisionerConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesRowsFields[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesRowsFieldsOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#encrypted_value IdentityStoreProvisioner#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value?: string;
}

export function identityStoreProvisionerConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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


export function identityStoreProvisionerConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
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

export class IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#default_row IdentityStoreProvisioner#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#fields IdentityStoreProvisioner#fields}
  */
  readonly fields?: IdentityStoreProvisionerConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#sensitive_fields IdentityStoreProvisioner#sensitive_fields}
  */
  readonly sensitiveFields?: IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function identityStoreProvisionerConfigurationTablesRowsToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(identityStoreProvisionerConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(identityStoreProvisionerConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function identityStoreProvisionerConfigurationTablesRowsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesRows | cdktf.IResolvable | undefined) {
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
  private _fields = new IdentityStoreProvisionerConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdentityStoreProvisionerConfigurationTablesRowsFields[] | cdktf.IResolvable) {
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
  private _sensitiveFields = new IdentityStoreProvisionerConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: IdentityStoreProvisionerConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
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

export class IdentityStoreProvisionerConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesRows[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesRowsOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#rows IdentityStoreProvisioner#rows}
  */
  readonly rows?: IdentityStoreProvisionerConfigurationTablesRows[] | cdktf.IResolvable;
}

export function identityStoreProvisionerConfigurationTablesToTerraform(struct?: IdentityStoreProvisionerConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(identityStoreProvisionerConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function identityStoreProvisionerConfigurationTablesToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTables | cdktf.IResolvable | undefined) {
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
  private _rows = new IdentityStoreProvisionerConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: IdentityStoreProvisionerConfigurationTablesRows[] | cdktf.IResolvable) {
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

export class IdentityStoreProvisionerConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTables[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#value IdentityStoreProvisioner#value}
  */
  readonly value: string;
}

export function identityStoreProvisionerConfigurationTablesAllRowsFieldsToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityStoreProvisionerConfigurationTablesAllRowsFieldsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
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

export class IdentityStoreProvisionerConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesAllRowsFields[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesAllRowsFieldsOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#default_row IdentityStoreProvisioner#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#fields IdentityStoreProvisioner#fields}
  */
  readonly fields?: IdentityStoreProvisionerConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function identityStoreProvisionerConfigurationTablesAllRowsToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(identityStoreProvisionerConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function identityStoreProvisionerConfigurationTablesAllRowsToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAllRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesAllRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
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
  private _fields = new IdentityStoreProvisionerConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdentityStoreProvisionerConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
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

export class IdentityStoreProvisionerConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesAllRows[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesAllRowsOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#rows IdentityStoreProvisioner#rows}
  */
  readonly rows?: IdentityStoreProvisionerConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function identityStoreProvisionerConfigurationTablesAllToTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(identityStoreProvisionerConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function identityStoreProvisionerConfigurationTablesAllToHclTerraform(struct?: IdentityStoreProvisionerConfigurationTablesAll): any {
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
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerConfigurationTablesAll | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfigurationTablesAll | undefined) {
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
  private _rows = new IdentityStoreProvisionerConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: IdentityStoreProvisionerConfigurationTablesAllRows[] | cdktf.IResolvable) {
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

export class IdentityStoreProvisionerConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerConfigurationTablesAll[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerConfigurationTablesAllOutputReference {
    return new IdentityStoreProvisionerConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#fields IdentityStoreProvisioner#fields}
  */
  readonly fields?: IdentityStoreProvisionerConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#sensitive_fields IdentityStoreProvisioner#sensitive_fields}
  */
  readonly sensitiveFields?: IdentityStoreProvisionerConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#tables IdentityStoreProvisioner#tables}
  */
  readonly tables?: IdentityStoreProvisionerConfigurationTables[] | cdktf.IResolvable;
}

export function identityStoreProvisionerConfigurationToTerraform(struct?: IdentityStoreProvisionerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(identityStoreProvisionerConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(identityStoreProvisionerConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(identityStoreProvisionerConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function identityStoreProvisionerConfigurationToHclTerraform(struct?: IdentityStoreProvisionerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(identityStoreProvisionerConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityStoreProvisionerConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStoreProvisionerConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerConfiguration | cdktf.IResolvable | undefined) {
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
  private _fields = new IdentityStoreProvisionerConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IdentityStoreProvisionerConfigurationFields[] | cdktf.IResolvable) {
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
  private _fieldsAll = new IdentityStoreProvisionerConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new IdentityStoreProvisionerConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: IdentityStoreProvisionerConfigurationSensitiveFields[] | cdktf.IResolvable) {
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
  private _tables = new IdentityStoreProvisionerConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: IdentityStoreProvisionerConfigurationTables[] | cdktf.IResolvable) {
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
  private _tablesAll = new IdentityStoreProvisionerConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface IdentityStoreProvisionerGroupAttributeContractCoreAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerGroupAttributeContractCoreAttributesToTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerGroupAttributeContractCoreAttributesToHclTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractCoreAttributes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerGroupAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerGroupAttributeContractCoreAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerGroupAttributeContractCoreAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerGroupAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerGroupAttributeContractCoreAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerGroupAttributeContractCoreAttributesOutputReference {
    return new IdentityStoreProvisionerGroupAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerGroupAttributeContractCoreAttributesAllToTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerGroupAttributeContractCoreAttributesAllToHclTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerGroupAttributeContractCoreAttributesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerGroupAttributeContractCoreAttributesAllList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerGroupAttributeContractCoreAttributesAll[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerGroupAttributeContractCoreAttributesAllOutputReference {
    return new IdentityStoreProvisionerGroupAttributeContractCoreAttributesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerGroupAttributeContractExtendedAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#name IdentityStoreProvisioner#name}
  */
  readonly name: string;
}

export function identityStoreProvisionerGroupAttributeContractExtendedAttributesToTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityStoreProvisionerGroupAttributeContractExtendedAttributesToHclTerraform(struct?: IdentityStoreProvisionerGroupAttributeContractExtendedAttributes | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerGroupAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityStoreProvisionerGroupAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityStoreProvisionerGroupAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class IdentityStoreProvisionerGroupAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityStoreProvisionerGroupAttributeContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityStoreProvisionerGroupAttributeContractExtendedAttributesOutputReference {
    return new IdentityStoreProvisionerGroupAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityStoreProvisionerGroupAttributeContract {
  /**
  * A list of identity store provisioner group attributes that correspond to the group attributes exposed by the identity store provisioner type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#core_attributes IdentityStoreProvisioner#core_attributes}
  */
  readonly coreAttributes: IdentityStoreProvisionerGroupAttributeContractCoreAttributes[] | cdktf.IResolvable;
  /**
  * A list of additional group attributes that can be returned by the identity store provisioner. The extended group attributes are only used if the provisioner supports them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#extended_attributes IdentityStoreProvisioner#extended_attributes}
  */
  readonly extendedAttributes?: IdentityStoreProvisionerGroupAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function identityStoreProvisionerGroupAttributeContractToTerraform(struct?: IdentityStoreProvisionerGroupAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_attributes: cdktf.listMapper(identityStoreProvisionerGroupAttributeContractCoreAttributesToTerraform, false)(struct!.coreAttributes),
    extended_attributes: cdktf.listMapper(identityStoreProvisionerGroupAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function identityStoreProvisionerGroupAttributeContractToHclTerraform(struct?: IdentityStoreProvisionerGroupAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_attributes: {
      value: cdktf.listMapperHcl(identityStoreProvisionerGroupAttributeContractCoreAttributesToHclTerraform, false)(struct!.coreAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerGroupAttributeContractCoreAttributesList",
    },
    extended_attributes: {
      value: cdktf.listMapperHcl(identityStoreProvisionerGroupAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityStoreProvisionerGroupAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityStoreProvisionerGroupAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStoreProvisionerGroupAttributeContract | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerGroupAttributeContract | cdktf.IResolvable | undefined) {
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

  // core_attributes - computed: false, optional: false, required: true
  private _coreAttributes = new IdentityStoreProvisionerGroupAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }
  public putCoreAttributes(value: IdentityStoreProvisionerGroupAttributeContractCoreAttributes[] | cdktf.IResolvable) {
    this._coreAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAttributesInput() {
    return this._coreAttributes.internalValue;
  }

  // core_attributes_all - computed: true, optional: false, required: false
  private _coreAttributesAll = new IdentityStoreProvisionerGroupAttributeContractCoreAttributesAllList(this, "core_attributes_all", true);
  public get coreAttributesAll() {
    return this._coreAttributesAll;
  }

  // extended_attributes - computed: false, optional: true, required: false
  private _extendedAttributes = new IdentityStoreProvisionerGroupAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: IdentityStoreProvisionerGroupAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
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
export interface IdentityStoreProvisionerParentRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#id IdentityStoreProvisioner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityStoreProvisionerParentRefToTerraform(struct?: IdentityStoreProvisionerParentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityStoreProvisionerParentRefToHclTerraform(struct?: IdentityStoreProvisionerParentRef | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStoreProvisionerParentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerParentRef | cdktf.IResolvable | undefined) {
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
export interface IdentityStoreProvisionerPluginDescriptorRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#id IdentityStoreProvisioner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityStoreProvisionerPluginDescriptorRefToTerraform(struct?: IdentityStoreProvisionerPluginDescriptorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityStoreProvisionerPluginDescriptorRefToHclTerraform(struct?: IdentityStoreProvisionerPluginDescriptorRef | cdktf.IResolvable): any {
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

export class IdentityStoreProvisionerPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityStoreProvisionerPluginDescriptorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityStoreProvisionerPluginDescriptorRef | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner pingfederate_identity_store_provisioner}
*/
export class IdentityStoreProvisioner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_identity_store_provisioner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityStoreProvisioner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityStoreProvisioner to import
  * @param importFromId The id of the existing IdentityStoreProvisioner that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityStoreProvisioner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_identity_store_provisioner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/identity_store_provisioner pingfederate_identity_store_provisioner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityStoreProvisionerConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityStoreProvisionerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_identity_store_provisioner',
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
    this._attributeContract.internalValue = config.attributeContract;
    this._configuration.internalValue = config.configuration;
    this._groupAttributeContract.internalValue = config.groupAttributeContract;
    this._name = config.name;
    this._parentRef.internalValue = config.parentRef;
    this._pluginDescriptorRef.internalValue = config.pluginDescriptorRef;
    this._provisionerId = config.provisionerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new IdentityStoreProvisionerAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: IdentityStoreProvisionerAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new IdentityStoreProvisionerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: IdentityStoreProvisionerConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // group_attribute_contract - computed: false, optional: false, required: true
  private _groupAttributeContract = new IdentityStoreProvisionerGroupAttributeContractOutputReference(this, "group_attribute_contract");
  public get groupAttributeContract() {
    return this._groupAttributeContract;
  }
  public putGroupAttributeContract(value: IdentityStoreProvisionerGroupAttributeContract) {
    this._groupAttributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeContractInput() {
    return this._groupAttributeContract.internalValue;
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
  private _parentRef = new IdentityStoreProvisionerParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: IdentityStoreProvisionerParentRef) {
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
  private _pluginDescriptorRef = new IdentityStoreProvisionerPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
  public putPluginDescriptorRef(value: IdentityStoreProvisionerPluginDescriptorRef) {
    this._pluginDescriptorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDescriptorRefInput() {
    return this._pluginDescriptorRef.internalValue;
  }

  // provisioner_id - computed: false, optional: false, required: true
  private _provisionerId?: string; 
  public get provisionerId() {
    return this.getStringAttribute('provisioner_id');
  }
  public set provisionerId(value: string) {
    this._provisionerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerIdInput() {
    return this._provisionerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_contract: identityStoreProvisionerAttributeContractToTerraform(this._attributeContract.internalValue),
      configuration: identityStoreProvisionerConfigurationToTerraform(this._configuration.internalValue),
      group_attribute_contract: identityStoreProvisionerGroupAttributeContractToTerraform(this._groupAttributeContract.internalValue),
      name: cdktf.stringToTerraform(this._name),
      parent_ref: identityStoreProvisionerParentRefToTerraform(this._parentRef.internalValue),
      plugin_descriptor_ref: identityStoreProvisionerPluginDescriptorRefToTerraform(this._pluginDescriptorRef.internalValue),
      provisioner_id: cdktf.stringToTerraform(this._provisionerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_contract: {
        value: identityStoreProvisionerAttributeContractToHclTerraform(this._attributeContract.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStoreProvisionerAttributeContract",
      },
      configuration: {
        value: identityStoreProvisionerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStoreProvisionerConfiguration",
      },
      group_attribute_contract: {
        value: identityStoreProvisionerGroupAttributeContractToHclTerraform(this._groupAttributeContract.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStoreProvisionerGroupAttributeContract",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: identityStoreProvisionerParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStoreProvisionerParentRef",
      },
      plugin_descriptor_ref: {
        value: identityStoreProvisionerPluginDescriptorRefToHclTerraform(this._pluginDescriptorRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityStoreProvisionerPluginDescriptorRef",
      },
      provisioner_id: {
        value: cdktf.stringToHclTerraform(this._provisionerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
