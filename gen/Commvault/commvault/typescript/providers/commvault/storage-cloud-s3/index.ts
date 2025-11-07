// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageCloudS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Needed for AWS STS assume role and AWS STS assume role with IAM role policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#arnrole StorageCloudS3#arnrole}
  */
  readonly arnrole?: string;
  /**
  * Authentication type for the cloud storage server [Access and secret keys, AWS IAM role policy, AWS STS assume role, AWS STS assume role with IAM role policy]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#authentication StorageCloudS3#authentication}
  */
  readonly authentication: string;
  /**
  * Name of bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#bucket StorageCloudS3#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cloud storage library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#name StorageCloudS3#name}
  */
  readonly name: string;
  /**
  * IP address or fully qualified domain name or URL for the cloud library based on cloud vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#servicehost StorageCloudS3#servicehost}
  */
  readonly servicehost: string;
  /**
  * Appropriate storage class for your account [Standard, Reduced Redundancy Storage, Standard - Infrequent access, One zone - Infrequent access, Intelligent tiering, S3 Glacier, Standard/Glacier (Combined Storage Tiers), Standard-IA/Glacier (Combined Storage Tiers), One Zone-IA/Glacier (Combined Storage Tiers), Intelligent-Tiering/Glacier (Combined Storage Tiers), S3 Glacier Deep Archive, Standard/Deep Archive (Combined Storage Tiers), Standard-IA/Deep Archive (Combined Storage Tiers), One Zone-IA/Deep Archive (Combined Storage Tiers), Intelligent-Tiering/Deep Archive (Combined Storage Tiers)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#storageclass StorageCloudS3#storageclass}
  */
  readonly storageclass: string;
  /**
  * Enables or disables deduplication on the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#usededuplication StorageCloudS3#usededuplication}
  */
  readonly usededuplication?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#credentials StorageCloudS3#credentials}
  */
  readonly credentials?: StorageCloudS3Credentials[] | cdktf.IResolvable;
  /**
  * deduplicationdblocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#deduplicationdblocation StorageCloudS3#deduplicationdblocation}
  */
  readonly deduplicationdblocation?: StorageCloudS3Deduplicationdblocation[] | cdktf.IResolvable;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#encryption StorageCloudS3#encryption}
  */
  readonly encryption?: StorageCloudS3Encryption[] | cdktf.IResolvable;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#mediaagent StorageCloudS3#mediaagent}
  */
  readonly mediaagent: StorageCloudS3Mediaagent[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#security StorageCloudS3#security}
  */
  readonly security?: StorageCloudS3Security[] | cdktf.IResolvable;
}
export interface StorageCloudS3Credentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#name StorageCloudS3#name}
  */
  readonly name?: string;
}

