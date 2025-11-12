// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexOsRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#filter DataPowerflexOsRepository#filter}
  */
  readonly filter?: DataPowerflexOsRepositoryFilter;
}
export interface DataPowerflexOsRepositoryOsRepositoriesMetadataRepos {
}

export function dataPowerflexOsRepositoryOsRepositoriesMetadataReposToTerraform(struct?: DataPowerflexOsRepositoryOsRepositoriesMetadataRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexOsRepositoryOsRepositoriesMetadataReposToHclTerraform(struct?: DataPowerflexOsRepositoryOsRepositoriesMetadataRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexOsRepositoryOsRepositoriesMetadataReposOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexOsRepositoryOsRepositoriesMetadataRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexOsRepositoryOsRepositoriesMetadataRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gpg_key - computed: true, optional: false, required: false
  public get gpgKey() {
    return this.getStringAttribute('gpg_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_packages - computed: true, optional: false, required: false
  public get osPackages() {
    return this.getBooleanAttribute('os_packages');
  }
}

export class DataPowerflexOsRepositoryOsRepositoriesMetadataReposList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexOsRepositoryOsRepositoriesMetadataReposOutputReference {
    return new DataPowerflexOsRepositoryOsRepositoriesMetadataReposOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexOsRepositoryOsRepositoriesMetadata {
}

export function dataPowerflexOsRepositoryOsRepositoriesMetadataToTerraform(struct?: DataPowerflexOsRepositoryOsRepositoriesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexOsRepositoryOsRepositoriesMetadataToHclTerraform(struct?: DataPowerflexOsRepositoryOsRepositoriesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexOsRepositoryOsRepositoriesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexOsRepositoryOsRepositoriesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexOsRepositoryOsRepositoriesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repos - computed: true, optional: false, required: false
  private _repos = new DataPowerflexOsRepositoryOsRepositoriesMetadataReposList(this, "repos", false);
  public get repos() {
    return this._repos;
  }
}
export interface DataPowerflexOsRepositoryOsRepositories {
}

export function dataPowerflexOsRepositoryOsRepositoriesToTerraform(struct?: DataPowerflexOsRepositoryOsRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexOsRepositoryOsRepositoriesToHclTerraform(struct?: DataPowerflexOsRepositoryOsRepositories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexOsRepositoryOsRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexOsRepositoryOsRepositories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexOsRepositoryOsRepositories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // from_web - computed: true, optional: false, required: false
  public get fromWeb() {
    return this.getBooleanAttribute('from_web');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataPowerflexOsRepositoryOsRepositoriesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // razor_name - computed: true, optional: false, required: false
  public get razorName() {
    return this.getStringAttribute('razor_name');
  }

  // rcm_path - computed: true, optional: false, required: false
  public get rcmPath() {
    return this.getStringAttribute('rcm_path');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataPowerflexOsRepositoryOsRepositoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexOsRepositoryOsRepositoriesOutputReference {
    return new DataPowerflexOsRepositoryOsRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexOsRepositoryFilter {
  /**
  * List of base_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#base_url DataPowerflexOsRepository#base_url}
  */
  readonly baseUrl?: string[];
  /**
  * List of created_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#created_by DataPowerflexOsRepository#created_by}
  */
  readonly createdBy?: string[];
  /**
  * List of created_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#created_date DataPowerflexOsRepository#created_date}
  */
  readonly createdDate?: string[];
  /**
  * Value for from_web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#from_web DataPowerflexOsRepository#from_web}
  */
  readonly fromWeb?: boolean | cdktf.IResolvable;
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#id DataPowerflexOsRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of image_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#image_type DataPowerflexOsRepository#image_type}
  */
  readonly imageType?: string[];
  /**
  * Value for in_use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#in_use DataPowerflexOsRepository#in_use}
  */
  readonly inUse?: boolean | cdktf.IResolvable;
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#name DataPowerflexOsRepository#name}
  */
  readonly name?: string[];
  /**
  * List of razor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#razor_name DataPowerflexOsRepository#razor_name}
  */
  readonly razorName?: string[];
  /**
  * List of rcm_path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#rcm_path DataPowerflexOsRepository#rcm_path}
  */
  readonly rcmPath?: string[];
  /**
  * List of repo_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#repo_type DataPowerflexOsRepository#repo_type}
  */
  readonly repoType?: string[];
  /**
  * List of source_path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#source_path DataPowerflexOsRepository#source_path}
  */
  readonly sourcePath?: string[];
  /**
  * List of state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#state DataPowerflexOsRepository#state}
  */
  readonly state?: string[];
  /**
  * List of username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#username DataPowerflexOsRepository#username}
  */
  readonly username?: string[];
}

export function dataPowerflexOsRepositoryFilterToTerraform(struct?: DataPowerflexOsRepositoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.baseUrl),
    created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdBy),
    created_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdDate),
    from_web: cdktf.booleanToTerraform(struct!.fromWeb),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    image_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imageType),
    in_use: cdktf.booleanToTerraform(struct!.inUse),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    razor_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.razorName),
    rcm_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rcmPath),
    repo_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repoType),
    source_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePath),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
    username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.username),
  }
}


