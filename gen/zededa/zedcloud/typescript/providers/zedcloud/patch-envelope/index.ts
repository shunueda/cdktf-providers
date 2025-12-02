// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PatchEnvelopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to represent whether device needs to present it to app instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#action PatchEnvelope#action}
  */
  readonly action: string;
  /**
  * Detailed description of the patch envelope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#description PatchEnvelope#description}
  */
  readonly description?: string;
  /**
  * number of devices referencing this patch envelope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#device_count PatchEnvelope#device_count}
  */
  readonly deviceCount?: number;
  /**
  * User defined name of the patch envelope, unique across the enterprise. Once patch envelope is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#name PatchEnvelope#name}
  */
  readonly name: string;
  /**
  * project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#project_id PatchEnvelope#project_id}
  */
  readonly projectId: string;
  /**
  * project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#project_name PatchEnvelope#project_name}
  */
  readonly projectName: string;
  /**
  * User defined title of the patch envelope. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#title PatchEnvelope#title}
  */
  readonly title: string;
  /**
  * User defined version for the given patch envelope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#user_defined_version PatchEnvelope#user_defined_version}
  */
  readonly userDefinedVersion?: string;
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#artifacts PatchEnvelope#artifacts}
  */
  readonly artifacts: PatchEnvelopeArtifacts[] | cdktf.IResolvable;
}
export interface PatchEnvelopeRevision {
}

