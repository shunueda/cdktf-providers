// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageContainerAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for the access path can be either read (writing to path not allowed) or read and write (writing to path allowed). [READ_AND_WRITE, READ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#access StorageContainerAzure#access}
  */
  readonly access?: string;
  /**
  * Only for IAM VM and IAM AD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#accountname StorageContainerAzure#accountname}
  */
  readonly accountname?: string;
  /**
  * Authentication type for the cloud storage server. Only Access & Account Name and IAM AD require credentials. [Access and secret keys, IAM VM role assignment, IAM AD application role assignment (Credential Manager)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#authentication StorageContainerAzure#authentication}
  */
  readonly authentication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#cloudstorageid StorageContainerAzure#cloudstorageid}
  */
  readonly cloudstorageid: number;
  /**
  * Name of container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#container StorageContainerAzure#container}
  */
  readonly container: string;
  /**
  * Enable/Disable access of bucket to a media Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#enable StorageContainerAzure#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#id StorageContainerAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for proxy configuration (Should be in Base64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#password StorageContainerAzure#password}
  */
  readonly password?: string;
  /**
  * Port for proxy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#port StorageContainerAzure#port}
  */
  readonly port?: number;
  /**
  * If the MediaAgent accesses the mount path using a proxy then proxy server address needs to be provided. If you want to remove proxy information, pass empty string in proxyAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#proxyaddress StorageContainerAzure#proxyaddress}
  */
  readonly proxyaddress?: string;
  /**
  * IP address or fully qualified domain name or URL for the cloud library based on cloud vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#servicehost StorageContainerAzure#servicehost}
  */
  readonly servicehost?: string;
  /**
  * Appropriate storage class for your account [Container's default, Hot, Cool, Archive, Hot/Archive (Combined Storage Tiers), Cool/Archive (Combined Storage Tiers)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#storageclass StorageContainerAzure#storageclass}
  */
  readonly storageclass: string;
  /**
  * Username for proxy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#username StorageContainerAzure#username}
  */
  readonly username?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#configuration StorageContainerAzure#configuration}
  */
  readonly configuration?: StorageContainerAzureConfiguration[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#credentials StorageContainerAzure#credentials}
  */
  readonly credentials: StorageContainerAzureCredentials[] | cdktf.IResolvable;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#mediaagent StorageContainerAzure#mediaagent}
  */
  readonly mediaagent: StorageContainerAzureMediaagent[] | cdktf.IResolvable;
}
export interface StorageContainerAzureConfigurationStorageacceleratorcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#id StorageContainerAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#name StorageContainerAzure#name}
  */
  readonly name?: string;
}

