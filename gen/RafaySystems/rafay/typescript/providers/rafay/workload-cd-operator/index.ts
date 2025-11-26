// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadCdOperatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * always run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#always_run WorkloadCdOperator#always_run}
  */
  readonly alwaysRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#id WorkloadCdOperator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#metadata WorkloadCdOperator#metadata}
  */
  readonly metadata?: WorkloadCdOperatorMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#spec WorkloadCdOperator#spec}
  */
  readonly spec?: WorkloadCdOperatorSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#timeouts WorkloadCdOperator#timeouts}
  */
  readonly timeouts?: WorkloadCdOperatorTimeouts;
  /**
  * workload_decommissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_decommissions WorkloadCdOperator#workload_decommissions}
  */
  readonly workloadDecommissions?: WorkloadCdOperatorWorkloadDecommissions[] | cdktf.IResolvable;
  /**
  * workload_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_status WorkloadCdOperator#workload_status}
  */
  readonly workloadStatus?: WorkloadCdOperatorWorkloadStatus[] | cdktf.IResolvable;
  /**
  * workload_upserts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_upserts WorkloadCdOperator#workload_upserts}
  */
  readonly workloadUpserts?: WorkloadCdOperatorWorkloadUpserts[] | cdktf.IResolvable;
}
export interface WorkloadCdOperatorMetadataCreatedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#id WorkloadCdOperator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#is_sso_user WorkloadCdOperator#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#username WorkloadCdOperator#username}
  */
  readonly username?: string;
}