export function patchEnvelopeRevisionToTerraform(struct?: PatchEnvelopeRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function patchEnvelopeRevisionToHclTerraform(struct?: PatchEnvelopeRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PatchEnvelopeRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PatchEnvelopeRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PatchEnvelopeRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class PatchEnvelopeRevisionList extends cdktf.ComplexList {

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
  public get(index: number): PatchEnvelopeRevisionOutputReference {
    return new PatchEnvelopeRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PatchEnvelopeArtifactsBase64Artifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#base64_data PatchEnvelope#base64_data}
  */
  readonly base64Data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#base64_meta_data PatchEnvelope#base64_meta_data}
  */
  readonly base64MetaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#file_name_to_use PatchEnvelope#file_name_to_use}
  */
  readonly fileNameToUse: string;
}

export function patchEnvelopeArtifactsBase64ArtifactToTerraform(struct?: PatchEnvelopeArtifactsBase64Artifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_data: cdktf.stringToTerraform(struct!.base64Data),
    base64_meta_data: cdktf.stringToTerraform(struct!.base64MetaData),
    file_name_to_use: cdktf.stringToTerraform(struct!.fileNameToUse),
  }
}


export function patchEnvelopeArtifactsBase64ArtifactToHclTerraform(struct?: PatchEnvelopeArtifactsBase64Artifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_data: {
      value: cdktf.stringToHclTerraform(struct!.base64Data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_meta_data: {
      value: cdktf.stringToHclTerraform(struct!.base64MetaData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name_to_use: {
      value: cdktf.stringToHclTerraform(struct!.fileNameToUse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PatchEnvelopeArtifactsBase64ArtifactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PatchEnvelopeArtifactsBase64Artifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Data !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Data = this._base64Data;
    }
    if (this._base64MetaData !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64MetaData = this._base64MetaData;
    }
    if (this._fileNameToUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameToUse = this._fileNameToUse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PatchEnvelopeArtifactsBase64Artifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base64Data = undefined;
      this._base64MetaData = undefined;
      this._fileNameToUse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base64Data = value.base64Data;
      this._base64MetaData = value.base64MetaData;
      this._fileNameToUse = value.fileNameToUse;
    }
  }

  // base64_data - computed: false, optional: false, required: true
  private _base64Data?: string; 
  public get base64Data() {
    return this.getStringAttribute('base64_data');
  }
  public set base64Data(value: string) {
    this._base64Data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64DataInput() {
    return this._base64Data;
  }

  // base64_meta_data - computed: false, optional: true, required: false
  private _base64MetaData?: string; 
  public get base64MetaData() {
    return this.getStringAttribute('base64_meta_data');
  }
  public set base64MetaData(value: string) {
    this._base64MetaData = value;
  }
  public resetBase64MetaData() {
    this._base64MetaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64MetaDataInput() {
    return this._base64MetaData;
  }

  // file_name_to_use - computed: false, optional: false, required: true
  private _fileNameToUse?: string; 
  public get fileNameToUse() {
    return this.getStringAttribute('file_name_to_use');
  }
  public set fileNameToUse(value: string) {
    this._fileNameToUse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameToUseInput() {
    return this._fileNameToUse;
  }
}

export class PatchEnvelopeArtifactsBase64ArtifactList extends cdktf.ComplexList {
  public internalValue? : PatchEnvelopeArtifactsBase64Artifact[] | cdktf.IResolvable

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
  public get(index: number): PatchEnvelopeArtifactsBase64ArtifactOutputReference {
    return new PatchEnvelopeArtifactsBase64ArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PatchEnvelopeArtifactsBinaryArtifact {
  /**
  * Eve shall use the image name when fileNameToUse is empty
  * optional - this can be image type or size etc encoded into a single string.
  * only the application instance agents will interpret this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#blob_meta_data PatchEnvelope#blob_meta_data}
  */
  readonly blobMetaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#file_name_to_use PatchEnvelope#file_name_to_use}
  */
  readonly fileNameToUse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#image_id PatchEnvelope#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#image_name PatchEnvelope#image_name}
  */
  readonly imageName: string;
}

export function patchEnvelopeArtifactsBinaryArtifactToTerraform(struct?: PatchEnvelopeArtifactsBinaryArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_meta_data: cdktf.stringToTerraform(struct!.blobMetaData),
    file_name_to_use: cdktf.stringToTerraform(struct!.fileNameToUse),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
  }
}


export function patchEnvelopeArtifactsBinaryArtifactToHclTerraform(struct?: PatchEnvelopeArtifactsBinaryArtifact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_meta_data: {
      value: cdktf.stringToHclTerraform(struct!.blobMetaData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name_to_use: {
      value: cdktf.stringToHclTerraform(struct!.fileNameToUse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PatchEnvelopeArtifactsBinaryArtifactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PatchEnvelopeArtifactsBinaryArtifact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobMetaData !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobMetaData = this._blobMetaData;
    }
    if (this._fileNameToUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameToUse = this._fileNameToUse;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PatchEnvelopeArtifactsBinaryArtifact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blobMetaData = undefined;
      this._fileNameToUse = undefined;
      this._imageId = undefined;
      this._imageName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blobMetaData = value.blobMetaData;
      this._fileNameToUse = value.fileNameToUse;
      this._imageId = value.imageId;
      this._imageName = value.imageName;
    }
  }

  // blob_meta_data - computed: false, optional: true, required: false
  private _blobMetaData?: string; 
  public get blobMetaData() {
    return this.getStringAttribute('blob_meta_data');
  }
  public set blobMetaData(value: string) {
    this._blobMetaData = value;
  }
  public resetBlobMetaData() {
    this._blobMetaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobMetaDataInput() {
    return this._blobMetaData;
  }

  // file_name_to_use - computed: false, optional: false, required: true
  private _fileNameToUse?: string; 
  public get fileNameToUse() {
    return this.getStringAttribute('file_name_to_use');
  }
  public set fileNameToUse(value: string) {
    this._fileNameToUse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameToUseInput() {
    return this._fileNameToUse;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }
}

export class PatchEnvelopeArtifactsBinaryArtifactList extends cdktf.ComplexList {
  public internalValue? : PatchEnvelopeArtifactsBinaryArtifact[] | cdktf.IResolvable

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
  public get(index: number): PatchEnvelopeArtifactsBinaryArtifactOutputReference {
    return new PatchEnvelopeArtifactsBinaryArtifactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PatchEnvelopeArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#artifact_meta_data PatchEnvelope#artifact_meta_data}
  */
  readonly artifactMetaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#format PatchEnvelope#format}
  */
  readonly format?: string;
  /**
  * base64_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#base64_artifact PatchEnvelope#base64_artifact}
  */
  readonly base64Artifact?: PatchEnvelopeArtifactsBase64Artifact[] | cdktf.IResolvable;
  /**
  * binary_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#binary_artifact PatchEnvelope#binary_artifact}
  */
  readonly binaryArtifact?: PatchEnvelopeArtifactsBinaryArtifact[] | cdktf.IResolvable;
}

export function patchEnvelopeArtifactsToTerraform(struct?: PatchEnvelopeArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_meta_data: cdktf.stringToTerraform(struct!.artifactMetaData),
    format: cdktf.stringToTerraform(struct!.format),
    base64_artifact: cdktf.listMapper(patchEnvelopeArtifactsBase64ArtifactToTerraform, true)(struct!.base64Artifact),
    binary_artifact: cdktf.listMapper(patchEnvelopeArtifactsBinaryArtifactToTerraform, true)(struct!.binaryArtifact),
  }
}


export function patchEnvelopeArtifactsToHclTerraform(struct?: PatchEnvelopeArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_meta_data: {
      value: cdktf.stringToHclTerraform(struct!.artifactMetaData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_artifact: {
      value: cdktf.listMapperHcl(patchEnvelopeArtifactsBase64ArtifactToHclTerraform, true)(struct!.base64Artifact),
      isBlock: true,
      type: "list",
      storageClassType: "PatchEnvelopeArtifactsBase64ArtifactList",
    },
    binary_artifact: {
      value: cdktf.listMapperHcl(patchEnvelopeArtifactsBinaryArtifactToHclTerraform, true)(struct!.binaryArtifact),
      isBlock: true,
      type: "list",
      storageClassType: "PatchEnvelopeArtifactsBinaryArtifactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PatchEnvelopeArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PatchEnvelopeArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactMetaData !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactMetaData = this._artifactMetaData;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._base64Artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Artifact = this._base64Artifact?.internalValue;
    }
    if (this._binaryArtifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryArtifact = this._binaryArtifact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PatchEnvelopeArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactMetaData = undefined;
      this._format = undefined;
      this._base64Artifact.internalValue = undefined;
      this._binaryArtifact.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactMetaData = value.artifactMetaData;
      this._format = value.format;
      this._base64Artifact.internalValue = value.base64Artifact;
      this._binaryArtifact.internalValue = value.binaryArtifact;
    }
  }

  // artifact_meta_data - computed: false, optional: true, required: false
  private _artifactMetaData?: string; 
  public get artifactMetaData() {
    return this.getStringAttribute('artifact_meta_data');
  }
  public set artifactMetaData(value: string) {
    this._artifactMetaData = value;
  }
  public resetArtifactMetaData() {
    this._artifactMetaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactMetaDataInput() {
    return this._artifactMetaData;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // base64_artifact - computed: false, optional: true, required: false
  private _base64Artifact = new PatchEnvelopeArtifactsBase64ArtifactList(this, "base64_artifact", false);
  public get base64Artifact() {
    return this._base64Artifact;
  }
  public putBase64Artifact(value: PatchEnvelopeArtifactsBase64Artifact[] | cdktf.IResolvable) {
    this._base64Artifact.internalValue = value;
  }
  public resetBase64Artifact() {
    this._base64Artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64ArtifactInput() {
    return this._base64Artifact.internalValue;
  }

  // binary_artifact - computed: false, optional: true, required: false
  private _binaryArtifact = new PatchEnvelopeArtifactsBinaryArtifactList(this, "binary_artifact", false);
  public get binaryArtifact() {
    return this._binaryArtifact;
  }
  public putBinaryArtifact(value: PatchEnvelopeArtifactsBinaryArtifact[] | cdktf.IResolvable) {
    this._binaryArtifact.internalValue = value;
  }
  public resetBinaryArtifact() {
    this._binaryArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryArtifactInput() {
    return this._binaryArtifact.internalValue;
  }
}

export class PatchEnvelopeArtifactsList extends cdktf.ComplexList {
  public internalValue? : PatchEnvelopeArtifacts[] | cdktf.IResolvable

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
  public get(index: number): PatchEnvelopeArtifactsOutputReference {
    return new PatchEnvelopeArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope zedcloud_patch_envelope}
*/
export class PatchEnvelope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_patch_envelope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PatchEnvelope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PatchEnvelope to import
  * @param importFromId The id of the existing PatchEnvelope that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PatchEnvelope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_patch_envelope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/patch_envelope zedcloud_patch_envelope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PatchEnvelopeConfig
  */
  public constructor(scope: Construct, id: string, config: PatchEnvelopeConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_patch_envelope',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._deviceCount = config.deviceCount;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._title = config.title;
    this._userDefinedVersion = config.userDefinedVersion;
    this._artifacts.internalValue = config.artifacts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // device_count - computed: false, optional: true, required: false
  private _deviceCount?: number; 
  public get deviceCount() {
    return this.getNumberAttribute('device_count');
  }
  public set deviceCount(value: number) {
    this._deviceCount = value;
  }
  public resetDeviceCount() {
    this._deviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCountInput() {
    return this._deviceCount;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new PatchEnvelopeRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_defined_version - computed: false, optional: true, required: false
  private _userDefinedVersion?: string; 
  public get userDefinedVersion() {
    return this.getStringAttribute('user_defined_version');
  }
  public set userDefinedVersion(value: string) {
    this._userDefinedVersion = value;
  }
  public resetUserDefinedVersion() {
    this._userDefinedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedVersionInput() {
    return this._userDefinedVersion;
  }

  // artifacts - computed: false, optional: false, required: true
  private _artifacts = new PatchEnvelopeArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: PatchEnvelopeArtifacts[] | cdktf.IResolvable) {
    this._artifacts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      device_count: cdktf.numberToTerraform(this._deviceCount),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      title: cdktf.stringToTerraform(this._title),
      user_defined_version: cdktf.stringToTerraform(this._userDefinedVersion),
      artifacts: cdktf.listMapper(patchEnvelopeArtifactsToTerraform, true)(this._artifacts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_count: {
        value: cdktf.numberToHclTerraform(this._deviceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_version: {
        value: cdktf.stringToHclTerraform(this._userDefinedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifacts: {
        value: cdktf.listMapperHcl(patchEnvelopeArtifactsToHclTerraform, true)(this._artifacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PatchEnvelopeArtifactsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