export function storageContainerAzureConfigurationStorageacceleratorcredentialsToTerraform(struct?: StorageContainerAzureConfigurationStorageacceleratorcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageContainerAzureConfigurationStorageacceleratorcredentialsToHclTerraform(struct?: StorageContainerAzureConfigurationStorageacceleratorcredentials | cdktf.IResolvable): any {
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

export class StorageContainerAzureConfigurationStorageacceleratorcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainerAzureConfigurationStorageacceleratorcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageContainerAzureConfigurationStorageacceleratorcredentials | cdktf.IResolvable | undefined) {
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

export class StorageContainerAzureConfigurationStorageacceleratorcredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageContainerAzureConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable

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
  public get(index: number): StorageContainerAzureConfigurationStorageacceleratorcredentialsOutputReference {
    return new StorageContainerAzureConfigurationStorageacceleratorcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainerAzureConfiguration {
  /**
  * When true, prevents new data writes to backup location by changing number of writers to zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#disablebackuplocationforfuturebackups StorageContainerAzure#disablebackuplocationforfuturebackups}
  */
  readonly disablebackuplocationforfuturebackups?: string;
  /**
  * When true, means mount path is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#enable StorageContainerAzure#enable}
  */
  readonly enable?: string;
  /**
  * When true, the deduplicated blocks in the mount path will not be referenced when there are multiple mount paths in the library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#prepareforretirement StorageContainerAzure#prepareforretirement}
  */
  readonly prepareforretirement?: string;
  /**
  * storageacceleratorcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#storageacceleratorcredentials StorageContainerAzure#storageacceleratorcredentials}
  */
  readonly storageacceleratorcredentials?: StorageContainerAzureConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable;
}

export function storageContainerAzureConfigurationToTerraform(struct?: StorageContainerAzureConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disablebackuplocationforfuturebackups: cdktf.stringToTerraform(struct!.disablebackuplocationforfuturebackups),
    enable: cdktf.stringToTerraform(struct!.enable),
    prepareforretirement: cdktf.stringToTerraform(struct!.prepareforretirement),
    storageacceleratorcredentials: cdktf.listMapper(storageContainerAzureConfigurationStorageacceleratorcredentialsToTerraform, true)(struct!.storageacceleratorcredentials),
  }
}


export function storageContainerAzureConfigurationToHclTerraform(struct?: StorageContainerAzureConfiguration | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(storageContainerAzureConfigurationStorageacceleratorcredentialsToHclTerraform, true)(struct!.storageacceleratorcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "StorageContainerAzureConfigurationStorageacceleratorcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageContainerAzureConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainerAzureConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageContainerAzureConfiguration | cdktf.IResolvable | undefined) {
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
  private _storageacceleratorcredentials = new StorageContainerAzureConfigurationStorageacceleratorcredentialsList(this, "storageacceleratorcredentials", false);
  public get storageacceleratorcredentials() {
    return this._storageacceleratorcredentials;
  }
  public putStorageacceleratorcredentials(value: StorageContainerAzureConfigurationStorageacceleratorcredentials[] | cdktf.IResolvable) {
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

export class StorageContainerAzureConfigurationList extends cdktf.ComplexList {
  public internalValue? : StorageContainerAzureConfiguration[] | cdktf.IResolvable

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
  public get(index: number): StorageContainerAzureConfigurationOutputReference {
    return new StorageContainerAzureConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainerAzureCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#id StorageContainerAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#name StorageContainerAzure#name}
  */
  readonly name?: string;
}

export function storageContainerAzureCredentialsToTerraform(struct?: StorageContainerAzureCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageContainerAzureCredentialsToHclTerraform(struct?: StorageContainerAzureCredentials | cdktf.IResolvable): any {
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

export class StorageContainerAzureCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainerAzureCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageContainerAzureCredentials | cdktf.IResolvable | undefined) {
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

export class StorageContainerAzureCredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageContainerAzureCredentials[] | cdktf.IResolvable

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
  public get(index: number): StorageContainerAzureCredentialsOutputReference {
    return new StorageContainerAzureCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageContainerAzureMediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#id StorageContainerAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#name StorageContainerAzure#name}
  */
  readonly name?: string;
}

export function storageContainerAzureMediaagentToTerraform(struct?: StorageContainerAzureMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageContainerAzureMediaagentToHclTerraform(struct?: StorageContainerAzureMediaagent | cdktf.IResolvable): any {
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

export class StorageContainerAzureMediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageContainerAzureMediaagent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageContainerAzureMediaagent | cdktf.IResolvable | undefined) {
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

export class StorageContainerAzureMediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageContainerAzureMediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageContainerAzureMediaagentOutputReference {
    return new StorageContainerAzureMediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure commvault_storage_container_azure}
*/
export class StorageContainerAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_storage_container_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageContainerAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageContainerAzure to import
  * @param importFromId The id of the existing StorageContainerAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageContainerAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_storage_container_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_container_azure commvault_storage_container_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageContainerAzureConfig
  */
  public constructor(scope: Construct, id: string, config: StorageContainerAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_storage_container_azure',
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
    this._access = config.access;
    this._accountname = config.accountname;
    this._authentication = config.authentication;
    this._cloudstorageid = config.cloudstorageid;
    this._container = config.container;
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

  // accountname - computed: true, optional: true, required: false
  private _accountname?: string; 
  public get accountname() {
    return this.getStringAttribute('accountname');
  }
  public set accountname(value: string) {
    this._accountname = value;
  }
  public resetAccountname() {
    this._accountname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountnameInput() {
    return this._accountname;
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

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // servicehost - computed: true, optional: true, required: false
  private _servicehost?: string; 
  public get servicehost() {
    return this.getStringAttribute('servicehost');
  }
  public set servicehost(value: string) {
    this._servicehost = value;
  }
  public resetServicehost() {
    this._servicehost = undefined;
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
  private _configuration = new StorageContainerAzureConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: StorageContainerAzureConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new StorageContainerAzureCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StorageContainerAzureCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent = new StorageContainerAzureMediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageContainerAzureMediaagent[] | cdktf.IResolvable) {
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
      accountname: cdktf.stringToTerraform(this._accountname),
      authentication: cdktf.stringToTerraform(this._authentication),
      cloudstorageid: cdktf.numberToTerraform(this._cloudstorageid),
      container: cdktf.stringToTerraform(this._container),
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      proxyaddress: cdktf.stringToTerraform(this._proxyaddress),
      servicehost: cdktf.stringToTerraform(this._servicehost),
      storageclass: cdktf.stringToTerraform(this._storageclass),
      username: cdktf.stringToTerraform(this._username),
      configuration: cdktf.listMapper(storageContainerAzureConfigurationToTerraform, true)(this._configuration.internalValue),
      credentials: cdktf.listMapper(storageContainerAzureCredentialsToTerraform, true)(this._credentials.internalValue),
      mediaagent: cdktf.listMapper(storageContainerAzureMediaagentToTerraform, true)(this._mediaagent.internalValue),
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
      accountname: {
        value: cdktf.stringToHclTerraform(this._accountname),
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
      cloudstorageid: {
        value: cdktf.numberToHclTerraform(this._cloudstorageid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container: {
        value: cdktf.stringToHclTerraform(this._container),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(storageContainerAzureConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageContainerAzureConfigurationList",
      },
      credentials: {
        value: cdktf.listMapperHcl(storageContainerAzureCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageContainerAzureCredentialsList",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(storageContainerAzureMediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageContainerAzureMediaagentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