export function storageCloudS3CredentialsToTerraform(struct?: StorageCloudS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudS3CredentialsToHclTerraform(struct?: StorageCloudS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageCloudS3CredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3Credentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3Credentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class StorageCloudS3CredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3Credentials[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3CredentialsOutputReference {
    return new StorageCloudS3CredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3DeduplicationdblocationMediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#name StorageCloudS3#name}
  */
  readonly name?: string;
}

export function storageCloudS3DeduplicationdblocationMediaagentToTerraform(struct?: StorageCloudS3DeduplicationdblocationMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudS3DeduplicationdblocationMediaagentToHclTerraform(struct?: StorageCloudS3DeduplicationdblocationMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageCloudS3DeduplicationdblocationMediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3DeduplicationdblocationMediaagent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3DeduplicationdblocationMediaagent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class StorageCloudS3DeduplicationdblocationMediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3DeduplicationdblocationMediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3DeduplicationdblocationMediaagentOutputReference {
    return new StorageCloudS3DeduplicationdblocationMediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3Deduplicationdblocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#path StorageCloudS3#path}
  */
  readonly path?: string;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#mediaagent StorageCloudS3#mediaagent}
  */
  readonly mediaagent?: StorageCloudS3DeduplicationdblocationMediaagent[] | cdktf.IResolvable;
}

export function storageCloudS3DeduplicationdblocationToTerraform(struct?: StorageCloudS3Deduplicationdblocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    mediaagent: cdktf.listMapper(storageCloudS3DeduplicationdblocationMediaagentToTerraform, true)(struct!.mediaagent),
  }
}


export function storageCloudS3DeduplicationdblocationToHclTerraform(struct?: StorageCloudS3Deduplicationdblocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaagent: {
      value: cdktf.listMapperHcl(storageCloudS3DeduplicationdblocationMediaagentToHclTerraform, true)(struct!.mediaagent),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudS3DeduplicationdblocationMediaagentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3DeduplicationdblocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3Deduplicationdblocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._mediaagent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaagent = this._mediaagent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3Deduplicationdblocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._mediaagent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._mediaagent.internalValue = value.mediaagent;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // mediaagent - computed: false, optional: true, required: false
  private _mediaagent = new StorageCloudS3DeduplicationdblocationMediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageCloudS3DeduplicationdblocationMediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
  }
  public resetMediaagent() {
    this._mediaagent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent.internalValue;
  }
}

export class StorageCloudS3DeduplicationdblocationList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3Deduplicationdblocation[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3DeduplicationdblocationOutputReference {
    return new StorageCloudS3DeduplicationdblocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3EncryptionKeyprovider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#name StorageCloudS3#name}
  */
  readonly name?: string;
}

export function storageCloudS3EncryptionKeyproviderToTerraform(struct?: StorageCloudS3EncryptionKeyprovider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudS3EncryptionKeyproviderToHclTerraform(struct?: StorageCloudS3EncryptionKeyprovider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageCloudS3EncryptionKeyproviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3EncryptionKeyprovider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3EncryptionKeyprovider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class StorageCloudS3EncryptionKeyproviderList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3EncryptionKeyprovider[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3EncryptionKeyproviderOutputReference {
    return new StorageCloudS3EncryptionKeyproviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3Encryption {
  /**
  * The different types of encryption keys that can be used for encrypting the data. The values are case sensitive [BlowFish, AES, DES3, GOST, Serpent, Twofish]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#cipher StorageCloudS3#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#encrypt StorageCloudS3#encrypt}
  */
  readonly encrypt?: string;
  /**
  * Different keylengths are present for different kinds of ciphers. Blowfish,Twofish,AES and Serpent all accept both 128 and 256. DES3 accepts only 192. GOST accepts only 256. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#keylength StorageCloudS3#keylength}
  */
  readonly keylength?: number;
  /**
  * keyprovider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#keyprovider StorageCloudS3#keyprovider}
  */
  readonly keyprovider?: StorageCloudS3EncryptionKeyprovider[] | cdktf.IResolvable;
}

export function storageCloudS3EncryptionToTerraform(struct?: StorageCloudS3Encryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    encrypt: cdktf.stringToTerraform(struct!.encrypt),
    keylength: cdktf.numberToTerraform(struct!.keylength),
    keyprovider: cdktf.listMapper(storageCloudS3EncryptionKeyproviderToTerraform, true)(struct!.keyprovider),
  }
}


export function storageCloudS3EncryptionToHclTerraform(struct?: StorageCloudS3Encryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.stringToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keylength: {
      value: cdktf.numberToHclTerraform(struct!.keylength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keyprovider: {
      value: cdktf.listMapperHcl(storageCloudS3EncryptionKeyproviderToHclTerraform, true)(struct!.keyprovider),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudS3EncryptionKeyproviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3EncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3Encryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._keylength !== undefined) {
      hasAnyValues = true;
      internalValueResult.keylength = this._keylength;
    }
    if (this._keyprovider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyprovider = this._keyprovider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3Encryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._encrypt = undefined;
      this._keylength = undefined;
      this._keyprovider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher = value.cipher;
      this._encrypt = value.encrypt;
      this._keylength = value.keylength;
      this._keyprovider.internalValue = value.keyprovider;
    }
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // encrypt - computed: true, optional: true, required: false
  private _encrypt?: string; 
  public get encrypt() {
    return this.getStringAttribute('encrypt');
  }
  public set encrypt(value: string) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // keylength - computed: true, optional: true, required: false
  private _keylength?: number; 
  public get keylength() {
    return this.getNumberAttribute('keylength');
  }
  public set keylength(value: number) {
    this._keylength = value;
  }
  public resetKeylength() {
    this._keylength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylengthInput() {
    return this._keylength;
  }

  // keyprovider - computed: false, optional: true, required: false
  private _keyprovider = new StorageCloudS3EncryptionKeyproviderList(this, "keyprovider", false);
  public get keyprovider() {
    return this._keyprovider;
  }
  public putKeyprovider(value: StorageCloudS3EncryptionKeyprovider[] | cdktf.IResolvable) {
    this._keyprovider.internalValue = value;
  }
  public resetKeyprovider() {
    this._keyprovider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyproviderInput() {
    return this._keyprovider.internalValue;
  }
}

export class StorageCloudS3EncryptionList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3Encryption[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3EncryptionOutputReference {
    return new StorageCloudS3EncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3Mediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#name StorageCloudS3#name}
  */
  readonly name?: string;
}

export function storageCloudS3MediaagentToTerraform(struct?: StorageCloudS3Mediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudS3MediaagentToHclTerraform(struct?: StorageCloudS3Mediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageCloudS3MediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3Mediaagent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3Mediaagent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class StorageCloudS3MediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3Mediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3MediaagentOutputReference {
    return new StorageCloudS3MediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3SecurityRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function storageCloudS3SecurityRoleToTerraform(struct?: StorageCloudS3SecurityRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function storageCloudS3SecurityRoleToHclTerraform(struct?: StorageCloudS3SecurityRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3SecurityRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3SecurityRole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudS3SecurityRole | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class StorageCloudS3SecurityRoleList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3SecurityRole[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3SecurityRoleOutputReference {
    return new StorageCloudS3SecurityRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3SecurityUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function storageCloudS3SecurityUserToTerraform(struct?: StorageCloudS3SecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function storageCloudS3SecurityUserToHclTerraform(struct?: StorageCloudS3SecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3SecurityUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3SecurityUser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudS3SecurityUser | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class StorageCloudS3SecurityUserList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3SecurityUser[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3SecurityUserOutputReference {
    return new StorageCloudS3SecurityUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3SecurityUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#id StorageCloudS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function storageCloudS3SecurityUsergroupToTerraform(struct?: StorageCloudS3SecurityUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function storageCloudS3SecurityUsergroupToHclTerraform(struct?: StorageCloudS3SecurityUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3SecurityUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3SecurityUsergroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudS3SecurityUsergroup | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class StorageCloudS3SecurityUsergroupList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3SecurityUsergroup[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3SecurityUsergroupOutputReference {
    return new StorageCloudS3SecurityUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudS3Security {
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#role StorageCloudS3#role}
  */
  readonly role?: StorageCloudS3SecurityRole[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#user StorageCloudS3#user}
  */
  readonly user?: StorageCloudS3SecurityUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#usergroup StorageCloudS3#usergroup}
  */
  readonly usergroup?: StorageCloudS3SecurityUsergroup[] | cdktf.IResolvable;
}

export function storageCloudS3SecurityToTerraform(struct?: StorageCloudS3Security | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.listMapper(storageCloudS3SecurityRoleToTerraform, true)(struct!.role),
    user: cdktf.listMapper(storageCloudS3SecurityUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(storageCloudS3SecurityUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function storageCloudS3SecurityToHclTerraform(struct?: StorageCloudS3Security | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.listMapperHcl(storageCloudS3SecurityRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudS3SecurityRoleList",
    },
    user: {
      value: cdktf.listMapperHcl(storageCloudS3SecurityUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudS3SecurityUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(storageCloudS3SecurityUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudS3SecurityUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudS3SecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudS3Security | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudS3Security | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role.internalValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role.internalValue = value.role;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role = new StorageCloudS3SecurityRoleList(this, "role", false);
  public get role() {
    return this._role;
  }
  public putRole(value: StorageCloudS3SecurityRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new StorageCloudS3SecurityUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: StorageCloudS3SecurityUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new StorageCloudS3SecurityUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: StorageCloudS3SecurityUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class StorageCloudS3SecurityList extends cdktf.ComplexList {
  public internalValue? : StorageCloudS3Security[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudS3SecurityOutputReference {
    return new StorageCloudS3SecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3 commvault_storage_cloud_s3}
*/
export class StorageCloudS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_storage_cloud_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageCloudS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageCloudS3 to import
  * @param importFromId The id of the existing StorageCloudS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageCloudS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_storage_cloud_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_s3 commvault_storage_cloud_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageCloudS3Config
  */
  public constructor(scope: Construct, id: string, config: StorageCloudS3Config) {
    super(scope, id, {
      terraformResourceType: 'commvault_storage_cloud_s3',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arnrole = config.arnrole;
    this._authentication = config.authentication;
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._servicehost = config.servicehost;
    this._storageclass = config.storageclass;
    this._usededuplication = config.usededuplication;
    this._credentials.internalValue = config.credentials;
    this._deduplicationdblocation.internalValue = config.deduplicationdblocation;
    this._encryption.internalValue = config.encryption;
    this._mediaagent.internalValue = config.mediaagent;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arnrole - computed: true, optional: true, required: false
  private _arnrole?: string; 
  public get arnrole() {
    return this.getStringAttribute('arnrole');
  }
  public set arnrole(value: string) {
    this._arnrole = value;
  }
  public resetArnrole() {
    this._arnrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnroleInput() {
    return this._arnrole;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // servicehost - computed: false, optional: false, required: true
  private _servicehost?: string; 
  public get servicehost() {
    return this.getStringAttribute('servicehost');
  }
  public set servicehost(value: string) {
    this._servicehost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicehostInput() {
    return this._servicehost;
  }

  // storageclass - computed: false, optional: false, required: true
  private _storageclass?: string; 
  public get storageclass() {
    return this.getStringAttribute('storageclass');
  }
  public set storageclass(value: string) {
    this._storageclass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageclassInput() {
    return this._storageclass;
  }

  // usededuplication - computed: true, optional: true, required: false
  private _usededuplication?: string; 
  public get usededuplication() {
    return this.getStringAttribute('usededuplication');
  }
  public set usededuplication(value: string) {
    this._usededuplication = value;
  }
  public resetUsededuplication() {
    this._usededuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usededuplicationInput() {
    return this._usededuplication;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new StorageCloudS3CredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StorageCloudS3Credentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // deduplicationdblocation - computed: false, optional: true, required: false
  private _deduplicationdblocation = new StorageCloudS3DeduplicationdblocationList(this, "deduplicationdblocation", true);
  public get deduplicationdblocation() {
    return this._deduplicationdblocation;
  }
  public putDeduplicationdblocation(value: StorageCloudS3Deduplicationdblocation[] | cdktf.IResolvable) {
    this._deduplicationdblocation.internalValue = value;
  }
  public resetDeduplicationdblocation() {
    this._deduplicationdblocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationdblocationInput() {
    return this._deduplicationdblocation.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StorageCloudS3EncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StorageCloudS3Encryption[] | cdktf.IResolvable) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent = new StorageCloudS3MediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageCloudS3Mediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new StorageCloudS3SecurityList(this, "security", true);
  public get security() {
    return this._security;
  }
  public putSecurity(value: StorageCloudS3Security[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arnrole: cdktf.stringToTerraform(this._arnrole),
      authentication: cdktf.stringToTerraform(this._authentication),
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      servicehost: cdktf.stringToTerraform(this._servicehost),
      storageclass: cdktf.stringToTerraform(this._storageclass),
      usededuplication: cdktf.stringToTerraform(this._usededuplication),
      credentials: cdktf.listMapper(storageCloudS3CredentialsToTerraform, true)(this._credentials.internalValue),
      deduplicationdblocation: cdktf.listMapper(storageCloudS3DeduplicationdblocationToTerraform, true)(this._deduplicationdblocation.internalValue),
      encryption: cdktf.listMapper(storageCloudS3EncryptionToTerraform, true)(this._encryption.internalValue),
      mediaagent: cdktf.listMapper(storageCloudS3MediaagentToTerraform, true)(this._mediaagent.internalValue),
      security: cdktf.listMapper(storageCloudS3SecurityToTerraform, true)(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arnrole: {
        value: cdktf.stringToHclTerraform(this._arnrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      servicehost: {
        value: cdktf.stringToHclTerraform(this._servicehost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storageclass: {
        value: cdktf.stringToHclTerraform(this._storageclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usededuplication: {
        value: cdktf.stringToHclTerraform(this._usededuplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.listMapperHcl(storageCloudS3CredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudS3CredentialsList",
      },
      deduplicationdblocation: {
        value: cdktf.listMapperHcl(storageCloudS3DeduplicationdblocationToHclTerraform, true)(this._deduplicationdblocation.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageCloudS3DeduplicationdblocationList",
      },
      encryption: {
        value: cdktf.listMapperHcl(storageCloudS3EncryptionToHclTerraform, true)(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudS3EncryptionList",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(storageCloudS3MediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudS3MediaagentList",
      },
      security: {
        value: cdktf.listMapperHcl(storageCloudS3SecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageCloudS3SecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
