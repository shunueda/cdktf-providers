// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#metadata Project#metadata}
  */
  readonly metadata?: ProjectMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#spec Project#spec}
  */
  readonly spec?: ProjectSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#timeouts Project#timeouts}
  */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#is_sso_user Project#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#username Project#username}
  */
  readonly username?: string;
}

export function projectMetadataCreatedByToTerraform(struct?: ProjectMetadataCreatedByOutputReference | ProjectMetadataCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_sso_user: cdktf.booleanToTerraform(struct!.isSsoUser),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function projectMetadataCreatedByToHclTerraform(struct?: ProjectMetadataCreatedByOutputReference | ProjectMetadataCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sso_user: {
      value: cdktf.booleanToHclTerraform(struct!.isSsoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ProjectMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectMetadataCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isSsoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsoUser = this._isSsoUser;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectMetadataCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._isSsoUser = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._isSsoUser = value.isSsoUser;
      this._username = value.username;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_sso_user - computed: false, optional: true, required: false
  private _isSsoUser?: boolean | cdktf.IResolvable; 
  public get isSsoUser() {
    return this.getBooleanAttribute('is_sso_user');
  }
  public set isSsoUser(value: boolean | cdktf.IResolvable) {
    this._isSsoUser = value;
  }
  public resetIsSsoUser() {
    this._isSsoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSsoUserInput() {
    return this._isSsoUser;
  }

  // username - computed: false, optional: true, required: false
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
}
export interface ProjectMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#is_sso_user Project#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#username Project#username}
  */
  readonly username?: string;
}

export function projectMetadataModifiedByToTerraform(struct?: ProjectMetadataModifiedByOutputReference | ProjectMetadataModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_sso_user: cdktf.booleanToTerraform(struct!.isSsoUser),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function projectMetadataModifiedByToHclTerraform(struct?: ProjectMetadataModifiedByOutputReference | ProjectMetadataModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sso_user: {
      value: cdktf.booleanToHclTerraform(struct!.isSsoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ProjectMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectMetadataModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isSsoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsoUser = this._isSsoUser;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectMetadataModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._isSsoUser = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._isSsoUser = value.isSsoUser;
      this._username = value.username;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // is_sso_user - computed: false, optional: true, required: false
  private _isSsoUser?: boolean | cdktf.IResolvable; 
  public get isSsoUser() {
    return this.getBooleanAttribute('is_sso_user');
  }
  public set isSsoUser(value: boolean | cdktf.IResolvable) {
    this._isSsoUser = value;
  }
  public resetIsSsoUser() {
    this._isSsoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSsoUserInput() {
    return this._isSsoUser;
  }

  // username - computed: false, optional: true, required: false
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
}
export interface ProjectMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#annotations Project#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#display_name Project#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#labels Project#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#project Project#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#created_by Project#created_by}
  */
  readonly createdBy?: ProjectMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#modified_by Project#modified_by}
  */
  readonly modifiedBy?: ProjectMetadataModifiedBy;
}

export function projectMetadataToTerraform(struct?: ProjectMetadataOutputReference | ProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
    created_by: projectMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: projectMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function projectMetadataToHclTerraform(struct?: ProjectMetadataOutputReference | ProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_by: {
      value: projectMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectMetadataCreatedByList",
    },
    modified_by: {
      value: projectMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._createdBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy?.internalValue;
    }
    if (this._modifiedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedBy = this._modifiedBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._project = undefined;
      this._createdBy.internalValue = undefined;
      this._modifiedBy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._displayName = value.displayName;
      this._labels = value.labels;
      this._name = value.name;
      this._project = value.project;
      this._createdBy.internalValue = value.createdBy;
      this._modifiedBy.internalValue = value.modifiedBy;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // display_name - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new ProjectMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: ProjectMetadataCreatedBy) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy = new ProjectMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: ProjectMetadataModifiedBy) {
    this._modifiedBy.internalValue = value;
  }
  public resetModifiedBy() {
    this._modifiedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy.internalValue;
  }
}
export interface ProjectSpecClusterResourceQuota {
  /**
  * The maximum number of ConfigMaps that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#config_maps Project#config_maps}
  */
  readonly configMaps?: string;
  /**
  * The maximum amount of CPU (in millicores) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#cpu_limits Project#cpu_limits}
  */
  readonly cpuLimits?: string;
  /**
  * The minimum amount of CPU (in millicores) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#cpu_requests Project#cpu_requests}
  */
  readonly cpuRequests?: string;
  /**
  * The maximum amount of ephemeral storage (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#ephemeral_storage_limits Project#ephemeral_storage_limits}
  */
  readonly ephemeralStorageLimits?: string;
  /**
  * The minimum amount of ephemeral storage (in bytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#ephemeral_storage_requests Project#ephemeral_storage_requests}
  */
  readonly ephemeralStorageRequests?: string;
  /**
  * The maximum number of GPUs allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#gpu_limits Project#gpu_limits}
  */
  readonly gpuLimits?: string;
  /**
  * The minimum number of GPUs guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#gpu_requests Project#gpu_requests}
  */
  readonly gpuRequests?: string;
  /**
  * The maximum amount of memory (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#memory_limits Project#memory_limits}
  */
  readonly memoryLimits?: string;
  /**
  * The minimum amount of memory (in bytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#memory_requests Project#memory_requests}
  */
  readonly memoryRequests?: string;
  /**
  * The maximum number of persistent volume claims that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#persistent_volume_claims Project#persistent_volume_claims}
  */
  readonly persistentVolumeClaims?: string;
  /**
  * The maximum number of pods that can exist in the project/namespace in a non-terminal state(i.e., pods with a state of .status.phase in (Failed, Succeeded) equal to true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#pods Project#pods}
  */
  readonly pods?: string;
  /**
  * The maximum number of replication controllers that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#replication_controllers Project#replication_controllers}
  */
  readonly replicationControllers?: string;
  /**
  * The maximum number of secrets that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#secrets Project#secrets}
  */
  readonly secrets?: string;
  /**
  * The maximum number of services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services Project#services}
  */
  readonly services?: string;
  /**
  * The maximum number of load balancers services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services_load_balancers Project#services_load_balancers}
  */
  readonly servicesLoadBalancers?: string;
  /**
  * The maximum number of node port services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services_node_ports Project#services_node_ports}
  */
  readonly servicesNodePorts?: string;
  /**
  * The minimum amount of storage (in gigabytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#storage_requests Project#storage_requests}
  */
  readonly storageRequests?: string;
}

export function projectSpecClusterResourceQuotaToTerraform(struct?: ProjectSpecClusterResourceQuotaOutputReference | ProjectSpecClusterResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.stringToTerraform(struct!.configMaps),
    cpu_limits: cdktf.stringToTerraform(struct!.cpuLimits),
    cpu_requests: cdktf.stringToTerraform(struct!.cpuRequests),
    ephemeral_storage_limits: cdktf.stringToTerraform(struct!.ephemeralStorageLimits),
    ephemeral_storage_requests: cdktf.stringToTerraform(struct!.ephemeralStorageRequests),
    gpu_limits: cdktf.stringToTerraform(struct!.gpuLimits),
    gpu_requests: cdktf.stringToTerraform(struct!.gpuRequests),
    memory_limits: cdktf.stringToTerraform(struct!.memoryLimits),
    memory_requests: cdktf.stringToTerraform(struct!.memoryRequests),
    persistent_volume_claims: cdktf.stringToTerraform(struct!.persistentVolumeClaims),
    pods: cdktf.stringToTerraform(struct!.pods),
    replication_controllers: cdktf.stringToTerraform(struct!.replicationControllers),
    secrets: cdktf.stringToTerraform(struct!.secrets),
    services: cdktf.stringToTerraform(struct!.services),
    services_load_balancers: cdktf.stringToTerraform(struct!.servicesLoadBalancers),
    services_node_ports: cdktf.stringToTerraform(struct!.servicesNodePorts),
    storage_requests: cdktf.stringToTerraform(struct!.storageRequests),
  }
}


export function projectSpecClusterResourceQuotaToHclTerraform(struct?: ProjectSpecClusterResourceQuotaOutputReference | ProjectSpecClusterResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.stringToHclTerraform(struct!.configMaps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_limits: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_requests: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage_limits: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorageLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage_requests: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorageRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_limits: {
      value: cdktf.stringToHclTerraform(struct!.gpuLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_requests: {
      value: cdktf.stringToHclTerraform(struct!.gpuRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limits: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_requests: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claims: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pods: {
      value: cdktf.stringToHclTerraform(struct!.pods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_controllers: {
      value: cdktf.stringToHclTerraform(struct!.replicationControllers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.stringToHclTerraform(struct!.secrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_load_balancers: {
      value: cdktf.stringToHclTerraform(struct!.servicesLoadBalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_node_ports: {
      value: cdktf.stringToHclTerraform(struct!.servicesNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_requests: {
      value: cdktf.stringToHclTerraform(struct!.storageRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecClusterResourceQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectSpecClusterResourceQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._cpuLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimits = this._cpuLimits;
    }
    if (this._cpuRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequests = this._cpuRequests;
    }
    if (this._ephemeralStorageLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLimits = this._ephemeralStorageLimits;
    }
    if (this._ephemeralStorageRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageRequests = this._ephemeralStorageRequests;
    }
    if (this._gpuLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuLimits = this._gpuLimits;
    }
    if (this._gpuRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuRequests = this._gpuRequests;
    }
    if (this._memoryLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimits = this._memoryLimits;
    }
    if (this._memoryRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequests = this._memoryRequests;
    }
    if (this._persistentVolumeClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaims = this._persistentVolumeClaims;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    if (this._replicationControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationControllers = this._replicationControllers;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._servicesLoadBalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesLoadBalancers = this._servicesLoadBalancers;
    }
    if (this._servicesNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesNodePorts = this._servicesNodePorts;
    }
    if (this._storageRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRequests = this._storageRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecClusterResourceQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMaps = undefined;
      this._cpuLimits = undefined;
      this._cpuRequests = undefined;
      this._ephemeralStorageLimits = undefined;
      this._ephemeralStorageRequests = undefined;
      this._gpuLimits = undefined;
      this._gpuRequests = undefined;
      this._memoryLimits = undefined;
      this._memoryRequests = undefined;
      this._persistentVolumeClaims = undefined;
      this._pods = undefined;
      this._replicationControllers = undefined;
      this._secrets = undefined;
      this._services = undefined;
      this._servicesLoadBalancers = undefined;
      this._servicesNodePorts = undefined;
      this._storageRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMaps = value.configMaps;
      this._cpuLimits = value.cpuLimits;
      this._cpuRequests = value.cpuRequests;
      this._ephemeralStorageLimits = value.ephemeralStorageLimits;
      this._ephemeralStorageRequests = value.ephemeralStorageRequests;
      this._gpuLimits = value.gpuLimits;
      this._gpuRequests = value.gpuRequests;
      this._memoryLimits = value.memoryLimits;
      this._memoryRequests = value.memoryRequests;
      this._persistentVolumeClaims = value.persistentVolumeClaims;
      this._pods = value.pods;
      this._replicationControllers = value.replicationControllers;
      this._secrets = value.secrets;
      this._services = value.services;
      this._servicesLoadBalancers = value.servicesLoadBalancers;
      this._servicesNodePorts = value.servicesNodePorts;
      this._storageRequests = value.storageRequests;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string; 
  public get configMaps() {
    return this.getStringAttribute('config_maps');
  }
  public set configMaps(value: string) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // cpu_limits - computed: false, optional: true, required: false
  private _cpuLimits?: string; 
  public get cpuLimits() {
    return this.getStringAttribute('cpu_limits');
  }
  public set cpuLimits(value: string) {
    this._cpuLimits = value;
  }
  public resetCpuLimits() {
    this._cpuLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitsInput() {
    return this._cpuLimits;
  }

  // cpu_requests - computed: false, optional: true, required: false
  private _cpuRequests?: string; 
  public get cpuRequests() {
    return this.getStringAttribute('cpu_requests');
  }
  public set cpuRequests(value: string) {
    this._cpuRequests = value;
  }
  public resetCpuRequests() {
    this._cpuRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestsInput() {
    return this._cpuRequests;
  }

  // ephemeral_storage_limits - computed: false, optional: true, required: false
  private _ephemeralStorageLimits?: string; 
  public get ephemeralStorageLimits() {
    return this.getStringAttribute('ephemeral_storage_limits');
  }
  public set ephemeralStorageLimits(value: string) {
    this._ephemeralStorageLimits = value;
  }
  public resetEphemeralStorageLimits() {
    this._ephemeralStorageLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLimitsInput() {
    return this._ephemeralStorageLimits;
  }

  // ephemeral_storage_requests - computed: false, optional: true, required: false
  private _ephemeralStorageRequests?: string; 
  public get ephemeralStorageRequests() {
    return this.getStringAttribute('ephemeral_storage_requests');
  }
  public set ephemeralStorageRequests(value: string) {
    this._ephemeralStorageRequests = value;
  }
  public resetEphemeralStorageRequests() {
    this._ephemeralStorageRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageRequestsInput() {
    return this._ephemeralStorageRequests;
  }

  // gpu_limits - computed: false, optional: true, required: false
  private _gpuLimits?: string; 
  public get gpuLimits() {
    return this.getStringAttribute('gpu_limits');
  }
  public set gpuLimits(value: string) {
    this._gpuLimits = value;
  }
  public resetGpuLimits() {
    this._gpuLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuLimitsInput() {
    return this._gpuLimits;
  }

  // gpu_requests - computed: false, optional: true, required: false
  private _gpuRequests?: string; 
  public get gpuRequests() {
    return this.getStringAttribute('gpu_requests');
  }
  public set gpuRequests(value: string) {
    this._gpuRequests = value;
  }
  public resetGpuRequests() {
    this._gpuRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuRequestsInput() {
    return this._gpuRequests;
  }

  // memory_limits - computed: false, optional: true, required: false
  private _memoryLimits?: string; 
  public get memoryLimits() {
    return this.getStringAttribute('memory_limits');
  }
  public set memoryLimits(value: string) {
    this._memoryLimits = value;
  }
  public resetMemoryLimits() {
    this._memoryLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitsInput() {
    return this._memoryLimits;
  }

  // memory_requests - computed: false, optional: true, required: false
  private _memoryRequests?: string; 
  public get memoryRequests() {
    return this.getStringAttribute('memory_requests');
  }
  public set memoryRequests(value: string) {
    this._memoryRequests = value;
  }
  public resetMemoryRequests() {
    this._memoryRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestsInput() {
    return this._memoryRequests;
  }

  // persistent_volume_claims - computed: false, optional: true, required: false
  private _persistentVolumeClaims?: string; 
  public get persistentVolumeClaims() {
    return this.getStringAttribute('persistent_volume_claims');
  }
  public set persistentVolumeClaims(value: string) {
    this._persistentVolumeClaims = value;
  }
  public resetPersistentVolumeClaims() {
    this._persistentVolumeClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimsInput() {
    return this._persistentVolumeClaims;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: string; 
  public get pods() {
    return this.getStringAttribute('pods');
  }
  public set pods(value: string) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }

  // replication_controllers - computed: false, optional: true, required: false
  private _replicationControllers?: string; 
  public get replicationControllers() {
    return this.getStringAttribute('replication_controllers');
  }
  public set replicationControllers(value: string) {
    this._replicationControllers = value;
  }
  public resetReplicationControllers() {
    this._replicationControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllersInput() {
    return this._replicationControllers;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string; 
  public get secrets() {
    return this.getStringAttribute('secrets');
  }
  public set secrets(value: string) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // services_load_balancers - computed: false, optional: true, required: false
  private _servicesLoadBalancers?: string; 
  public get servicesLoadBalancers() {
    return this.getStringAttribute('services_load_balancers');
  }
  public set servicesLoadBalancers(value: string) {
    this._servicesLoadBalancers = value;
  }
  public resetServicesLoadBalancers() {
    this._servicesLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesLoadBalancersInput() {
    return this._servicesLoadBalancers;
  }

  // services_node_ports - computed: false, optional: true, required: false
  private _servicesNodePorts?: string; 
  public get servicesNodePorts() {
    return this.getStringAttribute('services_node_ports');
  }
  public set servicesNodePorts(value: string) {
    this._servicesNodePorts = value;
  }
  public resetServicesNodePorts() {
    this._servicesNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesNodePortsInput() {
    return this._servicesNodePorts;
  }

  // storage_requests - computed: false, optional: true, required: false
  private _storageRequests?: string; 
  public get storageRequests() {
    return this.getStringAttribute('storage_requests');
  }
  public set storageRequests(value: string) {
    this._storageRequests = value;
  }
  public resetStorageRequests() {
    this._storageRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRequestsInput() {
    return this._storageRequests;
  }
}
export interface ProjectSpecDefaultClusterNamespaceQuota {
  /**
  * The maximum number of ConfigMaps that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#config_maps Project#config_maps}
  */
  readonly configMaps?: string;
  /**
  * The maximum amount of CPU (in millicores) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#cpu_limits Project#cpu_limits}
  */
  readonly cpuLimits?: string;
  /**
  * The minimum amount of CPU (in millicores) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#cpu_requests Project#cpu_requests}
  */
  readonly cpuRequests?: string;
  /**
  * The maximum amount of ephemeral storage (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#ephemeral_storage_limits Project#ephemeral_storage_limits}
  */
  readonly ephemeralStorageLimits?: string;
  /**
  * The minimum amount of ephemeral storage (in bytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#ephemeral_storage_requests Project#ephemeral_storage_requests}
  */
  readonly ephemeralStorageRequests?: string;
  /**
  * The maximum number of GPUs allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#gpu_limits Project#gpu_limits}
  */
  readonly gpuLimits?: string;
  /**
  * The minimum number of GPUs guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#gpu_requests Project#gpu_requests}
  */
  readonly gpuRequests?: string;
  /**
  * The maximum amount of memory (in bytes) allocated to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#memory_limits Project#memory_limits}
  */
  readonly memoryLimits?: string;
  /**
  * The minimum amount of memory (in bytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#memory_requests Project#memory_requests}
  */
  readonly memoryRequests?: string;
  /**
  * The maximum number of persistent volume claims that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#persistent_volume_claims Project#persistent_volume_claims}
  */
  readonly persistentVolumeClaims?: string;
  /**
  * The maximum number of pods that can exist in the project/namespace in a non-terminal state(i.e., pods with a state of .status.phase in (Failed, Succeeded) equal to true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#pods Project#pods}
  */
  readonly pods?: string;
  /**
  * The maximum number of replication controllers that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#replication_controllers Project#replication_controllers}
  */
  readonly replicationControllers?: string;
  /**
  * The maximum number of secrets that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#secrets Project#secrets}
  */
  readonly secrets?: string;
  /**
  * The maximum number of services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services Project#services}
  */
  readonly services?: string;
  /**
  * The maximum number of load balancers services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services_load_balancers Project#services_load_balancers}
  */
  readonly servicesLoadBalancers?: string;
  /**
  * The maximum number of node port services that can exist in the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#services_node_ports Project#services_node_ports}
  */
  readonly servicesNodePorts?: string;
  /**
  * The minimum amount of storage (in gigabytes) guaranteed to the project/namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#storage_requests Project#storage_requests}
  */
  readonly storageRequests?: string;
}

export function projectSpecDefaultClusterNamespaceQuotaToTerraform(struct?: ProjectSpecDefaultClusterNamespaceQuotaOutputReference | ProjectSpecDefaultClusterNamespaceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.stringToTerraform(struct!.configMaps),
    cpu_limits: cdktf.stringToTerraform(struct!.cpuLimits),
    cpu_requests: cdktf.stringToTerraform(struct!.cpuRequests),
    ephemeral_storage_limits: cdktf.stringToTerraform(struct!.ephemeralStorageLimits),
    ephemeral_storage_requests: cdktf.stringToTerraform(struct!.ephemeralStorageRequests),
    gpu_limits: cdktf.stringToTerraform(struct!.gpuLimits),
    gpu_requests: cdktf.stringToTerraform(struct!.gpuRequests),
    memory_limits: cdktf.stringToTerraform(struct!.memoryLimits),
    memory_requests: cdktf.stringToTerraform(struct!.memoryRequests),
    persistent_volume_claims: cdktf.stringToTerraform(struct!.persistentVolumeClaims),
    pods: cdktf.stringToTerraform(struct!.pods),
    replication_controllers: cdktf.stringToTerraform(struct!.replicationControllers),
    secrets: cdktf.stringToTerraform(struct!.secrets),
    services: cdktf.stringToTerraform(struct!.services),
    services_load_balancers: cdktf.stringToTerraform(struct!.servicesLoadBalancers),
    services_node_ports: cdktf.stringToTerraform(struct!.servicesNodePorts),
    storage_requests: cdktf.stringToTerraform(struct!.storageRequests),
  }
}


export function projectSpecDefaultClusterNamespaceQuotaToHclTerraform(struct?: ProjectSpecDefaultClusterNamespaceQuotaOutputReference | ProjectSpecDefaultClusterNamespaceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.stringToHclTerraform(struct!.configMaps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_limits: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_requests: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage_limits: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorageLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_storage_requests: {
      value: cdktf.stringToHclTerraform(struct!.ephemeralStorageRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_limits: {
      value: cdktf.stringToHclTerraform(struct!.gpuLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_requests: {
      value: cdktf.stringToHclTerraform(struct!.gpuRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limits: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_requests: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claims: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pods: {
      value: cdktf.stringToHclTerraform(struct!.pods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_controllers: {
      value: cdktf.stringToHclTerraform(struct!.replicationControllers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.stringToHclTerraform(struct!.secrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_load_balancers: {
      value: cdktf.stringToHclTerraform(struct!.servicesLoadBalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_node_ports: {
      value: cdktf.stringToHclTerraform(struct!.servicesNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_requests: {
      value: cdktf.stringToHclTerraform(struct!.storageRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecDefaultClusterNamespaceQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectSpecDefaultClusterNamespaceQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._cpuLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimits = this._cpuLimits;
    }
    if (this._cpuRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequests = this._cpuRequests;
    }
    if (this._ephemeralStorageLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLimits = this._ephemeralStorageLimits;
    }
    if (this._ephemeralStorageRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageRequests = this._ephemeralStorageRequests;
    }
    if (this._gpuLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuLimits = this._gpuLimits;
    }
    if (this._gpuRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuRequests = this._gpuRequests;
    }
    if (this._memoryLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimits = this._memoryLimits;
    }
    if (this._memoryRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequests = this._memoryRequests;
    }
    if (this._persistentVolumeClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaims = this._persistentVolumeClaims;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    if (this._replicationControllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationControllers = this._replicationControllers;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._servicesLoadBalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesLoadBalancers = this._servicesLoadBalancers;
    }
    if (this._servicesNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesNodePorts = this._servicesNodePorts;
    }
    if (this._storageRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRequests = this._storageRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecDefaultClusterNamespaceQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMaps = undefined;
      this._cpuLimits = undefined;
      this._cpuRequests = undefined;
      this._ephemeralStorageLimits = undefined;
      this._ephemeralStorageRequests = undefined;
      this._gpuLimits = undefined;
      this._gpuRequests = undefined;
      this._memoryLimits = undefined;
      this._memoryRequests = undefined;
      this._persistentVolumeClaims = undefined;
      this._pods = undefined;
      this._replicationControllers = undefined;
      this._secrets = undefined;
      this._services = undefined;
      this._servicesLoadBalancers = undefined;
      this._servicesNodePorts = undefined;
      this._storageRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMaps = value.configMaps;
      this._cpuLimits = value.cpuLimits;
      this._cpuRequests = value.cpuRequests;
      this._ephemeralStorageLimits = value.ephemeralStorageLimits;
      this._ephemeralStorageRequests = value.ephemeralStorageRequests;
      this._gpuLimits = value.gpuLimits;
      this._gpuRequests = value.gpuRequests;
      this._memoryLimits = value.memoryLimits;
      this._memoryRequests = value.memoryRequests;
      this._persistentVolumeClaims = value.persistentVolumeClaims;
      this._pods = value.pods;
      this._replicationControllers = value.replicationControllers;
      this._secrets = value.secrets;
      this._services = value.services;
      this._servicesLoadBalancers = value.servicesLoadBalancers;
      this._servicesNodePorts = value.servicesNodePorts;
      this._storageRequests = value.storageRequests;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string; 
  public get configMaps() {
    return this.getStringAttribute('config_maps');
  }
  public set configMaps(value: string) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // cpu_limits - computed: false, optional: true, required: false
  private _cpuLimits?: string; 
  public get cpuLimits() {
    return this.getStringAttribute('cpu_limits');
  }
  public set cpuLimits(value: string) {
    this._cpuLimits = value;
  }
  public resetCpuLimits() {
    this._cpuLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitsInput() {
    return this._cpuLimits;
  }

  // cpu_requests - computed: false, optional: true, required: false
  private _cpuRequests?: string; 
  public get cpuRequests() {
    return this.getStringAttribute('cpu_requests');
  }
  public set cpuRequests(value: string) {
    this._cpuRequests = value;
  }
  public resetCpuRequests() {
    this._cpuRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestsInput() {
    return this._cpuRequests;
  }

  // ephemeral_storage_limits - computed: false, optional: true, required: false
  private _ephemeralStorageLimits?: string; 
  public get ephemeralStorageLimits() {
    return this.getStringAttribute('ephemeral_storage_limits');
  }
  public set ephemeralStorageLimits(value: string) {
    this._ephemeralStorageLimits = value;
  }
  public resetEphemeralStorageLimits() {
    this._ephemeralStorageLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLimitsInput() {
    return this._ephemeralStorageLimits;
  }

  // ephemeral_storage_requests - computed: false, optional: true, required: false
  private _ephemeralStorageRequests?: string; 
  public get ephemeralStorageRequests() {
    return this.getStringAttribute('ephemeral_storage_requests');
  }
  public set ephemeralStorageRequests(value: string) {
    this._ephemeralStorageRequests = value;
  }
  public resetEphemeralStorageRequests() {
    this._ephemeralStorageRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageRequestsInput() {
    return this._ephemeralStorageRequests;
  }

  // gpu_limits - computed: false, optional: true, required: false
  private _gpuLimits?: string; 
  public get gpuLimits() {
    return this.getStringAttribute('gpu_limits');
  }
  public set gpuLimits(value: string) {
    this._gpuLimits = value;
  }
  public resetGpuLimits() {
    this._gpuLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuLimitsInput() {
    return this._gpuLimits;
  }

  // gpu_requests - computed: false, optional: true, required: false
  private _gpuRequests?: string; 
  public get gpuRequests() {
    return this.getStringAttribute('gpu_requests');
  }
  public set gpuRequests(value: string) {
    this._gpuRequests = value;
  }
  public resetGpuRequests() {
    this._gpuRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuRequestsInput() {
    return this._gpuRequests;
  }

  // memory_limits - computed: false, optional: true, required: false
  private _memoryLimits?: string; 
  public get memoryLimits() {
    return this.getStringAttribute('memory_limits');
  }
  public set memoryLimits(value: string) {
    this._memoryLimits = value;
  }
  public resetMemoryLimits() {
    this._memoryLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitsInput() {
    return this._memoryLimits;
  }

  // memory_requests - computed: false, optional: true, required: false
  private _memoryRequests?: string; 
  public get memoryRequests() {
    return this.getStringAttribute('memory_requests');
  }
  public set memoryRequests(value: string) {
    this._memoryRequests = value;
  }
  public resetMemoryRequests() {
    this._memoryRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestsInput() {
    return this._memoryRequests;
  }

  // persistent_volume_claims - computed: false, optional: true, required: false
  private _persistentVolumeClaims?: string; 
  public get persistentVolumeClaims() {
    return this.getStringAttribute('persistent_volume_claims');
  }
  public set persistentVolumeClaims(value: string) {
    this._persistentVolumeClaims = value;
  }
  public resetPersistentVolumeClaims() {
    this._persistentVolumeClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimsInput() {
    return this._persistentVolumeClaims;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: string; 
  public get pods() {
    return this.getStringAttribute('pods');
  }
  public set pods(value: string) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }

  // replication_controllers - computed: false, optional: true, required: false
  private _replicationControllers?: string; 
  public get replicationControllers() {
    return this.getStringAttribute('replication_controllers');
  }
  public set replicationControllers(value: string) {
    this._replicationControllers = value;
  }
  public resetReplicationControllers() {
    this._replicationControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllersInput() {
    return this._replicationControllers;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string; 
  public get secrets() {
    return this.getStringAttribute('secrets');
  }
  public set secrets(value: string) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // services_load_balancers - computed: false, optional: true, required: false
  private _servicesLoadBalancers?: string; 
  public get servicesLoadBalancers() {
    return this.getStringAttribute('services_load_balancers');
  }
  public set servicesLoadBalancers(value: string) {
    this._servicesLoadBalancers = value;
  }
  public resetServicesLoadBalancers() {
    this._servicesLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesLoadBalancersInput() {
    return this._servicesLoadBalancers;
  }

  // services_node_ports - computed: false, optional: true, required: false
  private _servicesNodePorts?: string; 
  public get servicesNodePorts() {
    return this.getStringAttribute('services_node_ports');
  }
  public set servicesNodePorts(value: string) {
    this._servicesNodePorts = value;
  }
  public resetServicesNodePorts() {
    this._servicesNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesNodePortsInput() {
    return this._servicesNodePorts;
  }

  // storage_requests - computed: false, optional: true, required: false
  private _storageRequests?: string; 
  public get storageRequests() {
    return this.getStringAttribute('storage_requests');
  }
  public set storageRequests(value: string) {
    this._storageRequests = value;
  }
  public resetStorageRequests() {
    this._storageRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRequestsInput() {
    return this._storageRequests;
  }
}
export interface ProjectSpecDriftWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#enabled Project#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function projectSpecDriftWebhookToTerraform(struct?: ProjectSpecDriftWebhookOutputReference | ProjectSpecDriftWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function projectSpecDriftWebhookToHclTerraform(struct?: ProjectSpecDriftWebhookOutputReference | ProjectSpecDriftWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecDriftWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectSpecDriftWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecDriftWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ProjectSpec {
  /**
  * flag to indicate if this is the default project in the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#default Project#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * profile quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#profile_quota Project#profile_quota}
  */
  readonly profileQuota?: { [key: string]: string };
  /**
  * namespaces excluded from sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#sync_excluded_namespaces Project#sync_excluded_namespaces}
  */
  readonly syncExcludedNamespaces?: string[];
  /**
  * cluster_resource_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#cluster_resource_quota Project#cluster_resource_quota}
  */
  readonly clusterResourceQuota?: ProjectSpecClusterResourceQuota;
  /**
  * default_cluster_namespace_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#default_cluster_namespace_quota Project#default_cluster_namespace_quota}
  */
  readonly defaultClusterNamespaceQuota?: ProjectSpecDefaultClusterNamespaceQuota;
  /**
  * drift_webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#drift_webhook Project#drift_webhook}
  */
  readonly driftWebhook?: ProjectSpecDriftWebhook;
}

export function projectSpecToTerraform(struct?: ProjectSpecOutputReference | ProjectSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    profile_quota: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.profileQuota),
    sync_excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncExcludedNamespaces),
    cluster_resource_quota: projectSpecClusterResourceQuotaToTerraform(struct!.clusterResourceQuota),
    default_cluster_namespace_quota: projectSpecDefaultClusterNamespaceQuotaToTerraform(struct!.defaultClusterNamespaceQuota),
    drift_webhook: projectSpecDriftWebhookToTerraform(struct!.driftWebhook),
  }
}


export function projectSpecToHclTerraform(struct?: ProjectSpecOutputReference | ProjectSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_quota: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.profileQuota),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sync_excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncExcludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_resource_quota: {
      value: projectSpecClusterResourceQuotaToHclTerraform(struct!.clusterResourceQuota),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectSpecClusterResourceQuotaList",
    },
    default_cluster_namespace_quota: {
      value: projectSpecDefaultClusterNamespaceQuotaToHclTerraform(struct!.defaultClusterNamespaceQuota),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectSpecDefaultClusterNamespaceQuotaList",
    },
    drift_webhook: {
      value: projectSpecDriftWebhookToHclTerraform(struct!.driftWebhook),
      isBlock: true,
      type: "list",
      storageClassType: "ProjectSpecDriftWebhookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._profileQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileQuota = this._profileQuota;
    }
    if (this._syncExcludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncExcludedNamespaces = this._syncExcludedNamespaces;
    }
    if (this._clusterResourceQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceQuota = this._clusterResourceQuota?.internalValue;
    }
    if (this._defaultClusterNamespaceQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClusterNamespaceQuota = this._defaultClusterNamespaceQuota?.internalValue;
    }
    if (this._driftWebhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driftWebhook = this._driftWebhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._profileQuota = undefined;
      this._syncExcludedNamespaces = undefined;
      this._clusterResourceQuota.internalValue = undefined;
      this._defaultClusterNamespaceQuota.internalValue = undefined;
      this._driftWebhook.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._profileQuota = value.profileQuota;
      this._syncExcludedNamespaces = value.syncExcludedNamespaces;
      this._clusterResourceQuota.internalValue = value.clusterResourceQuota;
      this._defaultClusterNamespaceQuota.internalValue = value.defaultClusterNamespaceQuota;
      this._driftWebhook.internalValue = value.driftWebhook;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // profile_quota - computed: false, optional: true, required: false
  private _profileQuota?: { [key: string]: string }; 
  public get profileQuota() {
    return this.getStringMapAttribute('profile_quota');
  }
  public set profileQuota(value: { [key: string]: string }) {
    this._profileQuota = value;
  }
  public resetProfileQuota() {
    this._profileQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileQuotaInput() {
    return this._profileQuota;
  }

  // sync_excluded_namespaces - computed: false, optional: true, required: false
  private _syncExcludedNamespaces?: string[]; 
  public get syncExcludedNamespaces() {
    return this.getListAttribute('sync_excluded_namespaces');
  }
  public set syncExcludedNamespaces(value: string[]) {
    this._syncExcludedNamespaces = value;
  }
  public resetSyncExcludedNamespaces() {
    this._syncExcludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncExcludedNamespacesInput() {
    return this._syncExcludedNamespaces;
  }

  // cluster_resource_quota - computed: false, optional: true, required: false
  private _clusterResourceQuota = new ProjectSpecClusterResourceQuotaOutputReference(this, "cluster_resource_quota");
  public get clusterResourceQuota() {
    return this._clusterResourceQuota;
  }
  public putClusterResourceQuota(value: ProjectSpecClusterResourceQuota) {
    this._clusterResourceQuota.internalValue = value;
  }
  public resetClusterResourceQuota() {
    this._clusterResourceQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceQuotaInput() {
    return this._clusterResourceQuota.internalValue;
  }

  // default_cluster_namespace_quota - computed: false, optional: true, required: false
  private _defaultClusterNamespaceQuota = new ProjectSpecDefaultClusterNamespaceQuotaOutputReference(this, "default_cluster_namespace_quota");
  public get defaultClusterNamespaceQuota() {
    return this._defaultClusterNamespaceQuota;
  }
  public putDefaultClusterNamespaceQuota(value: ProjectSpecDefaultClusterNamespaceQuota) {
    this._defaultClusterNamespaceQuota.internalValue = value;
  }
  public resetDefaultClusterNamespaceQuota() {
    this._defaultClusterNamespaceQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterNamespaceQuotaInput() {
    return this._defaultClusterNamespaceQuota.internalValue;
  }

  // drift_webhook - computed: false, optional: true, required: false
  private _driftWebhook = new ProjectSpecDriftWebhookOutputReference(this, "drift_webhook");
  public get driftWebhook() {
    return this._driftWebhook;
  }
  public putDriftWebhook(value: ProjectSpecDriftWebhook) {
    this._driftWebhook.internalValue = value;
  }
  public resetDriftWebhook() {
    this._driftWebhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftWebhookInput() {
    return this._driftWebhook.internalValue;
  }
}
export interface ProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#create Project#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#delete Project#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#update Project#update}
  */
  readonly update?: string;
}

export function projectTimeoutsToTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
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


export function projectTimeoutsToHclTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
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

export class ProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project rafay_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/project rafay_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_project',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.53',
        providerVersionConstraint: '1.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ProjectMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProjectMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ProjectSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ProjectSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProjectTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      metadata: projectMetadataToTerraform(this._metadata.internalValue),
      spec: projectSpecToTerraform(this._spec.internalValue),
      timeouts: projectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: projectMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectMetadataList",
      },
      spec: {
        value: projectSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSpecList",
      },
      timeouts: {
        value: projectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
