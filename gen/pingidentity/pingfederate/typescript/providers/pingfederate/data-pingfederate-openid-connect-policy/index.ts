// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateOpenidConnectPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether a Session Reference Identifier is included in the ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy#include_sri_in_id_token DataPingfederateOpenidConnectPolicy#include_sri_in_id_token}
  */
  readonly includeSriInIdToken?: boolean | cdktf.IResolvable;
  /**
  * The policy ID used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy#policy_id DataPingfederateOpenidConnectPolicy#policy_id}
  */
  readonly policyId: string;
}
export interface DataPingfederateOpenidConnectPolicyAccessTokenManagerRef {
}

export function dataPingfederateOpenidConnectPolicyAccessTokenManagerRefToTerraform(struct?: DataPingfederateOpenidConnectPolicyAccessTokenManagerRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAccessTokenManagerRefToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAccessTokenManagerRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAccessTokenManagerRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAccessTokenManagerRef | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributes {
}

export function dataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_in_id_token - computed: true, optional: false, required: false
  public get includeInIdToken() {
    return this.getBooleanAttribute('include_in_id_token');
  }

  // include_in_user_info - computed: true, optional: false, required: false
  public get includeInUserInfo() {
    return this.getBooleanAttribute('include_in_user_info');
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes {
}

export function dataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // include_in_id_token - computed: true, optional: false, required: false
  public get includeInIdToken() {
    return this.getBooleanAttribute('include_in_id_token');
  }

  // include_in_user_info - computed: true, optional: false, required: false
  public get includeInUserInfo() {
    return this.getBooleanAttribute('include_in_user_info');
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeContract {
  /**
  * A list of additional attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy#extended_attributes DataPingfederateOpenidConnectPolicy#extended_attributes}
  */
  readonly extendedAttributes?: DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function dataPingfederateOpenidConnectPolicyAttributeContractToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_attributes: cdktf.listMapper(dataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeContractToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_attributes: {
      value: cdktf.listMapperHcl(dataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateOpenidConnectPolicyAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendedAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateOpenidConnectPolicyAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: DataPingfederateOpenidConnectPolicyAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSource | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillment {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
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

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
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

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy#search_attributes DataPingfederateOpenidConnectPolicy#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSource): any {
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

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSource | undefined) {
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
  private _attributeContractFulfillment = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSources {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
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
export interface DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteria | undefined) {
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
  private _source = new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteria | undefined) {
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

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteria {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateOpenidConnectPolicyAttributeMapping {
}

export function dataPingfederateOpenidConnectPolicyAttributeMappingToTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyAttributeMappingToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyAttributeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyAttributeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateOpenidConnectPolicyAttributeMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateOpenidConnectPolicyAttributeMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
}
export interface DataPingfederateOpenidConnectPolicyScopeAttributeMappings {
}

export function dataPingfederateOpenidConnectPolicyScopeAttributeMappingsToTerraform(struct?: DataPingfederateOpenidConnectPolicyScopeAttributeMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOpenidConnectPolicyScopeAttributeMappingsToHclTerraform(struct?: DataPingfederateOpenidConnectPolicyScopeAttributeMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOpenidConnectPolicyScopeAttributeMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOpenidConnectPolicyScopeAttributeMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOpenidConnectPolicyScopeAttributeMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataPingfederateOpenidConnectPolicyScopeAttributeMappingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataPingfederateOpenidConnectPolicyScopeAttributeMappingsOutputReference {
    return new DataPingfederateOpenidConnectPolicyScopeAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy pingfederate_openid_connect_policy}
*/
export class DataPingfederateOpenidConnectPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_openid_connect_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateOpenidConnectPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateOpenidConnectPolicy to import
  * @param importFromId The id of the existing DataPingfederateOpenidConnectPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateOpenidConnectPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_openid_connect_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/openid_connect_policy pingfederate_openid_connect_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateOpenidConnectPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateOpenidConnectPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_openid_connect_policy',
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
    this._includeSriInIdToken = config.includeSriInIdToken;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_manager_ref - computed: true, optional: false, required: false
  private _accessTokenManagerRef = new DataPingfederateOpenidConnectPolicyAccessTokenManagerRefOutputReference(this, "access_token_manager_ref");
  public get accessTokenManagerRef() {
    return this._accessTokenManagerRef;
  }

  // allow_id_token_introspection - computed: true, optional: false, required: false
  public get allowIdTokenIntrospection() {
    return this.getBooleanAttribute('allow_id_token_introspection');
  }

  // attribute_contract - computed: true, optional: false, required: false
  private _attributeContract = new DataPingfederateOpenidConnectPolicyAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }

  // attribute_mapping - computed: true, optional: false, required: false
  private _attributeMapping = new DataPingfederateOpenidConnectPolicyAttributeMappingOutputReference(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_lifetime - computed: true, optional: false, required: false
  public get idTokenLifetime() {
    return this.getNumberAttribute('id_token_lifetime');
  }

  // id_token_typ_header_value - computed: true, optional: false, required: false
  public get idTokenTypHeaderValue() {
    return this.getStringAttribute('id_token_typ_header_value');
  }

  // include_s_hash_in_id_token - computed: true, optional: false, required: false
  public get includeSHashInIdToken() {
    return this.getBooleanAttribute('include_s_hash_in_id_token');
  }

  // include_sri_in_id_token - computed: true, optional: true, required: false
  private _includeSriInIdToken?: boolean | cdktf.IResolvable; 
  public get includeSriInIdToken() {
    return this.getBooleanAttribute('include_sri_in_id_token');
  }
  public set includeSriInIdToken(value: boolean | cdktf.IResolvable) {
    this._includeSriInIdToken = value;
  }
  public resetIncludeSriInIdToken() {
    this._includeSriInIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSriInIdTokenInput() {
    return this._includeSriInIdToken;
  }

  // include_user_info_in_id_token - computed: true, optional: false, required: false
  public get includeUserInfoInIdToken() {
    return this.getBooleanAttribute('include_user_info_in_id_token');
  }

  // include_x5t_in_id_token - computed: true, optional: false, required: false
  public get includeX5TInIdToken() {
    return this.getBooleanAttribute('include_x5t_in_id_token');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // reissue_id_token_in_hybrid_flow - computed: true, optional: false, required: false
  public get reissueIdTokenInHybridFlow() {
    return this.getBooleanAttribute('reissue_id_token_in_hybrid_flow');
  }

  // return_id_token_on_refresh_grant - computed: true, optional: false, required: false
  public get returnIdTokenOnRefreshGrant() {
    return this.getBooleanAttribute('return_id_token_on_refresh_grant');
  }

  // return_id_token_on_token_exchange_grant - computed: true, optional: false, required: false
  public get returnIdTokenOnTokenExchangeGrant() {
    return this.getBooleanAttribute('return_id_token_on_token_exchange_grant');
  }

  // scope_attribute_mappings - computed: true, optional: false, required: false
  private _scopeAttributeMappings = new DataPingfederateOpenidConnectPolicyScopeAttributeMappingsMap(this, "scope_attribute_mappings");
  public get scopeAttributeMappings() {
    return this._scopeAttributeMappings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_sri_in_id_token: cdktf.booleanToTerraform(this._includeSriInIdToken),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_sri_in_id_token: {
        value: cdktf.booleanToHclTerraform(this._includeSriInIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