export function workloadCdOperatorMetadataCreatedByToTerraform(struct?: WorkloadCdOperatorMetadataCreatedByOutputReference | WorkloadCdOperatorMetadataCreatedBy): any {
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


export function workloadCdOperatorMetadataCreatedByToHclTerraform(struct?: WorkloadCdOperatorMetadataCreatedByOutputReference | WorkloadCdOperatorMetadataCreatedBy): any {
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

export class WorkloadCdOperatorMetadataCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorMetadataCreatedBy | undefined {
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

  public set internalValue(value: WorkloadCdOperatorMetadataCreatedBy | undefined) {
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
export interface WorkloadCdOperatorMetadataModifiedBy {
  /**
  * Id of the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#id WorkloadCdOperator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#is_sso_user WorkloadCdOperator#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#username WorkloadCdOperator#username}
  */
  readonly username?: string;
}

export function workloadCdOperatorMetadataModifiedByToTerraform(struct?: WorkloadCdOperatorMetadataModifiedByOutputReference | WorkloadCdOperatorMetadataModifiedBy): any {
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


export function workloadCdOperatorMetadataModifiedByToHclTerraform(struct?: WorkloadCdOperatorMetadataModifiedByOutputReference | WorkloadCdOperatorMetadataModifiedBy): any {
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

export class WorkloadCdOperatorMetadataModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorMetadataModifiedBy | undefined {
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

  public set internalValue(value: WorkloadCdOperatorMetadataModifiedBy | undefined) {
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
export interface WorkloadCdOperatorMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#annotations WorkloadCdOperator#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#description WorkloadCdOperator#description}
  */
  readonly description?: string;
  /**
  * Display Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#display_name WorkloadCdOperator#display_name}
  */
  readonly displayName?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#labels WorkloadCdOperator#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#name WorkloadCdOperator#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#project WorkloadCdOperator#project}
  */
  readonly project?: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#created_by WorkloadCdOperator#created_by}
  */
  readonly createdBy?: WorkloadCdOperatorMetadataCreatedBy;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#modified_by WorkloadCdOperator#modified_by}
  */
  readonly modifiedBy?: WorkloadCdOperatorMetadataModifiedBy;
}

export function workloadCdOperatorMetadataToTerraform(struct?: WorkloadCdOperatorMetadataOutputReference | WorkloadCdOperatorMetadata): any {
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
    created_by: workloadCdOperatorMetadataCreatedByToTerraform(struct!.createdBy),
    modified_by: workloadCdOperatorMetadataModifiedByToTerraform(struct!.modifiedBy),
  }
}


export function workloadCdOperatorMetadataToHclTerraform(struct?: WorkloadCdOperatorMetadataOutputReference | WorkloadCdOperatorMetadata): any {
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
      value: workloadCdOperatorMetadataCreatedByToHclTerraform(struct!.createdBy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadCdOperatorMetadataCreatedByList",
    },
    modified_by: {
      value: workloadCdOperatorMetadataModifiedByToHclTerraform(struct!.modifiedBy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadCdOperatorMetadataModifiedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorMetadata | undefined {
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

  public set internalValue(value: WorkloadCdOperatorMetadata | undefined) {
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
  private _createdBy = new WorkloadCdOperatorMetadataCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: WorkloadCdOperatorMetadataCreatedBy) {
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
  private _modifiedBy = new WorkloadCdOperatorMetadataModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: WorkloadCdOperatorMetadataModifiedBy) {
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
export interface WorkloadCdOperatorSpecCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#password WorkloadCdOperator#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#private_key WorkloadCdOperator#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#token WorkloadCdOperator#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#username WorkloadCdOperator#username}
  */
  readonly username: string;
}

export function workloadCdOperatorSpecCredentialsToTerraform(struct?: WorkloadCdOperatorSpecCredentialsOutputReference | WorkloadCdOperatorSpecCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function workloadCdOperatorSpecCredentialsToHclTerraform(struct?: WorkloadCdOperatorSpecCredentialsOutputReference | WorkloadCdOperatorSpecCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WorkloadCdOperatorSpecCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorSpecCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorSpecCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._privateKey = undefined;
      this._token = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._token = value.token;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface WorkloadCdOperatorSpecWorkloadHelmOptions {
  /**
  * deploy Helm artifact with atomic flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#atomic WorkloadCdOperator#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * cleanup deployed resources when chart fails to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#clean_up_on_fail WorkloadCdOperator#clean_up_on_fail}
  */
  readonly cleanUpOnFail?: boolean | cdktf.IResolvable;
  /**
  * custom description for the release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#description WorkloadCdOperator#description}
  */
  readonly description?: string;
  /**
  * disable OpenAPI validation while deploying the YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#disable_open_api_validation WorkloadCdOperator#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * deploy YAML artifact with force flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#force WorkloadCdOperator#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * keep release history after uninstalling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#keep_history WorkloadCdOperator#keep_history}
  */
  readonly keepHistory?: boolean | cdktf.IResolvable;
  /**
  * limit Helm artifact history
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#max_history WorkloadCdOperator#max_history}
  */
  readonly maxHistory?: number;
  /**
  * deploy Helm artifact without hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#no_hooks WorkloadCdOperator#no_hooks}
  */
  readonly noHooks?: boolean | cdktf.IResolvable;
  /**
  * render sub chart notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#render_sub_chart_notes WorkloadCdOperator#render_sub_chart_notes}
  */
  readonly renderSubChartNotes?: boolean | cdktf.IResolvable;
  /**
  * reset existing helm values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#reset_values WorkloadCdOperator#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * reuse existing values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#reuse_values WorkloadCdOperator#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * pass custom helm values as key=value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#set_string WorkloadCdOperator#set_string}
  */
  readonly setString?: string[];
  /**
  * skip deploying crds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#skip_crd WorkloadCdOperator#skip_crd}
  */
  readonly skipCrd?: boolean | cdktf.IResolvable;
  /**
  * timeout for waiting for the resources to become ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#timeout WorkloadCdOperator#timeout}
  */
  readonly timeout?: string;
  /**
  * deploy Helm artifact with wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#wait WorkloadCdOperator#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * deploy Helm artifact with --wait-for-jobs flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#wait_for_jobs WorkloadCdOperator#wait_for_jobs}
  */
  readonly waitForJobs?: boolean | cdktf.IResolvable;
  /**
  * uninstall Helm artifact with --wait flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#wait_for_uninstall WorkloadCdOperator#wait_for_uninstall}
  */
  readonly waitForUninstall?: boolean | cdktf.IResolvable;
}

export function workloadCdOperatorSpecWorkloadHelmOptionsToTerraform(struct?: WorkloadCdOperatorSpecWorkloadHelmOptionsOutputReference | WorkloadCdOperatorSpecWorkloadHelmOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atomic: cdktf.booleanToTerraform(struct!.atomic),
    clean_up_on_fail: cdktf.booleanToTerraform(struct!.cleanUpOnFail),
    description: cdktf.stringToTerraform(struct!.description),
    disable_open_api_validation: cdktf.booleanToTerraform(struct!.disableOpenApiValidation),
    force: cdktf.booleanToTerraform(struct!.force),
    keep_history: cdktf.booleanToTerraform(struct!.keepHistory),
    max_history: cdktf.numberToTerraform(struct!.maxHistory),
    no_hooks: cdktf.booleanToTerraform(struct!.noHooks),
    render_sub_chart_notes: cdktf.booleanToTerraform(struct!.renderSubChartNotes),
    reset_values: cdktf.booleanToTerraform(struct!.resetValues),
    reuse_values: cdktf.booleanToTerraform(struct!.reuseValues),
    set_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setString),
    skip_crd: cdktf.booleanToTerraform(struct!.skipCrd),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    wait: cdktf.booleanToTerraform(struct!.wait),
    wait_for_jobs: cdktf.booleanToTerraform(struct!.waitForJobs),
    wait_for_uninstall: cdktf.booleanToTerraform(struct!.waitForUninstall),
  }
}


export function workloadCdOperatorSpecWorkloadHelmOptionsToHclTerraform(struct?: WorkloadCdOperatorSpecWorkloadHelmOptionsOutputReference | WorkloadCdOperatorSpecWorkloadHelmOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atomic: {
      value: cdktf.booleanToHclTerraform(struct!.atomic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clean_up_on_fail: {
      value: cdktf.booleanToHclTerraform(struct!.cleanUpOnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_open_api_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableOpenApiValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_history: {
      value: cdktf.booleanToHclTerraform(struct!.keepHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_history: {
      value: cdktf.numberToHclTerraform(struct!.maxHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.noHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    render_sub_chart_notes: {
      value: cdktf.booleanToHclTerraform(struct!.renderSubChartNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_values: {
      value: cdktf.booleanToHclTerraform(struct!.resetValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reuse_values: {
      value: cdktf.booleanToHclTerraform(struct!.reuseValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setString),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_crd: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.booleanToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.waitForJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_uninstall: {
      value: cdktf.booleanToHclTerraform(struct!.waitForUninstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorSpecWorkloadHelmOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorSpecWorkloadHelmOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atomic !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomic = this._atomic;
    }
    if (this._cleanUpOnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanUpOnFail = this._cleanUpOnFail;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableOpenApiValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOpenApiValidation = this._disableOpenApiValidation;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._keepHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHistory = this._keepHistory;
    }
    if (this._maxHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHistory = this._maxHistory;
    }
    if (this._noHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHooks = this._noHooks;
    }
    if (this._renderSubChartNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderSubChartNotes = this._renderSubChartNotes;
    }
    if (this._resetValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetValues = this._resetValues;
    }
    if (this._reuseValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseValues = this._reuseValues;
    }
    if (this._setString !== undefined) {
      hasAnyValues = true;
      internalValueResult.setString = this._setString;
    }
    if (this._skipCrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrd = this._skipCrd;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    if (this._waitForJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForJobs = this._waitForJobs;
    }
    if (this._waitForUninstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForUninstall = this._waitForUninstall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorSpecWorkloadHelmOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atomic = undefined;
      this._cleanUpOnFail = undefined;
      this._description = undefined;
      this._disableOpenApiValidation = undefined;
      this._force = undefined;
      this._keepHistory = undefined;
      this._maxHistory = undefined;
      this._noHooks = undefined;
      this._renderSubChartNotes = undefined;
      this._resetValues = undefined;
      this._reuseValues = undefined;
      this._setString = undefined;
      this._skipCrd = undefined;
      this._timeout = undefined;
      this._wait = undefined;
      this._waitForJobs = undefined;
      this._waitForUninstall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atomic = value.atomic;
      this._cleanUpOnFail = value.cleanUpOnFail;
      this._description = value.description;
      this._disableOpenApiValidation = value.disableOpenApiValidation;
      this._force = value.force;
      this._keepHistory = value.keepHistory;
      this._maxHistory = value.maxHistory;
      this._noHooks = value.noHooks;
      this._renderSubChartNotes = value.renderSubChartNotes;
      this._resetValues = value.resetValues;
      this._reuseValues = value.reuseValues;
      this._setString = value.setString;
      this._skipCrd = value.skipCrd;
      this._timeout = value.timeout;
      this._wait = value.wait;
      this._waitForJobs = value.waitForJobs;
      this._waitForUninstall = value.waitForUninstall;
    }
  }

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktf.IResolvable; 
  public get atomic() {
    return this.getBooleanAttribute('atomic');
  }
  public set atomic(value: boolean | cdktf.IResolvable) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic;
  }

  // clean_up_on_fail - computed: false, optional: true, required: false
  private _cleanUpOnFail?: boolean | cdktf.IResolvable; 
  public get cleanUpOnFail() {
    return this.getBooleanAttribute('clean_up_on_fail');
  }
  public set cleanUpOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanUpOnFail = value;
  }
  public resetCleanUpOnFail() {
    this._cleanUpOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanUpOnFailInput() {
    return this._cleanUpOnFail;
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

  // disable_open_api_validation - computed: false, optional: true, required: false
  private _disableOpenApiValidation?: boolean | cdktf.IResolvable; 
  public get disableOpenApiValidation() {
    return this.getBooleanAttribute('disable_open_api_validation');
  }
  public set disableOpenApiValidation(value: boolean | cdktf.IResolvable) {
    this._disableOpenApiValidation = value;
  }
  public resetDisableOpenApiValidation() {
    this._disableOpenApiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenApiValidationInput() {
    return this._disableOpenApiValidation;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // keep_history - computed: false, optional: true, required: false
  private _keepHistory?: boolean | cdktf.IResolvable; 
  public get keepHistory() {
    return this.getBooleanAttribute('keep_history');
  }
  public set keepHistory(value: boolean | cdktf.IResolvable) {
    this._keepHistory = value;
  }
  public resetKeepHistory() {
    this._keepHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHistoryInput() {
    return this._keepHistory;
  }

  // max_history - computed: false, optional: true, required: false
  private _maxHistory?: number; 
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }
  public set maxHistory(value: number) {
    this._maxHistory = value;
  }
  public resetMaxHistory() {
    this._maxHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHistoryInput() {
    return this._maxHistory;
  }

  // no_hooks - computed: false, optional: true, required: false
  private _noHooks?: boolean | cdktf.IResolvable; 
  public get noHooks() {
    return this.getBooleanAttribute('no_hooks');
  }
  public set noHooks(value: boolean | cdktf.IResolvable) {
    this._noHooks = value;
  }
  public resetNoHooks() {
    this._noHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHooksInput() {
    return this._noHooks;
  }

  // render_sub_chart_notes - computed: false, optional: true, required: false
  private _renderSubChartNotes?: boolean | cdktf.IResolvable; 
  public get renderSubChartNotes() {
    return this.getBooleanAttribute('render_sub_chart_notes');
  }
  public set renderSubChartNotes(value: boolean | cdktf.IResolvable) {
    this._renderSubChartNotes = value;
  }
  public resetRenderSubChartNotes() {
    this._renderSubChartNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderSubChartNotesInput() {
    return this._renderSubChartNotes;
  }

  // reset_values - computed: false, optional: true, required: false
  private _resetValues?: boolean | cdktf.IResolvable; 
  public get resetValues() {
    return this.getBooleanAttribute('reset_values');
  }
  public set resetValues(value: boolean | cdktf.IResolvable) {
    this._resetValues = value;
  }
  public resetResetValues() {
    this._resetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetValuesInput() {
    return this._resetValues;
  }

  // reuse_values - computed: false, optional: true, required: false
  private _reuseValues?: boolean | cdktf.IResolvable; 
  public get reuseValues() {
    return this.getBooleanAttribute('reuse_values');
  }
  public set reuseValues(value: boolean | cdktf.IResolvable) {
    this._reuseValues = value;
  }
  public resetReuseValues() {
    this._reuseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseValuesInput() {
    return this._reuseValues;
  }

  // set_string - computed: false, optional: true, required: false
  private _setString?: string[]; 
  public get setString() {
    return this.getListAttribute('set_string');
  }
  public set setString(value: string[]) {
    this._setString = value;
  }
  public resetSetString() {
    this._setString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStringInput() {
    return this._setString;
  }

  // skip_crd - computed: false, optional: true, required: false
  private _skipCrd?: boolean | cdktf.IResolvable; 
  public get skipCrd() {
    return this.getBooleanAttribute('skip_crd');
  }
  public set skipCrd(value: boolean | cdktf.IResolvable) {
    this._skipCrd = value;
  }
  public resetSkipCrd() {
    this._skipCrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdInput() {
    return this._skipCrd;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_for_jobs - computed: false, optional: true, required: false
  private _waitForJobs?: boolean | cdktf.IResolvable; 
  public get waitForJobs() {
    return this.getBooleanAttribute('wait_for_jobs');
  }
  public set waitForJobs(value: boolean | cdktf.IResolvable) {
    this._waitForJobs = value;
  }
  public resetWaitForJobs() {
    this._waitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForJobsInput() {
    return this._waitForJobs;
  }

  // wait_for_uninstall - computed: false, optional: true, required: false
  private _waitForUninstall?: boolean | cdktf.IResolvable; 
  public get waitForUninstall() {
    return this.getBooleanAttribute('wait_for_uninstall');
  }
  public set waitForUninstall(value: boolean | cdktf.IResolvable) {
    this._waitForUninstall = value;
  }
  public resetWaitForUninstall() {
    this._waitForUninstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForUninstallInput() {
    return this._waitForUninstall;
  }
}
export interface WorkloadCdOperatorSpecWorkload {
  /**
  * repository local path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#base_path WorkloadCdOperator#base_path}
  */
  readonly basePath?: string;
  /**
  * rafay catalog name to source chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#chart_catalog_name WorkloadCdOperator#chart_catalog_name}
  */
  readonly chartCatalogName?: string;
  /**
  * rafay git repo branch to source chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#chart_git_repo_branch WorkloadCdOperator#chart_git_repo_branch}
  */
  readonly chartGitRepoBranch?: string;
  /**
  * rafay git repo name to source chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#chart_git_repo_name WorkloadCdOperator#chart_git_repo_name}
  */
  readonly chartGitRepoName?: string;
  /**
  * rafay git repo path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#chart_git_repo_path WorkloadCdOperator#chart_git_repo_path}
  */
  readonly chartGitRepoPath?: string;
  /**
  * rafay helm repo name to source chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#chart_helm_repo_name WorkloadCdOperator#chart_helm_repo_name}
  */
  readonly chartHelmRepoName?: string;
  /**
  * cluster names ',' separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#cluster_names WorkloadCdOperator#cluster_names}
  */
  readonly clusterNames?: string;
  /**
  * workload delete action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#delete_action WorkloadCdOperator#delete_action}
  */
  readonly deleteAction?: string;
  /**
  * helm chart name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#helm_chart_name WorkloadCdOperator#helm_chart_name}
  */
  readonly helmChartName: string;
  /**
  * helm chart version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#helm_chart_version WorkloadCdOperator#helm_chart_version}
  */
  readonly helmChartVersion: string;
  /**
  * include values from base path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#include_base_value WorkloadCdOperator#include_base_value}
  */
  readonly includeBaseValue?: boolean | cdktf.IResolvable;
  /**
  * workload name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#name WorkloadCdOperator#name}
  */
  readonly name?: string;
  /**
  * project/namespace/workload name path match pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#path_match_pattern WorkloadCdOperator#path_match_pattern}
  */
  readonly pathMatchPattern: string;
  /**
  * placement labels of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#placement_labels WorkloadCdOperator#placement_labels}
  */
  readonly placementLabels?: { [key: string]: string };
  /**
  * helm_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#helm_options WorkloadCdOperator#helm_options}
  */
  readonly helmOptions?: WorkloadCdOperatorSpecWorkloadHelmOptions;
}

export function workloadCdOperatorSpecWorkloadToTerraform(struct?: WorkloadCdOperatorSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    chart_catalog_name: cdktf.stringToTerraform(struct!.chartCatalogName),
    chart_git_repo_branch: cdktf.stringToTerraform(struct!.chartGitRepoBranch),
    chart_git_repo_name: cdktf.stringToTerraform(struct!.chartGitRepoName),
    chart_git_repo_path: cdktf.stringToTerraform(struct!.chartGitRepoPath),
    chart_helm_repo_name: cdktf.stringToTerraform(struct!.chartHelmRepoName),
    cluster_names: cdktf.stringToTerraform(struct!.clusterNames),
    delete_action: cdktf.stringToTerraform(struct!.deleteAction),
    helm_chart_name: cdktf.stringToTerraform(struct!.helmChartName),
    helm_chart_version: cdktf.stringToTerraform(struct!.helmChartVersion),
    include_base_value: cdktf.booleanToTerraform(struct!.includeBaseValue),
    name: cdktf.stringToTerraform(struct!.name),
    path_match_pattern: cdktf.stringToTerraform(struct!.pathMatchPattern),
    placement_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.placementLabels),
    helm_options: workloadCdOperatorSpecWorkloadHelmOptionsToTerraform(struct!.helmOptions),
  }
}


export function workloadCdOperatorSpecWorkloadToHclTerraform(struct?: WorkloadCdOperatorSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_catalog_name: {
      value: cdktf.stringToHclTerraform(struct!.chartCatalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_git_repo_branch: {
      value: cdktf.stringToHclTerraform(struct!.chartGitRepoBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_git_repo_name: {
      value: cdktf.stringToHclTerraform(struct!.chartGitRepoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_git_repo_path: {
      value: cdktf.stringToHclTerraform(struct!.chartGitRepoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_helm_repo_name: {
      value: cdktf.stringToHclTerraform(struct!.chartHelmRepoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_names: {
      value: cdktf.stringToHclTerraform(struct!.clusterNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_action: {
      value: cdktf.stringToHclTerraform(struct!.deleteAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_chart_name: {
      value: cdktf.stringToHclTerraform(struct!.helmChartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_chart_version: {
      value: cdktf.stringToHclTerraform(struct!.helmChartVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_base_value: {
      value: cdktf.booleanToHclTerraform(struct!.includeBaseValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.pathMatchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.placementLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    helm_options: {
      value: workloadCdOperatorSpecWorkloadHelmOptionsToHclTerraform(struct!.helmOptions),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadCdOperatorSpecWorkloadHelmOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorSpecWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadCdOperatorSpecWorkload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._chartCatalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartCatalogName = this._chartCatalogName;
    }
    if (this._chartGitRepoBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartGitRepoBranch = this._chartGitRepoBranch;
    }
    if (this._chartGitRepoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartGitRepoName = this._chartGitRepoName;
    }
    if (this._chartGitRepoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartGitRepoPath = this._chartGitRepoPath;
    }
    if (this._chartHelmRepoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartHelmRepoName = this._chartHelmRepoName;
    }
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._deleteAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAction = this._deleteAction;
    }
    if (this._helmChartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmChartName = this._helmChartName;
    }
    if (this._helmChartVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmChartVersion = this._helmChartVersion;
    }
    if (this._includeBaseValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBaseValue = this._includeBaseValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathMatchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatchPattern = this._pathMatchPattern;
    }
    if (this._placementLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementLabels = this._placementLabels;
    }
    if (this._helmOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmOptions = this._helmOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorSpecWorkload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._chartCatalogName = undefined;
      this._chartGitRepoBranch = undefined;
      this._chartGitRepoName = undefined;
      this._chartGitRepoPath = undefined;
      this._chartHelmRepoName = undefined;
      this._clusterNames = undefined;
      this._deleteAction = undefined;
      this._helmChartName = undefined;
      this._helmChartVersion = undefined;
      this._includeBaseValue = undefined;
      this._name = undefined;
      this._pathMatchPattern = undefined;
      this._placementLabels = undefined;
      this._helmOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._chartCatalogName = value.chartCatalogName;
      this._chartGitRepoBranch = value.chartGitRepoBranch;
      this._chartGitRepoName = value.chartGitRepoName;
      this._chartGitRepoPath = value.chartGitRepoPath;
      this._chartHelmRepoName = value.chartHelmRepoName;
      this._clusterNames = value.clusterNames;
      this._deleteAction = value.deleteAction;
      this._helmChartName = value.helmChartName;
      this._helmChartVersion = value.helmChartVersion;
      this._includeBaseValue = value.includeBaseValue;
      this._name = value.name;
      this._pathMatchPattern = value.pathMatchPattern;
      this._placementLabels = value.placementLabels;
      this._helmOptions.internalValue = value.helmOptions;
    }
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // chart_catalog_name - computed: false, optional: true, required: false
  private _chartCatalogName?: string; 
  public get chartCatalogName() {
    return this.getStringAttribute('chart_catalog_name');
  }
  public set chartCatalogName(value: string) {
    this._chartCatalogName = value;
  }
  public resetChartCatalogName() {
    this._chartCatalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartCatalogNameInput() {
    return this._chartCatalogName;
  }

  // chart_git_repo_branch - computed: false, optional: true, required: false
  private _chartGitRepoBranch?: string; 
  public get chartGitRepoBranch() {
    return this.getStringAttribute('chart_git_repo_branch');
  }
  public set chartGitRepoBranch(value: string) {
    this._chartGitRepoBranch = value;
  }
  public resetChartGitRepoBranch() {
    this._chartGitRepoBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartGitRepoBranchInput() {
    return this._chartGitRepoBranch;
  }

  // chart_git_repo_name - computed: false, optional: true, required: false
  private _chartGitRepoName?: string; 
  public get chartGitRepoName() {
    return this.getStringAttribute('chart_git_repo_name');
  }
  public set chartGitRepoName(value: string) {
    this._chartGitRepoName = value;
  }
  public resetChartGitRepoName() {
    this._chartGitRepoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartGitRepoNameInput() {
    return this._chartGitRepoName;
  }

  // chart_git_repo_path - computed: false, optional: true, required: false
  private _chartGitRepoPath?: string; 
  public get chartGitRepoPath() {
    return this.getStringAttribute('chart_git_repo_path');
  }
  public set chartGitRepoPath(value: string) {
    this._chartGitRepoPath = value;
  }
  public resetChartGitRepoPath() {
    this._chartGitRepoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartGitRepoPathInput() {
    return this._chartGitRepoPath;
  }

  // chart_helm_repo_name - computed: false, optional: true, required: false
  private _chartHelmRepoName?: string; 
  public get chartHelmRepoName() {
    return this.getStringAttribute('chart_helm_repo_name');
  }
  public set chartHelmRepoName(value: string) {
    this._chartHelmRepoName = value;
  }
  public resetChartHelmRepoName() {
    this._chartHelmRepoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartHelmRepoNameInput() {
    return this._chartHelmRepoName;
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string; 
  public get clusterNames() {
    return this.getStringAttribute('cluster_names');
  }
  public set clusterNames(value: string) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // delete_action - computed: false, optional: true, required: false
  private _deleteAction?: string; 
  public get deleteAction() {
    return this.getStringAttribute('delete_action');
  }
  public set deleteAction(value: string) {
    this._deleteAction = value;
  }
  public resetDeleteAction() {
    this._deleteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteActionInput() {
    return this._deleteAction;
  }

  // helm_chart_name - computed: false, optional: false, required: true
  private _helmChartName?: string; 
  public get helmChartName() {
    return this.getStringAttribute('helm_chart_name');
  }
  public set helmChartName(value: string) {
    this._helmChartName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartNameInput() {
    return this._helmChartName;
  }

  // helm_chart_version - computed: false, optional: false, required: true
  private _helmChartVersion?: string; 
  public get helmChartVersion() {
    return this.getStringAttribute('helm_chart_version');
  }
  public set helmChartVersion(value: string) {
    this._helmChartVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartVersionInput() {
    return this._helmChartVersion;
  }

  // include_base_value - computed: false, optional: true, required: false
  private _includeBaseValue?: boolean | cdktf.IResolvable; 
  public get includeBaseValue() {
    return this.getBooleanAttribute('include_base_value');
  }
  public set includeBaseValue(value: boolean | cdktf.IResolvable) {
    this._includeBaseValue = value;
  }
  public resetIncludeBaseValue() {
    this._includeBaseValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBaseValueInput() {
    return this._includeBaseValue;
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

  // path_match_pattern - computed: false, optional: false, required: true
  private _pathMatchPattern?: string; 
  public get pathMatchPattern() {
    return this.getStringAttribute('path_match_pattern');
  }
  public set pathMatchPattern(value: string) {
    this._pathMatchPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchPatternInput() {
    return this._pathMatchPattern;
  }

  // placement_labels - computed: false, optional: true, required: false
  private _placementLabels?: { [key: string]: string }; 
  public get placementLabels() {
    return this.getStringMapAttribute('placement_labels');
  }
  public set placementLabels(value: { [key: string]: string }) {
    this._placementLabels = value;
  }
  public resetPlacementLabels() {
    this._placementLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementLabelsInput() {
    return this._placementLabels;
  }

  // helm_options - computed: false, optional: true, required: false
  private _helmOptions = new WorkloadCdOperatorSpecWorkloadHelmOptionsOutputReference(this, "helm_options");
  public get helmOptions() {
    return this._helmOptions;
  }
  public putHelmOptions(value: WorkloadCdOperatorSpecWorkloadHelmOptions) {
    this._helmOptions.internalValue = value;
  }
  public resetHelmOptions() {
    this._helmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmOptionsInput() {
    return this._helmOptions.internalValue;
  }
}

export class WorkloadCdOperatorSpecWorkloadList extends cdktf.ComplexList {
  public internalValue? : WorkloadCdOperatorSpecWorkload[] | cdktf.IResolvable

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
  public get(index: number): WorkloadCdOperatorSpecWorkloadOutputReference {
    return new WorkloadCdOperatorSpecWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadCdOperatorSpec {
  /**
  * repository allow insecure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#insecure WorkloadCdOperator#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * repository branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#repo_branch WorkloadCdOperator#repo_branch}
  */
  readonly repoBranch?: string;
  /**
  * repository local path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#repo_local_path WorkloadCdOperator#repo_local_path}
  */
  readonly repoLocalPath?: string;
  /**
  * repository type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#repo_type WorkloadCdOperator#repo_type}
  */
  readonly repoType?: string;
  /**
  * repository repo_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#repo_url WorkloadCdOperator#repo_url}
  */
  readonly repoUrl: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#credentials WorkloadCdOperator#credentials}
  */
  readonly credentials?: WorkloadCdOperatorSpecCredentials;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload WorkloadCdOperator#workload}
  */
  readonly workload?: WorkloadCdOperatorSpecWorkload[] | cdktf.IResolvable;
}

export function workloadCdOperatorSpecToTerraform(struct?: WorkloadCdOperatorSpecOutputReference | WorkloadCdOperatorSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    repo_branch: cdktf.stringToTerraform(struct!.repoBranch),
    repo_local_path: cdktf.stringToTerraform(struct!.repoLocalPath),
    repo_type: cdktf.stringToTerraform(struct!.repoType),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    credentials: workloadCdOperatorSpecCredentialsToTerraform(struct!.credentials),
    workload: cdktf.listMapper(workloadCdOperatorSpecWorkloadToTerraform, true)(struct!.workload),
  }
}


export function workloadCdOperatorSpecToHclTerraform(struct?: WorkloadCdOperatorSpecOutputReference | WorkloadCdOperatorSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo_branch: {
      value: cdktf.stringToHclTerraform(struct!.repoBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_local_path: {
      value: cdktf.stringToHclTerraform(struct!.repoLocalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_type: {
      value: cdktf.stringToHclTerraform(struct!.repoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: workloadCdOperatorSpecCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadCdOperatorSpecCredentialsList",
    },
    workload: {
      value: cdktf.listMapperHcl(workloadCdOperatorSpecWorkloadToHclTerraform, true)(struct!.workload),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadCdOperatorSpecWorkloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadCdOperatorSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._repoBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoBranch = this._repoBranch;
    }
    if (this._repoLocalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoLocalPath = this._repoLocalPath;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecure = undefined;
      this._repoBranch = undefined;
      this._repoLocalPath = undefined;
      this._repoType = undefined;
      this._repoUrl = undefined;
      this._credentials.internalValue = undefined;
      this._workload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecure = value.insecure;
      this._repoBranch = value.repoBranch;
      this._repoLocalPath = value.repoLocalPath;
      this._repoType = value.repoType;
      this._repoUrl = value.repoUrl;
      this._credentials.internalValue = value.credentials;
      this._workload.internalValue = value.workload;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // repo_branch - computed: false, optional: true, required: false
  private _repoBranch?: string; 
  public get repoBranch() {
    return this.getStringAttribute('repo_branch');
  }
  public set repoBranch(value: string) {
    this._repoBranch = value;
  }
  public resetRepoBranch() {
    this._repoBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoBranchInput() {
    return this._repoBranch;
  }

  // repo_local_path - computed: false, optional: true, required: false
  private _repoLocalPath?: string; 
  public get repoLocalPath() {
    return this.getStringAttribute('repo_local_path');
  }
  public set repoLocalPath(value: string) {
    this._repoLocalPath = value;
  }
  public resetRepoLocalPath() {
    this._repoLocalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoLocalPathInput() {
    return this._repoLocalPath;
  }

  // repo_type - computed: false, optional: true, required: false
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new WorkloadCdOperatorSpecCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: WorkloadCdOperatorSpecCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new WorkloadCdOperatorSpecWorkloadList(this, "workload", false);
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: WorkloadCdOperatorSpecWorkload[] | cdktf.IResolvable) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}
export interface WorkloadCdOperatorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#create WorkloadCdOperator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#delete WorkloadCdOperator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#update WorkloadCdOperator#update}
  */
  readonly update?: string;
}

export function workloadCdOperatorTimeoutsToTerraform(struct?: WorkloadCdOperatorTimeouts | cdktf.IResolvable): any {
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


export function workloadCdOperatorTimeoutsToHclTerraform(struct?: WorkloadCdOperatorTimeouts | cdktf.IResolvable): any {
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

export class WorkloadCdOperatorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkloadCdOperatorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadCdOperatorTimeouts | cdktf.IResolvable | undefined) {
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
export interface WorkloadCdOperatorWorkloadDecommissions {
  /**
  * Namespace of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#namespace WorkloadCdOperator#namespace}
  */
  readonly namespace?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#project WorkloadCdOperator#project}
  */
  readonly project?: string;
  /**
  * Workload Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_name WorkloadCdOperator#workload_name}
  */
  readonly workloadName?: string;
}

export function workloadCdOperatorWorkloadDecommissionsToTerraform(struct?: WorkloadCdOperatorWorkloadDecommissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    project: cdktf.stringToTerraform(struct!.project),
    workload_name: cdktf.stringToTerraform(struct!.workloadName),
  }
}


export function workloadCdOperatorWorkloadDecommissionsToHclTerraform(struct?: WorkloadCdOperatorWorkloadDecommissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    workload_name: {
      value: cdktf.stringToHclTerraform(struct!.workloadName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorWorkloadDecommissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadCdOperatorWorkloadDecommissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._workloadName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadName = this._workloadName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorWorkloadDecommissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._project = undefined;
      this._workloadName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._project = value.project;
      this._workloadName = value.workloadName;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project - computed: true, optional: true, required: false
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

  // workload_name - computed: true, optional: true, required: false
  private _workloadName?: string; 
  public get workloadName() {
    return this.getStringAttribute('workload_name');
  }
  public set workloadName(value: string) {
    this._workloadName = value;
  }
  public resetWorkloadName() {
    this._workloadName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNameInput() {
    return this._workloadName;
  }
}

export class WorkloadCdOperatorWorkloadDecommissionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadCdOperatorWorkloadDecommissions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadCdOperatorWorkloadDecommissionsOutputReference {
    return new WorkloadCdOperatorWorkloadDecommissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadCdOperatorWorkloadStatus {
  /**
  * deployed clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#clusters WorkloadCdOperator#clusters}
  */
  readonly clusters?: string;
  /**
  * Condition Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#condition_status WorkloadCdOperator#condition_status}
  */
  readonly conditionStatus?: number;
  /**
  * Status message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#condition_type WorkloadCdOperator#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Namespace of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#namespace WorkloadCdOperator#namespace}
  */
  readonly namespace?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#project WorkloadCdOperator#project}
  */
  readonly project?: string;
  /**
  * Status message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#reason WorkloadCdOperator#reason}
  */
  readonly reason?: string;
  /**
  * repo path of the Workload resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#repo_folder WorkloadCdOperator#repo_folder}
  */
  readonly repoFolder?: string;
  /**
  * Workload Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_name WorkloadCdOperator#workload_name}
  */
  readonly workloadName?: string;
  /**
  * Workload Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_version WorkloadCdOperator#workload_version}
  */
  readonly workloadVersion?: string;
}

export function workloadCdOperatorWorkloadStatusToTerraform(struct?: WorkloadCdOperatorWorkloadStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.stringToTerraform(struct!.clusters),
    condition_status: cdktf.numberToTerraform(struct!.conditionStatus),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    project: cdktf.stringToTerraform(struct!.project),
    reason: cdktf.stringToTerraform(struct!.reason),
    repo_folder: cdktf.stringToTerraform(struct!.repoFolder),
    workload_name: cdktf.stringToTerraform(struct!.workloadName),
    workload_version: cdktf.stringToTerraform(struct!.workloadVersion),
  }
}


export function workloadCdOperatorWorkloadStatusToHclTerraform(struct?: WorkloadCdOperatorWorkloadStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.stringToHclTerraform(struct!.clusters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_status: {
      value: cdktf.numberToHclTerraform(struct!.conditionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_folder: {
      value: cdktf.stringToHclTerraform(struct!.repoFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_name: {
      value: cdktf.stringToHclTerraform(struct!.workloadName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_version: {
      value: cdktf.stringToHclTerraform(struct!.workloadVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorWorkloadStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadCdOperatorWorkloadStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._conditionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionStatus = this._conditionStatus;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._repoFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoFolder = this._repoFolder;
    }
    if (this._workloadName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadName = this._workloadName;
    }
    if (this._workloadVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadVersion = this._workloadVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorWorkloadStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters = undefined;
      this._conditionStatus = undefined;
      this._conditionType = undefined;
      this._namespace = undefined;
      this._project = undefined;
      this._reason = undefined;
      this._repoFolder = undefined;
      this._workloadName = undefined;
      this._workloadVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters = value.clusters;
      this._conditionStatus = value.conditionStatus;
      this._conditionType = value.conditionType;
      this._namespace = value.namespace;
      this._project = value.project;
      this._reason = value.reason;
      this._repoFolder = value.repoFolder;
      this._workloadName = value.workloadName;
      this._workloadVersion = value.workloadVersion;
    }
  }

  // clusters - computed: true, optional: true, required: false
  private _clusters?: string; 
  public get clusters() {
    return this.getStringAttribute('clusters');
  }
  public set clusters(value: string) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // condition_status - computed: true, optional: true, required: false
  private _conditionStatus?: number; 
  public get conditionStatus() {
    return this.getNumberAttribute('condition_status');
  }
  public set conditionStatus(value: number) {
    this._conditionStatus = value;
  }
  public resetConditionStatus() {
    this._conditionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionStatusInput() {
    return this._conditionStatus;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project - computed: true, optional: true, required: false
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

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // repo_folder - computed: true, optional: true, required: false
  private _repoFolder?: string; 
  public get repoFolder() {
    return this.getStringAttribute('repo_folder');
  }
  public set repoFolder(value: string) {
    this._repoFolder = value;
  }
  public resetRepoFolder() {
    this._repoFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoFolderInput() {
    return this._repoFolder;
  }

  // workload_name - computed: true, optional: true, required: false
  private _workloadName?: string; 
  public get workloadName() {
    return this.getStringAttribute('workload_name');
  }
  public set workloadName(value: string) {
    this._workloadName = value;
  }
  public resetWorkloadName() {
    this._workloadName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNameInput() {
    return this._workloadName;
  }

  // workload_version - computed: true, optional: true, required: false
  private _workloadVersion?: string; 
  public get workloadVersion() {
    return this.getStringAttribute('workload_version');
  }
  public set workloadVersion(value: string) {
    this._workloadVersion = value;
  }
  public resetWorkloadVersion() {
    this._workloadVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadVersionInput() {
    return this._workloadVersion;
  }
}

export class WorkloadCdOperatorWorkloadStatusList extends cdktf.ComplexList {
  public internalValue? : WorkloadCdOperatorWorkloadStatus[] | cdktf.IResolvable

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
  public get(index: number): WorkloadCdOperatorWorkloadStatusOutputReference {
    return new WorkloadCdOperatorWorkloadStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadCdOperatorWorkloadUpserts {
  /**
  * Namespace of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#namespace WorkloadCdOperator#namespace}
  */
  readonly namespace?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#project WorkloadCdOperator#project}
  */
  readonly project?: string;
  /**
  * Workload Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#workload_name WorkloadCdOperator#workload_name}
  */
  readonly workloadName?: string;
}

export function workloadCdOperatorWorkloadUpsertsToTerraform(struct?: WorkloadCdOperatorWorkloadUpserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    project: cdktf.stringToTerraform(struct!.project),
    workload_name: cdktf.stringToTerraform(struct!.workloadName),
  }
}


export function workloadCdOperatorWorkloadUpsertsToHclTerraform(struct?: WorkloadCdOperatorWorkloadUpserts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    workload_name: {
      value: cdktf.stringToHclTerraform(struct!.workloadName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadCdOperatorWorkloadUpsertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadCdOperatorWorkloadUpserts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._workloadName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadName = this._workloadName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadCdOperatorWorkloadUpserts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._project = undefined;
      this._workloadName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._project = value.project;
      this._workloadName = value.workloadName;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project - computed: true, optional: true, required: false
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

  // workload_name - computed: true, optional: true, required: false
  private _workloadName?: string; 
  public get workloadName() {
    return this.getStringAttribute('workload_name');
  }
  public set workloadName(value: string) {
    this._workloadName = value;
  }
  public resetWorkloadName() {
    this._workloadName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadNameInput() {
    return this._workloadName;
  }
}

export class WorkloadCdOperatorWorkloadUpsertsList extends cdktf.ComplexList {
  public internalValue? : WorkloadCdOperatorWorkloadUpserts[] | cdktf.IResolvable

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
  public get(index: number): WorkloadCdOperatorWorkloadUpsertsOutputReference {
    return new WorkloadCdOperatorWorkloadUpsertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator rafay_workload_cd_operator}
*/
export class WorkloadCdOperator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_workload_cd_operator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadCdOperator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadCdOperator to import
  * @param importFromId The id of the existing WorkloadCdOperator that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadCdOperator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_workload_cd_operator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/workload_cd_operator rafay_workload_cd_operator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadCdOperatorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkloadCdOperatorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_workload_cd_operator',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.54',
        providerVersionConstraint: '1.1.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysRun = config.alwaysRun;
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
    this._workloadDecommissions.internalValue = config.workloadDecommissions;
    this._workloadStatus.internalValue = config.workloadStatus;
    this._workloadUpserts.internalValue = config.workloadUpserts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_run - computed: false, optional: true, required: false
  private _alwaysRun?: string; 
  public get alwaysRun() {
    return this.getStringAttribute('always_run');
  }
  public set alwaysRun(value: string) {
    this._alwaysRun = value;
  }
  public resetAlwaysRun() {
    this._alwaysRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRunInput() {
    return this._alwaysRun;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new WorkloadCdOperatorMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: WorkloadCdOperatorMetadata) {
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
  private _spec = new WorkloadCdOperatorSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: WorkloadCdOperatorSpec) {
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
  private _timeouts = new WorkloadCdOperatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkloadCdOperatorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_decommissions - computed: false, optional: true, required: false
  private _workloadDecommissions = new WorkloadCdOperatorWorkloadDecommissionsList(this, "workload_decommissions", false);
  public get workloadDecommissions() {
    return this._workloadDecommissions;
  }
  public putWorkloadDecommissions(value: WorkloadCdOperatorWorkloadDecommissions[] | cdktf.IResolvable) {
    this._workloadDecommissions.internalValue = value;
  }
  public resetWorkloadDecommissions() {
    this._workloadDecommissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadDecommissionsInput() {
    return this._workloadDecommissions.internalValue;
  }

  // workload_status - computed: false, optional: true, required: false
  private _workloadStatus = new WorkloadCdOperatorWorkloadStatusList(this, "workload_status", false);
  public get workloadStatus() {
    return this._workloadStatus;
  }
  public putWorkloadStatus(value: WorkloadCdOperatorWorkloadStatus[] | cdktf.IResolvable) {
    this._workloadStatus.internalValue = value;
  }
  public resetWorkloadStatus() {
    this._workloadStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadStatusInput() {
    return this._workloadStatus.internalValue;
  }

  // workload_upserts - computed: false, optional: true, required: false
  private _workloadUpserts = new WorkloadCdOperatorWorkloadUpsertsList(this, "workload_upserts", false);
  public get workloadUpserts() {
    return this._workloadUpserts;
  }
  public putWorkloadUpserts(value: WorkloadCdOperatorWorkloadUpserts[] | cdktf.IResolvable) {
    this._workloadUpserts.internalValue = value;
  }
  public resetWorkloadUpserts() {
    this._workloadUpserts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadUpsertsInput() {
    return this._workloadUpserts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_run: cdktf.stringToTerraform(this._alwaysRun),
      id: cdktf.stringToTerraform(this._id),
      metadata: workloadCdOperatorMetadataToTerraform(this._metadata.internalValue),
      spec: workloadCdOperatorSpecToTerraform(this._spec.internalValue),
      timeouts: workloadCdOperatorTimeoutsToTerraform(this._timeouts.internalValue),
      workload_decommissions: cdktf.listMapper(workloadCdOperatorWorkloadDecommissionsToTerraform, true)(this._workloadDecommissions.internalValue),
      workload_status: cdktf.listMapper(workloadCdOperatorWorkloadStatusToTerraform, true)(this._workloadStatus.internalValue),
      workload_upserts: cdktf.listMapper(workloadCdOperatorWorkloadUpsertsToTerraform, true)(this._workloadUpserts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_run: {
        value: cdktf.stringToHclTerraform(this._alwaysRun),
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
      metadata: {
        value: workloadCdOperatorMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadCdOperatorMetadataList",
      },
      spec: {
        value: workloadCdOperatorSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadCdOperatorSpecList",
      },
      timeouts: {
        value: workloadCdOperatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkloadCdOperatorTimeouts",
      },
      workload_decommissions: {
        value: cdktf.listMapperHcl(workloadCdOperatorWorkloadDecommissionsToHclTerraform, true)(this._workloadDecommissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadCdOperatorWorkloadDecommissionsList",
      },
      workload_status: {
        value: cdktf.listMapperHcl(workloadCdOperatorWorkloadStatusToHclTerraform, true)(this._workloadStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadCdOperatorWorkloadStatusList",
      },
      workload_upserts: {
        value: cdktf.listMapperHcl(workloadCdOperatorWorkloadUpsertsToHclTerraform, true)(this._workloadUpserts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadCdOperatorWorkloadUpsertsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
