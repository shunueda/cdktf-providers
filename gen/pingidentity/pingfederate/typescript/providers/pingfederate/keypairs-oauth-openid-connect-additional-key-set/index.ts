// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsOauthOpenidConnectAdditionalKeySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the key set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#description KeypairsOauthOpenidConnectAdditionalKeySet#description}
  */
  readonly description?: string;
  /**
  * A list of virtual issuers that will use the current key set. Once assigned to a key set, the same virtual issuer cannot be assigned to another key set instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#issuers KeypairsOauthOpenidConnectAdditionalKeySet#issuers}
  */
  readonly issuers: KeypairsOauthOpenidConnectAdditionalKeySetIssuers[] | cdktf.IResolvable;
  /**
  * The key set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#name KeypairsOauthOpenidConnectAdditionalKeySet#name}
  */
  readonly name: string;
  /**
  * The unique ID for the key set. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#set_id KeypairsOauthOpenidConnectAdditionalKeySet#set_id}
  */
  readonly setId?: string;
  /**
  * Setting for a OAuth/OpenID Connect signing key set while using multiple virtual issuers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#signing_keys KeypairsOauthOpenidConnectAdditionalKeySet#signing_keys}
  */
  readonly signingKeys: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys;
}
export interface KeypairsOauthOpenidConnectAdditionalKeySetIssuers {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetIssuersToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetIssuers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetIssuersToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetIssuers | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetIssuersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetIssuers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetIssuers | cdktf.IResolvable | undefined) {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetIssuersList extends cdktf.ComplexList {
  public internalValue? : KeypairsOauthOpenidConnectAdditionalKeySetIssuers[] | cdktf.IResolvable

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
  public get(index: number): KeypairsOauthOpenidConnectAdditionalKeySetIssuersOutputReference {
    return new KeypairsOauthOpenidConnectAdditionalKeySetIssuersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds {
  /**
  * Unique key identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#key_id KeypairsOauthOpenidConnectAdditionalKeySet#key_id}
  */
  readonly keyId: string;
  /**
  * The RSA signing algorithm type. The supported RSA signing algorithm types are `RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_alg_type KeypairsOauthOpenidConnectAdditionalKeySet#rsa_alg_type}
  */
  readonly rsaAlgType: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    rsa_alg_type: cdktf.stringToTerraform(struct!.rsaAlgType),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_alg_type: {
      value: cdktf.stringToHclTerraform(struct!.rsaAlgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._rsaAlgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgType = this._rsaAlgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._rsaAlgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._rsaAlgType = value.rsaAlgType;
    }
  }

  // key_id - computed: true, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // rsa_alg_type - computed: true, optional: false, required: true
  private _rsaAlgType?: string; 
  public get rsaAlgType() {
    return this.getStringAttribute('rsa_alg_type');
  }
  public set rsaAlgType(value: string) {
    this._rsaAlgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgTypeInput() {
    return this._rsaAlgType;
  }
}

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsList extends cdktf.ComplexList {
  public internalValue? : KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable

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
  public get(index: number): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsOutputReference {
    return new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds {
  /**
  * Unique key identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#key_id KeypairsOauthOpenidConnectAdditionalKeySet#key_id}
  */
  readonly keyId: string;
  /**
  * The RSA signing algorithm type. The supported RSA signing algorithm types are `RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_alg_type KeypairsOauthOpenidConnectAdditionalKeySet#rsa_alg_type}
  */
  readonly rsaAlgType: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    rsa_alg_type: cdktf.stringToTerraform(struct!.rsaAlgType),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_alg_type: {
      value: cdktf.stringToHclTerraform(struct!.rsaAlgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._rsaAlgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgType = this._rsaAlgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._rsaAlgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._rsaAlgType = value.rsaAlgType;
    }
  }

  // key_id - computed: true, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // rsa_alg_type - computed: true, optional: false, required: true
  private _rsaAlgType?: string; 
  public get rsaAlgType() {
    return this.getStringAttribute('rsa_alg_type');
  }
  public set rsaAlgType(value: string) {
    this._rsaAlgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgTypeInput() {
    return this._rsaAlgType;
  }
}

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsList extends cdktf.ComplexList {
  public internalValue? : KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable

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
  public get(index: number): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsOutputReference {
    return new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#id KeypairsOauthOpenidConnectAdditionalKeySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys {
  /**
  * Reference to the P-256 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p256_active_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p256_active_cert_ref}
  */
  readonly p256ActiveCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef;
  /**
  * Key Id for currently active P-256 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p256_active_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p256_active_key_id}
  */
  readonly p256ActiveKeyId?: string;
  /**
  * Reference to the P-256 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p256_previous_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p256_previous_cert_ref}
  */
  readonly p256PreviousCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef;
  /**
  * Key Id for previously active P-256 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p256_previous_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p256_previous_key_id}
  */
  readonly p256PreviousKeyId?: string;
  /**
  * Enable publishing of the P-256 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p256_publish_x5c_parameter KeypairsOauthOpenidConnectAdditionalKeySet#p256_publish_x5c_parameter}
  */
  readonly p256PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-384 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p384_active_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p384_active_cert_ref}
  */
  readonly p384ActiveCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef;
  /**
  * Key Id for currently active P-384 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p384_active_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p384_active_key_id}
  */
  readonly p384ActiveKeyId?: string;
  /**
  * Reference to the P-384 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p384_previous_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p384_previous_cert_ref}
  */
  readonly p384PreviousCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef;
  /**
  * Key Id for previously active P-384 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p384_previous_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p384_previous_key_id}
  */
  readonly p384PreviousKeyId?: string;
  /**
  * Enable publishing of the P-384 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p384_publish_x5c_parameter KeypairsOauthOpenidConnectAdditionalKeySet#p384_publish_x5c_parameter}
  */
  readonly p384PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-521 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p521_active_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p521_active_cert_ref}
  */
  readonly p521ActiveCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef;
  /**
  * Key Id for currently active P-521 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p521_active_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p521_active_key_id}
  */
  readonly p521ActiveKeyId?: string;
  /**
  * Reference to the P-521 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p521_previous_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#p521_previous_cert_ref}
  */
  readonly p521PreviousCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef;
  /**
  * Key Id for previously active P-521 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p521_previous_key_id KeypairsOauthOpenidConnectAdditionalKeySet#p521_previous_key_id}
  */
  readonly p521PreviousKeyId?: string;
  /**
  * Enable publishing of the P-521 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#p521_publish_x5c_parameter KeypairsOauthOpenidConnectAdditionalKeySet#p521_publish_x5c_parameter}
  */
  readonly p521PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the RSA key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_active_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#rsa_active_cert_ref}
  */
  readonly rsaActiveCertRef: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef;
  /**
  * Key Id for currently active RSA key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_active_key_id KeypairsOauthOpenidConnectAdditionalKeySet#rsa_active_key_id}
  */
  readonly rsaActiveKeyId?: string;
  /**
  * PingFederate uses the same RSA key for all RSA signing algorithms. To enable active RSA JWK entry to have unique single valued ''alg'' parameter, use this list to set a key identifier for each RSA algorithm (`RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_algorithm_active_key_ids KeypairsOauthOpenidConnectAdditionalKeySet#rsa_algorithm_active_key_ids}
  */
  readonly rsaAlgorithmActiveKeyIds?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable;
  /**
  * PingFederate uses the same RSA key for all RSA signing algorithms. To enable previously active RSA JWK entry to have unique single valued ''alg'' parameter, use this list to set a key identifier for each RSA algorithm (`RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_algorithm_previous_key_ids KeypairsOauthOpenidConnectAdditionalKeySet#rsa_algorithm_previous_key_ids}
  */
  readonly rsaAlgorithmPreviousKeyIds?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable;
  /**
  * Reference to the RSA key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_previous_cert_ref KeypairsOauthOpenidConnectAdditionalKeySet#rsa_previous_cert_ref}
  */
  readonly rsaPreviousCertRef?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef;
  /**
  * Key Id for previously active RSA key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_previous_key_id KeypairsOauthOpenidConnectAdditionalKeySet#rsa_previous_key_id}
  */
  readonly rsaPreviousKeyId?: string;
  /**
  * Enable publishing of the RSA certificate chain associated with the active key. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#rsa_publish_x5c_parameter KeypairsOauthOpenidConnectAdditionalKeySet#rsa_publish_x5c_parameter}
  */
  readonly rsaPublishX5CParameter?: boolean | cdktf.IResolvable;
}

export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysToTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    p256_active_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefToTerraform(struct!.p256ActiveCertRef),
    p256_active_key_id: cdktf.stringToTerraform(struct!.p256ActiveKeyId),
    p256_previous_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefToTerraform(struct!.p256PreviousCertRef),
    p256_previous_key_id: cdktf.stringToTerraform(struct!.p256PreviousKeyId),
    p256_publish_x5c_parameter: cdktf.booleanToTerraform(struct!.p256PublishX5CParameter),
    p384_active_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefToTerraform(struct!.p384ActiveCertRef),
    p384_active_key_id: cdktf.stringToTerraform(struct!.p384ActiveKeyId),
    p384_previous_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefToTerraform(struct!.p384PreviousCertRef),
    p384_previous_key_id: cdktf.stringToTerraform(struct!.p384PreviousKeyId),
    p384_publish_x5c_parameter: cdktf.booleanToTerraform(struct!.p384PublishX5CParameter),
    p521_active_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefToTerraform(struct!.p521ActiveCertRef),
    p521_active_key_id: cdktf.stringToTerraform(struct!.p521ActiveKeyId),
    p521_previous_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefToTerraform(struct!.p521PreviousCertRef),
    p521_previous_key_id: cdktf.stringToTerraform(struct!.p521PreviousKeyId),
    p521_publish_x5c_parameter: cdktf.booleanToTerraform(struct!.p521PublishX5CParameter),
    rsa_active_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefToTerraform(struct!.rsaActiveCertRef),
    rsa_active_key_id: cdktf.stringToTerraform(struct!.rsaActiveKeyId),
    rsa_algorithm_active_key_ids: cdktf.listMapper(keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsToTerraform, false)(struct!.rsaAlgorithmActiveKeyIds),
    rsa_algorithm_previous_key_ids: cdktf.listMapper(keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsToTerraform, false)(struct!.rsaAlgorithmPreviousKeyIds),
    rsa_previous_cert_ref: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefToTerraform(struct!.rsaPreviousCertRef),
    rsa_previous_key_id: cdktf.stringToTerraform(struct!.rsaPreviousKeyId),
    rsa_publish_x5c_parameter: cdktf.booleanToTerraform(struct!.rsaPublishX5CParameter),
  }
}


export function keypairsOauthOpenidConnectAdditionalKeySetSigningKeysToHclTerraform(struct?: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    p256_active_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefToHclTerraform(struct!.p256ActiveCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef",
    },
    p256_active_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p256ActiveKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p256_previous_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefToHclTerraform(struct!.p256PreviousCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef",
    },
    p256_previous_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p256PreviousKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p256_publish_x5c_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.p256PublishX5CParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    p384_active_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefToHclTerraform(struct!.p384ActiveCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef",
    },
    p384_active_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p384ActiveKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p384_previous_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefToHclTerraform(struct!.p384PreviousCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef",
    },
    p384_previous_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p384PreviousKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p384_publish_x5c_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.p384PublishX5CParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    p521_active_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefToHclTerraform(struct!.p521ActiveCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef",
    },
    p521_active_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p521ActiveKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p521_previous_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefToHclTerraform(struct!.p521PreviousCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef",
    },
    p521_previous_key_id: {
      value: cdktf.stringToHclTerraform(struct!.p521PreviousKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p521_publish_x5c_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.p521PublishX5CParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rsa_active_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefToHclTerraform(struct!.rsaActiveCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef",
    },
    rsa_active_key_id: {
      value: cdktf.stringToHclTerraform(struct!.rsaActiveKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_algorithm_active_key_ids: {
      value: cdktf.listMapperHcl(keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsToHclTerraform, false)(struct!.rsaAlgorithmActiveKeyIds),
      isBlock: true,
      type: "set",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsList",
    },
    rsa_algorithm_previous_key_ids: {
      value: cdktf.listMapperHcl(keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsToHclTerraform, false)(struct!.rsaAlgorithmPreviousKeyIds),
      isBlock: true,
      type: "set",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsList",
    },
    rsa_previous_cert_ref: {
      value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefToHclTerraform(struct!.rsaPreviousCertRef),
      isBlock: true,
      type: "struct",
      storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef",
    },
    rsa_previous_key_id: {
      value: cdktf.stringToHclTerraform(struct!.rsaPreviousKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_publish_x5c_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.rsaPublishX5CParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._p256ActiveCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p256ActiveCertRef = this._p256ActiveCertRef?.internalValue;
    }
    if (this._p256ActiveKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p256ActiveKeyId = this._p256ActiveKeyId;
    }
    if (this._p256PreviousCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p256PreviousCertRef = this._p256PreviousCertRef?.internalValue;
    }
    if (this._p256PreviousKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p256PreviousKeyId = this._p256PreviousKeyId;
    }
    if (this._p256PublishX5CParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.p256PublishX5CParameter = this._p256PublishX5CParameter;
    }
    if (this._p384ActiveCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p384ActiveCertRef = this._p384ActiveCertRef?.internalValue;
    }
    if (this._p384ActiveKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p384ActiveKeyId = this._p384ActiveKeyId;
    }
    if (this._p384PreviousCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p384PreviousCertRef = this._p384PreviousCertRef?.internalValue;
    }
    if (this._p384PreviousKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p384PreviousKeyId = this._p384PreviousKeyId;
    }
    if (this._p384PublishX5CParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.p384PublishX5CParameter = this._p384PublishX5CParameter;
    }
    if (this._p521ActiveCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p521ActiveCertRef = this._p521ActiveCertRef?.internalValue;
    }
    if (this._p521ActiveKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p521ActiveKeyId = this._p521ActiveKeyId;
    }
    if (this._p521PreviousCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p521PreviousCertRef = this._p521PreviousCertRef?.internalValue;
    }
    if (this._p521PreviousKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.p521PreviousKeyId = this._p521PreviousKeyId;
    }
    if (this._p521PublishX5CParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.p521PublishX5CParameter = this._p521PublishX5CParameter;
    }
    if (this._rsaActiveCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaActiveCertRef = this._rsaActiveCertRef?.internalValue;
    }
    if (this._rsaActiveKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaActiveKeyId = this._rsaActiveKeyId;
    }
    if (this._rsaAlgorithmActiveKeyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgorithmActiveKeyIds = this._rsaAlgorithmActiveKeyIds?.internalValue;
    }
    if (this._rsaAlgorithmPreviousKeyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgorithmPreviousKeyIds = this._rsaAlgorithmPreviousKeyIds?.internalValue;
    }
    if (this._rsaPreviousCertRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaPreviousCertRef = this._rsaPreviousCertRef?.internalValue;
    }
    if (this._rsaPreviousKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaPreviousKeyId = this._rsaPreviousKeyId;
    }
    if (this._rsaPublishX5CParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaPublishX5CParameter = this._rsaPublishX5CParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._p256ActiveCertRef.internalValue = undefined;
      this._p256ActiveKeyId = undefined;
      this._p256PreviousCertRef.internalValue = undefined;
      this._p256PreviousKeyId = undefined;
      this._p256PublishX5CParameter = undefined;
      this._p384ActiveCertRef.internalValue = undefined;
      this._p384ActiveKeyId = undefined;
      this._p384PreviousCertRef.internalValue = undefined;
      this._p384PreviousKeyId = undefined;
      this._p384PublishX5CParameter = undefined;
      this._p521ActiveCertRef.internalValue = undefined;
      this._p521ActiveKeyId = undefined;
      this._p521PreviousCertRef.internalValue = undefined;
      this._p521PreviousKeyId = undefined;
      this._p521PublishX5CParameter = undefined;
      this._rsaActiveCertRef.internalValue = undefined;
      this._rsaActiveKeyId = undefined;
      this._rsaAlgorithmActiveKeyIds.internalValue = undefined;
      this._rsaAlgorithmPreviousKeyIds.internalValue = undefined;
      this._rsaPreviousCertRef.internalValue = undefined;
      this._rsaPreviousKeyId = undefined;
      this._rsaPublishX5CParameter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._p256ActiveCertRef.internalValue = value.p256ActiveCertRef;
      this._p256ActiveKeyId = value.p256ActiveKeyId;
      this._p256PreviousCertRef.internalValue = value.p256PreviousCertRef;
      this._p256PreviousKeyId = value.p256PreviousKeyId;
      this._p256PublishX5CParameter = value.p256PublishX5CParameter;
      this._p384ActiveCertRef.internalValue = value.p384ActiveCertRef;
      this._p384ActiveKeyId = value.p384ActiveKeyId;
      this._p384PreviousCertRef.internalValue = value.p384PreviousCertRef;
      this._p384PreviousKeyId = value.p384PreviousKeyId;
      this._p384PublishX5CParameter = value.p384PublishX5CParameter;
      this._p521ActiveCertRef.internalValue = value.p521ActiveCertRef;
      this._p521ActiveKeyId = value.p521ActiveKeyId;
      this._p521PreviousCertRef.internalValue = value.p521PreviousCertRef;
      this._p521PreviousKeyId = value.p521PreviousKeyId;
      this._p521PublishX5CParameter = value.p521PublishX5CParameter;
      this._rsaActiveCertRef.internalValue = value.rsaActiveCertRef;
      this._rsaActiveKeyId = value.rsaActiveKeyId;
      this._rsaAlgorithmActiveKeyIds.internalValue = value.rsaAlgorithmActiveKeyIds;
      this._rsaAlgorithmPreviousKeyIds.internalValue = value.rsaAlgorithmPreviousKeyIds;
      this._rsaPreviousCertRef.internalValue = value.rsaPreviousCertRef;
      this._rsaPreviousKeyId = value.rsaPreviousKeyId;
      this._rsaPublishX5CParameter = value.rsaPublishX5CParameter;
    }
  }

  // p256_active_cert_ref - computed: false, optional: true, required: false
  private _p256ActiveCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRefOutputReference(this, "p256_active_cert_ref");
  public get p256ActiveCertRef() {
    return this._p256ActiveCertRef;
  }
  public putP256ActiveCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256ActiveCertRef) {
    this._p256ActiveCertRef.internalValue = value;
  }
  public resetP256ActiveCertRef() {
    this._p256ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256ActiveCertRefInput() {
    return this._p256ActiveCertRef.internalValue;
  }

  // p256_active_key_id - computed: false, optional: true, required: false
  private _p256ActiveKeyId?: string; 
  public get p256ActiveKeyId() {
    return this.getStringAttribute('p256_active_key_id');
  }
  public set p256ActiveKeyId(value: string) {
    this._p256ActiveKeyId = value;
  }
  public resetP256ActiveKeyId() {
    this._p256ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256ActiveKeyIdInput() {
    return this._p256ActiveKeyId;
  }

  // p256_previous_cert_ref - computed: false, optional: true, required: false
  private _p256PreviousCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRefOutputReference(this, "p256_previous_cert_ref");
  public get p256PreviousCertRef() {
    return this._p256PreviousCertRef;
  }
  public putP256PreviousCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP256PreviousCertRef) {
    this._p256PreviousCertRef.internalValue = value;
  }
  public resetP256PreviousCertRef() {
    this._p256PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PreviousCertRefInput() {
    return this._p256PreviousCertRef.internalValue;
  }

  // p256_previous_key_id - computed: false, optional: true, required: false
  private _p256PreviousKeyId?: string; 
  public get p256PreviousKeyId() {
    return this.getStringAttribute('p256_previous_key_id');
  }
  public set p256PreviousKeyId(value: string) {
    this._p256PreviousKeyId = value;
  }
  public resetP256PreviousKeyId() {
    this._p256PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PreviousKeyIdInput() {
    return this._p256PreviousKeyId;
  }

  // p256_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p256PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p256PublishX5CParameter() {
    return this.getBooleanAttribute('p256_publish_x5c_parameter');
  }
  public set p256PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p256PublishX5CParameter = value;
  }
  public resetP256PublishX5CParameter() {
    this._p256PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PublishX5CParameterInput() {
    return this._p256PublishX5CParameter;
  }

  // p384_active_cert_ref - computed: false, optional: true, required: false
  private _p384ActiveCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRefOutputReference(this, "p384_active_cert_ref");
  public get p384ActiveCertRef() {
    return this._p384ActiveCertRef;
  }
  public putP384ActiveCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384ActiveCertRef) {
    this._p384ActiveCertRef.internalValue = value;
  }
  public resetP384ActiveCertRef() {
    this._p384ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384ActiveCertRefInput() {
    return this._p384ActiveCertRef.internalValue;
  }

  // p384_active_key_id - computed: false, optional: true, required: false
  private _p384ActiveKeyId?: string; 
  public get p384ActiveKeyId() {
    return this.getStringAttribute('p384_active_key_id');
  }
  public set p384ActiveKeyId(value: string) {
    this._p384ActiveKeyId = value;
  }
  public resetP384ActiveKeyId() {
    this._p384ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384ActiveKeyIdInput() {
    return this._p384ActiveKeyId;
  }

  // p384_previous_cert_ref - computed: false, optional: true, required: false
  private _p384PreviousCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRefOutputReference(this, "p384_previous_cert_ref");
  public get p384PreviousCertRef() {
    return this._p384PreviousCertRef;
  }
  public putP384PreviousCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP384PreviousCertRef) {
    this._p384PreviousCertRef.internalValue = value;
  }
  public resetP384PreviousCertRef() {
    this._p384PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PreviousCertRefInput() {
    return this._p384PreviousCertRef.internalValue;
  }

  // p384_previous_key_id - computed: false, optional: true, required: false
  private _p384PreviousKeyId?: string; 
  public get p384PreviousKeyId() {
    return this.getStringAttribute('p384_previous_key_id');
  }
  public set p384PreviousKeyId(value: string) {
    this._p384PreviousKeyId = value;
  }
  public resetP384PreviousKeyId() {
    this._p384PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PreviousKeyIdInput() {
    return this._p384PreviousKeyId;
  }

  // p384_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p384PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p384PublishX5CParameter() {
    return this.getBooleanAttribute('p384_publish_x5c_parameter');
  }
  public set p384PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p384PublishX5CParameter = value;
  }
  public resetP384PublishX5CParameter() {
    this._p384PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PublishX5CParameterInput() {
    return this._p384PublishX5CParameter;
  }

  // p521_active_cert_ref - computed: false, optional: true, required: false
  private _p521ActiveCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRefOutputReference(this, "p521_active_cert_ref");
  public get p521ActiveCertRef() {
    return this._p521ActiveCertRef;
  }
  public putP521ActiveCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521ActiveCertRef) {
    this._p521ActiveCertRef.internalValue = value;
  }
  public resetP521ActiveCertRef() {
    this._p521ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521ActiveCertRefInput() {
    return this._p521ActiveCertRef.internalValue;
  }

  // p521_active_key_id - computed: false, optional: true, required: false
  private _p521ActiveKeyId?: string; 
  public get p521ActiveKeyId() {
    return this.getStringAttribute('p521_active_key_id');
  }
  public set p521ActiveKeyId(value: string) {
    this._p521ActiveKeyId = value;
  }
  public resetP521ActiveKeyId() {
    this._p521ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521ActiveKeyIdInput() {
    return this._p521ActiveKeyId;
  }

  // p521_previous_cert_ref - computed: false, optional: true, required: false
  private _p521PreviousCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRefOutputReference(this, "p521_previous_cert_ref");
  public get p521PreviousCertRef() {
    return this._p521PreviousCertRef;
  }
  public putP521PreviousCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysP521PreviousCertRef) {
    this._p521PreviousCertRef.internalValue = value;
  }
  public resetP521PreviousCertRef() {
    this._p521PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PreviousCertRefInput() {
    return this._p521PreviousCertRef.internalValue;
  }

  // p521_previous_key_id - computed: false, optional: true, required: false
  private _p521PreviousKeyId?: string; 
  public get p521PreviousKeyId() {
    return this.getStringAttribute('p521_previous_key_id');
  }
  public set p521PreviousKeyId(value: string) {
    this._p521PreviousKeyId = value;
  }
  public resetP521PreviousKeyId() {
    this._p521PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PreviousKeyIdInput() {
    return this._p521PreviousKeyId;
  }

  // p521_publish_x5c_parameter - computed: false, optional: true, required: false
  private _p521PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p521PublishX5CParameter() {
    return this.getBooleanAttribute('p521_publish_x5c_parameter');
  }
  public set p521PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p521PublishX5CParameter = value;
  }
  public resetP521PublishX5CParameter() {
    this._p521PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PublishX5CParameterInput() {
    return this._p521PublishX5CParameter;
  }

  // rsa_active_cert_ref - computed: false, optional: false, required: true
  private _rsaActiveCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRefOutputReference(this, "rsa_active_cert_ref");
  public get rsaActiveCertRef() {
    return this._rsaActiveCertRef;
  }
  public putRsaActiveCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaActiveCertRef) {
    this._rsaActiveCertRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaActiveCertRefInput() {
    return this._rsaActiveCertRef.internalValue;
  }

  // rsa_active_key_id - computed: false, optional: true, required: false
  private _rsaActiveKeyId?: string; 
  public get rsaActiveKeyId() {
    return this.getStringAttribute('rsa_active_key_id');
  }
  public set rsaActiveKeyId(value: string) {
    this._rsaActiveKeyId = value;
  }
  public resetRsaActiveKeyId() {
    this._rsaActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaActiveKeyIdInput() {
    return this._rsaActiveKeyId;
  }

  // rsa_algorithm_active_key_ids - computed: true, optional: true, required: false
  private _rsaAlgorithmActiveKeyIds = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIdsList(this, "rsa_algorithm_active_key_ids", true);
  public get rsaAlgorithmActiveKeyIds() {
    return this._rsaAlgorithmActiveKeyIds;
  }
  public putRsaAlgorithmActiveKeyIds(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable) {
    this._rsaAlgorithmActiveKeyIds.internalValue = value;
  }
  public resetRsaAlgorithmActiveKeyIds() {
    this._rsaAlgorithmActiveKeyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgorithmActiveKeyIdsInput() {
    return this._rsaAlgorithmActiveKeyIds.internalValue;
  }

  // rsa_algorithm_previous_key_ids - computed: true, optional: true, required: false
  private _rsaAlgorithmPreviousKeyIds = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIdsList(this, "rsa_algorithm_previous_key_ids", true);
  public get rsaAlgorithmPreviousKeyIds() {
    return this._rsaAlgorithmPreviousKeyIds;
  }
  public putRsaAlgorithmPreviousKeyIds(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable) {
    this._rsaAlgorithmPreviousKeyIds.internalValue = value;
  }
  public resetRsaAlgorithmPreviousKeyIds() {
    this._rsaAlgorithmPreviousKeyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgorithmPreviousKeyIdsInput() {
    return this._rsaAlgorithmPreviousKeyIds.internalValue;
  }

  // rsa_previous_cert_ref - computed: false, optional: true, required: false
  private _rsaPreviousCertRef = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRefOutputReference(this, "rsa_previous_cert_ref");
  public get rsaPreviousCertRef() {
    return this._rsaPreviousCertRef;
  }
  public putRsaPreviousCertRef(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysRsaPreviousCertRef) {
    this._rsaPreviousCertRef.internalValue = value;
  }
  public resetRsaPreviousCertRef() {
    this._rsaPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPreviousCertRefInput() {
    return this._rsaPreviousCertRef.internalValue;
  }

  // rsa_previous_key_id - computed: false, optional: true, required: false
  private _rsaPreviousKeyId?: string; 
  public get rsaPreviousKeyId() {
    return this.getStringAttribute('rsa_previous_key_id');
  }
  public set rsaPreviousKeyId(value: string) {
    this._rsaPreviousKeyId = value;
  }
  public resetRsaPreviousKeyId() {
    this._rsaPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPreviousKeyIdInput() {
    return this._rsaPreviousKeyId;
  }

  // rsa_publish_x5c_parameter - computed: true, optional: true, required: false
  private _rsaPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get rsaPublishX5CParameter() {
    return this.getBooleanAttribute('rsa_publish_x5c_parameter');
  }
  public set rsaPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._rsaPublishX5CParameter = value;
  }
  public resetRsaPublishX5CParameter() {
    this._rsaPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublishX5CParameterInput() {
    return this._rsaPublishX5CParameter;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set pingfederate_keypairs_oauth_openid_connect_additional_key_set}
*/
export class KeypairsOauthOpenidConnectAdditionalKeySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_oauth_openid_connect_additional_key_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsOauthOpenidConnectAdditionalKeySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsOauthOpenidConnectAdditionalKeySet to import
  * @param importFromId The id of the existing KeypairsOauthOpenidConnectAdditionalKeySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsOauthOpenidConnectAdditionalKeySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_oauth_openid_connect_additional_key_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect_additional_key_set pingfederate_keypairs_oauth_openid_connect_additional_key_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsOauthOpenidConnectAdditionalKeySetConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsOauthOpenidConnectAdditionalKeySetConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_oauth_openid_connect_additional_key_set',
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
    this._description = config.description;
    this._issuers.internalValue = config.issuers;
    this._name = config.name;
    this._setId = config.setId;
    this._signingKeys.internalValue = config.signingKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuers - computed: false, optional: false, required: true
  private _issuers = new KeypairsOauthOpenidConnectAdditionalKeySetIssuersList(this, "issuers", true);
  public get issuers() {
    return this._issuers;
  }
  public putIssuers(value: KeypairsOauthOpenidConnectAdditionalKeySetIssuers[] | cdktf.IResolvable) {
    this._issuers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers.internalValue;
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

  // set_id - computed: true, optional: true, required: false
  private _setId?: string; 
  public get setId() {
    return this.getStringAttribute('set_id');
  }
  public set setId(value: string) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }

  // signing_keys - computed: false, optional: false, required: true
  private _signingKeys = new KeypairsOauthOpenidConnectAdditionalKeySetSigningKeysOutputReference(this, "signing_keys");
  public get signingKeys() {
    return this._signingKeys;
  }
  public putSigningKeys(value: KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys) {
    this._signingKeys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeysInput() {
    return this._signingKeys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      issuers: cdktf.listMapper(keypairsOauthOpenidConnectAdditionalKeySetIssuersToTerraform, false)(this._issuers.internalValue),
      name: cdktf.stringToTerraform(this._name),
      set_id: cdktf.stringToTerraform(this._setId),
      signing_keys: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysToTerraform(this._signingKeys.internalValue),
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
      issuers: {
        value: cdktf.listMapperHcl(keypairsOauthOpenidConnectAdditionalKeySetIssuersToHclTerraform, false)(this._issuers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetIssuersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_id: {
        value: cdktf.stringToHclTerraform(this._setId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_keys: {
        value: keypairsOauthOpenidConnectAdditionalKeySetSigningKeysToHclTerraform(this._signingKeys.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectAdditionalKeySetSigningKeys",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
