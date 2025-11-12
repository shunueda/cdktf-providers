// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageCloudBucketS3Config extends cdktf.TerraformMetaArguments {
  /**
  * The access type for the access path can be either read (writing to path not allowed) or read and write (writing to path allowed). [READ_AND_WRITE, READ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#access StorageCloudBucketS3#access}
  */
  readonly access?: string;
  /**
  * Needed for AWS STS assume role and AWS STS assume role with IAM role policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#arnrole StorageCloudBucketS3#arnrole}
  */
  readonly arnrole?: string;
  /**
  * Authentication type for the cloud storage server [Access and secret keys, AWS IAM role policy, AWS STS assume role, AWS STS assume role with IAM role policy]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#authentication StorageCloudBucketS3#authentication}
  */
  readonly authentication: string;
  /**
  * Name of bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#bucket StorageCloudBucketS3#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#cloudstorageid StorageCloudBucketS3#cloudstorageid}
  */
  readonly cloudstorageid: number;
  /**
  * Enable/Disable access of bucket to a media Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#enable StorageCloudBucketS3#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#id StorageCloudBucketS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for proxy configuration (Should be in Base64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#password StorageCloudBucketS3#password}
  */
  readonly password?: string;
  /**
  * Port for proxy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#port StorageCloudBucketS3#port}
  */
  readonly port?: number;
  /**
  * If the MediaAgent accesses the mount path using a proxy then proxy server address needs to be provided. If you want to remove proxy information, pass empty string in proxyAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#proxyaddress StorageCloudBucketS3#proxyaddress}
  */
  readonly proxyaddress?: string;
  /**
  * IP address or fully qualified domain name or URL for the cloud library based on cloud vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#servicehost StorageCloudBucketS3#servicehost}
  */
  readonly servicehost: string;
  /**
  * Appropriate storage class for your account [Standard, Reduced Redundancy Storage, Standard - Infrequent access, One zone - Infrequent access, Intelligent tiering, S3 Glacier, Standard/Glacier (Combined Storage Tiers), Standard-IA/Glacier (Combined Storage Tiers), One Zone-IA/Glacier (Combined Storage Tiers), Intelligent-Tiering/Glacier (Combined Storage Tiers), S3 Glacier Deep Archive, Standard/Deep Archive (Combined Storage Tiers), Standard-IA/Deep Archive (Combined Storage Tiers), One Zone-IA/Deep Archive (Combined Storage Tiers), Intelligent-Tiering/Deep Archive (Combined Storage Tiers)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#storageclass StorageCloudBucketS3#storageclass}
  */
  readonly storageclass: string;
  /**
  * Username for proxy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#username StorageCloudBucketS3#username}
  */
  readonly username?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#configuration StorageCloudBucketS3#configuration}
  */
  readonly configuration?: StorageCloudBucketS3Configuration[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#credentials StorageCloudBucketS3#credentials}
  */
  readonly credentials?: StorageCloudBucketS3Credentials[] | cdktf.IResolvable;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#mediaagent StorageCloudBucketS3#mediaagent}
  */
  readonly mediaagent: StorageCloudBucketS3Mediaagent[] | cdktf.IResolvable;
}
export interface StorageCloudBucketS3ConfigurationStorageacceleratorcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#id StorageCloudBucketS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#name StorageCloudBucketS3#name}
  */
  readonly name?: string;
}