export function dataPowerflexOsRepositoryFilterToHclTerraform(struct?: DataPowerflexOsRepositoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.baseUrl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    created_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    created_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    from_web: {
      value: cdktf.booleanToHclTerraform(struct!.fromWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    image_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imageType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    in_use: {
      value: cdktf.booleanToHclTerraform(struct!.inUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    razor_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.razorName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rcm_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rcmPath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repo_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repoType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.username),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexOsRepositoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexOsRepositoryFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdDate = this._createdDate;
    }
    if (this._fromWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromWeb = this._fromWeb;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._inUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inUse = this._inUse;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._razorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.razorName = this._razorName;
    }
    if (this._rcmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcmPath = this._rcmPath;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexOsRepositoryFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._createdBy = undefined;
      this._createdDate = undefined;
      this._fromWeb = undefined;
      this._id = undefined;
      this._imageType = undefined;
      this._inUse = undefined;
      this._name = undefined;
      this._razorName = undefined;
      this._rcmPath = undefined;
      this._repoType = undefined;
      this._sourcePath = undefined;
      this._state = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._createdBy = value.createdBy;
      this._createdDate = value.createdDate;
      this._fromWeb = value.fromWeb;
      this._id = value.id;
      this._imageType = value.imageType;
      this._inUse = value.inUse;
      this._name = value.name;
      this._razorName = value.razorName;
      this._rcmPath = value.rcmPath;
      this._repoType = value.repoType;
      this._sourcePath = value.sourcePath;
      this._state = value.state;
      this._username = value.username;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string[]; 
  public get baseUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('base_url'));
  }
  public set baseUrl(value: string[]) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string[]; 
  public get createdBy() {
    return cdktf.Fn.tolist(this.getListAttribute('created_by'));
  }
  public set createdBy(value: string[]) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_date - computed: false, optional: true, required: false
  private _createdDate?: string[]; 
  public get createdDate() {
    return cdktf.Fn.tolist(this.getListAttribute('created_date'));
  }
  public set createdDate(value: string[]) {
    this._createdDate = value;
  }
  public resetCreatedDate() {
    this._createdDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdDateInput() {
    return this._createdDate;
  }

  // from_web - computed: false, optional: true, required: false
  private _fromWeb?: boolean | cdktf.IResolvable; 
  public get fromWeb() {
    return this.getBooleanAttribute('from_web');
  }
  public set fromWeb(value: boolean | cdktf.IResolvable) {
    this._fromWeb = value;
  }
  public resetFromWeb() {
    this._fromWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromWebInput() {
    return this._fromWeb;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string[]; 
  public get imageType() {
    return cdktf.Fn.tolist(this.getListAttribute('image_type'));
  }
  public set imageType(value: string[]) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // in_use - computed: false, optional: true, required: false
  private _inUse?: boolean | cdktf.IResolvable; 
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }
  public set inUse(value: boolean | cdktf.IResolvable) {
    this._inUse = value;
  }
  public resetInUse() {
    this._inUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseInput() {
    return this._inUse;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // razor_name - computed: false, optional: true, required: false
  private _razorName?: string[]; 
  public get razorName() {
    return cdktf.Fn.tolist(this.getListAttribute('razor_name'));
  }
  public set razorName(value: string[]) {
    this._razorName = value;
  }
  public resetRazorName() {
    this._razorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get razorNameInput() {
    return this._razorName;
  }

  // rcm_path - computed: false, optional: true, required: false
  private _rcmPath?: string[]; 
  public get rcmPath() {
    return cdktf.Fn.tolist(this.getListAttribute('rcm_path'));
  }
  public set rcmPath(value: string[]) {
    this._rcmPath = value;
  }
  public resetRcmPath() {
    this._rcmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcmPathInput() {
    return this._rcmPath;
  }

  // repo_type - computed: false, optional: true, required: false
  private _repoType?: string[]; 
  public get repoType() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_type'));
  }
  public set repoType(value: string[]) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string[]; 
  public get sourcePath() {
    return cdktf.Fn.tolist(this.getListAttribute('source_path'));
  }
  public set sourcePath(value: string[]) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return cdktf.Fn.tolist(this.getListAttribute('state'));
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string[]; 
  public get username() {
    return cdktf.Fn.tolist(this.getListAttribute('username'));
  }
  public set username(value: string[]) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository powerflex_os_repository}
*/
export class DataPowerflexOsRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_os_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexOsRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexOsRepository to import
  * @param importFromId The id of the existing DataPowerflexOsRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexOsRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_os_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/os_repository powerflex_os_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexOsRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexOsRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_os_repository',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // os_repositories - computed: true, optional: false, required: false
  private _osRepositories = new DataPowerflexOsRepositoryOsRepositoriesList(this, "os_repositories", false);
  public get osRepositories() {
    return this._osRepositories;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexOsRepositoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexOsRepositoryFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexOsRepositoryFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexOsRepositoryFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexOsRepositoryFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
