// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_task_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBatchBatchTaskEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_task_environment#batch_task_environment_id DataOciBatchBatchTaskEnvironment#batch_task_environment_id}
  */
  readonly batchTaskEnvironmentId: string;
}
export interface DataOciBatchBatchTaskEnvironmentSecurityContext {
}

export function dataOciBatchBatchTaskEnvironmentSecurityContextToTerraform(struct?: DataOciBatchBatchTaskEnvironmentSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBatchBatchTaskEnvironmentSecurityContextToHclTerraform(struct?: DataOciBatchBatchTaskEnvironmentSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBatchBatchTaskEnvironmentSecurityContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBatchBatchTaskEnvironmentSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBatchBatchTaskEnvironmentSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}

export class DataOciBatchBatchTaskEnvironmentSecurityContextList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBatchBatchTaskEnvironmentSecurityContextOutputReference {
    return new DataOciBatchBatchTaskEnvironmentSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBatchBatchTaskEnvironmentVolumes {
}

export function dataOciBatchBatchTaskEnvironmentVolumesToTerraform(struct?: DataOciBatchBatchTaskEnvironmentVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBatchBatchTaskEnvironmentVolumesToHclTerraform(struct?: DataOciBatchBatchTaskEnvironmentVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBatchBatchTaskEnvironmentVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBatchBatchTaskEnvironmentVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBatchBatchTaskEnvironmentVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_mount_directory_path - computed: true, optional: false, required: false
  public get localMountDirectoryPath() {
    return this.getStringAttribute('local_mount_directory_path');
  }

  // mount_target_export_path - computed: true, optional: false, required: false
  public get mountTargetExportPath() {
    return this.getStringAttribute('mount_target_export_path');
  }

  // mount_target_fqdn - computed: true, optional: false, required: false
  public get mountTargetFqdn() {
    return this.getStringAttribute('mount_target_fqdn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciBatchBatchTaskEnvironmentVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBatchBatchTaskEnvironmentVolumesOutputReference {
    return new DataOciBatchBatchTaskEnvironmentVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_task_environment oci_batch_batch_task_environment}
*/
export class DataOciBatchBatchTaskEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_batch_batch_task_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBatchBatchTaskEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBatchBatchTaskEnvironment to import
  * @param importFromId The id of the existing DataOciBatchBatchTaskEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_task_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBatchBatchTaskEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_batch_batch_task_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_task_environment oci_batch_batch_task_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBatchBatchTaskEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBatchBatchTaskEnvironmentConfig) {
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
    this._batchTaskEnvironmentId = config.batchTaskEnvironmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_task_environment_id - computed: false, optional: false, required: true
  private _batchTaskEnvironmentId?: string; 
  public get batchTaskEnvironmentId() {
    return this.getStringAttribute('batch_task_environment_id');
  }
  public set batchTaskEnvironmentId(value: string) {
    this._batchTaskEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTaskEnvironmentIdInput() {
    return this._batchTaskEnvironmentId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataOciBatchBatchTaskEnvironmentSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
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

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataOciBatchBatchTaskEnvironmentVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_task_environment_id: cdktf.stringToTerraform(this._batchTaskEnvironmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_task_environment_id: {
        value: cdktf.stringToHclTerraform(this._batchTaskEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
