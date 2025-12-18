// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchBatchTaskEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#compartment_id BatchBatchTaskEnvironment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#defined_tags BatchBatchTaskEnvironment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#description BatchBatchTaskEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#display_name BatchBatchTaskEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#freeform_tags BatchBatchTaskEnvironment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#id BatchBatchTaskEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#image_url BatchBatchTaskEnvironment#image_url}
  */
  readonly imageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#working_directory BatchBatchTaskEnvironment#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#security_context BatchBatchTaskEnvironment#security_context}
  */
  readonly securityContext?: BatchBatchTaskEnvironmentSecurityContext;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#timeouts BatchBatchTaskEnvironment#timeouts}
  */
  readonly timeouts?: BatchBatchTaskEnvironmentTimeouts;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#volumes BatchBatchTaskEnvironment#volumes}
  */
  readonly volumes?: BatchBatchTaskEnvironmentVolumes[] | cdktf.IResolvable;
}
export interface BatchBatchTaskEnvironmentSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#fs_group BatchBatchTaskEnvironment#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#run_as_group BatchBatchTaskEnvironment#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#run_as_user BatchBatchTaskEnvironment#run_as_user}
  */
  readonly runAsUser?: number;
}

export function batchBatchTaskEnvironmentSecurityContextToTerraform(struct?: BatchBatchTaskEnvironmentSecurityContextOutputReference | BatchBatchTaskEnvironmentSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function batchBatchTaskEnvironmentSecurityContextToHclTerraform(struct?: BatchBatchTaskEnvironmentSecurityContextOutputReference | BatchBatchTaskEnvironmentSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchTaskEnvironmentSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchBatchTaskEnvironmentSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchTaskEnvironmentSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsGroup = undefined;
      this._runAsGroup = undefined;
      this._runAsUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsGroup = value.fsGroup;
      this._runAsGroup = value.runAsGroup;
      this._runAsUser = value.runAsUser;
    }
  }

  // fs_group - computed: true, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // run_as_group - computed: true, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_user - computed: true, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface BatchBatchTaskEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#create BatchBatchTaskEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#delete BatchBatchTaskEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#update BatchBatchTaskEnvironment#update}
  */
  readonly update?: string;
}

export function batchBatchTaskEnvironmentTimeoutsToTerraform(struct?: BatchBatchTaskEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function batchBatchTaskEnvironmentTimeoutsToHclTerraform(struct?: BatchBatchTaskEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class BatchBatchTaskEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchBatchTaskEnvironmentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchTaskEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
export interface BatchBatchTaskEnvironmentVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#local_mount_directory_path BatchBatchTaskEnvironment#local_mount_directory_path}
  */
  readonly localMountDirectoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#mount_target_export_path BatchBatchTaskEnvironment#mount_target_export_path}
  */
  readonly mountTargetExportPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#mount_target_fqdn BatchBatchTaskEnvironment#mount_target_fqdn}
  */
  readonly mountTargetFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#name BatchBatchTaskEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#type BatchBatchTaskEnvironment#type}
  */
  readonly type: string;
}

export function batchBatchTaskEnvironmentVolumesToTerraform(struct?: BatchBatchTaskEnvironmentVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_directory_path: cdktf.stringToTerraform(struct!.localMountDirectoryPath),
    mount_target_export_path: cdktf.stringToTerraform(struct!.mountTargetExportPath),
    mount_target_fqdn: cdktf.stringToTerraform(struct!.mountTargetFqdn),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function batchBatchTaskEnvironmentVolumesToHclTerraform(struct?: BatchBatchTaskEnvironmentVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_directory_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountDirectoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_export_path: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetExportPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchTaskEnvironmentVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchBatchTaskEnvironmentVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountDirectoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDirectoryPath = this._localMountDirectoryPath;
    }
    if (this._mountTargetExportPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetExportPath = this._mountTargetExportPath;
    }
    if (this._mountTargetFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetFqdn = this._mountTargetFqdn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchTaskEnvironmentVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountDirectoryPath = undefined;
      this._mountTargetExportPath = undefined;
      this._mountTargetFqdn = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountDirectoryPath = value.localMountDirectoryPath;
      this._mountTargetExportPath = value.mountTargetExportPath;
      this._mountTargetFqdn = value.mountTargetFqdn;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // local_mount_directory_path - computed: false, optional: false, required: true
  private _localMountDirectoryPath?: string; 
  public get localMountDirectoryPath() {
    return this.getStringAttribute('local_mount_directory_path');
  }
  public set localMountDirectoryPath(value: string) {
    this._localMountDirectoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirectoryPathInput() {
    return this._localMountDirectoryPath;
  }

  // mount_target_export_path - computed: false, optional: false, required: true
  private _mountTargetExportPath?: string; 
  public get mountTargetExportPath() {
    return this.getStringAttribute('mount_target_export_path');
  }
  public set mountTargetExportPath(value: string) {
    this._mountTargetExportPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetExportPathInput() {
    return this._mountTargetExportPath;
  }

  // mount_target_fqdn - computed: false, optional: false, required: true
  private _mountTargetFqdn?: string; 
  public get mountTargetFqdn() {
    return this.getStringAttribute('mount_target_fqdn');
  }
  public set mountTargetFqdn(value: string) {
    this._mountTargetFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetFqdnInput() {
    return this._mountTargetFqdn;
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
}

export class BatchBatchTaskEnvironmentVolumesList extends cdktf.ComplexList {
  public internalValue? : BatchBatchTaskEnvironmentVolumes[] | cdktf.IResolvable

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
  public get(index: number): BatchBatchTaskEnvironmentVolumesOutputReference {
    return new BatchBatchTaskEnvironmentVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment oci_batch_batch_task_environment}
*/
export class BatchBatchTaskEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_batch_batch_task_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchBatchTaskEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchBatchTaskEnvironment to import
  * @param importFromId The id of the existing BatchBatchTaskEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchBatchTaskEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_batch_batch_task_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_task_environment oci_batch_batch_task_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchBatchTaskEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: BatchBatchTaskEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_batch_batch_task_environment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._workingDirectory = config.workingDirectory;
    this._securityContext.internalValue = config.securityContext;
    this._timeouts.internalValue = config.timeouts;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new BatchBatchTaskEnvironmentSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: BatchBatchTaskEnvironmentSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BatchBatchTaskEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BatchBatchTaskEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new BatchBatchTaskEnvironmentVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: BatchBatchTaskEnvironmentVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      security_context: batchBatchTaskEnvironmentSecurityContextToTerraform(this._securityContext.internalValue),
      timeouts: batchBatchTaskEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
      volumes: cdktf.listMapper(batchBatchTaskEnvironmentVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_context: {
        value: batchBatchTaskEnvironmentSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchTaskEnvironmentSecurityContextList",
      },
      timeouts: {
        value: batchBatchTaskEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchBatchTaskEnvironmentTimeouts",
      },
      volumes: {
        value: cdktf.listMapperHcl(batchBatchTaskEnvironmentVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchTaskEnvironmentVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