export function storageCloudBucketS3ConfigurationStorageacceleratorcredentialsToTerraform(struct?: StorageCloudBucketS3ConfigurationStorageacceleratorcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudBucketS3ConfigurationStorageacceleratorcredentialsToHclTerraform(struct?: StorageCloudBucketS3ConfigurationStorageacceleratorcredentials | cdktf.IResolvable): any {
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

export class StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudBucketS3ConfigurationStorageacceleratorcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudBucketS3ConfigurationStorageacceleratorcredentials | cdktf.IResolvable | undefined) {
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

export class StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageCloudBucketS3ConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsOutputReference {
    return new StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudBucketS3Configuration {
  /**
  * When true, prevents new data writes to backup location by changing number of writers to zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#disablebackuplocationforfuturebackups StorageCloudBucketS3#disablebackuplocationforfuturebackups}
  */
  readonly disablebackuplocationforfuturebackups?: string;
  /**
  * When true, means mount path is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#enable StorageCloudBucketS3#enable}
  */
  readonly enable?: string;
  /**
  * When true, the deduplicated blocks in the mount path will not be referenced when there are multiple mount paths in the library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#prepareforretirement StorageCloudBucketS3#prepareforretirement}
  */
  readonly prepareforretirement?: string;
  /**
  * storageacceleratorcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#storageacceleratorcredentials StorageCloudBucketS3#storageacceleratorcredentials}
  */
  readonly storageacceleratorcredentials?: StorageCloudBucketS3ConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable;
}

export function storageCloudBucketS3ConfigurationToTerraform(struct?: StorageCloudBucketS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disablebackuplocationforfuturebackups: cdktf.stringToTerraform(struct!.disablebackuplocationforfuturebackups),
    enable: cdktf.stringToTerraform(struct!.enable),
    prepareforretirement: cdktf.stringToTerraform(struct!.prepareforretirement),
    storageacceleratorcredentials: cdktf.listMapper(storageCloudBucketS3ConfigurationStorageacceleratorcredentialsToTerraform, true)(struct!.storageacceleratorcredentials),
  }
}


export function storageCloudBucketS3ConfigurationToHclTerraform(struct?: StorageCloudBucketS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disablebackuplocationforfuturebackups: {
      value: cdktf.stringToHclTerraform(struct!.disablebackuplocationforfuturebackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepareforretirement: {
      value: cdktf.stringToHclTerraform(struct!.prepareforretirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storageacceleratorcredentials: {
      value: cdktf.listMapperHcl(storageCloudBucketS3ConfigurationStorageacceleratorcredentialsToHclTerraform, true)(struct!.storageacceleratorcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageCloudBucketS3ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudBucketS3Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablebackuplocationforfuturebackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablebackuplocationforfuturebackups = this._disablebackuplocationforfuturebackups;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._prepareforretirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareforretirement = this._prepareforretirement;
    }
    if (this._storageacceleratorcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageacceleratorcredentials = this._storageacceleratorcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageCloudBucketS3Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablebackuplocationforfuturebackups = undefined;
      this._enable = undefined;
      this._prepareforretirement = undefined;
      this._storageacceleratorcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablebackuplocationforfuturebackups = value.disablebackuplocationforfuturebackups;
      this._enable = value.enable;
      this._prepareforretirement = value.prepareforretirement;
      this._storageacceleratorcredentials.internalValue = value.storageacceleratorcredentials;
    }
  }

  // disablebackuplocationforfuturebackups - computed: true, optional: true, required: false
  private _disablebackuplocationforfuturebackups?: string; 
  public get disablebackuplocationforfuturebackups() {
    return this.getStringAttribute('disablebackuplocationforfuturebackups');
  }
  public set disablebackuplocationforfuturebackups(value: string) {
    this._disablebackuplocationforfuturebackups = value;
  }
  public resetDisablebackuplocationforfuturebackups() {
    this._disablebackuplocationforfuturebackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablebackuplocationforfuturebackupsInput() {
    return this._disablebackuplocationforfuturebackups;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // prepareforretirement - computed: true, optional: true, required: false
  private _prepareforretirement?: string; 
  public get prepareforretirement() {
    return this.getStringAttribute('prepareforretirement');
  }
  public set prepareforretirement(value: string) {
    this._prepareforretirement = value;
  }
  public resetPrepareforretirement() {
    this._prepareforretirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareforretirementInput() {
    return this._prepareforretirement;
  }

  // storageacceleratorcredentials - computed: false, optional: true, required: false
  private _storageacceleratorcredentials = new StorageCloudBucketS3ConfigurationStorageacceleratorcredentialsList(this, "storageacceleratorcredentials", false);
  public get storageacceleratorcredentials() {
    return this._storageacceleratorcredentials;
  }
  public putStorageacceleratorcredentials(value: StorageCloudBucketS3ConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable) {
    this._storageacceleratorcredentials.internalValue = value;
  }
  public resetStorageacceleratorcredentials() {
    this._storageacceleratorcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageacceleratorcredentialsInput() {
    return this._storageacceleratorcredentials.internalValue;
  }
}

export class StorageCloudBucketS3ConfigurationList extends cdktf.ComplexList {
  public internalValue? : StorageCloudBucketS3Configuration[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudBucketS3ConfigurationOutputReference {
    return new StorageCloudBucketS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudBucketS3Credentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#id StorageCloudBucketS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#name StorageCloudBucketS3#name}
  */
  readonly name?: string;
}

export function storageCloudBucketS3CredentialsToTerraform(struct?: StorageCloudBucketS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudBucketS3CredentialsToHclTerraform(struct?: StorageCloudBucketS3Credentials | cdktf.IResolvable): any {
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

export class StorageCloudBucketS3CredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudBucketS3Credentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudBucketS3Credentials | cdktf.IResolvable | undefined) {
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

export class StorageCloudBucketS3CredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageCloudBucketS3Credentials[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudBucketS3CredentialsOutputReference {
    return new StorageCloudBucketS3CredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageCloudBucketS3Mediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#id StorageCloudBucketS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#name StorageCloudBucketS3#name}
  */
  readonly name?: string;
}

export function storageCloudBucketS3MediaagentToTerraform(struct?: StorageCloudBucketS3Mediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageCloudBucketS3MediaagentToHclTerraform(struct?: StorageCloudBucketS3Mediaagent | cdktf.IResolvable): any {
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

export class StorageCloudBucketS3MediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageCloudBucketS3Mediaagent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageCloudBucketS3Mediaagent | cdktf.IResolvable | undefined) {
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

export class StorageCloudBucketS3MediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageCloudBucketS3Mediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageCloudBucketS3MediaagentOutputReference {
    return new StorageCloudBucketS3MediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3 commvault_storage_cloud_bucket_s3}
*/
export class StorageCloudBucketS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_storage_cloud_bucket_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageCloudBucketS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageCloudBucketS3 to import
  * @param importFromId The id of the existing StorageCloudBucketS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageCloudBucketS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_storage_cloud_bucket_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_cloud_bucket_s3 commvault_storage_cloud_bucket_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageCloudBucketS3Config
  */
  public constructor(scope: Construct, id: string, config: StorageCloudBucketS3Config) {
    super(scope, id, {
      terraformResourceType: 'commvault_storage_cloud_bucket_s3',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._arnrole = config.arnrole;
    this._authentication = config.authentication;
    this._bucket = config.bucket;
    this._cloudstorageid = config.cloudstorageid;
    this._enable = config.enable;
    this._id = config.id;
    this._password = config.password;
    this._port = config.port;
    this._proxyaddress = config.proxyaddress;
    this._servicehost = config.servicehost;
    this._storageclass = config.storageclass;
    this._username = config.username;
    this._configuration.internalValue = config.configuration;
    this._credentials.internalValue = config.credentials;
    this._mediaagent.internalValue = config.mediaagent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

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

  // cloudstorageid - computed: false, optional: false, required: true
  private _cloudstorageid?: number; 
  public get cloudstorageid() {
    return this.getNumberAttribute('cloudstorageid');
  }
  public set cloudstorageid(value: number) {
    this._cloudstorageid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudstorageidInput() {
    return this._cloudstorageid;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxyaddress - computed: true, optional: true, required: false
  private _proxyaddress?: string; 
  public get proxyaddress() {
    return this.getStringAttribute('proxyaddress');
  }
  public set proxyaddress(value: string) {
    this._proxyaddress = value;
  }
  public resetProxyaddress() {
    this._proxyaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyaddressInput() {
    return this._proxyaddress;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new StorageCloudBucketS3ConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: StorageCloudBucketS3Configuration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new StorageCloudBucketS3CredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StorageCloudBucketS3Credentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent = new StorageCloudBucketS3MediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageCloudBucketS3Mediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      arnrole: cdktf.stringToTerraform(this._arnrole),
      authentication: cdktf.stringToTerraform(this._authentication),
      bucket: cdktf.stringToTerraform(this._bucket),
      cloudstorageid: cdktf.numberToTerraform(this._cloudstorageid),
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      proxyaddress: cdktf.stringToTerraform(this._proxyaddress),
      servicehost: cdktf.stringToTerraform(this._servicehost),
      storageclass: cdktf.stringToTerraform(this._storageclass),
      username: cdktf.stringToTerraform(this._username),
      configuration: cdktf.listMapper(storageCloudBucketS3ConfigurationToTerraform, true)(this._configuration.internalValue),
      credentials: cdktf.listMapper(storageCloudBucketS3CredentialsToTerraform, true)(this._credentials.internalValue),
      mediaagent: cdktf.listMapper(storageCloudBucketS3MediaagentToTerraform, true)(this._mediaagent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      cloudstorageid: {
        value: cdktf.numberToHclTerraform(this._cloudstorageid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyaddress: {
        value: cdktf.stringToHclTerraform(this._proxyaddress),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(storageCloudBucketS3ConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudBucketS3ConfigurationList",
      },
      credentials: {
        value: cdktf.listMapperHcl(storageCloudBucketS3CredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudBucketS3CredentialsList",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(storageCloudBucketS3MediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageCloudBucketS3MediaagentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
