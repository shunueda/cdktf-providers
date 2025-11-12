// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotRestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies properties for a clone operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#clone_params SnapshotRestore#clone_params}
  */
  readonly cloneParams?: SnapshotRestoreCloneParams;
  /**
  * Specifies properties for a copy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#copy_params SnapshotRestore#copy_params}
  */
  readonly copyParams?: SnapshotRestoreCopyParams;
  /**
  * Specifies properties for a snapshot revert job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#snaprevert_params SnapshotRestore#snaprevert_params}
  */
  readonly snaprevertParams?: SnapshotRestoreSnaprevertParams;
}
export interface SnapshotRestoreCloneParams {
  /**
  * Destination of the snapshot, e.g. ifs/dest/test.txt .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#destination SnapshotRestore#destination}
  */
  readonly destination: string;
  /**
  * Whether or not to overwrite the destination if it already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#overwrite SnapshotRestore#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#snapshot_id SnapshotRestore#snapshot_id}
  */
  readonly snapshotId: number;
  /**
  * Source of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#source SnapshotRestore#source}
  */
  readonly source: string;
}

export function snapshotRestoreCloneParamsToTerraform(struct?: SnapshotRestoreCloneParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    snapshot_id: cdktf.numberToTerraform(struct!.snapshotId),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function snapshotRestoreCloneParamsToHclTerraform(struct?: SnapshotRestoreCloneParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_id: {
      value: cdktf.numberToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRestoreCloneParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRestoreCloneParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRestoreCloneParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._snapshotId = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._snapshotId = value.snapshotId;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: number; 
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }
  public set snapshotId(value: number) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface SnapshotRestoreCopyParamsDirectory {
  /**
  * Whether or not to continue if the destination already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#continue SnapshotRestore#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * Destination of the snapshot, e.g. ifs/dest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#destination SnapshotRestore#destination}
  */
  readonly destination: string;
  /**
  * Whether or not to merge the destination if it already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#merge SnapshotRestore#merge}
  */
  readonly merge?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to overwrite the destination if it already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#overwrite SnapshotRestore#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Source of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#source SnapshotRestore#source}
  */
  readonly source: string;
}

export function snapshotRestoreCopyParamsDirectoryToTerraform(struct?: SnapshotRestoreCopyParamsDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue: cdktf.booleanToTerraform(struct!.continue),
    destination: cdktf.stringToTerraform(struct!.destination),
    merge: cdktf.booleanToTerraform(struct!.merge),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function snapshotRestoreCopyParamsDirectoryToHclTerraform(struct?: SnapshotRestoreCopyParamsDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge: {
      value: cdktf.booleanToHclTerraform(struct!.merge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRestoreCopyParamsDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRestoreCopyParamsDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._merge !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRestoreCopyParamsDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continue = undefined;
      this._destination = undefined;
      this._merge = undefined;
      this._overwrite = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continue = value.continue;
      this._destination = value.destination;
      this._merge = value.merge;
      this._overwrite = value.overwrite;
      this._source = value.source;
    }
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // merge - computed: false, optional: true, required: false
  private _merge?: boolean | cdktf.IResolvable; 
  public get merge() {
    return this.getBooleanAttribute('merge');
  }
  public set merge(value: boolean | cdktf.IResolvable) {
    this._merge = value;
  }
  public resetMerge() {
    this._merge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface SnapshotRestoreCopyParamsFile {
  /**
  * Destination of the snapshot, e.g. ifs/dest/test.txt .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#destination SnapshotRestore#destination}
  */
  readonly destination: string;
  /**
  * Whether or not to overwrite the destination if it already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#overwrite SnapshotRestore#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Source of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#source SnapshotRestore#source}
  */
  readonly source: string;
}

export function snapshotRestoreCopyParamsFileToTerraform(struct?: SnapshotRestoreCopyParamsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function snapshotRestoreCopyParamsFileToHclTerraform(struct?: SnapshotRestoreCopyParamsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRestoreCopyParamsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRestoreCopyParamsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRestoreCopyParamsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface SnapshotRestoreCopyParams {
  /**
  * Specifies properties for copying directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#directory SnapshotRestore#directory}
  */
  readonly directory?: SnapshotRestoreCopyParamsDirectory;
  /**
  * Specifies properties for copying file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#file SnapshotRestore#file}
  */
  readonly file?: SnapshotRestoreCopyParamsFile;
}

export function snapshotRestoreCopyParamsToTerraform(struct?: SnapshotRestoreCopyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: snapshotRestoreCopyParamsDirectoryToTerraform(struct!.directory),
    file: snapshotRestoreCopyParamsFileToTerraform(struct!.file),
  }
}


export function snapshotRestoreCopyParamsToHclTerraform(struct?: SnapshotRestoreCopyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: snapshotRestoreCopyParamsDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotRestoreCopyParamsDirectory",
    },
    file: {
      value: snapshotRestoreCopyParamsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapshotRestoreCopyParamsFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRestoreCopyParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRestoreCopyParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRestoreCopyParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory.internalValue = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory.internalValue = value.directory;
      this._file.internalValue = value.file;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new SnapshotRestoreCopyParamsDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: SnapshotRestoreCopyParamsDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SnapshotRestoreCopyParamsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SnapshotRestoreCopyParamsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface SnapshotRestoreSnaprevertParams {
  /**
  * Whether or not to queue the job if one of the same type is already running or queued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#allow_dup SnapshotRestore#allow_dup}
  */
  readonly allowDup?: boolean | cdktf.IResolvable;
  /**
  * Snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#snapshot_id SnapshotRestore#snapshot_id}
  */
  readonly snapshotId: number;
}

export function snapshotRestoreSnaprevertParamsToTerraform(struct?: SnapshotRestoreSnaprevertParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dup: cdktf.booleanToTerraform(struct!.allowDup),
    snapshot_id: cdktf.numberToTerraform(struct!.snapshotId),
  }
}


export function snapshotRestoreSnaprevertParamsToHclTerraform(struct?: SnapshotRestoreSnaprevertParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dup: {
      value: cdktf.booleanToHclTerraform(struct!.allowDup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_id: {
      value: cdktf.numberToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotRestoreSnaprevertParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotRestoreSnaprevertParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDup = this._allowDup;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotRestoreSnaprevertParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDup = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDup = value.allowDup;
      this._snapshotId = value.snapshotId;
    }
  }

  // allow_dup - computed: false, optional: true, required: false
  private _allowDup?: boolean | cdktf.IResolvable; 
  public get allowDup() {
    return this.getBooleanAttribute('allow_dup');
  }
  public set allowDup(value: boolean | cdktf.IResolvable) {
    this._allowDup = value;
  }
  public resetAllowDup() {
    this._allowDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDupInput() {
    return this._allowDup;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: number; 
  public get snapshotId() {
    return this.getNumberAttribute('snapshot_id');
  }
  public set snapshotId(value: number) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore powerscale_snapshot_restore}
*/
export class SnapshotRestore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_snapshot_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotRestore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotRestore to import
  * @param importFromId The id of the existing SnapshotRestore that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotRestore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_snapshot_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_restore powerscale_snapshot_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotRestoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnapshotRestoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_snapshot_restore',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
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
    this._cloneParams.internalValue = config.cloneParams;
    this._copyParams.internalValue = config.copyParams;
    this._snaprevertParams.internalValue = config.snaprevertParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone_params - computed: false, optional: true, required: false
  private _cloneParams = new SnapshotRestoreCloneParamsOutputReference(this, "clone_params");
  public get cloneParams() {
    return this._cloneParams;
  }
  public putCloneParams(value: SnapshotRestoreCloneParams) {
    this._cloneParams.internalValue = value;
  }
  public resetCloneParams() {
    this._cloneParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneParamsInput() {
    return this._cloneParams.internalValue;
  }

  // copy_params - computed: false, optional: true, required: false
  private _copyParams = new SnapshotRestoreCopyParamsOutputReference(this, "copy_params");
  public get copyParams() {
    return this._copyParams;
  }
  public putCopyParams(value: SnapshotRestoreCopyParams) {
    this._copyParams.internalValue = value;
  }
  public resetCopyParams() {
    this._copyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyParamsInput() {
    return this._copyParams.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snaprevert_params - computed: false, optional: true, required: false
  private _snaprevertParams = new SnapshotRestoreSnaprevertParamsOutputReference(this, "snaprevert_params");
  public get snaprevertParams() {
    return this._snaprevertParams;
  }
  public putSnaprevertParams(value: SnapshotRestoreSnaprevertParams) {
    this._snaprevertParams.internalValue = value;
  }
  public resetSnaprevertParams() {
    this._snaprevertParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaprevertParamsInput() {
    return this._snaprevertParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone_params: snapshotRestoreCloneParamsToTerraform(this._cloneParams.internalValue),
      copy_params: snapshotRestoreCopyParamsToTerraform(this._copyParams.internalValue),
      snaprevert_params: snapshotRestoreSnaprevertParamsToTerraform(this._snaprevertParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone_params: {
        value: snapshotRestoreCloneParamsToHclTerraform(this._cloneParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotRestoreCloneParams",
      },
      copy_params: {
        value: snapshotRestoreCopyParamsToHclTerraform(this._copyParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotRestoreCopyParams",
      },
      snaprevert_params: {
        value: snapshotRestoreSnaprevertParamsToHclTerraform(this._snaprevertParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotRestoreSnaprevertParams",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
