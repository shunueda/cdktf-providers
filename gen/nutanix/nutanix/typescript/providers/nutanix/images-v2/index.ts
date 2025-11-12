// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#category_ext_ids ImagesV2#category_ext_ids}
  */
  readonly categoryExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#cluster_location_ext_ids ImagesV2#cluster_location_ext_ids}
  */
  readonly clusterLocationExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#description ImagesV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#id ImagesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#name ImagesV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#type ImagesV2#type}
  */
  readonly type: string;
  /**
  * checksum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#checksum ImagesV2#checksum}
  */
  readonly checksum?: ImagesV2Checksum[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#source ImagesV2#source}
  */
  readonly source?: ImagesV2Source[] | cdktf.IResolvable;
}
export interface ImagesV2Links {
}

export function imagesV2LinksToTerraform(struct?: ImagesV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imagesV2LinksToHclTerraform(struct?: ImagesV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImagesV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2Links | undefined) {
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

export class ImagesV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): ImagesV2LinksOutputReference {
    return new ImagesV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2PlacementPolicyStatus {
}

export function imagesV2PlacementPolicyStatusToTerraform(struct?: ImagesV2PlacementPolicyStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imagesV2PlacementPolicyStatusToHclTerraform(struct?: ImagesV2PlacementPolicyStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImagesV2PlacementPolicyStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2PlacementPolicyStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2PlacementPolicyStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // conflicting_policy_ext_ids - computed: true, optional: false, required: false
  public get conflictingPolicyExtIds() {
    return this.getListAttribute('conflicting_policy_ext_ids');
  }

  // enforced_cluster_ext_ids - computed: true, optional: false, required: false
  public get enforcedClusterExtIds() {
    return this.getListAttribute('enforced_cluster_ext_ids');
  }

  // enforcement_mode - computed: true, optional: false, required: false
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }

  // placement_policy_ext_id - computed: true, optional: false, required: false
  public get placementPolicyExtId() {
    return this.getStringAttribute('placement_policy_ext_id');
  }

  // policy_cluster_ext_ids - computed: true, optional: false, required: false
  public get policyClusterExtIds() {
    return this.getListAttribute('policy_cluster_ext_ids');
  }
}

export class ImagesV2PlacementPolicyStatusList extends cdktf.ComplexList {

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
  public get(index: number): ImagesV2PlacementPolicyStatusOutputReference {
    return new ImagesV2PlacementPolicyStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2Checksum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#hex_digest ImagesV2#hex_digest}
  */
  readonly hexDigest: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#object_type ImagesV2#object_type}
  */
  readonly objectType: string;
}

export function imagesV2ChecksumToTerraform(struct?: ImagesV2Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hex_digest: cdktf.stringToTerraform(struct!.hexDigest),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function imagesV2ChecksumToHclTerraform(struct?: ImagesV2Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hex_digest: {
      value: cdktf.stringToHclTerraform(struct!.hexDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2Checksum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hexDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexDigest = this._hexDigest;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2Checksum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hexDigest = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hexDigest = value.hexDigest;
      this._objectType = value.objectType;
    }
  }

  // hex_digest - computed: false, optional: false, required: true
  private _hexDigest?: string; 
  public get hexDigest() {
    return this.getStringAttribute('hex_digest');
  }
  public set hexDigest(value: string) {
    this._hexDigest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hexDigestInput() {
    return this._hexDigest;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class ImagesV2ChecksumList extends cdktf.ComplexList {
  public internalValue? : ImagesV2Checksum[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2ChecksumOutputReference {
    return new ImagesV2ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2SourceObjectLiteSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#key ImagesV2#key}
  */
  readonly key: string;
}

export function imagesV2SourceObjectLiteSourceToTerraform(struct?: ImagesV2SourceObjectLiteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function imagesV2SourceObjectLiteSourceToHclTerraform(struct?: ImagesV2SourceObjectLiteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2SourceObjectLiteSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2SourceObjectLiteSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2SourceObjectLiteSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class ImagesV2SourceObjectLiteSourceList extends cdktf.ComplexList {
  public internalValue? : ImagesV2SourceObjectLiteSource[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2SourceObjectLiteSourceOutputReference {
    return new ImagesV2SourceObjectLiteSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2SourceUrlSourceBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#password ImagesV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#username ImagesV2#username}
  */
  readonly username: string;
}

export function imagesV2SourceUrlSourceBasicAuthToTerraform(struct?: ImagesV2SourceUrlSourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function imagesV2SourceUrlSourceBasicAuthToHclTerraform(struct?: ImagesV2SourceUrlSourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2SourceUrlSourceBasicAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2SourceUrlSourceBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2SourceUrlSourceBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ImagesV2SourceUrlSourceBasicAuthList extends cdktf.ComplexList {
  public internalValue? : ImagesV2SourceUrlSourceBasicAuth[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2SourceUrlSourceBasicAuthOutputReference {
    return new ImagesV2SourceUrlSourceBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2SourceUrlSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#should_allow_insecure_url ImagesV2#should_allow_insecure_url}
  */
  readonly shouldAllowInsecureUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#url ImagesV2#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#basic_auth ImagesV2#basic_auth}
  */
  readonly basicAuth?: ImagesV2SourceUrlSourceBasicAuth[] | cdktf.IResolvable;
}

export function imagesV2SourceUrlSourceToTerraform(struct?: ImagesV2SourceUrlSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_allow_insecure_url: cdktf.booleanToTerraform(struct!.shouldAllowInsecureUrl),
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: cdktf.listMapper(imagesV2SourceUrlSourceBasicAuthToTerraform, true)(struct!.basicAuth),
  }
}


export function imagesV2SourceUrlSourceToHclTerraform(struct?: ImagesV2SourceUrlSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_allow_insecure_url: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowInsecureUrl),
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
    basic_auth: {
      value: cdktf.listMapperHcl(imagesV2SourceUrlSourceBasicAuthToHclTerraform, true)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ImagesV2SourceUrlSourceBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2SourceUrlSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2SourceUrlSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAllowInsecureUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowInsecureUrl = this._shouldAllowInsecureUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2SourceUrlSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAllowInsecureUrl = undefined;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAllowInsecureUrl = value.shouldAllowInsecureUrl;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // should_allow_insecure_url - computed: false, optional: true, required: false
  private _shouldAllowInsecureUrl?: boolean | cdktf.IResolvable; 
  public get shouldAllowInsecureUrl() {
    return this.getBooleanAttribute('should_allow_insecure_url');
  }
  public set shouldAllowInsecureUrl(value: boolean | cdktf.IResolvable) {
    this._shouldAllowInsecureUrl = value;
  }
  public resetShouldAllowInsecureUrl() {
    this._shouldAllowInsecureUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowInsecureUrlInput() {
    return this._shouldAllowInsecureUrl;
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

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ImagesV2SourceUrlSourceBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ImagesV2SourceUrlSourceBasicAuth[] | cdktf.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}

export class ImagesV2SourceUrlSourceList extends cdktf.ComplexList {
  public internalValue? : ImagesV2SourceUrlSource[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2SourceUrlSourceOutputReference {
    return new ImagesV2SourceUrlSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2SourceVmDiskSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#ext_id ImagesV2#ext_id}
  */
  readonly extId: string;
}

export function imagesV2SourceVmDiskSourceToTerraform(struct?: ImagesV2SourceVmDiskSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function imagesV2SourceVmDiskSourceToHclTerraform(struct?: ImagesV2SourceVmDiskSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2SourceVmDiskSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2SourceVmDiskSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2SourceVmDiskSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class ImagesV2SourceVmDiskSourceList extends cdktf.ComplexList {
  public internalValue? : ImagesV2SourceVmDiskSource[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2SourceVmDiskSourceOutputReference {
    return new ImagesV2SourceVmDiskSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagesV2Source {
  /**
  * object_lite_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#object_lite_source ImagesV2#object_lite_source}
  */
  readonly objectLiteSource?: ImagesV2SourceObjectLiteSource[] | cdktf.IResolvable;
  /**
  * url_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#url_source ImagesV2#url_source}
  */
  readonly urlSource?: ImagesV2SourceUrlSource[] | cdktf.IResolvable;
  /**
  * vm_disk_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#vm_disk_source ImagesV2#vm_disk_source}
  */
  readonly vmDiskSource?: ImagesV2SourceVmDiskSource[] | cdktf.IResolvable;
}

export function imagesV2SourceToTerraform(struct?: ImagesV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_lite_source: cdktf.listMapper(imagesV2SourceObjectLiteSourceToTerraform, true)(struct!.objectLiteSource),
    url_source: cdktf.listMapper(imagesV2SourceUrlSourceToTerraform, true)(struct!.urlSource),
    vm_disk_source: cdktf.listMapper(imagesV2SourceVmDiskSourceToTerraform, true)(struct!.vmDiskSource),
  }
}


export function imagesV2SourceToHclTerraform(struct?: ImagesV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_lite_source: {
      value: cdktf.listMapperHcl(imagesV2SourceObjectLiteSourceToHclTerraform, true)(struct!.objectLiteSource),
      isBlock: true,
      type: "list",
      storageClassType: "ImagesV2SourceObjectLiteSourceList",
    },
    url_source: {
      value: cdktf.listMapperHcl(imagesV2SourceUrlSourceToHclTerraform, true)(struct!.urlSource),
      isBlock: true,
      type: "list",
      storageClassType: "ImagesV2SourceUrlSourceList",
    },
    vm_disk_source: {
      value: cdktf.listMapperHcl(imagesV2SourceVmDiskSourceToHclTerraform, true)(struct!.vmDiskSource),
      isBlock: true,
      type: "list",
      storageClassType: "ImagesV2SourceVmDiskSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagesV2SourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImagesV2Source | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLiteSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLiteSource = this._objectLiteSource?.internalValue;
    }
    if (this._urlSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSource = this._urlSource?.internalValue;
    }
    if (this._vmDiskSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskSource = this._vmDiskSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagesV2Source | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectLiteSource.internalValue = undefined;
      this._urlSource.internalValue = undefined;
      this._vmDiskSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectLiteSource.internalValue = value.objectLiteSource;
      this._urlSource.internalValue = value.urlSource;
      this._vmDiskSource.internalValue = value.vmDiskSource;
    }
  }

  // object_lite_source - computed: false, optional: true, required: false
  private _objectLiteSource = new ImagesV2SourceObjectLiteSourceList(this, "object_lite_source", false);
  public get objectLiteSource() {
    return this._objectLiteSource;
  }
  public putObjectLiteSource(value: ImagesV2SourceObjectLiteSource[] | cdktf.IResolvable) {
    this._objectLiteSource.internalValue = value;
  }
  public resetObjectLiteSource() {
    this._objectLiteSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLiteSourceInput() {
    return this._objectLiteSource.internalValue;
  }

  // url_source - computed: false, optional: true, required: false
  private _urlSource = new ImagesV2SourceUrlSourceList(this, "url_source", false);
  public get urlSource() {
    return this._urlSource;
  }
  public putUrlSource(value: ImagesV2SourceUrlSource[] | cdktf.IResolvable) {
    this._urlSource.internalValue = value;
  }
  public resetUrlSource() {
    this._urlSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSourceInput() {
    return this._urlSource.internalValue;
  }

  // vm_disk_source - computed: false, optional: true, required: false
  private _vmDiskSource = new ImagesV2SourceVmDiskSourceList(this, "vm_disk_source", false);
  public get vmDiskSource() {
    return this._vmDiskSource;
  }
  public putVmDiskSource(value: ImagesV2SourceVmDiskSource[] | cdktf.IResolvable) {
    this._vmDiskSource.internalValue = value;
  }
  public resetVmDiskSource() {
    this._vmDiskSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskSourceInput() {
    return this._vmDiskSource.internalValue;
  }
}

export class ImagesV2SourceList extends cdktf.ComplexList {
  public internalValue? : ImagesV2Source[] | cdktf.IResolvable

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
  public get(index: number): ImagesV2SourceOutputReference {
    return new ImagesV2SourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2 nutanix_images_v2}
*/
export class ImagesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_images_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagesV2 to import
  * @param importFromId The id of the existing ImagesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_images_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/images_v2 nutanix_images_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagesV2Config
  */
  public constructor(scope: Construct, id: string, config: ImagesV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_images_v2',
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
    this._categoryExtIds = config.categoryExtIds;
    this._clusterLocationExtIds = config.clusterLocationExtIds;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._checksum.internalValue = config.checksum;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_ext_ids - computed: true, optional: true, required: false
  private _categoryExtIds?: string[]; 
  public get categoryExtIds() {
    return this.getListAttribute('category_ext_ids');
  }
  public set categoryExtIds(value: string[]) {
    this._categoryExtIds = value;
  }
  public resetCategoryExtIds() {
    this._categoryExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryExtIdsInput() {
    return this._categoryExtIds;
  }

  // cluster_location_ext_ids - computed: true, optional: true, required: false
  private _clusterLocationExtIds?: string[]; 
  public get clusterLocationExtIds() {
    return this.getListAttribute('cluster_location_ext_ids');
  }
  public set clusterLocationExtIds(value: string[]) {
    this._clusterLocationExtIds = value;
  }
  public resetClusterLocationExtIds() {
    this._clusterLocationExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocationExtIdsInput() {
    return this._clusterLocationExtIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ImagesV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // placement_policy_status - computed: true, optional: false, required: false
  private _placementPolicyStatus = new ImagesV2PlacementPolicyStatusList(this, "placement_policy_status", false);
  public get placementPolicyStatus() {
    return this._placementPolicyStatus;
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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

  // checksum - computed: false, optional: true, required: false
  private _checksum = new ImagesV2ChecksumList(this, "checksum", false);
  public get checksum() {
    return this._checksum;
  }
  public putChecksum(value: ImagesV2Checksum[] | cdktf.IResolvable) {
    this._checksum.internalValue = value;
  }
  public resetChecksum() {
    this._checksum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ImagesV2SourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ImagesV2Source[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categoryExtIds),
      cluster_location_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterLocationExtIds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      checksum: cdktf.listMapper(imagesV2ChecksumToTerraform, true)(this._checksum.internalValue),
      source: cdktf.listMapper(imagesV2SourceToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_ext_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categoryExtIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_location_ext_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterLocationExtIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum: {
        value: cdktf.listMapperHcl(imagesV2ChecksumToHclTerraform, true)(this._checksum.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagesV2ChecksumList",
      },
      source: {
        value: cdktf.listMapperHcl(imagesV2SourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagesV2SourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
