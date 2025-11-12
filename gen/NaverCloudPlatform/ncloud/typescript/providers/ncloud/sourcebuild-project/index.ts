// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcebuildProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#description SourcebuildProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#name SourcebuildProject#name}
  */
  readonly name: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#artifact SourcebuildProject#artifact}
  */
  readonly artifact?: SourcebuildProjectArtifact;
  /**
  * build_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#build_command SourcebuildProject#build_command}
  */
  readonly buildCommand?: SourcebuildProjectBuildCommand;
  /**
  * build_image_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#build_image_upload SourcebuildProject#build_image_upload}
  */
  readonly buildImageUpload?: SourcebuildProjectBuildImageUpload;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#env SourcebuildProject#env}
  */
  readonly env: SourcebuildProjectEnv;
  /**
  * linked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#linked SourcebuildProject#linked}
  */
  readonly linked?: SourcebuildProjectLinked;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#source SourcebuildProject#source}
  */
  readonly source: SourcebuildProjectSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#timeouts SourcebuildProject#timeouts}
  */
  readonly timeouts?: SourcebuildProjectTimeouts;
}
export interface SourcebuildProjectCreated {
}

export function sourcebuildProjectCreatedToTerraform(struct?: SourcebuildProjectCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcebuildProjectCreatedToHclTerraform(struct?: SourcebuildProjectCreated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcebuildProjectCreatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcebuildProjectCreated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectCreated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class SourcebuildProjectCreatedList extends cdktf.ComplexList {

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
  public get(index: number): SourcebuildProjectCreatedOutputReference {
    return new SourcebuildProjectCreatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcebuildProjectLastBuild {
}

export function sourcebuildProjectLastBuildToTerraform(struct?: SourcebuildProjectLastBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcebuildProjectLastBuildToHclTerraform(struct?: SourcebuildProjectLastBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcebuildProjectLastBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcebuildProjectLastBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectLastBuild | undefined) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
}

export class SourcebuildProjectLastBuildList extends cdktf.ComplexList {

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
  public get(index: number): SourcebuildProjectLastBuildOutputReference {
    return new SourcebuildProjectLastBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcebuildProjectArtifactObjectStorageToUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#bucket SourcebuildProject#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#filename SourcebuildProject#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#path SourcebuildProject#path}
  */
  readonly path?: string;
}

export function sourcebuildProjectArtifactObjectStorageToUploadToTerraform(struct?: SourcebuildProjectArtifactObjectStorageToUploadOutputReference | SourcebuildProjectArtifactObjectStorageToUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    filename: cdktf.stringToTerraform(struct!.filename),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function sourcebuildProjectArtifactObjectStorageToUploadToHclTerraform(struct?: SourcebuildProjectArtifactObjectStorageToUploadOutputReference | SourcebuildProjectArtifactObjectStorageToUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectArtifactObjectStorageToUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectArtifactObjectStorageToUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectArtifactObjectStorageToUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._filename = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._filename = value.filename;
      this._path = value.path;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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
}
export interface SourcebuildProjectArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#backup SourcebuildProject#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#path SourcebuildProject#path}
  */
  readonly path?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#use SourcebuildProject#use}
  */
  readonly use?: boolean | cdktf.IResolvable;
  /**
  * object_storage_to_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#object_storage_to_upload SourcebuildProject#object_storage_to_upload}
  */
  readonly objectStorageToUpload?: SourcebuildProjectArtifactObjectStorageToUpload;
}

export function sourcebuildProjectArtifactToTerraform(struct?: SourcebuildProjectArtifactOutputReference | SourcebuildProjectArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.path),
    use: cdktf.booleanToTerraform(struct!.use),
    object_storage_to_upload: sourcebuildProjectArtifactObjectStorageToUploadToTerraform(struct!.objectStorageToUpload),
  }
}


export function sourcebuildProjectArtifactToHclTerraform(struct?: SourcebuildProjectArtifactOutputReference | SourcebuildProjectArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.path),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use: {
      value: cdktf.booleanToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_storage_to_upload: {
      value: sourcebuildProjectArtifactObjectStorageToUploadToHclTerraform(struct!.objectStorageToUpload),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectArtifactObjectStorageToUploadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    if (this._objectStorageToUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageToUpload = this._objectStorageToUpload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backup = undefined;
      this._path = undefined;
      this._use = undefined;
      this._objectStorageToUpload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backup = value.backup;
      this._path = value.path;
      this._use = value.use;
      this._objectStorageToUpload.internalValue = value.objectStorageToUpload;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return this.getListAttribute('path');
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // use - computed: false, optional: true, required: false
  private _use?: boolean | cdktf.IResolvable; 
  public get use() {
    return this.getBooleanAttribute('use');
  }
  public set use(value: boolean | cdktf.IResolvable) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // object_storage_to_upload - computed: false, optional: true, required: false
  private _objectStorageToUpload = new SourcebuildProjectArtifactObjectStorageToUploadOutputReference(this, "object_storage_to_upload");
  public get objectStorageToUpload() {
    return this._objectStorageToUpload;
  }
  public putObjectStorageToUpload(value: SourcebuildProjectArtifactObjectStorageToUpload) {
    this._objectStorageToUpload.internalValue = value;
  }
  public resetObjectStorageToUpload() {
    this._objectStorageToUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageToUploadInput() {
    return this._objectStorageToUpload.internalValue;
  }
}
export interface SourcebuildProjectBuildCommandDockerImageBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#dockerfile SourcebuildProject#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#image SourcebuildProject#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#latest SourcebuildProject#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#registry SourcebuildProject#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#tag SourcebuildProject#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#use SourcebuildProject#use}
  */
  readonly use?: boolean | cdktf.IResolvable;
}

export function sourcebuildProjectBuildCommandDockerImageBuildToTerraform(struct?: SourcebuildProjectBuildCommandDockerImageBuildOutputReference | SourcebuildProjectBuildCommandDockerImageBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    image: cdktf.stringToTerraform(struct!.image),
    latest: cdktf.booleanToTerraform(struct!.latest),
    registry: cdktf.stringToTerraform(struct!.registry),
    tag: cdktf.stringToTerraform(struct!.tag),
    use: cdktf.booleanToTerraform(struct!.use),
  }
}


export function sourcebuildProjectBuildCommandDockerImageBuildToHclTerraform(struct?: SourcebuildProjectBuildCommandDockerImageBuildOutputReference | SourcebuildProjectBuildCommandDockerImageBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dockerfile: {
      value: cdktf.stringToHclTerraform(struct!.dockerfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.booleanToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.booleanToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectBuildCommandDockerImageBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectBuildCommandDockerImageBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfile = this._dockerfile;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectBuildCommandDockerImageBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerfile = undefined;
      this._image = undefined;
      this._latest = undefined;
      this._registry = undefined;
      this._tag = undefined;
      this._use = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerfile = value.dockerfile;
      this._image = value.image;
      this._latest = value.latest;
      this._registry = value.registry;
      this._tag = value.tag;
      this._use = value.use;
    }
  }

  // dockerfile - computed: false, optional: true, required: false
  private _dockerfile?: string; 
  public get dockerfile() {
    return this.getStringAttribute('dockerfile');
  }
  public set dockerfile(value: string) {
    this._dockerfile = value;
  }
  public resetDockerfile() {
    this._dockerfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileInput() {
    return this._dockerfile;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // use - computed: false, optional: true, required: false
  private _use?: boolean | cdktf.IResolvable; 
  public get use() {
    return this.getBooleanAttribute('use');
  }
  public set use(value: boolean | cdktf.IResolvable) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}
export interface SourcebuildProjectBuildCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#in_build SourcebuildProject#in_build}
  */
  readonly inBuild?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#post_build SourcebuildProject#post_build}
  */
  readonly postBuild?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#pre_build SourcebuildProject#pre_build}
  */
  readonly preBuild?: string[];
  /**
  * docker_image_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#docker_image_build SourcebuildProject#docker_image_build}
  */
  readonly dockerImageBuild?: SourcebuildProjectBuildCommandDockerImageBuild;
}

export function sourcebuildProjectBuildCommandToTerraform(struct?: SourcebuildProjectBuildCommandOutputReference | SourcebuildProjectBuildCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_build: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inBuild),
    post_build: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postBuild),
    pre_build: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preBuild),
    docker_image_build: sourcebuildProjectBuildCommandDockerImageBuildToTerraform(struct!.dockerImageBuild),
  }
}


export function sourcebuildProjectBuildCommandToHclTerraform(struct?: SourcebuildProjectBuildCommandOutputReference | SourcebuildProjectBuildCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_build: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inBuild),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    post_build: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postBuild),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_build: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preBuild),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    docker_image_build: {
      value: sourcebuildProjectBuildCommandDockerImageBuildToHclTerraform(struct!.dockerImageBuild),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectBuildCommandDockerImageBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectBuildCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectBuildCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBuild = this._inBuild;
    }
    if (this._postBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBuild = this._postBuild;
    }
    if (this._preBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBuild = this._preBuild;
    }
    if (this._dockerImageBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImageBuild = this._dockerImageBuild?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectBuildCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inBuild = undefined;
      this._postBuild = undefined;
      this._preBuild = undefined;
      this._dockerImageBuild.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inBuild = value.inBuild;
      this._postBuild = value.postBuild;
      this._preBuild = value.preBuild;
      this._dockerImageBuild.internalValue = value.dockerImageBuild;
    }
  }

  // in_build - computed: false, optional: true, required: false
  private _inBuild?: string[]; 
  public get inBuild() {
    return this.getListAttribute('in_build');
  }
  public set inBuild(value: string[]) {
    this._inBuild = value;
  }
  public resetInBuild() {
    this._inBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBuildInput() {
    return this._inBuild;
  }

  // post_build - computed: false, optional: true, required: false
  private _postBuild?: string[]; 
  public get postBuild() {
    return this.getListAttribute('post_build');
  }
  public set postBuild(value: string[]) {
    this._postBuild = value;
  }
  public resetPostBuild() {
    this._postBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBuildInput() {
    return this._postBuild;
  }

  // pre_build - computed: false, optional: true, required: false
  private _preBuild?: string[]; 
  public get preBuild() {
    return this.getListAttribute('pre_build');
  }
  public set preBuild(value: string[]) {
    this._preBuild = value;
  }
  public resetPreBuild() {
    this._preBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBuildInput() {
    return this._preBuild;
  }

  // docker_image_build - computed: false, optional: true, required: false
  private _dockerImageBuild = new SourcebuildProjectBuildCommandDockerImageBuildOutputReference(this, "docker_image_build");
  public get dockerImageBuild() {
    return this._dockerImageBuild;
  }
  public putDockerImageBuild(value: SourcebuildProjectBuildCommandDockerImageBuild) {
    this._dockerImageBuild.internalValue = value;
  }
  public resetDockerImageBuild() {
    this._dockerImageBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageBuildInput() {
    return this._dockerImageBuild.internalValue;
  }
}
export interface SourcebuildProjectBuildImageUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#container_registry_name SourcebuildProject#container_registry_name}
  */
  readonly containerRegistryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#image_name SourcebuildProject#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#latest SourcebuildProject#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#tag SourcebuildProject#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#use SourcebuildProject#use}
  */
  readonly use?: boolean | cdktf.IResolvable;
}

export function sourcebuildProjectBuildImageUploadToTerraform(struct?: SourcebuildProjectBuildImageUploadOutputReference | SourcebuildProjectBuildImageUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_registry_name: cdktf.stringToTerraform(struct!.containerRegistryName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    latest: cdktf.booleanToTerraform(struct!.latest),
    tag: cdktf.stringToTerraform(struct!.tag),
    use: cdktf.booleanToTerraform(struct!.use),
  }
}


export function sourcebuildProjectBuildImageUploadToHclTerraform(struct?: SourcebuildProjectBuildImageUploadOutputReference | SourcebuildProjectBuildImageUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_registry_name: {
      value: cdktf.stringToHclTerraform(struct!.containerRegistryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.booleanToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.booleanToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectBuildImageUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectBuildImageUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistryName = this._containerRegistryName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectBuildImageUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerRegistryName = undefined;
      this._imageName = undefined;
      this._latest = undefined;
      this._tag = undefined;
      this._use = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerRegistryName = value.containerRegistryName;
      this._imageName = value.imageName;
      this._latest = value.latest;
      this._tag = value.tag;
      this._use = value.use;
    }
  }

  // container_registry_name - computed: false, optional: true, required: false
  private _containerRegistryName?: string; 
  public get containerRegistryName() {
    return this.getStringAttribute('container_registry_name');
  }
  public set containerRegistryName(value: string) {
    this._containerRegistryName = value;
  }
  public resetContainerRegistryName() {
    this._containerRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryNameInput() {
    return this._containerRegistryName;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // use - computed: false, optional: true, required: false
  private _use?: boolean | cdktf.IResolvable; 
  public get use() {
    return this.getBooleanAttribute('use');
  }
  public set use(value: boolean | cdktf.IResolvable) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}
export interface SourcebuildProjectEnvCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function sourcebuildProjectEnvComputeToTerraform(struct?: SourcebuildProjectEnvComputeOutputReference | SourcebuildProjectEnvCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function sourcebuildProjectEnvComputeToHclTerraform(struct?: SourcebuildProjectEnvComputeOutputReference | SourcebuildProjectEnvCompute): any {
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

export class SourcebuildProjectEnvComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mem - computed: true, optional: false, required: false
  public get mem() {
    return this.getNumberAttribute('mem');
  }
}
export interface SourcebuildProjectEnvDockerEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#use SourcebuildProject#use}
  */
  readonly use?: boolean | cdktf.IResolvable;
}

export function sourcebuildProjectEnvDockerEngineToTerraform(struct?: SourcebuildProjectEnvDockerEngineOutputReference | SourcebuildProjectEnvDockerEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    use: cdktf.booleanToTerraform(struct!.use),
  }
}


export function sourcebuildProjectEnvDockerEngineToHclTerraform(struct?: SourcebuildProjectEnvDockerEngineOutputReference | SourcebuildProjectEnvDockerEngine): any {
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
    use: {
      value: cdktf.booleanToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectEnvDockerEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvDockerEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvDockerEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._use = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._use = value.use;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // use - computed: false, optional: true, required: false
  private _use?: boolean | cdktf.IResolvable; 
  public get use() {
    return this.getBooleanAttribute('use');
  }
  public set use(value: boolean | cdktf.IResolvable) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}
export interface SourcebuildProjectEnvEnvVar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#key SourcebuildProject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#value SourcebuildProject#value}
  */
  readonly value: string;
}

export function sourcebuildProjectEnvEnvVarToTerraform(struct?: SourcebuildProjectEnvEnvVar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourcebuildProjectEnvEnvVarToHclTerraform(struct?: SourcebuildProjectEnvEnvVar | cdktf.IResolvable): any {
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

export class SourcebuildProjectEnvEnvVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcebuildProjectEnvEnvVar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvEnvVar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
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

export class SourcebuildProjectEnvEnvVarList extends cdktf.ComplexList {
  public internalValue? : SourcebuildProjectEnvEnvVar[] | cdktf.IResolvable

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
  public get(index: number): SourcebuildProjectEnvEnvVarOutputReference {
    return new SourcebuildProjectEnvEnvVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcebuildProjectEnvPlatformConfigOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function sourcebuildProjectEnvPlatformConfigOsToTerraform(struct?: SourcebuildProjectEnvPlatformConfigOsOutputReference | SourcebuildProjectEnvPlatformConfigOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function sourcebuildProjectEnvPlatformConfigOsToHclTerraform(struct?: SourcebuildProjectEnvPlatformConfigOsOutputReference | SourcebuildProjectEnvPlatformConfigOs): any {
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

export class SourcebuildProjectEnvPlatformConfigOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvPlatformConfigOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvPlatformConfigOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // archi - computed: true, optional: false, required: false
  public get archi() {
    return this.getStringAttribute('archi');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface SourcebuildProjectEnvPlatformConfigRuntimeVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function sourcebuildProjectEnvPlatformConfigRuntimeVersionToTerraform(struct?: SourcebuildProjectEnvPlatformConfigRuntimeVersionOutputReference | SourcebuildProjectEnvPlatformConfigRuntimeVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function sourcebuildProjectEnvPlatformConfigRuntimeVersionToHclTerraform(struct?: SourcebuildProjectEnvPlatformConfigRuntimeVersionOutputReference | SourcebuildProjectEnvPlatformConfigRuntimeVersion): any {
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

export class SourcebuildProjectEnvPlatformConfigRuntimeVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvPlatformConfigRuntimeVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvPlatformConfigRuntimeVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SourcebuildProjectEnvPlatformConfigRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#id SourcebuildProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#version SourcebuildProject#version}
  */
  readonly version: SourcebuildProjectEnvPlatformConfigRuntimeVersion;
}

export function sourcebuildProjectEnvPlatformConfigRuntimeToTerraform(struct?: SourcebuildProjectEnvPlatformConfigRuntimeOutputReference | SourcebuildProjectEnvPlatformConfigRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    version: sourcebuildProjectEnvPlatformConfigRuntimeVersionToTerraform(struct!.version),
  }
}


export function sourcebuildProjectEnvPlatformConfigRuntimeToHclTerraform(struct?: SourcebuildProjectEnvPlatformConfigRuntimeOutputReference | SourcebuildProjectEnvPlatformConfigRuntime): any {
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
    version: {
      value: sourcebuildProjectEnvPlatformConfigRuntimeVersionToHclTerraform(struct!.version),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvPlatformConfigRuntimeVersionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectEnvPlatformConfigRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvPlatformConfigRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvPlatformConfigRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._version.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._version.internalValue = value.version;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: false, optional: false, required: true
  private _version = new SourcebuildProjectEnvPlatformConfigRuntimeVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: SourcebuildProjectEnvPlatformConfigRuntimeVersion) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}
export interface SourcebuildProjectEnvPlatformConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#image SourcebuildProject#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#registry SourcebuildProject#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#tag SourcebuildProject#tag}
  */
  readonly tag?: string;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#os SourcebuildProject#os}
  */
  readonly os?: SourcebuildProjectEnvPlatformConfigOs;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#runtime SourcebuildProject#runtime}
  */
  readonly runtime?: SourcebuildProjectEnvPlatformConfigRuntime;
}

export function sourcebuildProjectEnvPlatformConfigToTerraform(struct?: SourcebuildProjectEnvPlatformConfigOutputReference | SourcebuildProjectEnvPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    registry: cdktf.stringToTerraform(struct!.registry),
    tag: cdktf.stringToTerraform(struct!.tag),
    os: sourcebuildProjectEnvPlatformConfigOsToTerraform(struct!.os),
    runtime: sourcebuildProjectEnvPlatformConfigRuntimeToTerraform(struct!.runtime),
  }
}


export function sourcebuildProjectEnvPlatformConfigToHclTerraform(struct?: SourcebuildProjectEnvPlatformConfigOutputReference | SourcebuildProjectEnvPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: sourcebuildProjectEnvPlatformConfigOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvPlatformConfigOsList",
    },
    runtime: {
      value: sourcebuildProjectEnvPlatformConfigRuntimeToHclTerraform(struct!.runtime),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvPlatformConfigRuntimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectEnvPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._registry = undefined;
      this._tag = undefined;
      this._os.internalValue = undefined;
      this._runtime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._registry = value.registry;
      this._tag = value.tag;
      this._os.internalValue = value.os;
      this._runtime.internalValue = value.runtime;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // os - computed: false, optional: true, required: false
  private _os = new SourcebuildProjectEnvPlatformConfigOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: SourcebuildProjectEnvPlatformConfigOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new SourcebuildProjectEnvPlatformConfigRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: SourcebuildProjectEnvPlatformConfigRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }
}
export interface SourcebuildProjectEnvPlatform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#type SourcebuildProject#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#config SourcebuildProject#config}
  */
  readonly config: SourcebuildProjectEnvPlatformConfig;
}

export function sourcebuildProjectEnvPlatformToTerraform(struct?: SourcebuildProjectEnvPlatformOutputReference | SourcebuildProjectEnvPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: sourcebuildProjectEnvPlatformConfigToTerraform(struct!.config),
  }
}


export function sourcebuildProjectEnvPlatformToHclTerraform(struct?: SourcebuildProjectEnvPlatformOutputReference | SourcebuildProjectEnvPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: sourcebuildProjectEnvPlatformConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvPlatformConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectEnvPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnvPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnvPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
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

  // config - computed: false, optional: false, required: true
  private _config = new SourcebuildProjectEnvPlatformConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SourcebuildProjectEnvPlatformConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface SourcebuildProjectEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#timeout SourcebuildProject#timeout}
  */
  readonly timeout?: number;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#compute SourcebuildProject#compute}
  */
  readonly compute: SourcebuildProjectEnvCompute;
  /**
  * docker_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#docker_engine SourcebuildProject#docker_engine}
  */
  readonly dockerEngine?: SourcebuildProjectEnvDockerEngine;
  /**
  * env_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#env_var SourcebuildProject#env_var}
  */
  readonly envVar?: SourcebuildProjectEnvEnvVar[] | cdktf.IResolvable;
  /**
  * platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#platform SourcebuildProject#platform}
  */
  readonly platform: SourcebuildProjectEnvPlatform;
}

export function sourcebuildProjectEnvToTerraform(struct?: SourcebuildProjectEnvOutputReference | SourcebuildProjectEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    compute: sourcebuildProjectEnvComputeToTerraform(struct!.compute),
    docker_engine: sourcebuildProjectEnvDockerEngineToTerraform(struct!.dockerEngine),
    env_var: cdktf.listMapper(sourcebuildProjectEnvEnvVarToTerraform, true)(struct!.envVar),
    platform: sourcebuildProjectEnvPlatformToTerraform(struct!.platform),
  }
}


export function sourcebuildProjectEnvToHclTerraform(struct?: SourcebuildProjectEnvOutputReference | SourcebuildProjectEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute: {
      value: sourcebuildProjectEnvComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvComputeList",
    },
    docker_engine: {
      value: sourcebuildProjectEnvDockerEngineToHclTerraform(struct!.dockerEngine),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvDockerEngineList",
    },
    env_var: {
      value: cdktf.listMapperHcl(sourcebuildProjectEnvEnvVarToHclTerraform, true)(struct!.envVar),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvEnvVarList",
    },
    platform: {
      value: sourcebuildProjectEnvPlatformToHclTerraform(struct!.platform),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectEnvPlatformList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._dockerEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerEngine = this._dockerEngine?.internalValue;
    }
    if (this._envVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVar = this._envVar?.internalValue;
    }
    if (this._platform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
      this._compute.internalValue = undefined;
      this._dockerEngine.internalValue = undefined;
      this._envVar.internalValue = undefined;
      this._platform.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
      this._compute.internalValue = value.compute;
      this._dockerEngine.internalValue = value.dockerEngine;
      this._envVar.internalValue = value.envVar;
      this._platform.internalValue = value.platform;
    }
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new SourcebuildProjectEnvComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: SourcebuildProjectEnvCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // docker_engine - computed: false, optional: true, required: false
  private _dockerEngine = new SourcebuildProjectEnvDockerEngineOutputReference(this, "docker_engine");
  public get dockerEngine() {
    return this._dockerEngine;
  }
  public putDockerEngine(value: SourcebuildProjectEnvDockerEngine) {
    this._dockerEngine.internalValue = value;
  }
  public resetDockerEngine() {
    this._dockerEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerEngineInput() {
    return this._dockerEngine.internalValue;
  }

  // env_var - computed: false, optional: true, required: false
  private _envVar = new SourcebuildProjectEnvEnvVarList(this, "env_var", false);
  public get envVar() {
    return this._envVar;
  }
  public putEnvVar(value: SourcebuildProjectEnvEnvVar[] | cdktf.IResolvable) {
    this._envVar.internalValue = value;
  }
  public resetEnvVar() {
    this._envVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarInput() {
    return this._envVar.internalValue;
  }

  // platform - computed: false, optional: false, required: true
  private _platform = new SourcebuildProjectEnvPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: SourcebuildProjectEnvPlatform) {
    this._platform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }
}
export interface SourcebuildProjectLinked {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#cloud_log_analytics SourcebuildProject#cloud_log_analytics}
  */
  readonly cloudLogAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#file_safer SourcebuildProject#file_safer}
  */
  readonly fileSafer?: boolean | cdktf.IResolvable;
}

export function sourcebuildProjectLinkedToTerraform(struct?: SourcebuildProjectLinkedOutputReference | SourcebuildProjectLinked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_log_analytics: cdktf.booleanToTerraform(struct!.cloudLogAnalytics),
    file_safer: cdktf.booleanToTerraform(struct!.fileSafer),
  }
}


export function sourcebuildProjectLinkedToHclTerraform(struct?: SourcebuildProjectLinkedOutputReference | SourcebuildProjectLinked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_log_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.cloudLogAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_safer: {
      value: cdktf.booleanToHclTerraform(struct!.fileSafer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectLinkedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectLinked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudLogAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLogAnalytics = this._cloudLogAnalytics;
    }
    if (this._fileSafer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSafer = this._fileSafer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectLinked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudLogAnalytics = undefined;
      this._fileSafer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudLogAnalytics = value.cloudLogAnalytics;
      this._fileSafer = value.fileSafer;
    }
  }

  // cloud_log_analytics - computed: false, optional: true, required: false
  private _cloudLogAnalytics?: boolean | cdktf.IResolvable; 
  public get cloudLogAnalytics() {
    return this.getBooleanAttribute('cloud_log_analytics');
  }
  public set cloudLogAnalytics(value: boolean | cdktf.IResolvable) {
    this._cloudLogAnalytics = value;
  }
  public resetCloudLogAnalytics() {
    this._cloudLogAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLogAnalyticsInput() {
    return this._cloudLogAnalytics;
  }

  // file_safer - computed: false, optional: true, required: false
  private _fileSafer?: boolean | cdktf.IResolvable; 
  public get fileSafer() {
    return this.getBooleanAttribute('file_safer');
  }
  public set fileSafer(value: boolean | cdktf.IResolvable) {
    this._fileSafer = value;
  }
  public resetFileSafer() {
    this._fileSafer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSaferInput() {
    return this._fileSafer;
  }
}
export interface SourcebuildProjectSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#branch SourcebuildProject#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#repository_name SourcebuildProject#repository_name}
  */
  readonly repositoryName: string;
}

export function sourcebuildProjectSourceConfigToTerraform(struct?: SourcebuildProjectSourceConfigOutputReference | SourcebuildProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


export function sourcebuildProjectSourceConfigToHclTerraform(struct?: SourcebuildProjectSourceConfigOutputReference | SourcebuildProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._repositoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._repositoryName = value.repositoryName;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface SourcebuildProjectSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#type SourcebuildProject#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#config SourcebuildProject#config}
  */
  readonly config: SourcebuildProjectSourceConfig;
}

export function sourcebuildProjectSourceToTerraform(struct?: SourcebuildProjectSourceOutputReference | SourcebuildProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: sourcebuildProjectSourceConfigToTerraform(struct!.config),
  }
}


export function sourcebuildProjectSourceToHclTerraform(struct?: SourcebuildProjectSourceOutputReference | SourcebuildProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: sourcebuildProjectSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "SourcebuildProjectSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourcebuildProjectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
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

  // config - computed: false, optional: false, required: true
  private _config = new SourcebuildProjectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: SourcebuildProjectSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface SourcebuildProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#create SourcebuildProject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#delete SourcebuildProject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#read SourcebuildProject#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#update SourcebuildProject#update}
  */
  readonly update?: string;
}

export function sourcebuildProjectTimeoutsToTerraform(struct?: SourcebuildProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sourcebuildProjectTimeoutsToHclTerraform(struct?: SourcebuildProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcebuildProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcebuildProjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcebuildProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project ncloud_sourcebuild_project}
*/
export class SourcebuildProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_sourcebuild_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourcebuildProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourcebuildProject to import
  * @param importFromId The id of the existing SourcebuildProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourcebuildProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_sourcebuild_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/sourcebuild_project ncloud_sourcebuild_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcebuildProjectConfig
  */
  public constructor(scope: Construct, id: string, config: SourcebuildProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_sourcebuild_project',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
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
    this._id = config.id;
    this._name = config.name;
    this._artifact.internalValue = config.artifact;
    this._buildCommand.internalValue = config.buildCommand;
    this._buildImageUpload.internalValue = config.buildImageUpload;
    this._env.internalValue = config.env;
    this._linked.internalValue = config.linked;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  private _created = new SourcebuildProjectCreatedList(this, "created", false);
  public get created() {
    return this._created;
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

  // last_build - computed: true, optional: false, required: false
  private _lastBuild = new SourcebuildProjectLastBuildList(this, "last_build", false);
  public get lastBuild() {
    return this._lastBuild;
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

  // project_no - computed: true, optional: false, required: false
  public get projectNo() {
    return this.getNumberAttribute('project_no');
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new SourcebuildProjectArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: SourcebuildProjectArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand = new SourcebuildProjectBuildCommandOutputReference(this, "build_command");
  public get buildCommand() {
    return this._buildCommand;
  }
  public putBuildCommand(value: SourcebuildProjectBuildCommand) {
    this._buildCommand.internalValue = value;
  }
  public resetBuildCommand() {
    this._buildCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand.internalValue;
  }

  // build_image_upload - computed: false, optional: true, required: false
  private _buildImageUpload = new SourcebuildProjectBuildImageUploadOutputReference(this, "build_image_upload");
  public get buildImageUpload() {
    return this._buildImageUpload;
  }
  public putBuildImageUpload(value: SourcebuildProjectBuildImageUpload) {
    this._buildImageUpload.internalValue = value;
  }
  public resetBuildImageUpload() {
    this._buildImageUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageUploadInput() {
    return this._buildImageUpload.internalValue;
  }

  // env - computed: false, optional: false, required: true
  private _env = new SourcebuildProjectEnvOutputReference(this, "env");
  public get env() {
    return this._env;
  }
  public putEnv(value: SourcebuildProjectEnv) {
    this._env.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // linked - computed: false, optional: true, required: false
  private _linked = new SourcebuildProjectLinkedOutputReference(this, "linked");
  public get linked() {
    return this._linked;
  }
  public putLinked(value: SourcebuildProjectLinked) {
    this._linked.internalValue = value;
  }
  public resetLinked() {
    this._linked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInput() {
    return this._linked.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new SourcebuildProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SourcebuildProjectSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SourcebuildProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SourcebuildProjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      artifact: sourcebuildProjectArtifactToTerraform(this._artifact.internalValue),
      build_command: sourcebuildProjectBuildCommandToTerraform(this._buildCommand.internalValue),
      build_image_upload: sourcebuildProjectBuildImageUploadToTerraform(this._buildImageUpload.internalValue),
      env: sourcebuildProjectEnvToTerraform(this._env.internalValue),
      linked: sourcebuildProjectLinkedToTerraform(this._linked.internalValue),
      source: sourcebuildProjectSourceToTerraform(this._source.internalValue),
      timeouts: sourcebuildProjectTimeoutsToTerraform(this._timeouts.internalValue),
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
      artifact: {
        value: sourcebuildProjectArtifactToHclTerraform(this._artifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectArtifactList",
      },
      build_command: {
        value: sourcebuildProjectBuildCommandToHclTerraform(this._buildCommand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectBuildCommandList",
      },
      build_image_upload: {
        value: sourcebuildProjectBuildImageUploadToHclTerraform(this._buildImageUpload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectBuildImageUploadList",
      },
      env: {
        value: sourcebuildProjectEnvToHclTerraform(this._env.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectEnvList",
      },
      linked: {
        value: sourcebuildProjectLinkedToHclTerraform(this._linked.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectLinkedList",
      },
      source: {
        value: sourcebuildProjectSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourcebuildProjectSourceList",
      },
      timeouts: {
        value: sourcebuildProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourcebuildProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
