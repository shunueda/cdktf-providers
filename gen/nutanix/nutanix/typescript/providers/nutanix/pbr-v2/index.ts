// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PbrV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#description PbrV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ext_id PbrV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#id PbrV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#name PbrV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#priority PbrV2#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#vpc_ext_id PbrV2#vpc_ext_id}
  */
  readonly vpcExtId: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#policies PbrV2#policies}
  */
  readonly policies: PbrV2Policies[] | cdktf.IResolvable;
}
export interface PbrV2Links {
}

export function pbrV2LinksToTerraform(struct?: PbrV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pbrV2LinksToHclTerraform(struct?: PbrV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PbrV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class PbrV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): PbrV2LinksOutputReference {
    return new PbrV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2Metadata {
}

export function pbrV2MetadataToTerraform(struct?: PbrV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pbrV2MetadataToHclTerraform(struct?: PbrV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PbrV2MetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class PbrV2MetadataList extends cdktf.ComplexList {

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
  public get(index: number): PbrV2MetadataOutputReference {
    return new PbrV2MetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2Vpc {
}

export function pbrV2VpcToTerraform(struct?: PbrV2Vpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pbrV2VpcToHclTerraform(struct?: PbrV2Vpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PbrV2VpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2Vpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2Vpc | undefined) {
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
}

export class PbrV2VpcList extends cdktf.ComplexList {

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
  public get(index: number): PbrV2VpcOutputReference {
    return new PbrV2VpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionNexthopIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionNexthopIpAddressIpv4ToTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionNexthopIpAddressIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionNexthopIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionNexthopIpAddressIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionNexthopIpAddressIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionNexthopIpAddressIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionNexthopIpAddressIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionNexthopIpAddressIpv4OutputReference {
    return new PbrV2PoliciesPolicyActionNexthopIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionNexthopIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionNexthopIpAddressIpv6ToTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionNexthopIpAddressIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionNexthopIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionNexthopIpAddressIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionNexthopIpAddressIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionNexthopIpAddressIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionNexthopIpAddressIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionNexthopIpAddressIpv6OutputReference {
    return new PbrV2PoliciesPolicyActionNexthopIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionNexthopIpAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyActionNexthopIpAddressIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionNexthopIpAddressToTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyActionNexthopIpAddressIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyActionNexthopIpAddressIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyActionNexthopIpAddressToHclTerraform(struct?: PbrV2PoliciesPolicyActionNexthopIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionNexthopIpAddressIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionNexthopIpAddressIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionNexthopIpAddressIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionNexthopIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionNexthopIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionNexthopIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionNexthopIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyActionNexthopIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyActionNexthopIpAddressIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyActionNexthopIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyActionNexthopIpAddressIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionNexthopIpAddressList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionNexthopIpAddress[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionNexthopIpAddressOutputReference {
    return new PbrV2PoliciesPolicyActionNexthopIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6ToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParamsServiceIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsServiceIpToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParamsServiceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParamsServiceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionRerouteParamsServiceIpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParamsServiceIp[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsServiceIpOutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsServiceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyActionRerouteParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#reroute_fallback_action PbrV2#reroute_fallback_action}
  */
  readonly rerouteFallbackAction?: string;
  /**
  * egress_service_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#egress_service_ip PbrV2#egress_service_ip}
  */
  readonly egressServiceIp?: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp[] | cdktf.IResolvable;
  /**
  * ingress_service_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ingress_service_ip PbrV2#ingress_service_ip}
  */
  readonly ingressServiceIp?: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp[] | cdktf.IResolvable;
  /**
  * service_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#service_ip PbrV2#service_ip}
  */
  readonly serviceIp?: PbrV2PoliciesPolicyActionRerouteParamsServiceIp[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionRerouteParamsToTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reroute_fallback_action: cdktf.stringToTerraform(struct!.rerouteFallbackAction),
    egress_service_ip: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpToTerraform, true)(struct!.egressServiceIp),
    ingress_service_ip: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpToTerraform, true)(struct!.ingressServiceIp),
    service_ip: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsServiceIpToTerraform, true)(struct!.serviceIp),
  }
}


export function pbrV2PoliciesPolicyActionRerouteParamsToHclTerraform(struct?: PbrV2PoliciesPolicyActionRerouteParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reroute_fallback_action: {
      value: cdktf.stringToHclTerraform(struct!.rerouteFallbackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_service_ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpToHclTerraform, true)(struct!.egressServiceIp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpList",
    },
    ingress_service_ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpToHclTerraform, true)(struct!.ingressServiceIp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpList",
    },
    service_ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsServiceIpToHclTerraform, true)(struct!.serviceIp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsServiceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionRerouteParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyActionRerouteParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rerouteFallbackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.rerouteFallbackAction = this._rerouteFallbackAction;
    }
    if (this._egressServiceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressServiceIp = this._egressServiceIp?.internalValue;
    }
    if (this._ingressServiceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressServiceIp = this._ingressServiceIp?.internalValue;
    }
    if (this._serviceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyActionRerouteParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rerouteFallbackAction = undefined;
      this._egressServiceIp.internalValue = undefined;
      this._ingressServiceIp.internalValue = undefined;
      this._serviceIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rerouteFallbackAction = value.rerouteFallbackAction;
      this._egressServiceIp.internalValue = value.egressServiceIp;
      this._ingressServiceIp.internalValue = value.ingressServiceIp;
      this._serviceIp.internalValue = value.serviceIp;
    }
  }

  // reroute_fallback_action - computed: true, optional: true, required: false
  private _rerouteFallbackAction?: string; 
  public get rerouteFallbackAction() {
    return this.getStringAttribute('reroute_fallback_action');
  }
  public set rerouteFallbackAction(value: string) {
    this._rerouteFallbackAction = value;
  }
  public resetRerouteFallbackAction() {
    this._rerouteFallbackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerouteFallbackActionInput() {
    return this._rerouteFallbackAction;
  }

  // egress_service_ip - computed: false, optional: true, required: false
  private _egressServiceIp = new PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIpList(this, "egress_service_ip", false);
  public get egressServiceIp() {
    return this._egressServiceIp;
  }
  public putEgressServiceIp(value: PbrV2PoliciesPolicyActionRerouteParamsEgressServiceIp[] | cdktf.IResolvable) {
    this._egressServiceIp.internalValue = value;
  }
  public resetEgressServiceIp() {
    this._egressServiceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressServiceIpInput() {
    return this._egressServiceIp.internalValue;
  }

  // ingress_service_ip - computed: false, optional: true, required: false
  private _ingressServiceIp = new PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIpList(this, "ingress_service_ip", false);
  public get ingressServiceIp() {
    return this._ingressServiceIp;
  }
  public putIngressServiceIp(value: PbrV2PoliciesPolicyActionRerouteParamsIngressServiceIp[] | cdktf.IResolvable) {
    this._ingressServiceIp.internalValue = value;
  }
  public resetIngressServiceIp() {
    this._ingressServiceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressServiceIpInput() {
    return this._ingressServiceIp.internalValue;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp = new PbrV2PoliciesPolicyActionRerouteParamsServiceIpList(this, "service_ip", false);
  public get serviceIp() {
    return this._serviceIp;
  }
  public putServiceIp(value: PbrV2PoliciesPolicyActionRerouteParamsServiceIp[] | cdktf.IResolvable) {
    this._serviceIp.internalValue = value;
  }
  public resetServiceIp() {
    this._serviceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionRerouteParamsList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyActionRerouteParams[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionRerouteParamsOutputReference {
    return new PbrV2PoliciesPolicyActionRerouteParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#action_type PbrV2#action_type}
  */
  readonly actionType: string;
  /**
  * nexthop_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#nexthop_ip_address PbrV2#nexthop_ip_address}
  */
  readonly nexthopIpAddress?: PbrV2PoliciesPolicyActionNexthopIpAddress[] | cdktf.IResolvable;
  /**
  * reroute_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#reroute_params PbrV2#reroute_params}
  */
  readonly rerouteParams?: PbrV2PoliciesPolicyActionRerouteParams[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyActionToTerraform(struct?: PbrV2PoliciesPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    nexthop_ip_address: cdktf.listMapper(pbrV2PoliciesPolicyActionNexthopIpAddressToTerraform, true)(struct!.nexthopIpAddress),
    reroute_params: cdktf.listMapper(pbrV2PoliciesPolicyActionRerouteParamsToTerraform, true)(struct!.rerouteParams),
  }
}


export function pbrV2PoliciesPolicyActionToHclTerraform(struct?: PbrV2PoliciesPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_ip_address: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionNexthopIpAddressToHclTerraform, true)(struct!.nexthopIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionNexthopIpAddressList",
    },
    reroute_params: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionRerouteParamsToHclTerraform, true)(struct!.rerouteParams),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionRerouteParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._nexthopIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopIpAddress = this._nexthopIpAddress?.internalValue;
    }
    if (this._rerouteParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rerouteParams = this._rerouteParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._nexthopIpAddress.internalValue = undefined;
      this._rerouteParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._nexthopIpAddress.internalValue = value.nexthopIpAddress;
      this._rerouteParams.internalValue = value.rerouteParams;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // nexthop_ip_address - computed: false, optional: true, required: false
  private _nexthopIpAddress = new PbrV2PoliciesPolicyActionNexthopIpAddressList(this, "nexthop_ip_address", false);
  public get nexthopIpAddress() {
    return this._nexthopIpAddress;
  }
  public putNexthopIpAddress(value: PbrV2PoliciesPolicyActionNexthopIpAddress[] | cdktf.IResolvable) {
    this._nexthopIpAddress.internalValue = value;
  }
  public resetNexthopIpAddress() {
    this._nexthopIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpAddressInput() {
    return this._nexthopIpAddress.internalValue;
  }

  // reroute_params - computed: false, optional: true, required: false
  private _rerouteParams = new PbrV2PoliciesPolicyActionRerouteParamsList(this, "reroute_params", false);
  public get rerouteParams() {
    return this._rerouteParams;
  }
  public putRerouteParams(value: PbrV2PoliciesPolicyActionRerouteParams[] | cdktf.IResolvable) {
    this._rerouteParams.internalValue = value;
  }
  public resetRerouteParams() {
    this._rerouteParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerouteParamsInput() {
    return this._rerouteParams.internalValue;
  }
}

export class PbrV2PoliciesPolicyActionList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyAction[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyActionOutputReference {
    return new PbrV2PoliciesPolicyActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ip PbrV2#ip}
  */
  readonly ip?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4ToTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToTerraform, true)(struct!.ip),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4Ip[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ip PbrV2#ip}
  */
  readonly ip?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6ToTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToTerraform, true)(struct!.ip),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6Ip[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestinationSubnetPrefix {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixToTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationSubnetPrefixToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestinationSubnetPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefixIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchDestinationSubnetPrefixList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestinationSubnetPrefix[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationSubnetPrefixOutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#address_type PbrV2#address_type}
  */
  readonly addressType: string;
  /**
  * subnet_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#subnet_prefix PbrV2#subnet_prefix}
  */
  readonly subnetPrefix?: PbrV2PoliciesPolicyMatchDestinationSubnetPrefix[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchDestinationToTerraform(struct?: PbrV2PoliciesPolicyMatchDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    subnet_prefix: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixToTerraform, true)(struct!.subnetPrefix),
  }
}


export function pbrV2PoliciesPolicyMatchDestinationToHclTerraform(struct?: PbrV2PoliciesPolicyMatchDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_prefix: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationSubnetPrefixToHclTerraform, true)(struct!.subnetPrefix),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationSubnetPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._subnetPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetPrefix = this._subnetPrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._subnetPrefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._subnetPrefix.internalValue = value.subnetPrefix;
    }
  }

  // address_type - computed: false, optional: false, required: true
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // subnet_prefix - computed: false, optional: true, required: false
  private _subnetPrefix = new PbrV2PoliciesPolicyMatchDestinationSubnetPrefixList(this, "subnet_prefix", false);
  public get subnetPrefix() {
    return this._subnetPrefix;
  }
  public putSubnetPrefix(value: PbrV2PoliciesPolicyMatchDestinationSubnetPrefix[] | cdktf.IResolvable) {
    this._subnetPrefix.internalValue = value;
  }
  public resetSubnetPrefix() {
    this._subnetPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPrefixInput() {
    return this._subnetPrefix.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchDestinationList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchDestination[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchDestinationOutputReference {
    return new PbrV2PoliciesPolicyMatchDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#icmp_code PbrV2#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#icmp_type PbrV2#icmp_type}
  */
  readonly icmpType?: number;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
    }
  }

  // icmp_code - computed: true, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: true, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#end_port PbrV2#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#start_port PbrV2#start_port}
  */
  readonly startPort: number;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#end_port PbrV2#end_port}
  */
  readonly endPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#start_port PbrV2#start_port}
  */
  readonly startPort: number;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: false, optional: false, required: true
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject {
  /**
  * destination_port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#destination_port_ranges PbrV2#destination_port_ranges}
  */
  readonly destinationPortRanges?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges[] | cdktf.IResolvable;
  /**
  * source_port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#source_port_ranges PbrV2#source_port_ranges}
  */
  readonly sourcePortRanges?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_ranges: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToTerraform, true)(struct!.destinationPortRanges),
    source_port_ranges: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToTerraform, true)(struct!.sourcePortRanges),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_ranges: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesToHclTerraform, true)(struct!.destinationPortRanges),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesList",
    },
    source_port_ranges: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesToHclTerraform, true)(struct!.sourcePortRanges),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRanges = this._destinationPortRanges?.internalValue;
    }
    if (this._sourcePortRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRanges = this._sourcePortRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPortRanges.internalValue = undefined;
      this._sourcePortRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPortRanges.internalValue = value.destinationPortRanges;
      this._sourcePortRanges.internalValue = value.sourcePortRanges;
    }
  }

  // destination_port_ranges - computed: false, optional: true, required: false
  private _destinationPortRanges = new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }
  public putDestinationPortRanges(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectDestinationPortRanges[] | cdktf.IResolvable) {
    this._destinationPortRanges.internalValue = value;
  }
  public resetDestinationPortRanges() {
    this._destinationPortRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges.internalValue;
  }

  // source_port_ranges - computed: false, optional: true, required: false
  private _sourcePortRanges = new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
  public putSourcePortRanges(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectSourcePortRanges[] | cdktf.IResolvable) {
    this._sourcePortRanges.internalValue = value;
  }
  public resetSourcePortRanges() {
    this._sourcePortRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#protocol_number PbrV2#protocol_number}
  */
  readonly protocolNumber: number;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_number: cdktf.numberToTerraform(struct!.protocolNumber),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_number: {
      value: cdktf.numberToHclTerraform(struct!.protocolNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolNumber = this._protocolNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolNumber = value.protocolNumber;
    }
  }

  // protocol_number - computed: false, optional: false, required: true
  private _protocolNumber?: number; 
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
  public set protocolNumber(value: number) {
    this._protocolNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchProtocolParameters {
  /**
  * icmp_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#icmp_object PbrV2#icmp_object}
  */
  readonly icmpObject?: PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject[] | cdktf.IResolvable;
  /**
  * layer_four_protocol_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#layer_four_protocol_object PbrV2#layer_four_protocol_object}
  */
  readonly layerFourProtocolObject?: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject[] | cdktf.IResolvable;
  /**
  * protocol_number_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#protocol_number_object PbrV2#protocol_number_object}
  */
  readonly protocolNumberObject?: PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchProtocolParametersToTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_object: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectToTerraform, true)(struct!.icmpObject),
    layer_four_protocol_object: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToTerraform, true)(struct!.layerFourProtocolObject),
    protocol_number_object: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectToTerraform, true)(struct!.protocolNumberObject),
  }
}


export function pbrV2PoliciesPolicyMatchProtocolParametersToHclTerraform(struct?: PbrV2PoliciesPolicyMatchProtocolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_object: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectToHclTerraform, true)(struct!.icmpObject),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectList",
    },
    layer_four_protocol_object: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectToHclTerraform, true)(struct!.layerFourProtocolObject),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectList",
    },
    protocol_number_object: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectToHclTerraform, true)(struct!.protocolNumberObject),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchProtocolParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchProtocolParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpObject = this._icmpObject?.internalValue;
    }
    if (this._layerFourProtocolObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layerFourProtocolObject = this._layerFourProtocolObject?.internalValue;
    }
    if (this._protocolNumberObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolNumberObject = this._protocolNumberObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchProtocolParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpObject.internalValue = undefined;
      this._layerFourProtocolObject.internalValue = undefined;
      this._protocolNumberObject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpObject.internalValue = value.icmpObject;
      this._layerFourProtocolObject.internalValue = value.layerFourProtocolObject;
      this._protocolNumberObject.internalValue = value.protocolNumberObject;
    }
  }

  // icmp_object - computed: false, optional: true, required: false
  private _icmpObject = new PbrV2PoliciesPolicyMatchProtocolParametersIcmpObjectList(this, "icmp_object", false);
  public get icmpObject() {
    return this._icmpObject;
  }
  public putIcmpObject(value: PbrV2PoliciesPolicyMatchProtocolParametersIcmpObject[] | cdktf.IResolvable) {
    this._icmpObject.internalValue = value;
  }
  public resetIcmpObject() {
    this._icmpObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpObjectInput() {
    return this._icmpObject.internalValue;
  }

  // layer_four_protocol_object - computed: false, optional: true, required: false
  private _layerFourProtocolObject = new PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObjectList(this, "layer_four_protocol_object", false);
  public get layerFourProtocolObject() {
    return this._layerFourProtocolObject;
  }
  public putLayerFourProtocolObject(value: PbrV2PoliciesPolicyMatchProtocolParametersLayerFourProtocolObject[] | cdktf.IResolvable) {
    this._layerFourProtocolObject.internalValue = value;
  }
  public resetLayerFourProtocolObject() {
    this._layerFourProtocolObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerFourProtocolObjectInput() {
    return this._layerFourProtocolObject.internalValue;
  }

  // protocol_number_object - computed: false, optional: true, required: false
  private _protocolNumberObject = new PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObjectList(this, "protocol_number_object", false);
  public get protocolNumberObject() {
    return this._protocolNumberObject;
  }
  public putProtocolNumberObject(value: PbrV2PoliciesPolicyMatchProtocolParametersProtocolNumberObject[] | cdktf.IResolvable) {
    this._protocolNumberObject.internalValue = value;
  }
  public resetProtocolNumberObject() {
    this._protocolNumberObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberObjectInput() {
    return this._protocolNumberObject.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchProtocolParametersList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchProtocolParameters[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchProtocolParametersOutputReference {
    return new PbrV2PoliciesPolicyMatchProtocolParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpToTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference {
    return new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ip PbrV2#ip}
  */
  readonly ip?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4ToTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpToTerraform, true)(struct!.ip),
  }
}


export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4ToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4Ip[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference {
    return new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#value PbrV2#value}
  */
  readonly value?: string;
}

export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpToTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference {
    return new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#prefix_length PbrV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ip PbrV2#ip}
  */
  readonly ip?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6ToTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpToTerraform, true)(struct!.ip),
  }
}


export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6ToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6Ip[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6List extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference {
    return new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSourceSubnetPrefix {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv4 PbrV2#ipv4}
  */
  readonly ipv4?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#ipv6 PbrV2#ipv6}
  */
  readonly ipv6?: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixToTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function pbrV2PoliciesPolicyMatchSourceSubnetPrefixToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSourceSubnetPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSourceSubnetPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefixIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchSourceSubnetPrefixList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSourceSubnetPrefix[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceSubnetPrefixOutputReference {
    return new PbrV2PoliciesPolicyMatchSourceSubnetPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatchSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#address_type PbrV2#address_type}
  */
  readonly addressType: string;
  /**
  * subnet_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#subnet_prefix PbrV2#subnet_prefix}
  */
  readonly subnetPrefix?: PbrV2PoliciesPolicyMatchSourceSubnetPrefix[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchSourceToTerraform(struct?: PbrV2PoliciesPolicyMatchSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    subnet_prefix: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceSubnetPrefixToTerraform, true)(struct!.subnetPrefix),
  }
}


export function pbrV2PoliciesPolicyMatchSourceToHclTerraform(struct?: PbrV2PoliciesPolicyMatchSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_prefix: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceSubnetPrefixToHclTerraform, true)(struct!.subnetPrefix),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceSubnetPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatchSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._subnetPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetPrefix = this._subnetPrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatchSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._subnetPrefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._subnetPrefix.internalValue = value.subnetPrefix;
    }
  }

  // address_type - computed: false, optional: false, required: true
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // subnet_prefix - computed: false, optional: true, required: false
  private _subnetPrefix = new PbrV2PoliciesPolicyMatchSourceSubnetPrefixList(this, "subnet_prefix", false);
  public get subnetPrefix() {
    return this._subnetPrefix;
  }
  public putSubnetPrefix(value: PbrV2PoliciesPolicyMatchSourceSubnetPrefix[] | cdktf.IResolvable) {
    this._subnetPrefix.internalValue = value;
  }
  public resetSubnetPrefix() {
    this._subnetPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPrefixInput() {
    return this._subnetPrefix.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchSourceList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatchSource[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchSourceOutputReference {
    return new PbrV2PoliciesPolicyMatchSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2PoliciesPolicyMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#protocol_type PbrV2#protocol_type}
  */
  readonly protocolType: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#destination PbrV2#destination}
  */
  readonly destination: PbrV2PoliciesPolicyMatchDestination[] | cdktf.IResolvable;
  /**
  * protocol_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#protocol_parameters PbrV2#protocol_parameters}
  */
  readonly protocolParameters?: PbrV2PoliciesPolicyMatchProtocolParameters[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#source PbrV2#source}
  */
  readonly source: PbrV2PoliciesPolicyMatchSource[] | cdktf.IResolvable;
}

export function pbrV2PoliciesPolicyMatchToTerraform(struct?: PbrV2PoliciesPolicyMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    destination: cdktf.listMapper(pbrV2PoliciesPolicyMatchDestinationToTerraform, true)(struct!.destination),
    protocol_parameters: cdktf.listMapper(pbrV2PoliciesPolicyMatchProtocolParametersToTerraform, true)(struct!.protocolParameters),
    source: cdktf.listMapper(pbrV2PoliciesPolicyMatchSourceToTerraform, true)(struct!.source),
  }
}


export function pbrV2PoliciesPolicyMatchToHclTerraform(struct?: PbrV2PoliciesPolicyMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchDestinationList",
    },
    protocol_parameters: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchProtocolParametersToHclTerraform, true)(struct!.protocolParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchProtocolParametersList",
    },
    source: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesPolicyMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2PoliciesPolicyMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._protocolParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolParameters = this._protocolParameters?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2PoliciesPolicyMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolType = undefined;
      this._destination.internalValue = undefined;
      this._protocolParameters.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolType = value.protocolType;
      this._destination.internalValue = value.destination;
      this._protocolParameters.internalValue = value.protocolParameters;
      this._source.internalValue = value.source;
    }
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new PbrV2PoliciesPolicyMatchDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: PbrV2PoliciesPolicyMatchDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // protocol_parameters - computed: false, optional: true, required: false
  private _protocolParameters = new PbrV2PoliciesPolicyMatchProtocolParametersList(this, "protocol_parameters", false);
  public get protocolParameters() {
    return this._protocolParameters;
  }
  public putProtocolParameters(value: PbrV2PoliciesPolicyMatchProtocolParameters[] | cdktf.IResolvable) {
    this._protocolParameters.internalValue = value;
  }
  public resetProtocolParameters() {
    this._protocolParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolParametersInput() {
    return this._protocolParameters.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new PbrV2PoliciesPolicyMatchSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: PbrV2PoliciesPolicyMatchSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class PbrV2PoliciesPolicyMatchList extends cdktf.ComplexList {
  public internalValue? : PbrV2PoliciesPolicyMatch[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesPolicyMatchOutputReference {
    return new PbrV2PoliciesPolicyMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrV2Policies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#is_bidirectional PbrV2#is_bidirectional}
  */
  readonly isBidirectional?: boolean | cdktf.IResolvable;
  /**
  * policy_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#policy_action PbrV2#policy_action}
  */
  readonly policyAction: PbrV2PoliciesPolicyAction[] | cdktf.IResolvable;
  /**
  * policy_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#policy_match PbrV2#policy_match}
  */
  readonly policyMatch: PbrV2PoliciesPolicyMatch[] | cdktf.IResolvable;
}

export function pbrV2PoliciesToTerraform(struct?: PbrV2Policies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_bidirectional: cdktf.booleanToTerraform(struct!.isBidirectional),
    policy_action: cdktf.listMapper(pbrV2PoliciesPolicyActionToTerraform, true)(struct!.policyAction),
    policy_match: cdktf.listMapper(pbrV2PoliciesPolicyMatchToTerraform, true)(struct!.policyMatch),
  }
}


export function pbrV2PoliciesToHclTerraform(struct?: PbrV2Policies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_bidirectional: {
      value: cdktf.booleanToHclTerraform(struct!.isBidirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_action: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyActionToHclTerraform, true)(struct!.policyAction),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyActionList",
    },
    policy_match: {
      value: cdktf.listMapperHcl(pbrV2PoliciesPolicyMatchToHclTerraform, true)(struct!.policyMatch),
      isBlock: true,
      type: "list",
      storageClassType: "PbrV2PoliciesPolicyMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrV2PoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrV2Policies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isBidirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBidirectional = this._isBidirectional;
    }
    if (this._policyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyAction = this._policyAction?.internalValue;
    }
    if (this._policyMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMatch = this._policyMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrV2Policies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isBidirectional = undefined;
      this._policyAction.internalValue = undefined;
      this._policyMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isBidirectional = value.isBidirectional;
      this._policyAction.internalValue = value.policyAction;
      this._policyMatch.internalValue = value.policyMatch;
    }
  }

  // is_bidirectional - computed: true, optional: true, required: false
  private _isBidirectional?: boolean | cdktf.IResolvable; 
  public get isBidirectional() {
    return this.getBooleanAttribute('is_bidirectional');
  }
  public set isBidirectional(value: boolean | cdktf.IResolvable) {
    this._isBidirectional = value;
  }
  public resetIsBidirectional() {
    this._isBidirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBidirectionalInput() {
    return this._isBidirectional;
  }

  // policy_action - computed: false, optional: false, required: true
  private _policyAction = new PbrV2PoliciesPolicyActionList(this, "policy_action", false);
  public get policyAction() {
    return this._policyAction;
  }
  public putPolicyAction(value: PbrV2PoliciesPolicyAction[] | cdktf.IResolvable) {
    this._policyAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction.internalValue;
  }

  // policy_match - computed: false, optional: false, required: true
  private _policyMatch = new PbrV2PoliciesPolicyMatchList(this, "policy_match", false);
  public get policyMatch() {
    return this._policyMatch;
  }
  public putPolicyMatch(value: PbrV2PoliciesPolicyMatch[] | cdktf.IResolvable) {
    this._policyMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMatchInput() {
    return this._policyMatch.internalValue;
  }
}

export class PbrV2PoliciesList extends cdktf.ComplexList {
  public internalValue? : PbrV2Policies[] | cdktf.IResolvable

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
  public get(index: number): PbrV2PoliciesOutputReference {
    return new PbrV2PoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2 nutanix_pbr_v2}
*/
export class PbrV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pbr_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PbrV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PbrV2 to import
  * @param importFromId The id of the existing PbrV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PbrV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pbr_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pbr_v2 nutanix_pbr_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PbrV2Config
  */
  public constructor(scope: Construct, id: string, config: PbrV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pbr_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._extId = config.extId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._vpcExtId = config.vpcExtId;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // links - computed: true, optional: false, required: false
  private _links = new PbrV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new PbrV2MetadataList(this, "metadata", false);
  public get metadata() {
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new PbrV2VpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }

  // vpc_ext_id - computed: false, optional: false, required: true
  private _vpcExtId?: string; 
  public get vpcExtId() {
    return this.getStringAttribute('vpc_ext_id');
  }
  public set vpcExtId(value: string) {
    this._vpcExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcExtIdInput() {
    return this._vpcExtId;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new PbrV2PoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PbrV2Policies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      vpc_ext_id: cdktf.stringToTerraform(this._vpcExtId),
      policies: cdktf.listMapper(pbrV2PoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_ext_id: {
        value: cdktf.stringToHclTerraform(this._vpcExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(pbrV2PoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PbrV2PoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
